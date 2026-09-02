import { Metadata } from 'next'
import ContactForm from './ContactForm'
import { RevealWrapper } from '../../components/ui/RevealWrapper'

export const metadata: Metadata = {
  title: 'Contact CoreCatalyst',
  description:
    "We're easy to reach - pick your route. Sales questions, support requests, security disclosures, or a general enquiry.",
}

const routes = [
  {
    href: '/demo',
    icon: '📅',
    bg: '#e0e7ff',
    title: 'Book a demo',
    body: 'See CoreCatalyst live with your specific data challenges in focus. 30 minutes.',
    link: 'Schedule now →',
  },
  {
    href: 'mailto:sales@corecatalyst.ai',
    icon: '💰',
    bg: '#dcfce7',
    title: 'Sales enquiry',
    body: 'Pricing, procurement, or a custom Enterprise proposal. We respond same day.',
    link: 'sales@corecatalyst.ai',
  },
  {
    href: 'mailto:support@corecatalyst.ai',
    icon: '🛠',
    bg: '#cffafe',
    title: 'Customer support',
    body: 'Existing customer with a technical issue or question about your account.',
    link: 'support@corecatalyst.ai',
  },
  {
    href: 'mailto:security@corecatalyst.ai',
    icon: '🔒',
    bg: '#ede9fe',
    title: 'Security team',
    body: 'Vulnerability reports, security questionnaires, or to request our SOC 2 report.',
    link: 'security@corecatalyst.ai',
  },
]

const responseTimes = [
  { label: 'Demo requests', val: 'Same day' },
  { label: 'Sales enquiries', val: '< 4 hours' },
  { label: 'Support (Scale)', val: 'Priority queue' },
  { label: 'Support (Enterprise)', val: '24/7 dedicated' },
  { label: 'Security reports', val: '48 hours' },
  { label: 'General enquiries', val: '1 business day' },
]

const offices = [
  { icon: '🏛', name: 'London (HQ)', lines: ['14 Finsbury Square, EC2A 1BR', 'United Kingdom'] },
  { icon: '🇺🇸', name: 'San Francisco', lines: ['340 Pine Street, Suite 800', 'CA 94104'] },
  { icon: '🇩🇪', name: 'Berlin (Engineering)', lines: ['Schönhauser Allee 36', '10435 Berlin'] },
]

export default function Contact() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="bg-grad-hero py-20 text-center">
        <div className="max-w-site mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-semibold text-violet">Contact</span>
          </div>
          <h1 className="font-sora text-5xl font-bold leading-tight mb-6 text-text">
            We&apos;re easy to<br />
            <span className="bg-grad-primary bg-clip-text text-transparent">reach - pick your route</span>
          </h1>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Sales questions, support requests, security disclosures, or just a general enquiry. We&apos;ll get back to you quickly.
          </p>
        </div>
      </section>

      {/* ROUTES */}
      <RevealWrapper>
        <section className="py-16 bg-white">
          <div className="max-w-site mx-auto px-6 grid grid-cols-4 gap-6">
            {routes.map((r, i) => (
              <a key={i} href={r.href} className="block p-6 rounded-2xl border border-border bg-white hover:shadow-card hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ background: r.bg }}>
                  {r.icon}
                </div>
                <h3 className="font-sora font-bold text-lg mb-2 text-text">{r.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{r.body}</p>
                <div className="text-sm font-semibold text-blue">{r.link}</div>
              </a>
            ))}
          </div>
        </section>
      </RevealWrapper>

      {/* MAIN BODY */}
      <section className="py-16 bg-bg">
        <div className="max-w-site mx-auto px-6 grid grid-cols-[1fr_360px] gap-16">
          <ContactForm />

          <RevealWrapper className="space-y-6">
            <div className="bg-white rounded-2xl border border-border p-6">
              <h3 className="font-sora font-bold text-lg mb-4 text-text">Typical response times</h3>
              <div className="space-y-3">
                {responseTimes.map((r, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-muted">{r.label}</span>
                    <span className="font-semibold text-text">{r.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-border p-6">
              <h3 className="font-sora font-bold text-lg mb-4 text-text">Our offices</h3>
              <div className="space-y-5">
                {offices.map((o, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="text-xl">{o.icon}</div>
                    <div className="text-sm">
                      <strong className="block text-text mb-0.5">{o.name}</strong>
                      {o.lines.map((l, j) => (
                        <span key={j} className="block text-muted">{l}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-border p-6">
              <h3 className="font-sora font-bold text-lg mb-4 text-text">Follow us</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 text-sm font-semibold text-text">
                  <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue flex items-center justify-center text-xs font-bold">in</span>
                  LinkedIn - CoreCatalyst
                </a>
                <a href="#" className="flex items-center gap-3 text-sm font-semibold text-text">
                  <span className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center text-xs font-bold">𝕏</span>
                  @corecatalyst
                </a>
                <a href="#" className="flex items-center gap-3 text-sm font-semibold text-text">
                  <span className="w-8 h-8 rounded-lg bg-green-50 text-green flex items-center justify-center text-xs font-bold">◇</span>
                  Status page
                </a>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </div>
  )
}
