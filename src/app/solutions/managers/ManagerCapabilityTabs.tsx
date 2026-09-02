'use client'

import { useState } from 'react'

const tabs = [
  { key: 'adjudication', label: 'Skill conflict review' },
  { key: 'gaps', label: 'Gap-closure plans' },
  { key: 'coverage', label: 'Team coverage map' },
]

const adjudicationPoints = [
  { strong: 'Clear conflict cards', text: "see exactly which source says what, and what the AI's weighted recommendation is, in plain language" },
  { strong: 'Your judgment counts', text: 'manager confirmation carries the highest trust weight in the reconciliation engine, above CV or LMS data' },
  { strong: 'Auto-batched weekly', text: 'conflicts are grouped into your weekly digest; no constant interruptions, just a focused Monday review' },
  { strong: 'HRIS write-back', text: 'your confirmation updates the source of truth in Workday/SAP automatically, no manual entry' },
]

const gapPoints = [
  { strong: 'Skill-level precision', text: 'not "improve your Python", but "move from Intermediate to Advanced: here are the 3 specific gaps"' },
  { strong: 'Multi-modal plans', text: 'course recommendations, internal shadowing opportunities, project-based learning, peer mentoring - whatever fits the gap' },
  { strong: 'Timeline visibility', text: "see when your team member is projected to be ready for the role or project they're targeting, based on development pace" },
  { strong: 'Progress tracking', text: 'the plan updates automatically as the person completes courses and activities; you see closure happening in real time' },
]

