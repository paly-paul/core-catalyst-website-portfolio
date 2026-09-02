import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-site mx-auto px-6 py-16">
        {/* Main content */}
        <div className="grid grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
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
            </div>
            <p className="text-sm text-muted leading-relaxed">
              The skills operating system for enterprise workforce transformation.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-sora font-semibold text-sm text-text mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-sm text-muted hover:text-text transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-muted hover:text-text transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/demo"
                  className="text-sm text-muted hover:text-text transition-colors"
                >
                  Get a Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-sora font-semibold text-sm text-text mb-4">
              Solutions
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/solutions/chro"
                  className="text-sm text-muted hover:text-text transition-colors"
                >
                  For CHROs
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/managers"
                  className="text-sm text-muted hover:text-text transition-colors"
                >
                  For People Managers
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/hrops"
                  className="text-sm text-muted hover:text-text transition-colors"
                >
                  For HR Ops
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sora font-semibold text-sm text-text mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted hover:text-text transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted hover:text-text transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-muted hover:text-text transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-sora font-semibold text-sm text-text mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/security"
                  className="text-sm text-muted hover:text-text transition-colors"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted hover:text-text transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted hover:text-text transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted hover:text-text transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex items-center justify-between">
          <p className="text-sm text-muted">
            &copy; 2026 CoreCatalyst. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Built on{' '}
            <Link
              href="https://yourskills.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:text-indigo transition-colors"
            >
              YourSkills.ai
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
