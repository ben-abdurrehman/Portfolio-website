'use client';

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import CalFloatingButton from "./cal.com";
import AnimatedButton from "./Button";

const phrases = ["Design", "Develop", "Launch", "Re-build"];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 600, damping: 100 });
  const springY = useSpring(mouseY, { stiffness: 600, damping: 100 });

  const x = useTransform(springX, (v) => `${v}px`);
  const y = useTransform(springY, (v) => `${v}px`);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      const centerX = e.clientX - rect.left - 400;
      const centerY = e.clientY - rect.top - 400;

      mouseX.set(centerX);
      mouseY.set(centerY);
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener('mousemove', move);
    }

    return () => {
      if (el) {
        el.removeEventListener('mousemove', move);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <section className="relative flex items-center justify-center w-full min-h-screen bg-black text-white overflow-hidden px-5 sm:px-7 md:px-10 lg:px-20 py-6 sm:py-8 md:py-12">
      <main 
        ref={containerRef}
        className="relative flex flex-col group rounded-2xl sm:rounded-3xl ring-4 sm:ring-6 md:ring-8 ring-cyan-500/30 hover:ring-cyan-500/50 bg-[#ffffff04] backdrop-blur-3xl hover:scale-[1.01] sm:hover:scale-[1.02] transition-all duration-500 border border-cyan-500 items-center justify-center w-full max-w-7xl min-h-[60vh] sm:min-h-[75vh] md:min-h-[80vh] lg:h-[80vh] overflow-hidden z-20 px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 lg:py-16"
      >
        {/* Animated glow effect - only on larger screens */}
        <motion.div
          className="hidden md:group-hover:block absolute top-0 left-0 w-[500px] md:w-[600px] lg:w-[750px] h-[500px] md:h-[600px] lg:h-[750px] blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(1,182,212,0.3),transparent_50%)] rounded-full pointer-events-none z-0"
          style={{ translateX: x, translateY: y }}
        />
        
        {/* Edge gradients - responsive sizing */}
        <div className="absolute left-0 right-0 bottom-0 w-full h-[15vh] sm:h-[18vh] md:h-[20vh] bg-gradient-to-t from-black/90 via-transparent to-transparent z-30" />
        <div className="absolute left-0 right-0 top-0 w-full h-[15vh] sm:h-[18vh] md:h-[20vh] bg-gradient-to-b from-black/90 via-transparent to-transparent z-30" />
        <div className="absolute top-0 bottom-0 left-0 h-full w-[10vh] sm:w-[15vh] md:w-[20vh] bg-gradient-to-r from-black/90 via-transparent to-transparent z-30" />
        <div className="absolute top-0 bottom-0 right-0 h-full w-[10vh] sm:w-[15vh] md:w-[20vh] bg-gradient-to-l from-black/90 via-transparent to-transparent z-30" />
        
        {/* Background pattern */}
        <Image 
          src={"/dot-lines.webp"}
          alt="Dotted lines background" 
          width={100} 
          height={100} 
          className="absolute opacity-50 sm:opacity-60 md:opacity-70 inset-0 w-full h-full object-cover z-10" 
          priority
        />

        {/* Main content */}
        <div className="relative flex flex-col items-center justify-center z-20">
          <motion.h1 
            initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ 
              duration: 1.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1
            }}
            className="max-sm:max-w-[300px] text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl flex flex-wrap items-center justify-center max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto gap-1 sm:gap-2 text-center leading-tight sm:leading-snug md:leading-normal"
          >
            Helping Founders/CEOs scale their revenue to $1M through websites and SAAS apps.
          </motion.h1>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-6 sm:mt-8 md:mt-10 items-center justify-center w-full max-w-md sm:max-w-none px-2">
          <CalFloatingButton 
            bgColor="bg-white" 
            className="ring-2 ring-white/50 hover:ring-cyan-500/50" 
            text="Free Overview" 
            width="w-40 md:w-44" 
          />
          <AnimatedButton
            className="border border-white backdrop-blur-3xl ring-2 ring-white/20"
            text="See my work"
            bgColor="bg-[#ffffff01]"
            text1Color="text-white"
            text2Color="text-black"
            accentColor="bg-white"
          />
        </div>
      </main>
    </section>
  );
}