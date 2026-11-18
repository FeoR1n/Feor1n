import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from './SiteLayout';

export function MobileNavigation() {
  const location = useLocation();

  return (
    <nav className="mobile-nav" aria-label="底部导航">
      {NAV_ITEMS.map((item) => {
        const active = item.end ? location.pathname === item.to : location.pathname.startsWith(item.to);
        const Icon = item.icon;
        return (
          <Link
            key={item.to}
            to={item.to}
            className={`mobile-nav__link${active ? ' is-active' : ''}`}
            aria-current={active ? 'page' : undefined}
          >
            <Icon aria-hidden="true" />
            {item.cn}
          </Link>
        );
      })}
    </nav>
  );
}
