// 点滴详情：完整的数字杂志文章页。
// 保留解锁、正文 ArticleBody、评论树与上一篇/下一篇。

import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { api } from '../../lib/api';
import { useBootstrap } from '../../context/BootstrapContext';
import { formatDate, formatDateTime } from '../../lib/time';
import type { CommentNode, MomentDetailData } from '../../lib/types';
import ArticleBody from '../../components/ArticleBody';
import { EmptyState, ErrorState, LoadingLine, MetaLine } from '../../components/editorial';
import './detail.css';

export default function MomentDetailPage() {
  const { slug = '' } = useParams();
  const { data } = useBootstrap();
  const [detail, setDetail] = useState<MomentDetailData | null>(null);
  const [missing, setMissing] = useState(false);
  const [failed, setFailed] = useState(false);
  const [unlockPassword, setUnlockPassword] = useState('');
  const [unlockError, setUnlockError] = useState('');
  const [unlocking, setUnlocking] = useState(false);

  const load = useCallback(async () => {
    try {
      const payload = await api.moment(slug);
      setDetail(payload);
      setMissing(false);
      setFailed(false);
    } catch (err) {
      if (err instanceof Error && 'status' in err && (err as { status: number }).status === 404) {
        setMissing(true);
      } else {
        setFailed(true);
      }
    }
  }, [slug]);

  useEffect(() => {
    setDetail(null);
    setMissing(false);
    setFailed(false);
    setUnlockError('');
    void load();
  }, [load]);

  const unlock = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!unlockPassword) return;
    setUnlocking(true);
    setUnlockError('');
    try {
      const result = await api.unlockMoment(slug, unlockPassword);
      if (result.ok) {
        await load();
      } else {
        setUnlockError(result.error ?? '密语似乎不对。');
      }
    } catch (err) {
      setUnlockError(err instanceof Error ? err.message : '此刻风有些大，稍后再试。');
    } finally {
      setUnlocking(false);
    }
  };

  if (missing) {
    return (
      <div className="shell detail-shell">
        <EmptyState
          eyebrow="LOST REEL"
          title="这一章散落在风里了。"
          description="它或许被移走了，或许从未真正存在。"
          action={{ to: '/moments', label: '回到档案' }}
        />
      </div>
    );
  }

  if (!data) return null;

  if (failed) {
    return (
      <div className="shell detail-shell">
        <ErrorState description="这一段回忆没有送达。" onRetry={() => void load()} />
      </div>
    );
  }

  if (!detail) {
    return (
      <div className="shell detail-shell">
        <LoadingLine label="正在展开这一章" />
      </div>
    );
  }

  const item = detail.detail;

  if (item.isLocked) {
    return (
      <div className="shell detail-shell">
        <div className="unlock-panel">
          <p className="eyebrow">PRIVATE CHAPTER</p>
          <h1 className="display-lg">这是一段被珍藏的回忆。</h1>
          <p className="unlock-panel__hint">输入密语，才能推开这扇门。它不会被动画藏起来。</p>
          {unlockError ? (
            <p className="form-error" role="alert">
              {unlockError}
            </p>
          ) : null}
          <form className="unlock-form" onSubmit={unlock}>
            <label className="field">
              <span>访问密语</span>
              <input
                type="password"
                value={unlockPassword}
                onChange={(event) => setUnlockPassword(event.target.value)}
                autoComplete="off"
                autoFocus
                required
              />
            </label>
            <button type="submit" className="btn btn--solid" disabled={unlocking}>
              {unlocking ? '正在开启' : '开启这段回忆'}
            </button>
          </form>
          <Link to="/moments" className="text-link">
            <ArrowLeft aria-hidden="true" /> 返回档案
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="article">
      <div className="shell detail-shell">
        <Link to="/moments" className="article__back text-link">
          <ArrowLeft aria-hidden="true" /> 点滴索引
        </Link>

        <header className="article__head">
          <p className="eyebrow">THE ARCHIVE</p>
          <h1 className="display-xl" data-reveal>
            {item.title}
          </h1>
          <MetaLine
            items={[
              formatDate(item.momentDate),
              item.loveDay > 0 ? `第 ${item.loveDay} 天` : null,
              item.location || null,
              item.mood || null,
              `由 ${item.authorName} 写就`,
            ]}
          />
        </header>
      </div>

      <div className="shell detail-shell article__body-wrap">
        {item.storyHtml ? (
          <ArticleBody html={item.storyHtml} group={`moment-${item.slug}`} />
        ) : (
          <p className="article__empty">这一章还没有文字，只留下了日期。</p>
        )}
      </div>

      <nav className="shell detail-shell article-nav" aria-label="章节导航">
        <div className="article-nav__item">
          {item.previous ? (
            <Link to={`/moments/${item.previous.slug}`}>
              <span className="meta">← 上一篇</span>
              <span className="article-nav__title">{item.previous.title}</span>
            </Link>
          ) : (
            <span className="meta">这是最早的一篇</span>
          )}
        </div>
        <div className="article-nav__item article-nav__item--next">
          {item.next ? (
            <Link to={`/moments/${item.next.slug}`}>
              <span className="meta">下一篇 →</span>
              <span className="article-nav__title">{item.next.title}</span>
            </Link>
          ) : (
            <span className="meta">这是最新的一篇</span>
          )}
        </div>
      </nav>

      <Comments detail={detail} slug={item.slug} onChanged={() => void load()} />
    </article>
  );
}

