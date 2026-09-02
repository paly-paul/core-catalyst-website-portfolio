import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CoreCatalyst Blog - Skills Strategy & HR Ops',
  description: 'Insights on skills-based organizations, HR operations, and workforce intelligence.',
}

export default function Blog() {
  const posts = [
    { title: 'Why skills-based organizations outperform job-based ones', category: 'Skills Strategy', date: 'Sep 1, 2026' },
    { title: 'The hidden cost of fragmented HR data', category: 'HR Ops', date: 'Aug 28, 2026' },
    { title: 'AI in talent mobility: When reconciliation beats assessment', category: 'Product', date: 'Aug 25, 2026' },
  ]

  return (
    <div className="w-full">
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6">
          <h1 className="font-sora text-6xl font-bold mb-8 text-text">CoreCatalyst Blog</h1>
          <p className="text-lg text-muted mb-12 max-w-2xl">Insights on skills strategy, HR operations, and the future of work.</p>
          
          <div className="space-y-6">
            {posts.map((post, i) => (
              <article key={i} className="border border-border rounded-2xl p-6 hover:shadow-card transition-shadow cursor-pointer">
                <span className="text-xs font-bold text-blue uppercase">{post.category}</span>
                <h3 className="font-sora text-2xl font-bold text-text my-2">{post.title}</h3>
                <p className="text-sm text-muted">{post.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
