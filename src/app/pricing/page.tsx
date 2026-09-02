import { Metadata } from 'next'
import { RevealWrapper } from '../../components/ui/RevealWrapper'

export const metadata: Metadata = {
  title: 'CoreCatalyst Pricing - Skills Platform Plans',
  description: 'Transparent, outcome-based pricing for teams from 500 to 50,000 employees.',
}

export default function Pricing() {
  return (
    <div className="w-full">
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6">
          <h1 className="font-sora text-6xl font-bold text-center mb-6 text-text">Simple, outcome-based pricing</h1>
          <p className="text-center text-lg text-muted max-w-2xl mx-auto mb-12">Pay for what you get: verified skills, reduced risk, and talent velocity.</p>
          
          <div className="grid grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Starter', price: '£2,500', employees: '500', features: ['Multi-source ingestion', 'Basic reconciliation', 'HRIS integration', 'Email support'] },
              { name: 'Growth', price: '£8,000', employees: '5,000', features: ['Advanced reconciliation', 'Skill enrichment', 'Mobility engine', 'Priority support'], highlight: true },
              { name: 'Enterprise', price: 'Custom', employees: '5,000+', features: ['Custom integrations', 'Dedicated CSM', 'Advanced analytics', 'SLA guarantee'] },
            ].map((plan, i) => (
              <RevealWrapper key={i} delay={i * 0.1}>
                <div className={`rounded-2xl border-2 p-8 ${plan.highlight ? 'border-blue bg-blue-50' : 'border-border bg-white'}`}>
                  <h3 className="font-sora text-2xl font-bold mb-2 text-text">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue mb-2">{plan.price}<span className="text-lg text-muted font-normal">/month</span></div>
                  <p className="text-muted mb-6">Up to {plan.employees} employees</p>
                  <ul className="space-y-3">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full mt-8 py-3 rounded-btn font-semibold ${plan.highlight ? 'bg-grad-primary text-white' : 'border border-border text-text hover:bg-bg'}`}>
                    Get started
                  </button>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
