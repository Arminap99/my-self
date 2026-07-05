'use client'

import { Camera, Play, Globe } from 'lucide-react'
import { MinimalistHero } from './ui/minimalist-hero'

export default function HeroSection() {
  return (
    <MinimalistHero
      className="[background:radial-gradient(ellipse_at_top,#1a1230_0%,#0d0d10_40%,#080808_100%)]"
      logoText="AA"
      navLinks={[
        { label: 'درباره', href: '#about' },
        { label: 'پروژه‌ها', href: '#projects' },
        { label: 'مهارت‌ها', href: '#skills' },
        { label: 'تماس', href: '#contact' },
      ]}
      mainText="بنیان‌گذار اتاق فرار | سازنده محصول دیجیتال | خالق تجربه‌های به‌یادماندنی"
      readMoreLink="#about"
      imageSrc="/images/Armin.png"
      imageAlt="آرمین علیپور"
      overlayText={{ part1: 'Armin', part2: 'Alipour' }}
      socialLinks={[
        { icon: Camera, href: 'https://instagram.com/_armin_ap' },
        { icon: Play, href: 'https://youtube.com/@arminap' },
        { icon: Globe, href: 'https://github.com/Arminap99' },
      ]}
      locationText="Tehran, Iran"
    />
  )
}
