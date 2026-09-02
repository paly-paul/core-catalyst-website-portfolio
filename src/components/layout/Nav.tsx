'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Solutions', href: '/solutions/chro' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
  ]

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && pathname.startsWith(href)) return true
    return false
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-nav backdrop-blur-2xl transition-all duration-200 ${
        isScrolled
          ? 'border-b border-border bg-white/95 shadow-sm'
          : 'border-b border-transparent bg-white/85'
      }`}
    >
      <div className="max-w-site mx-auto px-6 h-nav flex items-center gap-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-grad-primary flex items-center justify-center">
            <svg
              className="w-4 h-4 stroke-white fill-none stroke-2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-sora font-bold text-lg text-text">
            Core<span className="text-violet">Catalyst</span>
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-1 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                isActive(link.href)
                  ? 'bg-bg text-text font-semibold'
                  : 'text-muted hover:bg-bg hover:text-text'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 ml-6">
          <Link
            href="/contact"
            className="px-4.5 py-2 text-sm font-semibold text-blue hover:text-indigo transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/demo"
            className="px-5.5 py-2.25 rounded-btn text-sm font-semibold text-white bg-grad-primary hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
          >
            Get a Demo
          </Link>
        </div>
      </div>
    </nav>
  )
}
