'use client'

import { useState } from 'react'

const tabs = [
  { key: 'writeback', label: 'HRIS write-back' },
  { key: 'audit', label: 'Audit trail' },
  { key: 'recon', label: 'Reconciliation status' },
]

const writebackPoints = [
  { strong: 'Workday, SAP, Oracle, ADP', text: 'pre-built write-back connectors for all major platforms; no custom API work required from your IT team' },
  { strong: 'Configurable write rules', text: 'set which fields CoreCatalyst can write, which need HR approval before writing, and which are read-only; full control per system' },
  { strong: 'Conflict hold queue', text: "records that can't be auto-resolved are held in a clean review queue rather than written with uncertain data; nothing is overwritten without confidence" },
  { strong: 'Rollback capability', text: 'every write is reversible; if a record is disputed after the fact, restore the previous verified state in one click' },
]

const auditPoints = [
  { strong: 'Immutable audit log', text: 'every entry is write-once and timestamped; the record cannot be altered after the fact, giving you defensible evidence for any dispute' },
  { strong: 'One-click export', text: 'pull a full audit report for any person, team, or time range as a CSV or PDF; ready for compliance reviews, legal requests, or board audits' },
  { strong: 'Source attribution', text: 'every record shows exactly which system or person provided the data; you always know the chain of evidence behind a skills level' },
  { strong: 'GDPR-compliant data handling', text: 'data subject access requests are fulfilled from the audit log; deletion requests propagate across all connected systems automatically' },
]

