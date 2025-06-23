// components/AnimatedHeadline.tsx
"use client";

import React, { useEffect, useRef, forwardRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type AnimatedHeadlineProps = {
  text: string;
  as?: HeadingTag;
  className?: string;
};

const AnimatedHeadline = forwardRef<HTMLElement, AnimatedHeadlineProps>(
  ({ text, as: HeadingTag = "h1", className = "text-5xl md:text-7xl lg:text-8xl font-bold leading-tight" }, ref) => {
    const innerRef = useRef<HTMLHeadingElement>(null);
    const combinedRef = ref || innerRef;

    useEffect(() => {
      if (!innerRef.current) return;
      const chars = innerRef.current.querySelectorAll("span.char");

      gsap.fromTo(
        chars,
        { color: "#666" },
        {
          color: "#fff",
          scrollTrigger: {
            trigger: innerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
          stagger: 0.03,
        }
      );
    }, []);

    const renderSplitText = (text: string) => {
      return text.split(" ").map((word, wi) => (
        <span key={wi} className="word whitespace-nowrap">
          {word.split("").map((char, ci) => (
            <span key={ci} className="char inline-block">
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

export default AnimatedHeadline;
