// 相册灯箱：全屏大图、左右切换、滑动翻页，管理员可直接删除照片。
// 打开时把焦点移入弹层，关闭后归还触发元素；Esc 关闭，Tab 在层内循环。

import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, Trash2, X } from 'lucide-react';
import type { AlbumPhoto } from '../lib/types';

interface AlbumLightboxProps {
  photos: AlbumPhoto[];
  index: number;
  onClose: () => void;
  onIndex: (index: number) => void;
  onDelete?: (photo: AlbumPhoto) => Promise<void>;
}

export default function AlbumLightbox({ photos, index, onClose, onIndex, onDelete }: AlbumLightboxProps) {
  const touchRef = useRef<{ x: number; y: number } | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);
  const photo = photos[index];

  const go = useCallback(
    (next: number) => {
      onIndex((next + photos.length) % photos.length);
    },
    [photos.length, onIndex],
  );

  const prev = useCallback(() => go(index - 1), [go, index]);
  const next = useCallback(() => go(index + 1), [go, index]);

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') prev();
      if (event.key === 'ArrowRight') next();
      if (event.key === 'Tab') {
        const dialog = document.querySelector<HTMLElement>('.lightbox--album');
        if (!dialog) return;
        const focusable = Array.from(
          dialog.querySelectorAll<HTMLElement>('button:not([disabled]), [href], [tabindex="0"]'),
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;
        if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        } else if (event.shiftKey && (active === first || active === null)) {
          event.preventDefault();
          last.focus();
        }
      }
    },
    [onClose, prev, next],
  );

  useEffect(() => {
    restoreRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeRef.current?.focus();
    document.addEventListener('keydown', onKeyDown);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = overflow;
      restoreRef.current?.focus?.();
    };
  }, [onKeyDown]);

  if (!photo) return null;

  return createPortal(
    <div
      className="lightbox lightbox--album"
      role="dialog"
      aria-modal="true"
      aria-label="照片查看器"
      onClick={onClose}
      onTouchStart={(event) => {
        touchRef.current = { x: event.touches[0].clientX, y: event.touches[0].clientY };
      }}
      onTouchEnd={(event) => {
        const start = touchRef.current;
        touchRef.current = null;
        if (!start) return;
        const deltaX = event.changedTouches[0].clientX - start.x;
        const deltaY = event.changedTouches[0].clientY - start.y;
        if (Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4) {
          deltaX > 0 ? prev() : next();
        }
      }}
    >
      <button ref={closeRef} type="button" className="lightbox-btn lightbox-close" aria-label="关闭" onClick={onClose}>
        <X />
      </button>
      {photos.length > 1 ? (
        <button
          type="button"
          className="lightbox-btn lightbox-prev"
          aria-label="上一张"
          onClick={(event) => {
            event.stopPropagation();
            prev();
          }}
        >
          <ChevronLeft />
        </button>
      ) : null}
      {photos.length > 1 ? (
        <button
          type="button"
          className="lightbox-btn lightbox-next"
          aria-label="下一张"
          onClick={(event) => {
            event.stopPropagation();
            next();
          }}
        >
          <ChevronRight />
        </button>
      ) : null}

      <div className="lightbox-stage" onClick={(event) => event.stopPropagation()}>
        <div className="lightbox-photo" key={photo.id}>
          <img src={photo.url || photo.thumb} alt={photo.caption ?? '相册照片'} />
        </div>
        <div className="lightbox-caption">
          {photo.caption ?? '未命名瞬间'}
          <span>上传于 {photo.uploadedAt}</span>
        </div>
        <div className="lightbox-count">
          {String(index + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
        </div>
        {onDelete ? (
          <button
            type="button"
            className="lightbox-btn lightbox-delete"
            aria-label="删除这张照片"
            onClick={(event) => {
              event.stopPropagation();
              void onDelete(photo);
            }}
          >
            <Trash2 />
          </button>
        ) : null}
      </div>
    </div>,
    document.body,
  );
}
