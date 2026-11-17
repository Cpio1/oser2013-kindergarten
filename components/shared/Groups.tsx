'use client';

import Image from 'next/image';
import { useState } from 'react';
import { site, type Group } from '@/lib/site-data';
import { Icon } from './Icons';
import { Modal, Placeholder } from './Modal';

const modalTone = { apricot: 'apricot', sun: 'sun', leaf: 'leaf', sky: 'sky' } as const;

/** Иллюстрации групп (1672×941). Название группы уже нарисовано на картинке. */
const groupImage: Record<string, string> = {
  kulynshak: '/qulynshaq.png',
  baldauren: '/baldauren.png',
  balbobek: '/balbobek.png',
  bobek: '/bobek.png',
};
const IMG_W = 1672;
const IMG_H = 941;

function GroupPicture({ group, sizes }: { group: Group; sizes: string }) {
  return (
    <Image
      src={groupImage[group.id]}
      width={IMG_W}
      height={IMG_H}
      sizes={sizes}
      alt={`«${group.name}» тобы — ${group.label}`}
      className="gcard-img"
      unoptimized
    />
  );
}

/**
 * Карточки групп: компьютер — сетка 2×2 (картинка слева, текст справа),
 * телефон — компактные строки. Нажатие открывает окно группы с местом для видео.
 */
export function GroupCards({ variant }: { variant: 'desktop' | 'mobile' }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const current = site.groups.find((g) => g.id === openId) ?? null;

  return (
    <>
      <ul className={`gcards gcards-${variant}`}>
        {site.groups.map((group, i) => (
          <li key={group.id} className="reveal" style={{ animationDelay: `${i * 60}ms` }}>
            <button type="button" className={`gcard gcard-${group.motif}`} onClick={() => setOpenId(group.id)} aria-haspopup="dialog">
              <span className="gcard-art">
                <GroupPicture group={group} sizes={variant === 'mobile' ? '100vw' : '(min-width: 64em) 36rem, 100vw'} />
              </span>
              <span className="gcard-text">
                {/* название уже нарисовано на картинке — оставляем только для экранных чтецов */}
                <span className="sr-only">«{group.name}» тобы</span>
                <span className="gcard-label">{group.label}</span>
                <span className="gcard-meta">
                  <span className="gcard-age">{group.age}</span>
                  <span className="gcard-more">
                    <Icon name="play" className="size-4" />
                    Толығырақ
                  </span>
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Modal
        open={current !== null}
        onClose={() => setOpenId(null)}
        title={current ? `«${current.name}» тобы` : ''}
        eyebrow={current?.label}
        tone={current ? modalTone[current.tone] : 'sun'}
      >
        {current && <GroupDetails group={current} variant={variant} />}
      </Modal>
    </>
  );
}

function GroupDetails({ group, variant }: { group: Group; variant: string }) {
  const video = group.video;
  return (
    <div className="grid gap-4">
      <div className={`gmodal-head gcard-${group.motif}`}>
        <div className="gmodal-banner">
          <GroupPicture group={group} sizes="(min-width: 40em) 36rem, 100vw" />
        </div>
        <span className="gcard-age gmodal-age">{group.age}</span>
      </div>
      <section aria-label="Топ туралы бейне">
        <h3 className="modal-subtitle">
          <Icon name="video" className="size-5" />
          Топ туралы бейне
        </h3>
        {video ? (
          <video className="gmodal-video" controls playsInline preload="metadata" width={video.width} height={video.height} poster={video.poster || undefined} aria-label={video.label}>
            <source src={video.src} />
          </video>
        ) : (
          <Placeholder icon="video" text="Бейне жақында қосылады" className="gmodal-video" />
        )}
      </section>
    </div>
  );
}
