import { Metadata } from 'next'
import { RevealWrapper } from '../../components/ui/RevealWrapper'
import RolesList from './RolesList'

export const metadata: Metadata = {
  title: 'Careers at CoreCatalyst',
  description:
    "Hard problem, small team, real impact. We're fixing how enterprise organizations understand their own workforce.",
}

const snapshot = [
  { icon: '👥', bg: '#e0e7ff', label: 'Team size', val: '28 people' },
  { icon: '🌍', bg: '#dcfce7', label: 'Countries', val: '7' },
  { icon: '💻', bg: '#f0f9ff', label: 'Engineering', val: '14 people' },
  { icon: '📝', bg: '#ede9fe', label: 'Remote-first', val: 'Yes' },
  { icon: '🎉', bg: '#fff7ed', label: 'Founded', val: '2022' },
  { icon: '📈', bg: '#fef9c3', label: 'Stage', val: 'Series A (2024)' },
]

const numbers = [
  { val: '28', label: 'Team members' },
  { val: '7', label: 'Countries represented' },
  { val: '6', label: 'Open roles right now' },
  { val: '100%', label: 'Remote-friendly' },
]

const why = [
  {
    icon: '🧠',
    bg: '#e0e7ff',
    title: 'A problem that actually needs solving',
    body: "Skills data chaos is real and expensive. Every enterprise HR leader we talk to has the same problem. You'll be working on something customers genuinely need, not something we're hoping they'll want.",
  },
  {
    icon: '🚀',
    bg: '#dcfce7',
    title: 'Early enough to matter',
    body: 'We have paying customers and a working product, but the core architecture is still being shaped. The decisions you make in the next 12 months will be in the product for years.',
  },
  {
    icon: '🛠',
    bg: '#ede9fe',
    title: 'Technically interesting',
    body: "Graph traversal at scale, NLP-driven taxonomy matching, weighted conflict resolution across heterogeneous data sources - this isn't a CRUD app. The engineering problems are genuinely hard.",
  },
  {
    icon: '🤝',
    bg: '#f0f9ff',
    title: 'A team that treats people like adults',
    body: "No mandatory office days. No performance theatre. We care about output, not hours. We write things down, make decisions transparently, and don't require people to be always-on.",
  },
]

const benefits = [
  { icon: '💵', title: 'Competitive salary + equity', body: "Market-rate salaries benchmarked quarterly, plus meaningful equity with a standard 4-year vest and 1-year cliff. We're transparent about ranges at offer stage." },
  { icon: '🏠', title: 'Remote-first, genuinely', body: "Work from anywhere. We have offices in London, San Francisco, and Berlin if you want them - but there's no expectation you use them. Async by default." },
  { icon: '🏡', title: 'Home office budget', body: '£/€/$1,500 to set up your home workspace when you join. Annual £/€/$500 top-up. We also cover a co-working membership if you prefer not to work from home.' },
  { icon: '📚', title: 'Learning budget', body: '£/€/$2,000 per year for courses, books, conferences, or certifications. No approval process - spend it on what actually helps you grow.' },
  { icon: '✅', title: 'Flexible time off', body: "Unlimited PTO with a minimum of 25 days encouraged. We track whether people are taking enough time off, not whether they're taking too much." },
  { icon: '💙', title: 'Health & wellbeing', body: 'Private health insurance (UK/EU/US), mental health support via Spill, and a £/€/$100/month wellbeing allowance to spend however you choose.' },
]

const process = [
  { num: '1', label: 'Application review', sub: 'We read every application. Response within 5 days.' },
  { num: '2', label: 'Intro call', sub: '30 min with the hiring manager. Two-way conversation.' },
  { num: '3', label: 'Skills interview', sub: 'Technical or role-specific. Take-home or live - your choice.' },
  { num: '4', label: 'Final & offer', sub: 'Meet the team. Offer within 2 days of final stage.' },
]

