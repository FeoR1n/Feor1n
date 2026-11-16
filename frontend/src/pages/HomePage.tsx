import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { api } from '../lib/api';
import { useBootstrap } from '../context/BootstrapContext';
import { loveElapsed } from '../lib/time';
import HelixGallery from '../components/HelixGallery';
import StoryChapters from '../components/StoryChapters';
import { buildMemoryPanels, demoAssets } from '../lib/demoAssets';
import type { AnniversaryItem, MomentCard } from '../lib/types';

export default function HomePage() {
  const { data } = useBootstrap();
  const [moments, setMoments] = useState<MomentCard[] | null>(null);
  const [anniversaries, setAnniversaries] = useState<AnniversaryItem[]>([]);
  const [loveLetter, setLoveLetter] = useState('');
  const [now, setNow] = useState(() => new Date());
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    void (async () => {
      try {
        const all: MomentCard[] = [];
        let page = 1;
        for (;;) {
          const payload = await api.moments(page);
          all.push(...payload.items);
          if (!payload.hasNext) break;
          page += 1;
        }
        all.sort((a, b) => a.momentDate.localeCompare(b.momentDate));
        setMoments(all);
      } catch {
        setMoments([]);
      }
    })();

    void api.anniversaries().then((payload) => setAnniversaries(payload.items)).catch(() => {});
    void api.home().then((payload) => setLoveLetter(payload.loveLetter)).catch(() => {});
  }, []);

  // 页面上只显示整日数，10 分钟刷新一次足够；原先 1Hz 会让整页每秒重渲染。
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 600_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let frame = 0;
    let nextX = 0;
    let nextY = 0;
    const apply = () => {
      frame = 0;
      hero.style.setProperty('--hero-parallax-x', `${nextX.toFixed(2)}px`);
      hero.style.setProperty('--hero-parallax-y', `${nextY.toFixed(2)}px`);
    };
    const move = (event: PointerEvent) => {
      nextX = (event.clientX / window.innerWidth - 0.5) * 18;
      nextY = (event.clientY / window.innerHeight - 0.5) * 12;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    window.addEventListener('pointermove', move, { passive: true });
    return () => {
      window.removeEventListener('pointermove', move);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  if (!data) return null;

  const site = data.site;
  const chapters = moments ?? [];
  const elapsed = loveElapsed(site.loveStartedAt, now);
  const metElapsed = loveElapsed(site.metStartedAt, now);
  const startYear = site.loveStartedAt.slice(0, 4);
  const nextAnniversary = anniversaries
    .filter((item) => item.repeatYearly && !item.isArchived && item.daysUntil !== null)
    .sort((a, b) => (a.daysUntil ?? 0) - (b.daysUntil ?? 0))[0];
  const panels = buildMemoryPanels(chapters, 12);
  const heroPanels = panels.slice(0, 3);
  const storyPanels = panels.slice(0, 6);
  const letterCopy = loveLetter || site.homeSentence || site.description;

  return (
    <>
      <section ref={heroRef} className="world-hero" aria-labelledby="world-hero-title">
        <a className="world-skip" href="#our-moments">跳过动画，直接浏览记忆</a>

        <div className="world-hero-stage">
          <div
            className="hero-environment"
            aria-hidden="true"
            style={{ backgroundImage: `url(${demoAssets.backgrounds[0]})` }}
          />
          <div className="world-hero-axis" aria-hidden="true">
            <span className="hero-axis-glow" />
            <img src={demoAssets.centralAxis} alt="" />
          </div>

          {heroPanels[0] ? (
            <div className="hero-photo hero-photo--main">
              {heroPanels[0].href ? (
                <Link to={heroPanels[0].href} aria-label={`打开 ${heroPanels[0].title}`}>
                  <img src={heroPanels[0].thumb || heroPanels[0].src} alt={heroPanels[0].title} />
                </Link>
              ) : (
                <img src={heroPanels[0].thumb || heroPanels[0].src} alt={heroPanels[0].title} />
              )}
              <span className="hero-photo-label">{heroPanels[0].title}</span>
              {heroPanels[0].isPlaceholder ? <span className="hero-photo-demo">DEMO</span> : null}
            </div>
          ) : null}

          {heroPanels[1] ? (
            <div className="hero-photo hero-photo--far hero-photo--left">
              <img src={heroPanels[1].thumb || heroPanels[1].src} alt="" loading="lazy" decoding="async" />
            </div>
          ) : null}

          {heroPanels[2] ? (
            <div className="hero-photo hero-photo--far hero-photo--right">
              <img src={heroPanels[2].thumb || heroPanels[2].src} alt="" loading="lazy" decoding="async" />
            </div>
          ) : null}

          <div className="hero-particles" aria-hidden="true">
            <img className="hero-particle hero-particle--one" src={demoAssets.particles[1]} alt="" />
            <img className="hero-particle hero-particle--two" src={demoAssets.particles[3]} alt="" />
          </div>
        </div>

        <div className="world-hero-top">
          <span>FEOR1N / PRIVATE WORLD</span>
          <span>EST. {startYear}</span>
        </div>

        <div className="world-hero-main">
          <p className="world-hero-eyebrow hero-reveal">A WORLD MADE OF US.</p>
          <h1 id="world-hero-title" className="hero-reveal" style={{ '--rd': '80ms' } as CSSProperties}>
            {site.title}
          </h1>
          <p className="world-hero-names hero-reveal" style={{ '--rd': '180ms' } as CSSProperties}>
            {site.boyName} <em>&amp;</em> {site.girlName}
          </p>
        </div>

        <div className="world-hero-bottom hero-reveal" style={{ '--rd': '280ms' } as CSSProperties}>
          <p>{site.homeSentence}</p>
          <a href="#our-moments" className="world-enter" data-cursor>
            <span>进入我们的世界</span>
            <ArrowDown />
          </a>
          <span className="world-hero-index">
            {String(chapters.length).padStart(2, '0')} MOMENTS / {String(data.counts.anniversaries).padStart(2, '0')} DAYS
          </span>
        </div>
      </section>

      <section className="world-section-intro" id="our-moments" aria-labelledby="our-moments-title">
        <p className="kicker">01 / OUR MOMENTS</p>
        <div className="world-section-title-row">
          <h2 id="our-moments-title" data-reveal>记忆不是一条线。</h2>
          <p data-reveal style={{ '--rd': '100ms' } as CSSProperties}>
            它们彼此靠近、交错，然后围绕同一个中心继续生长。向下滚动，穿过我们的照片。
          </p>
        </div>
      </section>

      <HelixGallery panels={panels} />

      <StoryChapters panels={storyPanels} />

      <section
        className="world-letter"
        aria-labelledby="world-letter-title"
        style={{ '--world-letter-texture': `url(${demoAssets.textures[0]})` } as CSSProperties}
      >
        <div className="world-letter-light" aria-hidden="true" />
        <div className="world-letter-head">
          <p className="kicker">03 / THE LETTER</p>
          <span>FOR {site.girlName.toUpperCase()} &amp; {site.boyName.toUpperCase()}</span>
        </div>

        <blockquote id="world-letter-title">
          {letterCopy || '这一页还没有落笔。'}
        </blockquote>

        {!loveLetter && !site.homeSentence ? (
          <p className="world-letter-empty">
            去后台写下想对彼此说的话，它会在这里安静地出现。
          </p>
        ) : null}

        <div className="world-letter-meta">
          <div>
            <span>相伴至今</span>
            <strong>{elapsed.days}</strong>
            <em>天</em>
          </div>
          <div>
            <span>初见至今</span>
            <strong>{metElapsed.days}</strong>
            <em>天</em>
          </div>
          <div>
            <span>被记录</span>
            <strong>{data.counts.moments}</strong>
            <em>个瞬间</em>
          </div>
          <div>
            <span>下一个日子</span>
            <strong>{nextAnniversary ? nextAnniversary.daysUntil : '—'}</strong>
            <em>{nextAnniversary ? '天后' : '尚未写下'}</em>
          </div>
        </div>

        <div className="world-letter-links">
          <Link to="/gallery" data-cursor>继续看照片</Link>
          <Link to="/moments" data-cursor>翻阅全部记录</Link>
          <Link to="/anniversaries" data-cursor>查看纪念日</Link>
        </div>
      </section>
    </>
  );
}
