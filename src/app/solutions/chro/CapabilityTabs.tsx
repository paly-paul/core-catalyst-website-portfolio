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
    <div className="space-y-3">
      {points.map((p, i) => (
        <div key={i} className="flex gap-3 items-start">
          <div className="w-5 h-5 rounded-full bg-blue text-white flex items-center justify-center flex-shrink-0 text-[10px] font-bold mt-0.5">✓</div>
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
    <div className="bg-white rounded-2xl border border-border p-6">
      <div className="flex items-center justify-between mb-5">
        <span className="font-sora font-bold text-sm text-text">Q3 Workforce Readiness Report</span>
        <span className="text-xs text-muted">Board Pack - September 2026</span>
      </div>
      <div className="flex gap-4 text-xs text-muted mb-3">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full" style={{ background: '#74c0fc' }} />
          Supply (we have)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full" style={{ background: '#ffa94d' }} />
          Demand (we need)
        </span>
      </div>
      <div className="space-y-3 mb-5">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-xs text-muted w-20 flex-shrink-0">{r.label}</span>
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-bg rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${r.supply}%`, background: '#74c0fc' }} />
                </div>
                <span className="text-[10px] text-muted w-10 text-right">{r.supplyVal}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-bg rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${r.demand}%`, background: '#ffa94d' }} />
                </div>
                <span className="text-[10px] text-muted w-10 text-right">{r.demandVal}</span>
              </div>
            </div>
            <span className={`text-[10px] font-bold w-10 text-right ${r.color}`}>{r.delta}</span>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {risks.map((r, i) => (
          <div key={i} className="flex items-center gap-2 text-xs">
            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${r.dot}`} />
            <span className="text-text flex-1">{r.label}</span>
            <span className="text-muted">{r.val}</span>
            <span className="text-muted">{r.trend}</span>
          </div>
        ))}
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
    <div className="bg-white rounded-2xl border border-border p-6">
      <div className="font-sora font-bold text-sm text-text mb-1">Internal Mobility Matches</div>
      <div className="text-xs text-muted mb-5">This week - 14 high-confidence matches found</div>
      <div className="space-y-4 mb-5">
        {matches.map((m, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <div>
              <div className="font-semibold text-text">{m.name}</div>
              <div className="text-xs text-muted">{m.from}</div>
            </div>
            <span className="text-muted">→</span>
            <div className="text-right">
              <div className="font-semibold text-text">{m.to}</div>
              <div className={`text-xs font-bold ${m.match >= 85 ? 'text-green' : 'text-amber-600'}`}>{m.match}% match</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 text-xs text-muted bg-bg rounded-lg p-3">
        📄 Avg. external hire cost saved: <strong className="text-text">$38K per placement</strong>
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
    ready: 'bg-green-50 border-green-200',
    mid: 'bg-bg border-border',
    gap: 'bg-amber-50 border-amber-200',
    external: 'bg-red-50 border-red-200',
  }
  return (
    <div className="bg-white rounded-2xl border border-border p-6">
      <div className="flex items-center justify-between mb-5">
        <span className="font-sora font-bold text-sm text-text">Succession Pipeline - Critical Roles</span>
        <span className="text-xs text-muted">8 roles tracked</span>
      </div>
      <div className="space-y-5">
        {roles.map((r, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-semibold ${r.risk ? 'text-red' : 'text-text'}`}>{r.name}</span>
              <span className={`text-xs ${r.risk ? 'text-red font-semibold' : 'text-muted'}`}>{r.depth}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {r.candidates.map((c, j) => (
                <div key={j} className={`rounded-lg border p-2 text-center ${styleMap[c.style]}`}>
                  <div className="text-[10px] text-muted mb-0.5">{c.tier}</div>
                  <div className="text-xs font-semibold text-text">{c.name}</div>
                  <div className="text-[10px] text-muted">{c.match}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CapabilityTabs() {
  const [active, setActive] = useState('board')

  return (
    <div>
      <div className="flex gap-2 mb-10 flex-wrap">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors ${
              active === t.key ? 'bg-text text-white border-text' : 'bg-white text-muted border-border hover:border-blue'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {active === 'board' && (
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-sora text-2xl font-bold mb-4 text-text">One-click board reports that tell the real story</h3>
            <p className="text-muted leading-relaxed mb-6">
              Stop building board packs manually. CoreCatalyst generates executive-ready workforce intelligence reports - readiness scores, gap analysis, skills risk heatmaps - at the click of a button, refreshed from live data.
            </p>
            <Points points={boardPoints} />
          </div>
          <BoardVisual />
        </div>
      )}

      {active === 'mobility' && (
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-sora text-2xl font-bold mb-4 text-text">Move talent before you lose it</h3>
            <p className="text-muted leading-relaxed mb-6">
              Internal mobility is 3x cheaper than external hiring and dramatically improves retention. But it only works when you can actually see who&apos;s ready for what. CoreCatalyst surfaces hidden talent matches across your entire workforce.
            </p>
            <Points points={mobilityPoints} />
          </div>
          <MobilityVisual />
        </div>
      )}

      {active === 'succession' && (
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-sora text-2xl font-bold mb-4 text-text">Know your succession pipeline before the board asks</h3>
            <p className="text-muted leading-relaxed mb-6">
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
