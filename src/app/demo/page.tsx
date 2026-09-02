import { Metadata } from 'next'
import { RevealWrapper } from '../../components/ui/RevealWrapper'

export const metadata: Metadata = {
  title: 'Get a CoreCatalyst Demo',
  description: 'See a personalised demo of the skills operating system built for enterprise HR.',
}

export default function Demo() {
  return (
    <div className="w-full">
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h1 className="font-sora text-5xl font-bold mb-8 text-text">See CoreCatalyst in action</h1>
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-bold text-blue uppercase tracking-wider mb-2">In your 30-minute demo:</div>
                  <ul className="space-y-2">
                    <li className="flex gap-2 text-text"><span className="text-blue font-bold">→</span> See your data mapped to 45K skills</li>
                    <li className="flex gap-2 text-text"><span className="text-blue font-bold">→</span> Watch AI resolve conflicts</li>
                    <li className="flex gap-2 text-text"><span className="text-blue font-bold">→</span> Explore mobility and learning paths</li>
                  </ul>
                </div>
              </div>
            </div>
            <RevealWrapper>
              <form className="space-y-4 bg-bg rounded-2xl border border-border p-8">
                <input type="text" placeholder="First name" className="w-full px-4 py-2 rounded-lg border border-border" />
                <input type="text" placeholder="Last name" className="w-full px-4 py-2 rounded-lg border border-border" />
                <input type="email" placeholder="Work email" className="w-full px-4 py-2 rounded-lg border border-border" />
                <input type="text" placeholder="Company" className="w-full px-4 py-2 rounded-lg border border-border" />
                <select className="w-full px-4 py-2 rounded-lg border border-border text-muted">
                  <option>Select your role...</option>
                  <option>CHRO</option>
                  <option>People Manager</option>
                  <option>HR Operations</option>
                </select>
                <button className="w-full px-4 py-3 rounded-btn bg-grad-primary text-white font-semibold hover:opacity-90">
                  Book a demo
                </button>
              </form>
            </RevealWrapper>
          </div>
        </div>
      </section>
    </div>
  )
}
