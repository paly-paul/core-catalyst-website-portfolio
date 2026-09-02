import { Metadata } from 'next'
import Link from 'next/link'
import { RevealWrapper } from '../../components/ui/RevealWrapper'

export const metadata: Metadata = {
  title: 'About CoreCatalyst - Why We Exist',
  description:
    'We started because job titles were lying. CoreCatalyst was built to close the gap between what organizations think their people can do and what they actually can do.',
}

const heroStats = [
  { val: '45K', label: 'Skills mapped in our taxonomy' },
  { val: '94%', label: 'Conflicts auto-resolved on day one' },
  { val: '2 wks', label: 'Average time to first live report' },
  { val: '3x', label: 'Faster internal mobility decisions' },
]

const timeline = [
  {
    year: '2021',
    title: 'The insight',
    body: 'Founding team identifies the skill reconciliation gap while advising a 12,000-person enterprise on a Workday migration. Three source systems, zero agreement on what anyone could do.',
  },
  {
    year: '2022',
    title: 'yourskills.ai launches',
    body: 'The individual-facing layer goes live: a personal skills passport that aggregates credentials, work history, and assessments into one verified profile. Early signs that the employer side has an even bigger problem.',
  },
  {
    year: '2023',
    title: 'The enterprise pivot',
    body: "After 60+ conversations with HR leaders, a clear pattern: the problem isn't the employee's profile - it's the organization's inability to reconcile signals across systems. CoreCatalyst R&D begins. The 45K-node taxonomy is seeded.",
  },
  {
    year: '2024',
    title: 'First enterprise pilots',
    body: 'Three design partners go live. 94% auto-resolution rate on first run. HRIS write-back to Workday ships. The pattern holds: two weeks to first report, significant reduction in manual reconciliation hours.',
  },
  {
    year: '2025',
    title: 'CoreCatalyst GA',
    body: 'General availability with three-tier pricing. Board reporting module ships. SAP and Oracle write-back connectors added. The team grows to 28 people across product, engineering, and customer success.',
  },
]

const values = [
  {
    icon: '🔍',
    title: 'Truth over tidiness',
    body: "We'd rather surface a conflict than paper over it. Skill data that disagrees with itself is a fact to be resolved, not a discrepancy to be hidden.",
  },
  {
    icon: '⚡',
    title: 'Speed earns trust',
    body: 'A pilot that goes live in two weeks proves more than a six-month RFP process. We ship fast, show results early, and let the numbers make the case.',
  },
  {
    icon: '🔒',
    title: 'Data belongs to you',
    body: "Your employees' skill data is yours - full stop. We process it, we never own it. No model training on customer data, ever.",
  },
  {
    icon: '🤝',
    title: 'Humans make the call',
    body: 'The engine recommends. The manager decides. We automate the reconciliation, not the judgment. Every disputed skill goes to a human for adjudication.',
  },
]

const team = [
  {
    initials: 'RK',
    name: 'Ravi Krishnamurthy',
    title: 'Co-founder & CEO',
    bio: 'Former VP People Technology at a 30,000-person manufacturing enterprise. Spent 8 years watching skill data contradict itself across every system he touched. Built CoreCatalyst to fix the problem at source.',
    wrap: 'from-indigo-50 to-violet-50',
    avatar: 'from-blue to-violet',
  },
  {
    initials: 'SL',
    name: 'Sofia Lindqvist',
    title: 'Co-founder & CTO',
    bio: 'Previously Staff Engineer at a major talent intelligence platform, where she led the graph infrastructure that powers real-time skill matching at scale. Designed the 45K-node taxonomy and conflict resolution engine.',
    wrap: 'from-green-50 to-emerald-50',
    avatar: 'from-green to-cyan',
  },
  {
    initials: 'MO',
    name: 'Marcus Osei-Bonsu',
    title: 'VP Customer Success',
    bio: '10 years running enterprise HR transformations at two global consulting firms. Has personally implemented Workday at 14 organizations. Owns the relationship from pilot kick-off to full platform rollout.',
    wrap: 'from-orange-50 to-rose-50',
    avatar: 'from-orange to-red',
  },
]

