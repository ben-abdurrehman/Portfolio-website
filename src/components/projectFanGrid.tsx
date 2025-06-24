// components/ProjectFanGrid.tsx
"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const screenshots = [
  "/Hero-sections/Hero-section1.png",
  "/Hero-sections/Hero-section2.png",
  "/Hero-sections/Hero-section3.png",
  "/Hero-sections/Hero-section4.png",
  "/Hero-sections/Hero-section5.png",
  "/Hero-sections/Hero-section6.png",
];

export function ProjectFanGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      const totalWidth = wrapperRef.current!.scrollWidth;
      
      gsap.to(wrapperRef.current, {
        x: () => `-${totalWidth - window.innerWidth}px`,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${totalWidth - window.innerWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen z-30 w-screen overflow-hidden bg-black">
      <div
        ref={wrapperRef}
        className="flex items-center h-full z-20 w-max space-x-10 px-20"
        style={{ willChange: "transform" }}
      >
        {screenshots.map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl shadow-2xl"
            style={{
              height: "50vh",
              aspectRatio: " 5/2",
              flexShrink: 0,
            }}
          >
            <img
              src={src}
              alt={`project-${i}`}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}