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
    <div className="flex flex-col gap-3">
      {points.map((p, i) => (
        <div key={i} className="flex gap-2.5 items-start">
          <div className="w-5 h-5 bg-gradient-to-br from-[#e7f5ff] to-[#dbe4ff] border border-[#a5d8ff] rounded-[6px] flex items-center justify-center flex-shrink-0 text-[#1864ab] text-[11px] font-bold mt-px">✓</div>
          <div className="text-sm text-[#4a5180] leading-relaxed">
            <strong className="text-text font-semibold">{p.strong}</strong> - {p.text}
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
    { text: 'Tom B. - SQL Optimisation conflict', sys: 'Workday', status: 'Manager', color: 'bg-[#fff3bf] text-[#854d0e]' },
    { text: 'Sara M. - Change Management level', sys: 'SAP', status: 'Manager', color: 'bg-[#fff3bf] text-[#854d0e]' },
    { text: 'Dev T. - Leadership Assessment gap', sys: 'Oracle', status: 'HR review', color: 'bg-[#dbe4ff] text-blue' },
  ]
  return (
    <div className="bg-bg rounded-[20px] border border-border overflow-hidden">
      <div className="p-[14px_18px] bg-gradient-to-br from-[#e7f5ff] to-[#eef2ff] border-b border-border flex items-center justify-between">
        <span className="font-sora font-bold text-[13px] text-text">Write-back Status - Live</span>
        <span className="flex items-center gap-[5px] text-[10px] font-bold text-[#2b7a3d]">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
          Syncing
        </span>
      </div>
      <div className="p-[14px_18px]">
        <div className="flex flex-col gap-2 mb-3.5">
          {systems.map((s, i) => (
            <div key={i} className="grid grid-cols-[22px_1fr_auto_auto] items-center gap-2.5 bg-white border border-border rounded-[10px] p-[10px_12px]">
              <span className="text-base">💾</span>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-text">{s.name}</div>
                <div className="text-[10px] text-muted">{s.sub}</div>
              </div>
              <span className="font-sora font-extrabold text-[13px] text-blue">{s.count}</span>
              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${s.dot}`} />
            </div>
          ))}
        </div>
        <div className="bg-white border border-border rounded-xl p-[12px_14px]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-text">Hold queue - awaiting confirmation</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#dbe4ff] text-blue">3 items</span>
          </div>
          <div className="flex flex-col gap-1.5">
            {queue.map((q, i) => (
              <div key={i} className="flex items-center gap-2 text-[11px]">
                <span className="text-[13px]">⏳</span>
                <span className="text-text flex-1">{q.text}</span>
                <span className="text-[10px] text-muted">{q.sys}</span>
                <span className={`text-[10px] font-bold px-[7px] py-0.5 rounded-full ${q.color}`}>{q.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function AuditVisual() {
  const entries = [
    { time: '09:14 today', dot: 'bg-green', action: 'Python updated to Intermediate+', detail: 'Confirmed by manager D. Mwangi. Written to Workday.', chip: 'Manager confirmed', chipColor: 'bg-[#e3f9e5] text-[#2b7a3d] border-[#b2f2bb]' },
    { time: '09:10 today', dot: 'bg-yellow', action: 'Python conflict detected - escalated', detail: 'CV: Advanced vs LMS: Basic (1 course). Engine confidence: 87%. Escalated to manager.', chip: 'Auto-escalated', chipColor: 'bg-[#fff3bf] text-[#854d0e] border-[#ffe08a]' },
    { time: 'Mon 08:31', dot: 'bg-blue', action: 'Advanced SQL confirmed at Advanced', detail: 'Assessment score: 91%. LMS: 3 advanced courses. Auto-resolved. Written to SAP.', chip: 'Auto-resolved', chipColor: 'bg-[#eef2ff] text-blue border-[#c5d0fa]' },
    { time: 'Aug 14', dot: 'bg-subtle', action: 'Profile ingested from 4 sources', detail: 'CV, Workday, Cornerstone LMS, 360 assessment loaded and normalised.', chip: 'Initial ingest', chipColor: 'bg-bg text-muted border-border' },
  ]
  return (
    <div className="bg-white rounded-[20px] border border-border shadow-card overflow-hidden">
      <div className="p-[14px_18px] bg-gradient-to-br from-[#f8f9ff] to-[#e7f5ff] border-b border-border flex items-center justify-between">
        <span className="font-sora font-bold text-[13px] text-text">Audit Trail - Marcus P.</span>
        <span className="text-[11px] font-semibold text-blue cursor-pointer">⬇ Export PDF</span>
      </div>
      <div className="p-[14px_18px]">
        {entries.map((e, i) => (
          <div key={i} className={`grid grid-cols-[60px_14px_1fr] gap-2.5 ${i === entries.length - 1 ? '' : 'pb-3.5'}`}>
            <div className="text-[10px] text-muted font-medium text-right pt-px">{e.time}</div>
            <div className="flex flex-col items-center">
              <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 border-2 border-white shadow-[0_0_0_1.5px_#e4e9f4] ${e.dot}`} />
              {i < entries.length - 1 && <span className="flex-1 w-[1.5px] bg-border mt-1" />}
            </div>
            <div>
              <div className="text-xs font-semibold text-text mb-0.5">{e.action}</div>
              <div className="text-[11px] text-muted leading-relaxed">{e.detail}</div>
              <span className={`inline-block text-[10px] font-semibold px-[7px] py-0.5 rounded-full border mt-1 ${e.chipColor}`}>{e.chip}</span>
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
    { num: '12', label: 'Manager-confirmed', color: 'text-blue' },
    { num: '3', label: 'Pending review', color: 'text-blue' },
    { num: '0', label: 'Errors / failed writes', color: 'text-red' },
  ]
  return (
    <div className="bg-bg rounded-[20px] border border-border p-5">
      <div className="font-sora font-bold text-[13px] text-text mb-1">Reconciliation Pipeline - Today</div>
      <div className="text-[11px] text-muted mb-[18px]">10,000 employee org · Sep 1 2026 · 247 records processed</div>
      <div className="grid grid-cols-2 gap-2.5 mb-4">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white border border-border rounded-xl p-3">
            <div className={`font-sora font-extrabold text-[22px] leading-none mb-[3px] ${m.color}`}>{m.num}</div>
            <div className="text-[10px] text-muted leading-[1.4]">{m.label}</div>
          </div>
        ))}
      </div>
      <div className="text-[11px] font-bold text-text mb-[6px]">Today&apos;s pipeline breakdown</div>
      <div className="flex flex-col gap-1.5">
        <div className="h-2.5 rounded-full overflow-hidden flex bg-border">
          <div className="bg-green h-full" style={{ width: '94%' }} />
          <div className="bg-blue h-full" style={{ width: '5%' }} />
          <div className="bg-yellow h-full" style={{ width: '1%' }} />
        </div>
      </div>
      <div className="flex flex-wrap gap-2.5 mt-1.5 text-[10px] text-muted">
        <span className="flex items-center gap-1"><span className="w-[7px] h-[7px] rounded-full bg-green" />Auto-resolved</span>
        <span className="flex items-center gap-1"><span className="w-[7px] h-[7px] rounded-full bg-blue" />Manager-confirmed</span>
        <span className="flex items-center gap-1"><span className="w-[7px] h-[7px] rounded-full bg-yellow" />Pending</span>
        <span className="flex items-center gap-1"><span className="w-[7px] h-[7px] rounded-full bg-red" />Error</span>
      </div>
    </div>
  )
}

