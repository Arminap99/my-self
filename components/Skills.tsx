'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experiences } from '@/data/content'

function ExpCard({ e, i }: { e: (typeof experiences)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-white/[0.07] bg-[#141210] p-6 hover:border-ember/30 transition-colors"
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
        <div>
          <h3 className="text-[15px] font-black text-white">{e.title}</h3>
          <p className="text-[12px] text-ember-soft mt-0.5">{e.company}</p>
        </div>
        <span className="text-[10px] text-gray-600 border border-white/[0.06] bg-white/[0.03] rounded-full px-3 py-1 whitespace-nowrap font-mono">
          {e.period}
        </span>
      </div>
      <p className="text-[13px] text-gray-400 leading-relaxed mb-4">{e.description}</p>
      <div className="flex flex-wrap gap-2">
        {e.tags.map((t) => (
          <span key={t} className="text-[11px] bg-ember/[0.06] border border-ember/15 text-ember-soft rounded-md px-2.5 py-1">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-10" dir="rtl">
      <div className="label mb-6">تجربه کاری</div>
      <div className="flex flex-col gap-4">
        {experiences.map((e, i) => (
          <ExpCard key={i} e={e} i={i} />
        ))}
      </div>
    </section>
  )
}
