/**
 * Единый источник данных сайта «Осер 2013».
 * Все тексты, ссылки, контакты и пути к медиа редактируются только здесь —
 * десктопная и мобильная версии читают одни и те же значения.
 *
 * Пустая строка / null / пустой массив = данных пока нет, соответствующий
 * элемент интерфейса автоматически скрывается.
 */

export type Tone = 'apricot' | 'sun' | 'leaf' | 'sky';
export type MotifKind = 'foal' | 'flower' | 'sprout' | 'chick';

export type ImageMedia = {
  kind: 'image';
  /** Путь от папки public, с точным регистром: '/images/main-page.png' */
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Прозрачное PNG/SVG: показывать целиком через object-fit: contain */
  transparent?: boolean;
  fit?: 'contain' | 'cover';
};

export type VideoMedia = {
  kind: 'video';
  src: string;
  width: number;
  height: number;
  /** Подпись для aria-label */
  label: string;
  poster?: string;
};

export type Photo = {
  thumbnail?: string;
  src: string;
  width: number;
  height: number;
  /** Осмысленное описание на казахском языке */
  alt: string;
  /** object-position для превью, например '50% 30%' */
  position?: string;
};

export type Group = {
  id: string;
  name: string;
  label: string;
  age: string;
  motif: MotifKind;
  tone: Tone;
  /**
   * Видеоролик о группе. Пока null — в окне группы показывается заглушка
   * «Бейне жақында қосылады». Чтобы подключить: положить файл в public/videos/
   * и указать { kind: 'video', src: '/videos/kulynshak.mp4', width: 1280, height: 720, label: '…', poster?: '/images/…' }.
   */
  video: VideoMedia | null;
};

export type Meal = {
  id: 'breakfast' | 'lunch' | 'snack';
  name: string;
  /**
   * Настоящие фотографии блюд садика. Пустой массив — показываются заглушки.
   * Пример: { src: '/images/meals/breakfast-1.webp', width: 1200, height: 900, alt: 'Таңғы ас: …' }
   */
  photos: Photo[];
};

/**
 * Недельное меню: изображение (jpg/png/webp) или PDF из public/.
 * null — в окне показывается «Ас мәзірі жақында қосылады».
 * Примеры:
 *   { kind: 'image', src: '/menu/weekly-menu.jpg', width: 1240, height: 1754, alt: 'Апталық ас мәзірі' }
 *   { kind: 'pdf', src: '/menu/weekly-menu.pdf' }
 */
export type WeeklyMenu =
  | { kind: 'image'; src: string; width: number; height: number; alt: string }
  | { kind: 'pdf'; src: string };

export type SiteDocument = { name: string; href: string };

