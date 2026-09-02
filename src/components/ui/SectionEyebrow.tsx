import { ReactNode } from 'react'

/** Matches .section-eyebrow: 12px bold blue uppercase label with a small 13x13 stroked icon, used above every major section heading. */
export function SectionEyebrow({ icon, children, center = false }: { icon: ReactNode; children: ReactNode; center?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-[7px] text-xs font-bold text-blue uppercase tracking-[.09em] mb-4 ${center ? 'flex' : ''}`}>
      <svg className="w-[13px] h-[13px] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        {icon}
      </svg>
      {children}
    </div>
  )
}

export const eyebrowIcons = {
  warning: (
    <>
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </>
  ),
  layers: (
    <>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 9h6M9 13h6M9 17h4" />
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </>
  ),
  scale: (
    <>
      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </>
  ),
  quote: (
    <>
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </>
  ),
  bolt: (
    <>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </>
  ),
}
