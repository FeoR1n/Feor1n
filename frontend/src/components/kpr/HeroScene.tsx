/* 首屏原型：一张主照片 + 两张远景，中央光轴由多段流光滑点组成（不是静态线）。 */
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { MemoryPanel } from '../../lib/demoAssets';
import { clamp, fromState, heroDrift, heroFar, heroMain, metrics } from './geometry';
import './hero.css';

gsap.registerPlugin(ScrollTrigger);

const SPARKS = 9;

type Props = {
  panels: MemoryPanel[];
  title?: string;
  boyName?: string;
  girlName?: string;
  sentence?: string;
  year?: string;
  debug?: boolean;
};

export default function HeroScene({
  panels,
  title = 'FEOR1N',
  boyName = 'Yang',
  girlName = 'Zh',
  sentence = '把一起走过的路，安静地留在这里。',
  year = '2021',
  debug = false,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const frameRefs = useRef<Array<HTMLDivElement | null>>([]);
  const sparkRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const copyRef = useRef<HTMLDivElement>(null);
  const flowRef = useRef<HTMLDivElement>(null);

  const items = panels.slice(0, 3);
  const frameKey = items.map((panel) => panel.id).join('|');

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const copy = copyRef.current;
    const flow = flowRef.current;
    if (!section || !pin || !copy || items.length === 0) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const [main, left, right] = frameRefs.current;
    const sparks = sparkRefs.current.filter((node): node is HTMLSpanElement => Boolean(node));
    if (!main) return;

    const ctx = gsap.context(() => {
      // 首屏只滚 0.7 屏就结束：主照片离开构图，标题同步退场，随后交给转场场景。
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${Math.round(window.innerHeight * 0.7)}`,
          pin,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(main, fromState(heroMain), { ...fromState(heroDrift), duration: 100 }, 0);
      if (left) tl.fromTo(left, fromState(() => heroFar(-1)), { ...fromState(() => heroFar(-1)), x: () => heroFar(-1).x - metrics().w * 0.04, duration: 100 }, 0);
      if (right) tl.fromTo(right, fromState(() => heroFar(1)), { ...fromState(() => heroFar(1)), x: () => heroFar(1).x + metrics().w * 0.04, duration: 100 }, 0);

      // 光轴：每颗流光滑点走不同的距离，形成连续流动，而不是一条静止的线。
      sparks.forEach((spark, index) => {
        const spread = 0.55 + (index % 3) * 0.22;
        tl.fromTo(
          spark,
          { y: () => metrics().h * 0.18 },
          { y: () => -metrics().h * 0.5 * spread, duration: 100 },
          0,
        );
        tl.fromTo(spark, { opacity: 0.25 }, { opacity: 0.95, duration: 35, yoyo: true, repeat: 1 }, 12);
      });
      if (flow) {
        tl.fromTo(flow, { rotationZ: -2 }, { rotationZ: 2.4, duration: 100 }, 0);
      }

      // 文字有自己的节奏：先随主照片一起轻微上移，接近末尾时整块退场。
      tl.fromTo(copy, { y: 0, autoAlpha: 1 }, { y: -34, duration: 55 }, 0);
      tl.to(copy, { autoAlpha: 0, y: -70, duration: 30, ease: 'power2.in' }, 70);

      if (debug) {
        (window as unknown as Record<string, unknown>).__kprHero = {
          timeline: tl,
          trigger: tl.scrollTrigger,
          setProgress: (p: number) => {
            const st = tl.scrollTrigger;
            if (!st) return;
            window.scrollTo(0, st.start + (st.end - st.start) * clamp(p, 0, 1));
            tl.progress(clamp(p, 0, 1));
          },
        };
      }
    }, section);

    const onFonts = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(onFonts).catch(() => {});

    return () => {
      if (debug) delete (window as unknown as Record<string, unknown>).__kprHero;
      ctx.revert();
    };
  }, [debug, frameKey, items.length]);

  return (
    <section ref={sectionRef} className="kpr-hero" aria-labelledby="kpr-hero-title">
      <div ref={pinRef} className="kpr-hero-pin">
        <div className="kpr-hero-env" aria-hidden="true" />

        <div className="kpr-hero-axis" aria-hidden="true">
          <div ref={flowRef} className="kpr-hero-flow">
            <span className="kpr-hero-beam" />
            {Array.from({ length: SPARKS }, (_, index) => (
              <span
                key={index}
                className="kpr-hero-spark"
                style={{ '--spark': index } as React.CSSProperties}
                ref={(node) => {
                  sparkRefs.current[index] = node;
                }}
              />
            ))}
          </div>
        </div>

        <div className="kpr-hero-camera" aria-hidden="true">
          {items.map((panel, index) => (
            <div
              key={panel.id}
              className={`kpr-hero-frame kpr-hero-frame--${index === 0 ? 'main' : index === 1 ? 'far-left' : 'far-right'}`}
              ref={(node) => {
                frameRefs.current[index] = node;
              }}
            >
              <img
                src={panel.thumb || panel.src}
                alt={panel.title}
                loading="eager"
                decoding="async"
                draggable={false}
              />
              {index === 0 ? <span className="kpr-hero-frame-label">{panel.title}</span> : null}
              {index === 0 && panel.isPlaceholder ? <span className="kpr-hero-demo">DEMO</span> : null}
            </div>
          ))}
        </div>

        <div ref={copyRef} className="kpr-hero-copy">
          <p className="kpr-hero-top">
            <span>FEOR1N / PRIVATE WORLD</span>
            <span>EST. {year}</span>
          </p>
          <p className="kpr-hero-eyebrow">A WORLD MADE OF US.</p>
          <h1 id="kpr-hero-title">{title}</h1>
          <p className="kpr-hero-names">
            {boyName} <em>&amp;</em> {girlName}
          </p>
          <p className="kpr-hero-sentence">{sentence}</p>
        </div>
      </div>
    </section>
  );
}
