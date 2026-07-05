'use client'

import { useEffect, useState } from 'react'

/**
 * SSR-safe mount gate: scroll-driven motion styles are applied only after
 * hydration so the server and first client paint always match.
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted
}
