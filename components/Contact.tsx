import { person, skillGroups } from '@/data/content'

const allSkills = skillGroups.flatMap((g) => g.skills)

export default function Contact() {
  return (
    <section id="contact" className="pb-10" dir="rtl">
      <div className="max-w-6xl mx-auto px-6 py-28">
        <div className="relative overflow-hidden rounded-3xl border border-ember/25 bg-gradient-to-br from-[#1f1209] via-[#0f0d0c] to-[#140a06] p-10 md:p-16 text-center">
          {/* Top hairline + breathing halo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-ember/40 to-transparent" />
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none ember-pulse"
            style={{ background: 'radial-gradient(circle, rgba(232,76,30,0.18), transparent 70%)' }}
          />

          <div className="relative z-10">
            <div className="label justify-center mb-6 max-w-[160px] mx-auto">تماس</div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              بریم با هم<br />
              <span className="bg-gradient-to-l from-ember to-ember-soft bg-clip-text text-transparent">
                چیزی بسازیم
              </span>
            </h2>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-lg mx-auto">
              دنبال همکاری در حوزه تجربه‌سازی، بازی، محتوا، یا محصول دیجیتال هستی؟ خوشحال می‌شم بشنوم.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`mailto:${person.email}`}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-l from-ember to-ember-soft text-black font-bold px-8 py-4 rounded-full hover:shadow-[0_0_40px_rgba(232,76,30,0.45)] hover:-translate-y-0.5 transition-all duration-300 text-sm"
              >
                ✉️ <span dir="ltr">{person.email}</span>
              </a>
              <a
                href="https://instagram.com/_armin_ap"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/[0.1] text-white font-bold px-8 py-4 rounded-full hover:border-ember/50 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-300 text-sm bg-white/[0.02]"
              >
                📸 <span dir="ltr">@_armin_ap</span>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <span className="text-[12px] text-gray-600 border border-white/[0.06] rounded-full px-4 py-2">
                📍 {person.location}
              </span>
              <span className="text-[12px] text-gray-600 border border-white/[0.06] rounded-full px-4 py-2">
                ⏰ معمولاً زیر ۲۴ ساعت پاسخ می‌دم
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite skills marquee */}
      <div className="relative overflow-hidden py-8 border-t border-white/[0.05] mask-fade-x" dir="ltr">
        <div className="flex whitespace-nowrap marquee-track w-max">
          {[...allSkills, ...allSkills].map((s, i) => (
            <span key={i} className="mx-4 text-lg md:text-xl font-bold text-white/15">
              {s} <span className="text-ember/40 mx-2">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="text-center pt-6 text-[11px] text-gray-700">
        <span className="text-ember-deep font-mono">AA</span> · آرمین علیپور · {new Date().getFullYear()}
      </div>
    </section>
  )
}
