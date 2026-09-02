import { Metadata } from 'next'
import { RevealWrapper } from '../../../components/ui/RevealWrapper'
import HropsCapabilityTabs from './HropsCapabilityTabs'

export const metadata: Metadata = {
  title: 'CoreCatalyst for HR Operations - Eliminate Manual Skills Data Work',
  description:
    'Your HRIS holds stale skills data. Your LMS holds completion records. None of them talk to each other. CoreCatalyst automates every bit of it.',
}

const syncFeed = [
  { icon: '✅', text: 'Marcus P. - Python level updated', sub: 'Workday Skills Cloud · 2 min ago', badge: 'Written', color: 'bg-green-50 text-green' },
  { icon: '✅', text: 'Aisha K. - Data Visualisation confirmed', sub: 'SAP SuccessFactors · 4 min ago', badge: 'Written', color: 'bg-green-50 text-green' },
  { icon: '⏳', text: 'Jamie L. - dbt Pipelines gap flagged', sub: 'Awaiting manager review', badge: 'Pending', color: 'bg-amber-50 text-amber-700' },
  { icon: '✅', text: 'Riya N. - Stakeholder Mgmt promoted', sub: 'Oracle HCM · 11 min ago', badge: 'Written', color: 'bg-green-50 text-green' },
  { icon: '⚠️', text: 'Tom B. - SQL conflict detected', sub: '3 sources disagree · auto-escalated', badge: 'Review', color: 'bg-amber-50 text-amber-700' },
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
  { num: '90%', title: 'Less manual reconciliation', body: 'The 14 hours your team spends manually cross-referencing systems drops to under 90 minutes. The engine does the reconciliation; your team reviews the exceptions.', featured: true },
  { num: '94%', title: 'Auto-resolved conflicts', body: 'Resolved automatically using weighted trust scores. Only the genuinely ambiguous 6% escalate to a manager for 30-second confirmation.', featured: false },
  { num: 'Real-time', title: 'HRIS write-back', body: 'Verified skills data writes back to Workday, SAP SuccessFactors, Oracle HCM, and others automatically - no batch jobs, no manual entry, no lag.', featured: false },
  { num: '100%', title: 'Audit trail coverage', body: 'Every skills change is logged: what changed, which source triggered it, what the conflict was, who confirmed it, and when. Exportable for any compliance need.', featured: false },
  { num: '<2wk', title: 'Integration setup time', body: 'Pre-built connectors for all major HRIS, LMS, and assessment platforms. No custom engineering. Zero-code configuration through the admin console.', featured: false },
  { num: '45K', title: 'Taxonomy nodes, mapped', body: 'Every skills variant across your systems is mapped to a canonical node in the 45K-skill taxonomy. All variants resolve to one record.', featured: false },
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
      <section className="bg-grad-hero py-20">
        <div className="max-w-site mx-auto px-6 grid grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet" />
              <span className="text-xs font-semibold text-violet">For HR Operations</span>
            </div>
            <div className="text-xs font-bold text-blue uppercase tracking-wider mb-3">Automation & Accuracy</div>
            <h1 className="font-sora text-5xl font-bold leading-tight mb-6 text-text">
              Stop manually reconciling skills data. <span className="bg-grad-primary bg-clip-text text-transparent">Let the engine do it.</span>
            </h1>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              Your HRIS holds stale skills data. Your LMS holds completion records. Your assessment platform holds scores. None of them talk to each other - so you spend half your week doing the translation by hand. CoreCatalyst automates every bit of it.
            </p>
            <div className="flex items-center gap-4">
              <a href="/demo" className="px-7 py-3 rounded-btn bg-grad-primary text-white font-semibold hover:opacity-90 transition-opacity shadow-md">
                See the HR Ops Demo →
              </a>
              <a href="/security" className="px-6 py-3 text-blue font-semibold hover:gap-3 flex items-center gap-2 transition-all">
                Download the integration guide →
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-border shadow-lg overflow-hidden">
            <div className="px-5 py-4 bg-gray-50 border-b border-border flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <span className="text-xs font-semibold text-muted uppercase tracking-wider flex-1">HRIS Write-back Console</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-50 text-green flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                Live sync
              </span>
            </div>
            <div className="p-5">
              <div className="space-y-2.5 mb-4">
                {syncFeed.map((s, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span className="text-base flex-shrink-0">{s.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-text truncate">{s.text}</div>
                      <div className="text-[10px] text-muted">{s.sub}</div>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${s.color}`}>{s.badge}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-bg rounded-lg p-2 text-center">
                  <div className="font-sora font-bold text-sm text-text">247</div>
                  <div className="text-[10px] text-muted">records synced today</div>
                </div>
                <div className="bg-bg rounded-lg p-2 text-center">
                  <div className="font-sora font-bold text-sm text-text">94%</div>
                  <div className="text-[10px] text-muted">auto-resolved</div>
                </div>
                <div className="bg-bg rounded-lg p-2 text-center">
                  <div className="font-sora font-bold text-sm text-text">3</div>
                  <div className="text-[10px] text-muted">awaiting review</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="py-6 bg-white border-y border-border">
        <div className="max-w-site mx-auto px-6 flex items-center justify-center gap-8 flex-wrap text-sm text-muted font-medium">
          {['Pre-built connectors for Workday, SAP, Oracle', 'Full audit trail, every change logged', 'GDPR & SOC 2 Type II certified', 'HRIS write-back in real time', 'Zero-code setup, connects in days'].map((t, i) => (
            <span key={i} className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* PROBLEM */}
      <RevealWrapper>
        <section className="py-24 bg-bg">
          <div className="max-w-site mx-auto px-6 grid grid-cols-[1fr_380px] gap-16">
            <div>
              <div className="text-xs font-bold text-blue uppercase tracking-wider mb-3">The HR Ops challenge</div>
              <h2 className="font-sora text-4xl font-bold mb-4 text-text">Skills data reconciliation is eating your team&apos;s time</h2>
              <p className="text-lg text-muted mb-10 leading-relaxed">
                HR Operations teams didn&apos;t sign up to be data engineers. But when skills data lives across 4+ systems that never sync, someone has to do the plumbing manually - and that someone is you.
              </p>
              <div className="space-y-6">
                {pains.map((p, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-2xl flex-shrink-0">{p.icon}</div>
                    <div>
                      <h3 className="font-sora font-bold text-text mb-1.5">{p.title}</h3>
                      <p className="text-sm text-muted leading-relaxed mb-2">{p.body}</p>
                      <div className="text-xs font-semibold text-blue">{p.stat}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-border p-6 h-fit">
              <div className="font-sora font-bold text-text mb-1">Where HR Ops time goes each week</div>
              <div className="text-xs text-muted mb-5">Before CoreCatalyst - 5-person HR Operations team</div>
              <div className="space-y-3 mb-5">
                {timesinkBars.map((b, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted">{b.label}</span>
                      <span className="font-semibold text-text">{b.hours}</span>
                    </div>
                    <div className="h-1.5 bg-bg rounded-full overflow-hidden">
                      <div className="h-full bg-red rounded-full" style={{ width: `${b.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-px bg-border mb-4" />
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-muted">Skills data overhead per week</span>
                <span className="font-sora font-bold text-xl text-text">32 hrs</span>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg px-3.5 py-2.5 text-xs font-semibold text-green-800">
                ✅ After CoreCatalyst: under 3 hrs/week - 90% reduction
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* OUTCOMES */}
      <RevealWrapper>
        <section className="py-24 bg-white">
          <div className="max-w-site mx-auto px-6">
            <div className="text-xs font-bold text-blue uppercase tracking-wider mb-3">What HR Ops gets</div>
            <h2 className="font-sora text-4xl font-bold mb-4 text-text">From manual plumbing to automated accuracy</h2>
            <p className="text-lg text-muted mb-12 max-w-2xl leading-relaxed">
              CoreCatalyst becomes your skills data backbone - ingesting from every source, reconciling conflicts automatically, writing verified data back to your HRIS, and keeping a complete audit log of every decision.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {outcomes.map((o, i) => (
                <div key={i} className={`p-6 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-hover ${o.featured ? "border-2 border-blue bg-blue-50/30" : "border-border"}`}>
                  <div className="font-sora font-bold text-3xl text-blue mb-3">{o.num}</div>
                  <h3 className="font-sora font-bold text-base mb-2 text-text">{o.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{o.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* CAPABILITY TABS */}
      <RevealWrapper>
        <section className="py-24 bg-bg">
          <div className="max-w-site mx-auto px-6">
            <div className="text-xs font-bold text-blue uppercase tracking-wider mb-3">Core capabilities</div>
            <h2 className="font-sora text-4xl font-bold mb-4 text-text">The three things that change everything for HR Ops</h2>
            <p className="text-lg text-muted mb-12">Each one eliminates a different category of manual work.</p>
            <HropsCapabilityTabs />
          </div>
        </section>
      </RevealWrapper>

      {/* INTEGRATION MAP */}
      <RevealWrapper>
        <section className="py-24 bg-white">
          <div className="max-w-site mx-auto px-6 grid grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-bold text-blue uppercase tracking-wider mb-3">Integrations</div>
              <h2 className="font-sora text-3xl font-bold mb-4 text-text">Connects to your stack in days - not months</h2>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                CoreCatalyst ships with pre-built connectors for every major HR platform. No custom API work. No IT project plan. Your systems team gets a configuration console; most setups take under two weeks.
              </p>
              <div className="space-y-5">
                {integrationBullets.map((b, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="text-xl flex-shrink-0">{b.icon}</div>
                    <div>
                      <div className="font-sora font-bold text-text mb-1">{b.title}</div>
                      <p className="text-sm text-muted leading-relaxed">{b.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-bg rounded-2xl border border-border p-6">
              <div className="font-sora font-bold text-text mb-1">Your integration map</div>
              <div className="text-xs text-muted mb-5">All sources reconciled, single output to your HRIS</div>
              <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
                <div>
                  <div className="text-[10px] font-bold text-muted uppercase tracking-wider mb-2">Data sources (in)</div>
                  <div className="space-y-1.5">
                    {['Workday', 'SAP SuccessFactors', 'Cornerstone LMS', 'LinkedIn Learning', 'SHL / Korn Ferry', 'CV / Resume parser'].map((s, i) => (
                      <div key={i} className="text-xs bg-white border border-border rounded-lg px-2.5 py-1.5 text-text">{s}</div>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-blue mb-1">→</div>
                  <div className="w-16 h-16 rounded-xl bg-grad-primary text-white text-[10px] font-bold flex items-center justify-center text-center leading-tight p-1">
                    CoreCatalyst Engine
                  </div>
                  <div className="text-blue mt-1">→</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-muted uppercase tracking-wider mb-2">Verified output (out)</div>
                  <div className="space-y-1.5">
                    {['Workday HCM', 'SAP SuccessFactors', 'Oracle HCM', 'ADP'].map((s, i) => (
                      <div key={i} className="text-xs bg-white border border-green-200 bg-green-50/50 rounded-lg px-2.5 py-1.5 text-text">✅ {s}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-5">
                {['✓ Pre-built connector', '✓ No-code setup', '✓ <2 week go-live'].map((c, i) => (
                  <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white border border-border text-text">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* COMPLIANCE */}
      <RevealWrapper>
        <section className="py-24 bg-bg">
          <div className="max-w-site mx-auto px-6">
            <div className="text-xs font-bold text-blue uppercase tracking-wider mb-3">Governance & compliance</div>
            <h2 className="font-sora text-4xl font-bold mb-4 text-text">Built for enterprise data standards - not bolted on</h2>
            <p className="text-lg text-muted mb-12 max-w-2xl leading-relaxed">
              Skills data touches every employee. CoreCatalyst is designed from the ground up for enterprise governance requirements.
            </p>
            <div className="grid grid-cols-4 gap-6">
              {complianceCards.map((c, i) => (
                <div key={i} className="bg-white rounded-2xl border border-border p-6">
                  <div className="text-3xl mb-4">{c.icon}</div>
                  <h3 className="font-sora font-bold text-base mb-2 text-text">{c.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">{c.body}</p>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue">{c.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* TESTIMONIAL */}
      <RevealWrapper>
        <section className="py-24 bg-white">
          <div className="max-w-site mx-auto px-6 max-w-2xl text-center">
            <div className="text-5xl text-violet/30 font-sora mb-4">&ldquo;</div>
            <p className="text-xl text-text leading-relaxed mb-8">
              We were spending 14 hours a week manually cross-checking skills data across Workday, our LMS, and spreadsheets from managers. CoreCatalyst cut that to under 2 hours. The audit trail alone saved us during our last compliance review.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue to-violet text-white font-bold flex items-center justify-center">
                NW
              </div>
              <div className="text-left">
                <div className="font-semibold text-text">Natalie Wong</div>
                <div className="text-sm text-muted">Head of HR Operations, Global Logistics Co. - 8,000 employees</div>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* CTA */}
      <RevealWrapper>
        <section className="py-24 bg-grad-hero text-center">
          <div className="max-w-site mx-auto px-6">
            <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-violet" />
              <span className="text-xs font-semibold text-violet">Ready to end the manual reconciliation grind?</span>
            </div>
            <h2 className="font-sora text-4xl font-bold mb-4 text-text">See the full automation in 30 minutes</h2>
            <p className="text-lg text-muted mb-8 max-w-xl mx-auto">
              Book an HR Ops demo and we&apos;ll walk through your specific system stack - live integration map, write-back config, and audit trail. Your systems team is welcome.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a href="/demo" className="px-8 py-4 rounded-btn bg-grad-primary text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg">
                Book an HR Ops Demo →
              </a>
              <a href="/security" className="px-8 py-4 rounded-btn border border-border text-text font-semibold text-lg hover:border-blue transition-colors">
                Download the integration checklist
              </a>
            </div>
          </div>
        </section>
      </RevealWrapper>
    </div>
  )
}
