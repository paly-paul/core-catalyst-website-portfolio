import { Metadata } from 'next'
import { RevealWrapper } from '../../../components/ui/RevealWrapper'
import { AnimatedBar } from '../../../components/ui/AnimatedBar'
import HropsCapabilityTabs from './HropsCapabilityTabs'

export const metadata: Metadata = {
  title: 'CoreCatalyst for HR Operations - Eliminate Manual Skills Data Work',
  description:
    'Your HRIS holds stale skills data. Your LMS holds completion records. None of them talk to each other. CoreCatalyst automates every bit of it.',
}

const syncFeed = [
  { icon: '✅', text: 'Marcus P. - Python level updated', sub: 'Workday Skills Cloud · 2 min ago', badge: 'Written', color: 'bg-[#e3f9e5] text-[#2b7a3d]' },
  { icon: '✅', text: 'Aisha K. - Data Visualisation confirmed', sub: 'SAP SuccessFactors · 4 min ago', badge: 'Written', color: 'bg-[#e3f9e5] text-[#2b7a3d]' },
  { icon: '⏳', text: 'Jamie L. - dbt Pipelines gap flagged', sub: 'Awaiting manager review', badge: 'Pending', color: 'bg-[#fff3bf] text-[#854d0e]' },
  { icon: '✅', text: 'Riya N. - Stakeholder Mgmt promoted', sub: 'Oracle HCM · 11 min ago', badge: 'Written', color: 'bg-[#e3f9e5] text-[#2b7a3d]' },
  { icon: '⚠️', text: 'Tom B. - SQL conflict detected', sub: '3 sources disagree · auto-escalated', badge: 'Review', color: 'bg-[#fff3bf] text-[#854d0e]' },
]

const pains = [
  {
    icon: '🔄',
    title: 'Four systems, four different truths',
    body: 'Your HRIS says "Intermediate Python." The LMS shows a beginner course completed. The CV says "Advanced." The assessment scored them at Intermediate+. Someone has to decide which one is right - manually, every time.',
    stat: 'Avg HR Ops team: 14 hrs/week on manual skills reconciliation',
  },
  {
    icon: '📄',
    title: 'No audit trail means no defensible data',
    body: "When a manager disputes a skills record or an audit requires evidence of how a skills decision was made, you're searching through email threads and spreadsheets. Not a good answer.",
    stat: 'Only 18% of HR teams can produce a full audit trail for skills decisions',
  },
  {
    icon: '🚫',
    title: "HRIS data goes stale the moment it's entered",
    body: 'The batch update you ran last quarter is already out of date. New LMS completions, new assessments, new role changes - none of it flows back automatically. The HRIS is always behind.',
    stat: 'Average HRIS skills data lag: 4-6 months behind reality',
  },
]

const timesinkBars = [
  { label: 'Manual skills data reconciliation', hours: '14 hrs', pct: 88 },
  { label: 'Responding to manager data requests', hours: '8 hrs', pct: 50 },
  { label: 'HRIS manual data entry & corrections', hours: '6 hrs', pct: 38 },
  { label: 'Audit prep & compliance reporting', hours: '4 hrs', pct: 25 },
]

const outcomes = [
  { num: '90%', color: 'text-cyan', title: 'Less manual reconciliation', body: 'The 14 hours your team spends manually cross-referencing systems drops to under 90 minutes. The engine does the reconciliation; your team reviews the exceptions.', featured: true },
  { num: '94%', color: 'text-blue', title: 'Auto-resolved conflicts', body: 'Resolved automatically using weighted trust scores. Only the genuinely ambiguous 6% escalate to a manager for 30-second confirmation.', featured: false },
  { num: 'Real-time', color: 'text-cyan', title: 'HRIS write-back', body: 'Verified skills data writes back to Workday, SAP SuccessFactors, Oracle HCM, and others automatically - no batch jobs, no manual entry, no lag.', featured: false },
  { num: '100%', color: 'text-blue', title: 'Audit trail coverage', body: 'Every skills change is logged: what changed, which source triggered it, what the conflict was, who confirmed it, and when. Exportable for any compliance need.', featured: false },
  { num: '<2wk', color: 'text-cyan', title: 'Integration setup time', body: 'Pre-built connectors for all major HRIS, LMS, and assessment platforms. No custom engineering. Zero-code configuration through the admin console.', featured: false },
  { num: '45K', color: 'text-cyan', title: 'Taxonomy nodes, mapped', body: 'Every skills variant across your systems is mapped to a canonical node in the 45K-skill taxonomy. All variants resolve to one record.', featured: false },
]

