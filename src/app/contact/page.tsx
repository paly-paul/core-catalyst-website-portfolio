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
      <section className="bg-gradient-to-br from-[#eef2ff] via-[#f5f3ff] to-[#faf5ff] pt-16 pb-14 text-center">
        <div className="max-w-site mx-auto px-6">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[.09em] text-blue bg-[#e0e7ff] rounded-full px-3.5 py-1 mb-[18px]">
            Contact
          </span>
          <h1 className="font-sora text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.12] mb-3.5 text-text">
            We&apos;re easy to<br />
            <span className="bg-grad-primary bg-clip-text text-transparent">reach - pick your route</span>
          </h1>
          <p className="text-base text-muted max-w-[480px] mx-auto">
            Sales questions, support requests, security disclosures, or just a general enquiry. We&apos;ll get back to you quickly.
          </p>
        </div>
      </section>

      {/* ROUTES */}
      <RevealWrapper>
        <section className="pt-14 pb-0 bg-white">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {routes.map((r, i) => (
              <a key={i} href={r.href} className="block p-[24px_22px] rounded-2xl border-[1.5px] border-border bg-white hover:shadow-[0_6px_24px_rgba(59,91,219,.09)] hover:border-[#bfdbfe] hover:-translate-y-0.5 transition-all">
                <div className="w-11 h-11 rounded-[11px] flex items-center justify-center text-xl mb-3.5" style={{ background: r.bg }}>
                  {r.icon}
                </div>
                <h3 className="font-sora font-bold text-[15px] mb-1.5 text-text">{r.title}</h3>
                <p className="text-[13px] text-muted leading-[1.55] mb-3.5">{r.body}</p>
                <div className="text-[13px] font-semibold text-blue">{r.link}</div>
              </a>
            ))}
          </div>
        </section>
      </RevealWrapper>

      {/* MAIN BODY */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-start">
          <ContactForm />

          <RevealWrapper className="flex flex-col gap-5">
            <div className="bg-gradient-to-br from-[#eef2ff] to-[#ede9fe] border-[1.5px] border-[#c7d2fe] rounded-2xl p-6">
              <h3 className="font-sora font-bold text-[15px] mb-3.5 text-text">Typical response times</h3>
              <div className="flex flex-col">
                {responseTimes.map((r, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between text-[13px] py-2 ${i !== responseTimes.length - 1 ? 'border-b border-[#c7d2fe]' : ''}`}
                  >
                    <span className="text-muted">{r.label}</span>
                    <span className="font-semibold text-text">{r.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-[1.5px] border-border rounded-2xl p-6">
              <h3 className="font-sora font-bold text-[15px] mb-4 text-text">Our offices</h3>
              <div className="flex flex-col gap-3.5">
                {offices.map((o, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-[#eef2ff] text-blue flex items-center justify-center text-sm flex-shrink-0 mt-0.5">{o.icon}</div>
                    <div className="text-[13px]">
                      <strong className="block text-text font-semibold">{o.name}</strong>
                      {o.lines.map((l, j) => (
                        <span key={j} className="block text-muted">{l}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-[1.5px] border-border rounded-2xl p-[20px_24px]">
              <h3 className="font-sora font-bold text-sm mb-3.5 text-text">Follow us</h3>
              <div className="flex flex-col gap-2">
                <a href="#" className="flex items-center gap-2.5 text-sm text-muted hover:bg-surface hover:text-text rounded-lg px-2.5 py-2 transition-colors">
                  <span className="w-7 h-7 rounded-[7px] bg-blue-50 text-blue flex items-center justify-center text-xs font-bold flex-shrink-0">in</span>
                  LinkedIn - CoreCatalyst
                </a>
                <a href="#" className="flex items-center gap-2.5 text-sm text-muted hover:bg-surface hover:text-text rounded-lg px-2.5 py-2 transition-colors">
                  <span className="w-7 h-7 rounded-[7px] bg-sky-50 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0">𝕏</span>
                  @corecatalyst
                </a>
                <a href="#" className="flex items-center gap-2.5 text-sm text-muted hover:bg-surface hover:text-text rounded-lg px-2.5 py-2 transition-colors">
                  <span className="w-7 h-7 rounded-[7px] bg-green-50 text-green flex items-center justify-center text-xs font-bold flex-shrink-0">◇</span>
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
