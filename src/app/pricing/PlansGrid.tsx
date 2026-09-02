'use client'

import { useState } from 'react'
import Link from 'next/link'

function Check({ className = 'text-text' }: { className?: string }) {
  return (
    <svg className={`w-3.5 h-3.5 flex-shrink-0 ${className}`} viewBox="0 0 10 10" fill="none">
      <polyline points="1.5,5 4,7.5 8.5,2.5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Dash() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0 text-subtle" viewBox="0 0 10 10" fill="none">
      <line x1="2" y1="5" x2="8" y2="5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
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
      <div className="flex items-center justify-center gap-3 mb-16">
        <span className={`text-sm font-semibold ${!annual ? 'text-text' : 'text-muted'}`}>Monthly</span>
        <button
          onClick={() => setAnnual((a) => !a)}
          className={`relative w-11 h-6 rounded-full transition-colors ${annual ? 'bg-blue' : 'bg-border'}`}
        >
          <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${annual ? 'translate-x-5' : ''}`} />
        </button>
        <span className={`text-sm font-semibold flex items-center gap-2 ${annual ? 'text-text' : 'text-muted'}`}>
          Annual <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-green-50 text-green">Save 20%</span>
        </span>
      </div>

      <div className="grid grid-cols-3 gap-6 items-start">
        {/* STARTER */}
        <div className="rounded-2xl border border-border p-8">
          <div className="text-xs font-bold text-blue uppercase tracking-wider mb-2">Pilot</div>
          <div className="font-sora text-2xl font-bold mb-2 text-text">Starter</div>
          <p className="text-sm text-muted mb-6">For HR teams running a focused proof-of-concept with one function or business unit.</p>
          <div className="mb-1">
            <span className="text-lg text-text align-top">$</span>
            <span className="font-sora text-5xl font-bold text-text">{annual ? 6 : 8}</span>
            <span className="text-sm text-muted"> / employee / mo</span>
          </div>
          <div className="text-xs text-muted mb-6">Billed {annual ? 'annually' : 'monthly'} · Up to 500 employees</div>
          <Link href="/demo" className="block text-center px-6 py-3 rounded-btn border border-border font-semibold text-sm text-text hover:border-blue transition-colors mb-6">
            Start Pilot
          </Link>
          <div className="h-px bg-border mb-6" />
          <div className="text-xs font-bold text-muted uppercase tracking-wider mb-4">What&apos;s included</div>
          <ul className="space-y-3">
            {starterFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm">
                {f.included ? <Check /> : <Dash />}
                <span className={f.included ? 'text-text' : 'text-muted'}>{f.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* SCALE (featured) */}
        <div className="rounded-2xl border-2 border-blue p-8 shadow-hover relative -mt-4">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-grad-primary text-white text-xs font-bold">
            Most popular
          </div>
          <div className="text-xs font-bold text-blue uppercase tracking-wider mb-2">Growth</div>
          <div className="font-sora text-2xl font-bold mb-2 text-text">Scale</div>
          <p className="text-sm text-muted mb-6">For mid-size enterprises running skills intelligence across multiple functions.</p>
          <div className="mb-1">
            <span className="text-lg text-text align-top">$</span>
            <span className="font-sora text-5xl font-bold text-text">{annual ? 11 : 14}</span>
            <span className="text-sm text-muted"> / employee / mo</span>
          </div>
          <div className="text-xs text-muted mb-6">Billed {annual ? 'annually' : 'monthly'} · 500 - 5,000 employees</div>
          <Link href="/demo" className="block text-center px-6 py-3 rounded-btn bg-grad-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity mb-6">
            Book a Demo
          </Link>
          <div className="h-px bg-border mb-6" />
          <div className="text-xs font-bold text-muted uppercase tracking-wider mb-4">Everything in Starter, plus</div>
          <ul className="space-y-3">
            {scaleFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm">
                {f.included ? <Check className="text-violet" /> : <Dash />}
                <span className={f.included ? 'text-text' : 'text-muted'}>{f.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ENTERPRISE */}
        <div className="rounded-2xl border border-border p-8">
          <div className="text-xs font-bold text-blue uppercase tracking-wider mb-2">Enterprise</div>
          <div className="font-sora text-2xl font-bold mb-2 text-text">Full Platform</div>
          <p className="text-sm text-muted mb-6">For large enterprises needing board-level intelligence, custom taxonomy, and SLA guarantees.</p>
          <div className="font-sora text-3xl font-bold text-text mb-1">Custom</div>
          <div className="text-sm text-muted mb-6">Tailored to headcount &amp; scope</div>
          <div className="text-xs text-muted mb-6">5,000+ employees · Volume pricing</div>
          <Link href="/demo" className="block text-center px-6 py-3 rounded-btn bg-text text-white font-semibold text-sm hover:opacity-90 transition-opacity mb-6">
            Talk to Sales
          </Link>
          <div className="h-px bg-border mb-6" />
          <div className="text-xs font-bold text-muted uppercase tracking-wider mb-4">Everything in Scale, plus</div>
          <ul className="space-y-3">
            {enterpriseFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm">
                <Check className="text-green" />
                <span className="text-text">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