const advisors = [
  { initials: 'AW', name: 'Anika Walters', role: 'Former CHRO, Fortune 500 retail', avatar: 'from-blue to-violet' },
  { initials: 'PK', name: 'Priya Kapoor', role: 'Partner, Future of Work VC', avatar: 'from-green to-cyan' },
  { initials: 'DH', name: 'David Holloway', role: 'Ex-Workday product, 12 yrs', avatar: 'from-orange to-yellow' },
  { initials: 'YM', name: 'Yuki Matsuda', role: 'NLP research lead, ex-Google', avatar: 'from-cyan to-blue' },
]

const backers = [
  'Workforce Ventures',
  'Talent Capital Partners',
  'Horizon Seed Fund',
  'Future of Work Studio',
  'Angel: ex-Workday execs',
]

const openRoles = [
  'Senior Backend Engineer',
  'Product Designer',
  'Enterprise Sales (EMEA)',
  'ML Engineer - Taxonomy',
  'Implementation Consultant',
  'Customer Success Manager',
]

export default function About() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative overflow-hidden bg-grad-hero py-24">
        <div
          className="absolute inset-0 opacity-35 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #c7d2fe 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative max-w-site mx-auto px-6 grid grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 mb-6">
              <span className="text-xs font-semibold text-violet">Our Story</span>
            </div>
            <h1 className="font-sora text-6xl font-bold leading-tight mb-6 text-text">
              We started because<br />
              <span className="bg-grad-primary bg-clip-text text-transparent">job titles were lying.</span>
            </h1>
            <p className="text-lg text-muted mb-4 leading-relaxed">
              Most organizations knew what roles their people held. Almost none knew what those people could actually do - and the gap was costing them dearly.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              CoreCatalyst was built to close that gap: not with another skill survey, but with a reconciliation engine that works with the data that already exists across your systems.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {heroStats.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border border-border p-5 shadow-card">
                <div className="font-sora text-3xl font-bold text-blue mb-1">{s.val}</div>
                <div className="text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <RevealWrapper>
        <section className="py-24 bg-white">
          <div className="max-w-site mx-auto px-6 grid grid-cols-[320px_1fr] gap-16">
            <div>
              <div className="text-xs font-bold text-blue uppercase tracking-wider mb-3">The problem we saw</div>
              <h2 className="font-sora text-3xl font-bold mb-6 text-text">Skills data exists. It just doesn&apos;t agree with itself.</h2>
              <div className="text-lg italic text-text border-l-4 border-violet pl-4 leading-relaxed">
                &ldquo;Every HRIS said something different about the same person&apos;s skills. We wanted to know who was ready for what - and nobody could tell us.&rdquo;
              </div>
            </div>
            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                The team behind CoreCatalyst spent years embedded in large enterprise HR functions - as consultants, as practitioners, as system architects. The pattern was always the same:{' '}
                <strong className="text-text">organizations had skill data in abundance, scattered across Workday, LinkedIn, LMS platforms, performance reviews, and manager notes.</strong> None of it matched. None of it was trusted.
              </p>
              <p>
                When a CHRO wanted to know if the organization had the skills to navigate an AI transition, the answer took three months and two off-cycle surveys to produce. When a manager wanted to know who on their team was ready for a stretch role, they picked up the phone and asked around. When HR Ops tried to keep Workday current, they ran manual reconciliation sprints that consumed entire weeks.
              </p>
              <p>
                <strong className="text-text">The root cause wasn&apos;t lack of data. It was conflict.</strong> The same person had a different skill profile in every system they&apos;d ever touched - and there was no engine to resolve the contradiction.
              </p>
              <p>
                In 2023, the yourskills.ai team started building that engine. Not a survey tool. Not another profile. A reconciliation layer that sits beneath your existing systems, absorbs their conflicting signals, applies a 45,000-node taxonomy and a weighted conflict-resolution model, and writes a single trusted skills record back to your HRIS.
              </p>
              <p>
                CoreCatalyst is that engine, packaged for enterprise HR teams who need answers in weeks - not months - and who can&apos;t afford to ask their workforce to fill in yet another form.
              </p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* TIMELINE */}
      <RevealWrapper>
        <section className="py-24 bg-bg">
          <div className="max-w-site mx-auto px-6">
            <h2 className="font-sora text-4xl font-bold mb-16 text-text">How we got here</h2>
            <div className="relative pl-8 border-l-2 border-border space-y-12">
              {timeline.map((t, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-grad-primary border-4 border-bg" />
                  <div className="text-sm font-bold text-blue mb-1">{t.year}</div>
                  <div className="bg-white rounded-2xl border border-border p-6">
                    <strong className="block font-sora text-lg text-text mb-2">{t.title}</strong>
                    <span className="text-muted leading-relaxed">{t.body}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* VALUES */}
      <RevealWrapper>
        <section className="py-24 bg-white">
          <div className="max-w-site mx-auto px-6">
            <div className="text-xs font-bold text-blue uppercase tracking-wider mb-3">What we believe</div>
            <h2 className="font-sora text-4xl font-bold mb-4 text-text">Four things we won&apos;t compromise on</h2>
            <p className="text-lg text-muted mb-12 max-w-2xl">These aren&apos;t wall posters. They&apos;re the decisions we make when trade-offs get hard.</p>
            <div className="grid grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border bg-white hover:shadow-card transition-shadow">
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="font-sora font-bold text-lg mb-2 text-text">{v.title}</h3>
                  <p className="text-muted leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* TEAM */}
      <RevealWrapper>
        <section className="py-24 bg-bg">
          <div className="max-w-site mx-auto px-6">
            <div className="text-xs font-bold text-blue uppercase tracking-wider mb-3">The team</div>
            <h2 className="font-sora text-4xl font-bold mb-4 text-text">Built by people who&apos;ve been in HR</h2>
            <p className="text-lg text-muted mb-12 max-w-2xl">
              Not consultants theorizing about skills. Practitioners who&apos;ve lived the problem and engineers who&apos;ve solved hard data problems before.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-16">
              {team.map((m, i) => (
                <div key={i} className="bg-white rounded-2xl border border-border overflow-hidden">
                  <div className={`h-28 bg-gradient-to-br ${m.wrap} flex items-end p-5`}>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${m.avatar} text-white font-sora font-bold text-lg flex items-center justify-center border-4 border-white`}>
                      {m.initials}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="font-sora font-bold text-text">{m.name}</div>
                    <div className="text-sm text-blue font-semibold mb-3">{m.title}</div>
                    <p className="text-sm text-muted leading-relaxed mb-4">{m.bio}</p>
                    <div className="flex gap-3">
                      <a href="#" className="text-xs font-semibold text-blue">LinkedIn</a>
                      {i === 1 && <a href="#" className="text-xs font-semibold text-blue">GitHub</a>}
                      {i === 0 && <a href="#" className="text-xs font-semibold text-blue">Twitter</a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-sora text-xl font-bold mb-6 text-text">Advisory board</h3>
              <div className="grid grid-cols-4 gap-4">
                {advisors.map((a, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-2xl border border-border p-4">
                    <div className={`w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-br ${a.avatar} text-white text-xs font-bold flex items-center justify-center`}>
                      {a.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text">{a.name}</div>
                      <div className="text-xs text-muted">{a.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* BACKERS */}
      <RevealWrapper>
        <section className="py-16 bg-white border-y border-border">
          <div className="max-w-site mx-auto px-6 text-center">
            <h2 className="font-sora text-2xl font-bold mb-8 text-text">Backed by investors who understand enterprise HR</h2>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {backers.map((b, i) => (
                <span key={i} className="px-5 py-2.5 rounded-full border border-border text-sm font-semibold text-muted">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* JOIN US */}
      <RevealWrapper>
        <section className="py-24 bg-grad-hero text-center">
          <div className="max-w-site mx-auto px-6">
            <h2 className="font-sora text-5xl font-bold mb-4 text-text">
              We&apos;re hiring people who<br />
              <span className="bg-grad-primary bg-clip-text text-transparent">care about getting it right.</span>
            </h2>
            <p className="text-lg text-muted mb-10">Small team, hard problem, real customers. If that sounds interesting, we&apos;d like to talk.</p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {openRoles.map((r, i) => (
                <a key={i} href="/careers" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-border text-sm font-semibold text-text hover:border-blue transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-green" />
                  {r}
                </a>
              ))}
            </div>
            <Link href="/careers" className="inline-flex items-center gap-2 text-blue font-semibold hover:gap-3 transition-all">
              See all open roles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </RevealWrapper>
    </div>
  )
}
