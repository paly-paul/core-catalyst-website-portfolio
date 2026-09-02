import { Metadata } from 'next'
import DemoForm from './DemoForm'

export const metadata: Metadata = {
  title: 'Book a Demo',
  description:
    "See CoreCatalyst live in 30 minutes. We'll walk through your specific skill data challenges and show you exactly how CoreCatalyst resolves them.",
}

const expectSteps = [
  {
    num: '1',
    title: 'We scope your environment',
    body: '15 min - we learn your HRIS stack, current skill sources, and where reconciliation breaks down',
  },
  {
    num: '2',
    title: 'Live platform walkthrough',
    body: '10 min - see the reconciliation engine, taxonomy, and write-back console with real examples',
  },
  {
    num: '3',
    title: 'Pilot proposal',
    body: '5 min - we outline a focused pilot scoped to your team or function, live within 2 weeks',
  },
]

const trustItems = [
  { icon: '🔒', text: 'SOC 2 Type II certified - your data stays yours' },
  { icon: '⚡', text: 'Average pilot goes live in under 2 weeks' },
  { icon: '📊', text: '94% of skill conflicts auto-resolved on day one' },
  { icon: '🐌', text: 'No long-term contract required to start' },
]

const logos = ['Workday', 'SAP SuccessFactors', 'Oracle HCM', 'BambooHR', 'Rippling', 'LinkedIn', 'Degreed']

export default function Demo() {
  return (
    <div className="w-full">
      <div className="max-w-site mx-auto px-6 py-20 grid grid-cols-[1fr_480px] gap-16 items-start">
        {/* LEFT */}
        <div className="space-y-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-bg border border-border rounded-full px-4 py-2 mb-6">
              <span className="text-xs font-semibold text-violet">Book a Demo</span>
            </div>
            <h1 className="font-sora text-5xl font-bold leading-tight mb-6 text-text">
              See CoreCatalyst<br />
              <span className="bg-grad-primary bg-clip-text text-transparent">live in 30 minutes</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              We&apos;ll walk through your specific skill data challenges - reconciliation conflicts, HRIS gaps, or board reporting - and show you exactly how CoreCatalyst resolves them.
            </p>
          </div>

          <div>
            <h3 className="font-sora font-bold text-lg mb-5 text-text">What to expect</h3>
            <div className="space-y-5">
              {expectSteps.map((s) => (
                <div key={s.num} className="flex gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-grad-primary text-white flex items-center justify-center font-sora font-bold text-sm">
                    {s.num}
                  </div>
                  <div>
                    <strong className="block text-text mb-1">{s.title}</strong>
                    <span className="text-sm text-muted">{s.body}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {trustItems.map((t, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-text">
                <span className="text-lg">{t.icon}</span>
                {t.text}
              </div>
            ))}
          </div>

          <div className="bg-bg rounded-2xl border border-border p-6">
            <p className="text-text italic leading-relaxed mb-4">
              &ldquo;We booked the demo on a Thursday. By the following Friday we had our first reconciliation report in Workday.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue to-violet text-white text-xs font-bold flex items-center justify-center">
                JT
              </div>
              <div>
                <div className="text-sm font-semibold text-text">James Tran</div>
                <div className="text-xs text-muted">HR Ops Director, Meridian Logistics</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-2xl border border-border shadow-card p-8">
          <DemoForm />
        </div>
      </div>

      {/* LOGOS */}
      <div className="border-t border-border py-10">
        <div className="max-w-site mx-auto px-6 flex items-center justify-center gap-4 flex-wrap">
          <span className="text-sm text-muted mr-2">Integrates with</span>
          {logos.map((l, i) => (
            <span key={i} className="px-4 py-2 rounded-full bg-bg text-sm font-semibold text-muted">
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
