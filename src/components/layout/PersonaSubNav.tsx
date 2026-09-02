'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function PersonaSubNav() {
  const pathname = usePathname()

  const subNavLinks = [
    { label: 'CHRO & People Leaders', href: '/solutions/chro' },
    { label: 'People Managers', href: '/solutions/managers' },
    { label: 'HR Operations', href: '/solutions/hrops' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <div className="fixed top-nav left-0 right-0 z-40 h-subnav bg-white/97 backdrop-blur-xl border-b border-border">
      <div className="max-w-site mx-auto px-4 sm:px-6 h-subnav flex items-center gap-1 overflow-x-auto">
        {subNavLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-2 px-3 sm:px-4 h-subnav text-sm font-medium border-b-2 whitespace-nowrap transition-all ${
              isActive(link.href)
                ? 'text-blue border-blue font-semibold'
                : 'text-muted border-transparent hover:text-text'
            }`}
          >
            <span className="text-xs opacity-60">▶</span>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
