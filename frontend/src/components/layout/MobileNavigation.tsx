import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from './SiteLayout';

export function MobileNavigation() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [hidden, setHidden] = useState(isHome);

  // 首页 Hero 是电影片头：底部导航在开场阶段退场，
  // 滚过第一屏后再浮现，避免和主照片、滚动提示争夺注意力。
  useEffect(() => {
    if (!isHome) {
      setHidden(false);
      return;
    }
    let past = true;
    const onScroll = () => {
      const hero = document.querySelector<HTMLElement>('.film-hero');
      const revealAt = hero
        ? Math.max(window.innerHeight, hero.offsetTop + hero.offsetHeight - window.innerHeight * 0.82)
        : window.innerHeight;
      const nextHidden = window.scrollY < revealAt;
      if (nextHidden !== past) {
        past = nextHidden;
        setHidden(nextHidden);
      }
    };
    setHidden(true);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  return (
    <nav className={`mobile-nav${hidden ? ' is-hidden' : ''}`} aria-label="底部导航" aria-hidden={hidden || undefined}>
      {NAV_ITEMS.map((item) => {
        const active = item.end ? location.pathname === item.to : location.pathname.startsWith(item.to);
        const Icon = item.icon;
        return (
          <Link
            key={item.to}
            to={item.to}
            className={`mobile-nav__link${active ? ' is-active' : ''}`}
            aria-current={active ? 'page' : undefined}
            tabIndex={hidden ? -1 : undefined}
          >
            <Icon aria-hidden="true" />
            {item.cn}
          </Link>
        );
      })}
    </nav>
  );
}
