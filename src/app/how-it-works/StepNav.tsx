'use client'

import { useEffect, useState } from 'react'

interface Step {
  num: number
  title: string
}

export default function StepNav({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(steps[0]?.num)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const num = Number(e.target.id.replace('step-', ''))
            setActive(num)
          }
        })
      },
      { threshold: 0.4 }
    )
    steps.forEach((s) => {
      const el = document.getElementById(`step-${s.num}`)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [steps])

  return (
    <div className="sticky top-nav z-40 bg-white border-b border-border">
      <div className="max-w-site mx-auto px-6 flex overflow-x-auto">
        {steps.map((step) => (
          <a
            key={step.num}
            href={`#step-${step.num}`}
            className={`flex-1 py-4 px-4 text-sm font-semibold border-b-4 transition-all whitespace-nowrap ${
              active === step.num ? 'text-text border-blue' : 'text-muted hover:text-text border-transparent hover:border-blue/40'
            }`}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  active === step.num ? 'bg-blue text-white' : 'bg-bg text-text'
                }`}
              >
                {step.num}
              </div>
              <span className="hidden sm:inline">{step.title.split(' ').slice(0, 3).join(' ')}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
