import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CoreCatalyst Security - SOC 2, GDPR, ISO 27001',
  description: 'Enterprise-grade security. SOC 2 Type II certified, GDPR compliant, ISO 27001.',
}

export default function Security() {
  return (
    <div className="w-full">
      <section className="py-24 bg-grad-hero">
        <div className="max-w-site mx-auto px-6">
          <h1 className="font-sora text-6xl font-bold mb-6 text-text">Enterprise security you can trust</h1>
          <div className="flex gap-8 text-sm font-semibold">
            <div className="flex items-center gap-2"><span className="text-blue">✓</span> SOC 2 Type II</div>
            <div className="flex items-center gap-2"><span className="text-blue">✓</span> GDPR Compliant</div>
            <div className="flex items-center gap-2"><span className="text-blue">✓</span> ISO 27001</div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6 grid grid-cols-2 gap-12">
          <div>
            <h2 className="font-sora text-3xl font-bold mb-6 text-text">Data protection</h2>
            <ul className="space-y-4 text-muted">
              <li className="flex gap-3"><span>•</span> AES-256 encryption at rest</li>
              <li className="flex gap-3"><span>•</span> TLS 1.3 in transit</li>
              <li className="flex gap-3"><span>•</span> EU data residency</li>
              <li className="flex gap-3"><span>•</span> 99.99% uptime SLA</li>
            </ul>
          </div>
          <div>
            <h2 className="font-sora text-3xl font-bold mb-6 text-text">Compliance</h2>
            <ul className="space-y-4 text-muted">
              <li className="flex gap-3"><span>•</span> SOC 2 Type II audit</li>
              <li className="flex gap-3"><span>•</span> GDPR data processing</li>
              <li className="flex gap-3"><span>•</span> CCPA compliant</li>
              <li className="flex gap-3"><span>•</span> ISO 27001 certified</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
