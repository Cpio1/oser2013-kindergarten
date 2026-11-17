'use client';

import { useState } from 'react';
import { site, type Meal, type WeeklyMenu } from '@/lib/site-data';
import { Icon } from './Icons';
import { MealArt } from './MealArt';
import { Modal, Placeholder } from './Modal';

const mealTone = { breakfast: 'sun', lunch: 'apricot', snack: 'berry' } as const;

/**
 * Три яркие карточки питания + кнопка «Апталық ас мәзірі».
 * Карточка открывает окно с местом для настоящих фотографий (site.meals[].photos),
 * кнопка меню — окно с изображением или PDF (site.weeklyMenu).
 */
export function MealCards({ variant }: { variant: 'desktop' | 'mobile' }) {
  const [openId, setOpenId] = useState<Meal['id'] | 'menu' | null>(null);
  const meal = site.meals.find((m) => m.id === openId) ?? null;

  return (
    <div className={`mcards-wrap mcards-${variant}`}>
      <ol className="mcards">
        {site.meals.map((m, i) => (
          <li key={m.id} className="reveal" style={{ animationDelay: `${i * 80}ms` }}>
            <button type="button" className={`mcard mcard-${m.id}`} onClick={() => setOpenId(m.id)} aria-haspopup="dialog">
              <span className="mcard-blob" aria-hidden="true" />
              <MealDeco kind={m.id} />
              <span className="mcard-order" aria-hidden="true">
                {i + 1}
              </span>
              <span className="mcard-art">
                <MealArt kind={m.id} id={`m-${variant}-${m.id}`} className="mcard-svg" />
              </span>
              <span className="mcard-text">
                <span className="mcard-name">{m.name}</span>
                <span className="mcard-more">
                  <Icon name="images" className="size-4" />
                  Суреттер
                </span>
              </span>
            </button>
          </li>
        ))}
      </ol>

      <button type="button" className="menu-card reveal" onClick={() => setOpenId('menu')} aria-haspopup="dialog">
        <span className="menu-card-icon" aria-hidden="true">
          <Icon name="calendar" className="size-6" />
        </span>
        <span className="menu-card-text">
          <span className="menu-card-title">Апталық ас мәзірі</span>
          <span className="menu-card-hint">Аптаның әр күніне арналған мәзір</span>
        </span>
        <MenuSheet />
        <span className="menu-card-arrow" aria-hidden="true">
          <Icon name="arrow-right" className="size-5" />
        </span>
      </button>

      <Modal
        open={meal !== null}
        onClose={() => setOpenId(null)}
        title={meal?.name ?? ''}
        eyebrow="Тамақтану"
        tone={meal ? mealTone[meal.id] : 'sun'}
      >
        {meal && <MealPhotos meal={meal} variant={variant} />}
      </Modal>

      <Modal open={openId === 'menu'} onClose={() => setOpenId(null)} title="Апталық ас мәзірі" eyebrow="Тамақтану" tone="sky" wide={!!site.weeklyMenu}>
        <MenuViewer menu={site.weeklyMenu} />
      </Modal>
    </div>
  );
}

