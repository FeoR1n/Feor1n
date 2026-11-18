import { Link } from 'react-router-dom';

export function SiteFooter({
  title,
  description,
  boyName,
  girlName,
  isOwner,
}: {
  title: string;
  description: string;
  boyName: string;
  girlName: string;
  isOwner: boolean;
}) {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__top">
          <div>
            <p className="site-footer__brand">
              {title}
              <em>.</em>
            </p>
            <p className="meta" style={{ marginTop: 18, color: 'var(--color-light-faint)' }}>
              {boyName} &amp; {girlName} · A PRIVATE FILM
            </p>
          </div>

          <div className="site-footer__aside">
            <div className="site-footer__col">
              <p>Archive</p>
              <Link to="/moments">点滴</Link>
              <Link to="/gallery">相册</Link>
              <Link to="/anniversaries">纪念日</Link>
            </div>
            <div className="site-footer__col">
              <p>Elsewhere</p>
              <a href="/affinity">心有灵犀</a>
              <a href="/cycles">花信如期</a>
              <a href="/shop">心意商城</a>
              {isOwner ? <a href="/admin">管理后台</a> : <Link to="/login">登录</Link>}
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} {title}</span>
          <span>{description}</span>
          <span>KEPT BETWEEN US</span>
        </div>
      </div>
    </footer>
  );
}
