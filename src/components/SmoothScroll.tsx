// "use client"

// import { useEffect, useRef } from "react"
// import LocomotiveScroll from "locomotive-scroll"
// import "locomotive-scroll/dist/locomotive-scroll.css"

// export default function SmoothScroll({ children }: { children: React.ReactNode }) {
//   const containerRef = useRef(null)

//   useEffect(() => {
//     const scroll = new LocomotiveScroll({
//       el: containerRef.current!,
//       smooth: true,
//       multiplier: 1.2, // controls scroll speed
//       class: 'is-reveal'
//     })

//     return () => {
//       scroll.destroy()
//     }
//   }, [])

//   return (
//     <div data-scroll-container ref={containerRef}>
//       {children}
//     </div>
//   )
// }



// components/SmoothScroll.tsx
"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis>()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2, // controls speed (lower = faster)
      smoothWheel: true,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // custom easing
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <div>{children}</div>
}
