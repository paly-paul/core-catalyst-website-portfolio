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
    <div className="sticky top-nav z-40 bg-white border-t border-b border-border">
      <div className="max-w-site mx-auto px-4 sm:px-6 flex items-stretch overflow-x-auto">
        {steps.map((step, i) => {
          const isActive = active === step.num
          return (
            <a
              key={step.num}
              href={`#step-${step.num}`}
              className={`flex-1 flex items-center gap-3 p-[18px_14px] whitespace-nowrap border-b-[3px] transition-colors ${
                i !== steps.length - 1 ? 'border-r border-r-border' : ''
              } ${isActive ? 'border-b-blue bg-[#fafbff]' : 'border-b-transparent hover:bg-bg'}`}
            >
              <div
                className={`w-[30px] h-[30px] rounded-full flex items-center justify-center font-sora font-bold text-[13px] flex-shrink-0 border-[1.5px] transition-all ${
                  isActive ? 'bg-blue border-blue text-white' : 'bg-bg border-border text-muted'
                }`}
              >
                {step.num}
              </div>
              <span className={`text-[13px] font-semibold leading-[1.3] ${isActive ? 'text-blue' : 'text-[#5c6587]'}`}>
                {step.title.split(' ').slice(0, 3).join(' ')}
              </span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
