'use client'

import { useMemo, useState } from 'react'

interface Post {
  cat: 'strategy' | 'hrops' | 'product' | 'research' | 'guide'
  thumbBg: string
  thumbTitle: string
  thumbSub: string
  title: string
  body: string
  author: string
  date: string
  read: string
}

const catStyles: Record<Post['cat'], { label: string; bg: string; color: string }> = {
  strategy: { label: 'Skills Strategy', bg: '#ede9fe', color: '#7950f2' },
  hrops: { label: 'HR Ops', bg: '#cffafe', color: '#0e7490' },
  product: { label: 'Product', bg: '#dcfce7', color: '#166534' },
  research: { label: 'Research', bg: '#dbeafe', color: '#3b5bdb' },
  guide: { label: 'Guide', bg: '#ffedd5', color: '#c2410c' },
}

const posts: Post[] = [
  {
    cat: 'strategy',
    thumbBg: 'from-violet-50 to-purple-50',
    thumbTitle: 'SBO',
    thumbSub: 'Skills-Based Organization',
    title: 'What a skills-based organization actually means in practice',
    body: "The term has been overused to the point of meaninglessness. Here's a working definition - and the three things an org has to change to make it real.",
    author: 'Ravi Krishnamurthy',
    date: 'Jul 28, 2025',
    read: '7 min',
  },
  {
    cat: 'hrops',
    thumbBg: 'from-cyan-50 to-sky-50',
    thumbTitle: '32hrs',
    thumbSub: 'Per week, per HR Ops team',
    title: 'The real cost of manual skills reconciliation',
    body: "Most HR Ops teams don't track how many hours they spend fixing skill data. When they do, the number is usually a shock. Here's how to measure it and make the case for automation.",
    author: 'Marcus Osei-Bonsu',
    date: 'Jul 15, 2025',
    read: '6 min',
  },
  {
    cat: 'product',
    thumbBg: 'from-green-50 to-emerald-50',
    thumbTitle: '✓',
    thumbSub: 'Write-back: Workday, SAP, Oracle — Live',
    title: 'HRIS write-back is live: what it means for your skills records',
    body: 'We shipped write-back support for Workday, SAP, and Oracle. Here\'s exactly what gets written, what stays read-only, and why the hold queue matters.',
    author: 'Sofia Lindqvist',
    date: 'Jul 2, 2025',
    read: '5 min',
  },
  {
    cat: 'guide',
    thumbBg: 'from-orange-50 to-amber-50',
    thumbTitle: '📋',
    thumbSub: 'Step-by-step guide',
    title: 'How to run a skills data audit in a week',
    body: 'Before you reconcile, you need to know what you have. This step-by-step guide walks through inventorying your skill sources, spotting the biggest conflict clusters, and prioritizing what to fix first.',
    author: 'Marcus Osei-Bonsu',
    date: 'Jun 19, 2025',
    read: '11 min',
  },
  {
    cat: 'strategy',
    thumbBg: 'from-violet-50 to-purple-50',
    thumbTitle: '🤖',
    thumbSub: 'Strategy perspective',
    title: "AI is not replacing jobs. It's dissolving them.",
    body: "The problem isn't that AI takes jobs whole. It absorbs tasks - and that destroys the logic of a job description. Here's what that means for how we think about skills and talent.",
    author: 'Ravi Krishnamurthy',
    date: 'Jun 5, 2025',
    read: '8 min',
  },
  {
    cat: 'research',
    thumbBg: 'from-blue-50 to-indigo-50',
    thumbTitle: '78%',
    thumbSub: 'Manager accuracy vs. verified',
    title: 'Manager skill assessments: more accurate than HR thinks',
    body: 'We compared manager-submitted skill ratings against verified assessment data across 3,400 employees. The correlation was higher than expected - and the gaps that existed were predictable.',
    author: 'Sofia Lindqvist',
    date: 'May 22, 2025',
    read: '10 min',
  },
  {
    cat: 'hrops',
    thumbBg: 'from-cyan-50 to-sky-50',
    thumbTitle: '🔄',
    thumbSub: 'Migration guide',
    title: 'The HRIS migration skills problem nobody talks about',
    body: 'Every Workday or SAP migration project has a skills data problem buried in it. Here\'s why skill records are the last thing to get cleaned - and the first thing to cause pain post-go-live.',
    author: 'Marcus Osei-Bonsu',
    date: 'May 8, 2025',
    read: '7 min',
  },
  {
    cat: 'product',
    thumbBg: 'from-green-50 to-emerald-50',
    thumbTitle: '45K',
    thumbSub: 'Skills in our taxonomy',
    title: "How we built the 45K-node taxonomy - and why it's never finished",
    body: "A taxonomy is only as useful as its ability to evolve. Here's the architecture behind our 45,000-node skills graph, how we source updates, and how we handle the messy edge cases.",
    author: 'Sofia Lindqvist',
    date: 'Apr 17, 2025',
    read: '12 min',
  },
  {
    cat: 'guide',
    thumbBg: 'from-orange-50 to-amber-50',
    thumbTitle: '📈',
    thumbSub: 'ROI calculator included',
    title: 'Building the business case for skills infrastructure',
    body: "How to quantify the cost of bad skill data and present it to a CFO who doesn't know what a taxonomy is. Includes a simple ROI model you can adapt for your own numbers.",
    author: 'Ravi Krishnamurthy',
    date: 'Apr 3, 2025',
    read: '9 min',
  },
]

