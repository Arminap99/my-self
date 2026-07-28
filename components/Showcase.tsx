'use client'

import { useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion'
import { categories, projects, type ProjectCategory } from '@/data/content'
import { toFaDigits } from '@/lib/format'
import { useMounted } from '@/lib/use-mounted'

const statusStyle = {
  live: { dot: 'bg-green-400', bg: 'bg-green-500/[0.08]', border: 'border-green-500/20', text: 'text-green-400' },
  dev:  { dot: 'bg-amber-400', bg: 'bg-amber-500/[0.08]', border: 'border-amber-500/20', text: 'text-amber-400' },
  idea: { dot: 'bg-ember-soft', bg: 'bg-ember/[0.08]', border: 'border-ember/25', text: 'text-ember-soft' },
}

type Project = (typeof projects)[number]

function Card({ p, reduce }: { p: Project; reduce: boolean }) {
  const s = statusStyle[p.status]
  const cardRef = useRef<HTMLDivElement>(null)

  // Mouse-follow 3D tilt — featured cards only (they're large enough for it to read).
  const tiltEnabled = p.featured && !reduce
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 220, damping: 22 })
  const sry = useSpring(ry, { stiffness: 220, damping: 22 })

  const onMove = (e: React.MouseEvent) => {
    if (!tiltEnabled) return
    const el = cardRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 6)
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 6)
  }
  const onLeave = () => { rx.set(0); ry.set(0) }

  const body = (
    <motion.div
      style={tiltEnabled ? { rotateX: srx, rotateY: sry, transformStyle: 'preserve-3d' } : undefined}
      className="group relative h-full rounded-3xl border border-white/[0.08] overflow-hidden hover:border-ember/30 transition-colors duration-300"
    >
      {p.image && (
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes={p.featured ? '(max-width: 768px) 92vw, 60vw' : '(max-width: 768px) 92vw, 30vw'}
          className="object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      )}

      {/* Legibility scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/70 to-[#0a0908]/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0908]/50 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-col h-full p-6 md:p-7" dir="rtl">
        <div className="flex items-start justify-between gap-3 mb-auto">
          <span className="text-2xl md:text-3xl select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">{p.emoji}</span>
          <span className={`flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full border backdrop-blur-sm whitespace-nowrap ${s.bg} ${s.border} ${s.text}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${s.dot} ${p.status === 'live' && !reduce ? 'animate-pulse' : ''}`} />
            {p.statusLabel}
          </span>
        </div>

        <div className="mt-6">
          <h3 className={`font-black text-white mb-1 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] ${p.featured ? 'text-xl md:text-2xl' : 'text-[17px]'}`}>
            {p.name}
          </h3>
          <p className="text-[11px] text-gray-400 mb-2.5 font-mono tracking-wider" dir="ltr">{p.nameEn}</p>
          <p className={`text-gray-300 leading-relaxed ${p.featured ? 'text-[13.5px]' : 'text-[12.5px] line-clamp-3'}`}>
            {p.description}
          </p>

          {p.link ? (
            <span className="mt-4 inline-flex items-center gap-2 text-[12px] text-ember-soft group-hover:text-white font-semibold transition-colors">
              {p.linkLabel}
              <svg className="w-3 h-3 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
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
  )

  return (
    <motion.div
      ref={cardRef}
      layout={!reduce}
      initial={reduce ? false : { opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={reduce ? undefined : { opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ perspective: 1000 }}
      className={
        p.featured
          ? 'md:col-span-2 h-[380px] md:h-[440px]'
          : 'h-[320px] md:h-[340px]'
      }
    >
      {p.link ? (
        <a href={p.link} target="_blank" rel="noopener noreferrer" className="block h-full">
          {body}
        </a>
      ) : (
        body
      )}
    </motion.div>
  )
}

export default function Showcase() {
  const mounted = useMounted()
  const prefersReduce = useReducedMotion()
  const reduce = mounted ? !!prefersReduce : true
  const [active, setActive] = useState<ProjectCategory | 'all'>('all')

  const visible = useMemo(
    () => (active === 'all' ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  // Category counts for the filter pills.
  const counts = useMemo(() => {
    const map = new Map<string, number>([['all', projects.length]])
    for (const p of projects) map.set(p.category, (map.get(p.category) ?? 0) + 1)
    return map
  }, [])

  return (
    <section id="showcase" className="max-w-6xl mx-auto px-6 py-28" dir="rtl">
      <div className="mb-8">
        <div className="label mb-4">پروژه‌ها</div>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            چیزایی که{' '}
            <span className="bg-gradient-to-l from-ember to-ember-soft bg-clip-text text-transparent">ساختم</span>
          </h2>
          <p className="text-gray-500 text-sm">
            <span className="font-mono text-ember-soft font-bold">{toFaDigits(visible.length)}</span> پروژه
          </p>
        </div>
      </div>

      {/* Filter pills — offset below the fixed floating nav so they don't collide */}
      <div className="sticky top-[72px] z-30 -mx-6 px-6 py-3 mb-8 overflow-x-auto no-scrollbar">
        <div className="flex gap-2 w-max mx-auto bg-black/50 backdrop-blur-xl border border-white/[0.07] rounded-full p-1.5">
          {categories.map((c) => {
            const isActive = active === c.id
            return (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                aria-pressed={isActive}
                className={`pill ${isActive ? 'pill-active' : ''}`}
              >
                {c.label}
                <span className="text-[10px] font-mono opacity-60">{toFaDigits(counts.get(c.id) ?? 0)}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/*
        Bento grid. Featured cards span 2 of 3 columns, which would otherwise leave a
        dead 1-column gap on each of their rows — `grid-flow-dense` lets the compact
        cards backfill those gaps instead.
      */}
      <motion.div layout={!reduce} className="grid md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-4">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((p) => (
            <Card key={p.name} p={p} reduce={reduce} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
