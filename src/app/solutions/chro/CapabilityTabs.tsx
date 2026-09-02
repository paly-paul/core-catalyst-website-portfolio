'use client'

import { useState } from 'react'

const tabs = [
  { key: 'board', label: 'Board reporting' },
  { key: 'mobility', label: 'Internal mobility' },
  { key: 'succession', label: 'Succession pipeline' },
]

const boardPoints = [
  { strong: 'Readiness score by function', text: 'see exactly which teams are ready for the next strategic challenge and which need investment now' },
  { strong: 'Skills risk heatmap', text: 'pinpoint where critical skills are dangerously thin, with drill-down to individual teams' },
  { strong: 'Quarter-over-quarter trends', text: 'show the board a trajectory, not just a snapshot. Track which investments are moving the needle' },
  { strong: 'Board-native format', text: 'pre-built templates aligned to board reporting cadence; no reformatting, no copy-paste' },
]

const mobilityPoints = [
  { strong: 'Skills-to-role matching', text: 'CoreCatalyst compares verified skills profiles against every open role and surfaces the strongest internal candidates automatically' },
  { strong: 'Gap-to-readiness timelines', text: 'for near-matches, calculate exactly which skills are needed and how long a targeted development plan would take' },
  { strong: 'Cross-function visibility', text: "break down departmental silos; surface Finance talent ready for an Operations leadership role they'd never self-nominate for" },
  { strong: 'Manager alerts', text: 'automatically notify managers when team members match open roles, before the person starts looking externally' },
]

const successionPoints = [
  { strong: 'Skills-verified successor slates', text: 'see which potential successors truly have the required capabilities vs. who looks good on paper' },
  { strong: 'Pipeline depth by critical role', text: 'instantly see how many ready-now, ready-in-12-months, and developing successors exist for every key position' },
  { strong: 'Gap-targeted development', text: 'for each successor, generate a precise development plan targeting the exact skills delta, not a generic leadership program' },
  { strong: 'Risk alerts', text: 'flag critical roles with thin or empty successor pipelines before they become emergencies' },
]

function Points({ points }: { points: { strong: string; text: string }[] }) {
  return (
    <div className="flex flex-col gap-3">
      {points.map((p, i) => (
        <div key={i} className="flex gap-2.5 items-start">
          <div className="w-5 h-5 bg-gradient-to-br from-[#eef2ff] to-[#f0f4ff] border border-[#c5d0fa] rounded-[6px] flex items-center justify-center flex-shrink-0 text-blue text-[11px] font-bold">✓</div>
          <div className="text-sm text-muted leading-relaxed">
            <strong className="text-text">{p.strong}</strong> - {p.text}
          </div>
        </div>
      ))}
    </div>
  )
}

