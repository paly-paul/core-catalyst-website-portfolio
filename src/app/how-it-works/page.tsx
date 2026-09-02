import { Metadata } from 'next'
import { RevealWrapper } from '../../components/ui/RevealWrapper'

export const metadata: Metadata = {
  title: 'How CoreCatalyst Works - Skills Reconciliation Engine',
  description: 'See how CoreCatalyst ingests, reconciles, and enriches skills data from every source.',
}

export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: 'Connect your sources',
      desc: 'CVs, LMS, assessments, job history, manager input - all connected.',
      points: ['Secure API connectors', 'Pre-built integrations', 'Custom data imports'],
    },
    {
      num: 2,
      title: 'Ingest and normalise',
      desc: 'Skills language aligned to a 45K-node taxonomy.',
      points: ['Auto-language mapping', 'Semantic enrichment', 'Data quality checks'],
    },
    {
      num: 3,
      title: 'AI reconciliation',
      desc: 'Conflict resolution engine with confidence scoring.',
      points: ['Multi-source conflicts', 'Confidence weighting', 'Anomaly detection'],
    },
    {
      num: 4,
      title: 'Human adjudication',
      desc: 'People leaders validate, dispute, or evolve.',
      points: ['Targeted review queues', 'Dispute workflow', 'Approval tracking'],
    },
    {
      num: 5,
      title: 'Living skills profiles',
      desc: 'Real-time, trusted, ready for every use case.',
      points: ['API-first architecture', 'HRIS write-back', 'Compliance audit trail'],
    },
  ]

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-grad-hero py-24 relative overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-br from-indigo-200 to-transparent rounded-full blur-3xl opacity-30 -top-32 -right-24" />
        <div className="max-w-site mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
              <span className="text-xs font-semibold text-blue">The Engine</span>
            </div>
            <h1 className="font-sora text-6xl font-bold mb-6 text-text">
              How skills reconciliation works
            </h1>
            <p className="text-lg text-muted mb-8">
              From fragmented data across five systems to a single, verified, living skills truth. This is the journey.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Step Nav */}
      <div className="sticky top-nav z-40 bg-white border-b border-border">
        <div className="max-w-site mx-auto px-6 flex">
          {steps.map(step => (
            <a
              key={step.num}
              href={`#step-${step.num}`}
              className="flex-1 py-4 px-4 text-sm font-semibold text-muted hover:text-text border-b-4 border-transparent hover:border-blue transition-all"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-bg flex items-center justify-center text-xs font-bold">{step.num}</div>
                <span className="hidden sm:inline">{step.title}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Steps */}
      {steps.map((step, idx) => (
        <RevealWrapper key={step.num}>
          <section id={`step-${step.num}`} className={idx % 2 === 0 ? 'bg-white py-24' : 'bg-bg py-24'}>
            <div className="max-w-site mx-auto px-6 grid grid-cols-2 gap-12 items-center">
              <div className={idx % 2 === 1 ? 'order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-grad-primary text-white flex items-center justify-center font-bold text-lg">
                    {step.num}
                  </div>
                  <span className="text-xs font-bold text-blue uppercase tracking-wider">Step {step.num}</span>
                </div>
                <h2 className="font-sora text-4xl font-bold mb-4 text-text">{step.title}</h2>
                <p className="text-lg text-muted mb-6">{step.desc}</p>
                <ul className="space-y-3">
                  {step.points.map((point, i) => (
                    <li key={i} className="flex gap-3 items-start bg-surface border border-border rounded-lg p-3">
                      <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-text">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={idx % 2 === 1 ? 'order-1' : ''}>
                <div className="bg-white rounded-2xl border border-border shadow-lg p-6">
                  <div className="text-sm font-bold text-muted uppercase tracking-wider mb-4">Step {step.num} Visualization</div>
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-violet-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue/20 mb-2">{step.num}</div>
                      <p className="text-muted text-sm">{step.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealWrapper>
      ))}

      {/* CTA */}
      <RevealWrapper>
        <section className="py-24 bg-grad-hero">
          <div className="max-w-site mx-auto px-6 text-center">
            <h2 className="font-sora text-5xl font-bold mb-6 text-text">See it in action</h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Watch how CoreCatalyst transforms fragmented skills data into verified, actionable intelligence.
            </p>
            <button className="px-8 py-4 rounded-btn bg-grad-primary text-white font-semibold hover:opacity-90 transition-opacity">
              Request a demo
            </button>
          </div>
        </section>
      </RevealWrapper>
    </div>
  )
}
