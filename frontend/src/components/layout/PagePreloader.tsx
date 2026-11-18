// 首屏加载：只等真实资源（字体 + 站点数据），不设最低等待时间。
// 首屏骨架先出现，主视觉图片由 Hero 自己按需加载；加载失败也不会把用户困在遮罩里。

import { useEffect, useState } from 'react';

const MAX_WAIT = 3200;

export function PagePreloader() {
  const [progress, setProgress] = useState(0.12);
  const [done, setDone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    let alive = true;
    const startedAt = performance.now();

    // 拆掉 index.html 里的静态占位，交给 React 接管
    document.getElementById('boot-preloader')?.remove();

    const fontsReady = document.fonts
      ? Promise.race([
          document.fonts.ready,
          new Promise<void>((resolve) => window.setTimeout(resolve, MAX_WAIT)),
        ])
      : Promise.resolve();

    void fontsReady.then(() => {
      if (!alive) return;
      setProgress(0.7);
      const elapsed = performance.now() - startedAt;
      // 只在资源已经就绪时留一点点时间给进度条收尾，不制造假等待
      window.setTimeout(
        () => {
          if (!alive) return;
          setProgress(1);
          setDone(true);
          window.setTimeout(() => alive && setRemoved(true), 760);
        },
        Math.max(0, 380 - elapsed),
      );
    });

    return () => {
      alive = false;
    };
  }, []);

  if (removed) return null;

  return (
    <div className={`site-loader${done ? ' is-done' : ''}`} aria-hidden="true">
      <div className="site-loader__track">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>
      <div className="site-loader__row">
        <span>FEOR1N / OPENING THE ARCHIVE</span>
        <span>{progress < 1 ? 'LOADING TYPEFACES' : 'READY'}</span>
      </div>
    </div>
  );
}
