'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { person } from '@/data/content'
import { useMounted } from '@/lib/use-mounted'

const timeline = [
  { year: '۱۳۹۶', label: 'معماری', icon: '🏛️', desc: 'فهمیدم فضا چطور احساس رو شکل می‌ده' },
  { year: '۱۳۹۷', label: 'عکاسی و فیلمسازی', icon: '🎬', desc: 'زبان تصویر رو یاد گرفتم' },
  { year: '۱۴۰۰', label: 'اتاق فرار', icon: '🚪', desc: 'همه چیز رو ترکیب کردم — فضا + روایت + بازیکن' },
  { year: '۱۴۰۲', label: 'تکنولوژی و محصول', icon: '⚡', desc: 'شروع به ساختن سایت، اپ، و بازی کردم' },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const mounted = useMounted()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.5'] })
  const lineScale = useTransform(scrollYProgress, [0.1, 0.9], [0, 1])
  const parallaxY = useTransform(scrollYProgress, [0, 1], [36, -36])

  return (
    <section id="about" ref={ref} className="max-w-6xl mx-auto px-6 py-28" dir="rtl">
      <div className="mb-14">
        <div className="label mb-4">درباره من</div>
        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
          آدمی که در تقاطع<br />
          <span className="bg-gradient-to-l from-ember to-ember-soft bg-clip-text text-transparent">
            سینما، بازی و تکنولوژی
          </span>{' '}
          زندگی می‌کنه
        </h2>
      </div>

      <div className="grid md:grid-cols-5 gap-6">
        {/* Summary card — drifts slower than scroll (parallax) */}
        <motion.div
          style={mounted ? { y: parallaxY } : undefined}
          className="md:col-span-3 rounded-2xl border border-white/[0.07] bg-[#141210] p-7"
        >
          <p className="text-gray-300 text-[15px] leading-[2.1]">{person.summary}</p>

          <div className="mt-7 pt-7 border-t border-white/[0.06] grid grid-cols-3 gap-4">
            {[
              { n: '۴+', l: 'اتاق فرار' },
              { n: '۸۰K+', l: 'فالوور' },
              { n: '۶+', l: 'سال تجربه' },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-2xl font-black text-ember-soft font-mono">{s.n}</div>
                <div className="text-[11px] text-gray-600 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline — ember line draws itself on scroll */}
        <div className="md:col-span-2 rounded-2xl border border-white/[0.07] bg-[#141210] p-7">
          <div className="text-[10px] font-bold text-ember-soft uppercase tracking-widest mb-6">مسیر</div>
          <div className="relative flex flex-col gap-6">
            <div className="absolute top-4 bottom-4 right-[19px] w-px bg-white/[0.06] overflow-hidden">
              <motion.div
                style={
                  mounted
                    ? { scaleY: lineScale, transformOrigin: 'top' }
                    : { transform: 'scaleY(0)', transformOrigin: 'top' }
                }
                className="absolute inset-0 bg-gradient-to-b from-ember via-ember-soft to-ember-deep"
              />
            </div>

            {timeline.map((t, i) => (
              <div key={i} className="flex items-start gap-4 relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#1a1613] border border-ember/25 flex items-center justify-center text-base z-10">
                  {t.icon}
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] text-ember-soft font-mono font-bold">{t.year}</span>
                    <span className="text-[13px] font-bold text-white">{t.label}</span>
                  </div>
                  <p className="text-[12px] text-gray-500 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision note */}
      <div className="mt-6 relative overflow-hidden rounded-2xl border border-ember/25 bg-gradient-to-l from-[#1f1209] to-[#140f0d] p-7">
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-ember/50 via-ember/20 to-transparent" />
        <div className="text-[10px] font-bold text-ember-soft tracking-widest uppercase mb-3">چشم‌انداز</div>
        <p className="text-sm text-gray-400 leading-[2]">
          اتاق فرار، Questa، یوتیوب، و محتوای هوش مصنوعی همه وجود دارند — اما باید زیر یک برند چتری مثل{' '}
          <strong className="text-white">Metrox</strong> کنار هم باشند. نه یک فریلنسر با کارهای پراکنده، بلکه یک{' '}
          <strong className="text-ember-soft">استودیوی تجربه‌محور</strong> با اکوسیستم کامل.
        </p>
      </div>
    </section>
  )
}
