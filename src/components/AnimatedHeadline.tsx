// components/AnimatedHeadline.tsx (OPTIMIZED)
"use client";

import React, { useEffect, useRef, forwardRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

type AnimatedHeadlineProps = {
  text: string;
  as?: HeadingTag;
  className?: string;
};

const AnimatedHeadline = forwardRef<HTMLElement, AnimatedHeadlineProps>(
  ({ text, as: HeadingTag = "h1", className = "text-5xl md:text-7xl lg:text-8xl font-bigshoulders font-bold leading-tight" }, ref) => {
    const innerRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
      if (!innerRef.current) return;
      const chars = innerRef.current.querySelectorAll("span.char");

      // Use `fastScreen: true` for better performance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: innerRef.current,
          start: "top 90%",
          end: "bottom 70%",
          scrub: 1, // Reduced from true for less recalculation
        },
      });

      tl.fromTo(
        chars,
        { color: "#666" },
        {
          color: "#fff",
          stagger: 0.02,
          duration: 0.5,
        },
        0
      );

      return () => {
        tl.kill();
      };
    }, []);

    const renderSplitText = (text: string) => {
      return text.split(" ").map((word, wi) => (
        <span key={wi} className="word whitespace-nowrap">
          {word.split("").map((char, ci) => (
            <span key={ci} className="char inline-block will-change-colors">
              {char}
            </span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </span>
      ));
    };

    return (
      <HeadingTag ref={innerRef} className={className}>
        {renderSplitText(text)}
      </HeadingTag>
    );
  }
);

AnimatedHeadline.displayName = "AnimatedHeadline";
export default AnimatedHeadline;