const filters = [
  { key: 'all', label: 'All' },
  { key: 'strategy', label: 'Skills Strategy' },
  { key: 'hrops', label: 'HR Ops' },
  { key: 'product', label: 'Product' },
  { key: 'research', label: 'Research' },
  { key: 'guide', label: 'Guides' },
]

const PAGE_SIZE = 6

export default function BlogList() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return posts.filter((p) => {
      const catMatch = filter === 'all' || p.cat === filter
      const searchMatch = !q || p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q)
      return catMatch && searchMatch
    })
  }, [filter, search])

  const visible = filtered.slice(0, visibleCount)

  return (
    <div>
      <div className="flex items-center justify-between gap-6 mb-10 flex-wrap">
        <div className="flex gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => {
                setFilter(f.key)
                setVisibleCount(PAGE_SIZE)
              }}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                filter === f.key ? 'bg-text text-white border-text' : 'bg-white text-muted border-border hover:border-blue'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="relative">
          <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6}>
            <circle cx="6.5" cy="6.5" r="4.5" />
            <line x1="10" y1="10" x2="14" y2="14" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setVisibleCount(PAGE_SIZE)
            }}
            placeholder="Search articles..."
            className="pl-9 pr-4 py-2.5 rounded-lg border border-border bg-white text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue/20"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted">No articles match your search. Try a different term or category.</div>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-6 mb-10">
            {visible.map((p, i) => {
              const cs = catStyles[p.cat]
              return (
                <div key={i} className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-card transition-shadow">
                  <div className={`h-36 bg-gradient-to-br ${p.thumbBg} flex flex-col items-center justify-center text-center px-4`}>
                    <div className="font-sora font-bold text-2xl text-text">{p.thumbTitle}</div>
                    <div className="text-[11px] text-muted mt-1">{p.thumbSub}</div>
                  </div>
                  <div className="p-5">
                    <span
                      className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3"
                      style={{ background: cs.bg, color: cs.color }}
                    >
                      {cs.label}
                    </span>
                    <h3 className="font-sora font-bold text-base mb-2 text-text leading-snug">{p.title}</h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">{p.body}</p>
                    <div className="flex items-center gap-2 text-xs text-muted">
                      <span>{p.author}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span>{p.date}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span>{p.read}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {filtered.length > visibleCount && (
            <div className="text-center">
              <button
                onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
                className="px-6 py-3 rounded-btn border border-border font-semibold text-sm text-text hover:border-blue transition-colors"
              >
                Load more articles
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
