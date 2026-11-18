import { Link, NavLink, useLocation } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import { NAV_ITEMS } from './SiteLayout';

interface SiteHeaderProps {
  siteTitle: string;
  isDark: boolean;
  scrolled: boolean;
  themeLabel: string;
  onCycleTheme: () => void;
  ThemeIcon: LucideIcon;
}

export function SiteHeader({
  siteTitle,
  isDark,
  scrolled,
  themeLabel,
  onCycleTheme,
  ThemeIcon,
}: SiteHeaderProps) {
  const location = useLocation();
  const indexPrefix = String(
    Math.max(
      0,
      NAV_ITEMS.findIndex((item) =>
        item.end ? location.pathname === item.to : location.pathname.startsWith(item.to),
      ),
    ),
  ).padStart(2, '0');

  return (
    <header
      className={`site-header${isDark ? ' is-dark' : ''}${scrolled ? ' is-solid' : ''}`}
    >
      <div className="site-header__inner">
        <Link to="/" className="brand" aria-label={`${siteTitle} · 回到首页`}>
          <span>{siteTitle}</span>
          <span className="brand__index" aria-hidden="true">
            {indexPrefix} ↗
          </span>
        </Link>

        <nav className="site-nav" aria-label="站内导航">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `site-nav__link${isActive ? ' is-active' : ''}`}
            >
              <span className="sr-only">{item.cn} · </span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            className="chrome-btn"
            aria-label={`切换配色（当前：${themeLabel}）`}
            title={`切换配色（当前：${themeLabel}）`}
            onClick={onCycleTheme}
          >
            <ThemeIcon aria-hidden="true" />
          </button>
          <a className="chrome-link" href="/admin">
            Admin
          </a>
        </div>
      </div>
    </header>
  );
}