const coveragePoints = [
  { strong: 'Visual skill matrix', text: "see the team's collective capabilities mapped against your most critical skill requirements" },
  { strong: 'Single-point-of-failure alerts', text: "know immediately when only one person on your team has a critical skill - a flight risk you can't afford" },
  { strong: 'Project-specific view', text: 'filter the matrix to just the skills a specific project needs; instantly see who can contribute and who has gaps' },
  { strong: 'Hiring flag', text: "when a skill gap can't be closed internally in time, CoreCatalyst flags it for recruitment with the exact profile required" },
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

function AdjudicationVisual() {
  const [decisions, setDecisions] = useState<Record<string, 'confirmed' | 'disputed' | null>>({})

  const items = [
    { key: 'marcus', avatar: 'from-blue to-violet', initials: 'MP', name: 'Marcus P. - Python', context: 'CV vs. LMS completion records', confidence: '87% confident', confColor: 'bg-green-50 text-green', from: 'Advanced', to: 'Intermediate+' },
    { key: 'jamie', avatar: 'from-yellow to-red', initials: 'JL', name: 'Jamie L. - Data Visualisation', context: 'Assessment vs. performance review', confidence: '71% confident', confColor: 'bg-amber-50 text-amber-700', from: 'Basic', to: 'Intermediate' },
  ]

  return (
    <div className="bg-white rounded-2xl border border-border p-6">
      <div className="flex items-center justify-between mb-5">
        <span className="font-sora font-bold text-sm text-text">Skills to review this week</span>
        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700">3 pending</span>
      </div>
      <div className="space-y-4">
        {items.map((item) => {
          const decision = decisions[item.key]
          return (
            <div
              key={item.key}
              className={`rounded-lg border p-4 transition-colors ${
                decision === 'confirmed' ? 'bg-green-50 border-green-200' : decision === 'disputed' ? 'bg-red-50 border-red-200' : 'bg-bg border-border'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.avatar} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}>
                  {item.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-text">{item.name}</div>
                  <div className="text-xs text-muted">{item.context}</div>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap ${item.confColor}`}>{item.confidence}</span>
              </div>
              <div className="flex items-center gap-3 mb-3 text-xs">
                <div className="text-muted">
                  CV says <strong className="text-text">{item.from}</strong>
                </div>
                <span className="text-muted">→</span>
                <div className="text-muted">
                  Recommend <strong className="text-blue">{item.to}</strong>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setDecisions((d) => ({ ...d, [item.key]: 'confirmed' }))}
                  disabled={!!decision}
                  className="flex-1 px-3 py-2 rounded-lg bg-green text-white text-xs font-semibold disabled:opacity-70"
                >
                  {decision === 'confirmed' ? '✓ Confirmed' : `Confirm ${item.to}`}
                </button>
                <button
                  onClick={() => setDecisions((d) => ({ ...d, [item.key]: 'disputed' }))}
                  disabled={!!decision}
                  className="flex-1 px-3 py-2 rounded-lg bg-white border border-border text-text text-xs font-semibold disabled:opacity-70"
                >
                  {decision === 'disputed' ? 'Disputed' : 'Dispute'}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function GapPlanVisual() {
  const rows = [
    { skill: 'Python', have: 'Intermediate', need: 'Advanced', chip: 'Course', chipColor: 'bg-blue-50 text-blue' },
    { skill: 'SQL optimization', have: 'Basic', need: 'Intermediate', chip: 'Shadow', chipColor: 'bg-violet-50 text-violet' },
    { skill: 'dbt / data pipelines', have: 'None', need: 'Basic', chip: 'Mentor', chipColor: 'bg-cyan-50 text-cyan' },
    { skill: 'Data storytelling', have: 'Intermediate', need: 'Intermediate', chip: '✓ Met', chipColor: 'bg-green-50 text-green' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-border p-6">
      <div className="flex items-center justify-between mb-5">
        <span className="font-sora font-bold text-sm text-text">Gap Closure Plan - Jamie L.</span>
        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue">8-week plan</span>
      </div>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow to-red text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
          JL
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold text-text">Jamie L.</div>
          <div className="text-xs text-muted">Associate Analyst → Data Engineer (target)</div>
        </div>
        <div className="text-right">
          <div className="font-sora font-bold text-lg text-text">71%</div>
          <div className="text-[10px] text-muted">current match</div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_70px_70px_70px] gap-2 text-[9px] font-bold text-muted uppercase tracking-wider mb-2">
        <span>Skill gap</span><span>Have</span><span>Need</span><span>Rec.</span>
      </div>
      <div className="space-y-2 mb-5">
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-[1fr_70px_70px_70px] gap-2 items-center text-xs">
            <span className="font-semibold text-text">{r.skill}</span>
            <span className="text-muted">{r.have}</span>
            <span className="text-muted">{r.need}</span>
            <span className={`text-[10px] font-bold px-2 py-1 rounded-full text-center ${r.chipColor}`}>{r.chip}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between text-xs border-t border-border pt-3">
        <span className="text-muted">
          Projected ready: <strong className="text-blue">Nov 2026</strong>
        </span>
        <span className="font-semibold text-blue">Share with Jamie →</span>
      </div>
    </div>
  )
}

function CoverageVisual() {
  const skills = ['Python', 'SQL', 'Tableau', 'Stakeholder']
  const rows = [
    { person: 'Aisha K.', cells: [{ v: 'Advanced', lvl: 'strong' }, { v: 'Advanced', lvl: 'strong' }, { v: 'Intermediate', lvl: 'mid' }, { v: 'Advanced', lvl: 'strong' }] },
    { person: 'Marcus P.', cells: [{ v: 'Inter+', lvl: 'mid' }, { v: 'Advanced', lvl: 'strong' }, { v: 'Advanced', lvl: 'strong' }, { v: 'Intermediate', lvl: 'mid' }] },
    { person: 'Jamie L.', cells: [{ v: 'Intermediate', lvl: 'mid' }, { v: 'Basic', lvl: 'low' }, { v: 'Intermediate', lvl: 'mid' }, { v: 'Basic', lvl: 'low' }] },
    { person: 'Riya N.', cells: [{ v: '-', lvl: 'na' }, { v: 'Intermediate', lvl: 'mid' }, { v: 'Advanced', lvl: 'strong' }, { v: 'Advanced', lvl: 'strong' }] },
  ]
  const lvlStyle: Record<string, string> = {
    strong: 'bg-green-50 text-green-800',
    mid: 'bg-amber-50 text-amber-800',
    low: 'bg-red-50 text-red-700',
    na: 'bg-bg text-muted',
  }

  return (
    <div className="bg-white rounded-2xl border border-border p-6">
      <div className="font-sora font-bold text-sm text-text mb-1">Team Skill Coverage - Analytics Pod</div>
      <div className="text-xs text-muted mb-5">4 team members × 4 critical skills | Q3 2026</div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px]">
          <thead>
            <tr>
              <th className="text-left text-[10px] text-muted pb-2"></th>
              {skills.map((s) => (
                <th key={s} className="text-[10px] text-muted pb-2 font-semibold">{s}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td className="text-xs font-semibold text-text py-1 pr-2 whitespace-nowrap">{r.person}</td>
                {r.cells.map((c, j) => (
                  <td key={j} className="py-1 px-1">
                    <div className={`text-[10px] font-semibold text-center rounded-md py-1.5 ${lvlStyle[c.lvl]}`}>{c.v}</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center gap-4 mt-4 text-xs text-muted">
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green" />Strong</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-yellow" />Developing</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red" />Gap</span>
      </div>
    </div>
  )
}

export default function ManagerCapabilityTabs() {
  const [active, setActive] = useState('adjudication')

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

      {active === 'adjudication' && (
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-sora text-2xl font-bold mb-4 text-text">Resolve skill conflicts in 30 seconds - not 5 days</h3>
            <p className="text-muted leading-relaxed mb-6">
              When two sources disagree about a team member&apos;s skill level, you get a clear side-by-side comparison with a confidence score - and a single button to confirm or dispute. No HR involvement needed.
            </p>
            <Points points={adjudicationPoints} />
          </div>
          <AdjudicationVisual />
        </div>
      )}

      {active === 'gaps' && (
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-sora text-2xl font-bold mb-4 text-text">Turn &ldquo;you need to grow&rdquo; into &ldquo;here&apos;s exactly how&rdquo;</h3>
            <p className="text-muted leading-relaxed mb-6">
              Stop having vague development conversations. CoreCatalyst calculates the precise skill delta between where your team member is today and where they need to be - and generates a targeted 8-12 week plan to close it.
            </p>
            <Points points={gapPoints} />
          </div>
          <GapPlanVisual />
        </div>
      )}

      {active === 'coverage' && (
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-sora text-2xl font-bold mb-4 text-text">See your team&apos;s coverage before projects land - not after</h3>
            <p className="text-muted leading-relaxed mb-6">
              Who on your team can handle Tableau? Who covers both SQL and stakeholder management? The team coverage map shows you critical skill distribution at a glance - so you can plan ahead, not scramble.
            </p>
            <Points points={coveragePoints} />
          </div>
          <CoverageVisual />
        </div>
      )}
    </div>
  )
}
