// 纪念日：编辑式时间轴 + 即将到来 + 极简月历。
// 三个视图都沿用现有 api.timeline / api.upcoming / api.calendar 契约。

import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { api } from '../../lib/api';
import { formatDate } from '../../lib/time';
import { EmptyState, ErrorState, LoadingLine, PageIntro } from '../../components/editorial';
import type { AnniversaryItem, CalendarData, TimelineData } from '../../lib/types';
import './anniversaries.css';

type TabKey = 'timeline' | 'upcoming' | 'calendar';

const TABS: Array<[TabKey, string]> = [
  ['timeline', '时间轴'],
  ['upcoming', '即将到来'],
  ['calendar', '月历'],
];

export default function AnniversariesPage() {
  const [items, setItems] = useState<AnniversaryItem[] | null>(null);
  const [privateCount, setPrivateCount] = useState(0);
  const [failed, setFailed] = useState(false);
  const [tab, setTab] = useState<TabKey>('timeline');

  useEffect(() => {
    void api
      .anniversaries()
      .then((data) => {
        setItems(data.items);
        setPrivateCount(data.privateCount);
      })
      .catch(() => {
        setItems([]);
        setFailed(true);
      });
  }, []);

  const stats = useMemo(() => {
    const all = items ?? [];
    const yearly = all.filter((item) => item.repeatYearly && !item.isArchived);
    const next = yearly.reduce<AnniversaryItem | null>(
      (acc, item) =>
        item.daysUntil !== null && (!acc || (acc.daysUntil ?? 0) > (item.daysUntil ?? 0)) ? item : acc,
      null,
    );
    return { total: all.length, privateCount, yearly: yearly.length, next };
  }, [items, privateCount]);

  return (
    <div className="anniversaries-page">
      <div className="shell">
        <PageIntro
          eyebrow="THE CALENDAR OF US"
          title="纪念日"
          meta={[`${stats.total} 个日子`, privateCount > 0 ? `${privateCount} 个只属于彼此` : null]}
          intro="重要的日期，值得被重新看见。时间轴按原始日期排列，即将到来按重逢远近排列。"
        />
      </div>

      <div className="shell">
        <dl className="anniv-stats">
          <div className="anniv-stat" data-reveal>
            <dt className="meta">珍藏过的日子</dt>
            <dd>
              <strong>{stats.total}</strong>
              <span>段被记住的光阴</span>
            </dd>
          </div>
          <div className="anniv-stat" data-reveal style={{ ['--rd' as string]: '70ms' }}>
            <dt className="meta">岁岁相见</dt>
            <dd>
              <strong>{stats.yearly}</strong>
              <span>个每年都会重逢的日子</span>
            </dd>
          </div>
          <div className="anniv-stat" data-reveal style={{ ['--rd' as string]: '140ms' }}>
            <dt className="meta">下一次重逢</dt>
            <dd>
              <strong>{stats.next ? formatDate(stats.next.nextDate ?? stats.next.originalDate).slice(5) : '—'}</strong>
              <span>{stats.next ? `距此还有 ${stats.next.daysUntil} 天` : '尚未写下'}</span>
            </dd>
          </div>
        </dl>

        <div className="anniv-tabs" role="tablist" aria-label="纪念日视图">
          {TABS.map(([key, label]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={tab === key}
              className={`anniv-tab${tab === key ? ' is-active' : ''}`}
              onClick={() => setTab(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="shell anniv-panel">
        {failed ? (
          <ErrorState description="纪念日没有送达。" onRetry={() => window.location.reload()} />
        ) : (
          <>
            {tab === 'timeline' ? <TimelinePanel /> : null}
            {tab === 'upcoming' ? <UpcomingPanel /> : null}
            {tab === 'calendar' ? <CalendarPanel /> : null}
          </>
        )}
      </div>
    </div>
  );
}

function TimelinePanel() {
  const [data, setData] = useState<TimelineData | null>(null);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  const load = useCallback(async (skip: number, append: boolean) => {
    setLoading(true);
    try {
      const payload = await api.timeline(skip);
      setData((prev) => (append && prev ? { ...payload, items: [...prev.items, ...payload.items] } : payload));
      setFailed(false);
    } catch {
      setFailed(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load(0, false);
  }, [load]);

  if (failed) return <ErrorState description="时间轴没有送达。" onRetry={() => void load(0, false)} />;
  if (!data) return <LoadingLine label="正在排列时间轴" />;

  if (data.items.length === 0) {
    return (
      <EmptyState
        eyebrow="EMPTY CALENDAR"
        title="还没有记下要等的日子。"
        description="在管理后台添加第一个纪念日，它会从这里开始计时。"
      />
    );
  }

  return (
    <div className="timeline">
      {data.items.map((item) => (
        <article key={item.id} className="timeline-entry" data-reveal>
          <div className="timeline-entry__year">
            <span>{item.originalDate.slice(0, 4)}</span>
            <span className="meta">DAY {item.dayNumber}</span>
          </div>
          <div className="timeline-entry__body">
            <Link to={`/anniversaries/${item.id}`} className="timeline-entry__title">
              {item.title}
            </Link>
            <p className="timeline-entry__meta">
              <span>{item.kindName}</span>
              <span>
                {item.calendarName} {formatDate(item.originalDate)}
              </span>
              {item.lunarDate ? <span>农历 {item.lunarDate}</span> : null}
              {item.repeatYearly ? <span>每年提醒</span> : null}
              {item.isPrivate ? <span className="is-private">仅情侣可见</span> : null}
            </p>
          </div>
          <span className="timeline-entry__dot" aria-hidden="true" />
        </article>
      ))}

      {data.hasMore ? (
        <div className="anniv-more">
          <button type="button" className="btn" disabled={loading} onClick={() => void load(data.items.length, true)}>
            {loading ? '正在载入' : '继续翻阅'}
          </button>
        </div>
      ) : (
        <p className="meta anniv-end">ALL DAYS RECORDED</p>
      )}
    </div>
  );
}

function UpcomingPanel() {
  const [data, setData] = useState<TimelineData | null>(null);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  const load = useCallback(async (skip: number, append: boolean) => {
    setLoading(true);
    try {
      const payload = await api.upcoming(skip);
      setData((prev) => (append && prev ? { ...payload, items: [...prev.items, ...payload.items] } : payload));
      setFailed(false);
    } catch {
      setFailed(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load(0, false);
  }, [load]);

  if (failed) return <ErrorState description="即将到来的纪念日没有送达。" onRetry={() => void load(0, false)} />;
  if (!data) return <LoadingLine label="正在计算日子" />;

  if (data.items.length === 0) {
    return (
      <EmptyState
        eyebrow="NOTHING AHEAD"
        title="前方暂时没有重逢。"
        description="每年重复的纪念日会自动出现在这里。"
      />
    );
  }

  return (
    <div className="upcoming-list">
      {data.items.map((item) => (
        <Link key={item.id} to={`/anniversaries/${item.id}`} className="upcoming-row" data-reveal>
          <span className="upcoming-row__days">
            <strong>{item.daysUntil}</strong>
            <span>DAYS</span>
          </span>
          <span className="upcoming-row__main">
            <span className="upcoming-row__title">{item.title}</span>
            <span className="upcoming-row__meta">
              {item.kindName} · 下一次 {formatDate(item.nextDate ?? item.originalDate)}
              {item.isPrivate ? ' · 仅情侣可见' : ''}
            </span>
          </span>
          <ChevronRight aria-hidden="true" className="upcoming-row__arrow" />
        </Link>
      ))}

      {data.hasMore ? (
        <div className="anniv-more">
          <button type="button" className="btn" disabled={loading} onClick={() => void load(data.items.length, true)}>
            {loading ? '正在载入' : '继续翻阅'}
          </button>
        </div>
      ) : null}
    </div>
  );
}

function CalendarPanel() {
  const [data, setData] = useState<CalendarData | null>(null);
  const [calendar, setCalendar] = useState<'solar' | 'lunar'>('solar');
  const [year, setYear] = useState<number | null>(null);
  const [month, setMonth] = useState<number | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    void api
      .calendar({ calendar })
      .then((payload) => {
        setData(payload);
        setYear(payload.year);
        setMonth(payload.month);
        setFailed(false);
      })
      .catch(() => setFailed(true));
  }, [calendar]);

  const go = (target: { year: number; month: number; leap: boolean }) => {
    void api
      .calendar({ calendar, year: target.year, month: target.month, leap: target.leap })
      .then((payload) => {
        setData(payload);
        setYear(payload.year);
        setMonth(payload.month);
      })
      .catch(() => setFailed(true));
  };

  if (failed) return <ErrorState description="月历没有送达。" onRetry={() => setCalendar(calendar)} />;
  if (!data || year === null || month === null) return <LoadingLine label="正在铺开月历" />;

  const selectedCell = data.cells.find((cell) => cell.solarDate === selected) ?? null;
  const monthOptions = data.months.filter(
    (option) => option.value === String(month) || option.value === `${month}-leap`,
  );
  const isLeapMonth = monthOptions.length > 0 && monthOptions[0].value.endsWith('-leap');

  return (
    <div className="calendar">
      <div className="calendar-toolbar">
        <div className="anniv-tabs anniv-tabs--small" role="group" aria-label="历法">
          <button
            type="button"
            className={`anniv-tab${calendar === 'solar' ? ' is-active' : ''}`}
            aria-pressed={calendar === 'solar'}
            onClick={() => setCalendar('solar')}
          >
            公历
          </button>
          <button
            type="button"
            className={`anniv-tab${calendar === 'lunar' ? ' is-active' : ''}`}
            aria-pressed={calendar === 'lunar'}
            onClick={() => setCalendar('lunar')}
          >
            农历
          </button>
        </div>

        <div className="calendar-nav">
          <button type="button" className="chrome-btn" aria-label="上一个月" onClick={() => go(data.previous)}>
            <ChevronLeft />
          </button>
          <span className="calendar-title">
            {year} 年 {isLeapMonth ? monthOptions[0].label : `${month} 月`}
          </span>
          <button type="button" className="chrome-btn" aria-label="下一个月" onClick={() => go(data.next)}>
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="calendar-selects">
        <label className="field">
          <span>年份</span>
          <select
            value={year}
            onChange={(event) => {
              const next = Number(event.target.value);
              void api
                .calendar({ calendar, year: next, month, leap: isLeapMonth })
                .then((payload) => {
                  setData(payload);
                  setYear(payload.year);
                  setMonth(payload.month);
                })
                .catch(() => setFailed(true));
            }}
          >
            {Array.from({ length: data.maximumYear - data.minimumYear + 1 }, (_, index) => data.minimumYear + index)
              .reverse()
              .map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
          </select>
        </label>
        {calendar === 'lunar' ? (
          <label className="field">
            <span>月份</span>
            <select
              value={data.monthKey}
              onChange={(event) => {
                const [nextMonth, leapPart] = event.target.value.split('-');
                void api
                  .calendar({ calendar, year, month: Number(nextMonth), leap: leapPart === 'leap' })
                  .then((payload) => {
                    setData(payload);
                    setYear(payload.year);
                    setMonth(payload.month);
                  })
                  .catch(() => setFailed(true));
              }}
            >
              {data.months.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        ) : null}
      </div>

      <div className="calendar-grid">
        {['一', '二', '三', '四', '五', '六', '日'].map((weekday) => (
          <span key={weekday} className="calendar-weekday">
            {weekday}
          </span>
        ))}
        {data.cells.map((cell) => (
          <button
            key={cell.solarDate}
            type="button"
            className={`calendar-cell${cell.outside ? ' is-outside' : ''}${cell.isToday ? ' is-today' : ''}${
              selected === cell.solarDate ? ' is-selected' : ''
            }`}
            onClick={() => setSelected(selected === cell.solarDate ? null : cell.solarDate)}
          >
            <span className="calendar-cell__day">{cell.primary}</span>
            <span className="calendar-cell__secondary">{cell.secondary}</span>
            {cell.records.length > 0 ? <span className="calendar-cell__mark" aria-hidden="true" /> : null}
          </button>
        ))}
      </div>

      {selectedCell ? (
        <div className="calendar-day">
          <h3 className="display-sm">
            {selectedCell.solarLabel} · {selectedCell.lunarLabel}
          </h3>
          {selectedCell.records.length === 0 ? (
            <p className="calendar-day__empty">这一天还很安静，留待以后写进故事。</p>
          ) : (
            <ul className="calendar-day__list">
              {selectedCell.records.map((record) => (
                <li key={record.id}>
                  <Link to={`/anniversaries/${record.id}`}>
                    <span>{record.title}</span>
                    <span className="meta">{record.kindName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}
