// components/PitchingTagline.tsx
"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedHeadline from "./AnimatedHeadline";

gsap.registerPlugin(ScrollTrigger);

export default function PitchingTagline() {

  return (
    <section className="relative h-[60vh] lg:h-[70vh] bg-black overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center lg:items-start text-white lg:justify-center h-full px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatedHeadline
            text="People are making $ from a single website, and the best part is you can also do that"
            as="h2"
            className="text-3xl font- font-semibold md:text-6xl lg:text-6xl text-center lg:font-bold leading-tight"
          />
        </div>
      </div>
    </section>
  );
}
