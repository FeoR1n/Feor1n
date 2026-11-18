// 首页 Hero：滚动驱动的私人电影开场（Cinematic Experimental）。
//
// 结构上分成环境层、远景照片层、主照片、第二张照片、过场遮罩、标题层与 HUD。
// 每一层都有独立的容器承载运动：GSAP 只写各层自己的 transform / opacity / clip-path，
// 指针视差只写外层容器的 CSS 变量，两者不碰同一个元素，避免 transform 互相覆盖。
// reduced-motion 或脚本初始化失败时直接呈现静态构图，内容完整可读。

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { MomentCard, SiteInfo } from '../../lib/types';
import { formatDate } from '../../lib/time';
import { useReducedMotion } from '../motion/useReducedMotion';
import './film-hero.css';

gsap.registerPlugin(ScrollTrigger);

const STAGES = ['THE FIRST FRAME', 'THE NAME', 'THE ENCOUNTER', 'THE PASSAGE', 'THE OPENING', 'THE STORY'];
const STAGE_AT = [0, 0.12, 0.28, 0.48, 0.68, 0.88];

interface FilmHeroProps {
  site: SiteInfo;
  photos: MomentCard[];
  momentCount: number;
  anniversaryCount: number;
}

function pickPhoto(moment: MomentCard | undefined) {
  if (!moment) return null;
  const src = moment.coverUrl || moment.coverThumb;
  if (!src) return null;
  return { moment, src, thumb: moment.coverThumb || src };
}

