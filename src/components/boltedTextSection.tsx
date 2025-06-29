// components/PitchingTagline.tsx
"use client";

// import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedHeadline from "./AnimatedHeadline";
// import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function PitchingTagline() {

  return (
    <section className="relative h-[80vh] lg:h-[80vh] bg-black overflow-hidden">
      {/* <div className="absolute z-20 inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,188,166,0.5),transparent_50%)]"></div> */}
      {/* <Image src="/Arrow3.png" alt="Denoted Arrow" className="z-0 absolute mx-auto bottom-1 left-1/2 w-1/2 h-[100vh]" width={100} height={10} /> */}
      <div className="relative z-10 flex flex-col items-center justify-center lg:items-start text-white lg:justify-center h-[100vh] lg:min-h-screen px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatedHeadline
            text="People are making $ from a single website, and the best part is you can also do that"
            as="h2"
            className="text-3xl font- font-semibold md:text-6xl lg:text-6xl text-center lg:font-bold leading-tight"
          />
        </div>
      </div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    </section>
  );
}
