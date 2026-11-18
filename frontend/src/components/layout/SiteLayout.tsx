// 全站外壳：统一页首导航、阅读进度、页脚与手机底部导航。
// 首页（深色空间）与内页（暖纸阅读）共用同一套结构，只切换明暗语气。

import { useEffect, useMemo, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Camera, CalendarHeart, House, MoonStar, PenLine, Sun, SunMoon } from 'lucide-react';
import { useBootstrap } from '../../context/BootstrapContext';
import { useReveal, scrollToTop } from '../../features/motion/reveal';
import { SiteHeader } from './SiteHeader';
import { MobileNavigation } from './MobileNavigation';
import { SiteFooter } from './SiteFooter';

export const NAV_ITEMS = [
  { to: '/', label: 'Index', cn: '首页', icon: House, end: true },
  { to: '/moments', label: 'Moments', cn: '点滴', icon: PenLine, end: false },
  { to: '/gallery', label: 'Gallery', cn: '相册', icon: Camera, end: false },
  { to: '/anniversaries', label: 'Days', cn: '纪念日', icon: CalendarHeart, end: false },
];

export default function SiteLayout() {
  const { data, error, loading, refresh, themeMode, setThemeMode } = useBootstrap();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  const isWorldHome = location.pathname === '/';

  useReveal([location.pathname]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => setSystemDark(media.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    let past = window.scrollY > 24;
    setScrolled(past);
    const progress = document.querySelector<HTMLElement>('.reading-progress');
    const onScroll = () => {
      const next = window.scrollY > 24;
      if (next !== past) {
        past = next;
        setScrolled(next);
      }
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      progress?.style.setProperty('transform', `scaleX(${ratio})`);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  const isDark = useMemo(
    () => themeMode === 'dark' || (themeMode === 'auto' && systemDark),
    [themeMode, systemDark],
  );

  const cycleTheme = () => {
    const order: Array<'auto' | 'light' | 'dark'> = ['auto', 'light', 'dark'];
    setThemeMode(order[(order.indexOf(themeMode) + 1) % order.length]);
  };
  const ThemeIcon = themeMode === 'auto' ? SunMoon : isDark ? Sun : MoonStar;

  if (!data) {
    if (loading) {
      return (
        <div className="boot-state" role="status" aria-live="polite">
          <div className="boot-state__box">
            <span className="loader-line" aria-hidden="true" />
            <p className="eyebrow eyebrow--plain">FEOR1N / OPENING</p>
          </div>
        </div>
      );
    }
    return (
      <div className="boot-state">
        <div className="boot-state__box">
          <p className="eyebrow eyebrow--plain">FEOR1N / OFFLINE</p>
          <p className="display-sm">站点数据没有送达。</p>
          <p style={{ color: 'var(--color-light-muted)', fontSize: 13.5 }}>{error ?? '请稍后重试。'}</p>
          <button type="button" className="btn on-dark" onClick={refresh}>
            重新连接
          </button>
        </div>
      </div>
    );
  }

  const site = data.site;

  return (
    <div
      className={`app-shell${isWorldHome ? ' app-shell--world' : ''}${isDark ? ' app-shell--dark' : ''}`}
    >
      <div className="site-grain" aria-hidden="true" />
      <div className="reading-progress" aria-hidden="true" />
      <a className="skip-link" href="#main">
        跳到正文
      </a>

      <SiteHeader
        siteTitle={site.title}
        isDark={isWorldHome || isDark}
        scrolled={scrolled}
        themeLabel={themeMode === 'auto' ? '跟随系统' : isDark ? '深色' : '浅色'}
        onCycleTheme={cycleTheme}
        ThemeIcon={ThemeIcon}
      />

      <main className="app-main" id="main">
        <div className="page-enter" key={location.pathname}>
          <Outlet />
        </div>
      </main>

      <SiteFooter
        title={site.title}
        description={site.description}
        boyName={site.boyName}
        girlName={site.girlName}
        isOwner={data.me.isOwner}
      />

      <MobileNavigation />
    </div>
  );
}
