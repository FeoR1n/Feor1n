// 首页故事章节：暖纸色编辑式排版，3–6 章，不规则构图。
// 数据全部来自真实 moments；没有数据时显示空状态而不是演示照片。

import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../../components/editorial';
import { formatDate } from '../../lib/time';
import type { MomentCard } from '../../lib/types';

// 六种构图轮换使用；章节少时只用前几种。
const COMPOSITIONS = ['is-panorama', 'is-offset', 'is-inset', 'is-overlay', 'is-marginalia', 'is-fullframe'];

export default function StoryEditorial({ moments }: { moments: MomentCard[] }) {
  return (
    <section className="story-section" id="home-story" aria-labelledby="home-story-title">
      <SectionHeading
        id="home-story-title"
        eyebrow="03 / STORY EDITORIAL"
        title="被我们认真记住的日子。"
        intro="章节不按时间排队。一段画面，一句话，和它留下的温度。每一章都可以继续读下去。"
      />

      {moments.length === 0 ? (
        <div className="shell">
          <div className="story-empty">
            <p className="display-sm">故事还在等第一段文字。</p>
            <Link to="/moments" className="text-link">
              去写下第一页 <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="story-list">
          {moments.map((moment, index) => (
            <article key={moment.id} className={`story-chapter ${COMPOSITIONS[index % COMPOSITIONS.length]}`}>
              <span className="story-chapter__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>

              <figure className="story-chapter__media">
                <Link to={`/moments/${moment.slug}`} aria-label={`打开这一章：${moment.title}`}>
                  {moment.coverUrl || moment.coverThumb ? (
                    <div className="image-reveal story-chapter__frame">
                      <img
                        src={moment.coverUrl || moment.coverThumb}
                        alt={moment.title}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ) : (
                    <div className="story-chapter__frame img-frame--fallback" aria-hidden="true" />
                  )}
                </Link>
              </figure>

              <div className="story-chapter__copy" data-reveal>
                <p className="meta-line">
                  <span>{moment.momentDate ? formatDate(moment.momentDate) : 'MEMORY'}</span>
                  {moment.location ? <span>{moment.location}</span> : null}
                  {moment.mood ? <span>{moment.mood}</span> : null}
                </p>
                <h3 className="story-chapter__title">
                  <Link to={`/moments/${moment.slug}`}>{moment.title}</Link>
                </h3>
                {moment.excerpt ? <p className="story-chapter__excerpt">{moment.excerpt}</p> : null}
                <Link to={`/moments/${moment.slug}`} className="text-link">
                  打开这一章 <ArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
