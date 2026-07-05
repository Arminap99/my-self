'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 20, restDelta: 0.001 })

  return (
    <div className="fixed top-0 bottom-0 right-2 md:right-4 w-px z-[60] pointer-events-none bg-white/[0.06]">
      <motion.div
        style={{ scaleY, transformOrigin: 'top' }}
        className="absolute inset-0 bg-gradient-to-b from-ember via-ember-soft to-ember-deep"
      />
    </div>
  )
}
