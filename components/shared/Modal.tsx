'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { Icon } from './Icons';

/**
 * Модальное окно на <dialog>: фокус внутри, Esc закрывает, клик по фону закрывает,
 * прокрутка страницы блокируется, после закрытия фокус возвращается на карточку.
 * Окно никогда не выходит за экран: шапка закреплена, содержимое прокручивается.
 */
export function Modal({
  open,
  onClose,
  title,
  eyebrow,
  tone = 'sun',
  wide = false,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  eyebrow?: string;
  tone?: 'sun' | 'sky' | 'leaf' | 'apricot' | 'berry';
  wide?: boolean;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) {
      opener.current = document.activeElement as HTMLElement | null;
      d.showModal();
      const root = document.documentElement;
      const previous = root.style.overflow;
      root.style.overflow = 'hidden';
      return () => {
        root.style.overflow = previous;
      };
    }
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className={`modal modal-${tone} ${wide ? 'modal-wide' : ''}`}
      aria-labelledby="modal-title"
      onClose={() => {
        onClose();
        opener.current?.focus();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) ref.current?.close();
      }}
    >
      {open && (
        <div className="modal-inner">
          <div className="modal-head">
            <div className="min-w-0">
              {eyebrow && <p className="modal-eyebrow">{eyebrow}</p>}
              <h2 id="modal-title" className="modal-title">
                {title}
              </h2>
            </div>
            <button type="button" className="icon-btn modal-close" onClick={() => ref.current?.close()} aria-label="Жабу">
              <Icon name="close" />
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      )}
    </dialog>
  );
}

/** Аккуратная заглушка для будущих материалов (видео, фото, меню) */
export function Placeholder({ icon, text, hint, className = '' }: { icon: 'video' | 'images' | 'calendar'; text: string; hint?: string; className?: string }) {
  return (
    <div className={`placeholder ${className}`}>
      <span className="placeholder-icon" aria-hidden="true">
        <Icon name={icon} className="size-7" />
      </span>
      <p className="placeholder-text">{text}</p>
      {hint && <p className="placeholder-hint">{hint}</p>}
    </div>
  );
}
