// 首页 Hero：深色电影式开场。真实照片作为主体，层次化标题入场，
// 鼠标视差只作用于远景照片（桌面、非 reduced-motion）。

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import type { MomentCard, SiteInfo } from '../../lib/types';
import { formatDate } from '../../lib/time';
import { useReducedMotion } from '../../features/motion/useReducedMotion';

interface HeroWorldProps {
  site: SiteInfo;
  featured: MomentCard | null;
  farMoments: MomentCard[];
  momentCount: number;
  anniversaryCount: number;
}

export default function HeroWorld({ site, featured, farMoments, momentCount, anniversaryCount }: HeroWorldProps) {
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const startYear = site.loveStartedAt.slice(0, 4);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || reduced) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    const apply = () => {
      frame = 0;
      hero.style.setProperty('--hero-shift-x', `${x.toFixed(2)}px`);
      hero.style.setProperty('--hero-shift-y', `${y.toFixed(2)}px`);
    };
    const move = (event: PointerEvent) => {
      x = (event.clientX / window.innerWidth - 0.5) * 20;
      y = (event.clientY / window.innerHeight - 0.5) * 14;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => {
      window.removeEventListener('pointermove', move);
      cancelAnimationFrame(frame);
    };
  }, [reduced]);

  return (
    <section ref={heroRef} className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero__ambient" aria-hidden="true" />

      {farMoments.length > 0 ? (
        <div className="home-hero__far" aria-hidden="true">
          {farMoments.map((moment, index) => (
            <div key={moment.id} className={`home-hero__far-photo home-hero__far-photo--${index + 1}`}>
              <img src={moment.coverThumb || moment.coverUrl} alt="" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      ) : null}

      <div className="home-hero__content">
        <div className="home-hero__top shell">
          <span>FEOR1N / PRIVATE WORLD</span>
          <span>EST. {startYear}</span>
          <span className="home-hero__top-right">
            {String(momentCount).padStart(2, '0')} MOMENTS · {String(anniversaryCount).padStart(2, '0')} DAYS
          </span>
        </div>

        <div className="home-hero__title-block shell">
          <p className="eyebrow home-hero__eyebrow">A SPACE MADE OF US</p>
          <h1 id="home-hero-title" className="display-hero">
            {site.title}
          </h1>
          <p className="home-hero__names">
            {site.boyName}
            <em>&amp;</em>
            {site.girlName}
          </p>
        </div>

        <div className="home-hero__bottom shell">
          <div className="home-hero__sentence">
            <p className="lede">{site.homeSentence}</p>
            <a href="#home-memory" className="home-hero__enter">
              <span>进入记忆空间</span>
              <ArrowDown aria-hidden="true" />
            </a>
          </div>

          {featured ? (
            <Link to={`/moments/${featured.slug}`} className="home-hero__frame" aria-label={`打开回忆：${featured.title}`}>
              <span className="home-hero__frame-inner">
                <img src={featured.coverUrl || featured.coverThumb} alt={featured.title} loading="eager" decoding="async" />
                <span className="home-hero__frame-meta">
                  <span className="meta">{formatDate(featured.momentDate)}</span>
                  <span className="home-hero__frame-title">{featured.title}</span>
                </span>
              </span>
            </Link>
          ) : (
            <div className="home-hero__frame home-hero__frame--empty" aria-hidden="true">
              <span className="home-hero__frame-inner" />
            </div>
          )}
        </div>
      </div>

      <div className="home-hero__scroll" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
