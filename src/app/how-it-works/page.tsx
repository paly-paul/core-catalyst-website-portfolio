import { Metadata } from 'next'
import { RevealWrapper } from '../../components/ui/RevealWrapper'
import StepNav from './StepNav'

export const metadata: Metadata = {
  title: 'How CoreCatalyst Works - Skills Reconciliation Engine',
  description:
    "CoreCatalyst doesn't ask employees to self-report their skills, or trust any single source blindly. It pulls from every system, resolves the conflicts, and hands managers a clean picture - continuously, automatically.",
}

const dataSources = [
  { icon: '📄', bg: '#eef1ff', name: 'CV / Resume', sub: 'Self-declared' },
  { icon: '🎓', bg: '#f5f3ff', name: 'LMS Records', sub: 'Completion data' },
  { icon: '👥', bg: '#e6f9ed', name: 'Manager Input', sub: 'Assessed levels' },
  { icon: '💼', bg: '#e3f9fc', name: 'Job History', sub: 'Demonstrated use' },
  { icon: '✅', bg: '#fff9e6', name: 'Assessments', sub: 'Test scores' },
  { icon: '📈', bg: '#fff0f0', name: 'Performance', sub: 'Review data' },
]

const outputs = [
  { color: 'bg-blue', text: 'Verified skills profiles' },
  { color: 'bg-green', text: 'Gap intelligence' },
  { color: 'bg-violet', text: 'Career pathways' },
  { color: 'bg-cyan', text: 'HRIS write-back' },
]

const steps = [
  {
    num: 1,
    color: 'from-blue to-violet',
    label: 'Step one',
    labelColor: 'text-blue',
    title: 'Connect every system your people data lives in.',
    desc: 'Most organisations have skills data sitting in 4 to 8 different systems - none talking to each other. CoreCatalyst connects to all of them in hours, not months, using pre-built connectors that require no engineering resources to configure.',
    points: [
      '200+ pre-built connectors for Workday, SAP SuccessFactors, Oracle HCM, Cornerstone, Degreed, Saba, LinkedIn Learning, and all major ATS platforms',
      'Open REST API and webhooks for custom sources - if a system can export data, CoreCatalyst can ingest it',
      'OAuth 2.0 and API key authentication - data stays encrypted in transit and at rest, with field-level access controls',
    ],
  },
  {
    num: 2,
    color: 'from-violet to-indigo',
    label: 'Step two',
    labelColor: 'text-violet',
    title: 'All skills, mapped to one universal taxonomy.',
    desc: 'Raw skills data is messy. One system calls it "Python Programming", another "Python 3", a third just "Python". CoreCatalyst\'s normalisation layer maps every variant to a shared taxonomy of 45,000+ skills in 35 languages - so comparisons are apples to apples.',
    points: [
      '45,000 skills with adjacency mappings, proficiency level definitions, and market demand signals updated monthly from live job postings',
      'Supports 35 languages natively - skills are matched across language variants so global teams get unified profiles regardless of input language',
      'Your own skills taxonomy can be imported and merged - CoreCatalyst bridges proprietary frameworks to the universal graph without losing your custom structure',
    ],
  },
  {
    num: 3,
    color: 'from-cyan to-blue',
    label: 'Step three',
    labelColor: 'text-cyan',
    title: 'AI resolves conflicts - not by guessing.',
    desc: "When sources disagree on a skill level, CoreCatalyst doesn't pick the highest or most recent blindly. It applies a weighted confidence model that accounts for source reliability, data recency, evidence type, and the context of the disagreement.",
    points: [
      'Recency weighting - a manager assessment from 3 months ago outweighs a CV entry from 4 years ago for the same skill',
      'Source trust scoring - structured assessment data carries more weight than self-declared CV entries by default, with configurable overrides',
      'Confidence thresholds - only resolutions above a configurable confidence floor are auto-accepted; lower confidence cases route to human review',
    ],
  },
  {
    num: 4,
    color: 'from-yellow to-orange',
    label: 'Step four',
    labelColor: 'text-yellow',
    title: 'The 6% that needs a human takes 2 minutes.',
    desc: "When confidence falls below threshold, the case goes to the manager's review queue - not buried in a form, not requiring any training. A clean card with the context they need, and two buttons. Most managers clear their queue over a coffee.",
    points: [
      "Managers see only their own team members - no access to other teams' data, with full RBAC controls configured at deployment",
      'Every decision is logged with reason, timestamp, and reviewer identity - creating a full audit trail HR and compliance teams can export',
      "Overrides are fed back into the model - each manager decision improves the AI's confidence calibration for that team and skill cluster over time",
    ],
  },
  {
    num: 5,
    color: 'from-green to-cyan',
    label: 'Step five',
    labelColor: 'text-green',
    title: 'Skills profiles that stay current - automatically.',
    desc: "A skills profile that's 6 months old is already wrong. CoreCatalyst monitors all connected sources continuously and updates profiles as soon as new data arrives - whether that's a completed course, a new manager review, or a role change in your HRIS.",
    points: [
      'HRIS write-back means Workday, SAP, and Oracle stay updated automatically - no manual re-entry, no sync jobs to manage',
      'Downstream systems - your ATS, talent marketplace, LMS content engine, and analytics tools - always receive the current verified profile via webhook push',
      'Workforce intelligence dashboards reflect every change in real time - no waiting for quarterly snapshots to run decisions against stale data',
    ],
  },
]

