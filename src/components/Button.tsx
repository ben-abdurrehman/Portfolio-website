"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  bgColor?: string;
  accentColor?: string;
  text1Color?: string;
  text2Color?: string;
  width?: string;
  height?: string;
  className?: string;
}

export default function AnimatedButton({
  text,
  href,
  onClick,
  bgColor = "bg-black",
  accentColor = "bg-cyan-500",
  text1Color = "text-black",
  text2Color = "text-white",
  width = "w-40",
  height = "h-12",
  className,
}: AnimatedButtonProps) {
  const buttonContent = (
    <motion.button
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={{}}
      onClick={onClick}
      className={cn(
        bgColor === "bg-black" ? "border-2 border-cyan-500" : bgColor,
        "transition-all duration-500 overflow-hidden font-poppins rounded-xl relative z-30",
        width,
        height,
        className
      )}
    >
      {/* Background layers */}
      <motion.div className="absolute inset-0 z-0 rounded-lg">
        <motion.div
          className={cn(bgColor === "bg-black" ? "bg-transparent" : bgColor, "absolute inset-0")}
          variants={{ rest: { y: 0 }, hover: { y: "100%" } }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        <motion.div
          className={cn(accentColor, "absolute inset-0")}
          variants={{ rest: { y: "-100%" }, hover: { y: 0 } }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </motion.div>

      {/* Text transitions */}
      <motion.span
        className={cn(
          "absolute inset-0 z-10 flex justify-center items-center font-medium",
          text1Color
        )}
        variants={{ rest: { y: 0 }, hover: { y: "-100%" } }}
        transition={{ duration: 0.3, ease: "easeIn" }}
      >
        {text}
      </motion.span>

      <motion.span
        className={cn(`absolute inset-0 z-40 flex justify-center items-center text-white font-medium`, text2Color)}
        variants={{ rest: { y: "100%" }, hover: { y: 0 } }}
        transition={{ duration: 0.3, ease: "easeIn" }}
      >
        {text}
      </motion.span>
    </motion.button>
  );

  // If href exists, wrap it in a Next.js Link
  return href ? (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  );
}
