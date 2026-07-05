'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ideas } from '@/data/content'

function IdeaCard({ idea, i }: { idea: (typeof ideas)[number]; i: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: '-80px' }}
      className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/[0.07] hover:border-ember/30 transition-colors duration-300"
    >
      <motion.div
        variants={{
          hidden: { scale: 1.15, filter: 'grayscale(1) blur(6px) brightness(0.5)' },
          shown: { scale: 1, filter: 'grayscale(0) blur(0px) brightness(1)' },
        }}
        transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={idea.image}
          alt={idea.title}
          fill
          sizes="(max-width: 768px) 90vw, 30vw"
          className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      </motion.div>

      {/* Light sweep on reveal */}
      <motion.div
        variants={{ hidden: { x: '-120%' }, shown: { x: '120%' } }}
        transition={{ duration: 0.9, delay: i * 0.1 + 0.15, ease: 'easeInOut' }}
        className="absolute inset-0 w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/60 to-transparent" />

      <motion.div
        variants={{ hidden: { opacity: 0, y: 16 }, shown: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.6, delay: i * 0.1 + 0.35 }}
        dir="rtl"
        className="absolute inset-x-0 bottom-0 p-6"
      >
        <span className="text-2xl mb-2 inline-block drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">{idea.emoji}</span>
        <h3 className="font-black text-white text-lg mb-1.5 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
          {idea.title}
        </h3>
        <p className="text-[12.5px] text-gray-300 leading-relaxed">{idea.description}</p>
      </motion.div>
    </motion.div>
  )
}

export default function Ideas() {
  return (
    <section id="ideas" className="max-w-6xl mx-auto px-6 py-28" dir="rtl">
      <div className="mb-14">
        <div className="label mb-4">ایده‌های بعدی</div>
        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
          چیزایی که تو ذهنمه،<br />
          <span className="bg-gradient-to-l from-ember to-ember-soft bg-clip-text text-transparent">
            هنوز نساختمشون
          </span>
        </h2>
        <p className="text-gray-500 mt-3 text-sm max-w-lg">
          مفهوم‌هایی که فکرشون رو کردم و منتظر وقت و منابع برای ساختنشونم.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ideas.map((idea, i) => (
          <IdeaCard key={idea.title} idea={idea} i={i} />
        ))}
      </div>
    </section>
  )
}