const trustCards = [
  { icon: '🔐', color: 'text-blue', title: 'SOC 2 Type II', desc: 'Independently audited annually. All controls for security, availability, and confidentiality are verified by a third-party auditor.' },
  { icon: '🌍', color: 'text-green', title: 'GDPR & CCPA compliant', desc: 'Full data subject rights support, configurable data residency, right-to-erasure workflows, and purpose limitation enforcement built into the platform.' },
  { icon: '🔒', color: 'text-violet', title: 'Field-level encryption', desc: 'Skills data encrypted at rest using AES-256 with field-level granularity. Separate encryption keys per tenant, rotated automatically.' },
  { icon: '📋', color: 'text-cyan', title: 'Full audit trail', desc: 'Every skill change - who set it, which source triggered it, when, and what the previous value was - logged immutably and exportable for compliance review.' },
]

function StepVisual({ num }: { num: number }) {
  if (num === 1) {
    return (
      <div className="space-y-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
          {[
            { name: 'Workday', status: 'Live', live: true },
            { name: 'Cornerstone', status: 'Live', live: true },
            { name: 'SAP SF', status: 'Live', live: true },
            { name: 'Degreed', status: 'Connecting', live: false },
            { name: 'Oracle HCM', status: 'Scheduled', live: false },
            { name: 'Custom API', status: 'Configure', live: false },
          ].map((c, i) => (
            <div key={i} className="bg-bg rounded-lg p-3 border border-border">
              <div className="text-sm font-semibold text-text mb-1">{c.name}</div>
              <div className={`text-xs font-semibold flex items-center gap-1.5 ${c.live ? 'text-green' : 'text-muted'}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${c.live ? 'bg-green' : 'bg-subtle'}`} />
                {c.status}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg px-3.5 py-2.5 text-xs font-semibold text-green-800 flex items-center gap-2">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
          3 sources active - first data ingestion will start within minutes
        </div>
      </div>
    )
  }
  if (num === 2) {
    return (
      <div>
        <div className="flex items-center gap-2 bg-bg rounded-lg px-3.5 py-2.5 mb-3 border border-border">
          <svg className="w-4 h-4 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          <span className="text-sm text-text">Python</span>
        </div>
        <div className="text-xs text-muted mb-2">4 matches found - mapped to canonical skill</div>
        <div className="space-y-1.5 mb-4">
          {[
            { name: 'Python Programming', lang: 'EN', match: true },
            { name: 'Python 3', lang: 'EN', match: false },
            { name: 'Programmation Python', lang: 'FR', match: false },
            { name: 'Python-Programmierung', lang: 'DE', match: false },
          ].map((r, i) => (
            <div key={i} className={`flex items-center justify-between text-xs px-3 py-2 rounded-lg ${r.match ? 'bg-violet-50 border border-violet-200' : 'bg-bg'}`}>
              <span className="text-text font-medium">{r.name}</span>
              <span className="text-muted">SKL-0031-4 · {r.lang}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] text-center">
          {[{ n: '45K+', l: 'Total skills' }, { n: '35', l: 'Languages' }, { n: '98%', l: 'Match rate' }].map((m, i) => (
            <div key={i} className="bg-bg rounded-lg p-2">
              <div className="font-sora font-bold text-sm text-text">{m.n}</div>
              <div className="text-[10px] text-muted">{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  if (num === 3) {
    return (
      <div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3.5 mb-3">
          <div className="text-xs font-bold text-amber-700 mb-2.5">⚠ Skill conflict: Data Visualisation</div>
          <div className="space-y-1.5">
            {[
              { chip: 'CV 2021', val: 'Expert', weight: 'Weight: 0.3 (age: 3yr)' },
              { chip: 'LMS 2024', val: 'Intermediate', weight: 'Weight: 0.7 (recent)' },
              { chip: 'Mgr Q1 24', val: 'Advanced', weight: 'Weight: 0.85 (structured)' },
              { chip: 'Project', val: 'Advanced', weight: 'Weight: 0.75 (demonstrated)' },
            ].map((r, i) => (
              <div key={i} className="flex items-center gap-2 text-xs">
                <span className="px-2 py-0.5 rounded-full bg-white border border-amber-200 font-semibold text-text">{r.chip}</span>
                <span className="font-semibold text-text">{r.val}</span>
                <span className="text-muted ml-auto">{r.weight}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3 text-xs text-text leading-relaxed">
          Weighted consensus: <strong>Advanced</strong> (3 of 4 sources align at advanced or above, recency-adjusted). Confidence: <strong>82%</strong> - above threshold.
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-green-800">✓ Data Visualisation - resolved</span>
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-green text-white">Advanced</span>
        </div>
      </div>
    )
  }
  if (num === 4) {
    return (
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-muted">Needs your input</span>
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700">2 pending</span>
        </div>
        <div className="bg-bg rounded-lg p-3.5 border border-border mb-3">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue to-violet text-white text-xs font-bold flex items-center justify-center">JK</div>
            <div>
              <div className="text-sm font-semibold text-text">James Kim</div>
              <div className="text-[11px] text-muted">Senior Engineer</div>
            </div>
            <span className="ml-auto text-xs font-semibold px-2 py-1 rounded-full bg-blue-50 text-blue">Leadership</span>
          </div>
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className="text-[11px] font-semibold px-2 py-1 rounded-full bg-amber-50 text-amber-700">LMS: Developing</span>
            <span className="text-[11px] font-semibold px-2 py-1 rounded-full bg-green-50 text-green">Mgr Q3: Emerging</span>
            <span className="text-[11px] text-muted">Conf: 48%</span>
          </div>
          <div className="text-[11px] text-muted bg-white rounded-lg px-2.5 py-2 mb-3">
            AI suggests: <strong className="text-text">Emerging</strong> - confirm or set a different level below.
          </div>
          <div className="flex gap-2">
            <button className="flex-1 px-3 py-2 rounded-lg bg-green text-white text-xs font-semibold">Confirm - Emerging</button>
            <button className="flex-1 px-3 py-2 rounded-lg bg-white border border-border text-text text-xs font-semibold">Set different level</button>
          </div>
        </div>
        <div className="text-xs text-muted flex items-center gap-1.5">
          ⏱ Average adjudication time for your team: <strong className="text-text">1m 47s per person</strong>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className="space-y-2.5 mb-4">
        {[
          { color: 'bg-blue', text: 'Python - updated from LMS completion', delta: 'Expert', time: 'Just now' },
          { color: 'bg-green', text: 'Cloud Architecture - manager confirmed', delta: 'Advanced', time: '4m ago' },
          { color: 'bg-violet', text: 'Stakeholder Management - auto-resolved', delta: 'Advanced', time: '12m ago' },
          { color: 'bg-cyan', text: 'Profile synced to Workday HCM', delta: 'Synced', time: '12m ago' },
        ].map((u, i) => (
          <div key={i} className="flex items-center gap-2 text-xs">
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${u.color}`} />
            <span className="text-text flex-1">{u.text}</span>
            <span className="font-semibold text-green">{u.delta}</span>
            <span className="text-muted">{u.time}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-3">
        <div className="text-[11px] font-bold text-muted uppercase tracking-wider mb-2">Downstream systems updated</div>
        <div className="flex flex-wrap gap-1.5">
          {['Workday', 'Talent Marketplace', 'LMS engine', 'Analytics', 'ATS'].map((s, i) => (
            <span key={i} className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-bg text-text flex items-center gap-1">
              <svg className="w-2.5 h-2.5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-grad-hero pt-16 pb-20 relative overflow-hidden">
        <div className="absolute w-[700px] h-[700px] rounded-full blur-[100px] opacity-[0.28] pointer-events-none -top-[260px] -right-[160px]" style={{ background: 'radial-gradient(circle, #c7d2fe 0%, transparent 70%)' }} />
        <div className="absolute w-[420px] h-[420px] rounded-full blur-[100px] opacity-[0.28] pointer-events-none -bottom-20 -left-[60px]" style={{ background: 'radial-gradient(circle, #ddd6fe 0%, transparent 70%)' }} />
        <div className="max-w-site mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
              <span className="text-xs font-semibold text-blue">Under the hood</span>
            </div>
            <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-text">
              From scattered signals<br />
              to <span className="bg-grad-primary bg-clip-text text-transparent">verified skills truth</span> -<br />
              in five steps.
            </h1>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              CoreCatalyst doesn&apos;t ask employees to self-report their skills, or trust any single source blindly. It pulls from every system, resolves the conflicts, and hands managers a clean picture - continuously, automatically.
            </p>
            <div className="flex flex-wrap gap-[9px]">
              <span className="inline-flex items-center gap-[7px] px-3.5 py-1.5 rounded-full bg-white border border-border text-[13px] font-semibold text-text">
                <svg className="w-3.5 h-3.5 text-blue" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                200+ data connectors
              </span>
              <span className="inline-flex items-center gap-[7px] px-3.5 py-1.5 rounded-full bg-white border border-border text-[13px] font-semibold text-text">
                <svg className="w-3.5 h-3.5 text-green" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>
                94% auto-resolved
              </span>
              <span className="inline-flex items-center gap-[7px] px-3.5 py-1.5 rounded-full bg-white border border-border text-[13px] font-semibold text-text">
                <svg className="w-3.5 h-3.5 text-violet" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                Live in 1 day
              </span>
            </div>
          </div>

          <div className="bg-white rounded-[22px] border border-border shadow-[0_16px_56px_rgba(59,91,219,.12)] p-[28px_24px]">
            <div className="text-[10.5px] font-bold text-muted uppercase tracking-[.09em] mb-4">Data sources feeding the engine</div>
            <div className="grid grid-cols-3 gap-2.5 mb-[18px]">
              {dataSources.map((s, i) => (
                <div key={i} className="text-center bg-bg border border-border rounded-xl p-[12px_10px]">
                  <div className="w-8 h-8 mx-auto rounded-[9px] flex items-center justify-center text-base mb-2" style={{ background: s.bg }}>
                    {s.icon}
                  </div>
                  <div className="text-[11.5px] font-bold text-text leading-tight">{s.name}</div>
                  <div className="text-[10px] text-muted mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center mb-[18px]">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-blue to-violet rounded-full" />
              <div
                className="w-0 h-0 flex-shrink-0"
                style={{ borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '7px solid #7950f2' }}
              />
            </div>
            <div className="flex items-center gap-3.5 bg-gradient-to-br from-[#eef1ff] to-[#f5f3ff] border-[1.5px] border-[#c5d3f7] rounded-[14px] p-[16px_18px] mb-[18px]">
              <div className="w-11 h-11 rounded-xl bg-grad-primary flex items-center justify-center flex-shrink-0">
                <svg className="w-[22px] h-[22px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
              </div>
              <div className="flex-1">
                <div className="font-sora text-sm font-bold text-text">CoreCatalyst Reconciliation Engine</div>
                <div className="text-[11.5px] text-muted mt-0.5">AI-powered, 45K-skill taxonomy, recency-weighted confidence</div>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-[3px] rounded-[10px] bg-[#e6f9ed] text-green flex-shrink-0 whitespace-nowrap">94% automated</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {outputs.map((o, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-white border border-border rounded-[10px] p-[11px_13px]">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${o.color}`} />
                  <span className="text-xs font-semibold text-text">{o.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Step Nav */}
      <StepNav steps={steps.map((s) => ({ num: s.num, title: s.title }))} />

      {/* Steps */}
      {steps.map((step, idx) => (
        <RevealWrapper key={step.num}>
          <section id={`step-${step.num}`} className={`py-14 lg:py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#f8f9ff]'}`}>
            <div className="max-w-site mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[72px] items-center">
              <div className={idx % 2 === 1 ? 'order-2' : ''}>
                <div className="inline-flex items-center gap-2.5 mb-6">
                  <div className={`w-[42px] h-[42px] rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center font-sora font-extrabold text-lg`}>
                    {step.num}
                  </div>
                  <span className={`text-[11.5px] font-bold uppercase tracking-[.08em] ${step.labelColor}`}>{step.label}</span>
                </div>
                <h2 className="font-sora text-[clamp(24px,2.8vw,36px)] font-extrabold leading-[1.18] tracking-[-.02em] mb-4 text-text">{step.title}</h2>
                <p className="text-base text-[#5c6587] mb-7 leading-[1.75]">{step.desc}</p>
                <ul className="flex flex-col gap-3">
                  {step.points.map((point, i) => (
                    <li key={i} className="flex gap-3 items-start bg-bg border border-border rounded-xl p-[14px_16px]">
                      <div className="w-7 h-7 rounded-lg bg-[#eef1ff] flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[13.5px] font-medium text-text leading-[1.55]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={idx % 2 === 1 ? 'order-1' : ''}>
                <div className="bg-white rounded-[20px] border border-border shadow-card overflow-hidden">
                  <div className="px-[18px] py-[13px] bg-[#f8f9ff] border-b border-border flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-[9px] h-[9px] rounded-full" style={{ background: '#ff5f57' }} />
                      <div className="w-[9px] h-[9px] rounded-full" style={{ background: '#febc2e' }} />
                      <div className="w-[9px] h-[9px] rounded-full" style={{ background: '#28c840' }} />
                    </div>
                    <span className="text-[11.5px] font-semibold text-muted tracking-[.04em] ml-1">Step {step.num} preview</span>
                  </div>
                  <div className="p-5">
                    <StepVisual num={step.num} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealWrapper>
      ))}

      {/* TRUST / SECURITY */}
      <RevealWrapper>
        <section className="py-14 lg:py-24 bg-white">
          <div className="max-w-site mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-bg border border-border rounded-full px-4 py-2 mb-6">
              <span className="text-xs font-semibold text-blue">Built to enterprise grade</span>
            </div>
            <h2 className="font-sora text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-text">
              Your workforce data<br />is too sensitive to cut corners on.
            </h2>
            <p className="text-lg text-muted mb-16 max-w-2xl mx-auto">
              CoreCatalyst was designed from day one for enterprise privacy and security requirements - not retrofitted after the fact.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
              {trustCards.map((t, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border">
                  <div className={`text-3xl mb-4 ${t.color}`}>{t.icon}</div>
                  <h3 className="font-sora font-bold text-base mb-2 text-text">{t.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* CTA */}
      <RevealWrapper>
        <section className="py-14 lg:py-24 bg-grad-hero">
          <div className="max-w-site mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 mb-6">
              <span className="text-xs font-semibold text-violet">Ready to see it live?</span>
            </div>
            <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-text">
              See the reconciliation engine<br />run on your own data.
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Bring a sample export from your LMS or HRIS. We&apos;ll run a live reconciliation in the demo and show you exactly what your skills picture would look like.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <a href="/demo" className="px-8 py-4 rounded-btn bg-grad-primary text-white font-semibold hover:opacity-90 transition-opacity shadow-lg">
                Book a live demo
              </a>
              <a href="/security" className="px-8 py-4 rounded-btn border border-border text-text font-semibold hover:border-blue transition-colors">
                Read the technical docs
              </a>
            </div>
            <div className="flex items-center justify-center gap-6 flex-wrap text-sm text-muted">
              {['No synthetic data - we use yours', '45-minute session', 'NDA available before demo'].map((t, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>
    </div>
  )
}
