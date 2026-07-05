'use client'

import { useEffect, useRef } from 'react'

export default function HeroVideoBg() {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    v.muted = true
    v.play().catch(() => {})
  }, [])

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden bg-background"
      style={{ background: 'radial-gradient(ellipse at center, #2a1608 0%, #14100c 55%, #0a0908 100%)' }}
    >
      <video
        ref={ref}
        src="/videos/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain"
        style={{ filter: 'saturate(0.85) contrast(1.05) brightness(0.85)' }}
      />

      {/* Ties the footage into the ember palette + keeps bottom text legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(10,9,8,0.7) 100%)' }} />
      <div className="absolute inset-0 bg-ember/[0.05] mix-blend-overlay" />
    </div>
  )
}
