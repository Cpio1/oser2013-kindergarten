'use client';

import { useState } from 'react';
import { site, type Meal, type WeeklyMenu } from '@/lib/site-data';
import { Icon } from './Icons';
import { MealArt } from './MealArt';
import { Modal, Placeholder } from './Modal';

const mealTone = { breakfast: 'sun', lunch: 'berry', snack: 'leaf' } as const;

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
          <li key={m.id} className="reveal">
            <button type="button" className={`mcard mcard-${m.id}`} onClick={() => setOpenId(m.id)} aria-haspopup="dialog">
              <span className="mcard-deco" aria-hidden="true" />
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
          <Icon name="calendar" className="size-7" />
        </span>
        <span className="menu-card-text">
          <span className="menu-card-title">Апталық ас мәзірі</span>
          <span className="menu-card-hint">Аптаның әр күніне арналған мәзір</span>
        </span>
        <Icon name="arrow-right" className="menu-card-arrow size-6" />
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