function Comments({
  detail,
  slug,
  onChanged,
}: {
  detail: MomentDetailData;
  slug: string;
  onChanged: () => void;
}) {
  const meta = detail.comments;
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [mail, setMail] = useState('');
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const [replyName, setReplyName] = useState('');
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!text.trim()) {
      setError('留一句话再走吧。');
      return;
    }
    setSending(true);
    setError('');
    try {
      const result = await api.postComment(slug, {
        author: meta.isLoggedIn ? undefined : author.trim(),
        mail: meta.isLoggedIn ? undefined : mail.trim(),
        text: text.trim(),
        replyTo: replyTo ?? undefined,
      });
      if (result.ok) {
        setText('');
        setReplyTo(null);
        setReplyName('');
        onChanged();
      } else {
        setError(result.error ?? '这段话没有送达。');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '此刻风有些大，稍后再试。');
    } finally {
      setSending(false);
    }
  };

  if (!meta.allowGuestComments && !meta.isLoggedIn) {
    return null;
  }

  return (
    <section className="shell detail-shell comments" aria-labelledby="comments-title">
      <div className="comments__head">
        <h2 id="comments-title" className="display-sm">
          留言
        </h2>
        <span className="meta">{meta.totalCount} NOTES</span>
      </div>

      {meta.nodes.length === 0 ? (
        <p className="comments__empty">还没有留言。第一句可以由你开始。</p>
      ) : (
        <div className="comments__list">
          {meta.nodes.map((node) => (
            <CommentTree
              key={node.id}
              node={node}
              onReply={(id, name) => {
                setReplyTo(id);
                setReplyName(name);
              }}
              replyTarget={replyTo}
            />
          ))}
        </div>
      )}

      {error ? (
        <p className="form-error" role="alert" style={{ marginTop: 16 }}>
          {error}
        </p>
      ) : null}

      <form className="comment-form" onSubmit={submit}>
        {replyTo !== null ? (
          <p className="comment-form__reply meta">
            正在回复 #{replyTo} {replyName ? `· ${replyName}` : ''}
            <button type="button" onClick={() => setReplyTo(null)}>
              [取消]
            </button>
          </p>
        ) : null}

        {!meta.isLoggedIn ? (
          <div className="comment-form__row">
            <label className="field">
              <span>称呼</span>
              <input value={author} onChange={(event) => setAuthor(event.target.value)} placeholder="如何称呼你" maxLength={60} />
            </label>
            {meta.requireMail ? (
              <label className="field">
                <span>邮箱</span>
                <input
                  type="email"
                  value={mail}
                  onChange={(event) => setMail(event.target.value)}
                  placeholder="只留给我们"
                  maxLength={320}
                />
              </label>
            ) : null}
          </div>
        ) : (
          <p className="meta comment-form__identity">以 {meta.displayName} 的身份留言</p>
        )}

        <label className="field">
          <span>写下想对彼此说的话</span>
          <textarea value={text} onChange={(event) => setText(event.target.value)} rows={3} maxLength={2000} />
        </label>

        <button type="submit" className="btn btn--solid" disabled={sending}>
          {sending ? '正在送出' : '留下这段话'}
        </button>
      </form>
    </section>
  );
}

function CommentTree({
  node,
  onReply,
  replyTarget,
}: {
  node: CommentNode;
  onReply: (id: number, name: string) => void;
  replyTarget: number | null;
}) {
  return (
    <div className={`comment${replyTarget === node.id ? ' is-target' : ''}`}>
      <div className="comment__meta">
        {node.avatarUrl ? <img className="comment__avatar" src={node.avatarUrl} alt="" loading="lazy" /> : null}
        <span className="comment__author">{node.authorName}</span>
        {node.isOwner ? <span className="comment__role">Owner</span> : null}
        {node.isAuthor ? <span className="comment__role">Author</span> : null}
        <span className="comment__time">{formatDateTime(node.createdAt)}</span>
      </div>
      {node.replyToName ? <p className="comment__reply-to">回复 @{node.replyToName}</p> : null}
      <div className="comment__body" dangerouslySetInnerHTML={{ __html: node.contentHtml }} />
      <button type="button" className="comment__reply-btn" onClick={() => onReply(node.id, node.authorName)}>
        Reply <ArrowUpRight aria-hidden="true" />
      </button>
      {node.replies.length > 0 ? (
        <div className="comment__replies">
          {node.replies.map((reply) => (
            <CommentTree key={reply.id} node={reply} onReply={onReply} replyTarget={replyTarget} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
