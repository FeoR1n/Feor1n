import { useEffect, useRef, useState } from 'react';
import { api } from '../lib/api';
import { demoAssets } from '../lib/demoAssets';

/** 全站噪点叠加，制造工作室暗房 / 胶片颗粒感。 */
export function Grain() {
  return <div className="studio-grain" aria-hidden="true" />;
}

/** 自定义光标：中心点 + 外环，悬停可交互元素时外环放大。
 *  仅在支持 hover 的指针设备上启用。 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    setEnabled(true);
    document.documentElement.classList.add('studio-cursor-enabled');
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let ringX = x;
    let ringY = y;
    let frame = 0;

    const raf = () => {
      frame = 0;
      ringX += (x - ringX) * 0.16;
      ringY += (y - ringY) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      if (Math.abs(x - ringX) > 0.4 || Math.abs(y - ringY) > 0.4) {
        frame = requestAnimationFrame(raf);
      }
    };

    const move = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      // 只在光标移动后启动缓动循环，收敛即停，避免空闲时长期占用一帧。
      if (!frame) frame = requestAnimationFrame(raf);
    };

    const over = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest?.(
        'a, button, input, textarea, select, label, [data-cursor]',
      );
      document.documentElement.classList.toggle('studio-cursor-active', Boolean(interactive));
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', over, { passive: true });

    return () => {
      document.documentElement.classList.remove('studio-cursor-enabled');
      document.documentElement.classList.remove('studio-cursor-active');
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="studio-cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="studio-cursor-ring" aria-hidden="true" />
    </>
  );
}

/** 横向无限跑马灯：用于地点 / 年份 / 短语的滚动字幕。 */
export function Marquee({
  text,
  className = '',
  repeat = 6,
}: {
  text: string;
  className?: string;
  repeat?: number;
}) {
  return (
    <div className={`studio-marquee ${className}`.trim()} aria-hidden="true">
      <div className="studio-marquee-track">
        {Array.from({ length: repeat }, (_, index) => (
          <span key={index}>{text}</span>
        ))}
      </div>
    </div>
  );
}

type LoaderProgress = {
  value: number;
  target: number;
  label: string;
};

const sleep = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms));

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T | null> {
  return new Promise((resolve) => {
    const timer = window.setTimeout(() => resolve(null), ms);
    promise
      .then((value) => {
        window.clearTimeout(timer);
        resolve(value);
      })
      .catch(() => {
        window.clearTimeout(timer);
        resolve(null);
      });
  });
}

/** 首屏资产预加载：字体、首屏图片、第一批记录封面与相册封面。
 *  加载期间用 KPR 式细线遮罩占位，完成后向上揭开页面。 */
export function PagePreloader() {
  const [state, setState] = useState<LoaderProgress>({ value: 4, target: 8, label: 'INITIALIZING' });
  const [done, setDone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('site-loading');
    document.getElementById('boot-preloader')?.remove();
    let alive = true;
    const targetRef = { current: 8 };
    const startedAt = performance.now();

    const ticker = window.setInterval(() => {
      if (!alive) return;
      setState((prev) => {
        const next = Math.min(99, prev.value + Math.max(0.35, (targetRef.current - prev.value) * 0.075));
        return { ...prev, value: next };
      });
    }, 90);

    const preloadImage = (src: string) =>
      new Promise<void>((resolve) => {
        if (!src) {
          resolve();
          return;
        }
        let settled = false;
        const finish = () => {
          if (settled) return;
          settled = true;
          window.clearTimeout(timer);
          resolve();
        };
        const image = new Image();
        const timer = window.setTimeout(finish, 5000);
        image.onload = finish;
        image.onerror = finish;
        image.src = src;
      });

    const run = async () => {
      await withTimeout(document.fonts.ready, 3000);
      if (!alive) return;
      targetRef.current = 26;
      setState((prev) => ({ ...prev, label: 'FONTS READY' }));

      const [moments, albums] = await Promise.all([
        withTimeout(api.moments(1), 6000),
        withTimeout(api.albums(), 6000),
      ]);
      if (!alive) return;
      targetRef.current = 42;
      setState((prev) => ({ ...prev, label: 'BUILDING THE ARCHIVE' }));

      const hasRealCovers = [
        ...(moments?.items ?? []).flatMap((item) => [item.coverUrl, item.coverThumb]),
        ...(albums?.albums ?? []).map((album) => album.cover ?? ''),
      ].some(Boolean);
      const urls = [
        ...(moments?.items ?? []).flatMap((item) => [item.coverUrl, item.coverThumb]),
        ...(albums?.albums ?? []).map((album) => album.cover ?? ''),
        // 占位图只在没有真实封面时才会出现在首屏，正好按需预载。
        ...(hasRealCovers ? [] : demoAssets.photos),
        demoAssets.backgrounds[0],
        demoAssets.centralAxis,
        demoAssets.particleOverlay,
      ].filter((url): url is string => Boolean(url));
      const uniqueUrls = Array.from(new Set(urls)).slice(0, 12);

      let loaded = 0;
      await Promise.all(
        uniqueUrls.map((src) =>
          preloadImage(src).then(() => {
            loaded += 1;
            targetRef.current = 42 + Math.round((loaded / Math.max(uniqueUrls.length, 1)) * 48);
          }),
        ),
      );

      if (!alive) return;
      targetRef.current = 100;
      setState((prev) => ({ ...prev, label: 'ENTERING THE STORY' }));
      const minimum = 1350;
      const elapsed = performance.now() - startedAt;
      if (elapsed < minimum) await sleep(minimum - elapsed);
      if (!alive) return;
      setState((prev) => ({ ...prev, value: 100, target: 100, label: 'READY' }));
      await sleep(320);
      if (!alive) return;
      setDone(true);
      root.classList.remove('site-loading');
      await sleep(820);
      if (alive) setRemoved(true);
    };

    void run();

    return () => {
      alive = false;
      window.clearInterval(ticker);
      root.classList.remove('site-loading');
    };
  }, []);

  if (removed) return null;

  const percent = Math.round(state.value);
  const url = typeof window === 'undefined' ? '' : window.location.href.toUpperCase();

  return (
    <div className={`site-preloader${done ? ' is-done' : ''}`} role="status" aria-live="polite">
      <div className="site-preloader-track" aria-hidden="true">
        <span style={{ transform: `scaleX(${state.value / 100})` }} />
      </div>
      <div className="site-preloader-row">
        <span className="site-preloader-left">
          <span className="site-preloader-arrow" aria-hidden="true">↳</span>
          LOADING — {String(percent).padStart(3, '0')}%
        </span>
        <span className="site-preloader-label">{state.label}</span>
        <span className="site-preloader-url">{url}</span>
      </div>
    </div>
  );
}
