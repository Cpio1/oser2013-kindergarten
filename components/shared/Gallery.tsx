'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { site } from '@/lib/site-data';
import { Icon } from './Icons';
import { SoftStar } from './Motifs';
import { Scenery } from './Scenery';
import { Section, SectionHeading } from './ui';

/** Сколько превью видно сразу (совпадает с CSS .gallery-grid) */
const VISIBLE = { mobile: 4, desktop: 6 };

/**
 * Галерея — общий компонент: одна разметка, число превью и сетка меняются CSS,
 * поэтому фотографии не загружаются дважды. Раздел появляется только при наличии фото.
 */
export default function Gallery() {
  const photos = site.gallery;
  const [index, setIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const isOpen = index !== null;
  const count = photos.length;

  const open = (i: number) => {
    opener.current = document.activeElement as HTMLElement | null;
    setIndex(i);
  };
  const close = useCallback(() => dialog.current?.close(), []);
  const move = useCallback((step: number) => setIndex((v) => (v === null ? v : (v + step + count) % count)), [count]);

  useEffect(() => {
    if (!isOpen) return;
    const d = dialog.current;
    if (d && !d.open) d.showModal();
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = 'hidden';
    return () => {
      root.style.overflow = previous;
    };
  }, [isOpen]);

  if (!count) return null;
  const current = index !== null ? photos[index] : null;

  return (
    <Section id="gallery" className="section-pad">
      <Scenery kind="gallery" />
      <div className="container-x">
        <SectionHeading id="gallery" eyebrow="Балабақша сәттері" title="Галерея" decor={<SoftStar className="decor decor-xs" />} />
        <ul className="gallery-grid">
          {photos.map((photo, i) => (
            <li key={photo.src} className="gallery-item">
              <span className="gallery-mat" aria-hidden="true" />
              <button type="button" className="gallery-thumb" onClick={() => open(i)}>
                <span className="sr-only">Үлкейту: </span>
                <img
                  src={photo.thumbnail ?? photo.src}
                  width={photo.width}
                  height={photo.height}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                />
              </button>
            </li>
          ))}
        </ul>
        {count > VISIBLE.mobile && (
          <div className={`mt-5 ${count > VISIBLE.desktop ? '' : 'sm:hidden'}`}>
            <button type="button" className="btn btn-secondary" onClick={() => open(0)}>
              <Icon name="images" className="size-5" />
              <span>Барлық фотолар ({count})</span>
            </button>
          </div>
        )}
      </div>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Фотосуреттерді қарау"
        onClose={() => {
          setIndex(null);
          opener.current?.focus();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            e.preventDefault();
            move(e.key === 'ArrowRight' ? 1 : -1);
          }
        }}
      >
        {current && (
          <div className="lightbox-inner">
            <div className="lightbox-bar">
              <p className="font-bold" aria-live="polite">
                {index! + 1} / {count}
              </p>
              <button type="button" className="icon-btn" onClick={close} aria-label="Жабу">
                <Icon name="close" />
              </button>
            </div>
            <div
              className="lightbox-stage"
              onClick={(e) => { if (e.target === e.currentTarget) close(); }}
              onTouchStart={(e) => {
                touchStart.current = e.touches.length === 1 ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : null;
              }}
              onTouchCancel={() => { touchStart.current = null; }}
              onTouchEnd={(e) => {
                if (!touchStart.current) return;
                const dx = e.changedTouches[0].clientX - touchStart.current.x;
                const dy = e.changedTouches[0].clientY - touchStart.current.y;
                touchStart.current = null;
                if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.25) move(dx < 0 ? 1 : -1);
              }}
            >
              <img key={current.src} src={current.src} width={current.width} height={current.height} alt={current.alt} />
            </div>
            <div className="lightbox-bar">
              <button type="button" className="icon-btn" onClick={() => move(-1)} aria-label="Алдыңғы фото" disabled={count < 2}>
                <Icon name="chevron-left" />
              </button>
              <p className="lightbox-caption">{current.alt}</p>
              <button type="button" className="icon-btn" onClick={() => move(1)} aria-label="Келесі фото" disabled={count < 2}>
                <Icon name="chevron-right" />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </Section>
  );
}
