import { Metadata } from 'next'
import { RevealWrapper } from '../../components/ui/RevealWrapper'
import BlogList from './BlogList'
import Newsletter from './Newsletter'

export const metadata: Metadata = {
  title: 'Blog - Thinking on Skills, Work, and Data',
  description:
    'Practical writing for HR leaders navigating the shift to skills-based organizations. No fluff.',
}

export default function Blog() {
  return (
    <div className="w-full">
      {/* HEADER */}
      <section className="bg-grad-hero py-20 text-center">
        <div className="max-w-site mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-semibold text-violet">CoreCatalyst Blog</span>
          </div>
          <h1 className="font-sora text-5xl font-bold leading-tight mb-6 text-text">
            Thinking on <span className="bg-grad-primary bg-clip-text text-transparent">skills, work, and data</span>
          </h1>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Practical writing for HR leaders navigating the shift to skills-based organizations. No fluff.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <RevealWrapper>
        <section className="py-16 bg-white">
          <div className="max-w-site mx-auto px-6">
            <div className="grid grid-cols-2 gap-10 items-center bg-bg rounded-2xl border border-border overflow-hidden p-8">
              <div className="bg-white rounded-xl border border-border p-6">
                <div className="text-xs font-bold text-muted uppercase tracking-wider mb-4">Skill source agreement rate</div>
                <div className="space-y-3">
                  {[
                    { label: 'HRIS profile', val: 88 },
                    { label: 'LinkedIn data', val: 61 },
                    { label: 'Manager review', val: 44 },
                    { label: 'LMS completion', val: 73 },
                  ].map((b, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-xs text-muted w-24 flex-shrink-0">{b.label}</span>
                      <div className="flex-1 h-2 bg-bg rounded-full overflow-hidden">
                        <div className="h-full bg-blue rounded-full" style={{ width: `${b.val}%` }} />
                      </div>
                      <span className="text-xs font-semibold text-text w-8 text-right">{b.val}%</span>
                    </div>
                  ))}
                </div>
                <div className="text-[11px] text-muted mt-4">Average agreement across 4 sources, 18 enterprise orgs, 2024</div>
              </div>
              <div>
                <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue mb-4">Research</span>
                <h2 className="font-sora text-2xl font-bold mb-3 text-text leading-snug">
                  Why your skill data disagrees with itself - and what to do about it
                </h2>
                <p className="text-muted mb-5 leading-relaxed">
                  We analysed skill records across 18 enterprise organizations and four source systems. The average agreement rate was 62%. Here&apos;s what&apos;s driving the conflict and why auto-resolution alone isn&apos;t the full answer.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue to-violet text-white text-xs font-bold flex items-center justify-center">
                    SL
                  </div>
                  <div className="text-sm text-muted">
                    <span className="text-text font-semibold">Sofia Lindqvist</span> · Aug 14, 2025 · 9 min read
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* CARDS + FILTER */}
      <section className="pb-16 bg-white">
        <div className="max-w-site mx-auto px-6">
          <BlogList />
        </div>
      </section>

      {/* NEWSLETTER */}
      <RevealWrapper>
        <section className="py-16 bg-bg">
          <div className="max-w-site mx-auto px-6">
            <Newsletter />
          </div>
        </section>
      </RevealWrapper>
    </div>
  )
}
