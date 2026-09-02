import { Fragment } from 'react'
import { Metadata } from 'next'
import { RevealWrapper } from '../../components/ui/RevealWrapper'
import PlansGrid from './PlansGrid'
import Faq from './Faq'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent pricing, built for scale. Start with a focused pilot and grow into enterprise-wide skills intelligence. No hidden fees.',
}

const addons = [
  {
    icon: '🔁',
    bg: '#ede9fe',
    title: 'Learning System Connector',
    body: 'Sync gap-closure plans directly to your LMS (Degreed, Cornerstone, LinkedIn Learning) and auto-assign courses.',
    price: '+ $1.50 / employee / mo',
  },
  {
    icon: '📊',
    bg: '#dcfce7',
    title: 'Advanced Analytics Suite',
    body: 'Cohort analysis, scenario modelling, and custom board-ready exports beyond the standard CHRO dashboard.',
    price: '+ $2.00 / employee / mo',
  },
  {
    icon: '🔌',
    bg: '#e0f2fe',
    title: 'Custom Connector Build',
    body: 'We build and maintain a bespoke integration to a proprietary or niche HR system not in our standard library.',
    price: 'From $8,000 one-time',
  },
]

type Cell = string | 'yes' | 'no' | 'partial'

const compareSections: { section: string; rows: { name: string; note?: string; starter: Cell; scale: Cell; enterprise: Cell }[] }[] = [
  {
    section: 'Core Reconciliation',
    rows: [
      { name: 'Skill conflict auto-resolution', note: 'Multi-source weighted scoring', starter: 'yes', scale: 'yes', enterprise: 'yes' },
      { name: '45K-node taxonomy', note: 'Skills normalization & mapping', starter: 'yes', scale: 'yes', enterprise: 'yes' },
      { name: 'Manager adjudication queue', starter: 'yes', scale: 'yes', enterprise: 'yes' },
      { name: 'Custom taxonomy extension', starter: 'no', scale: 'partial:Limited', enterprise: 'yes' },
    ],
  },
  {
    section: 'Integrations',
    rows: [
      { name: 'HRIS read integrations', starter: '2 sources', scale: 'Unlimited', enterprise: 'Unlimited' },
      { name: 'HRIS write-back', note: 'Workday, SAP, Oracle, BambooHR', starter: 'no', scale: 'yes', enterprise: 'yes' },
      { name: 'LMS connector (add-on)', starter: 'no', scale: 'Add-on', enterprise: 'Included' },
      { name: 'Slack / Teams digest', starter: 'no', scale: 'yes', enterprise: 'yes' },
    ],
  },
  {
    section: 'Workforce Intelligence',
    rows: [
      { name: 'Internal mobility matching', starter: 'no', scale: 'yes', enterprise: 'yes' },
      { name: 'Board reporting & CHRO dashboard', starter: 'no', scale: 'no', enterprise: 'yes' },
      { name: 'Succession pipeline module', starter: 'no', scale: 'no', enterprise: 'yes' },
      { name: 'Workforce readiness score ring', starter: 'no', scale: 'partial:Basic', enterprise: 'yes' },
    ],
  },
  {
    section: 'Compliance & Security',
    rows: [
      { name: 'Audit trail retention', starter: '90 days', scale: '3 years', enterprise: 'Unlimited' },
      { name: 'SOC 2 Type II', starter: 'yes', scale: 'yes', enterprise: 'yes' },
      { name: 'GDPR / CCPA controls', starter: 'yes', scale: 'yes', enterprise: 'yes' },
      { name: 'Private cloud / on-prem', starter: 'no', scale: 'no', enterprise: 'yes' },
    ],
  },
  {
    section: 'Support & Onboarding',
    rows: [
      { name: 'Setup time', starter: '< 2 weeks', scale: '< 4 weeks', enterprise: 'Custom' },
      { name: 'Support', starter: 'Email', scale: 'Priority + CSM', enterprise: '24/7 dedicated' },
      { name: 'Uptime SLA', starter: '99.5%', scale: '99.7%', enterprise: '99.9%' },
    ],
  },
]

const proof = [
  {
    quote: 'We ran the pilot in 6 weeks across our finance function. The ROI case was clear before the trial was even over.',
    initials: 'LM',
    avatar: 'from-blue to-violet',
    name: 'Laura Müller',
    role: 'VP People, FinCo Group',
  },
  {
    quote: 'Moved from Starter to Scale in month 4. The HRIS write-back alone saved us two full-time hours a day in HR Ops.',
    initials: 'JT',
    avatar: 'from-green to-cyan',
    name: 'James Tran',
    role: 'HR Ops Director, Meridian Logistics',
  },
  {
    quote: "Board reporting went from a quarterly fire drill to a click. That's what the Enterprise tier unlocked for us.",
    initials: 'AR',
    avatar: 'from-yellow to-orange',
    name: 'Amara Reyes',
    role: 'CHRO, Stratum Health',
  },
]