function BoardVisual() {
  const rows = [
    { label: 'AI/Data', supply: 43, demand: 82, supplyVal: 430, demandVal: 820, delta: '-390', color: 'text-red' },
    { label: 'Engineering', supply: 78, demand: 72, supplyVal: 780, demandVal: 720, delta: '+60', color: 'text-green' },
    { label: 'Finance', supply: 65, demand: 55, supplyVal: 320, demandVal: 270, delta: '+50', color: 'text-green' },
    { label: 'Operations', supply: 60, demand: 75, supplyVal: 1200, demandVal: 1500, delta: '-300', color: 'text-amber-600' },
  ]
  const risks = [
    { dot: 'bg-red', label: 'AI/Data capability gap', val: '390 roles', trend: '↑ worsening' },
    { dot: 'bg-yellow', label: 'Operations automation readiness', val: 'Medium', trend: '→ stable' },
    { dot: 'bg-green', label: 'Finance - succession pipeline', val: 'Healthy', trend: '↑ improving' },
  ]

  return (
    <div className="bg-white rounded-[20px] border border-border shadow-card overflow-hidden">
      <div className="bg-grad-primary px-5 py-4 flex items-center justify-between">
        <span className="font-sora font-bold text-[13px] text-white">Q3 Workforce Readiness Report</span>
        <span className="text-[11px] text-white/70">Board Pack - September 2026</span>
      </div>
      <div className="p-5">
        <div className="flex gap-4 text-[10px] text-muted mb-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ background: '#74c0fc' }} />
            Supply (we have)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ background: '#ffa94d' }} />
            Demand (we need)
          </span>
        </div>
        <div className="space-y-2 mb-5">
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-[64px_1fr_44px] items-center gap-2 text-[11px]">
              <span className="text-muted font-medium">{r.label}</span>
              <div className="flex flex-col gap-[3px]">
                <div className="flex items-center gap-1.5">
                  <div className="flex-1 h-2 bg-bg rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${r.supply}%`, background: '#74c0fc' }} />
                  </div>
                  <span className="text-[10px] text-muted w-9 text-right flex-shrink-0">{r.supplyVal}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex-1 h-2 bg-bg rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${r.demand}%`, background: '#ffa94d' }} />
                  </div>
                  <span className="text-[10px] text-muted w-9 text-right flex-shrink-0">{r.demandVal}</span>
                </div>
              </div>
              <span className={`text-[10px] font-bold text-right ${r.color}`}>{r.delta}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 pt-4 border-t border-border">
          {risks.map((r, i) => (
            <div key={i} className="flex items-center gap-2 text-xs">
              <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${r.dot}`} />
              <span className="text-text font-semibold flex-1">{r.label}</span>
              <span className="text-text font-semibold">{r.val}</span>
              <span className="text-muted text-[11px]">{r.trend}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobilityVisual() {
  const matches = [
    { name: 'Sarah K.', from: 'Senior Analyst, Finance', to: 'Head of FP&A, Asia-Pac', match: 92 },
    { name: 'James T.', from: 'Procurement Manager', to: 'Supply Chain Director', match: 87 },
    { name: 'Priya M.', from: 'Data Analyst, Operations', to: 'AI Solutions Lead', match: 74 },
  ]
  return (
    <div className="bg-bg border border-border rounded-[20px] shadow-card p-6">
      <div className="font-sora font-bold text-[13px] text-text mb-1">Internal Mobility Matches</div>
      <div className="text-[11px] text-muted mb-5">This week - 14 high-confidence matches found</div>
      <div className="flex flex-col gap-2.5 mb-3.5">
        {matches.map((m, i) => (
          <div key={i} className="bg-white border border-border rounded-xl p-[12px_14px] grid grid-cols-[1fr_auto_auto] items-center gap-3">
            <div>
              <div className="text-xs font-semibold text-text">{m.name}</div>
              <div className="text-[11px] text-muted">{m.from}</div>
            </div>
            <span className="text-sm text-muted">→</span>
            <div className="text-right">
              <div className="text-[11px] font-semibold text-blue mb-1">{m.to}</div>
              <span
                className={`text-[10px] font-bold px-2 py-[3px] rounded-full ${
                  m.match >= 85 ? 'bg-[#e3f9e5] text-[#2b7a3d]' : 'bg-[#fff8e1] text-[#854d0e]'
                }`}
              >
                {m.match}% match
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5 text-[11px] text-muted mt-3.5">
        📄 Avg. external hire cost saved: <strong className="text-blue">$38K per placement</strong>
      </div>
    </div>
  )
}

function SuccessionVisual() {
  const roles = [
    {
      name: 'Chief Operating Officer',
      depth: 'Depth: 3 candidates',
      risk: false,
      candidates: [
        { tier: 'Ready now', name: 'M. Chen', match: '94% match', style: 'ready' },
        { tier: '12 months', name: 'R. Patel', match: '81% match', style: 'mid' },
        { tier: 'Developing', name: 'A. Wolfe', match: '68% match', style: 'gap' },
      ],
    },
    {
      name: 'VP Engineering',
      depth: 'Depth: 2 candidates',
      risk: false,
      candidates: [
        { tier: 'Ready now', name: 'J. Torres', match: '89% match', style: 'ready' },
        { tier: 'Developing', name: 'S. Kim', match: '71% match', style: 'gap' },
      ],
    },
    {
      name: 'Head of AI Strategy',
      depth: '⚠ Pipeline thin',
      risk: true,
      candidates: [
        { tier: 'Developing', name: 'L. Nkosi', match: '57% match', style: 'gap' },
        { tier: 'External gap', name: 'Hire needed', match: '-', style: 'external' },
      ],
    },
  ]
  const styleMap: Record<string, string> = {
    ready: 'bg-[#f0fdf4] border-[#bbf7d0]',
    mid: 'bg-bg border-border',
    gap: 'bg-[#fff8e1] border-[#ffe08a]',
    external: 'bg-[#fff5f5] border-[#ffc9c9]',
  }
  const nameStyleMap: Record<string, string> = {
    ready: 'text-[#166534]',
    mid: 'text-text',
    gap: 'text-text',
    external: 'text-red',
  }
  return (
    <div className="bg-white border border-border rounded-[20px] shadow-card overflow-hidden">
      <div className="bg-gradient-to-br from-[#f8f9ff] to-[#f3f0ff] border-b border-border px-5 py-3.5 flex items-center justify-between">
        <span className="font-sora font-bold text-xs text-text">Succession Pipeline - Critical Roles</span>
        <span className="text-[11px] text-muted bg-bg border border-border px-2.5 py-[3px] rounded-full">8 roles tracked</span>
      </div>
      <div className="p-5">
        <div className="flex flex-col gap-3.5">
          {roles.map((r, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-xs font-semibold ${r.risk ? 'text-red' : 'text-text'}`}>{r.name}</span>
                <span className={`text-[10px] ${r.risk ? 'text-red font-semibold' : 'text-muted'}`}>{r.depth}</span>
              </div>
              <div className="flex gap-1.5">
                {r.candidates.map((c, j) => (
                  <div key={j} className={`flex-1 text-center rounded-lg border p-[6px_4px] ${styleMap[c.style]}`}>
                    <div className="text-[9px] font-bold uppercase tracking-[.06em] text-muted mb-[3px]">{c.tier}</div>
                    <div className={`text-[11px] font-semibold mb-0.5 ${nameStyleMap[c.style]}`}>{c.name}</div>
                    <div className="text-[10px] text-muted">{c.match}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function CapabilityTabs() {
  const [active, setActive] = useState('board')

  return (
    <div>
      <div className="flex gap-1.5 mb-12 flex-wrap">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`px-[18px] py-[9px] rounded-full text-[13px] font-semibold border transition-colors ${
              active === t.key ? 'bg-grad-primary text-white border-transparent' : 'bg-bg text-muted border-border hover:border-blue'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {active === 'board' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-sora text-xl sm:text-[24px] font-bold mb-3.5 text-text leading-[1.25]">One-click board reports that tell the real story</h3>
            <p className="text-[15px] text-[#4a5180] leading-[1.65] mb-6">
              Stop building board packs manually. CoreCatalyst generates executive-ready workforce intelligence reports - readiness scores, gap analysis, skills risk heatmaps - at the click of a button, refreshed from live data.
            </p>
            <Points points={boardPoints} />
          </div>
          <BoardVisual />
        </div>
      )}

      {active === 'mobility' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-sora text-xl sm:text-[24px] font-bold mb-3.5 text-text leading-[1.25]">Move talent before you lose it</h3>
            <p className="text-[15px] text-[#4a5180] leading-[1.65] mb-6">
              Internal mobility is 3x cheaper than external hiring and dramatically improves retention. But it only works when you can actually see who&apos;s ready for what. CoreCatalyst surfaces hidden talent matches across your entire workforce.
            </p>
            <Points points={mobilityPoints} />
          </div>
          <MobilityVisual />
        </div>
      )}

      {active === 'succession' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-sora text-xl sm:text-[24px] font-bold mb-3.5 text-text leading-[1.25]">Know your succession pipeline before the board asks</h3>
            <p className="text-[15px] text-[#4a5180] leading-[1.65] mb-6">
              Succession planning built on job titles and gut instinct misses the people who are actually ready. CoreCatalyst builds succession slates from verified skills data - so the board sees real pipeline depth, not wishful thinking.
            </p>
            <Points points={successionPoints} />
          </div>
          <SuccessionVisual />
        </div>
      )}
    </div>
  )
}
