'use client'

import { useState } from 'react'
import Link from 'next/link'

function FCheck({ variant = 'yes' }: { variant?: 'yes' | 'violet' | 'green' | 'no' }) {
  const styles: Record<string, string> = {
    yes: 'bg-[#dbeafe] text-blue',
    violet: 'bg-[#ede9fe] text-violet',
    green: 'bg-[#dcfce7] text-green',
    no: 'bg-[#f1f5f9] text-[#cbd5e1]',
  }
  return (
    <span className={`w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0 mt-px ${styles[variant]}`}>
      {variant === 'no' ? (
        <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
          <line x1="2" y1="5" x2="8" y2="5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
        </svg>
      ) : (
        <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
          <polyline points="1.5,5 4,7.5 8.5,2.5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </span>
  )
}

const starterFeatures = [
  { text: 'Up to 500 employee profiles', included: true },
  { text: '2 HRIS integrations (read)', included: true },
  { text: 'Reconciliation engine (auto-mode)', included: true },
  { text: '45K-node skills taxonomy access', included: true },
  { text: 'Manager adjudication queue', included: true },
  { text: 'Standard audit trail (90 days)', included: true },
  { text: 'Email support', included: true },
  { text: 'HRIS write-back', included: false },
  { text: 'Board reporting suite', included: false },
]

const scaleFeatures = [
  { text: 'Up to 5,000 employee profiles', included: true },
  { text: 'Unlimited HRIS integrations', included: true },
  { text: 'HRIS write-back (Workday, SAP, Oracle)', included: true },
  { text: 'Internal mobility matching', included: true },
  { text: 'Gap-closure plan automation', included: true },
  { text: 'Full audit trail (3 years)', included: true },
  { text: 'Slack/Teams digest integration', included: true },
  { text: 'Priority support + CSM', included: true },
  { text: 'Board reporting suite', included: false },
]

const enterpriseFeatures = [
  'Unlimited employee profiles',
  'Board reporting & CHRO dashboard',
  'Custom taxonomy extension',
  'Succession pipeline module',
  'Private cloud / on-prem option',
  '99.9% uptime SLA',
  'Dedicated implementation team',
  '24/7 enterprise support',
]

export default function PlansGrid() {
  const [annual, setAnnual] = useState(false)

  return (
    <div>
      <div className="flex justify-center mb-16">
        <div className="inline-flex items-center gap-3 bg-white border-[1.5px] border-border rounded-full px-5 py-1.5">
          <span className={`text-sm font-medium ${!annual ? 'text-text font-semibold' : 'text-muted'}`}>Monthly</span>
          <button
            onClick={() => setAnnual((a) => !a)}
            className={`relative w-11 h-6 rounded-full transition-colors ${annual ? 'bg-blue' : 'bg-[#e2e8f0]'}`}
          >
            <span className={`absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,.2)] transition-transform ${annual ? 'translate-x-5' : ''}`} />
          </button>
          <span className={`text-sm font-medium flex items-center gap-2 ${annual ? 'text-text font-semibold' : 'text-muted'}`}>
            Annual <span className="text-[11px] font-bold text-green bg-[#dcfce7] rounded-[10px] px-2 py-0.5">Save 20%</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 border-[1.5px] border-border rounded-[20px] overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-border">
        {/* STARTER */}
        <div className="bg-white p-6 lg:p-[36px_32px_40px]">
          <div className="text-xs font-bold text-muted uppercase tracking-[.08em] mb-3 mt-3">Pilot</div>
          <div className="font-sora text-xl sm:text-[26px] font-extrabold mb-2 text-text">Starter</div>
          <p className="text-sm text-muted leading-[1.5] mb-6 min-h-[56px]">For HR teams running a focused proof-of-concept with one function or business unit.</p>
          <div className="mb-2">
            <span className="font-sora text-lg font-bold text-muted align-top">$</span>
            <span className="font-sora text-[52px] font-extrabold leading-none text-text">{annual ? 6 : 8}</span>
            <span className="text-sm text-muted font-medium"> / employee / mo</span>
          </div>
          <div className="text-xs text-muted mb-7">Billed {annual ? 'annually' : 'monthly'} · Up to 500 employees</div>
          <Link href="/demo" className="block text-center px-6 py-3 rounded-[10px] border-[1.5px] border-blue font-semibold text-[15px] text-blue hover:bg-blue hover:text-white transition-all mb-6">
            Start Pilot
          </Link>
          <div className="h-px bg-border mb-6" />
          <div className="text-[11px] font-bold text-muted uppercase tracking-[.07em] mb-3.5">What&apos;s included</div>
          <ul className="flex flex-col gap-2.5">
            {starterFeatures.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm">
                <FCheck variant={f.included ? 'yes' : 'no'} />
                <span className={f.included ? 'text-text' : 'text-muted'}>{f.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* SCALE (featured) */}
        <div className="relative bg-gradient-to-br from-[#eef2ff] to-[#f5f3ff] p-6 lg:p-[36px_32px_40px]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-br from-blue to-violet text-white text-[11px] font-bold uppercase tracking-[.06em] px-[18px] py-1 rounded-b-xl">
            Most Popular
          </div>
          <div className="text-xs font-bold text-blue uppercase tracking-[.08em] mb-3 mt-3">Growth</div>
          <div className="font-sora text-xl sm:text-[26px] font-extrabold mb-2 text-text">Scale</div>
          <p className="text-sm text-muted leading-[1.5] mb-6 min-h-[56px]">For mid-size enterprises running skills intelligence across multiple functions.</p>
          <div className="mb-2">
            <span className="font-sora text-lg font-bold text-muted align-top">$</span>
            <span className="font-sora text-[52px] font-extrabold leading-none text-text">{annual ? 11 : 14}</span>
            <span className="text-sm text-muted font-medium"> / employee / mo</span>
          </div>
          <div className="text-xs text-muted mb-7">Billed {annual ? 'annually' : 'monthly'} · 500 - 5,000 employees</div>
          <Link href="/demo" className="block text-center px-6 py-3 rounded-[10px] bg-grad-primary text-white font-semibold text-[15px] hover:opacity-90 transition-opacity mb-6">
            Book a Demo
          </Link>
          <div className="h-px bg-[#c7d2fe] mb-6" />
          <div className="text-[11px] font-bold text-muted uppercase tracking-[.07em] mb-3.5">Everything in Starter, plus</div>
          <ul className="flex flex-col gap-2.5">
            {scaleFeatures.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm">
                <FCheck variant={f.included ? 'violet' : 'no'} />
                <span className={f.included ? 'text-text' : 'text-muted'}>{f.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ENTERPRISE */}
        <div className="bg-white p-6 lg:p-[36px_32px_40px]">
          <div className="text-xs font-bold text-muted uppercase tracking-[.08em] mb-3 mt-3">Enterprise</div>
          <div className="font-sora text-xl sm:text-[26px] font-extrabold mb-2 text-text">Full Platform</div>
          <p className="text-sm text-muted leading-[1.5] mb-6 min-h-[56px]">For large enterprises needing board-level intelligence, custom taxonomy, and SLA guarantees.</p>
          <div className="font-sora text-4xl font-extrabold text-text leading-[1.2] pt-2">Custom</div>
          <div className="text-sm text-muted mb-1">Tailored to headcount &amp; scope</div>
          <div className="text-xs text-muted mb-7">5,000+ employees · Volume pricing</div>
          <Link href="/demo" className="block text-center px-6 py-3 rounded-[10px] bg-text text-white font-semibold text-[15px] hover:bg-[#1e293b] transition-colors mb-6">
            Talk to Sales
          </Link>
          <div className="h-px bg-border mb-6" />
          <div className="text-[11px] font-bold text-muted uppercase tracking-[.07em] mb-3.5">Everything in Scale, plus</div>
          <ul className="flex flex-col gap-2.5">
            {enterpriseFeatures.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm">
                <FCheck variant="green" />
                <span className="text-text">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
