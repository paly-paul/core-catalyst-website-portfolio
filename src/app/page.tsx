import { Metadata } from 'next'
import { RevealWrapper } from '../components/ui/RevealWrapper'

export const metadata: Metadata = {
  title: 'CoreCatalyst - The Skills Operating System',
  description:
    'Turn fragmented HR data into a verified, board-ready picture of workforce readiness.',
}

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-grad-hero py-24 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute w-96 h-96 bg-gradient-to-br from-indigo-200 to-transparent rounded-full blur-3xl opacity-30 -top-32 -right-24" />
        <div className="absolute w-80 h-80 bg-gradient-to-br from-violet-100 to-transparent rounded-full blur-3xl opacity-30 -bottom-24 -left-20" />

        <div className="relative z-10 max-w-site mx-auto px-6">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Left side */}
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-violet animate-pulse" />
                <span className="text-xs font-semibold text-violet">Skills Intelligence Platform</span>
              </div>

              {/* Headline */}
              <h1 className="font-sora text-6xl font-bold leading-tight mb-6 text-text">
                Every employee's <span className="bg-grad-primary bg-clip-text text-transparent">skills, finally in sync</span> across your org.
              </h1>

              {/* Subheading */}
              <p className="text-lg text-muted mb-8 max-w-xl leading-relaxed">
                CoreCatalyst reconciles skills data from CVs, LMS, managers, and job history into a single, trusted skills profile - so your workforce runs on what people can actually do, not what their job title says.
              </p>

              {/* CTAs */}
              <div className="flex items-center gap-4 mb-6">
                <button className="px-7 py-3 rounded-btn bg-grad-primary text-white font-semibold hover:opacity-90 transition-opacity shadow-md">
                  See it in action
                </button>
                <button className="flex items-center gap-2 px-6 py-3 text-blue font-semibold hover:gap-3 transition-all">
                  How it works
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
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
              <div className="bg-white rounded-2xl border border-border shadow-lg overflow-hidden">
                {/* Widget Header */}
                <div className="px-5 py-4 bg-gray-50 border-b border-border flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider ml-1">Skills Reconciliation Engine</span>
                </div>

                {/* Widget Body */}
                <div className="p-5">
                  {/* Conflicts */}
                  <div className="mb-4">
                    <div className="text-xs font-bold text-muted uppercase tracking-wider mb-3">Resolving conflicts</div>

                    {/* Skill Conflict */}
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3.5 mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-text">Python</span>
                        <div className="flex gap-2">
                          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-50 text-blue">CV: Expert</span>
                          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-violet-50 text-violet">LMS: Intermediate</span>
                          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-50 text-green">Mgr: Advanced</span>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <span className="inline-block text-xs font-bold px-2 py-1 bg-yellow-100 text-amber-700 rounded-full">Conflict</span>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3.5 mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-text">Data Analysis</span>
                        <div className="flex gap-2">
                          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-50 text-blue">CV: Advanced</span>
                          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-50 text-green">Mgr: Intermediate</span>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <span className="inline-block text-xs font-bold px-2 py-1 bg-yellow-100 text-amber-700 rounded-full">Conflict</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-border my-4" />

                  {/* Resolved Section */}
                  <div className="mb-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-blue uppercase tracking-wider mb-3">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      AI Reconciled - Suggested Levels
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-text">Python</span>
                        <span className="text-xs font-semibold text-green flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green" />
                          Expert
                        </span>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-text">Data Analysis</span>
                        <span className="text-xs font-semibold text-green flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green" />
                          Advanced
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 px-3 py-2 rounded-lg bg-blue text-white font-semibold text-sm hover:opacity-90 transition-opacity">
                      Accept
                    </button>
                    <button className="flex-1 px-3 py-2 rounded-lg bg-bg border border-border text-text font-semibold text-sm hover:bg-border transition-colors">
                      Review
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    <div className="bg-bg rounded-lg p-2 text-center">
                      <div className="text-xs text-muted font-semibold">Employees</div>
                      <div className="text-sm font-bold text-text">12.4K</div>
                    </div>
                    <div className="bg-bg rounded-lg p-2 text-center">
                      <div className="text-xs text-muted font-semibold">Skills Mapped</div>
                      <div className="text-sm font-bold text-text">847K</div>
                    </div>
                    <div className="bg-bg rounded-lg p-2 text-center">
                      <div className="text-xs text-muted font-semibold">Accuracy</div>
                      <div className="text-sm font-bold text-text">94%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Logos */}
      <section className="py-12 bg-white border-y border-border">
        <div className="max-w-site mx-auto px-6">
          <p className="text-center text-sm text-muted font-semibold mb-8">Trusted by enterprise HR teams</p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            <div className="text-2xl font-bold text-muted/40">Workday</div>
            <div className="text-2xl font-bold text-muted/40">SAP</div>
            <div className="text-2xl font-bold text-muted/40">Oracle</div>
            <div className="text-2xl font-bold text-muted/40">BambooHR</div>
            <div className="text-2xl font-bold text-muted/40">Cornerstone</div>
            <div className="text-2xl font-bold text-muted/40">SuccessFactors</div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <RevealWrapper>
        <section className="py-24 bg-white">
          <div className="max-w-site mx-auto px-6">
            <h2 className="font-sora text-5xl font-bold mb-16 text-center text-text">
              The skills crisis is real.<br />And it's getting worse.
            </h2>

            <div className="grid grid-cols-3 gap-8">
              {[
                {
                  title: 'Fragmented skills data',
                  desc: 'CVs, LMS, managers, and assessments all disagree. You trust none of them.',
                },
                {
                  title: 'Invisible workforce potential',
                  desc: 'Your actual talent is buried across 5 systems. Nobody sees the real picture.',
                },
                {
                  title: 'Strategic decisions without data',
                  desc: 'Mobility, learning, and succession planning still happen on gut feel.',
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border bg-white hover:shadow-card transition-shadow">
                  <h3 className="font-sora font-bold text-lg mb-3 text-text">{item.title}</h3>
                  <p className="text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* How It Works - 5 Steps */}
      <RevealWrapper>
        <section className="py-24 bg-bg">
          <div className="max-w-site mx-auto px-6">
            <h2 className="font-sora text-5xl font-bold mb-20 text-center text-text">
              From scattered data to<br />verified skills truth
            </h2>

            <div className="space-y-8">
              {[
                { num: '1', title: 'Connect your sources', desc: 'CVs, LMS, assessments, job history, manager input.' },
                { num: '2', title: 'Ingest and normalise', desc: 'Skills language aligned to a 45K-node taxonomy.' },
                { num: '3', title: 'AI reconciliation', desc: 'Conflict resolution with confidence scoring.' },
                { num: '4', title: 'Human adjudication', desc: 'People leaders validate, dispute, or evolve.' },
                { num: '5', title: 'Living skills profiles', desc: 'Real-time, trusted, ready for every use case.' },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-grad-primary text-white flex items-center justify-center font-sora font-bold text-lg">
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sora font-bold text-xl mb-2 text-text">{step.title}</h3>
                    <p className="text-muted">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* Stats Section */}
      <RevealWrapper>
        <section className="py-24 bg-white">
          <div className="max-w-site mx-auto px-6">
            <div className="grid grid-cols-3 gap-12 text-center">
              <div>
                <div className="font-sora font-bold text-6xl text-blue mb-2">10K+</div>
                <p className="text-muted">Employees mapped across customer base</p>
              </div>
              <div>
                <div className="font-sora font-bold text-6xl text-violet mb-2">94%</div>
                <p className="text-muted">Data accuracy lift vs. source systems</p>
              </div>
              <div>
                <div className="font-sora font-bold text-6xl text-green mb-2">6w</div>
                <p className="text-muted">Time-to-value for new deployment</p>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* CTA Section */}
      <RevealWrapper>
        <section className="py-24 bg-grad-hero">
          <div className="max-w-site mx-auto px-6 text-center">
            <h2 className="font-sora text-5xl font-bold mb-6 text-text">
              Your workforce is more capable<br />than your data shows.
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              See how CoreCatalyst reveals the real skills, experience, and potential hidden in your organization.
            </p>
            <button className="px-8 py-4 rounded-btn bg-grad-primary text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg">
              See it live in 30 minutes
            </button>
          </div>
        </section>
      </RevealWrapper>
    </div>
  )
}
