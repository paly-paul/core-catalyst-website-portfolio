import { Metadata } from 'next'
import { RevealWrapper } from '../../../components/ui/RevealWrapper'
import { AnimatedBar } from '../../../components/ui/AnimatedBar'
import CapabilityTabs from './CapabilityTabs'
import ReadinessRing from './ReadinessRing'

export const metadata: Metadata = {
  title: 'CoreCatalyst for CHROs - Board-Ready Workforce Intelligence',
  description:
    "74% of CHROs say they lack confidence in their organization's skills data. CoreCatalyst reconciles every source into a single verified picture of workforce readiness you can present at board level.",
}

const functionBreakdown = [
  { label: 'Engineering', pct: 88, warn: false },
  { label: 'Finance', pct: 81, warn: false },
  { label: 'Operations', pct: 67, warn: false },
  { label: 'AI/Data', pct: 43, warn: true },
]

const problems = [
  {
    icon: '📋',
    title: 'Data fragmentation kills credibility',
    body: "Your HRIS shows one skills picture. The LMS shows another. CVs tell a third story. When asked by the board, you average them and hope. That's not a strategy.",
    stat: '87% of CHROs cite skills data fragmentation as their #1 barrier',
  },
  {
    icon: '⏰',
    title: "By the time reports are ready, they're stale",
    body: "Manually reconciling skills data across systems takes weeks. Quarterly board packs are built on data that's already 90 days old. Decisions get made on guesswork.",
    stat: 'Average skills data lag: 4-6 months behind reality',
  },
  {
    icon: '🚫',
    title: "Strategy and workforce aren't connected",
    body: 'When the business pivots to AI-first operations, HR can\'t quickly answer: "Do we have the people for this?" The gap between strategy and workforce visibility costs $8.5T globally.',
    stat: '$8.5T in unrealized revenue tied to the workforce readiness gap',
  },
]

const outcomes = [
  { num: '75', suffix: '%', title: 'Faster skills intelligence', body: 'What used to take a 6-week manual pull is now a live dashboard. Workforce readiness data refreshes automatically from every connected source.', featured: false },
  { num: '94', suffix: '%', title: 'Conflicts auto-resolved', body: 'Our reconciliation engine resolves 94% of skills conflicts across systems automatically - no manual adjudication required from HR.', featured: true },
  { num: '3', suffix: 'x', title: 'Internal mobility rate', body: 'Organizations using verified skills data move talent internally 3x more often, reducing external hiring costs and improving retention.', featured: false },
  { num: '45', suffix: 'K', title: 'Skill taxonomy nodes', body: 'The largest skills taxonomy in the market - 45,000 nodes, continuously updated for emerging roles and AI-era capabilities.', featured: false },
  { num: '90', suffix: '%', title: 'Board confidence rating', body: 'CHROs using CoreCatalyst report 90% satisfaction from boards on workforce data quality - a 3.5x improvement from pre-implementation.', featured: false },
  { num: '<8', suffix: 'wk', title: 'Time to first insight', body: 'From contract to your first board-ready workforce report in under 8 weeks. Pre-built connectors for Workday, SAP, Oracle, and all major LMS platforms.', featured: false },
]

const boardBullets = [
  { icon: '📅', title: 'Auto-refreshed quarterly reports', body: 'tied directly to your board cadence, generated the moment the period closes' },
  { icon: '📈', title: 'Strategy-to-workforce linkage', body: "map workforce capability against your 3-year strategy; show where you're ready and where you're exposed" },
  { icon: '🎯', title: 'Investment prioritization', body: 'tell the board exactly which skills investments have the highest ROI based on strategic gap analysis' },
]

const roiItems = [
  { icon: '💳', title: 'Reduced external hiring', saving: '$4.6M', body: 'Internal mobility rates improve 3x when skills data is verified. At $38K average external hire cost, 120 avoided external hires per year drives significant savings.' },
  { icon: '📊', title: 'HR productivity gain', saving: '$840K', body: "Automated reconciliation eliminates 240+ hours/month of manual skills data work across HR, freeing the team for strategic work. At fully-loaded HR cost, that's meaningful savings." },
  { icon: '👤', title: 'Attrition reduction', saving: '$760K', body: 'Employees with clear career paths and internal mobility opportunities stay 18 months longer on average. A 1.8-point reduction in attrition rate for a 10K-person org saves significantly.' },
]

