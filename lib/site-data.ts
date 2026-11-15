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
};

export const site = {
  name: 'Осер 2013',
  tagline: 'Қазақ тілді балабақша',
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
    title: 'Қарақыстақ ауылындағы балабақша',
    paragraphs: [
      '«Осер 2013» балабақшасы Алматы облысы, Жамбыл ауданындағы Қарақыстақ ауылында орналасқан. Балабақшада оқу мен тәрбие қазақ тілінде жүргізіледі.',
      'Балалар жасына қарай төрт топқа бөлінеді. Күніне үш мезгіл тамақтану қарастырылған: таңғы ас, түскі ас және бесін ас.',
    ],
    facts: [
      { label: 'Орналасуы', value: 'Қарақыстақ ауылы' },
      { label: 'Оқыту тілі', value: 'Қазақ тілі' },
      { label: 'Топ саны', value: '4' },
      { label: 'Тамақтану', value: 'Күніне 3 мезгіл' },
    ],
  },

  /** Компактные факты первого экрана: before + выделенная часть + after */
  heroFacts: [
    { id: 'groups', before: '', em: '4', after: ' топ' },
    { id: 'lang', before: '', em: 'Қазақ', after: ' тілінде' },
    { id: 'meals', before: 'Күніне ', em: '3', after: ' мезгіл тамақ' },
  ],

  groups: [
    { id: 'kulynshak', name: 'Құлыншақ', label: 'Мектепалды даярлық тобы', age: '5 жастан', motif: 'foal', tone: 'apricot' },
    { id: 'baldauren', name: 'Балдаурен', label: 'Ересек тобы', age: '4 жастан', motif: 'flower', tone: 'sun' },
    { id: 'balbobek', name: 'Балбөбек', label: 'Орта тобы', age: '3 жастан', motif: 'sprout', tone: 'leaf' },
    { id: 'bobek', name: 'Бөбек', label: 'Кіші аралас топ', age: '2–3 жас', motif: 'chick', tone: 'sky' },
  ] satisfies Group[],

  meals: [
    { id: 'breakfast', name: 'Таңғы ас', icon: 'cup', tone: 'sun' },
    { id: 'lunch', name: 'Түскі ас', icon: 'bowl', tone: 'apricot' },
    { id: 'snack', name: 'Бесін ас', icon: 'apple', tone: 'leaf' },
  ] as const,

  links: {
    /** Предоставленное видео (Reel). Это не профиль аккаунта. */
    reel: 'https://www.instagram.com/reel/DZAXP9_MC3X/?mdxt=MWtndm1qdWhqcTVqeA==',
    /** Действующая ссылка на документы — включает раздел «Құжаттар» */
    documents: '',
    /** Точная карточка организации на карте (2ГИС / Google). Пока пусто — используется поиск по адресу */
    mapPlace: '',
  },

  contacts: {
    /** Международный формат: '+7 700 000 00 00' */
    phone: '',
    /** Международный номер WhatsApp: '+7 700 000 00 00' */
    whatsapp: '',
    whatsappMessage: 'Сәлеметсіз бе! «Осер 2013» балабақшасы туралы білгім келеді.',
    email: '',
    /** Только подтверждённый профиль: 'https://www.instagram.com/...' */
    instagramProfile: '',
    /** Например: 'Дүйсенбі–жұма, 08:00–19:00' */
    hours: '',
  },

  legalName: '',
  /** Реальный домен с https:// — включает canonical и url в структурированных данных */
  domain: '',

  media: {
    logo: null as ImageMedia | null,
    /** main-page */
    hero: null as ImageMedia | null,
    /** main-page2: определить реальный тип файла (изображение или видео) */
    about: null as ImageMedia | VideoMedia | null,
  },

  gallery: [] as Photo[],

  /** Дополнительные занятия — только подтверждённые */
  activities: [] as string[],
};

export type NavItem = { id: string; label: string };

export const navigation: NavItem[] = [
  { id: 'about', label: 'Біз туралы' },
  { id: 'groups', label: 'Топтар' },
  { id: 'meals', label: 'Тамақтану' },
  ...(site.gallery.length ? [{ id: 'gallery', label: 'Галерея' }] : []),
  ...(site.links.documents ? [{ id: 'documents', label: 'Құжаттар' }] : []),
  { id: 'contact', label: 'Байланыс' },
];
