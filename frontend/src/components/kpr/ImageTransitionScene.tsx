/* KPR-style image handoff: one scrubbed timeline drives enter → fullscreen → card → exit. */
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { MemoryPanel } from '../../lib/demoAssets';
import { card, clamp, deep, enter, far, fromState, full, fullDrift } from './geometry';
import './kpr.css';

gsap.registerPlugin(ScrollTrigger);

// 移动端地址栏收放会反复改变视口高度，忽略它可避免刷新风暴；
// 宽度变化（转屏）仍会正常 refresh。
ScrollTrigger.config({ ignoreMobileResize: true });

type Props = {
  panels: MemoryPanel[];
  debug?: boolean;
};

export default function ImageTransitionScene({ panels, debug = false }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRefs = useRef<Array<HTMLDivElement | null>>([]);
  const captionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const hudIndexRef = useRef<HTMLSpanElement>(null);
  const hudTrackRef = useRef<HTMLSpanElement>(null);

  const items = panels.slice(0, 3);
  const count = items.length;
  // 接口数据回来后面板 id 变化会让 React 重挂载帧节点；时间轴必须随之重建，
  // 否则 GSAP 还在驱动已经脱离文档的旧节点，新节点会保持原始尺寸。
  const frameKey = items.map((panel) => panel.id).join('|');

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const world = worldRef.current;
    if (!section || !pin || !world || count === 0) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const frames = frameRefs.current.slice(0, count);
    if (frames.some((node) => !node)) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${Math.round(window.innerHeight * 2.8)}`,
          pin,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 0.55,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            if (hudTrackRef.current) hudTrackRef.current.style.transform = `scaleX(${p.toFixed(4)})`;
            const index = p < 0.36 ? 0 : p < 0.72 ? 1 : 2;
            if (hudIndexRef.current) {
              hudIndexRef.current.textContent = `${String(Math.min(index, count - 1) + 1).padStart(2, '0')} / ${String(count).padStart(2, '0')}`;
            }
            captionRefs.current.forEach((node, i) => {
              if (node) node.setAttribute('aria-hidden', i === index ? 'false' : 'true');
            });
          },
        },
      });

      // 每个画面先落到自己的初始状态；时间轴总长 100 个时间单位。
      tl.set(frames[0], fromState(enter), 0);
      if (frames[1]) tl.set(frames[1], fromState(enter), 0);
      if (frames[2]) tl.set(frames[2], fromState(deep), 0);
      captionRefs.current.forEach((node) => {
        if (node) gsap.set(node, { autoAlpha: 0, y: 24 });
      });

      // A：进入 → 全屏 → 停留 → 缩成右侧卡片 → 退到远景
      tl.to(frames[0], { ...fromState(full), duration: 18, ease: 'power2.out' }, 0);
      tl.to(frames[0], { ...fromState(() => fullDrift(26)), duration: 14 }, 18);
      tl.to(frames[0], { ...fromState(() => card(1)), duration: 20, ease: 'power2.inOut' }, 32);
      tl.to(frames[0], { ...fromState(() => far(1)), duration: 22, ease: 'power1.inOut' }, 52);

      // B：从下方进入 → 全屏 → 停留 → 缩成左侧卡片 → 退到远景
      if (frames[1]) {
        tl.to(frames[1], { ...fromState(full), duration: 16, ease: 'power2.out' }, 36);
        tl.to(frames[1], { ...fromState(() => fullDrift(-22)), duration: 14 }, 52);
        tl.to(frames[1], { ...fromState(() => card(-1)), duration: 18, ease: 'power2.inOut' }, 66);
        tl.to(frames[1], { ...fromState(() => far(-1)), duration: 20, ease: 'power1.inOut' }, 82);
      }

      // C：从远景进入 → 成为主视觉并保持
      if (frames[2]) {
        tl.to(frames[2], { ...fromState(full), duration: 16, ease: 'power2.out' }, 68);
        tl.to(frames[2], { ...fromState(() => fullDrift(18)), duration: 16 }, 84);
      }

      // 文字有自己的进出节奏，不永久悬浮在图片上。
      const cap = captionRefs.current;
      const captionIn = (index: number, at: number, duration = 7) => {
        if (cap[index]) tl.to(cap[index], { autoAlpha: 1, y: 0, duration, ease: 'power2.out' }, at);
      };
      const captionOut = (index: number, at: number, duration = 6) => {
        if (cap[index]) tl.to(cap[index], { autoAlpha: 0, y: -18, duration, ease: 'power2.in' }, at);
      };
      captionIn(0, 18);
      captionOut(0, 31);
      captionIn(1, 52);
      captionOut(1, 66);
      captionIn(2, 82, 9);

      // 镜头：整场只由一个层缓慢平移，避免每张图各自抖动。
      tl.fromTo(
        world,
        { x: 0, y: 0, rotationY: 0 },
        { x: -38, y: 14, rotationY: 1.6, duration: 100, ease: 'none' },
        0,
      );

      if (debug) {
        (window as unknown as Record<string, unknown>).__kpr = {
          timeline: tl,
          trigger: tl.scrollTrigger,
          setProgress: (p: number) => {
            const st = tl.scrollTrigger;
            if (!st) return;
            window.scrollTo(0, st.start + (st.end - st.start) * clamp(p, 0, 1));
            tl.progress(clamp(p, 0, 1));
          },
        };
      }

      // 指针视差写在独立层上，不和时间轴抢同一组 transform。
      const parallax = parallaxRef.current;
      if (parallax && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        const xTo = gsap.quickTo(parallax, 'x', { duration: 0.9, ease: 'power3.out' });
        const yTo = gsap.quickTo(parallax, 'y', { duration: 0.9, ease: 'power3.out' });
        const onMove = (event: PointerEvent) => {
          xTo((event.clientX / window.innerWidth - 0.5) * 20);
          yTo((event.clientY / window.innerHeight - 0.5) * 14);
        };
        window.addEventListener('pointermove', onMove, { passive: true });
        return () => window.removeEventListener('pointermove', onMove);
      }
      return undefined;
    }, section);

    const onFonts = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(onFonts).catch(() => {});

    return () => {
      if (debug) delete (window as unknown as Record<string, unknown>).__kpr;
      ctx.revert();
    };
  }, [count, debug, frameKey]);

  // 空间尘埃：一个 canvas、一次批量绘制，进入视口才跑。
  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const width = window.innerWidth;
    const density = width < 768 ? 14 : width < 1024 ? 26 : 46;
    let raf = 0;
    let running = false;
    let last = 0;

    const parts = Array.from({ length: density }, (_, i) => {
      const seed = Math.sin((i + 1) * 12.9898) * 43758.5453;
      const r = seed - Math.floor(seed);
      return {
        x: r,
        y: (seed * 1.7) % 1,
        r: 0.6 + r * 1.5,
        speed: 0.006 + r * 0.014,
        alpha: 0.12 + r * 0.3,
      };
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(canvas.clientWidth * dpr);
      canvas.height = Math.round(canvas.clientHeight * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const tick = (now: number) => {
      if (!running) return;
      const dt = last ? Math.min(64, now - last) : 16;
      last = now;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      context.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.y -= (p.speed * dt) / 1000;
        if (p.y < -0.02) p.y = 1.02;
        context.beginPath();
        context.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        context.fillStyle = `rgba(201, 205, 216, ${p.alpha})`;
        context.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      last = 0;
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) start();
        else stop();
      },
      { threshold: 0.01 },
    );
    io.observe(section);

    const onVisibility = () => {
      if (document.visibilityState === 'hidden') stop();
      else if (io.takeRecords(), section.getBoundingClientRect().bottom > 0) start();
    };
    const onResize = () => {
      resize();
      last = 0;
    };
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="kpr-scene is-live" aria-label="照片空间转场">
      <div ref={pinRef} className="kpr-pin">
        <div className="kpr-topbar" aria-hidden="true">
          <span>FEOR1N / SPATIAL REEL</span>
          <span>{String(count).padStart(2, '0')} FRAMES</span>
        </div>

        <div className="kpr-camera" aria-hidden="true">
          <div ref={worldRef} className="kpr-world">
            <div ref={parallaxRef} className="kpr-parallax">
              {items.map((panel, index) => (
                <div
                  key={panel.id}
                  className="kpr-frame"
                  ref={(node) => {
                    frameRefs.current[index] = node;
                  }}
                >
                  <img
                    src={panel.thumb || panel.src}
                    alt={panel.title}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    draggable={false}
                  />
                  <span className="kpr-edge" />
                  {panel.isPlaceholder ? <span className="kpr-demo-badge">DEMO</span> : null}
                </div>
              ))}
            </div>
          </div>
        </div>

        <canvas ref={canvasRef} className="kpr-dust" aria-hidden="true" />

        <div className="kpr-captions">
          {items.map((panel, index) => (
            <div
              key={panel.id}
              className="kpr-caption"
              ref={(node) => {
                captionRefs.current[index] = node;
              }}
              aria-hidden={index !== 0}
            >
              <p className="kpr-caption-kicker">CHAPTER {String(index + 1).padStart(2, '0')}</p>
              <h2>{panel.title}</h2>
              {panel.excerpt ? <p>{panel.excerpt}</p> : null}
            </div>
          ))}
        </div>

        <div className="kpr-hud" aria-hidden="true">
          <span className="kpr-hud-index" ref={hudIndexRef}>
            01 / {String(count).padStart(2, '0')}
          </span>
          <span className="kpr-hud-track">
            <span ref={hudTrackRef} />
          </span>
          <span className="kpr-hud-hint">SCROLL TO HAND OFF</span>
        </div>
      </div>
    </section>
  );
}
