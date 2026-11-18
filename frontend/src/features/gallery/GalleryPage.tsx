// 相册索引：艺术画廊式封面墙。owner 保留创建/编辑/删除能力。

import { useCallback, useEffect, useState } from 'react';
import type { CSSProperties, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { api } from '../../lib/api';
import { useBootstrap } from '../../context/BootstrapContext';
import { EmptyState, ErrorState, LoadingLine, PageIntro } from '../../components/editorial';
import type { AlbumCard, AlbumListData } from '../../lib/types';
import './gallery.css';

const DESKTOP_SPANS = [6, 4, 2];
const MOBILE_SPANS = [2, 1, 1];

export default function GalleryPage() {
  const { data: bootstrap } = useBootstrap();
  const isOwner = bootstrap?.me.isOwner ?? false;
  const [data, setData] = useState<AlbumListData | null>(null);
  const [error, setError] = useState(false);
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState<AlbumCard | null>(null);

  const load = useCallback(() => {
    setError(false);
    void api
      .albums()
      .then(setData)
      .catch(() => {
        setData({ total: 0, albums: [] });
        setError(true);
      });
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const onCreate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const title = String(formData.get('title') ?? '').trim();
    if (!title) return;
    try {
      await api.createAlbum({
        title,
        description: String(formData.get('description') ?? '').trim() || undefined,
      });
      form.reset();
      setCreating(false);
      load();
    } catch (err) {
      window.alert(err instanceof Error ? err.message : '创建失败，稍后再试。');
    }
  };

  const onUpdate = async (album: AlbumCard, event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = String(formData.get('title') ?? '').trim();
    if (!title) return;
    try {
      await api.updateAlbum(album.id, {
        title,
        description: String(formData.get('description') ?? '').trim() || undefined,
      });
      setEditing(null);
      load();
    } catch (err) {
      window.alert(err instanceof Error ? err.message : '保存失败，稍后再试。');
    }
  };

  const onDelete = async (album: AlbumCard) => {
    if (!window.confirm(`删除相册「${album.title}」？里面的 ${album.photoCount} 张照片会一并移除。`)) return;
    try {
      await api.deleteAlbum(album.id);
      load();
    } catch (err) {
      window.alert(err instanceof Error ? err.message : '删除失败，稍后再试。');
    }
  };

  return (
    <div className="gallery-page">
      <div className="shell">
        <PageIntro
          eyebrow="THE ALBUM"
          title="相册"
          meta={
            data
              ? [`${data.albums.length} 本相册`, `${data.total} 帧光影`]
              : undefined
          }
          intro="按主题整理的影像档案。点开任何一本，照片会按年月铺开。"
        />
      </div>

      {!data ? (
        <div className="shell">
          <LoadingLine label="正在整理相册" />
        </div>
      ) : error ? (
        <div className="shell">
          <ErrorState description="相册没有送达。" onRetry={load} />
        </div>
      ) : data.albums.length === 0 && !isOwner ? (
        <div className="shell">
          <EmptyState eyebrow="EMPTY WALL" title="相册墙还空着。" description="照片会在这里一本一本地挂上去。" />
        </div>
      ) : (
        <div className="shell album-wall">
          <div className="album-grid">
            {data.albums.map((album, index) => {
              const span = DESKTOP_SPANS[index % DESKTOP_SPANS.length];
              const mobileSpan = MOBILE_SPANS[index % MOBILE_SPANS.length];
              return (
                <div
                  key={album.id}
                  className="album-cell"
                  data-reveal
                  style={
                    {
                      '--span': span,
                      '--mobile-span': mobileSpan,
                      '--rd': `${(index % 3) * 80}ms`,
                    } as CSSProperties
                  }
                >
                  {editing?.id === album.id ? (
                    <form className="album-form" onSubmit={(event) => void onUpdate(album, event)}>
                      <label className="field">
                        <span>相册名称</span>
                        <input name="title" defaultValue={album.title} maxLength={60} required autoFocus />
                      </label>
                      <label className="field">
                        <span>一句话描述</span>
                        <input
                          name="description"
                          defaultValue={album.description ?? ''}
                          maxLength={200}
                          placeholder="可选"
                        />
                      </label>
                      <div className="btn-row">
                        <button type="submit" className="btn btn--solid">
                          保存
                        </button>
                        <button type="button" className="btn" onClick={() => setEditing(null)}>
                          取消
                        </button>
                      </div>
                    </form>
                  ) : (
                    <>
                      <Link
                        to={`/gallery/${album.id}`}
                        className="album-cell__cover"
                        aria-label={`打开相册：${album.title}`}
                      >
                        {album.cover ? (
                          <img src={album.cover} alt={album.title} loading="lazy" decoding="async" />
                        ) : (
                          <span className="album-cell__placeholder" aria-hidden="true" />
                        )}
                        <span className="album-cell__overlay">
                          <span className="album-cell__title">{album.title}</span>
                          <span className="album-cell__meta meta">
                            {album.photoCount} PHOTOS
                            {album.latestUpload ? ` · ${album.latestUpload}` : ''}
                          </span>
                        </span>
                      </Link>
                      <div className="album-cell__foot">
                        {album.description ? <p>{album.description}</p> : <span />}
                        {isOwner ? (
                          <span className="album-cell__tools">
                            <button
                              type="button"
                              aria-label={`编辑相册：${album.title}`}
                              onClick={() => setEditing(album)}
                            >
                              <Pencil />
                            </button>
                            <button
                              type="button"
                              aria-label={`删除相册：${album.title}`}
                              onClick={() => void onDelete(album)}
                            >
                              <Trash2 />
                            </button>
                          </span>
                        ) : null}
                      </div>
                    </>
                  )}
                </div>
              );
            })}

            {isOwner ? (
              creating ? (
                <div className="album-cell album-cell--form" style={{ '--span': 4, '--mobile-span': 2 } as CSSProperties}>
                  <form className="album-form" onSubmit={(event) => void onCreate(event)}>
                    <label className="field">
                      <span>相册名称</span>
                      <input name="title" maxLength={60} placeholder="例如：旅行随笔" required autoFocus />
                    </label>
                    <label className="field">
                      <span>一句话描述</span>
                      <input name="description" maxLength={200} placeholder="可选" />
                    </label>
                    <div className="btn-row">
                      <button type="submit" className="btn btn--solid">
                        创建
                      </button>
                      <button type="button" className="btn" onClick={() => setCreating(false)}>
                        取消
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <button
                  type="button"
                  className="album-cell album-cell--new"
                  style={{ '--span': 3, '--mobile-span': 2 } as CSSProperties}
                  onClick={() => setCreating(true)}
                  data-reveal
                >
                  <Plus aria-hidden="true" />
                  <span>新建相册</span>
                </button>
              )
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