export default function CHROSolution() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="bg-grad-hero py-20 relative overflow-hidden">
        <div className="max-w-site mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet" />
              <span className="text-xs font-semibold text-violet">For CHROs & People Leaders</span>
            </div>
            <div className="text-xs font-bold text-blue uppercase tracking-wider mb-3">Workforce Intelligence</div>
            <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-text">
              Finally, skills data the board <em className="not-italic bg-grad-primary bg-clip-text text-transparent">actually trusts</em>
            </h1>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              74% of CHROs say they lack confidence in their organization&apos;s skills data. CoreCatalyst reconciles every source - CV, LMS, assessments, performance - into a single verified picture of workforce readiness you can present at board level.
            </p>
            <div className="flex items-center gap-4">
              <a href="/demo" className="px-7 py-3 rounded-btn bg-grad-primary text-white font-semibold hover:opacity-90 transition-opacity shadow-md">
                See a Board Demo →
              </a>
              <a href="/security" className="px-6 py-3 text-blue font-semibold hover:gap-3 flex items-center gap-2 transition-all">
                Download the CHRO guide →
              </a>
            </div>
          </div>

          {/* Widget */}
          <div className="bg-white rounded-2xl border border-border shadow-lg overflow-hidden">
            <div className="px-5 py-4 bg-gray-50 border-b border-border flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <span className="text-xs font-semibold text-muted uppercase tracking-wider flex-1">Workforce Readiness Dashboard</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-50 text-green">Live</span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-4 mb-5">
                <ReadinessRing score={75} />
                <div>
                  <div className="font-sora font-bold text-text">Org Readiness Score</div>
                  <div className="text-xs text-muted mb-1.5">Across 10,000 employees, 6 functions</div>
                  <span className="text-xs font-bold text-green">↑ +8pts from last quarter</span>
                </div>
              </div>

              <div className="space-y-2.5 mb-4">
                {functionBreakdown.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs text-muted w-20 flex-shrink-0">{f.label}</span>
                    <div className="flex-1 h-2 bg-bg rounded-full overflow-hidden">
                      <AnimatedBar pct={f.pct} delay={i * 0.06} className={f.warn ? 'bg-gradient-to-r from-red to-orange' : 'bg-blue'} />
                    </div>
                    <span className={`text-xs font-semibold w-9 text-right ${f.warn ? 'text-red' : 'text-text'}`}>{f.pct}%</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700">AI/Data skills gap</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700">Ops succession thin</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700">Procurement: watch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="py-6 bg-white border-y border-border">
        <div className="max-w-site mx-auto px-4 sm:px-6 flex items-center justify-center gap-8 flex-wrap text-sm text-muted font-medium">
          {['Board-ready reporting templates', '45K-skill taxonomy, auto-reconciled', 'SOC 2 Type II certified', 'GDPR & CCPA compliant', 'HRIS write-back in real time'].map((t, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* PROBLEM SECTION */}
      <RevealWrapper>
        <section className="py-14 lg:py-24 bg-white">
          <div className="max-w-site mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[11px] font-bold text-violet uppercase tracking-[.12em] mb-3">The CHRO challenge</div>
              <h2 className="font-sora text-[clamp(26px,3vw,40px)] font-extrabold leading-[1.15] tracking-[-.025em] mb-4 text-text">Your board is asking questions HR data can&apos;t answer</h2>
              <p className="text-base text-[#4a5180] mb-14 max-w-[580px] leading-[1.65]">
                The questions are getting harder. &ldquo;Do we have the AI skills to execute our 3-year strategy?&rdquo; &ldquo;Where are our succession gaps?&rdquo; &ldquo;What&apos;s our workforce readiness score?&rdquo; The data exists - it just lives in four different systems, none of which agree.
              </p>
              <div className="flex flex-col gap-7">
                {problems.map((p, i) => (
                  <div key={i} className="grid grid-cols-[44px_1fr] gap-4 items-start">
                    <div className="w-11 h-11 bg-bg border border-border rounded-xl flex items-center justify-center text-xl flex-shrink-0">{p.icon}</div>
                    <div>
                      <h3 className="font-sora font-bold text-[15px] text-text mb-1.5">{p.title}</h3>
                      <p className="text-sm text-muted leading-[1.55]">{p.body}</p>
                      <div className="text-[11px] font-bold text-red tracking-[.03em] mt-1.5">{p.stat}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-bg border border-border rounded-[20px] p-7">
              <div className="font-sora font-bold text-sm text-text mb-1.5">CHRO Confidence in Skills Data</div>
              <div className="text-xs text-muted mb-6">Industry benchmark - Q3 2025</div>
              <div className="relative mb-5">
                <div className="h-3 bg-border rounded-full overflow-visible">
                  <AnimatedBar pct={26} className="bg-gradient-to-r from-red to-[#ff922b]">
                    <span className="absolute -top-[22px] right-0 text-[11px] font-bold text-red whitespace-nowrap">26%</span>
                  </AnimatedBar>
                </div>
                <div className="flex justify-between text-[10px] text-muted mt-1.5">
                  <span>0% - No confidence</span>
                  <span>100% - Fully confident</span>
                </div>
              </div>
              <p className="text-xs text-[#4a5180] leading-[1.5] mb-4">
                Only <strong>26%</strong> of CHROs report being &ldquo;highly confident&rdquo; or &ldquo;confident&rdquo; in their organization&apos;s ability to identify and map workforce skills. The majority are making critical workforce decisions on incomplete or disputed data.
              </p>
              <div className="text-[11px] text-muted italic">Source: Cornerstone Galaxy Workforce Readiness Report, 2024</div>
              <div className="h-px bg-border my-5" />
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="font-sora font-extrabold text-[28px] leading-none text-blue mb-1">74%</div>
                  <div className="text-[11px] text-muted leading-[1.4]">CHROs lacking confidence in skills data</div>
                </div>
                <div className="text-center">
                  <div className="font-sora font-extrabold text-[28px] leading-none text-blue mb-1">4.2x</div>
                  <div className="text-[11px] text-muted leading-[1.4]">ROI from verified skills data vs. unverified</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* OUTCOMES */}
      <RevealWrapper>
        <section className="py-14 lg:py-24 bg-bg">
          <div className="max-w-site mx-auto px-6">
            <div className="text-[11px] font-bold text-violet uppercase tracking-[.12em] mb-3">What CHROs get</div>
            <h2 className="font-sora text-[clamp(26px,3vw,40px)] font-extrabold leading-[1.15] tracking-[-.025em] mb-4 text-text">From data chaos to board-ready clarity</h2>
            <p className="text-base text-[#4a5180] mb-14 max-w-[580px] leading-[1.65]">
              CoreCatalyst gives you a single, verified, continuously updated view of your workforce - so every conversation with the board, every strategic decision, starts from ground truth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {outcomes.map((o, i) => (
                <div
                  key={i}
                  className={`p-[28px_24px] rounded-card border transition-all hover:-translate-y-1 hover:shadow-hover ${
                    o.featured ? 'bg-gradient-to-br from-[#f0f4ff] to-[#f5f0ff] border-[#c5d0fa]' : 'bg-white border-border'
                  }`}
                >
                  <div className="font-sora font-extrabold text-[40px] leading-none text-blue mb-1">
                    {o.num}
                    <span className="text-violet">{o.suffix}</span>
                  </div>
                  <h3 className="font-sora font-bold text-[15px] text-text mt-2.5 mb-2">{o.title}</h3>
                  <p className="text-[13px] text-muted leading-[1.55]">{o.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* CAPABILITY DEEP DIVE */}
      <RevealWrapper>
        <section className="py-14 lg:py-24 bg-white">
          <div className="max-w-site mx-auto px-6">
            <div className="text-[11px] font-bold text-violet uppercase tracking-[.12em] mb-3">Core capabilities</div>
            <h2 className="font-sora text-[clamp(26px,3vw,40px)] font-extrabold leading-[1.15] tracking-[-.025em] mb-4 text-text">Three things every CHRO needs, finally in one place</h2>
            <p className="text-base text-[#4a5180] mb-14 max-w-[580px] leading-[1.65]">Pick the capability that matters most to you right now.</p>
            <CapabilityTabs />
          </div>
        </section>
      </RevealWrapper>

      {/* BOARD REPORTING */}
      <RevealWrapper>
        <section className="py-14 lg:py-24 bg-gradient-to-br from-[#f8f9ff] to-[#f5f3ff]">
          <div className="max-w-site mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-[20px] border border-border shadow-card overflow-hidden">
              <div className="bg-grad-primary px-6 py-5 text-white">
                <div className="text-[10px] font-semibold uppercase tracking-[.1em] opacity-70 mb-1.5">Board Pack - Workforce Intelligence</div>
                <div className="font-sora font-bold text-base mb-1">Q3 2026 Workforce Readiness Summary</div>
                <div className="text-[11px] opacity-65">Generated automatically - September 1, 2026</div>
              </div>
              <div className="px-6 py-5">
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="text-center">
                    <div className="font-sora font-extrabold text-[22px] leading-none text-blue mb-0.5">75%</div>
                    <div className="text-[10px] text-muted leading-tight">Overall readiness score</div>
                  </div>
                  <div className="text-center">
                    <div className="font-sora font-extrabold text-[22px] leading-none text-green mb-0.5">+8pts</div>
                    <div className="text-[10px] text-muted leading-tight">vs. Q2 2026</div>
                  </div>
                  <div className="text-center">
                    <div className="font-sora font-extrabold text-[22px] leading-none text-red mb-0.5">2</div>
                    <div className="text-[10px] text-muted leading-tight">High-risk skill gaps</div>
                  </div>
                </div>
                <div className="h-px bg-border my-4" />
                <p className="text-xs text-[#4a5180] leading-[1.6] p-3 bg-[#f8f9ff] rounded-[10px] border-l-[3px] border-blue">
                  <strong className="text-text">Board recommendation:</strong> Prioritize AI/Data capability investment - current supply (430 FTEs capable) falls 390 short of 2027 strategic demand. Internal reskilling program targeting Operations analysts is the highest-ROI path, estimated 6-month ramp.
                </p>
              </div>
            </div>

            <div>
              <div className="text-[11px] font-bold text-violet uppercase tracking-[.12em] mb-3">Why this matters now</div>
              <h2 className="font-sora text-[clamp(26px,3vw,40px)] font-extrabold leading-[1.15] tracking-[-.025em] mb-5 text-text">The board is already asking. Now you can answer.</h2>
              <div className="relative pl-5 mb-6">
                <div className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-grad-primary" />
                <p className="font-sora text-xl font-bold text-text leading-[1.4]">
                  &ldquo;We used to spend 3 weeks before each board meeting pulling skills data together manually. Now CoreCatalyst generates the report in minutes - and for the first time, the board actually trusts the numbers.&rdquo;
                </p>
              </div>
              <div className="flex flex-col gap-3.5">
                {boardBullets.map((b, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#eef2ff] to-[#f5f0ff] border border-[#c5d0fa] rounded-[10px] flex items-center justify-center text-sm flex-shrink-0">{b.icon}</div>
                    <div className="text-sm text-[#4a5180] leading-[1.55]">
                      <strong className="text-text font-semibold">{b.title}</strong> - {b.body}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ROI */}
      <RevealWrapper>
        <section className="py-14 lg:py-24 bg-white">
          <div className="max-w-site mx-auto px-6">
            <div className="text-[11px] font-bold text-violet uppercase tracking-[.12em] mb-3">Business case</div>
            <h2 className="font-sora text-[clamp(26px,3vw,40px)] font-extrabold leading-[1.15] tracking-[-.025em] mb-4 text-text">The numbers the CFO will want to see</h2>
            <p className="text-base text-[#4a5180] mb-14 max-w-[580px] leading-[1.65]">
              CoreCatalyst isn&apos;t an HR tool - it&apos;s a business investment with measurable returns that finance leaders recognize.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-bg rounded-[20px] border border-border p-7">
                <div className="font-sora font-bold text-sm text-text mb-1">ROI Estimate - 10,000 employee org</div>
                <div className="text-xs text-muted mb-6">Conservative assumptions; your CSM will model your specific numbers</div>
                <div className="flex flex-col gap-3.5 mb-5">
                  {[
                    { label: 'External hires avoided (internal fill)', val: '120 roles/yr', pct: 60 },
                    { label: 'Avg. external hire cost saved', val: '$38K', pct: 45 },
                    { label: 'HR analyst time reclaimed (hrs/mo)', val: '240 hrs', pct: 70 },
                    { label: 'Retention improvement (attrition)', val: '-1.8%pts', pct: 55 },
                  ].map((r, i) => (
                    <div key={i}>
                      <div className="grid grid-cols-[1fr_auto] gap-3 items-center mb-1.5">
                        <span className="text-xs font-medium text-text">{r.label}</span>
                        <span className="font-sora font-bold text-sm text-blue text-right">{r.val}</span>
                      </div>
                      <div className="h-1 bg-border rounded-full overflow-hidden">
                        <div className="h-full bg-grad-primary rounded-full" style={{ width: `${r.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-grad-primary rounded-[14px] p-5 text-center">
                  <div className="text-[11px] font-semibold uppercase tracking-[.08em] text-white/80 mb-1.5">Estimated Year 1 Return</div>
                  <div className="font-sora font-extrabold text-4xl leading-none text-white mb-1">$6.2M</div>
                  <div className="text-xs text-white/75">on a typical enterprise investment - 4.8x ROI</div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                {roiItems.map((r, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="w-9 h-9 bg-gradient-to-br from-[#eef2ff] to-[#f5f0ff] border border-[#c5d0fa] rounded-[10px] flex items-center justify-center text-base flex-shrink-0">{r.icon}</span>
                      <span className="font-sora font-bold text-[15px] text-text flex-1">{r.title}</span>
                      <span className="font-sora font-extrabold text-lg text-green">{r.saving}</span>
                    </div>
                    <p className="text-[13px] text-muted leading-[1.55] pl-[46px]">{r.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* TESTIMONIAL */}
      <RevealWrapper>
        <section className="py-14 lg:py-24 bg-bg">
          <div className="max-w-site mx-auto px-6">
            <div className="max-w-[800px] mx-auto bg-white border border-border rounded-[24px] shadow-card p-6 sm:p-12 text-center">
              <div className="font-sora text-[40px] sm:text-[64px] leading-none text-subtle mb-2" style={{ fontFamily: 'Georgia, serif' }}>&ldquo;</div>
              <p className="font-sora text-xl font-semibold text-text leading-[1.5] mb-7">
                For the first time in my career, I walked into a board meeting with workforce data I completely trusted. The readiness gap we identified in AI capabilities actually changed our hiring strategy for the year. That&apos;s the conversation HR should be having.
              </p>
              <div className="flex items-center justify-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-grad-primary text-white font-sora text-base font-bold flex items-center justify-center flex-shrink-0">
                  SL
                </div>
                <div className="text-left">
                  <div className="font-bold text-text text-sm mb-0.5">Sarah Lindqvist</div>
                  <div className="text-[13px] text-muted">CHRO, Global Manufacturing Co. - 12,000 employees</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* CTA */}
      <RevealWrapper>
        <section className="py-14 lg:py-24 bg-grad-hero text-center">
          <div className="max-w-site mx-auto px-6">
            <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-violet" />
              <span className="text-xs font-semibold text-violet">Ready to elevate your board game?</span>
            </div>
            <h2 className="font-sora text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-text">See what your workforce is actually capable of</h2>
            <p className="text-lg text-muted mb-8 max-w-xl mx-auto">
              Book a 30-minute CHRO demo and walk away with a live readiness score for your organization - no implementation required.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a href="/demo" className="px-8 py-4 rounded-btn bg-grad-primary text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg">
                Book a CHRO Demo →
              </a>
              <a href="/security" className="px-8 py-4 rounded-btn border border-border text-text font-semibold text-lg hover:border-blue transition-colors">
                Download the ROI guide
              </a>
            </div>
          </div>
        </section>
      </RevealWrapper>
    </div>
  )
}
