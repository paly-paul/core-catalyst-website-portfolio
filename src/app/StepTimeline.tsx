'use client'

import { useState } from 'react'

interface Step {
  num: string
  title: string
  desc: string
}

export default function StepTimeline({ steps }: { steps: Step[] }) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="relative grid grid-cols-5 gap-0.5">
      {/* Connector line */}
      <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue to-violet rounded-full z-0" />

      {steps.map((step, i) => (
        <div
          key={i}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          className="relative z-10 flex flex-col items-center text-center px-3"
        >
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center font-sora font-extrabold text-xl mb-[18px] border-2 transition-all duration-300 ${
              hovered === i
                ? 'bg-grad-primary border-transparent text-white scale-110 shadow-lg'
                : 'bg-white border-border text-muted'
            }`}
          >
            {step.num}
          </div>
          <div className="font-sora font-bold text-sm text-text mb-2">{step.title}</div>
          <div className="text-[12.5px] text-muted leading-relaxed">{step.desc}</div>
        </div>
      ))}
    </div>
  )
}
