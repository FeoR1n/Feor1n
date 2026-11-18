// 首页：Hero → Memory Field（Three.js）→ Story Editorial → Together。
// 所有内容来自真实 API；没有照片时各段落自然降级，不复制照片充数。

import { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { api } from '../../lib/api';
import { useBootstrap } from '../../context/BootstrapContext';
import HeroWorld from './HeroWorld';
import StoryEditorial from './StoryEditorial';
import TogetherSection from './TogetherSection';
import type { SpatialPhoto } from '../spatial/spatial.types';
import { ErrorState, LoadingLine } from '../../components/editorial';
import type { AnniversaryItem, MomentCard } from '../../lib/types';
import './home.css';
import './story.css';

// Three.js 单独分块：空间场景只在这条路由按需下载，不拖累全站首包。
const SpatialScene = lazy(() => import('../spatial/SpatialScene'));

const SPATIAL_LIMIT = 24;
const STORY_LIMIT = 6;

export default function HomePage() {
  const { data } = useBootstrap();
  const [moments, setMoments] = useState<MomentCard[] | null>(null);
  const [anniversaries, setAnniversaries] = useState<AnniversaryItem[]>([]);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;

    const loadMoments = async () => {
      try {
        const all: MomentCard[] = [];
        let page = 1;
        for (;;) {
          const payload = await api.moments(page);
          all.push(...payload.items);
          if (!payload.hasNext || page >= 6) break;
          page += 1;
        }
        if (!alive) return;
        all.sort((a, b) => a.momentDate.localeCompare(b.momentDate));
        setMoments(all);
      } catch {
        if (!alive) return;
        setMoments([]);
        setFailed(true);
      }
    };

    void loadMoments();
    void api
      .anniversaries()
      .then((payload) => alive && setAnniversaries(payload.items))
      .catch(() => {});

    return () => {
      alive = false;
    };
  }, []);

  const spatialPhotos = useMemo<SpatialPhoto[]>(
    () =>
      (moments ?? [])
        .filter((moment) => moment.coverUrl || moment.coverThumb)
        .slice(-SPATIAL_LIMIT)
        .map((moment) => ({
          id: `moment-${moment.id}`,
          title: moment.title,
          imageUrl: moment.coverUrl || moment.coverThumb,
          thumbnailUrl: moment.coverThumb || moment.coverUrl,
          dateLabel: moment.momentDate?.slice(0, 10).replace(/-/g, '.'),
          href: `/moments/${moment.slug}`,
        })),
    [moments],
  );

  const storyMoments = useMemo(() => {
    const withCover = (moments ?? []).filter((moment) => moment.coverUrl || moment.coverThumb);
    const source = withCover.length > 0 ? withCover : moments ?? [];
    // 取最新的几章：故事章节从最近的记忆开始读
    return [...source].reverse().slice(0, STORY_LIMIT);
  }, [moments]);

  const nextAnniversary = useMemo(() => {
    return (
      anniversaries
        .filter((item) => item.repeatYearly && !item.isArchived && item.daysUntil !== null)
        .sort((a, b) => (a.daysUntil ?? 0) - (b.daysUntil ?? 0))[0] ?? null
    );
  }, [anniversaries]);

  if (!data) return null;

  const site = data.site;
  const featured = storyMoments[0] ?? null;
  const farMoments = storyMoments.slice(1, 3);

  return (
    <>
      <HeroWorld
        site={site}
        featured={featured}
        farMoments={farMoments}
        momentCount={data.counts.moments}
        anniversaryCount={data.counts.anniversaries}
      />

      {moments === null ? (
        <section className="home-loading" aria-label="正在读取记忆">
          <div className="shell">
            <LoadingLine label="正在读取记忆" />
          </div>
        </section>
      ) : failed ? (
        <section className="home-loading" aria-label="读取失败">
          <div className="shell">
            <ErrorState
              title="记忆没有送达。"
              description="网络似乎断了一下。你仍然可以先去相册看看。"
              onRetry={() => window.location.reload()}
              tone="light"
            />
          </div>
        </section>
      ) : (
        <Suspense
          fallback={
            <section className="home-loading" aria-label="正在进入记忆空间">
              <div className="shell">
                <LoadingLine label="正在进入记忆空间" />
              </div>
            </section>
          }
        >
          <SpatialScene photos={spatialPhotos} sectionId="home-memory" />
        </Suspense>
      )}

      <StoryEditorial moments={storyMoments} />

      <TogetherSection site={site} nextAnniversary={nextAnniversary} momentCount={data.counts.moments} />
    </>
  );
}
