// components/PitchingTagline.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedHeadline from "./AnimatedHeadline";

gsap.registerPlugin(ScrollTrigger);

export default function PitchingTagline() {

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* <div className="absolute z-20 inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,188,166,0.5),transparent_50%)]"></div> */}
      <div className="relative z-10 flex flex-col items-start text-white justify-center min-h-screen px-4">
        <div className="max-w-5xl font-inter mx-auto">
          <AnimatedHeadline
            text="People are making $ from a single website, and the best part is you can also do that"
            as="h2"
            className="text-5xl md:text-6xl lg:text-7xl text-center font-bold leading-tight"
          />
        </div>
      </div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    </section>
  );
}
