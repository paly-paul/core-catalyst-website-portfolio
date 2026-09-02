'use client'

import { ReactElement, useState } from 'react'

const icons: Record<string, ReactElement> = {
  chro: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  manager: (
    <>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </>
  ),
  hrops: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M4.93 19.07l1.41-1.41M19.07 19.07l-1.41-1.41M12 2v2M12 20v2M2 12H4M20 12h2" />
    </>
  ),
}

const personas = [
  {
    key: 'chro',
    name: 'CHRO & People Leaders',
    role: 'Workforce strategy',
    tag: 'CHRO & People Leaders',
    title: 'Make strategic talent decisions with actual workforce data.',
    desc: 'Stop guessing whether you have the skills to execute your 3-year strategy. CoreCatalyst shows you exactly where your critical gaps are, what it costs to fill them internally vs. externally, and which teams are at risk if a key person leaves.',
    outcomes: [
      'Board-ready skills gap dashboards updated in real time - not locked in a quarterly HR report',
      'Build-buy-borrow analysis for every critical role - backed by verified internal skills data',
      'Succession planning powered by actual skill profiles, not job title proximity',
    ],
  },
  {
    key: 'manager',
    name: 'People Managers',
    role: 'Team development',
    tag: 'People Managers',
    title: 'Develop your team with precision, not gut feel.',
    desc: "CoreCatalyst gives managers a clear picture of each team member's verified skills, what they're building toward, and the specific gaps between today and their next role - so every 1:1 conversation is backed by data.",
    outcomes: [
      'Review and adjudicate AI-suggested skill levels in 2 minutes per person - no system training needed',
      "Personalised growth plans generated automatically based on each person's verified skills and career goals",
      'Spot internal candidates for projects and stretch assignments before posting externally',
    ],
  },
  {
    key: 'hrops',
    name: 'HR Operations',
    role: 'Data & integrations',
    tag: 'HR Operations',
    title: 'One clean skills record - flowing everywhere it needs to.',
    desc: 'CoreCatalyst is the single source of truth your whole HR stack has been missing. Connect once, and every downstream system gets verified, current skills data - with full audit trails and HRIS write-back.',
    outcomes: [
      '200+ pre-built connectors for Workday, SAP, Oracle, Cornerstone, and every major LMS and ATS',
      'Full audit trail on every skill change - who set it, which source, when, and why - ready for compliance review',
      'HRIS write-back means your system of record always reflects the latest reconciled skills - zero manual re-entry',
    ],
  },
]

export default function PersonaTabs() {
  const [active, setActive] = useState('chro')
  const persona = personas.find((p) => p.key === active)!

  return (
    <div className="grid grid-cols-[300px_1fr] gap-8">
      <div className="space-y-2">
        {personas.map((p) => (
          <button
            key={p.key}
            onClick={() => setActive(p.key)}
            className={`w-full flex items-center gap-3 p-4 rounded-2xl border text-left transition-colors ${
              active === p.key ? 'bg-white border-blue shadow-card' : 'bg-white/60 border-border hover:border-blue/50'
            }`}
          >
            <span className={`w-[38px] h-[38px] rounded-[10px] flex items-center justify-center flex-shrink-0 transition-colors ${active === p.key ? 'bg-blue' : 'bg-bg'}`}>
              <svg className={`w-[18px] h-[18px] ${active === p.key ? 'text-white' : 'text-muted'}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {icons[p.key]}
              </svg>
            </span>
            <div>
              <div className="text-sm font-semibold text-text">{p.name}</div>
              <div className="text-xs text-muted">{p.role}</div>
            </div>
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-border p-8">
        <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue mb-4">{persona.tag}</span>
        <h3 className="font-sora text-2xl font-bold mb-4 text-text leading-snug">{persona.title}</h3>
        <p className="text-muted leading-relaxed mb-6">{persona.desc}</p>
        <div className="space-y-3">
          {persona.outcomes.map((o, i) => (
            <div key={i} className="flex gap-3 items-start bg-bg rounded-lg p-3">
              <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-text leading-relaxed">{o}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
