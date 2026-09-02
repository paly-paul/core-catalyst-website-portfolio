'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface RevealWrapperProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function RevealWrapper({
  children,
  delay = 0,
  className = '',
}: RevealWrapperProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
