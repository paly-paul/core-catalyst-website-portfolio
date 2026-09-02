'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ReadinessRing({ score = 75 }: { score?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const circumference = 201

  return (
    <div ref={ref} className="relative w-20 h-20 flex-shrink-0">
      <svg width="80" height="80" viewBox="0 0 80 80" className="-rotate-90">
        <circle cx="40" cy="40" r="32" fill="none" stroke="#e4e9f4" strokeWidth="8" />
        <motion.circle
          cx="40" cy="40" r="32" fill="none" stroke="url(#chroRing)" strokeWidth="8" strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={inView ? { strokeDashoffset: circumference - (score / 100) * circumference } : {}}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
        <defs>
          <linearGradient id="chroRing" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b5bdb" />
            <stop offset="100%" stopColor="#7950f2" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-sora font-bold text-lg text-text">{score}</span>
        <span className="text-[9px] text-muted">readiness</span>
      </div>
    </div>
  )
}