function MealPhotos({ meal, variant }: { meal: Meal; variant: string }) {
  if (meal.photos.length) {
    return (
      <ul className="mphotos">
        {meal.photos.map((p) => (
          <li key={p.src}>
            <a href={p.src} target="_blank" rel="noopener noreferrer" className="mphoto">
              <img src={p.thumbnail ?? p.src} width={p.width} height={p.height} alt={p.alt} loading="lazy" decoding="async" style={p.position ? { objectPosition: p.position } : undefined} />
              <span className="sr-only"> (жаңа бетте ашылады)</span>
            </a>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="grid gap-4">
      <div className={`mmodal-art mcard-${meal.id}`}>
        <span className="mcard-blob" aria-hidden="true" />
        <MealArt kind={meal.id} id={`mm-${variant}-${meal.id}`} className="mcard-svg" />
      </div>
      <ul className="mphotos" aria-label="Фотосуреттер орны">
        {[1, 2, 3].map((n) => (
          <li key={n}>
            <Placeholder icon="images" text="Фото жақында қосылады" className="mphoto-ph" />
          </li>
        ))}
      </ul>
      <p className="modal-note">Мұнда балабақшада балаларға дайындалатын тағамдардың нақты суреттері орналастырылады.</p>
    </div>
  );
}

/** Небольшие декоративные элементы вокруг блюда — у каждой карточки свои */
function MealDeco({ kind }: { kind: Meal['id'] }) {
  return (
    <span className="mcard-deco" aria-hidden="true">
      {kind === 'breakfast' && (
        <>
          <svg className="md md-a" viewBox="0 0 40 40">
            <g fill="#ffd23f">
              {Array.from({ length: 8 }, (_, i) => (
                <rect key={i} x="18" y="1" width="4" height="8" rx="2" transform={`rotate(${i * 45} 20 20)`} />
              ))}
            </g>
            <circle cx="20" cy="20" r="10" fill="#ffc21a" />
            <circle cx="17" cy="17" r="3.5" fill="#fff3b0" />
          </svg>
          <svg className="md md-b" viewBox="0 0 20 20"><path d="M10 0c1.2 6 3.8 8.8 10 10-6.2 1.2-8.8 3.8-10 10C8.8 13.8 6.2 11.2 0 10 6.2 8.8 8.8 6.2 10 0Z" fill="#fff" /></svg>
          <svg className="md md-c" viewBox="0 0 24 20"><circle cx="7" cy="12" r="6" fill="#e8344a" /><circle cx="17" cy="12" r="6" fill="#ff5468" /><path d="M7 6q3-6 5-6 2 0 5 6" stroke="#2f8f4b" strokeWidth="1.6" fill="none" /><circle cx="5" cy="10" r="1.6" fill="#fff" opacity=".7" /></svg>
        </>
      )}
      {kind === 'lunch' && (
        <>
          <svg className="md md-a" viewBox="0 0 40 30"><path d="M3 27C3 12 16 2 37 3 37 20 24 29 3 27Z" fill="#2ecbb7" /><path d="M5 25Q18 16 33 6" stroke="#0e8f84" strokeWidth="1.8" fill="none" /></svg>
          <svg className="md md-b" viewBox="0 0 20 20"><path d="M10 0c1.2 6 3.8 8.8 10 10-6.2 1.2-8.8 3.8-10 10C8.8 13.8 6.2 11.2 0 10 6.2 8.8 8.8 6.2 10 0Z" fill="#fff" /></svg>
          <svg className="md md-c" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#ffd34d" /><circle cx="12" cy="12" r="8" fill="#fff3c4" /><g stroke="#ffd34d" strokeWidth="1.6">{[0, 60, 120].map((r) => <path key={r} d="M12 4v16" transform={`rotate(${r} 12 12)`} />)}</g></svg>
        </>
      )}
      {kind === 'snack' && (
        <>
          <svg className="md md-a" viewBox="0 0 32 32"><g fill="#ff8fb5">{Array.from({ length: 5 }, (_, i) => <ellipse key={i} cx="16" cy="8" rx="5.5" ry="7.5" transform={`rotate(${i * 72} 16 16)`} />)}</g><circle cx="16" cy="16" r="4.5" fill="#ffd34d" /></svg>
          <svg className="md md-b" viewBox="0 0 24 22"><path d="M12 21C4 15 0 11 0 6.5A6 6 0 0 1 12 4a6 6 0 0 1 12 2.5C24 11 20 15 12 21Z" fill="#ff7aa6" /><circle cx="6" cy="6" r="1.8" fill="#fff" opacity=".7" /></svg>
          <svg className="md md-c" viewBox="0 0 20 20"><path d="M10 0c1.2 6 3.8 8.8 10 10-6.2 1.2-8.8 3.8-10 10C8.8 13.8 6.2 11.2 0 10 6.2 8.8 8.8 6.2 10 0Z" fill="#fff" /></svg>
        </>
      )}
    </span>
  );
}

/** Маленькая иллюстрация «листок меню» для карточки недельного меню */
function MenuSheet() {
  return (
    <svg className="menu-card-sheet" viewBox="0 0 84 64" aria-hidden="true">
      <rect x="18" y="6" width="44" height="54" rx="7" fill="#fff" stroke="#ffb35c" strokeWidth="2.5" transform="rotate(-6 40 33)" />
      <g transform="rotate(-6 40 33)">
        <rect x="18" y="6" width="44" height="12" rx="6" fill="#ffcf5c" />
        <g stroke="#f4a3b9" strokeWidth="3" strokeLinecap="round">
          <path d="M26 27h20" />
          <path d="M26 36h26" />
          <path d="M26 45h16" />
        </g>
        <g fill="#2ecbb7">
          <circle cx="54" cy="27" r="2.6" />
          <circle cx="54" cy="45" r="2.6" />
        </g>
      </g>
      <g transform="translate(66 18) rotate(18)">
        <rect x="-2" y="0" width="4" height="34" rx="2" fill="#ff8a5c" />
        <ellipse cx="0" cy="0" rx="5" ry="7" fill="#ff8a5c" />
      </g>
      <g transform="translate(10 22) rotate(-16)">
        <rect x="-2" y="6" width="4" height="30" rx="2" fill="#2ecbb7" />
        <path d="M-5 0v8a5 5 0 0 0 10 0V0" stroke="#2ecbb7" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      <path d="M74 54c.8 4 2.4 5.6 6.4 6.4-4 .8-5.6 2.4-6.4 6.4-.8-4-2.4-5.6-6.4-6.4 4-.8 5.6-2.4 6.4-6.4Z" fill="#ffd23f" transform="translate(0 -12)" />
    </svg>
  );
}

const ZOOMS = [1, 1.5, 2, 3];

function MenuViewer({ menu }: { menu: WeeklyMenu | null }) {
  const [zoom, setZoom] = useState(0);
  if (!menu) {
    return <Placeholder icon="calendar" text="Ас мәзірі жақында қосылады" className="menu-ph" />;
  }
  if (menu.kind === 'pdf') {
    return (
      <div className="grid gap-3">
        <iframe className="menu-pdf" src={menu.src} title="Апталық ас мәзірі (PDF)" />
        <a href={menu.src} target="_blank" rel="noopener noreferrer" className="btn btn-secondary justify-center">
          <Icon name="document" className="size-5" />
          <span>PDF-ті жаңа бетте ашу</span>
        </a>
      </div>
    );
  }
  const scale = ZOOMS[zoom];
  return (
    <div className="grid gap-3">
      <div className="menu-tools" role="group" aria-label="Масштаб">
        <button type="button" className="icon-btn" onClick={() => setZoom((z) => Math.max(0, z - 1))} disabled={zoom === 0} aria-label="Кішірейту">
          <Icon name="zoom-out" />
        </button>
        <span className="menu-zoom" aria-live="polite">
          {Math.round(scale * 100)}%
        </span>
        <button type="button" className="icon-btn" onClick={() => setZoom((z) => Math.min(ZOOMS.length - 1, z + 1))} disabled={zoom === ZOOMS.length - 1} aria-label="Үлкейту">
          <Icon name="zoom-in" />
        </button>
        <a href={menu.src} target="_blank" rel="noopener noreferrer" className="text-link ml-auto">
          Толық өлшемде ашу
        </a>
      </div>
      <div className="menu-scroll" tabIndex={0} aria-label="Мәзір суреті, айналдыруға болады">
        <img src={menu.src} width={menu.width} height={menu.height} alt={menu.alt} style={{ width: `${scale * 100}%` }} />
      </div>
    </div>
  );
}
