// 纪念日故事页：文章式详情，保留 storyHtml / note / 前后导航与动态天数状态。

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { api } from '../../lib/api';
import { formatDateLong } from '../../lib/time';
import type { AnniversaryDetailData } from '../../lib/types';
import ArticleBody from '../../components/ArticleBody';
import { EmptyState, ErrorState, LoadingLine, MetaLine } from '../../components/editorial';
import '../moments/detail.css';

export default function AnniversaryDetailPage() {
  const { id = '' } = useParams();
  const [data, setData] = useState<AnniversaryDetailData | null>(null);
  const [missing, setMissing] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const numeric = Number(id);
    if (!Number.isFinite(numeric)) {
      setMissing(true);
      return;
    }
    setData(null);
    setFailed(false);
    setMissing(false);
    void api
      .anniversary(numeric)
      .then(setData)
      .catch((err) => {
        if (err instanceof Error && 'status' in err && (err as { status: number }).status === 404) {
          setMissing(true);
        } else {
          setFailed(true);
        }
      });
  }, [id]);

  if (missing) {
    return (
      <div className="shell detail-shell">
        <EmptyState
          eyebrow="LOST DATE"
          title="这个日子暂时隐没在风里。"
          description="它可能被删除，或者从未存在。"
          action={{ to: '/anniversaries', label: '回到纪念日' }}
        />
      </div>
    );
  }

  if (failed) {
    return (
      <div className="shell detail-shell">
        <ErrorState description="这个日子没有送达。" onRetry={() => window.location.reload()} />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="shell detail-shell">
        <LoadingLine label="正在展开这一天" />
      </div>
    );
  }

  const item = data.item;
  const statusLabel = item.isToday
    ? '正是今天'
    : item.nextDate === null
      ? '一段被妥帖珍藏的日子'
      : `下一次重逢，还有 ${item.daysUntil} 天`;

  return (
    <article className="article">
      <div className="shell detail-shell">
        <Link to="/anniversaries" className="article__back text-link">
          <ArrowLeft aria-hidden="true" /> 纪念日
        </Link>

        <header className="article__head">
          <p className="eyebrow">{item.kindName}</p>
          <h1 className="display-xl" data-reveal>
            {item.title}
          </h1>
          <MetaLine
            items={[
              `${item.calendarName} ${formatDateLong(item.originalDate)}`,
              item.lunarDate ? `农历 ${item.lunarDate}` : null,
              item.repeatYearly ? '岁岁重逢' : null,
              item.isPrivate ? '只属于彼此' : null,
              `由 ${item.authorName} 写就`,
            ]}
          />
          <p className="article__status">{statusLabel}</p>
        </header>
      </div>

      <div className="shell detail-shell article__body-wrap">
        {data.storyHtml ? (
          <ArticleBody html={data.storyHtml} group={`anniversary-${item.id}`} />
        ) : item.note ? (
          <div className="article-body">
            <p>{item.note}</p>
          </div>
        ) : (
          <p className="article__empty">这一天的故事，还在等待被慢慢写满。</p>
        )}
      </div>

      <nav className="shell detail-shell article-nav" aria-label="纪念日导航">
        <div className="article-nav__item">
          {data.previous ? (
            <Link to={`/anniversaries/${data.previous.id}`}>
              <span className="meta">← 上一个日子</span>
              <span className="article-nav__title">{data.previous.title}</span>
            </Link>
          ) : (
            <span className="meta">这是第一个日子</span>
          )}
        </div>
        <div className="article-nav__item article-nav__item--next">
          {data.next ? (
            <Link to={`/anniversaries/${data.next.id}`}>
              <span className="meta">下一个日子 →</span>
              <span className="article-nav__title">{data.next.title}</span>
            </Link>
          ) : (
            <span className="meta">这是最后一个日子</span>
          )}
        </div>
      </nav>

      <div className="shell detail-shell" style={{ paddingTop: 48, textAlign: 'center' }}>
        <Link to="/anniversaries" className="text-link">
          返回纪念日
        </Link>
      </div>
    </article>
  );
}
