import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const indexPrefix = String(
    Math.max(
      0,
      NAV_ITEMS.findIndex((item) =>
        item.end ? location.pathname === item.to : location.pathname.startsWith(item.to),
      ),
    ),
  ).padStart(2, '0');

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

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
          <button
            type="button"
            className="chrome-btn site-menu-toggle"
            aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={menuOpen}
            aria-controls="site-mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="site-mobile-menu"
        className={`site-menu${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="site-menu__nav" aria-label="移动端导航">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              tabIndex={menuOpen ? undefined : -1}
              className={({ isActive }) => `site-menu__link${isActive ? ' is-active' : ''}`}
            >
              <span>{item.label}</span>
              <small>{item.cn}</small>
            </NavLink>
          ))}
          <a className="site-menu__link" href="/admin" tabIndex={menuOpen ? undefined : -1}>
            <span>Admin</span>
            <small>管理</small>
          </a>
        </nav>
      </div>
    </header>
  );
}
