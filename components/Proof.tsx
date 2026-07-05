'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, animate, useReducedMotion } from 'framer-motion'
import { socials, youtubeChannels, stats } from '@/data/content'
import { parseStat, toFaDigits } from '@/lib/format'

/** Counts up from 0 → value in Persian digits when scrolled into view. */
function CountUp({ raw }: { raw: string }) {
  const parsed = parseStat(raw)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(parsed ? '۰' : raw)

  useEffect(() => {
    if (!parsed || !inView) return
    if (reduce) {
      setDisplay(toFaDigits(parsed.value))
      return
    }
    const controls = animate(0, parsed.value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(toFaDigits(Math.round(v))),
    })
    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce])

  return (
    <span ref={ref}>
      {display}
      {parsed?.suffix}
    </span>
  )
}

function StatCard({ s, i }: { s: (typeof stats)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.75 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-white/[0.07] bg-[#141210] p-5 text-center hover:border-ember/30 transition-colors"
    >
      <div className="text-2xl md:text-3xl font-black text-ember-soft font-mono">
        <CountUp raw={s.value} />
      </div>
      <div className="text-[11px] text-gray-600 mt-1 leading-tight">{s.label}</div>
    </motion.div>
  )
}

function Avatar({ src, alt, fallback }: { src?: string; alt: string; fallback: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.4, opacity: 0, rotate: -12 }}
      animate={inView ? { scale: 1, opacity: 1, rotate: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      className="relative w-9 h-9 rounded-full flex-shrink-0 overflow-hidden ring-1 ring-white/10"
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes="36px" className="object-cover" />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center text-[10px] font-black text-white"
          style={{ background: 'linear-gradient(135deg, #e84c1e, #7a1f06)' }}
        >
          {fallback}
        </div>
      )}
    </motion.div>
  )
}

function Row({ children, i }: { children: React.ReactNode; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Proof() {
  return (
    <section id="social" className="max-w-6xl mx-auto px-6 py-28" dir="rtl">
      <div className="mb-10">
        <div className="label mb-4">آمار و شبکه‌ها</div>
        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
          <span className="bg-gradient-to-l from-ember to-ember-soft bg-clip-text text-transparent">۸۰K+ نفر</span>{' '}
          دنبالم می‌کنن
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
        {stats.map((s, i) => (
          <StatCard key={s.label} s={s} i={i} />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Instagram */}
        <div className="rounded-2xl border border-white/[0.07] bg-[#141210] overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.05]">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
              style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
            >
              📸
            </div>
            <span className="text-sm font-bold text-white">اینستاگرام</span>
            <span className="mr-auto text-[11px] text-gray-600 font-mono">{toFaDigits(socials.length)} صفحه</span>
          </div>
          <div className="flex flex-col divide-y divide-white/[0.04]">
            {socials.map((s, i) => (
              <Row key={s.handle} i={i}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 hover:bg-white/[0.02] transition-colors group"
                >
                  <Avatar src={s.avatar} alt={s.label} fallback={s.initials} />
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-semibold text-white/90 group-hover:text-white transition-colors" dir="ltr">
                      {s.handle}
                    </div>
                    <div className="text-[11px] text-gray-600">{s.sub}</div>
                  </div>
                  <div className="text-sm font-black text-ember-soft">{s.followers}</div>
                </a>
              </Row>
            ))}
          </div>
        </div>

        {/* YouTube */}
        <div className="rounded-2xl border border-white/[0.07] bg-[#141210] overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.05]">
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-sm">▶</div>
            <span className="text-sm font-bold text-white">یوتیوب</span>
            <span className="mr-auto text-[11px] text-gray-600 font-mono">{toFaDigits(youtubeChannels.length)} کانال</span>
          </div>
          <div className="flex flex-col divide-y divide-white/[0.04]">
            {youtubeChannels.map((c, i) => (
              <Row key={c.handle} i={i}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 hover:bg-white/[0.02] transition-colors group"
                >
                  <Avatar src={c.avatar} alt={c.name} fallback={c.initials} />
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-semibold text-white/90 group-hover:text-white transition-colors">
                      {c.name}
                    </div>
                    <div className="text-[11px] text-gray-600" dir="ltr">{c.handle}</div>
                  </div>
                  <div className="text-sm font-black text-red-400">{c.subs}</div>
                </a>
              </Row>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
