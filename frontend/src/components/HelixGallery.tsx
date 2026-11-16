import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, X } from 'lucide-react';
import { formatDate } from '../lib/time';
import { demoAssets } from '../lib/demoAssets';
import type { MemoryPanel } from '../lib/demoAssets';

const hash01 = (value: number) => {
  const noise = Math.sin(value * 12.9898 + 78.233) * 43758.5453;
  return noise - Math.floor(noise);
};

/** 稳定伪随机：同一张照片在任何一次渲染里都保持相同的半径、宽度和倾斜。 */
const stableVariation = (index: number, seed: number) =>
  hash01((index + 1) * 7.13 + seed * 3.71) * 2 - 1;

// 滚动 → 镜头进度：起步慢、中段匀速、末尾减速，避免 100% 时机械地停死。
const HEAD = 0.06;
const TAIL = 0.16;
const HEAD_SHARE = 0.02;
const TAIL_SHARE = 0.06;

const mapProgress = (progress: number) => {
  if (progress <= HEAD) return (progress / HEAD) * HEAD_SHARE;
  if (progress <= 1 - TAIL) {
    const k = (progress - HEAD) / (1 - TAIL - HEAD);
    return HEAD_SHARE + k * (1 - HEAD_SHARE - TAIL_SHARE);
  }
  const k = (progress - (1 - TAIL)) / TAIL;
  return 1 - TAIL_SHARE + (1 - Math.pow(1 - k, 2)) * TAIL_SHARE;
};

const unmapProgress = (mapped: number) => {
  if (mapped <= HEAD_SHARE) return (mapped / HEAD_SHARE) * HEAD;
  if (mapped <= 1 - TAIL_SHARE) {
    const k = (mapped - HEAD_SHARE) / (1 - HEAD_SHARE - TAIL_SHARE);
    return HEAD + k * (1 - TAIL - HEAD);
  }
  const k = 1 - Math.sqrt(Math.max(0, 1 - (mapped - (1 - TAIL_SHARE)) / TAIL_SHARE));
  return 1 - TAIL + k * TAIL;
};

const readDebugProgress = () => {
  if (typeof window === 'undefined') return null;
  const raw = new URLSearchParams(window.location.search).get('helix-debug');
  if (raw === null) return null;
  const value = Number(raw);
  if (!Number.isFinite(value)) return null;
  return Math.min(1, Math.max(0, value));
};