const integrationBullets = [
  { icon: '🔗', title: 'Bidirectional sync - read and write', body: 'CoreCatalyst reads from your LMS, assessments, CV parser, and performance systems - and writes verified skills back to your HRIS. Data flows both ways, automatically.' },
  { icon: '⚙️', title: 'Zero-code admin console', body: 'HR Ops configures which fields to sync, which systems get write access, and what trust weights each source carries - all through a no-code admin UI, no engineering ticket required.' },
  { icon: '🔒', title: 'Enterprise-grade security', body: 'SOC 2 Type II, GDPR-compliant, CCPA-ready. All data in transit encrypted. Role-based access controls for every HR team member. Field-level data masking available.' },
]

const complianceCards = [
  { icon: '🔒', title: 'SOC 2 Type II Certified', body: 'Annual third-party security audits covering security, availability, and confidentiality controls. Full reports available to enterprise customers under NDA.', tag: 'Security' },
  { icon: '🇬🇧', title: 'GDPR & CCPA Ready', body: 'Data subject access requests fulfilled automatically. Deletion requests propagate across all connected systems. Data residency options for EU, UK, and APAC.', tag: 'Privacy' },
  { icon: '📋', title: 'Immutable Audit Log', body: 'Every skills change is recorded with full provenance: source, conflict detail, resolution method, confirming person, timestamp, and target system. Cannot be altered after the fact.', tag: 'Audit' },
  { icon: '👤', title: 'Role-Based Access Controls', body: 'Field-level visibility controls. HR Ops sees the full pipeline; managers see only their team; employees see only their own profile. Configurable per role, per field, per system.', tag: 'Access control' },
]