export default function Careers() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative overflow-hidden bg-grad-hero py-24">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #c7d2fe 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative max-w-site mx-auto px-6 grid grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 mb-6">
              <span className="text-xs font-semibold text-violet">We&apos;re hiring</span>
            </div>
            <h1 className="font-sora text-6xl font-bold leading-tight mb-6 text-text">
              Hard problem.<br />
              Small team.<br />
              <span className="bg-grad-primary bg-clip-text text-transparent">Real impact.</span>
            </h1>
            <p className="text-lg text-muted mb-8 max-w-lg leading-relaxed">
              We&apos;re fixing how enterprise organizations understand their own workforce. It&apos;s a genuinely unsolved problem, and we&apos;re early enough that the people joining now will shape how it gets solved.
            </p>
            <a href="#open-roles" className="inline-flex items-center gap-2 text-blue font-semibold hover:gap-3 transition-all">
              See open roles ↓
            </a>
          </div>
          <div className="bg-white rounded-2xl border border-border shadow-card p-6">
            <div className="text-xs font-bold text-muted uppercase tracking-wider mb-4">Team snapshot — September 2025</div>
            <div className="space-y-3">
              {snapshot.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0" style={{ background: s.bg }}>
                    {s.icon}
                  </div>
                  <span className="flex-1 text-sm text-muted">{s.label}</span>
                  <span className="text-sm font-bold text-text">{s.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="py-12 bg-white border-y border-border">
        <div className="max-w-site mx-auto px-6 grid grid-cols-4 gap-8 text-center">
          {numbers.map((n, i) => (
            <div key={i}>
              <div className="font-sora text-4xl font-bold text-blue mb-1">{n.val}</div>
              <div className="text-sm text-muted">{n.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <RevealWrapper>
        <section className="py-24 bg-bg">
          <div className="max-w-site mx-auto px-6">
            <div className="text-xs font-bold text-blue uppercase tracking-wider mb-3">Why CoreCatalyst</div>
            <h2 className="font-sora text-4xl font-bold mb-12 text-text">What makes this different from other start-ups</h2>
            <div className="grid grid-cols-2 gap-6">
              {why.map((w, i) => (
                <div key={i} className="flex gap-4 bg-white rounded-2xl border border-border p-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: w.bg }}>
                    {w.icon}
                  </div>
                  <div>
                    <h3 className="font-sora font-bold text-lg mb-2 text-text">{w.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{w.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* BENEFITS */}
      <RevealWrapper>
        <section className="py-24 bg-white">
          <div className="max-w-site mx-auto px-6">
            <div className="text-xs font-bold text-blue uppercase tracking-wider mb-3">Benefits</div>
            <h2 className="font-sora text-4xl font-bold mb-12 text-text">What we offer</h2>
            <div className="grid grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border">
                  <div className="text-3xl mb-4">{b.icon}</div>
                  <h3 className="font-sora font-bold text-lg mb-2 text-text">{b.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* OPEN ROLES */}
      <section className="py-24 bg-bg" id="open-roles">
        <div className="max-w-site mx-auto px-6">
          <RolesList />
        </div>
      </section>

      {/* PROCESS */}
      <RevealWrapper>
        <section className="py-24 bg-white">
          <div className="max-w-site mx-auto px-6">
            <h2 className="font-sora text-4xl font-bold mb-3 text-text text-center">Our hiring process</h2>
            <p className="text-lg text-muted mb-16 text-center max-w-xl mx-auto">
              Four steps, no surprises. We respect your time - if it&apos;s not working, we&apos;ll tell you quickly.
            </p>
            <div className="grid grid-cols-4 gap-6">
              {process.map((p, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-grad-primary text-white flex items-center justify-center font-sora font-bold text-lg mx-auto mb-4">
                    {p.num}
                  </div>
                  <div className="font-sora font-bold text-text mb-1">{p.label}</div>
                  <div className="text-sm text-muted">{p.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* CTA */}
      <RevealWrapper>
        <section className="py-24 bg-grad-hero text-center">
          <div className="max-w-site mx-auto px-6">
            <h2 className="font-sora text-4xl font-bold mb-4 text-text">
              Don&apos;t see the right role?<br />
              <span className="bg-grad-primary bg-clip-text text-transparent">Reach out anyway.</span>
            </h2>
            <p className="text-lg text-muted mb-8 max-w-xl mx-auto">
              If you think you&apos;d be a strong fit for what we&apos;re building, we&apos;d still like to hear from you. We keep speculative applications on file and reach out when something relevant opens.
            </p>
            <a href="mailto:careers@corecatalyst.ai" className="inline-block px-8 py-4 rounded-btn bg-grad-primary text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg">
              Send a speculative application →
            </a>
          </div>
        </section>
      </RevealWrapper>
    </div>
  )
}