/** Only web links and public file paths can be opened as documents. */
export function documentHref(value: string): string | null {
  const href = value.trim();
  if (/^\/(?!\/)[^\s]+$/.test(href)) return href;
  try {
    const url = new URL(href);
    return ['https:', 'http:'].includes(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
}

export const site = {
  name: 'Осер 2013',
  tagline: 'Қазақ тілді бөбекжай-бақша',
  headline: 'Әр баланың алғашқы қадамына қамқорлық',
  intro: 'Қарақыстақ ауылындағы балалардың бірге ойнап, үйреніп, өсуіне арналған орта',
  slogan: 'Кішкентай қадамдар. Жылы қамқорлық.',

  address: {
    full: 'Алматы облысы, Жамбыл ауданы, Қарақыстақ ауылы, Бердіғұлов көшесі, 19А',
    region: 'Алматы облысы',
    district: 'Жамбыл ауданы',
    locality: 'Қарақыстақ ауылы',
    street: 'Бердіғұлов көшесі, 19А',
  },

  language: 'Қазақ тілі',

  about: {
    title: 'Қарақыстақ ауылындағы бөбекжай-бақша',
    paragraphs: [
      '«Осер 2013» бөбекжай-бақшасы Алматы облысы, Жамбыл ауданындағы Қарақыстақ ауылында орналасқан. Бөбекжай-бақшада оқу мен тәрбие қазақ тілінде жүргізіледі.',
      'Балалар жасына қарай төрт топқа бөлінеді. Күніне үш мезгіл тамақтану қарастырылған: таңғы ас, түскі ас және бесін ас.',
    ],
    /** «Мақсатымыз» — текст без сокращений */
    goal: {
      title: 'Мақсатымыз',
      paragraphs: [
        'Әрбір баланың жеке қабілеті мен шығармашылық әлеуетін ашуға, жан-жақты дамыған, білімді, тәрбиелі, дені сау, ұлттық құндылықтарды бойына сіңірген тұлға болып қалыптасуына қолайлы орта қалыптастыру.',
        'Баланың қауіпсіздігі мен денсаулығын сақтай отырып, мейірімділікке, адамгершілікке, отансүйгіштікке тәрбиелеу және ата-анамен тығыз ынтымақтастық орнату.',
      ],
    },
    facts: [
      { label: 'Орналасуы', value: 'Қарақыстақ ауылы', art: 'pin' },
      { label: 'Оқыту тілі', value: 'Қазақ тілі', art: 'book' },
      { label: 'Топ саны', value: '4 топ', art: 'blocks' },
      { label: 'Тамақтану', value: 'Күніне 3 мезгіл', art: 'spoon' },
    ] as { label: string; value: string; art: 'pin' | 'book' | 'blocks' | 'spoon' }[],
  },

  /** Компактные факты первого экрана: before + выделенная часть + after */
  heroFacts: [
    { id: 'groups', before: '', em: '4', after: ' топ' },
    { id: 'lang', before: '', em: 'Қазақ', after: ' тілінде' },
    { id: 'meals', before: 'Күніне ', em: '3', after: ' мезгіл тамақ' },
  ],

  groups: [
    { id: 'kulynshak', name: 'Құлыншақ', label: 'Мектепалды даярлық тобы', age: '5 жастан', motif: 'foal', tone: 'apricot', video: null },
    { id: 'baldauren', name: 'Балдаурен', label: 'Ересек тобы', age: '4 жастан', motif: 'flower', tone: 'sun', video: null },
    { id: 'balbobek', name: 'Балбөбек', label: 'Орта тобы', age: '3 жастан', motif: 'sprout', tone: 'leaf', video: null },
    { id: 'bobek', name: 'Бөбек', label: 'Кіші аралас топ', age: '2–3 жас', motif: 'chick', tone: 'sky', video: null },
  ] satisfies Group[],

  meals: [
    { id: 'breakfast', name: 'Таңғы ас', photos: [] },
    { id: 'lunch', name: 'Түскі ас', photos: [] },
    { id: 'snack', name: 'Бесін ас', photos: [] },
  ] satisfies Meal[] as Meal[],

  /** Апталық ас мәзірі — см. тип WeeklyMenu */
  weeklyMenu: null as WeeklyMenu | null,

  links: {
    /** Предоставленное видео (Reel). Это не профиль аккаунта. */
    reel: 'https://www.instagram.com/reel/DZAXP9_MC3X/?mdxt=MWtndm1qdWhqcTVqeA==',
    /** Ссылка на папку документов; пустая строка оставляет сообщение о скором добавлении */
    documents: '',
    /** Точная карточка организации на карте (2ГИС / Google). Пока пусто — используется поиск по адресу */
    mapPlace: '',
  },

  contacts: {
    /** Международный формат: '+7 700 000 00 00' */
    phone: '',
    /** Международный номер WhatsApp: '+7 700 000 00 00' */
    whatsapp: '',
    whatsappMessage: 'Сәлеметсіз бе! «Осер 2013» бөбекжай-бақшасы туралы білгім келеді.',
    email: '',
    /** Только подтверждённый профиль: 'https://www.instagram.com/...' */
    instagramProfile: '',
    /** Например: 'Дүйсенбі–жұма, 08:00–19:00' */
    hours: '',
  },

  /** Local files from public/documents: { name: 'Құжат атауы', href: '/documents/file.pdf' } */
  documents: [] as SiteDocument[],

  legalName: '',
  /** Реальный домен с https:// — включает canonical и url в структурированных данных */
  domain: '',

  media: {
    logo: { kind: 'image', src: '/images/optimized/logo.webp', width: 128, height: 128, alt: 'Осер 2013 бөбекжай-бақшасының эмблемасы' } as ImageMedia | null,
    /** main-page */
    hero: { kind: 'image', src: '/images/optimized/main-page.png', width: 720, height: 720, alt: 'Осер 2013 бөбекжай-бақшасының эмблемасы', fit: 'contain' } as ImageMedia | null,
    /** Фото в арке первого экрана рядом с эмблемой (кадр 8:7, дети в центре) */
    heroPhoto: { kind: 'image', src: '/images/optimized/image21.webp', width: 1600, height: 1200, alt: 'Ұлттық киім киген балалар бөбекжай-бақша ауласында' } as ImageMedia | null,
    /** main-page2: изображение или видео для «Біз туралы» */
    about: { kind: 'image', src: '/images/optimized/image22.webp', width: 1600, height: 1200, alt: 'Ойын бөлмесінде шеңбер құрып отырған балалар мен тәрбиешілер' } as ImageMedia | VideoMedia | null,
  },

  gallery: [
    { src: '/images/optimized/image1.webp', thumbnail: '/images/optimized/image1-thumb.webp', width: 1599, height: 899, alt: '8 Наурыз мерекесіндегі балалар мен тәрбиешілер', position: '50% 50%' },
    { src: '/images/optimized/image2.webp', thumbnail: '/images/optimized/image2-thumb.webp', width: 1600, height: 1200, alt: 'Ұлттық киімдегі екі бала мерекелік дастарқан басында', position: '50% 50%' },
    { src: '/images/optimized/image3.webp', thumbnail: '/images/optimized/image3-thumb.webp', width: 1083, height: 1444, alt: 'Мерекелік безендірілген бөлмедегі балалар мен тәрбиешілер', position: '50% 50%' },
    { src: '/images/optimized/image4.webp', thumbnail: '/images/optimized/image4-thumb.webp', width: 1600, height: 1200, alt: 'Ауладағы ұлттық мерекеге жиналған балалар', position: '50% 50%' },
    { src: '/images/optimized/image5.webp', thumbnail: '/images/optimized/image5-thumb.webp', width: 1600, height: 1200, alt: 'Аулада ұлттық киіммен өнер көрсетіп тұрған балалар', position: '50% 50%' },
    { src: '/images/optimized/image6.webp', thumbnail: '/images/optimized/image6-thumb.webp', width: 1600, height: 1200, alt: 'Бөбекжай-бақша ауласындағы мерекелік би', position: '50% 50%' },
    { src: '/images/optimized/image7.webp', thumbnail: '/images/optimized/image7-thumb.webp', width: 1083, height: 1444, alt: 'Бөлмедегі мерекелік қойылымға қатысқан балалар', position: '50% 50%' },
    { src: '/images/optimized/image8.webp', thumbnail: '/images/optimized/image8-thumb.webp', width: 1083, height: 1444, alt: 'Сары киімдегі балалардың мерекелік қойылымы', position: '50% 50%' },
    { src: '/images/optimized/image9.webp', thumbnail: '/images/optimized/image9-thumb.webp', width: 1280, height: 780, alt: 'Ұлттық киімдегі балалар мен тәрбиешілердің топтық суреті', position: '50% 50%' },
    { src: '/images/optimized/image10.webp', thumbnail: '/images/optimized/image10-thumb.webp', width: 867, height: 1156, alt: 'Үстел басында тапсырма орындап отырған балалар', position: '50% 50%' },
    { src: '/images/optimized/image11.webp', thumbnail: '/images/optimized/image11-thumb.webp', width: 1200, height: 1600, alt: 'Баспалдақтағы ұлттық киім киген балалар', position: '50% 50%' },
    { src: '/images/optimized/image12.webp', thumbnail: '/images/optimized/image12-thumb.webp', width: 1600, height: 1200, alt: 'Мерекелік залдағы ұлттық киімдегі балалар', position: '50% 50%' },
    { src: '/images/optimized/image13.webp', thumbnail: '/images/optimized/image13-thumb.webp', width: 1280, height: 806, alt: 'Аулада қатар тұрған қызыл баскиімді балалар', position: '50% 50%' },
    { src: '/images/optimized/image14.webp', thumbnail: '/images/optimized/image14-thumb.webp', width: 1156, height: 486, alt: 'Мерекелік залдағы балалардың топтық суреті', position: '50% 50%' },
    { src: '/images/optimized/image15.webp', thumbnail: '/images/optimized/image15-thumb.webp', width: 1156, height: 486, alt: 'Ұлттық киімдегі балалардың топтық суреті', position: '50% 50%' },
    { src: '/images/optimized/image16.webp', thumbnail: '/images/optimized/image16-thumb.webp', width: 1156, height: 486, alt: 'Дастарқан басындағы ұлттық киім киген балалар', position: '50% 50%' },
    { src: '/images/optimized/image17.webp', thumbnail: '/images/optimized/image17-thumb.webp', width: 1280, height: 1015, alt: 'Ауладағы балалардың топтық суреті', position: '50% 50%' },
    { src: '/images/optimized/image18.webp', thumbnail: '/images/optimized/image18-thumb.webp', width: 1600, height: 1066, alt: 'Мерекелік дастарқан басындағы балалар мен ересектер', position: '50% 50%' },
    { src: '/images/optimized/image19.webp', thumbnail: '/images/optimized/image19-thumb.webp', width: 1280, height: 960, alt: 'Сынып бөлмесіндегі мерекелік киім киген балалар', position: '50% 50%' },
    { src: '/images/optimized/image20.webp', thumbnail: '/images/optimized/image20-thumb.webp', width: 1200, height: 1600, alt: 'Тақта алдында бірге тұрған балалар', position: '50% 50%' },
    { src: '/images/optimized/image21.webp', thumbnail: '/images/optimized/image21-thumb.webp', width: 1600, height: 1200, alt: 'Бөбекжай-бақша ауласындағы балалар', position: '50% 50%' },
    { src: '/images/optimized/image22.webp', thumbnail: '/images/optimized/image22-thumb.webp', width: 1600, height: 1200, alt: 'Ойын бөлмесінде шеңбер құрып отырған балалар', position: '50% 50%' },
    { src: '/images/optimized/image23.webp', thumbnail: '/images/optimized/image23-thumb.webp', width: 1600, height: 1200, alt: 'Көк және ақ киімдегі балалардың биі', position: '50% 50%' },
    { src: '/images/optimized/image24.webp', thumbnail: '/images/optimized/image24-thumb.webp', width: 1600, height: 672, alt: 'Залдағы балалар мен тәрбиешілердің топтық суреті', position: '50% 50%' },
  ] as Photo[],

  /** Дополнительные занятия — только подтверждённые */
  activities: [] as string[],
};

export type NavItem = { id: string; label: string };

export const navigation: NavItem[] = [
  { id: 'about', label: 'Біз туралы' },
  { id: 'groups', label: 'Топтар' },
  { id: 'meals', label: 'Тамақтану' },
  ...(site.gallery.length ? [{ id: 'gallery', label: 'Галерея' }] : []),
  { id: 'documents', label: 'Құжаттар' },
  { id: 'contact', label: 'Байланыс' },
];
