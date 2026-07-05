'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { person } from '@/data/content'
import { useMounted } from '@/lib/use-mounted'
import HeroVideoBg from './HeroVideoBg'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const mounted = useMounted()

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const fade = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const m = (style: Record<string, unknown>) => (mounted ? style : undefined)

  return (
    <section ref={ref} className="relative h-[160vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={m({ scale: videoScale })} className="absolute inset-0">
          <HeroVideoBg />
        </motion.div>

        {/* Badge, top */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={m({ opacity: fade })}
          className="absolute top-20 md:top-24 inset-x-0 z-30 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 text-[10px] md:text-[11px] font-semibold tracking-[3px] text-ember-soft border border-ember/25 bg-black/30 rounded-full px-4 py-2 uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-ember-soft animate-pulse" />
            بنیان‌گذار · سازنده محصول · خلاق دیجیتال
          </span>
        </motion.div>

        {/* Name + tagline + CTA — anchored bottom-center */}
        <motion.div
          style={m({ opacity: fade, y: contentY })}
          className="absolute bottom-0 inset-x-0 z-30 flex flex-col items-center text-center px-6 pb-14 md:pb-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            dir="ltr"
            className="text-5xl md:text-7xl font-black leading-none mb-4 bg-gradient-to-l from-ember via-ember-soft to-ember bg-clip-text text-transparent drop-shadow-[0_2px_30px_rgba(232,76,30,0.35)]"
          >
            {person.nameEn}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-300 text-sm md:text-base leading-relaxed mb-7 max-w-xl"
          >
            {person.title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <a
              href="#showcase"
              className="inline-flex items-center gap-2 bg-gradient-to-l from-ember to-ember-soft text-black font-bold px-7 py-3.5 rounded-full hover:shadow-[0_0_40px_rgba(232,76,30,0.5)] hover:-translate-y-0.5 transition-all duration-300 text-sm"
            >
              ببین چی ساختم
              <svg className="w-4 h-4 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <a
              href={`mailto:${person.email}`}
              className="inline-flex items-center gap-2 border border-white/15 bg-black/25 backdrop-blur-sm text-gray-200 font-medium px-7 py-3.5 rounded-full hover:border-ember/40 hover:text-white hover:-translate-y-0.5 transition-all duration-300 text-sm"
            >
              تماس بگیر
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-9"
          >
            <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5">
              <div className="w-1 h-2 rounded-full bg-ember-soft animate-bounce" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
