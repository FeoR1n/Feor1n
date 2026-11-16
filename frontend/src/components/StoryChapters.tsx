import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { formatDate } from '../lib/time';
import { demoAssets } from '../lib/demoAssets';
import type { MemoryPanel } from '../lib/demoAssets';

// 六段不同的构图：全幅、偏移、内嵌、叠印、边注、单幅。顺序固定，
// 章节数少于六时只用到前面的构图。
const compositions = [
  'is-panorama',
  'is-offset',
  'is-inset',
  'is-overlay',
  'is-marginalia',
  'is-fullframe',
];

export default function StoryChapters({ panels }: { panels: MemoryPanel[] }) {
  return (
    <section className="world-story" aria-labelledby="our-story-title">
      <header className="world-story-head">
        <p className="kicker">02 / OUR STORY</p>
        <h2 id="our-story-title">被我们认真记住的日子。</h2>
        <p>章节不按时间排队。一段画面，一句话，和它留下的温度。</p>
      </header>

      {panels.length === 0 ? (
        <div className="world-story-empty">
          <p>故事还在等第一段文字。</p>
          <Link to="/moments" data-cursor>去写下第一页</Link>
        </div>
      ) : (
        <div className="world-story-list">
          {panels.map((panel, index) => (
            <article
              className={`world-story-chapter ${compositions[index % compositions.length]}`}
              key={panel.id}
            >
              <span className="world-chapter-marker" aria-hidden="true">
                CHAPTER {String(index + 1).padStart(2, '0')}
              </span>

              <figure className="world-story-media" data-cinematic>
                <img
                  className="world-chapter-environment"
                  src={demoAssets.backgrounds[index]}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  aria-hidden="true"
                />
                {panel.src ? (
                  <img
                    className="world-chapter-photo"
                    src={panel.src}
                    alt={panel.title}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="world-story-placeholder" aria-hidden="true" />
                )}
                <span className="world-story-number">{String(index + 1).padStart(2, '0')}</span>
                {panel.isPlaceholder ? <span className="world-story-demo">DEMO ASSET</span> : null}
              </figure>

              <div className="world-story-copy" data-reveal>
                <p className="world-story-date">
                  {panel.date ? formatDate(panel.date) : 'VISUAL PLACEHOLDER'}
                </p>
                <h3>{panel.title}</h3>
                {panel.excerpt ? <p className="world-story-excerpt">{panel.excerpt}</p> : null}
                {panel.href ? (
                  <Link to={panel.href} data-cursor>
                    打开这一章 <ArrowUpRight />
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
