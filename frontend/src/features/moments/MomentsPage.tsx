// 点滴索引：编辑式档案列表。桌面端悬停显示跟随光标的封面预览；
// 移动端改为小尺寸缩略图 + 标题 + 日期。

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { api } from '../../lib/api';
import { useBootstrap } from '../../context/BootstrapContext';
import { formatDate } from '../../lib/time';
import { EmptyState, ErrorState, LoadingLine, PageIntro } from '../../components/editorial';
import type { MomentsPageData } from '../../lib/types';
import './moments.css';

export default function MomentsPage() {
  const { data } = useBootstrap();
  const [pageData, setPageData] = useState<MomentsPageData | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<{ src: string; x: number; y: number } | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const load = async (page: number, append: boolean) => {
    setLoadingMore(true);
    setError(null);
    try {
      const next = await api.moments(page);
      setPageData((prev) => (append && prev ? { ...next, items: [...prev.items, ...next.items] } : next));
    } catch {
      setError('这一批记录没有送达，稍后再试试。');
    } finally {
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    void load(1, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 预览跟随光标：只写 transform，不触发 React 重渲染
  useEffect(() => {
    if (!preview) return;
    const node = previewRef.current;
    if (!node) return;
    node.style.transform = `translate3d(${preview.x + 24}px, ${preview.y - 100}px, 0)`;
  }, [preview]);

  if (!data) return null;

  if (!pageData) {
    return (
      <>
        <div className="shell">
          <PageIntro eyebrow="THE ARCHIVE" title="点滴" />
          {error ? (
            <ErrorState description={error} onRetry={() => void load(1, false)} />
          ) : (
            <LoadingLine label="正在翻阅档案" />
          )}
        </div>
      </>
    );
  }

  const startYear = data.site.loveStartedAt.slice(0, 4);

  return (
    <div className="moments-page">
      <div className="shell">
        <PageIntro
          eyebrow="THE ARCHIVE"
          title="点滴"
          meta={[
            `${pageData.totalCount} 个瞬间`,
            `相伴第 ${pageData.loveDays} 天`,
            `始于 ${startYear}`,
          ]}
          intro="按最近一次落笔排序的私人档案。每一行都能继续读下去，上锁的章节需要密语。"
        />
      </div>

      {error ? (
        <div className="shell">
          <ErrorState description={error} onRetry={() => void load(pageData.page, true)} />
        </div>
      ) : null}

      {pageData.items.length === 0 ? (
        <div className="shell">
          <EmptyState
            eyebrow="EMPTY REEL"
            title="胶卷尚未感光。"
            description="写下第一页故事，这里便会慢慢长出时间的纹理。"
            action={{ to: '/', label: '回到首页' }}
          />
        </div>
      ) : (
        <ol className="archive-list shell">
          {pageData.items.map((item, index) => (
            <li key={item.id} data-reveal style={{ ['--rd' as string]: `${Math.min(index, 8) * 45}ms` }}>
              <Link
                to={`/moments/${item.slug}`}
                className="archive-row"
                onMouseMove={(event) => {
                  if (!item.coverThumb) return;
                  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
                  setPreview({ src: item.coverThumb, x: event.clientX, y: event.clientY });
                }}
                onMouseLeave={() => setPreview(null)}
              >
                <span className="archive-row__index">{String(index + 1).padStart(2, '0')}</span>

                <span className="archive-row__thumb">
                  {item.coverThumb ? (
                    <img src={item.coverThumb} alt="" loading="lazy" decoding="async" />
                  ) : (
                    <span className="archive-row__thumb-empty" aria-hidden="true" />
                  )}
                </span>

                <span className="archive-row__main">
                  <span className="archive-row__title">
                    {item.title}
                    {item.isLocked ? (
                      <span className="archive-row__lock" aria-label="已上锁">
                        ⌾
                      </span>
                    ) : null}
                  </span>
                  <span className="archive-row__excerpt">{item.excerpt}</span>
                </span>

                <span className="archive-row__meta">
                  <span>{formatDate(item.momentDate)}</span>
                  {item.loveDay > 0 ? <span>DAY {item.loveDay}</span> : null}
                  {item.location ? <span>{item.location}</span> : null}
                  <ArrowUpRight aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      )}

      {pageData.hasNext ? (
        <div className="archive-more shell">
          <button
            type="button"
            className="btn"
            disabled={loadingMore}
            onClick={() => void load(pageData.page + 1, true)}
          >
            {loadingMore ? '正在载入' : '继续翻阅'}
          </button>
        </div>
      ) : pageData.items.length > 0 ? (
        <p className="archive-end shell meta">ARCHIVE END · 全部 {pageData.totalCount} 个瞬间</p>
      ) : null}

      {preview ? (
        <div ref={previewRef} className="archive-preview" aria-hidden="true">
          <img src={preview.src} alt="" />
        </div>
      ) : null}
    </div>
  );
}
