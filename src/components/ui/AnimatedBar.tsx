'use client'

import { ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedBarProps {
  pct: number
  className?: string
  delay?: number
  /** Optional content (e.g. a value label) rendered inside the fill, positioned relative to it so it tracks the animated width. */
  children?: ReactNode
}

/** A fill bar that animates its width from 0 to `pct`% when scrolled into view. Place inside a track div with a fixed height/rounded/overflow-hidden. */
export function AnimatedBar({ pct, className = 'bg-blue', delay = 0, children }: AnimatedBarProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <motion.div
      ref={ref}
      className={`relative h-full rounded-full ${className}`}
      initial={{ width: 0 }}
      animate={inView ? { width: `${pct}%` } : {}}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
