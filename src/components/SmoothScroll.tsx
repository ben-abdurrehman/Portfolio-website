// components/SmoothScroll.tsx
"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis>()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Reduced from 2 for snappier feel
      smoothWheel: true,
      wheelMultiplier: 1, // Add this to prevent over-scrolling
      touchMultiplier: 2,
      infinite: false,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    lenisRef.current = lenis

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return <div>{children}</div>
}