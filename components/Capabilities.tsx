'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { capabilities } from '@/data/content'

function Pillar({ c, i }: { c: (typeof capabilities)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-white/[0.07] bg-[#141210] p-6 hover:border-ember/30 transition-colors duration-300 overflow-hidden"
    >
      {/* Top hairline that lights up on hover */}
      <div className="absolute top-0 inset-x-6 h-px bg-gradient-to-l from-transparent via-ember/0 to-transparent group-hover:via-ember/50 transition-all duration-500" />

      <div className="w-11 h-11 rounded-xl bg-[#1a1613] border border-ember/20 flex items-center justify-center text-xl mb-4">
        {c.icon}
      </div>

      <h3 className="text-[15px] font-black text-white mb-2">{c.title}</h3>
      <p className="text-[13px] text-gray-400 leading-[1.9] mb-4">{c.desc}</p>

      <div className="flex flex-wrap gap-1.5">
        {c.tags.map((t) => (
          <span
            key={t}
            className="text-[10.5px] bg-ember/[0.06] border border-ember/15 text-ember-soft rounded-md px-2 py-0.5"
            dir="auto"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Capabilities() {
  return (
    <section id="capabilities" className="max-w-6xl mx-auto px-6 py-28" dir="rtl">
      <div className="mb-12">
        <div className="label mb-4">توانایی‌ها</div>
        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
          چهار کاری که{' '}
          <span className="bg-gradient-to-l from-ember to-ember-soft bg-clip-text text-transparent">
            واقعاً انجام می‌دم
          </span>
        </h2>
        <p className="text-gray-500 mt-3 text-sm max-w-lg">
          نه لیست بلندبالای مهارت — این‌ها چیزهاییه که باهاشون محصول واقعی تحویل دادم.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {capabilities.map((c, i) => (
          <Pillar key={c.title} c={c} i={i} />
        ))}
      </div>
    </section>
  )
}
