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
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[calc(100vh-var(--nav-h))]">
        {/* LEFT */}
        <div className="bg-gradient-to-br from-[#eef2ff] via-[#f5f3ff] to-[#faf5ff] lg:border-r-[1.5px] border-border p-6 sm:p-10 lg:p-[64px_56px_64px_60px] flex flex-col gap-8 lg:gap-10">
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-[.09em] text-blue bg-[#e0e7ff] rounded-full px-3 py-1 mb-4">
              Book a Demo
            </span>
            <h1 className="font-sora text-[clamp(26px,3.5vw,40px)] font-extrabold leading-[1.15] mb-3 text-text">
              See CoreCatalyst<br />
              <span className="bg-grad-primary bg-clip-text text-transparent">live in 30 minutes</span>
            </h1>
            <p className="text-base text-muted leading-[1.65] max-w-[420px]">
              We&apos;ll walk through your specific skill data challenges - reconciliation conflicts, HRIS gaps, or board reporting - and show you exactly how CoreCatalyst resolves them.
            </p>
          </div>

          <div>
            <h3 className="font-sora text-sm font-bold uppercase tracking-[.07em] text-muted mb-4">What to expect</h3>
            <div className="flex flex-col gap-4">
              {expectSteps.map((s) => (
                <div key={s.num} className="flex items-start gap-3.5">
                  <div className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-full bg-grad-primary text-white flex items-center justify-center font-sora font-bold text-xs">
                    {s.num}
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-text mb-0.5">{s.title}</strong>
                    <span className="text-[13px] text-muted">{s.body}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            {trustItems.map((t, i) => (
              <div key={i} className="flex items-center gap-2.5 text-[13px] text-muted">
                <span className="w-[22px] h-[22px] rounded-[6px] bg-[#dbeafe] text-blue flex items-center justify-center text-xs flex-shrink-0">{t.icon}</span>
                {t.text}
              </div>
            ))}
          </div>

          <div className="bg-white/75 border-[1.5px] border-[#c7d2fe] rounded-[14px] p-[20px_22px]">
            <p className="text-sm text-text italic leading-[1.6] mb-3">
              &ldquo;We booked the demo on a Thursday. By the following Friday we had our first reconciliation report in Workday.&rdquo;
            </p>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-grad-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                JT
              </div>
              <div>
                <div className="text-[13px] font-semibold text-text">James Tran</div>
                <div className="text-xs text-muted">HR Ops Director, Meridian Logistics</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="p-6 sm:p-10 lg:p-[64px_60px_64px_56px] flex flex-col justify-start">
          <DemoForm />
        </div>
      </div>

      {/* LOGOS */}
      <div className="border-t border-border py-6 px-10">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="text-xs font-semibold uppercase tracking-[.07em] text-muted mr-3">Integrates with</span>
          {logos.map((l, i) => (
            <span key={i} className="font-sora text-xs font-bold text-muted bg-white border-[1.5px] border-border rounded-lg px-4 py-1.5 whitespace-nowrap">
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