const reconPoints = [
  { strong: 'Pipeline view', text: 'see the full breakdown of records by status: auto-resolved, manager-confirmed, pending, held for HR review; never lose track of a record in transit' },
  { strong: 'Exception alerting', text: 'set thresholds for when to alert the HR Ops team: e.g. if the pending queue exceeds 50 records or a record has been unreviewed for more than 72 hours' },
  { strong: 'Manager response tracking', text: "see which managers have open review items and how long they've been sitting; send automated reminders without manual chasing" },
  { strong: 'Quality score by source', text: 'over time, see which data sources (CV, LMS, assessments) produce the most conflicts; use this to tune trust weights and reduce future escalations' },
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

function WritebackVisual() {
  const systems = [
    { name: 'Workday Skills Cloud', sub: 'Last sync: 2 min ago', count: 142, dot: 'bg-green' },
    { name: 'SAP SuccessFactors', sub: 'Last sync: 6 min ago', count: 68, dot: 'bg-green' },
    { name: 'Oracle HCM Cloud', sub: 'Last sync: 14 min ago', count: 37, dot: 'bg-yellow' },
  ]
  const queue = [
    { text: 'Tom B. - SQL Optimisation conflict', sys: 'Workday', status: 'Manager', color: 'bg-amber-100 text-amber-800' },
    { text: 'Sara M. - Change Management level', sys: 'SAP', status: 'Manager', color: 'bg-amber-100 text-amber-800' },
    { text: 'Dev T. - Leadership Assessment gap', sys: 'Oracle', status: 'HR review', color: 'bg-blue-100 text-blue' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-border p-6">
      <div className="flex items-center justify-between mb-5">
        <span className="font-sora font-bold text-sm text-text">Write-back Status - Live</span>
        <span className="text-xs font-semibold text-green flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
          Syncing
        </span>
      </div>
      <div className="space-y-2.5 mb-5">
        {systems.map((s, i) => (
          <div key={i} className="flex items-center gap-3 bg-bg rounded-lg p-3">
            <span className="text-lg">💾</span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-text">{s.name}</div>
              <div className="text-[10px] text-muted">{s.sub}</div>
            </div>
            <span className="text-sm font-bold text-text">{s.count}</span>
            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${s.dot}`} />
          </div>
        ))}
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-muted uppercase tracking-wider">Hold queue - awaiting confirmation</span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">3 items</span>
        </div>
        <div className="space-y-1.5">
          {queue.map((q, i) => (
            <div key={i} className="flex items-center gap-2 text-xs bg-bg rounded-lg px-3 py-2">
              <span>⏳</span>
              <span className="text-text flex-1">{q.text}</span>
              <span className="text-muted">{q.sys}</span>
              <span className={`font-bold px-2 py-0.5 rounded-full ${q.color}`}>{q.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AuditVisual() {
  const entries = [
    { time: '09:14 today', dot: 'bg-green', action: 'Python updated to Intermediate+', detail: 'Confirmed by manager D. Mwangi. Written to Workday.', chip: 'Manager confirmed', chipColor: 'bg-green-50 text-green-800' },
    { time: '09:10 today', dot: 'bg-yellow', action: 'Python conflict detected - escalated', detail: 'CV: Advanced vs LMS: Basic (1 course). Engine confidence: 87%. Escalated to manager.', chip: 'Auto-escalated', chipColor: 'bg-amber-50 text-amber-800' },
    { time: 'Mon 08:31', dot: 'bg-blue', action: 'Advanced SQL confirmed at Advanced', detail: 'Assessment score: 91%. LMS: 3 advanced courses. Auto-resolved. Written to SAP.', chip: 'Auto-resolved', chipColor: 'bg-blue-50 text-blue' },
    { time: 'Aug 14', dot: 'bg-subtle', action: 'Profile ingested from 4 sources', detail: 'CV, Workday, Cornerstone LMS, 360 assessment loaded and normalised.', chip: 'Initial ingest', chipColor: 'bg-bg text-muted' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-border p-6">
      <div className="flex items-center justify-between mb-5">
        <span className="font-sora font-bold text-sm text-text">Audit Trail - Marcus P.</span>
        <span className="text-xs font-semibold text-blue">⬇ Export PDF</span>
      </div>
      <div className="space-y-5">
        {entries.map((e, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex flex-col items-center flex-shrink-0 pt-1">
              <span className={`w-2.5 h-2.5 rounded-full ${e.dot}`} />
              {i < entries.length - 1 && <span className="w-px flex-1 bg-border mt-1" />}
            </div>
            <div className="pb-1">
              <div className="text-[10px] text-muted mb-0.5">{e.time}</div>
              <div className="text-sm font-semibold text-text mb-1">{e.action}</div>
              <div className="text-xs text-muted leading-relaxed mb-2">{e.detail}</div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${e.chipColor}`}>{e.chip}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ReconVisual() {
  const metrics = [
    { num: '232', label: 'Auto-resolved (94%)', color: 'text-green' },
    { num: '12', label: 'Manager-confirmed', color: 'text-text' },
    { num: '3', label: 'Pending review', color: 'text-yellow' },
    { num: '0', label: 'Errors / failed writes', color: 'text-red' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-border p-6">
      <div className="font-sora font-bold text-sm text-text mb-1">Reconciliation Pipeline - Today</div>
      <div className="text-xs text-muted mb-5">10,000 employee org · Sep 1 2026 · 247 records processed</div>
      <div className="grid grid-cols-4 gap-3 mb-6">
        {metrics.map((m, i) => (
          <div key={i} className="text-center">
            <div className={`font-sora font-bold text-2xl ${m.color}`}>{m.num}</div>
            <div className="text-[10px] text-muted leading-tight mt-1">{m.label}</div>
          </div>
        ))}
      </div>
      <div className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Today&apos;s pipeline breakdown</div>
      <div className="h-3 rounded-full overflow-hidden flex mb-3">
        <div className="bg-green h-full" style={{ width: '94%' }} />
        <div className="bg-blue h-full" style={{ width: '5%' }} />
        <div className="bg-yellow h-full" style={{ width: '1%' }} />
      </div>
      <div className="flex flex-wrap gap-3 text-xs text-muted">
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green" />Auto-resolved</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue" />Manager-confirmed</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-yellow" />Pending</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red" />Error</span>
      </div>
    </div>
  )
}

export default function HropsCapabilityTabs() {
  const [active, setActive] = useState('writeback')

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

      {active === 'writeback' && (
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-sora text-2xl font-bold mb-4 text-text">Verified skills flow to your HRIS automatically - no manual entry</h3>
            <p className="text-muted leading-relaxed mb-6">
              The moment a skill conflict is resolved - whether by the engine automatically or by a manager confirmation - CoreCatalyst writes the verified result back to your HRIS in real time. One source of truth, always current, zero data entry.
            </p>
            <Points points={writebackPoints} />
          </div>
          <WritebackVisual />
        </div>
      )}

      {active === 'audit' && (
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-sora text-2xl font-bold mb-4 text-text">A complete, exportable record of every skills decision ever made</h3>
            <p className="text-muted leading-relaxed mb-6">
              Every change to a skills record is logged automatically: the source that triggered it, what the conflict was, how it was resolved, who confirmed it, and when it was written to which system. No spreadsheets. No emails to search through.
            </p>
            <Points points={auditPoints} />
          </div>
          <AuditVisual />
        </div>
      )}

      {active === 'recon' && (
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-sora text-2xl font-bold mb-4 text-text">See exactly where every skills record stands - at any moment</h3>
            <p className="text-muted leading-relaxed mb-6">
              The reconciliation status dashboard gives HR Ops a real-time view of the entire pipeline: how many records were processed today, how many were auto-resolved, how many are in the manager review queue, and what needs your attention.
            </p>
            <Points points={reconPoints} />
          </div>
          <ReconVisual />
        </div>
      )}
    </div>
  )
}
