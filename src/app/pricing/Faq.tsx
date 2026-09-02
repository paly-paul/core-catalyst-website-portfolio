'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'How is employee count calculated?',
    a: "We count active employees whose skill profiles are managed through CoreCatalyst at the end of each billing cycle. Contractors and contingent workers are optional and can be added at a reduced per-seat rate. You only pay for what's actively reconciled - there's no charge for archived profiles.",
  },
  {
    q: 'Can I start on Starter and upgrade later?',
    a: "Yes - and most customers do exactly that. Your pilot data, taxonomy mappings, and reconciliation history all carry forward when you upgrade. There's no re-implementation required. Upgrades take effect at the start of your next billing cycle.",
  },
  {
    q: 'What HRIS systems do you connect to?',
    a: 'Our standard connector library includes Workday, SAP SuccessFactors, Oracle HCM, BambooHR, Rippling, Personio, and ADP. We also read from LinkedIn, learning platforms (Degreed, Coursera, LinkedIn Learning), and performance systems (Lattice, Culture Amp). Custom connectors are available as an add-on on Enterprise.',
  },
  {
    q: 'How long does implementation take?',
    a: 'Starter can be live in under 2 weeks - we handle the connector configuration and taxonomy seeding. Scale typically takes 3-4 weeks depending on the number of HRIS integrations and the complexity of your existing skill data. Enterprise timelines are scoped during the sales process with a dedicated implementation team.',
  },
  {
    q: 'Is my data used to train your models?',
    a: "No. Your employee skill data is never used to train or improve CoreCatalyst's underlying models. All data is processed in an isolated tenant environment and remains yours. We are SOC 2 Type II certified and fully GDPR/CCPA compliant. Enterprise customers can also opt for private cloud or on-premises deployment.",
  },
  {
    q: "What's the contract commitment?",
    a: "Starter is available month-to-month with no minimum term. Scale is available monthly or with an annual commitment (20% saving). Enterprise agreements are typically annual with multi-year options available for volume pricing. We don't lock you in before you've seen value.",
  },
  {
    q: 'Do you offer non-profit or education pricing?',
    a: "Yes. We offer discounted pricing for registered non-profits and higher education institutions. Contact our sales team with details about your organization and headcount and we'll put together a tailored proposal.",
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={i} className="rounded-2xl border border-border overflow-hidden">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
            >
              <span className="font-semibold text-text">{f.q}</span>
              <span className="text-xl text-muted flex-shrink-0">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <div className="px-5 pb-5 text-sm text-muted leading-relaxed">{f.a}</div>}
          </div>
        )
      })}
    </div>
  )
}
