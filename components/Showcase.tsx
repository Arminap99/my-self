'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import { projects } from '@/data/content'
import { toFaDigits } from '@/lib/format'
import { useMounted } from '@/lib/use-mounted'

const statusStyle = {
  live: { dot: 'bg-green-400', bg: 'bg-green-500/[0.08]', border: 'border-green-500/20', text: 'text-green-400' },
  dev:  { dot: 'bg-amber-400', bg: 'bg-amber-500/[0.08]', border: 'border-amber-500/20', text: 'text-amber-400' },
  idea: { dot: 'bg-ember-soft', bg: 'bg-ember/[0.08]', border: 'border-ember/25', text: 'text-ember-soft' },
}

function Card({ p, index }: { p: (typeof projects)[number]; index: number }) {
  const s = statusStyle[p.status]
  const cardRef = useRef<HTMLDivElement>(null)

  // Mouse-follow 3D tilt
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 220, damping: 22 })
  const sry = useSpring(ry, { stiffness: 220, damping: 22 })

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 8)
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 8)
  }
  const onLeave = () => { rx.set(0); ry.set(0) }

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative flex-shrink-0 w-[80vw] md:w-[38vw] lg:w-[29vw] h-[60vh] mx-3 md:mx-4"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX: srx, rotateY: sry, transformStyle: 'preserve-3d' }}
        className="group relative h-full rounded-3xl border border-white/[0.08] overflow-hidden hover:border-ember/30 transition-colors duration-300"
      >
        {/* Illustration background */}
        {p.image && (
          <Image
            src={p.image}
            alt={p.name}
            fill
            sizes="(max-width: 768px) 80vw, 38vw"
            className="object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        )}

        {/* Legibility scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/70 to-[#0a0908]/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0908]/50 via-transparent to-transparent" />

        {/* Ghost index */}
        <div className="absolute -top-4 left-2 text-[9rem] font-black text-white/[0.08] select-none leading-none pointer-events-none font-mono">
          {toFaDigits(String(index + 1).padStart(2, '0'))}
        </div>

        <div className="relative z-10 flex flex-col h-full p-7" dir="rtl">
          <div className="flex items-start justify-between mb-auto">
            <span className="text-3xl select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">{p.emoji}</span>
            <span className={`flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full border backdrop-blur-sm ${s.bg} ${s.border} ${s.text}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${s.dot} ${p.status === 'live' ? 'animate-pulse' : ''}`} />
              {p.statusLabel}
            </span>
          </div>

          <div>
            <h3 className="font-black text-white text-2xl mb-1 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">{p.name}</h3>
            <p className="text-[11px] text-gray-400 mb-3 font-mono tracking-wider" dir="ltr">{p.nameEn}</p>
            <p className="text-[13px] text-gray-300 leading-relaxed">{p.description}</p>

            {p.link ? (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-[12px] text-ember-soft hover:text-white font-semibold transition-colors"
              >
                <span>{p.linkLabel}</span>
                <svg className="w-3 h-3 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : (
              <div className="mt-4 text-[11px] text-gray-500 font-medium">به‌زودی</div>
            )}
          </div>
        </div>

        {/* Hover ember glow */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 0%, rgba(232,76,30,0.12), transparent 60%)' }}
        />
      </motion.div>
    </div>
  )
}

export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const mounted = useMounted()
  const prefersReduce = useReducedMotion()
  const reduce = mounted ? prefersReduce : false
  const [distance, setDistance] = useState(0)

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth))
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })

  // RTL film-strip: track overflows to the LEFT, so translate +X to reveal it.
  const x = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : distance])
  const barScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section
      id="showcase"
      ref={sectionRef}
      className="relative"
      style={{ height: `${projects.length * 52 + 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-8 w-full" dir="rtl">
          <div className="label mb-4">پروژه‌ها</div>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              چیزایی که{' '}
              <span className="bg-gradient-to-l from-ember to-ember-soft bg-clip-text text-transparent">ساختم</span>
            </h2>
            {/* Horizontal progress */}
            <div className="w-36 h-px bg-white/[0.08] overflow-hidden mb-2" dir="ltr">
              <motion.div
                style={mounted ? { scaleX: barScale, transformOrigin: 'left' } : { transform: 'scaleX(0)', transformOrigin: 'left' }}
                className="h-full bg-gradient-to-r from-ember to-ember-soft"
              />
            </div>
          </div>
        </div>

        <motion.div
          ref={trackRef}
          style={mounted ? { x } : undefined}
          className="flex w-max pr-[8vw] pl-[8vw]"
          dir="rtl"
        >
          {projects.map((p, i) => (
            <Card key={p.name} p={p} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
