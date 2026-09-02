import Link from 'next/link'

const columns = [
  {
    title: 'Platform',
    links: [
      { label: 'Reconciliation Engine', href: '/' },
      { label: 'Skills Graph', href: '/' },
      { label: 'Workforce Intelligence', href: '/' },
      { label: 'Internal Mobility', href: '/' },
      { label: 'Integrations', href: '/' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'For CHROs', href: '/solutions/chro' },
      { label: 'For Managers', href: '/solutions/managers' },
      { label: 'For HR Ops', href: '/solutions/hrops' },
      { label: 'Enterprise', href: '/contact' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Security', href: '/security' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

const legalLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Security', href: '/security' },
  { label: 'Cookies', href: '/privacy' },
]

export default function Footer() {
  return (
    <footer className="bg-[#f8f9ff] border-t border-border pt-10 sm:pt-14 pb-8">
      <div className="max-w-site mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 sm:gap-10 lg:gap-12 mb-10 lg:mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-3.5 font-sora font-bold text-[17px] text-text">
              <div className="w-[30px] h-[30px] rounded-lg bg-grad-primary flex items-center justify-center">
                <svg className="w-4 h-4 stroke-white fill-none" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              CoreCatalyst<span className="text-muted font-normal">.ai</span>
            </Link>
            <p className="text-[13.5px] text-muted leading-[1.65] max-w-[280px]">
              The skills intelligence platform for enterprises building a skills-powered workforce. From scattered data to verified truth - in a day.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-[11.5px] font-bold text-text uppercase tracking-[.08em] mb-4">{col.title}</div>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-[13.5px] text-muted mb-2.5 hover:text-blue transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-6 sm:pt-7 flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between text-center sm:text-left">
          <span className="text-[12.5px] text-muted">- 2026 CoreCatalyst. All rights reserved.</span>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[12.5px] text-muted hover:text-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