export default function HRopsSolution() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative overflow-hidden bg-grad-hero py-20">
        <div className="absolute -top-24 -right-20 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(34,184,207,.07)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative max-w-site mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-br from-[#e7f5ff] to-[#dbe4ff] border border-[#a5d8ff] rounded-full px-3.5 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
              <span className="text-xs font-semibold text-[#1864ab] uppercase tracking-[.06em]">For HR Operations</span>
            </div>
            <div className="text-xs font-semibold text-cyan uppercase tracking-[.12em] mb-3.5">Automation & Accuracy</div>
            <h1 className="font-sora text-[clamp(30px,3.8vw,50px)] font-extrabold leading-[1.1] tracking-[-.03em] mb-5 text-text">
              Stop manually reconciling skills data. <em className="not-italic bg-gradient-to-br from-cyan to-blue bg-clip-text text-transparent">Let the engine do it.</em>
            </h1>
            <p className="text-[17px] text-[#4a5180] mb-9 max-w-[480px] leading-[1.65]">
              Your HRIS holds stale skills data. Your LMS holds completion records. Your assessment platform holds scores. None of them talk to each other - so you spend half your week doing the translation by hand. CoreCatalyst automates every bit of it.
            </p>
            <div className="flex items-center gap-3.5 flex-wrap">
              <a href="/demo" className="inline-flex items-center gap-2 px-[26px] py-[13px] rounded-btn bg-grad-primary text-white font-semibold text-[15px] hover:opacity-90 hover:-translate-y-0.5 transition-all">
                See the HR Ops Demo →
              </a>
              <a href="/security" className="inline-flex items-center gap-1.5 py-[13px] px-1 text-blue font-semibold text-sm hover:gap-2.5 transition-all">
                Download the integration guide →
              </a>
            </div>
          </div>

          <div className="bg-white rounded-[20px] border border-border shadow-[0_4px_40px_rgba(59,91,219,.11),0_1px_4px_rgba(59,91,219,.06)] overflow-hidden">
            <div className="px-[18px] py-[13px] bg-gradient-to-br from-[#e7f5ff] to-[#eef2ff] border-b border-border flex items-center gap-2.5">
              <div className="flex gap-[5px]">
                <div className="w-[9px] h-[9px] rounded-full bg-red" />
                <div className="w-[9px] h-[9px] rounded-full bg-yellow" />
                <div className="w-[9px] h-[9px] rounded-full bg-green" />
              </div>
              <span className="text-xs font-semibold text-muted tracking-[.03em] ml-1">HRIS Write-back Console</span>
              <span className="ml-auto flex items-center gap-1.5 text-[10px] font-bold text-[#2b7a3d]">
                <span className="w-[7px] h-[7px] rounded-full bg-green animate-pulse" />
                Live sync
              </span>
            </div>
            <div className="p-[18px]">
              <div className="flex flex-col gap-2 mb-4">
                {syncFeed.map((s, i) => (
                  <div key={i} className="grid grid-cols-[22px_1fr_auto] items-center gap-2.5 text-xs p-2 rounded-lg bg-bg">
                    <span className="text-sm">{s.icon}</span>
                    <div className="min-w-0">
                      <div className="text-text truncate">{s.text}</div>
                      <span className="text-[11px] text-muted block">{s.sub}</span>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${s.color}`}>{s.badge}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] border-t border-border pt-3.5">
                <div className="text-center">
                  <div className="font-sora font-extrabold text-xl leading-none text-blue">247</div>
                  <div className="text-[10px] text-muted mt-0.5">records synced today</div>
                </div>
                <div className="text-center">
                  <div className="font-sora font-extrabold text-xl leading-none text-blue">94%</div>
                  <div className="text-[10px] text-muted mt-0.5">auto-resolved</div>
                </div>
                <div className="text-center">
                  <div className="font-sora font-extrabold text-xl leading-none text-blue">3</div>
                  <div className="text-[10px] text-muted mt-0.5">awaiting review</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="py-5 bg-[#f8f9fe] border-b border-border">
        <div className="max-w-site mx-auto px-4 sm:px-6 flex items-center justify-center gap-8 flex-wrap">
          {['Pre-built connectors for Workday, SAP, Oracle', 'Full audit trail, every change logged', 'GDPR & SOC 2 Type II certified', 'HRIS write-back in real time', 'Zero-code setup, connects in days'].map((t, i) => (
            <span key={i} className="flex items-center gap-2 text-xs text-muted font-medium">
              <span className="text-cyan text-sm">✓</span>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* PROBLEM */}
      <RevealWrapper>
        <section className="py-14 lg:py-[88px] bg-white">
          <div className="max-w-site mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-[11px] font-bold text-cyan uppercase tracking-[.12em] mb-3">The HR Ops challenge</div>
              <h2 className="font-sora text-[clamp(26px,3vw,40px)] font-extrabold leading-[1.15] tracking-[-.025em] mb-4 text-text">Skills data reconciliation is eating your team&apos;s time</h2>
              <p className="text-base text-[#4a5180] mb-[52px] max-w-[560px] leading-[1.65]">
                HR Operations teams didn&apos;t sign up to be data engineers. But when skills data lives across 4+ systems that never sync, someone has to do the plumbing manually - and that someone is you.
              </p>
              <div className="flex flex-col gap-[18px]">
                {pains.map((p, i) => (
                  <div key={i} className="grid grid-cols-[44px_1fr] gap-3.5 p-[18px] bg-bg border border-border rounded-[14px] hover:border-[#a5d8ff] transition-colors">
                    <div className="w-11 h-11 bg-white border border-border rounded-xl flex items-center justify-center text-xl">{p.icon}</div>
                    <div>
                      <h3 className="font-sora font-bold text-sm text-text mb-1">{p.title}</h3>
                      <p className="text-[13px] text-muted leading-[1.55]">{p.body}</p>
                      <div className="text-[11px] font-bold text-red mt-1.5">{p.stat}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-bg rounded-[20px] border border-border p-6">
              <div className="font-sora font-bold text-[13px] text-text mb-1">Where HR Ops time goes each week</div>
              <div className="text-xs text-muted mb-5">Before CoreCatalyst - 5-person HR Operations team</div>
              <div className="flex flex-col gap-3 mb-5">
                {timesinkBars.map((b, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-[5px]">
                      <span className="font-semibold text-text">{b.label}</span>
                      <span className="font-bold text-red">{b.hours}</span>
                    </div>
                    <div className="h-2 bg-border rounded-full overflow-hidden">
                      <AnimatedBar pct={b.pct} className="bg-gradient-to-r from-red to-[#ff922b]" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-px bg-border my-4" />
              <div className="flex justify-between items-center">
                <span className="text-[13px] text-muted">Skills data overhead per week</span>
                <span className="font-sora font-extrabold text-[28px] leading-none text-red">32 hrs</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#e3f9e5] border border-[#b2f2bb] rounded-[10px] px-3.5 py-2.5 text-xs font-semibold text-[#2b7a3d] mt-3.5">
                ✅ After CoreCatalyst: under 3 hrs/week - 90% reduction
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* OUTCOMES */}
      <RevealWrapper>
        <section className="py-14 lg:py-[88px] bg-bg">
          <div className="max-w-site mx-auto px-6">
            <div className="text-[11px] font-bold text-cyan uppercase tracking-[.12em] mb-3">What HR Ops gets</div>
            <h2 className="font-sora text-[clamp(26px,3vw,40px)] font-extrabold leading-[1.15] tracking-[-.025em] mb-4 text-text">From manual plumbing to automated accuracy</h2>
            <p className="text-base text-[#4a5180] mb-[52px] max-w-[560px] leading-[1.65]">
              CoreCatalyst becomes your skills data backbone - ingesting from every source, reconciling conflicts automatically, writing verified data back to your HRIS, and keeping a complete audit log of every decision.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
              {outcomes.map((o, i) => (
                <div
                  key={i}
                  className={`p-[26px_22px] rounded-card border transition-all hover:-translate-y-1 hover:shadow-hover ${
                    o.featured ? 'bg-gradient-to-br from-[#e7f5ff] to-[#eef2ff] border-[#a5d8ff]' : 'bg-white border-border'
                  }`}
                >
                  <div className={`font-sora font-extrabold text-[38px] leading-none mb-1 ${o.color}`}>{o.num}</div>
                  <h3 className="font-sora font-bold text-sm text-text mt-2.5 mb-2">{o.title}</h3>
                  <p className="text-[13px] text-muted leading-[1.55]">{o.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* CAPABILITY TABS */}
      <RevealWrapper>
        <section className="py-14 lg:py-[88px] bg-white">
          <div className="max-w-site mx-auto px-6">
            <div className="text-[11px] font-bold text-cyan uppercase tracking-[.12em] mb-3">Core capabilities</div>
            <h2 className="font-sora text-[clamp(26px,3vw,40px)] font-extrabold leading-[1.15] tracking-[-.025em] mb-4 text-text">The three things that change everything for HR Ops</h2>
            <p className="text-base text-[#4a5180] mb-11 max-w-[560px] leading-[1.65]">Each one eliminates a different category of manual work.</p>
            <HropsCapabilityTabs />
          </div>
        </section>
      </RevealWrapper>

      {/* INTEGRATION MAP */}
      <RevealWrapper>
        <section className="py-14 lg:py-[88px] bg-gradient-to-br from-[#f8f9ff] to-[#e7f5ff]">
          <div className="max-w-site mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[52px] items-center">
            <div>
              <div className="text-[11px] font-bold text-cyan uppercase tracking-[.12em] mb-3">Integrations</div>
              <h2 className="font-sora text-[clamp(26px,3vw,40px)] font-extrabold leading-[1.15] tracking-[-.025em] mb-4 text-text">Connects to your stack in days - not months</h2>
              <p className="text-base text-[#4a5180] leading-[1.65]">
                CoreCatalyst ships with pre-built connectors for every major HR platform. No custom API work. No IT project plan. Your systems team gets a configuration console; most setups take under two weeks.
              </p>
              <div className="flex flex-col gap-5 mt-8">
                {integrationBullets.map((b, i) => (
                  <div key={i} className="flex gap-3.5 items-start">
                    <div className="w-[38px] h-[38px] bg-gradient-to-br from-[#e7f5ff] to-[#dbe4ff] border border-[#a5d8ff] rounded-xl flex items-center justify-center text-[17px] flex-shrink-0">{b.icon}</div>
                    <div>
                      <div className="font-sora font-bold text-sm text-text mb-1">{b.title}</div>
                      <p className="text-[13px] text-muted leading-[1.55]">{b.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[20px] border border-border shadow-card p-6">
              <div className="font-sora font-bold text-[13px] text-text mb-1">Your integration map</div>
              <div className="text-[11px] text-muted mb-5">All sources reconciled, single output to your HRIS</div>
              <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-start">
                <div>
                  <div className="text-[10px] font-bold text-muted uppercase tracking-[.06em] mb-2 text-center">Data sources (in)</div>
                  <div className="flex flex-col gap-1.5">
                    {[
                      { s: 'Workday', icon: '📄', active: true },
                      { s: 'SAP SuccessFactors', icon: '📄', active: true },
                      { s: 'Cornerstone LMS', icon: '🎓', active: false },
                      { s: 'LinkedIn Learning', icon: '🎓', active: false },
                      { s: 'SHL / Korn Ferry', icon: '📊', active: false },
                      { s: 'CV / Resume parser', icon: '📄', active: false },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-[7px] text-[11px] font-semibold rounded-[10px] px-3 py-2.5 ${
                          item.active ? 'bg-[#eef2ff] border border-blue text-text' : 'bg-bg border border-border text-text'
                        }`}
                      >
                        <span className="text-sm">{item.icon}</span>
                        {item.s}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-1.5 pt-6">
                  <span className="text-[13px] text-muted">→</span>
                  <div className="bg-grad-primary text-white rounded-xl p-[10px_14px] font-sora text-[10px] font-bold text-center leading-[1.4]">
                    CoreCatalyst Engine
                  </div>
                  <span className="text-[13px] text-muted">→</span>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-muted uppercase tracking-[.06em] mb-2 text-center">Verified output (out)</div>
                  <div className="flex flex-col gap-1.5">
                    {[
                      { s: 'Workday HCM', active: true },
                      { s: 'SAP SuccessFactors', active: true },
                      { s: 'Oracle HCM', active: true },
                      { s: 'ADP', active: false },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-[7px] text-[11px] font-semibold rounded-[10px] px-3 py-2.5 ${
                          item.active ? 'bg-[#eef2ff] border border-blue text-text' : 'bg-bg border border-border text-text'
                        }`}
                      >
                        <span className="text-sm">✅</span>
                        {item.s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3.5">
                {['✓ Pre-built connector', '✓ No-code setup', '✓ <2 week go-live'].map((c, i) => (
                  <span key={i} className="flex items-center gap-1 text-[10px] font-semibold px-2.5 py-[3px] rounded-full bg-[#e3f9e5] text-[#2b7a3d] border border-[#b2f2bb]">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* COMPLIANCE */}
      <RevealWrapper>
        <section className="py-14 lg:py-[88px] bg-white">
          <div className="max-w-site mx-auto px-6">
            <div className="text-[11px] font-bold text-cyan uppercase tracking-[.12em] mb-3">Governance & compliance</div>
            <h2 className="font-sora text-[clamp(26px,3vw,40px)] font-extrabold leading-[1.15] tracking-[-.025em] mb-4 text-text">Built for enterprise data standards - not bolted on</h2>
            <p className="text-base text-[#4a5180] mb-[52px] max-w-[560px] leading-[1.65]">
              Skills data touches every employee. CoreCatalyst is designed from the ground up for enterprise governance requirements.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[52px]">
              {complianceCards.map((c, i) => (
                <div key={i} className="bg-bg border border-border rounded-card p-6 hover:border-[#a5d8ff] hover:shadow-card transition-all">
                  <div className="text-[28px] mb-3.5">{c.icon}</div>
                  <h3 className="font-sora font-bold text-[15px] mb-2 text-text">{c.title}</h3>
                  <p className="text-[13px] text-muted leading-[1.55]">{c.body}</p>
                  <span className="inline-block mt-2.5 text-[10px] font-bold px-2.5 py-[3px] rounded-full bg-[#e7f5ff] text-[#1864ab] border border-[#a5d8ff]">{c.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* TESTIMONIAL */}
      <RevealWrapper>
        <section className="py-14 lg:py-[88px] bg-bg">
          <div className="max-w-site mx-auto px-6">
            <div className="max-w-[760px] mx-auto bg-white border border-border rounded-[24px] shadow-card p-[44px_48px] text-center">
              <div className="font-sora text-[60px] leading-none text-subtle mb-1.5" style={{ fontFamily: 'Georgia, serif' }}>&ldquo;</div>
              <p className="font-sora text-[19px] font-semibold text-text leading-[1.5] mb-7">
                We were spending 14 hours a week manually cross-checking skills data across Workday, our LMS, and spreadsheets from managers. CoreCatalyst cut that to under 2 hours. The audit trail alone saved us during our last compliance review.
              </p>
              <div className="flex items-center justify-center gap-3.5">
                <div className="w-[46px] h-[46px] rounded-full bg-gradient-to-br from-cyan to-blue text-white font-sora text-sm font-bold flex items-center justify-center flex-shrink-0">
                  NW
                </div>
                <div className="text-left">
                  <div className="font-bold text-text text-sm mb-0.5">Natalie Wong</div>
                  <div className="text-[13px] text-muted">Head of HR Operations, Global Logistics Co. - 8,000 employees</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* CTA */}
      <RevealWrapper>
        <section className="py-14 lg:py-[88px] bg-gradient-to-br from-[#e7f5ff] via-[#eef2ff] to-[#f5f3ff] text-center">
          <div className="max-w-[600px] mx-auto px-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-br from-[#e7f5ff] to-[#dbe4ff] border border-[#a5d8ff] rounded-full px-3.5 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
              <span className="text-xs font-semibold text-[#1864ab] uppercase tracking-[.06em]">Ready to end the manual reconciliation grind?</span>
            </div>
            <h2 className="font-sora text-[clamp(26px,3.5vw,42px)] font-extrabold leading-[1.15] tracking-[-.025em] mb-4 text-text">See the full automation in 30 minutes</h2>
            <p className="text-base text-[#4a5180] mb-9">
              Book an HR Ops demo and we&apos;ll walk through your specific system stack - live integration map, write-back config, and audit trail. Your systems team is welcome.
            </p>
            <div className="flex items-center justify-center gap-3.5 flex-wrap">
              <a href="/demo" className="inline-flex items-center gap-2 px-[26px] py-[13px] rounded-btn bg-grad-primary text-white font-semibold text-[15px] hover:opacity-90 hover:-translate-y-0.5 transition-all">
                Book an HR Ops Demo →
              </a>
              <a href="/security" className="px-[26px] py-[13px] rounded-btn border-[1.5px] border-border text-blue font-semibold text-[15px] bg-white hover:border-blue hover:shadow-[0_0_0_3px_rgba(59,91,219,.1)] transition-all">
                Download the integration checklist
              </a>
            </div>
          </div>
        </section>
      </RevealWrapper>
    </div>
  )
}
