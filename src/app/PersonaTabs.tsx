'use client'

import { ReactElement, useState } from 'react'

const tabIcons: Record<string, ReactElement> = {
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
      {
        icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
        text: 'Board-ready skills gap dashboards updated in real time - not locked in a quarterly HR report',
      },
      {
        icon: (
          <>
            <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
            <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
          </>
        ),
        text: 'Build-buy-borrow analysis for every critical role - backed by verified internal skills data',
      },
      {
        icon: (
          <>
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </>
        ),
        text: 'Succession planning powered by actual skill profiles, not job title proximity',
      },
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
      {
        icon: <path d="M20 6L9 17l-5-5" />,
        text: 'Review and adjudicate AI-suggested skill levels in 2 minutes per person - no system training needed',
      },
      {
        icon: <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />,
        text: "Personalised growth plans generated automatically based on each person's verified skills and career goals",
      },
      {
        icon: (
          <>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4l3 3" />
          </>
        ),
        text: 'Spot internal candidates for projects and stretch assignments before posting externally',
      },
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
      {
        icon: <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />,
        text: '200+ pre-built connectors for Workday, SAP, Oracle, Cornerstone, and every major LMS and ATS',
      },
      {
        icon: (
          <>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 9h6M9 13h6M9 17h4" />
          </>
        ),
        text: 'Full audit trail on every skill change - who set it, which source, when, and why - ready for compliance review',
      },
      {
        icon: (
          <>
            <polyline points="17 1 21 5 17 9" />
            <path d="M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4" />
            <path d="M21 13v2a4 4 0 01-4 4H3" />
          </>
        ),
        text: 'HRIS write-back means your system of record always reflects the latest reconciled skills - zero manual re-entry',
      },
    ],
  },
]

export default function PersonaTabs() {
  const [active, setActive] = useState('chro')
  const persona = personas.find((p) => p.key === active)!

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 lg:gap-8">
      <div className="flex flex-col gap-2.5">
        {personas.map((p) => (
          <button
            key={p.key}
            onClick={() => setActive(p.key)}
            className={`flex items-center gap-3.5 p-[16px_20px] rounded-[14px] border text-left transition-all ${
              active === p.key ? 'bg-[#eef1ff] border-[#c5d3f7]' : 'bg-transparent border-transparent hover:bg-bg'
            }`}
          >
            <span className={`w-[38px] h-[38px] rounded-[10px] flex items-center justify-center flex-shrink-0 transition-colors ${active === p.key ? 'bg-blue' : 'bg-bg'}`}>
              <svg className={`w-[18px] h-[18px] ${active === p.key ? 'text-white' : 'text-muted'}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {tabIcons[p.key]}
              </svg>
            </span>
            <div>
              <div className={`text-sm font-bold ${active === p.key ? 'text-blue' : 'text-text'}`}>{p.name}</div>
              <div className="text-xs font-medium text-muted">{p.role}</div>
            </div>
          </button>
        ))}
      </div>

      <div className="bg-bg rounded-[20px] border border-border p-[36px_36px_32px] min-h-[420px]">
        <span className="inline-flex items-center text-[11.5px] font-bold px-3 py-1 rounded-full bg-[#eef1ff] border border-[#c5d3f7] text-blue mb-5">
          {persona.tag}
        </span>
        <h3 className="font-sora text-xl sm:text-[26px] font-extrabold leading-[1.25] mb-3.5 text-text">{persona.title}</h3>
        <p className="text-[15px] text-[#5c6587] leading-[1.7] mb-7">{persona.desc}</p>
        <div className="flex flex-col gap-2.5">
          {persona.outcomes.map((o, i) => (
            <div key={i} className="flex gap-3 items-start bg-white rounded-xl border border-border p-[14px_16px]">
              <div className="w-[30px] h-[30px] rounded-lg bg-[#eef1ff] flex items-center justify-center flex-shrink-0">
                <svg className="w-[15px] h-[15px] text-blue" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  {o.icon}
                </svg>
              </div>
              <span className="text-[13.5px] font-medium text-text leading-[1.5] pt-1">{o.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
