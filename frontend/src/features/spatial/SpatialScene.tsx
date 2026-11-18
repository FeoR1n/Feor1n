// Memory Field 的 React 外壳：负责挂载容器、传入数据、初始化/销毁 Three.js 引擎，
// 并用 GSAP ScrollTrigger 固定舞台、把滚动进度写进引擎。DOM 侧同时提供语义化照片链接，
// 保证键盘与读屏用户不依赖 Canvas 也能进入每一段回忆。

import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SpatialSceneEngine } from './SpatialSceneEngine';
import type { SpatialPhoto, SpatialQuality } from './spatial.types';
import { useReducedMotion } from '../motion/useReducedMotion';
import './spatial.css';

gsap.registerPlugin(ScrollTrigger);

function detectQuality(): SpatialQuality {
  const width = window.innerWidth;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
  const cores = navigator.hardwareConcurrency ?? 4;
  if (width < 700 || memory <= 4 || cores <= 4) return 'low';
  if (width < 1180 || memory <= 6) return 'medium';
  return 'high';
}

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(window.WebGLRenderingContext && (canvas.getContext('webgl2') || canvas.getContext('webgl')));
  } catch {
    return false;
  }
}

interface SpatialSceneProps {
  photos: SpatialPhoto[];
  sectionId: string;
}

export default function SpatialScene({ photos, sectionId }: SpatialSceneProps) {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<SpatialSceneEngine | null>(null);
  const reduced = useReducedMotion();
  const [mode, setMode] = useState<'pending' | 'webgl' | 'fallback'>('pending');
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState<SpatialPhoto | null>(null);

  const quality = useMemo(detectQuality, []);
  const activePhoto = photos[activeIndex] ?? photos[0] ?? null;
  const photoKey = photos.map((photo) => photo.id).join('|');

  // 异步初始化 WebGL：首屏 DOM 文本先出现，3D 随后接管
  useEffect(() => {
    if (photos.length === 0) return;
    if (reduced || !supportsWebGL()) {
      setMode('fallback');
      return;
    }
    const stage = stageRef.current;
    if (!stage) return;

    let engine: SpatialSceneEngine | null = null;
    let cancelled = false;
    let timer = 0;
    const frame = window.requestAnimationFrame(() => {
      timer = window.setTimeout(() => {
        if (cancelled) return;
        try {
          engine = new SpatialSceneEngine({
            container: stage,
            photos,
            quality,
            onSelect: (photo) => {
              if (photo.href) navigate(photo.href);
            },
            onHover: (photo) => setHovered(photo),
            onFrame: (index) => setActiveIndex(index),
            onReady: () => setMode('webgl'),
          });
          engineRef.current = engine;
        } catch {
          setMode('fallback');
        }
      }, 140);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      engineRef.current = null;
      engine?.dispose();
      engine = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photoKey, reduced, quality]);

  // 场景可见性：离开视口时暂停 RAF
  useEffect(() => {
    if (mode !== 'webgl') return;
    const stage = stageRef.current;
    const engine = engineRef.current;
    if (!stage || !engine) return;
    const observer = new IntersectionObserver(
      ([entry]) => engine.setVisible(entry.isIntersecting),
      { rootMargin: '140px 0px' },
    );
    observer.observe(stage);
    return () => observer.disconnect();
  }, [mode]);

  // 滚动驱动：舞台由 CSS sticky 固定，ScrollTrigger 只负责上报进度
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || mode !== 'webgl' || reduced) return;
    const engine = engineRef.current;
    if (!engine) return;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      anticipatePin: 1,
      onUpdate: (self) => engine.setProgress(self.progress),
      onRefresh: (self) => engine.setProgress(self.progress),
    });
    return () => trigger.kill();
  }, [mode, reduced]);

  const positionLabel = `${String(activeIndex + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`;

  if (photos.length === 0) {
    return (
      <section className="spatial-empty" aria-labelledby={`${sectionId}-empty`}>
        <div className="shell spatial-empty__inner">
          <p className="eyebrow">02 / MEMORY FIELD</p>
          <h2 id={`${sectionId}-empty`} className="display-lg">
            空间还没有亮起来。
          </h2>
          <p>
            第一张真实照片进入相册后，这里会长出一条可以穿行的记忆走廊。现在先去写下第一段故事，或者打开相册看看。
          </p>
          <div className="spatial-empty__links">
            <Link to="/gallery">
              前往相册 <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link to="/moments">
              翻阅点滴 <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const isStatic = mode === 'fallback' || reduced;

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className={`spatial-section${isStatic ? ' is-static' : ''}`}
      style={{ '--spatial-count': photos.length } as React.CSSProperties}
      aria-labelledby={`${sectionId}-title`}
    >
      <div className="spatial-pin">
        <div ref={stageRef} className="spatial-stage">
          {mode === 'fallback' ? (
            <div className="spatial-fallback" aria-hidden="true">
              {photos.slice(0, 6).map((photo, index) => (
                <div key={photo.id} className={`spatial-fallback__card spatial-fallback__card--${index % 6}`}>
                  <img src={photo.thumbnailUrl || photo.imageUrl} alt="" loading={index < 2 ? 'eager' : 'lazy'} />
                  {photo.dateLabel ? <span>{photo.dateLabel}</span> : null}
                </div>
              ))}
            </div>
          ) : null}
          <div className="spatial-vignette" aria-hidden="true" />
        </div>

        <div className="spatial-hud">
          <div className="spatial-hud__head">
            <p className="eyebrow">02 / MEMORY FIELD</p>
            <h2 id={`${sectionId}-title`} className="display-md spatial-hud__title">
              穿过我们留下的光。
            </h2>
          </div>

          <div className="spatial-hud__caption" aria-live="polite">
            {(hovered ?? activePhoto) ? (
              <>
                <span className="meta">{(hovered ?? activePhoto)?.dateLabel ?? 'MEMORY'}</span>
                <strong>{(hovered ?? activePhoto)?.title}</strong>
              </>
            ) : null}
          </div>

          <div className="spatial-hud__foot">
            <span className="spatial-hud__count">{positionLabel}</span>
            <span className="spatial-hud__hint">
              {isStatic ? '静态照片空间' : '向下滚动，穿过空间'}
            </span>
            <a href="#home-story" className="spatial-hud__skip">
              跳过空间 <ArrowDownRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="spatial-progress" aria-hidden="true">
          <span
            style={{
              transform: `scaleX(${isStatic ? 1 : photos.length <= 1 ? 0 : activeIndex / (photos.length - 1)})`,
            }}
          />
        </div>

        {/* 语义化替代：所有照片都可被键盘与读屏访问 */}
        <nav className="spatial-accessible" aria-label="记忆空间中的照片">
          <ul>
            {photos.map((photo) => (
              <li key={photo.id}>
                <Link to={photo.href ?? '/moments'}>{photo.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
