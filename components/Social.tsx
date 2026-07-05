import { socials, youtubeChannels } from '@/data/content'

export default function Social() {
  const totalInstagram = '۸۰K+'
  return (
    <section id="social" className="max-w-6xl mx-auto px-6 py-28">
      <div className="mb-14">
        <div className="label mb-4">شبکه‌های اجتماعی</div>
        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
          <span className="bg-gradient-to-l from-pink-400 to-purple-400 bg-clip-text text-transparent">{totalInstagram} نفر</span>
          {' '}دنبالم می‌کنن
        </h2>
        <p className="text-gray-500 mt-3 text-sm">در ۱۱+ کانال و صفحه مختلف</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Instagram */}
        <div className="rounded-2xl border border-white/[0.07] bg-[#0f0f12] overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.05]">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
              style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
              📸
            </div>
            <span className="text-sm font-bold text-white">اینستاگرام</span>
            <span className="mr-auto text-[11px] text-gray-600 font-mono">{socials.length} صفحه</span>
          </div>
          <div className="flex flex-col divide-y divide-white/[0.04]">
            {socials.map((s) => (
              <a key={s.handle} href={s.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 hover:bg-white/[0.02] transition-colors group">
                <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-black text-white"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}>
                  {s.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-white/90 group-hover:text-white transition-colors">{s.handle}</div>
                  <div className="text-[11px] text-gray-600">{s.sub}</div>
                </div>
                <div className="text-sm font-black text-purple-300">{s.followers}</div>
              </a>
            ))}
          </div>
        </div>

        {/* YouTube */}
        <div className="rounded-2xl border border-white/[0.07] bg-[#0f0f12] overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.05]">
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-sm">▶</div>
            <span className="text-sm font-bold text-white">یوتیوب</span>
            <span className="mr-auto text-[11px] text-gray-600 font-mono">{youtubeChannels.length} کانال</span>
          </div>
          <div className="flex flex-col divide-y divide-white/[0.04]">
            {youtubeChannels.map((c) => (
              <a key={c.handle} href={c.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 hover:bg-white/[0.02] transition-colors group">
                <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-black text-white"
                  style={{ background: 'linear-gradient(135deg, #dc2626, #991b1b)' }}>
                  {c.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-white/90 group-hover:text-white transition-colors">{c.name}</div>
                  <div className="text-[11px] text-gray-600">{c.handle}</div>
                </div>
                <div className="text-sm font-black text-red-400">{c.subs}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