function Tick({ color = 'text-text' }: { color?: string }) {
  return (
    <svg className={`w-4 h-4 mx-auto ${color}`} viewBox="0 0 10 10" fill="none">
      <polyline points="1.5,5 4,7.5 8.5,2.5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Cross() {
  return <span className="text-muted text-center block">-</span>
}

function renderCell(cell: Cell) {
  if (cell === 'yes') return <Tick />
  if (cell === 'no') return <Cross />
  if (cell.startsWith('partial:')) return <span className="text-amber-600 font-semibold text-sm block text-center">{cell.split(':')[1]}</span>
  return <span className="text-sm text-text block text-center">{cell}</span>
}

export default function Pricing() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#eef2ff] via-[#f5f3ff] to-[#faf5ff] pt-20 pb-[60px] text-center">
        <div className="max-w-site mx-auto px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-[.08em] text-blue bg-[#e0e7ff] rounded-full px-3.5 py-1 mb-5">
            Pricing
          </span>
          <h1 className="font-sora text-[clamp(32px,5vw,52px)] font-extrabold leading-[1.1] mb-5 text-text">
            Transparent pricing,<br />
            <span className="bg-grad-primary bg-clip-text text-transparent">built for scale</span>
          </h1>
          <p className="text-lg text-muted max-w-[560px] mx-auto mb-8">
            Start with a focused pilot and grow into enterprise-wide skills intelligence. No hidden fees.
          </p>
        </div>
      </section>

      {/* PLANS + BILLING TOGGLE */}
      <section className="py-16 bg-white">
        <div className="max-w-site mx-auto px-6">
          <PlansGrid />
        </div>
      </section>

      {/* ADD-ONS */}
      <RevealWrapper>
        <section className="py-[60px] bg-white border-y border-border">
          <div className="max-w-site mx-auto px-6">
            <h2 className="font-sora text-2xl sm:text-[28px] font-extrabold mb-2 text-text">Optional add-ons</h2>
            <p className="text-[15px] text-muted mb-9">Extend any plan with the capabilities your organization needs most.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {addons.map((a, i) => (
                <div key={i} className="bg-white border-[1.5px] border-border rounded-[14px] p-6 hover:shadow-[0_4px_20px_rgba(59,91,219,.08)] hover:border-[#bfdbfe] transition-all">
                  <div className="w-10 h-10 rounded-[10px] flex items-center justify-center text-lg mb-3.5" style={{ background: a.bg }}>
                    {a.icon}
                  </div>
                  <h3 className="font-sora font-bold text-base mb-1.5 text-text">{a.title}</h3>
                  <p className="text-[13px] text-muted leading-[1.5] mb-3.5">{a.body}</p>
                  <div className="font-sora text-[13px] font-bold text-blue">{a.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* COMPARISON TABLE */}
      <RevealWrapper>
        <section className="py-14 lg:py-24 bg-white">
          <div className="max-w-site mx-auto px-6">
            <h2 className="font-sora text-2xl sm:text-[28px] font-extrabold mb-2 text-text text-center">Full feature comparison</h2>
            <p className="text-[15px] text-muted mb-9 text-center">See exactly what&apos;s included at every tier.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 text-sm font-semibold text-muted w-[44%]">Feature</th>
                    <th className="text-center py-3 text-sm font-semibold text-muted">Starter</th>
                    <th className="text-center py-3 text-sm font-semibold text-blue bg-blue-50/50">Scale</th>
                    <th className="text-center py-3 text-sm font-semibold text-muted">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {compareSections.map((sec, si) => (
                    <Fragment key={`sec-${si}`}>
                      <tr>
                        <td colSpan={4} className="pt-6 pb-2 text-xs font-bold text-blue uppercase tracking-wider">
                          {sec.section}
                        </td>
                      </tr>
                      {sec.rows.map((row, ri) => (
                        <tr key={`row-${si}-${ri}`} className="border-b border-border">
                          <td className="py-3 text-sm text-text">
                            {row.name}
                            {row.note && <div className="text-xs text-muted mt-0.5">{row.note}</div>}
                          </td>
                          <td className="py-3">{renderCell(row.starter)}</td>
                          <td className="py-3 bg-blue-50/50">{renderCell(row.scale)}</td>
                          <td className="py-3">{renderCell(row.enterprise)}</td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* SOCIAL PROOF */}
      <RevealWrapper>
        <section className="py-[60px] bg-gradient-to-br from-[#eef2ff] via-[#f5f3ff] to-[#faf5ff] text-center">
          <div className="max-w-site mx-auto px-6">
            <h2 className="font-sora text-xl sm:text-[26px] font-extrabold mb-9 text-text">Trusted by HR teams at scale</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[900px] mx-auto">
              {proof.map((p, i) => (
                <div key={i} className="bg-white border-[1.5px] border-border rounded-2xl p-6 text-left">
                  <p className="text-[15px] text-text italic leading-[1.6] mb-4">&ldquo;{p.quote}&rdquo;</p>
                  <div className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${p.avatar} text-white text-sm font-bold flex items-center justify-center flex-shrink-0`}>
                      {p.initials}
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-text">{p.name}</div>
                      <div className="text-xs text-muted">{p.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* FAQ */}
      <RevealWrapper>
        <section className="py-14 lg:py-24 bg-white">
          <div className="max-w-site mx-auto px-4 sm:px-6 max-w-3xl">
            <h2 className="font-sora text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-text text-center">Frequently asked questions</h2>
            <p className="text-lg text-muted mb-12 text-center">Everything you need to know before getting started.</p>
            <Faq />
          </div>
        </section>
      </RevealWrapper>

      {/* CTA */}
      <RevealWrapper>
        <section className="py-14 lg:py-24 bg-grad-hero text-center">
          <div className="max-w-site mx-auto px-6">
            <h2 className="font-sora text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-text">
              Ready to see what your<br />
              <span className="bg-grad-primary bg-clip-text text-transparent">skills data can do?</span>
            </h2>
            <p className="text-lg text-muted mb-8 max-w-xl mx-auto">
              Most pilots go live in under two weeks. We handle setup - you focus on insights.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a href="/demo" className="px-8 py-4 rounded-btn bg-grad-primary text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg">
                Book a 30-min Demo
              </a>
              <a href="/how-it-works" className="px-8 py-4 rounded-btn border border-border text-text font-semibold text-lg hover:border-blue transition-colors">
                See How It Works
              </a>
            </div>
          </div>
        </section>
      </RevealWrapper>
    </div>
  )
}
