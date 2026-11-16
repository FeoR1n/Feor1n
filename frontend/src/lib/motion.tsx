// 动效系统：Lenis 平滑滚动、滚动渐入、图片视差、阅读进度。

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

let lenis: Lenis | null = null;
/** v2 规范优先浏览器原生滚动；保留 Lenis 代码以便后续按设备能力启用。 */
const ENABLE_LENIS = false;

export function scrollToTop() {
  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
  } else {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}

export function useSmoothScroll() {
  useEffect(() => {
    if (!ENABLE_LENIS) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
    let frame = 0;
    const raf = (time: number) => {
      lenis?.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
      lenis = null;
    };
  }, []);
}

/** 路由变化后重新扫描并观察带 [data-reveal] 的元素。
 *  注意：被 clip-path 完全裁掉的元素（.mask-reveal）在 Chrome 里会被
 *  IntersectionObserver 判为不可见，形成死锁——所以只观察不裁剪的
 *  [data-reveal] 元素，元素进入视口后连同它内部的 .mask-reveal 与
 *  img[data-reveal-img] 一起解锁。
 *  页面内容大多是异步取数后才挂载的，单次定时扫描会与加载竞态，
 *  因此挂一个 MutationObserver，新增的 reveal 元素随时补观察。 */
export function RevealRunner({ deps }: { deps: unknown[] }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            entry.target
              .querySelectorAll<HTMLElement>('.mask-reveal, img[data-reveal-img]')
              .forEach((child) => child.classList.add('is-visible'));
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    const observeAdded = (node: Node) => {
      if (!(node instanceof HTMLElement)) return;
      if (node.matches('[data-reveal]:not(.is-visible)')) {
        observer.observe(node);
      }
      node.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)')
        .forEach((child) => observer.observe(child));
    };

    document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)')
      .forEach((target) => observer.observe(target));

    const mutation = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach(observeAdded);
      }
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutation?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return null;
}

/** 图片镜头运动：元素从视口外进入时轻微放大，经过中心后逐渐缩小退出。
 *  只写 CSS 变量，不覆盖现有视差 transform。 */
export function ImageMotionRunner({ deps }: { deps: unknown[] }) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let frame = 0;
    let items: HTMLElement[] = [];

    const scan = () => {
      items = Array.from(
        document.querySelectorAll<HTMLElement>('[data-cinematic], .article-body > div:not(.lightbox) img'),
      );
    };

    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;

      for (const el of items) {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -120 || rect.top > viewport + 120) continue;

        const travel = rect.height + viewport;
        const progress = Math.min(1, Math.max(0, (viewport - rect.top) / travel));
        const centerWeight = 1 - Math.abs(progress - 0.5) * 2;
        const scale = 0.94 + centerWeight * 0.12;
        el.style.setProperty('--cinema-scale', scale.toFixed(4));
      }
    };

    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    scan();
    update();

    const mutation = new MutationObserver(() => {
      scan();
      request();
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request, { passive: true });

    return () => {
      mutation.disconnect();
      window.removeEventListener('scroll', request);
      window.removeEventListener('resize', request);
      if (frame) cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return null;
}

/** 图片视差：元素在视口中的偏移以平滑速率映射为 translateY */
export function useParallax<T extends HTMLElement>(speed = 0.1) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      const offset = (rect.top + rect.height / 2 - viewport / 2) * speed;
      // 与 .parallax-box 的放大组合，避免位移后露出边缘
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.12)`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed]);

  return ref;
}
