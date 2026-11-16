// 独立原型：/prototype/kpr —— 首屏构图 + 三张照片连续交接，不接入站点其它部分。
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroScene from '../components/kpr/HeroScene';
import ImageTransitionScene from '../components/kpr/ImageTransitionScene';
import { api } from '../lib/api';
import { useBootstrap } from '../context/BootstrapContext';
import { buildMemoryPanels, placeholderMemoryPanels } from '../lib/demoAssets';
import type { MemoryPanel } from '../lib/demoAssets';

const DEMO_COPY = [
  ['海边的黄昏', '风把光压得很低，我们沿着海岸走到天色完全暗下来。'],
  ['风经过的侧影', '镜头没有对准脸，只留下一段被风掀起的轮廓。'],
  ['冬日围巾', '那天很冷，围巾挡住了半张脸，笑声还是漏了出来。'],
];

export default function KprPrototypePage() {
  const { data } = useBootstrap();
  const [panels, setPanels] = useState<MemoryPanel[]>(() => placeholderMemoryPanels.slice(0, 3));

  useEffect(() => {
    let alive = true;
    void (async () => {
      try {
        const payload = await api.moments(1);
        if (!alive) return;
        const real = buildMemoryPanels(payload.items, 3);
        if (real.length > 0) setPanels(real);
      } catch {
        /* 原型在无接口环境下继续用演示图 */
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const items = panels.slice(0, 3).map((panel, index) => ({
    ...panel,
    title: panel.isPlaceholder ? DEMO_COPY[index]?.[0] ?? panel.title : panel.title,
    excerpt: panel.isPlaceholder ? DEMO_COPY[index]?.[1] ?? panel.excerpt : panel.excerpt,
  }));

  const site = data?.site;

  return (
    <div>
      <HeroScene
        panels={items}
        title={site?.title ?? 'FEOR1N'}
        boyName={site?.boyName ?? 'Yang'}
        girlName={site?.girlName ?? 'Zh'}
        sentence={site?.homeSentence || '把一起走过的路，安静地留在这里。'}
        year={site?.loveStartedAt?.slice(0, 4) ?? '2021'}
        debug
      />
      <ImageTransitionScene panels={items} debug />
      <div style={{ padding: '40px 24px 80px', textAlign: 'center', background: '#080a0f' }}>
        <Link to="/" style={{ color: '#c29a75', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em' }}>
          ← BACK TO FEOR1N
        </Link>
      </div>
    </div>
  );
}
