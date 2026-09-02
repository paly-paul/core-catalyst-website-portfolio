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
    <nav className="sticky top-[calc(var(--nav-h)+24px)] self-start hidden lg:block">
      <h3 className="text-[11px] font-bold text-muted uppercase tracking-[.08em] mb-4">On this page</h3>
      <ul className="flex flex-col gap-0.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-sm font-medium px-3 py-[7px] rounded-lg border-l-2 transition-all ${
                active === item.id
                  ? 'border-blue text-blue font-semibold bg-[#eef2ff]'
                  : 'border-transparent text-muted hover:text-text hover:bg-white'
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
