import { Fragment } from 'react'
import { Metadata } from 'next'
import { RevealWrapper } from '../components/ui/RevealWrapper'
import { CountUpStat } from '../components/ui/CountUpStat'
import PersonaTabs from './PersonaTabs'
import HeroWidget from './HeroWidget'
import StepTimeline from './StepTimeline'
import { SectionEyebrow, eyebrowIcons } from '../components/ui/SectionEyebrow'

export const metadata: Metadata = {
  title: 'CoreCatalyst - The Skills Operating System',
  description:
    'Turn fragmented HR data into a verified, board-ready picture of workforce readiness.',
}

const logos = ['Meridian Corp', 'Vantage Group', 'Orion Health', 'Nexus Financial', 'Atlas Retail', 'Clearstone']

const miniStats = [
  { num: '74%', color: 'text-blue', label: 'of CHROs lack confidence in their workforce skills data' },
  { num: '3.4x', color: 'text-violet', label: 'faster attrition at orgs with poor internal mobility visibility' },
  { num: '68%', color: 'text-blue', label: "of employees say their employer doesn't know their real skills" },
  { num: '2.1x', color: 'text-violet', label: 'more likely to engage when employees see a clear skill path' },
]

const steps = [
  { num: '1', title: 'Connect your sources', desc: 'Link HRIS, LMS, ATS, and performance systems via 200+ integrations - no engineering required.' },
  { num: '2', title: 'Ingest and normalise', desc: 'All skills data is pulled, cleaned, and mapped to a unified 45,000-skill taxonomy in 35 languages.' },
  { num: '3', title: 'AI reconciliation', desc: 'Conflicts are resolved using recency weighting, source trust scores, and manager context - 94% automatically.' },
  { num: '4', title: 'Human adjudication', desc: 'The 6% that needs judgment goes to managers in a clean review queue - no training required, 2 minutes per person.' },
  { num: '5', title: 'Living skills profiles', desc: 'Profiles update continuously. Downstream systems (ATS, LMS, talent marketplace) always get the current picture.' },
]

type Check = 'yes' | 'no' | 'partial' | 'none'
interface CompareRow {
  name: string
  core: string
  coreStyle: 'yes' | 'label'
  lms: string
  lmsStyle: Check
  marketplace: string
  marketplaceStyle: Check
}
const compareRows: { section: string; rows: CompareRow[] }[] = [
  {
    section: 'Skills Data',
    rows: [
      { name: 'Multi-source skills reconciliation', core: 'AI-automated, 94% hands-off', coreStyle: 'yes', lms: 'Not available', lmsStyle: 'no', marketplace: 'Self-reported only', marketplaceStyle: 'partial' },
      { name: 'Verified skills profiles (multi-source)', core: 'CV + LMS + Manager + Job data', coreStyle: 'yes', lms: 'LMS completions only', lmsStyle: 'partial', marketplace: 'Profile + endorsements', marketplaceStyle: 'partial' },
      { name: 'Real-time skills taxonomy (45K+ skills)', core: 'With market demand signals', coreStyle: 'yes', lms: 'Static catalog', lmsStyle: 'partial', marketplace: 'Limited taxonomy', marketplaceStyle: 'partial' },
    ],
  },
  {
    section: 'Workforce Intelligence',
    rows: [
      { name: 'Board-level workforce gap dashboards', core: 'Real-time, role-specific', coreStyle: 'yes', lms: 'Learning reports only', lmsStyle: 'no', marketplace: 'Marketplace activity', marketplaceStyle: 'partial' },
      { name: 'Critical role readiness scoring', core: 'Automated + manager input', coreStyle: 'yes', lms: 'Not available', lmsStyle: 'no', marketplace: 'Basic match scoring', marketplaceStyle: 'partial' },
    ],
  },
  {
    section: 'Integration & Platform',
    rows: [
      { name: 'HRIS write-back (live sync)', core: 'Workday, SAP, Oracle +', coreStyle: 'yes', lms: 'Varies by vendor', lmsStyle: 'partial', marketplace: 'Typically outbound only', marketplaceStyle: 'no' },
      { name: 'Time to first skills data', core: '1 day', coreStyle: 'label', lms: '4-12 weeks (implementation)', lmsStyle: 'none', marketplace: '2-6 weeks', marketplaceStyle: 'none' },
    ],
  },
]
const checkSymbol: Record<Check, { symbol: string; className: string }> = {
  yes: { symbol: '✓', className: 'text-green' },
  no: { symbol: '-', className: 'text-subtle' },
  partial: { symbol: '~', className: 'text-yellow' },
  none: { symbol: '', className: '' },
}

