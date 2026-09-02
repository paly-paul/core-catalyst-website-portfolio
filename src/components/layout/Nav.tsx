'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { label: 'Platform', href: '/' },
    { label: 'Solutions', href: '/solutions/chro' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Resources', href: '/blog' },
  ]

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && pathname.startsWith(href)) return true
    return false
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-2xl transition-all duration-200 ${
        isScrolled ? 'border-b border-border shadow-sm' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 h-nav flex items-center gap-4 lg:gap-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
          <div className="w-8 h-8 lg:w-[34px] lg:h-[34px] rounded-lg lg:rounded-[9px] bg-grad-primary flex items-center justify-center">
            <svg
              className="w-4 h-4 lg:w-[18px] lg:h-[18px] stroke-white fill-none"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-sora font-bold text-base sm:text-lg text-text">
            CoreCatalyst<span className="text-muted font-normal">.ai</span>
          </span>
        </Link>

        {/* Nav Links - desktop */}
        <div className="hidden lg:flex items-center gap-1 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                isActive(link.href)
                  ? 'bg-[#eef1ff] text-blue'
                  : 'text-[#5c6587] hover:bg-bg hover:text-blue'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions - desktop */}
        <div className="hidden lg:flex items-center gap-2.5 ml-auto lg:ml-6">
          <Link
            href="/contact"
            className="px-[18px] py-2 rounded-btn text-[13.5px] font-semibold text-text border border-border bg-white hover:bg-bg hover:border-indigo hover:text-blue transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/demo"
            className="px-[22px] py-2.5 rounded-btn text-[13.5px] font-semibold text-white bg-grad-primary hover:opacity-90 transition-opacity shadow-md"
          >
            Request demo
          </Link>
        </div>

        {/* Mobile: CTA + hamburger */}
        <div className="flex lg:hidden items-center gap-2 ml-auto">
          <Link
            href="/demo"
            className="px-4 py-2 rounded-btn text-xs font-semibold text-white bg-grad-primary hover:opacity-90 transition-opacity shadow-md whitespace-nowrap"
          >
            Request demo
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex-shrink-0 w-9 h-9 rounded-lg border border-border bg-white flex items-center justify-center"
          >
            <svg className="w-5 h-5 text-text" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-white px-4 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2.5 rounded-lg text-[15px] font-medium transition-all ${
                  isActive(link.href) ? 'bg-[#eef1ff] text-blue' : 'text-[#5c6587] hover:bg-bg hover:text-blue'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-border">
            <Link
              href="/contact"
              className="w-full text-center px-4 py-2.5 rounded-btn text-sm font-semibold text-text border border-border bg-white"
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
