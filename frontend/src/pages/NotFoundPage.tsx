import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="notfound">
      <div className="shell notfound__inner">
        <p className="eyebrow">404 / LOST REEL</p>
        <p className="display-hero notfound__num" aria-hidden="true">
          404
        </p>
        <h1 className="display-md">这一页似乎迷了路。</h1>
        <p className="notfound__desc">它或许被移走了，或许从未真正存在。</p>
        <div className="notfound__links">
          <Link to="/" className="text-link">
            回到序章
          </Link>
          <Link to="/moments" className="text-link">
            翻阅点滴
          </Link>
          <Link to="/gallery" className="text-link">
            打开相册
          </Link>
        </div>
      </div>
    </div>
  );
}
