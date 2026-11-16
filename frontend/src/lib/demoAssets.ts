import type { MomentCard } from './types';

const base = `${import.meta.env.BASE_URL}assets/feor1n`;

export type MemoryPanel = {
  id: string;
  title: string;
  src: string;
  thumb: string;
  date?: string;
  excerpt?: string;
  location?: string;
  loveDay?: number;
  isPlaceholder: boolean;
  href?: string;
};

export const demoAssets = {
  centralAxis: `${base}/elements/central-axis-ribbon.svg`,
  particleOverlay: `${base}/particles/subtle-particle-overlay.svg`,
  backgrounds: Array.from(
    { length: 10 },
    (_, index) => `${base}/backgrounds/scene-${String(index + 1).padStart(2, '0')}.webp`,
  ),
  particles: Array.from(
    { length: 6 },
    (_, index) => `${base}/particles/particle-${String(index + 1).padStart(2, '0')}.webp`,
  ),
  textures: Array.from(
    { length: 6 },
    (_, index) => `${base}/textures/material-${String(index + 1).padStart(2, '0')}.webp`,
  ),
  photos: Array.from(
    { length: 8 },
    (_, index) => `${base}/photo-placeholders/memory-${String(index + 1).padStart(2, '0')}.webp`,
  ),
};

const placeholderCopy = [
  ['海边的黄昏', 'DEMO / 海岸'],
  ['风经过的侧影', 'DEMO / 人像'],
  ['冬日围巾', 'DEMO / 侧影'],
  ['城市里的两个人', 'DEMO / 黄昏'],
  ['抬头看见光', 'DEMO / 人像'],
  ['一束花', 'DEMO / 花束'],
  ['摩天轮下', 'DEMO / 城市'],
  ['星尘', 'DEMO / 夜色'],
] as const;

/** 仅用于开发和演示；不会写入数据库，也不会进入真实照片存储。 */
export const placeholderMemoryPanels: MemoryPanel[] = demoAssets.photos.map((src, index) => ({
  id: `demo-memory-${index + 1}`,
  title: placeholderCopy[index][0],
  src,
  thumb: src,
  excerpt: '这是视觉资料包提供的演示占位图，不代表真实回忆。接入真实照片后会自动替换。',
  location: placeholderCopy[index][1],
  isPlaceholder: true,
}));

export function momentToMemoryPanel(moment: MomentCard): MemoryPanel {
  return {
    id: `moment-${moment.id}`,
    title: moment.title,
    src: moment.coverUrl || moment.coverThumb,
    thumb: moment.coverThumb || moment.coverUrl,
    date: moment.momentDate,
    excerpt: moment.excerpt,
    location: moment.location || moment.mood,
    loveDay: moment.loveDay,
    isPlaceholder: false,
    href: `/moments/${moment.slug}`,
  };
}

export function buildMemoryPanels(moments: MomentCard[], limit = 12): MemoryPanel[] {
  const real = moments
    .filter((moment) => moment.coverUrl || moment.coverThumb)
    .map(momentToMemoryPanel);
  if (real.length > 0) return real.slice(0, limit);
  return placeholderMemoryPanels.slice(0, Math.min(limit, placeholderMemoryPanels.length));
}