export default function HelixGallery({ panels }: { panels: MemoryPanel[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const rigRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const progressRef = useRef<HTMLSpanElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const axisRef = useRef<HTMLDivElement>(null);
  const ribbonRef = useRef<HTMLImageElement>(null);
  const flowRef = useRef<HTMLSpanElement>(null);
  const orbOneRef = useRef<HTMLImageElement>(null);
  const orbTwoRef = useRef<HTMLImageElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [failed, setFailed] = useState<Set<string>>(() => new Set());
  const [debug] = useState(readDebugProgress);
  const count = panels.length;

  useEffect(() => {
    const section = sectionRef.current;
    const rig = rigRef.current;
    if (!section || !rig || count === 0) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    let current = -1;
    let step = 138;

    // 卡片的世界坐标只在布局时写一次；每帧只移动整个镜头。
    const layout = () => {
      const mobile = window.innerWidth < 760;
      const baseRadius = mobile ? Math.min(window.innerWidth * 0.42, 190) : Math.min(window.innerWidth * 0.26, 420);
      const angularStep = mobile ? 0.76 : 0.66;
      const theta0 = 0.55;
      const baseWidth = mobile
        ? Math.min(window.innerWidth * 0.52, 236)
        : Math.min(Math.max(window.innerWidth * 0.2, 242), 356);
      step = mobile ? 96 : 138;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const theta = theta0 + index * angularStep;
        const radius = baseRadius * (1 + stableVariation(index, 1) * 0.16);
        const x = Math.cos(theta) * radius;
        const z = Math.sin(theta) * radius;
        const y = index * step + stableVariation(index, 5) * step * 0.06;
        const yaw = stableVariation(index, 9) * 0.11;
        const roll = stableVariation(index, 13) * 2.4;
        const width = baseWidth * (1 + stableVariation(index, 17) * 0.12);
        const aspect = index % 3 === 1 ? 0.8 : 0.75;
        const depth = (z + radius) / (radius * 2);

        card.style.width = `${width.toFixed(1)}px`;
        card.style.setProperty('--helix-aspect', aspect.toFixed(2));
        card.style.transform =
          `translate3d(-50%, -50%, 0) ` +
          `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, ${z.toFixed(1)}px) ` +
          `rotateY(${yaw.toFixed(4)}rad) rotateZ(${roll.toFixed(2)}deg)`;
        card.style.opacity = (0.36 + depth * 0.58).toFixed(3);
        card.style.setProperty('--helix-brightness', (0.44 + depth * 0.5).toFixed(3));
        card.style.setProperty('--helix-saturate', (0.6 + depth * 0.3).toFixed(3));
      });
    };

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, section.offsetHeight - window.innerHeight);
      const scrolled = Math.min(1, Math.max(0, -rect.top / travel));
      const progress = debug ?? mapProgress(scrolled);
      const mobile = window.innerWidth < 760;
      const camIndex = progress * Math.max(0, count - 1);
      const camX = Math.sin(progress * Math.PI * 1.35) * (mobile ? 10 : 26);
      const lead = mobile ? -22 : -38;
      const active = Math.round(camIndex);
      const viewportHeight = window.innerHeight;

      rig.style.transform =
        `translate3d(${camX.toFixed(2)}px, ${(lead - camIndex * step).toFixed(2)}px, 0)`;

      if (axisRef.current) {
        axisRef.current.style.opacity = (0.38 + Math.sin(Math.PI * scrolled) * 0.44).toFixed(3);
      }
      if (ribbonRef.current) {
        ribbonRef.current.style.transform = `translateX(-50%) translateY(${((scrolled - 0.5) * 120).toFixed(1)}px)`;
      }
      if (flowRef.current) {
        flowRef.current.style.transform =
          `translate3d(-50%, ${((0.5 - scrolled) * viewportHeight * 0.9).toFixed(1)}px, 0)`;
      }
      if (orbOneRef.current) {
        orbOneRef.current.style.transform = `translate3d(0, ${(-scrolled * 130).toFixed(1)}px, 0)`;
      }
      if (orbTwoRef.current) {
        orbTwoRef.current.style.transform = `translate3d(0, ${(-scrolled * 84).toFixed(1)}px, 0)`;
      }
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${scrolled.toFixed(4)})`;
      }
      if (countRef.current) {
        countRef.current.textContent = `${String(active + 1).padStart(2, '0')} / ${String(count).padStart(2, '0')}`;
      }

      if (active !== current) {
        cardRefs.current[current]?.classList.toggle('is-current', false);
        cardRefs.current[active]?.classList.toggle('is-current', true);
        current = active;
        dotsRef.current
          ?.querySelectorAll<HTMLElement>('.helix-dot')
          .forEach((dot, index) => dot.classList.toggle('active', index === active));
      }
    };

    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      layout();
      request();
    };

    layout();
    update();
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', request);
      window.removeEventListener('resize', onResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [count, debug]);

  useEffect(() => {
    if (selected === null) return;
    const previous = lastTriggerRef.current;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [selected]);

  if (count === 0) {
    return (
      <section className="helix-empty" aria-label="照片长廊">
        <p className="kicker">OUR MOMENTS</p>
        <h2>照片长廊正在等待第一束光。</h2>
        <p>上传第一张照片后，它会从这里进入你们的世界。</p>
        <Link to="/gallery" data-cursor>前往相册</Link>
      </section>
    );
  }

  const selectedPanel = selected === null ? null : panels[selected];

  const jumpTo = (index: number) => {
    const section = sectionRef.current;
    if (!section || count < 2) return;
    const travel = Math.max(0, section.offsetHeight - window.innerHeight);
    const target = unmapProgress(index / (count - 1));
    const top = window.scrollY + section.getBoundingClientRect().top + target * travel;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="helix-section"
      style={{
        '--helix-height-desktop': `${count * 72}svh`,
        '--helix-height-mobile': `${count * 80}svh`,
      } as CSSProperties}
      aria-labelledby="helix-title"
    >
      <div className="helix-sticky">
        <div className="helix-header">
          <div>
            <p className="kicker">OUR MOMENTS</p>
            <h2 id="helix-title">穿过我们留下的光。</h2>
          </div>
          <p className="helix-intro">
            向下滚动，镜头会沿着照片的时间轴缓慢推进。每一张都可以停下、打开，再继续。
          </p>
          <span className="helix-count" ref={countRef}>01 / {String(count).padStart(2, '0')}</span>
        </div>

        <div className="helix-viewport">
          <div className="helix-axis" aria-hidden="true" ref={axisRef}>
            <img className="helix-axis-ribbon" src={demoAssets.centralAxis} alt="" ref={ribbonRef} />
            <span className="helix-axis-flow" ref={flowRef} />
          </div>

          <div className="helix-particles" aria-hidden="true">
            <img className="helix-particle-overlay" src={demoAssets.particleOverlay} alt="" />
            <img
              className="helix-particle-orb helix-particle-orb--one"
              src={demoAssets.particles[0]}
              alt=""
              ref={orbOneRef}
            />
            <img
              className="helix-particle-orb helix-particle-orb--two"
              src={demoAssets.particles[2]}
              alt=""
              ref={orbTwoRef}
            />
          </div>

          <div className="helix-rig" ref={rigRef}>
            <div className="helix-world">
              {panels.map((panel, index) => (
                <button
                  key={panel.id}
                  ref={(node) => {
                    cardRefs.current[index] = node;
                  }}
                  type="button"
                  className="helix-card"
                  aria-label={`查看照片：${panel.title}`}
                  onClick={(event) => {
                    lastTriggerRef.current = event.currentTarget;
                    setSelected(index);
                  }}
                >
                  <span className="helix-image-wrap">
                    {failed.has(panel.id) ? (
                      <span className="helix-image-fallback" aria-hidden="true" />
                    ) : (
                      <img
                        src={panel.thumb || panel.src}
                        alt=""
                        loading={index < 2 ? 'eager' : 'lazy'}
                        decoding="async"
                        onError={() => setFailed((prev) => new Set(prev).add(panel.id))}
                      />
                    )}
                    <span className="helix-card-shade" aria-hidden="true" />
                    {panel.isPlaceholder ? <span className="helix-demo-badge">DEMO</span> : null}
                  </span>
                  <span className="helix-card-meta">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <span>{panel.date ? formatDate(panel.date) : panel.location || 'PLACEHOLDER'}</span>
                  </span>
                  <span className="helix-card-title">{panel.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="helix-vignette" aria-hidden="true" />

          {debug !== null ? (
            <span className="helix-debug-value" aria-hidden="true">
              HELIX DEBUG {Math.round(debug * 100)}%
            </span>
          ) : null}

          <p className="helix-scroll-hint" aria-hidden="true">SCROLL TO MOVE THROUGH MEMORY</p>
        </div>

        <div className="helix-dots" ref={dotsRef} aria-label="照片章节">
          {panels.map((panel, index) => (
            <button
              key={panel.id}
              type="button"
              className={`helix-dot${index === 0 ? ' active' : ''}`}
              aria-label={`跳到第 ${index + 1} 张：${panel.title}`}
              onClick={() => jumpTo(index)}
            />
          ))}
        </div>
        <div className="helix-progress" aria-hidden="true">
          <span ref={progressRef} />
        </div>
      </div>

      {selectedPanel ? (
        <div className="photo-overlay" role="dialog" aria-modal="true" aria-labelledby="photo-overlay-title" onClick={() => setSelected(null)}>
          <div className="photo-overlay-panel" onClick={(event) => event.stopPropagation()}>
            <button ref={closeRef} type="button" className="photo-overlay-close" aria-label="关闭照片" onClick={() => setSelected(null)}>
              <X />
            </button>
            <div className="photo-overlay-media">
              {failed.has(selectedPanel.id) ? (
                <span className="helix-image-fallback" aria-hidden="true" />
              ) : (
                <img src={selectedPanel.src || selectedPanel.thumb} alt={selectedPanel.title} />
              )}
            </div>
            <div className="photo-overlay-copy">
              <p className="kicker">{selectedPanel.date ? formatDate(selectedPanel.date) : 'VISUAL PLACEHOLDER'}</p>
              <h3 id="photo-overlay-title">{selectedPanel.title}</h3>
              {selectedPanel.excerpt ? <p>{selectedPanel.excerpt}</p> : null}
              {selectedPanel.isPlaceholder ? <p className="photo-overlay-placeholder">DEMO ASSET · 不代表真实回忆</p> : null}
              <div className="photo-overlay-meta">
                {selectedPanel.location ? <span>{selectedPanel.location}</span> : null}
                {selectedPanel.loveDay && selectedPanel.loveDay > 0 ? <span>DAY {selectedPanel.loveDay}</span> : null}
              </div>
              {selectedPanel.href ? (
                <Link to={selectedPanel.href} data-cursor>
                  打开完整回忆 <ArrowUpRight />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
