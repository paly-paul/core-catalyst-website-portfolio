'use client'

import { useEffect, useState } from 'react'

interface Item {
  id: string
  label: string
}

export default function SecuritySidenav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )
    items.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [items])

  return (
    <nav className="sticky top-24 self-start hidden lg:block">
      <h3 className="text-xs font-bold text-muted uppercase tracking-wider mb-4">On this page</h3>
      <ul className="space-y-1 border-l border-border">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block pl-4 py-1.5 text-sm border-l-2 -ml-px transition-colors ${
                active === item.id ? 'border-blue text-blue font-semibold' : 'border-transparent text-muted hover:text-text'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
