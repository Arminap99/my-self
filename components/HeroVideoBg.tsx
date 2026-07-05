'use client'

import { useEffect, useRef } from 'react'

export default function HeroVideoBg() {
  const bgRef = useRef<HTMLVideoElement>(null)
  const fgRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    for (const v of [bgRef.current, fgRef.current]) {
      if (!v) continue
      v.muted = true
      v.play().catch(() => {})
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-background">
      {/* Blurred cover fills the edges so there's no flat letterbox bar */}
      <video
        ref={bgRef}
        src="/videos/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover scale-110 blur-3xl opacity-50"
        style={{ filter: 'saturate(0.85) brightness(0.7) blur(60px)' }}
      />

      {/* Crisp, full frame — nothing cropped */}
      <video
        ref={fgRef}
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
