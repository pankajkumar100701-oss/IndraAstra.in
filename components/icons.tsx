type P = { className?: string };

export const LinkedIn = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Arrow = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Coin = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M14 7h7v7" />
  </svg>
);

export const Bolt = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </svg>
);

export const Target = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" />
  </svg>
);

export const Brain = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
    <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3h0a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" />
    <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3h0a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const Mail = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const Pin = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const Doc = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
    <path d="M14 3v5h5M9 13h6M9 17h4" />
  </svg>
);
