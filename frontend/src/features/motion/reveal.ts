// 揭示动效：观察带 [data-reveal] 的元素，进入视口后加上 is-visible。
// 只负责「何时揭示」，具体位移/透明度由 CSS 变量统一控制；
// 图片遮罩 .image-reveal 与 img[data-reveal-img] 在父节点可见时一并解锁。

import { useEffect } from 'react';

export function useReveal(deps: unknown[]) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      document
        .querySelectorAll<HTMLElement>('[data-reveal], .image-reveal')
        .forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const target = entry.target as HTMLElement;
          target.classList.add('is-visible');
          target
            .querySelectorAll<HTMLElement>('.image-reveal, img[data-reveal-img]')
            .forEach((child) => child.classList.add('is-visible'));
          observer.unobserve(target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );

    const observe = (node: Node) => {
      if (!(node instanceof HTMLElement)) return;
      if (node.matches('[data-reveal]:not(.is-visible)')) observer.observe(node);
      if (node.matches('.image-reveal:not(.is-visible)') && !node.closest('[data-reveal]')) {
        observer.observe(node);
      }
      node
        .querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible), .image-reveal:not(.is-visible)')
        .forEach((child) => {
          if (child.classList.contains('image-reveal') && child.closest('[data-reveal]')) return;
          observer.observe(child);
        });
    };

    document.querySelectorAll('[data-reveal], .image-reveal').forEach((node) => observe(node));

    const mutation = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => observe(node));
      }
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/** 页面切换时把滚动位置归零，不做平滑动画。 */
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'auto' });
}
