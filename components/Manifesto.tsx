'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useMounted } from '@/lib/use-mounted'

const SENTENCE = 'تجربه‌هایی می‌سازم که مرز واقعیت و روایت را محو می‌کنند'
const words = SENTENCE.split(' ')

function Word({
  word,
  index,
  total,
  progress,
  mounted,
}: {
  word: string
  index: number
  total: number
  progress: MotionValue<number>
  mounted: boolean
}) {
  // Each word owns a slice of the scroll range → sequential "reading light".
  const start = index / total
  const end = start + 1.5 / total
  const opacity = useTransform(progress, [start, Math.min(end, 1)], [0.13, 1])
  const isEmber = word === 'واقعیت' || word === 'روایت'

  return (
    <motion.span
      style={mounted ? { opacity } : undefined}
      className={`inline-block mx-1.5 md:mx-2.5 ${isEmber ? 'text-ember-soft' : ''}`}
    >
      {word}
    </motion.span>
  )
}

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null)
  const mounted = useMounted()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.4'] })

  return (
    <section ref={ref} className="max-w-5xl mx-auto px-6 py-36 md:py-52" dir="rtl">
      <div className="label mb-10 max-w-[200px] mx-auto justify-center">مانیفست</div>
      <p className="text-[7.5vw] md:text-5xl font-black leading-[1.65] text-center flex flex-wrap justify-center text-white">
        {words.map((w, i) => (
          <Word key={i} word={w} index={i} total={words.length} progress={scrollYProgress} mounted={mounted} />
        ))}
      </p>
    </section>
  )
}