const testimonialOutcomes = [
  { num: '61%', color: 'text-green', label: 'reduction in external hiring costs in the first 6 months' },
  { num: '3 days', color: 'text-blue', label: 'from kickoff to live skills data across 8,400 employees' },
  { num: '94%', color: 'text-violet', label: 'of skill conflicts resolved without any HR team involvement' },
  { num: '2.1x', color: 'text-green', label: 'increase in internal mobility placements within 1 year' },
]

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-grad-hero py-14 lg:py-24 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute w-96 h-96 bg-gradient-to-br from-indigo-200 to-transparent rounded-full blur-3xl opacity-30 -top-32 -right-24" />
        <div className="absolute w-80 h-80 bg-gradient-to-br from-violet-100 to-transparent rounded-full blur-3xl opacity-30 -bottom-24 -left-20" />

        <div className="relative z-10 max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side */}
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-violet animate-pulse" />
                <span className="text-xs font-semibold text-violet">Skills Intelligence Platform - B2B</span>
              </div>

              {/* Headline */}
              <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-text">
                Every employee&apos;s <span className="bg-grad-primary bg-clip-text text-transparent">skills, finally in sync</span> across your org.
              </h1>

              {/* Subheading */}
              <p className="text-lg text-muted mb-8 max-w-xl leading-relaxed">
                CoreCatalyst reconciles skills data from CVs, LMS, managers, and job history into a single, trusted skills profile - so your workforce runs on what people can actually do, not what their job title says.
              </p>

              {/* CTAs */}
              <div className="flex items-center gap-4 mb-6">
                <a href="/demo" className="px-7 py-3 rounded-btn bg-grad-primary text-white font-semibold hover:opacity-90 transition-opacity shadow-md">
                  See it in action
                </a>
                <a href="/how-it-works" className="flex items-center gap-2 px-6 py-3 text-blue font-semibold hover:gap-3 transition-all">
                  How it works
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Note */}
              <div className="flex items-center gap-2 text-xs text-muted">
                <svg className="w-3.5 h-3.5 text-green stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                No IT setup required - connects to your HRIS in under a day
              </div>
            </div>

            {/* Right side - Widget */}
            <div className="relative">
              <HeroWidget />

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-6 bg-white rounded-xl border border-border shadow-lg px-4 py-3 flex items-center gap-3 max-w-[240px]">
                <div className="w-8 h-8 rounded-full bg-green flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <strong className="block text-xs text-text">2,847 skills reconciled today</strong>
                  <span className="text-[11px] text-muted">Across 312 employees - 94% automated</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-24 pt-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs font-semibold text-muted whitespace-nowrap">Trusted by people teams at</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="flex items-center justify-center gap-10 flex-wrap">
              {logos.map((logo, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue/20 to-violet/20" />
                  <span className="text-sm font-semibold text-muted">{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <RevealWrapper>
        <section className="py-14 lg:py-24 bg-white">
          <div className="max-w-site mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-4">
            <div>
              <SectionEyebrow icon={eyebrowIcons.warning}>The Workforce Readiness Gap</SectionEyebrow>
              <h2 className="font-sora text-[clamp(28px,3vw,44px)] font-extrabold leading-[1.15] tracking-[-.02em] mb-[18px] text-text">
                The skills crisis is real.<br />And it&apos;s getting worse.
              </h2>
              <p className="text-[17px] text-[#5c6587] mb-9 leading-[1.7] max-w-[560px]">
                The skills required to perform are moving faster than people are being equipped for. Meanwhile, the talent data you rely on is fragmented, outdated, and sitting in three different systems that don&apos;t talk to each other.
              </p>

              <div className="space-y-3.5">
                {[
                  {
                    bg: 'bg-red-50', stroke: 'text-red',
                    icon: (
                      <>
                        <circle cx="12" cy="12" r="10" />
                        <line x1="15" y1="9" x2="9" y2="15" />
                        <line x1="9" y1="9" x2="15" y2="15" />
                      </>
                    ),
                    title: 'Fragmented skills data',
                    desc: 'CV skills, LMS completions, manager assessments, and project history live in separate systems - none reconciled into a single truth.',
                  },
                  {
                    bg: 'bg-yellow-50', stroke: 'text-yellow',
                    icon: (
                      <>
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </>
                    ),
                    title: 'Invisible workforce potential',
                    desc: "Leaders can't see who has the skills to fill critical roles, so they hire externally - for roles their own people could do with light upskilling.",
                  },
                  {
                    bg: 'bg-violet-50', stroke: 'text-violet',
                    icon: (
                      <>
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                      </>
                    ),
                    title: 'Strategic decisions without data',
                    desc: 'C-suite and CHROs make talent decisions without real workforce intelligence - relying on headcount models that ignore actual skills and capacity.',
                  },
                ].map((item, i) => (
                  <RevealWrapper key={i} delay={i * 0.08}>
                    <div className="flex gap-4 p-[22px_24px] rounded-2xl border border-border bg-white shadow-card hover:shadow-hover hover:-translate-y-0.5 transition-all">
                      <div className={`w-[42px] h-[42px] rounded-xl flex items-center justify-center flex-shrink-0 ${item.bg}`}>
                        <svg className={`w-5 h-5 ${item.stroke}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          {item.icon}
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-sora font-bold text-[15px] mb-1 text-text">{item.title}</h3>
                        <p className="text-[13.5px] text-muted leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </RevealWrapper>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <div className="bg-grad-hero rounded-[20px] border border-border p-[36px_32px] mb-5">
                <div className="font-sora font-extrabold text-[72px] leading-none mb-2 bg-grad-primary bg-clip-text text-transparent">$8.5T</div>
                <div className="text-base font-medium text-[#5c6587] leading-relaxed max-w-[240px]">in unrealized revenue lost annually to workforce skills gaps globally</div>
              </div>
              <div className="grid grid-cols-2 gap-3.5">
                {miniStats.map((s, i) => (
                  <div key={i} className="bg-white rounded-[14px] border border-border shadow-card p-[20px_20px_16px]">
                    <div className={`font-sora font-extrabold text-3xl leading-none mb-1.5 ${s.color}`}>{s.num}</div>
                    <div className="text-[12.5px] font-medium text-muted leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* How It Works - 5 Steps */}
      <RevealWrapper>
        <section className="py-14 lg:py-24 bg-[#f8f9ff] border-y border-border">
          <div className="max-w-site mx-auto px-6">
            <div className="flex justify-center">
              <SectionEyebrow icon={eyebrowIcons.layers}>How CoreCatalyst works</SectionEyebrow>
            </div>
            <h2 className="font-sora text-[clamp(28px,3vw,44px)] font-extrabold leading-[1.15] tracking-[-.02em] mb-14 text-center text-text">
              From scattered data to<br />verified skills truth
            </h2>

            <StepTimeline steps={steps} />
          </div>
        </section>
      </RevealWrapper>

      {/* FEATURES BENTO */}
      <RevealWrapper>
        <section className="py-14 lg:py-24 bg-white">
          <div className="max-w-site mx-auto px-6">
            <div className="flex justify-center">
              <SectionEyebrow icon={eyebrowIcons.grid}>Platform capabilities</SectionEyebrow>
            </div>
            <h2 className="font-sora text-[clamp(28px,3vw,44px)] font-extrabold leading-[1.15] tracking-[-.02em] mb-14 text-center text-text">
              Everything a skills-powered<br />org actually needs
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Wide reconciliation card */}
              <RevealWrapper className="col-span-2 p-8 rounded-2xl border border-border bg-white shadow-card hover:shadow-hover hover:-translate-y-1 transition-all relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue opacity-[0.06]" />
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                </div>
                <h3 className="font-sora font-bold text-lg mb-2.5 text-text">Multi-source reconciliation engine</h3>
                <p className="text-[#5c6587] mb-6 max-w-2xl leading-[1.7] text-[14px]">
                  When your CV says Expert, LMS says Intermediate, and your manager says Advanced - CoreCatalyst doesn&apos;t pick one blindly. It weighs recency, evidence quality, and source trust to surface the most accurate level, automatically.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-4">
                  <div>
                    <div className="text-[11px] font-bold text-muted uppercase tracking-[.07em] mb-2.5">Raw inputs</div>
                    <div className="flex flex-col gap-2">
                      {[
                        {
                          label: 'SQL: Expert', src: 'CV', badge: 'bg-[#eef1ff] text-blue',
                          icon: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /></>,
                          iconColor: 'text-blue',
                        },
                        {
                          label: 'SQL: Intermediate', src: 'LMS', badge: 'bg-[#f5f3ff] text-violet',
                          icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></>,
                          iconColor: 'text-violet',
                        },
                        {
                          label: 'SQL: Advanced', src: 'Manager', badge: 'bg-[#e6f9ed] text-green',
                          icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /></>,
                          iconColor: 'text-green',
                        },
                      ].map((r, i) => (
                        <div key={i} className="flex items-center gap-2.5 px-3.5 py-2.5 bg-bg rounded-[10px] border border-border">
                          <svg className={`w-3.5 h-3.5 flex-shrink-0 ${r.iconColor}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">{r.icon}</svg>
                          <span className="text-[12.5px] font-semibold text-text flex-1">{r.label}</span>
                          <span className={`text-[10.5px] font-bold px-2.5 py-0.5 rounded-[10px] ${r.badge}`}>{r.src}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-center text-border">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-muted uppercase tracking-[.07em] mb-2.5">Reconciled truth</div>
                    <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-[14px] p-[18px_16px]">
                      <div className="text-[11px] font-bold text-green uppercase tracking-[.07em] mb-3">AI resolved - high confidence</div>
                      <div className="flex justify-between items-center py-[7px] border-b border-black/5">
                        <span className="text-[13px] font-semibold text-text">SQL</span>
                        <span className="text-[11.5px] font-semibold px-2.5 py-0.5 rounded-[10px] bg-[#e6f9ed] text-green">Advanced</span>
                      </div>
                      <div className="flex justify-between items-center py-[7px] border-b border-black/5">
                        <span className="text-[13px] font-semibold text-text">Confidence</span>
                        <span className="text-xs font-semibold text-blue">88%</span>
                      </div>
                      <div className="flex justify-between items-center py-[7px]">
                        <span className="text-[13px] font-semibold text-text">Basis</span>
                        <span className="text-[11.5px] text-muted">Mgr + LMS (recent)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealWrapper>

              {/* Skill Graph - tall */}
              <RevealWrapper delay={0.08} className="p-[30px_28px] rounded-2xl border border-border bg-white shadow-card flex flex-col justify-between hover:shadow-hover hover:-translate-y-1 transition-all relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-violet opacity-[0.06]" />
                <div>
                  <div className="w-11 h-11 rounded-xl bg-violet-50 text-violet flex items-center justify-center mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M6.3 6.3a8 8 0 000 11.4M17.7 17.7a8 8 0 000-11.4M3.5 3.5a14 14 0 000 17M20.5 20.5a14 14 0 000-17" /></svg>
                  </div>
                  <h3 className="font-sora font-bold text-lg mb-2 text-text">45K-node skills graph</h3>
                  <p className="text-[14px] text-[#5c6587] leading-[1.7]">Every skill is mapped to its adjacent skills, required progressions, and market demand signals - in 35 languages. Not just a list. An interconnected intelligence layer.</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {['Skill adjacency', 'Market demand', 'Career pathways'].map((c, i) => (
                    <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-bg text-text">{c}</span>
                  ))}
                </div>
              </RevealWrapper>

              {/* Workforce Intel */}
              <RevealWrapper className="p-[30px_28px] rounded-2xl border border-border bg-white shadow-card hover:shadow-hover hover:-translate-y-1 transition-all relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-green opacity-[0.06]" />
                <div className="w-11 h-11 rounded-xl bg-green-50 text-green flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                </div>
                <h3 className="font-sora font-bold text-lg mb-2 text-text">Workforce intelligence dashboards</h3>
                <p className="text-[14px] text-[#5c6587] leading-[1.7] mb-5">Board-ready views of your org&apos;s current skills coverage, gap clusters, and critical role readiness - sliced by team, level, or location.</p>
                <div className="flex flex-wrap gap-2">
                  {['Gap analysis', 'Risk scoring', 'Trend tracking'].map((c, i) => (
                    <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-bg text-text">{c}</span>
                  ))}
                </div>
              </RevealWrapper>

              {/* Internal Mobility */}
              <RevealWrapper delay={0.08} className="p-[30px_28px] rounded-2xl border border-border bg-white shadow-card hover:shadow-hover hover:-translate-y-1 transition-all relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-cyan opacity-[0.06]" />
                <div className="w-11 h-11 rounded-xl bg-cyan-50 text-cyan flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4" /><path d="M21 13v2a4 4 0 01-4 4H3" /></svg>
                </div>
                <h3 className="font-sora font-bold text-lg mb-2 text-text">Internal mobility matching</h3>
                <p className="text-[14px] text-[#5c6587] leading-[1.7] mb-5">Surface your best-fit internal candidates for every open role, project, or stretch assignment - ranked by verified skill match, not just title proximity.</p>
                <div className="flex flex-wrap gap-2">
                  {['Role matching', 'Gig matching'].map((c, i) => (
                    <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-bg text-text">{c}</span>
                  ))}
                </div>
              </RevealWrapper>

              {/* Open Platform */}
              <RevealWrapper delay={0.16} className="p-[30px_28px] rounded-2xl border border-border bg-white shadow-card hover:shadow-hover hover:-translate-y-1 transition-all relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue opacity-[0.06]" />
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /></svg>
                </div>
                <h3 className="font-sora font-bold text-lg mb-2 text-text">Open by design</h3>
                <p className="text-[14px] text-[#5c6587] leading-[1.7] mb-5">200+ pre-built connectors for HRIS, LMS, ATS, and productivity tools. Or build your own via REST API. Skills data flows to where decisions happen.</p>
                <div className="flex flex-wrap gap-2">
                  {['REST API', 'Webhooks', 'HRIS write-back'].map((c, i) => (
                    <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-bg text-text">{c}</span>
                  ))}
                </div>
              </RevealWrapper>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* Stats Section */}
      <RevealWrapper>
        <section className="py-14 lg:py-24 bg-bg">
          <div className="max-w-site mx-auto px-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-sora font-bold text-4xl sm:text-5xl text-blue mb-2">
                  <CountUpStat target={94} suffix="%" />
                </div>
                <p className="text-sm text-muted">of skill conflicts resolved without human review</p>
              </div>
              <div>
                <div className="font-sora font-bold text-4xl sm:text-5xl text-violet mb-2">
                  <CountUpStat target={45} suffix="K" />
                </div>
                <p className="text-sm text-muted">skills in the CoreCatalyst taxonomy across 35 languages</p>
              </div>
              <div>
                <div className="font-sora font-bold text-4xl sm:text-5xl text-blue mb-2">
                  <CountUpStat target={3} suffix="x" />
                </div>
                <p className="text-sm text-muted">faster internal mobility matching vs. manual HR processes</p>
              </div>
              <div>
                <div className="font-sora font-bold text-4xl sm:text-5xl text-violet mb-2">1 day</div>
                <p className="text-sm text-muted">average time from contract to live skills data in your stack</p>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* PERSONA TABS */}
      <RevealWrapper>
        <section className="py-14 lg:py-24 bg-white">
          <div className="max-w-site mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex justify-center">
                <SectionEyebrow icon={eyebrowIcons.users}>Built for every stakeholder</SectionEyebrow>
              </div>
              <h2 className="font-sora text-[clamp(28px,3vw,44px)] font-extrabold leading-[1.15] tracking-[-.02em] mb-[18px] text-text">
                One platform, three different<br />lenses on your workforce
              </h2>
              <p className="text-[17px] text-[#5c6587] leading-[1.7] max-w-2xl mx-auto">
                CoreCatalyst surfaces the right intelligence for the right person - from the CHRO&apos;s board deck to a manager&apos;s weekly one-on-one.
              </p>
            </div>
            <PersonaTabs />
          </div>
        </section>
      </RevealWrapper>

      {/* COMPARISON TABLE */}
      <RevealWrapper>
        <section className="py-14 lg:py-24 bg-[#f8f9ff] border-y border-border">
          <div className="max-w-site mx-auto px-6">
            <div className="text-center mb-12">
              <div className="flex justify-center">
                <SectionEyebrow icon={eyebrowIcons.scale}>How we compare</SectionEyebrow>
              </div>
              <h2 className="font-sora text-[clamp(28px,3vw,44px)] font-extrabold leading-[1.15] tracking-[-.02em] text-text">
                Skills reconciliation is the gap<br />no one else fills
              </h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-border shadow-card mt-12">
              <table className="w-full border-collapse min-w-[700px]">
                <thead>
                  <tr>
                    <th className="text-left p-[16px_24px] text-[13px] font-bold font-sora text-text bg-bg w-[38%]">Capability</th>
                    <th className="text-left p-[16px_24px] text-[13px] font-bold font-sora text-blue bg-[#eef1ff] w-[21%]">CoreCatalyst</th>
                    <th className="text-left p-[16px_24px] text-[13px] font-bold font-sora text-text bg-bg w-[20%]">LMS Platforms</th>
                    <th className="text-left p-[16px_24px] text-[13px] font-bold font-sora text-text bg-bg w-[21%]">Talent Marketplaces</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((sec, si) => (
                    <Fragment key={`sec-${si}`}>
                      <tr>
                        <td colSpan={4} className="p-[10px_24px] text-[10.5px] font-bold text-muted uppercase tracking-[.09em] bg-[#f8f9ff]">
                          {sec.section}
                        </td>
                      </tr>
                      {sec.rows.map((row, ri) => {
                        const lms = checkSymbol[row.lmsStyle]
                        const mkt = checkSymbol[row.marketplaceStyle]
                        const isLast = si === compareRows.length - 1 && ri === sec.rows.length - 1
                        return (
                          <tr key={`row-${si}-${ri}`} className={`hover:bg-[#f5f7ff] transition-colors ${isLast ? '' : 'border-b border-border'}`}>
                            <td className="p-[16px_24px] text-[13.5px] text-text">{row.name}</td>
                            <td className="p-[16px_24px] text-[13.5px] text-text bg-[#fafbff] font-medium">
                              {row.coreStyle === 'yes' ? (
                                <>
                                  <span className="text-green text-[15px]">✓</span> {row.core}
                                </>
                              ) : (
                                <span className="text-green">{row.core}</span>
                              )}
                            </td>
                            <td className="p-[16px_24px] text-[13.5px] text-text bg-[#f8f9ff]">
                              {lms.symbol && <span className={`${lms.className} text-[15px]`}>{lms.symbol}</span>} {row.lms}
                            </td>
                            <td className="p-[16px_24px] text-[13.5px] text-text">
                              {mkt.symbol && <span className={`${mkt.className} text-[15px]`}>{mkt.symbol}</span>} {row.marketplace}
                            </td>
                          </tr>
                        )
                      })}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* TESTIMONIAL */}
      <RevealWrapper>
        <section className="py-14 lg:py-24 bg-grad-hero border-y border-border">
          <div className="max-w-site mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionEyebrow icon={eyebrowIcons.quote}>Customer story</SectionEyebrow>
              <p className="font-sora text-xl sm:text-[26px] font-bold text-text leading-[1.4] mb-7">
                <span className="block text-[60px] leading-[.8] text-blue/20 mb-2" style={{ fontFamily: 'Georgia, serif' }}>&ldquo;</span>
                We had three systems telling us three different things about our engineers&apos; Python skills. CoreCatalyst resolved it in hours. For the first time, our skills data actually matches what our teams can do.
              </p>
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-grad-primary text-white text-base font-bold flex items-center justify-center flex-shrink-0">
                  MR
                </div>
                <div>
                  <div className="font-sora text-[15px] font-bold text-text">Meredith Roark</div>
                  <div className="text-[13px] text-muted">VP People & Talent, Vantage Group (8,400 employees)</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {testimonialOutcomes.map((o, i) => (
                <div key={i} className="bg-white rounded-2xl border border-border shadow-card p-[22px_20px]">
                  <div className={`font-sora font-extrabold text-4xl leading-none mb-1.5 ${o.color}`}>{o.num}</div>
                  <div className="text-[13px] font-medium text-muted leading-[1.5]">{o.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* CTA Section */}
      <RevealWrapper>
        <section className="py-14 lg:py-24 bg-white">
          <div className="max-w-[780px] mx-auto px-4 sm:px-6 text-center">
            <div className="flex justify-center">
              <SectionEyebrow icon={eyebrowIcons.bolt}>Get started</SectionEyebrow>
            </div>
            <h2 className="font-sora text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.15] tracking-[-.02em] mb-[18px] text-text">
              Your workforce is more capable<br />than your data shows.
            </h2>
            <p className="text-[17px] text-[#5c6587] leading-[1.7] mb-10 mx-auto">
              Stop making talent decisions in the dark. CoreCatalyst gives you a verified, living picture of what your people can do - and where to take them next.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="/demo"
                className="px-9 py-[15px] rounded-xl bg-grad-primary text-white font-semibold text-[15.5px] shadow-[0_5px_20px_rgba(76,110,245,.35)] hover:shadow-[0_8px_28px_rgba(76,110,245,.45)] hover:-translate-y-0.5 transition-all"
              >
                Request a demo
              </a>
              <a
                href="/how-it-works"
                className="px-9 py-3.5 rounded-xl border-[1.5px] border-border text-text font-semibold text-[15.5px] bg-white hover:border-indigo hover:text-blue hover:bg-[#eef1ff] transition-all"
              >
                Explore the platform
              </a>
            </div>
            <div className="flex items-center justify-center gap-6 flex-wrap text-[13px] font-medium text-muted mt-10">
              {['No commitment required', 'Live with real data in 1 day', 'SOC 2 Type II certified', 'GDPR compliant'].map((t, i) => (
                <span key={i} className="flex items-center gap-[7px]">
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
