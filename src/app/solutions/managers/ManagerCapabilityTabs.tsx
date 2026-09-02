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
    <div className="flex flex-col gap-3">
      {points.map((p, i) => (
        <div key={i} className="flex gap-2.5 items-start">
          <div className="w-5 h-5 bg-gradient-to-br from-[#e3f9e5] to-[#f0fdf4] border border-[#b2f2bb] rounded-[6px] flex items-center justify-center flex-shrink-0 text-[#2b7a3d] text-[11px] font-bold mt-px">✓</div>
          <div className="text-sm text-[#4a5180] leading-relaxed">
            <strong className="text-text font-semibold">{p.strong}</strong> - {p.text}
          </div>
        </div>
      ))}
    </div>
  )
}

function AdjudicationVisual() {
  const [decisions, setDecisions] = useState<Record<string, 'confirmed' | 'disputed' | null>>({})

  const items = [
    { key: 'marcus', avatar: 'from-blue to-violet', initials: 'MP', name: 'Marcus P. - Python', context: 'CV vs. LMS completion records', confidence: '87% confident', confColor: 'bg-[#e3f9e5] text-[#2b7a3d]', from: 'Advanced', to: 'Intermediate+' },
    { key: 'jamie', avatar: 'from-yellow to-red', initials: 'JL', name: 'Jamie L. - Data Visualisation', context: 'Assessment vs. performance review', confidence: '71% confident', confColor: 'bg-[#fff8e1] text-[#854d0e]', from: 'Basic', to: 'Intermediate' },
  ]

  return (
    <div className="bg-bg rounded-[20px] border border-border overflow-hidden">
      <div className="p-[14px_18px] bg-gradient-to-br from-[#f8f9ff] to-[#f3f0ff] border-b border-border flex items-center justify-between">
        <span className="font-sora font-bold text-[13px] text-text">Skills to review this week</span>
        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#fff3bf] text-[#854d0e] border border-[#ffe08a]">3 pending</span>
      </div>
      <div className="p-[14px_18px] flex flex-col gap-2.5">
        {items.map((item) => {
          const decision = decisions[item.key]
          return (
            <div key={item.key} className="bg-white border border-border rounded-xl p-[13px_14px]">
              <div className="flex items-start gap-2.5 mb-2.5">
                <div className={`w-[30px] h-[30px] rounded-full bg-gradient-to-br ${item.avatar} text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0`}>
                  {item.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-text mb-px">{item.name}</div>
                  <div className="text-[11px] text-muted">{item.context}</div>
                </div>
                <span className={`text-[11px] font-bold px-2.5 py-[3px] rounded-full whitespace-nowrap ${item.confColor}`}>{item.confidence}</span>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-center text-[11px] mb-2.5 bg-bg rounded-lg p-[8px_10px]">
                <div className="text-muted">
                  CV says
                  <span className="block font-semibold text-text text-xs">{item.from}</span>
                </div>
                <span className="text-muted text-center">→</span>
                <div className="text-muted text-right">
                  Recommend
                  <span className="block font-semibold text-blue text-xs">{item.to}</span>
                </div>
              </div>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setDecisions((d) => ({ ...d, [item.key]: 'confirmed' }))}
                  disabled={!!decision}
                  className="flex-1 p-[7px] rounded-lg bg-gradient-to-br from-blue to-violet text-white text-[11px] font-bold border-[1.5px] border-transparent hover:opacity-90 disabled:opacity-50 transition-opacity"
                >
                  {decision === 'confirmed' ? '✓ Confirmed' : `Confirm ${item.to}`}
                </button>
                <button
                  onClick={() => setDecisions((d) => ({ ...d, [item.key]: 'disputed' }))}
                  disabled={!!decision}
                  className="flex-1 p-[7px] rounded-lg bg-transparent border-[1.5px] border-border text-muted text-[11px] font-bold hover:border-red hover:text-red disabled:opacity-50 transition-all"
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
    { skill: 'Python', have: 'Intermediate', need: 'Advanced', chip: 'Course', chipColor: 'bg-[#e3f9e5] text-[#2b7a3d]' },
    { skill: 'SQL optimization', have: 'Basic', need: 'Intermediate', chip: 'Shadow', chipColor: 'bg-[#fff3bf] text-[#854d0e]' },
    { skill: 'dbt / data pipelines', have: 'None', need: 'Basic', chip: 'Mentor', chipColor: 'bg-[#e7f5ff] text-[#1864ab]' },
    { skill: 'Data storytelling', have: 'Intermediate', need: 'Intermediate', chip: '✓ Met', chipColor: 'bg-[#e3f9e5] text-[#2b7a3d]' },
  ]
  return (
    <div className="bg-white rounded-[20px] border border-border shadow-card overflow-hidden">
      <div className="p-[14px_18px] bg-gradient-to-br from-[#f0fdf4] to-[#f3f0ff] border-b border-border flex items-center justify-between">
        <span className="font-sora font-bold text-[13px] text-text">Gap Closure Plan - Jamie L.</span>
        <span className="text-[10px] font-bold px-2.5 py-[3px] rounded-full bg-[#e3f9e5] text-[#2b7a3d] border border-[#b2f2bb]">8-week plan</span>
      </div>
      <div className="p-[16px_18px]">
        <div className="flex items-center gap-2.5 mb-4 pb-4 border-b border-border">
          <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-green to-blue text-white text-[13px] font-bold flex items-center justify-center flex-shrink-0">
            JL
          </div>
          <div className="flex-1">
            <div className="text-[13px] font-bold text-text">Jamie L.</div>
            <div className="text-[11px] text-muted">Associate Analyst → Data Engineer (target)</div>
          </div>
          <div className="text-right">
            <div className="font-sora font-extrabold text-lg text-blue">71%</div>
            <div className="text-[10px] text-muted">current match</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {rows.map((r, i) => (
            <div key={i} className="flex items-center gap-2.5 text-xs">
              <span className="flex-1 font-medium text-text">{r.skill}</span>
              <span className="text-muted text-[11px] w-[60px]">{r.have}</span>
              <span className="text-blue text-[11px] w-[60px]">{r.need}</span>
              <span className={`text-[10px] font-semibold px-2 py-[3px] rounded-md ${r.chipColor}`}>{r.chip}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between text-[11px] text-muted mt-3.5 pt-3.5 border-t border-border">
          <span>
            Projected ready: <strong className="text-blue">Nov 2026</strong>
          </span>
          <span className="font-bold text-blue cursor-pointer">Share with Jamie →</span>
        </div>
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
    strong: 'bg-[#e3f9e5] text-[#2b7a3d]',
    mid: 'bg-[#fff8e1] text-[#854d0e]',
    low: 'bg-[#fff5f5] text-[#c92a2a]',
    na: 'bg-bg text-muted border border-dashed border-border',
  }

  return (
    <div className="bg-bg rounded-[20px] border border-border p-5">
      <div className="font-sora font-bold text-[13px] text-text mb-1">Team Skill Coverage - Analytics Pod</div>
      <div className="text-[11px] text-muted mb-[18px]">4 team members × 4 critical skills | Q3 2026</div>
      <div className="overflow-x-auto">
        <div className="min-w-[420px] flex flex-col gap-2">
          <div className="grid grid-cols-[100px_repeat(4,1fr)] gap-1.5 pl-1">
            <span />
            {skills.map((s) => (
              <span key={s} className="text-[9px] font-bold uppercase tracking-[.06em] text-muted">{s}</span>
            ))}
          </div>
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-[100px_repeat(4,1fr)] gap-1.5 items-center">
              <span className="text-[11px] font-semibold text-text">{r.person}</span>
              {r.cells.map((c, j) => (
                <div key={j} className={`h-7 rounded-md flex items-center justify-center text-[10px] font-bold ${lvlStyle[c.lvl]}`}>
                  {c.v}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3 mt-3 text-[10px] text-muted">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green" />Strong</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow" />Developing</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red" />Gap</span>
      </div>
    </div>
  )
}

export default function ManagerCapabilityTabs() {
  const [active, setActive] = useState('adjudication')

  return (
    <div>
      <div className="flex gap-1.5 mb-11 flex-wrap">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`px-[18px] py-2 rounded-full text-[13px] font-semibold border transition-colors ${
              active === t.key ? 'bg-grad-primary text-white border-transparent' : 'bg-bg text-muted border-border hover:border-blue'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {active === 'adjudication' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[52px] items-start">
          <div>
            <h3 className="font-sora text-xl sm:text-2xl font-bold mb-3.5 leading-[1.25] text-text">Resolve skill conflicts in 30 seconds - not 5 days</h3>
            <p className="text-[15px] text-[#4a5180] leading-[1.65] mb-6">
              When two sources disagree about a team member&apos;s skill level, you get a clear side-by-side comparison with a confidence score - and a single button to confirm or dispute. No HR involvement needed.
            </p>
            <Points points={adjudicationPoints} />
          </div>
          <AdjudicationVisual />
        </div>
      )}

      {active === 'gaps' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[52px] items-start">
          <div>
            <h3 className="font-sora text-xl sm:text-2xl font-bold mb-3.5 leading-[1.25] text-text">Turn &ldquo;you need to grow&rdquo; into &ldquo;here&apos;s exactly how&rdquo;</h3>
            <p className="text-[15px] text-[#4a5180] leading-[1.65] mb-6">
              Stop having vague development conversations. CoreCatalyst calculates the precise skill delta between where your team member is today and where they need to be - and generates a targeted 8-12 week plan to close it.
            </p>
            <Points points={gapPoints} />
          </div>
          <GapPlanVisual />
        </div>
      )}

      {active === 'coverage' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[52px] items-start">
          <div>
            <h3 className="font-sora text-xl sm:text-2xl font-bold mb-3.5 leading-[1.25] text-text">See your team&apos;s coverage before projects land - not after</h3>
            <p className="text-[15px] text-[#4a5180] leading-[1.65] mb-6">
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
