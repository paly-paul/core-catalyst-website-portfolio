import { Metadata } from 'next'
import { RevealWrapper } from '../../components/ui/RevealWrapper'

export const metadata: Metadata = {
  title: 'About CoreCatalyst - Why We Exist',
  description: 'We built CoreCatalyst because skills data was too fragmented to trust.',
}

export default function About() {
  return (
    <div className="w-full">
      <section className="py-24 bg-grad-hero">
        <div className="max-w-site mx-auto px-6">
          <h1 className="font-sora text-6xl font-bold mb-8 text-text">We built CoreCatalyst because skills data was too fragmented to trust.</h1>
          <p className="text-lg text-muted max-w-2xl">Years of enterprise HR work showed us the same problem: fragmented, unreliable skills data holding back talent mobility, learning, and strategic decisions.</p>
        </div>
      </section>

      <RevealWrapper>
        <section className="py-24 bg-white">
          <div className="max-w-site mx-auto px-6">
            <h2 className="font-sora text-4xl font-bold mb-12 text-text">Our mission</h2>
            <p className="text-lg text-muted max-w-2xl mb-8">Make skills data the trusted source of truth for every organization—so people can grow, leaders can lead with confidence, and enterprises can compete on their talent.</p>
          </div>
        </section>
      </RevealWrapper>

      <RevealWrapper>
        <section className="py-24 bg-bg">
          <div className="max-w-site mx-auto px-6">
            <h2 className="font-sora text-4xl font-bold mb-12 text-text">Our values</h2>
            <div className="grid grid-cols-2 gap-8">
              {['Skills-first thinking', 'Trust through transparency', 'Enterprise-grade rigor', 'Human-centered AI'].map((val, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border bg-white">
                  <h3 className="font-sora font-bold text-lg mb-2 text-text">{val}</h3>
                  <p className="text-muted text-sm">We put skills at the center of how people work and grow.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>
    </div>
  )
}