export default function HropsCapabilityTabs() {
  const [active, setActive] = useState('writeback')

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

      {active === 'writeback' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[52px] items-start">
          <div>
            <h3 className="font-sora text-xl sm:text-2xl font-bold mb-3.5 leading-[1.25] text-text">Verified skills flow to your HRIS automatically - no manual entry</h3>
            <p className="text-[15px] text-[#4a5180] leading-[1.65] mb-6">
              The moment a skill conflict is resolved - whether by the engine automatically or by a manager confirmation - CoreCatalyst writes the verified result back to your HRIS in real time. One source of truth, always current, zero data entry.
            </p>
            <Points points={writebackPoints} />
          </div>
          <WritebackVisual />
        </div>
      )}

      {active === 'audit' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[52px] items-start">
          <div>
            <h3 className="font-sora text-xl sm:text-2xl font-bold mb-3.5 leading-[1.25] text-text">A complete, exportable record of every skills decision ever made</h3>
            <p className="text-[15px] text-[#4a5180] leading-[1.65] mb-6">
              Every change to a skills record is logged automatically: the source that triggered it, what the conflict was, how it was resolved, who confirmed it, and when it was written to which system. No spreadsheets. No emails to search through.
            </p>
            <Points points={auditPoints} />
          </div>
          <AuditVisual />
        </div>
      )}

      {active === 'recon' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[52px] items-start">
          <div>
            <h3 className="font-sora text-xl sm:text-2xl font-bold mb-3.5 leading-[1.25] text-text">See exactly where every skills record stands - at any moment</h3>
            <p className="text-[15px] text-[#4a5180] leading-[1.65] mb-6">
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