export default function FilmHero({ site, photos, momentCount, anniversaryCount }: FilmHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);
  const ambientRef = useRef<HTMLDivElement>(null);
  const farRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const stageRef = useRef(0);
  const [stage, setStage] = useState(0);
  const [mainFailed, setMainFailed] = useState(false);
  const reduced = useReducedMotion();

  const main = pickPhoto(photos[0]);
  const secondary = pickPhoto(photos[1]);
  const far = [pickPhoto(photos[2]), pickPhoto(photos[3])].filter(Boolean) as Array<
    NonNullable<ReturnType<typeof pickPhoto>>
  >;
  const startYear = site.loveStartedAt.slice(0, 4);
  // 照片异步到达：主/副照片节点在首帧并不存在，时间线必须随数据重建
  const photoKey = photos
    .slice(0, 4)
    .map((moment) => moment.id)
    .join('|');

  useEffect(() => {
    setMainFailed(false);
  }, [main?.src]);

  // 指针视差：只写外层容器的 CSS 变量，桌面精细指针才启用
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reduced) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    const apply = () => {
      frame = 0;
      section.style.setProperty('--film-shift-x', `${x.toFixed(2)}px`);
      section.style.setProperty('--film-shift-y', `${y.toFixed(2)}px`);
    };
    const move = (event: PointerEvent) => {
      x = (event.clientX / window.innerWidth - 0.5) * -22;
      y = (event.clientY / window.innerHeight - 0.5) * -14;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => {
      window.removeEventListener('pointermove', move);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced]);

  // 滚动镜头脚本：桌面与手机各自一套节奏，由 gsap.matchMedia 分别注册与回收
  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    if (!section) return;

    const updateStage = (progress: number) => {
      let index = 0;
      for (let i = STAGE_AT.length - 1; i >= 0; i -= 1) {
        if (progress >= STAGE_AT[i]) {
          index = i;
          break;
        }
      }
      if (index !== stageRef.current) {
        stageRef.current = index;
        setStage(index);
      }
      const bar = progressRef.current;
      if (bar) bar.style.transform = `scaleX(${progress.toFixed(4)})`;
    };

    const mm = gsap.matchMedia();

    const buildTimeline = (mobile: boolean) => {
      // 先把参与时间线的节点放回起点，避免数据变化后旧内联样式残留
      gsap.set([mainRef.current, secondaryRef.current, titleRef.current, closingRef.current].filter(Boolean), {
        clearProps: 'all',
      });

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
          invalidateOnRefresh: true,
          onUpdate: (self) => updateStage(self.progress),
        },
      });

      // 节奏参数：手机端缩短推进幅度，减少眩晕感与 pin 长度
      const t = mobile
        ? { a: 0.06, b: 0.16, c: 0.26, d: 0.46, e: 0.62, f: 0.8, scale: 1.62, shiftX: '-6vw', shiftY: '-4vh' }
        : { a: 0.12, b: 0.28, c: 0.48, d: 0.68, e: 0.88, f: 1, scale: 2.5, shiftX: '-13vw', shiftY: '8vh' };

      // 0：黑场呼吸
      // 首帧不是全黑：环境光、远景和标题先以低强度存在，滚动再逐步显影。
      tl.fromTo(ambientRef.current, { opacity: 0.62 }, { opacity: 1, duration: t.a }, 0);
      tl.fromTo(farRef.current, { opacity: 0.22 }, { opacity: 1, duration: t.a + 0.04 }, 0.01);

      // 12%：第一帧显影
      if (mainRef.current) {
        tl.fromTo(
          mainRef.current,
          { opacity: 0.58, clipPath: 'inset(0 0 0% 0)', scale: 0.975 },
          { opacity: 1, clipPath: 'inset(0 0 0% 0)', scale: 1, duration: t.b - t.a },
          0,
        );
      }
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0.7, y: mobile ? 12 : 24 },
          { opacity: 1, y: 0, duration: mobile ? 0.14 : 0.12 },
          mobile ? 0.04 : 0.02,
        );
      }
      if (hudRef.current) {
        tl.fromTo(hudRef.current, { opacity: 0.68 }, { opacity: 1, duration: 0.1 }, 0.12);
      }

      // 28%：靠近记忆
      if (mainRef.current) {
        tl.to(mainRef.current, { scale: mobile ? 1.1 : 1.18, x: mobile ? '-2vw' : '-4vw', y: '2vh', duration: t.c - t.b }, t.b);
      }
      if (titleRef.current) {
        tl.to(titleRef.current, { y: mobile ? -18 : -60, opacity: 0.55, duration: t.c - t.b }, t.b);
      }
      if (farRef.current) {
        tl.to(farRef.current, { y: mobile ? -20 : -60, scale: 1.06, duration: t.c - t.b }, t.b);
      }

      // 48%：穿过画面
      if (mainRef.current) {
        tl.to(
          mainRef.current,
          { scale: t.scale, x: t.shiftX, y: t.shiftY, duration: t.d - t.c },
          t.c,
        );
        tl.to(mainRef.current, { opacity: 0, duration: (t.d - t.c) * 0.42 }, t.c + (t.d - t.c) * 0.58);
      }
      if (titleRef.current) {
        tl.to(titleRef.current, { opacity: 0, y: mobile ? -40 : -120, duration: t.d - t.c }, t.c);
      }
      if (veilRef.current) {
        tl.fromTo(veilRef.current, { opacity: 0 }, { opacity: mobile ? 0.42 : 0.62, duration: (t.d - t.c) * 0.45 }, t.c);
        tl.to(veilRef.current, { opacity: 0, duration: (t.d - t.c) * 0.55 }, t.c + (t.d - t.c) * 0.45);
      }

      // 68%：空间打开
      if (secondaryRef.current) {
        tl.fromTo(
          secondaryRef.current,
          { opacity: 0, clipPath: 'inset(0 0 100% 0)', scale: 0.88 },
          { opacity: 1, clipPath: 'inset(0 0 0% 0)', scale: 1, duration: t.e - t.d + 0.04 },
          t.d - 0.02,
        );
      }
      if (closingRef.current) {
        tl.fromTo(
          closingRef.current,
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, duration: mobile ? 0.16 : 0.14 },
          mobile ? 0.68 : 0.74,
        );
      }
      if (farRef.current) {
        tl.to(farRef.current, { opacity: mobile ? 0.5 : 0.34, duration: 0.16 }, t.e - 0.12);
      }

      // 88%：交给 Memory Field，只留环境层和收束文字
      tl.to({}, { duration: 0.02 }, 0.96);

      return tl;
    };

    mm.add('(min-width: 861px)', () => {
      const tl = buildTimeline(false);
      return () => tl.scrollTrigger?.kill();
    });
    mm.add('(max-width: 860px)', () => {
      const tl = buildTimeline(true);
      return () => tl.scrollTrigger?.kill();
    });

    return () => {
      mm.revert();
    };
  }, [reduced, photoKey]);

  const counter = `${String(stage + 1).padStart(2, '0')} / ${String(STAGES.length).padStart(2, '0')}`;

  return (
    <section
      ref={sectionRef}
      className={`film-hero${reduced ? ' is-static' : ''}`}
      style={{ ['--film-count']: Math.max(photos.length, 1) } as CSSProperties}
      aria-labelledby="film-hero-title"
    >
      <div className="film-hero__stage">
        <div ref={ambientRef} className="film-hero__ambient" aria-hidden="true" />
        <div className="film-hero__grid" aria-hidden="true" />
        <div className="film-hero__axis" aria-hidden="true" />

        {/* 远景照片：外层容器消费指针视差变量，内层由 GSAP 负责滚动位移 */}
        <div className="film-hero__parallax" aria-hidden="true">
          <div ref={farRef} className="film-hero__far">
            {far.map((item, index) => (
              <div key={item.moment.id} className={`film-hero__far-photo film-hero__far-photo--${index + 1}`}>
                <img src={item.thumb} alt="" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>

        {main ? (
          <div ref={mainRef} className="film-hero__main">
            <Link
              to={`/moments/${main.moment.slug}`}
              className="film-hero__main-link"
              aria-label={`打开回忆：${main.moment.title}`}
            >
              {mainFailed ? (
                <span className="film-hero__main-fallback" aria-hidden="true" />
              ) : (
                <img
                  src={main.thumb}
                  alt={main.moment.title}
                  loading="eager"
                  decoding="async"
                  onError={() => setMainFailed(true)}
                />
              )}
              <span className="film-hero__main-meta">
                <span className="meta">{formatDate(main.moment.momentDate)}</span>
                <span className="film-hero__main-title">{main.moment.title}</span>
              </span>
            </Link>
          </div>
        ) : null}

        {secondary ? (
          <div ref={secondaryRef} className="film-hero__secondary" aria-hidden="true">
            <img src={secondary.thumb} alt="" loading="lazy" decoding="async" />
          </div>
        ) : null}

        <div ref={veilRef} className="film-hero__veil" aria-hidden="true" />

        <div className="film-hero__content shell">
          <div ref={titleRef} className="film-hero__title">
            <p className="film-hero__eyebrow">A PRIVATE FILM · SIX CHAPTERS</p>
            <h1 id="film-hero-title" className="film-hero__wordmark">
              {site.title}
            </h1>
            <p className="film-hero__names">
              <span>{site.boyName}</span>
              <em>&amp;</em>
              <span>{site.girlName}</span>
            </p>
          </div>

          <div ref={closingRef} className="film-hero__closing">
            <p className="film-hero__sentence">{site.homeSentence}</p>
            <a href="#home-memory" className="film-hero__enter">
              <span>继续放映</span>
              <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* 顶部信息交给固定页首，这里只在画面底角保留章节与年份 */}
        <div ref={hudRef} className="film-hero__hud">
          <span className="film-hero__hud-mark shell" aria-hidden="true">
            PRIVATE FILM · EST. {startYear}
          </span>

          <div className="film-hero__hud-bottom shell">
            <span className="film-hero__stage-label">{STAGES[stage]}</span>
            <span className="film-hero__stage-count">{counter}</span>
            <span className="film-hero__hint">SCROLL TO DIRECT</span>
            <span className="film-hero__hud-numbers">
              {String(momentCount).padStart(2, '0')} RECORDS · {String(anniversaryCount).padStart(2, '0')} DATES
            </span>
          </div>

          <div className="film-hero__progress" aria-hidden="true">
            <span ref={progressRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
