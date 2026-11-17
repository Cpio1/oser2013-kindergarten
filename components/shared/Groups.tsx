'use client';

import { useState } from 'react';
import { site, type Group } from '@/lib/site-data';
import { GroupArt } from './GroupArt';
import { Icon } from './Icons';
import { Modal, Placeholder } from './Modal';

const modalTone = { apricot: 'apricot', sun: 'sun', leaf: 'leaf', sky: 'sky' } as const;

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
                <GroupArt kind={group.motif} id={`g-${variant}-${group.id}`} className="gcard-svg" />
              </span>
              <span className="gcard-text">
                <span className="gcard-name">
                  «{group.name}» <span className="gcard-name-sub">тобы</span>
                </span>
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
      <div className={`gmodal-banner gcard-${group.motif}`}>
        <GroupArt kind={group.motif} id={`gm-${variant}-${group.id}`} className="gcard-svg" />
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
