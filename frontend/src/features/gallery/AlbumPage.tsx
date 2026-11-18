// 相册详情：按年月分组的照片墙、上传、编辑、删除与全屏灯箱。
// 权限判断、上传/删除接口与灯箱索引语义全部沿用原实现。

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ImagePlus, Pencil } from 'lucide-react';
import { api } from '../../lib/api';
import { useBootstrap } from '../../context/BootstrapContext';
import AlbumLightbox from '../../components/AlbumLightbox';
import { EmptyState, ErrorState, LoadingLine } from '../../components/editorial';
import type { AlbumDetailData, AlbumPhoto } from '../../lib/types';
import './gallery.css';

export default function AlbumPage() {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const { data: bootstrap } = useBootstrap();
  const isOwner = bootstrap?.me.isOwner ?? false;
  const [data, setData] = useState<AlbumDetailData | null>(null);
  const [missing, setMissing] = useState(false);
  const [failed, setFailed] = useState(false);
  const [viewer, setViewer] = useState<{ index: number } | null>(null);
  const [editing, setEditing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{ done: number; total: number } | null>(null);
  const uploadRef = useRef<HTMLInputElement>(null);

  const albumId = Number(id);

  const load = useCallback(() => {
    if (!Number.isFinite(albumId) || albumId <= 0) {
      setMissing(true);
      return;
    }
    api
      .album(albumId)
      .then((payload) => {
        setData(payload);
        setFailed(false);
      })
      .catch(() => setFailed(true));
  }, [albumId]);

  useEffect(() => {
    load();
  }, [load]);

  const months = useMemo(() => {
    if (!data) return [];
    const buckets = new Map<string, AlbumPhoto[]>();
    for (const photo of data.photos) {
      const month = photo.uploadedOn.slice(0, 7);
      const bucket = buckets.get(month) ?? [];
      bucket.push(photo);
      buckets.set(month, bucket);
    }
    return Array.from(buckets.entries());
  }, [data]);

  const indexById = useMemo(() => {
    const map = new Map<number, number>();
    (data?.photos ?? []).forEach((photo, index) => map.set(photo.id, index));
    return map;
  }, [data]);

  if (missing) {
    return (
      <div className="shell album-detail">
        <EmptyState
          eyebrow="LOST ALBUM"
          title="这本相册不在了。"
          description="它可能被删除，或者从未存在。"
          action={{ to: '/gallery', label: '返回相册' }}
        />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="shell album-detail">
        {failed ? (
          <ErrorState description="相册没有送达。" onRetry={load} />
        ) : (
          <LoadingLine label="正在展开相册" />
        )}
      </div>
    );
  }

  const album = data.album;
  const dateRange =
    data.photos.length > 0
      ? `${data.photos[data.photos.length - 1].uploadedOn} ~ ${data.photos[0].uploadedOn}`
      : null;

  const onUpload = async (files: FileList | null) => {
    const list = Array.from(files ?? []);
    if (list.length === 0) return;
    setUploadProgress({ done: 0, total: list.length });
    const failures: string[] = [];
    for (const file of list) {
      try {
        await api.uploadPhoto(album.id, file);
      } catch (err) {
        failures.push(`${file.name}：${err instanceof Error ? err.message : '上传失败'}`);
      }
      setUploadProgress((prev) => (prev ? { ...prev, done: prev.done + 1 } : prev));
    }
    if (failures.length > 0) {
      window.alert(`有 ${failures.length} 张上传失败：\n${failures.join('\n')}`);
    }
    setUploadProgress(null);
    if (uploadRef.current) uploadRef.current.value = '';
    load();
  };

  const onRename = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = String(formData.get('title') ?? '').trim();
    if (!title) return;
    try {
      await api.updateAlbum(album.id, {
        title,
        description: String(formData.get('description') ?? '').trim() || undefined,
      });
      setEditing(false);
      load();
    } catch (err) {
      window.alert(err instanceof Error ? err.message : '保存失败，稍后再试。');
    }
  };

  const onDeleteAlbum = async () => {
    if (!window.confirm(`删除相册「${album.title}」？`)) return;
    try {
      await api.deleteAlbum(album.id);
      navigate('/gallery');
    } catch (err) {
      window.alert(err instanceof Error ? err.message : '删除失败，稍后再试。');
    }
  };

  const onDeletePhoto = async (photo: AlbumPhoto) => {
    if (!window.confirm('删除这张照片？')) return;
    try {
      await api.deletePhoto(album.id, photo.id);
      load();
      setViewer(null);
    } catch (err) {
      window.alert(err instanceof Error ? err.message : '删除失败，稍后再试。');
    }
  };

  return (
    <div className="album-detail">
      <div className="shell">
        <Link to="/gallery" className="text-link album-detail__back">
          <ArrowLeft aria-hidden="true" /> 相册
        </Link>

        {editing ? (
          <form className="album-form album-form--wide" onSubmit={(event) => void onRename(event)}>
            <label className="field">
              <span>相册名称</span>
              <input name="title" defaultValue={album.title} maxLength={60} required autoFocus />
            </label>
            <label className="field">
              <span>一句话描述</span>
              <input name="description" defaultValue={album.description ?? ''} maxLength={200} placeholder="可选" />
            </label>
            <div className="btn-row">
              <button type="submit" className="btn btn--solid">
                保存
              </button>
              <button type="button" className="btn" onClick={() => setEditing(false)}>
                取消
              </button>
            </div>
          </form>
        ) : (
          <header className="album-detail__head">
            <p className="eyebrow">ALBUM</p>
            <h1 className="display-xl">{album.title}</h1>
            {album.description ? <p className="album-detail__desc">{album.description}</p> : null}
            <p className="meta-line">
              <span>{data.photos.length} 张照片</span>
              {dateRange ? <span>{dateRange}</span> : null}
            </p>
          </header>
        )}

        {isOwner && !editing ? (
          <div className="album-toolbar">
            <button
              type="button"
              className="btn"
              disabled={uploadProgress !== null}
              onClick={() => uploadRef.current?.click()}
            >
              <ImagePlus aria-hidden="true" />
              {uploadProgress ? `上传中 ${uploadProgress.done}/${uploadProgress.total}` : '上传照片'}
            </button>
            <button type="button" className="btn" onClick={() => setEditing(true)}>
              <Pencil aria-hidden="true" /> 编辑信息
            </button>
            <button type="button" className="btn btn--danger" onClick={() => void onDeleteAlbum()}>
              删除相册
            </button>
            <input
              ref={uploadRef}
              type="file"
              accept="image/*"
              multiple
              hidden
              onChange={(event) => void onUpload(event.target.files)}
            />
          </div>
        ) : null}
      </div>

      <div className="shell">
        {data.photos.length === 0 ? (
          <EmptyState
            eyebrow="EMPTY ALBUM"
            title="这本相册还空着。"
            description={isOwner ? '上传第一张照片，它会出现在这里。' : '照片会在之后慢慢填满。'}
          />
        ) : (
          months.map(([month, photos]) => {
            const [year, monthNumber] = month.split('-');
            return (
              <section key={month} className="album-month" aria-label={`${year} 年 ${Number(monthNumber)} 月`}>
                <div className="album-month__head" data-reveal>
                  <span className="album-month__year">{year}</span>
                  <span className="album-month__name">{Number(monthNumber)} 月</span>
                  <span className="rule" />
                  <span className="meta">{photos.length} PHOTOS</span>
                </div>
                <div className="album-masonry">
                  {photos.map((photo) => (
                    <button
                      type="button"
                      key={photo.id}
                      className="album-photo"
                      data-reveal
                      onClick={() => setViewer({ index: indexById.get(photo.id) ?? 0 })}
                      aria-label={`查看照片：${photo.caption ?? photo.uploadedOn}`}
                    >
                      <span className="album-photo__frame">
                        <img
                          src={photo.thumb}
                          alt={photo.caption ?? photo.uploadedOn}
                          loading="lazy"
                          decoding="async"
                          onError={(event) => {
                            event.currentTarget.style.visibility = 'hidden';
                            event.currentTarget.parentElement?.classList.add('img-frame--fallback');
                          }}
                        />
                      </span>
                      {photo.caption ? <span className="album-photo__cap">{photo.caption}</span> : null}
                    </button>
                  ))}
                </div>
              </section>
            );
          })
        )}
      </div>

      {viewer ? (
        <AlbumLightbox
          photos={data.photos}
          index={viewer.index}
          onClose={() => setViewer(null)}
          onIndex={(index) => setViewer({ index })}
          onDelete={isOwner ? onDeletePhoto : undefined}
        />
      ) : null}
    </div>
  );
}
