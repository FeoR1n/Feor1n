// 时间收束：相伴天数、初见天数、记录数量、下一个纪念日。
// 大字号数字 + 极简排版，不做仪表盘卡片。

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { loveElapsed } from '../../lib/time';
import type { AnniversaryItem, SiteInfo } from '../../lib/types';

export default function TogetherSection({
  site,
  nextAnniversary,
  momentCount,
}: {
  site: SiteInfo;
  nextAnniversary: AnniversaryItem | null;
  momentCount: number;
}) {
  const [now, setNow] = useState(() => new Date());

  // 页面上只显示整日数，十分钟刷新一次即可。
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 600_000);
    return () => window.clearInterval(timer);
  }, []);

  const together = loveElapsed(site.loveStartedAt, now);
  const sinceMet = loveElapsed(site.metStartedAt, now);

  const stats = [
    { label: '相伴至今', value: together.days, unit: '天' },
    { label: '初见至今', value: sinceMet.days, unit: '天' },
    { label: '被记录', value: momentCount, unit: '个瞬间' },
    {
      label: '下一个日子',
      value: nextAnniversary?.daysUntil ?? '—',
      unit: nextAnniversary ? `${nextAnniversary.title} · 还有这些天` : '尚未写下',
    },
  ];

  return (
    <section className="together-section" aria-labelledby="home-together-title">
      <div className="shell">
        <div className="together-section__head">
          <p className="eyebrow">04 / TODAY</p>
          <h2 id="home-together-title" className="display-lg" data-reveal>
            时间一直在走，我们一直在记。
          </h2>
        </div>

        <dl className="together-stats">
          {stats.map((stat, index) => (
            <div className="together-stat" key={stat.label} data-reveal style={{ ['--rd' as string]: `${index * 90}ms` }}>
              <dt className="meta">{stat.label}</dt>
              <dd>
                <span className="together-stat__value">{stat.value}</span>
                <span className="together-stat__unit">{stat.unit}</span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="together-section__links" data-reveal>
          <Link to="/moments" className="text-link">
            翻阅全部点滴 <ArrowUpRight aria-hidden="true" />
          </Link>
          <Link to="/gallery" className="text-link">
            继续看照片 <ArrowUpRight aria-hidden="true" />
          </Link>
          <Link to="/anniversaries" className="text-link">
            查看纪念日 <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
