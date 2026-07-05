import Hero from '@/components/Hero'
import Manifesto from '@/components/Manifesto'
import Showcase from '@/components/Showcase'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Proof from '@/components/Proof'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      {/* Floating Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 flex justify-center pt-5 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-1 bg-black/40 backdrop-blur-xl border border-white/[0.07] rounded-full px-3 py-1.5 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <span className="text-[11px] font-black text-ember-soft tracking-widest px-3 py-1.5 border-l border-white/[0.07] ml-1">AA</span>
          {[
            { href: '#about', label: 'درباره' },
            { href: '#showcase', label: 'پروژه‌ها' },
            { href: '#skills', label: 'تجربه' },
            { href: '#social', label: 'سوشال' },
            { href: '#contact', label: 'تماس' },
          ].map((n) => (
            <a key={n.href} href={n.href}
              className="text-[12px] font-medium text-gray-400 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-all">
              {n.label}
            </a>
          ))}
        </div>
      </nav>

      <Hero />
      <Manifesto />
      <Showcase />
      <About />
      <Skills />
      <Proof />
      <Contact />
    </main>
  )
}
