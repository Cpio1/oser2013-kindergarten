type IconName =
  | 'arrow-right'
  | 'arrow-up-right'
  | 'arrow-up'
  | 'chevron-left'
  | 'chevron-right'
  | 'close'
  | 'menu'
  | 'map'
  | 'video'
  | 'phone'
  | 'chat'
  | 'mail'
  | 'camera'
  | 'clock'
  | 'document'
  | 'images';

const paths: Record<IconName, React.ReactNode> = {
  'arrow-right': <path d="M5 12h14m-6-6 6 6-6 6" />,
  'arrow-up-right': <path d="M7 17 17 7M9 7h8v8" />,
  'arrow-up': <path d="M12 19V5m-6 6 6-6 6 6" />,
  'chevron-left': <path d="m15 5-7 7 7 7" />,
  'chevron-right': <path d="m9 5 7 7-7 7" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h10" />,
  map: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  video: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="4" />
      <path d="m10 9.2 5 2.8-5 2.8Z" />
    </>
  ),
  phone: <path d="M6.6 3.5h2.6l1.4 4-2 1.5a11 11 0 0 0 6.4 6.4l1.5-2 4 1.4v2.6a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />,
  chat: (
    <>
      <path d="M4.5 19.5 5.6 16A8 8 0 1 1 8.4 18.6Z" />
      <path d="M9 10.5c.6 2 2.2 3.6 4.4 4.3" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  camera: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r=".6" fill="currentColor" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  document: (
    <>
      <path d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>
  ),
  images: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <circle cx="9" cy="10" r="1.6" />
      <path d="m4 17 5-4.5 3.5 3 2.5-2 4 3.5" />
    </>
  ),
};

export function Icon({ name, className = 'size-5' }: { name: IconName; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
