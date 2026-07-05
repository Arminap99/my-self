import { projects } from '@/data/content'

const statusStyle = {
  live:  { dot: 'bg-green-400',  bg: 'bg-green-500/08',  border: 'border-green-500/20',  text: 'text-green-400' },
  dev:   { dot: 'bg-amber-400',  bg: 'bg-amber-500/08',  border: 'border-amber-500/20',  text: 'text-amber-400' },
  idea:  { dot: 'bg-purple-400', bg: 'bg-purple-500/08', border: 'border-purple-500/20', text: 'text-purple-400' },
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-28">
      <div className="mb-14">
        <div className="label mb-4">پروژه‌ها</div>
        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
          چیزایی که ساختم
        </h2>
        <p className="text-gray-500 mt-3 text-sm max-w-lg">
          از اتاق فرار ترسناک تا پلتفرم دیجیتال — هر پروژه یه تجربه‌ی جدیده.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, i) => {
          const s = statusStyle[p.status]
          return (
            <div key={p.name}
              className="group relative flex flex-col rounded-2xl border border-white/[0.07] bg-[#0f0f12] p-6 hover:border-purple-500/30 hover:bg-[#111115] transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.05}s` }}>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(124,58,237,0.06), transparent 60%)' }}
              />

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl select-none">{p.emoji}</span>
                <span className={`flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full border ${s.bg} ${s.border} ${s.text}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${s.dot} ${p.status === 'live' ? 'animate-pulse' : ''}`} />
                  {p.statusLabel}
                </span>
              </div>

              {/* Names */}
              <h3 className="font-black text-white text-[17px] mb-1 leading-tight">{p.name}</h3>
              <p className="text-[11px] text-gray-600 mb-3 font-mono tracking-wider">{p.nameEn}</p>

              {/* Description */}
              <p className="text-[13px] text-gray-400 leading-relaxed flex-1">{p.description}</p>

              {/* Link */}
              {p.link ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[12px] text-purple-400 hover:text-purple-200 font-semibold transition-colors group/link">
                  <span>{p.linkLabel}</span>
                  <svg className="w-3 h-3 rotate-180 group-hover/link:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <div className="mt-5 text-[11px] text-gray-700 font-medium">به‌زودی</div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
