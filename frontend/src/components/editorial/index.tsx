// 编辑式基础组件：页首区、章节标题、元信息、图片容器、空/错状态。
// 只做结构与语义，视觉全部交给 styles/editorial.css。

import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export function Eyebrow({ children, muted = false }: { children: ReactNode; muted?: boolean }) {
  return <p className={`eyebrow${muted ? ' eyebrow--muted' : ''}`}>{children}</p>;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  tone = 'ink',
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: 'ink' | 'light';
}) {
  return (
    <header className={`section-heading${tone === 'light' ? ' on-dark' : ''}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <div className="section-heading__row">
        <h2 id={id} className="display-lg" data-reveal>
          {title}
        </h2>
        {intro ? (
          <p className="section-heading__intro" data-reveal style={{ ['--rd' as string]: '120ms' }}>
            {intro}
          </p>
        ) : null}
      </div>
    </header>
  );
}

export function MetaLine({ items }: { items: Array<ReactNode | null | undefined | false> }) {
  const visible = items.filter(Boolean) as ReactNode[];
  if (visible.length === 0) return null;
  return (
    <p className="meta-line">
      {visible.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </p>
  );
}

export function PageIntro({
  eyebrow,
  title,
  intro,
  meta,
  tone = 'ink',
  actions,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  meta?: Array<ReactNode | null | undefined | false>;
  tone?: 'ink' | 'light';
  actions?: ReactNode;
}) {
  return (
    <header className={`page-intro${tone === 'light' ? ' on-dark' : ''}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="display-xl" data-reveal>
        {title}
      </h1>
      <div className="page-intro__foot">
        {meta ? <MetaLine items={meta} /> : null}
        {intro ? (
          <p className="page-intro__intro" data-reveal style={{ ['--rd' as string]: '140ms' }}>
            {intro}
          </p>
        ) : null}
        {actions ? <div className="page-intro__actions">{actions}</div> : null}
      </div>
    </header>
  );
}

export function EditorialImage({
  src,
  alt,
  aspect = '4 / 5',
  caption,
  link,
  priority = false,
  mask = true,
  className = '',
  children,
}: {
  src: string | null | undefined;
  alt: string;
  aspect?: string;
  caption?: ReactNode;
  link?: string;
  priority?: boolean;
  mask?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  const media = src ? (
    <div className={`img-frame editorial-image__frame${mask ? ' image-reveal' : ''}`} style={{ aspectRatio: aspect }}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        data-reveal-img={priority ? undefined : ''}
        onError={(event) => {
          event.currentTarget.parentElement?.classList.add('img-frame--fallback');
          event.currentTarget.style.visibility = 'hidden';
        }}
      />
      {children}
    </div>
  ) : (
    <div className="img-frame editorial-image__frame img-frame--fallback" style={{ aspectRatio: aspect }} aria-hidden="true" />
  );

  return (
    <figure className={`editorial-image ${className}`.trim()}>
      {link ? (
        <Link to={link} className="editorial-image__link" aria-label={alt}>
          {media}
        </Link>
      ) : (
        media
      )}
      {caption ? <figcaption className="editorial-image__caption">{caption}</figcaption> : null}
    </figure>
  );
}

export function EmptyState({
  eyebrow,
  title,
  description,
  action,
  tone = 'ink',
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  action?: { to: string; label: string };
  tone?: 'ink' | 'light';
}) {
  return (
    <div className={`state state--empty${tone === 'light' ? ' on-dark' : ''}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <p className="display-md state__title">{title}</p>
      {description ? <p className="state__desc">{description}</p> : null}
      {action ? (
        <Link to={action.to} className="text-link">
          {action.label} <ArrowUpRight aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}

export function ErrorState({
  title = '这一页没有取回来。',
  description,
  onRetry,
  tone = 'ink',
}: {
  title?: string;
  description?: string;
  onRetry?: () => void;
  tone?: 'ink' | 'light';
}) {
  return (
    <div className={`state state--error${tone === 'light' ? ' on-dark' : ''}`} role="alert">
      <Eyebrow>TRANSMISSION LOST</Eyebrow>
      <p className="display-md state__title">{title}</p>
      {description ? <p className="state__desc">{description}</p> : null}
      {onRetry ? (
        <button type="button" className="text-link" onClick={onRetry}>
          重新读取
        </button>
      ) : null}
    </div>
  );
}

/** 页内加载：不用 spinner 转圈，用一条缓慢呼吸的细线。 */
export function LoadingLine({ label = '正在读取' }: { label?: string }) {
  return (
    <div className="loading-line" role="status" aria-live="polite">
      <span className="loading-line__bar" aria-hidden="true" />
      <span className="meta">{label}</span>
    </div>
  );
}

export function TextLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="text-link">
      {children} <ArrowUpRight aria-hidden="true" />
    </Link>
  );
}
