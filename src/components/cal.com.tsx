"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { getCalApi } from "@calcom/embed-react";
import { cn } from "@/lib/utils";

interface CalFloatingButtonProps {
  namespace?: string;
  calLink?: string;
  text?: string;
  bgColor?: string;
  textColor?: string;
  accentColor?: string;
  layout?: "month_view" | "week_view" | "day_view";
  width?: string;
  height?: string;
  className?: string;
}

export default function CalFloatingButton({
  namespace = "30min",
  calLink = "benabdurrehman/30min",
  text = "Book an appointment",
  bgColor = "bg-black",
  textColor = "text-black",
  accentColor = "bg-cyan-500",
  layout = "month_view",
  width = "w-52",
  height = "h-12",
  className,
}: CalFloatingButtonProps) {
  useEffect(() => {
    (async function initCal() {
      const cal = await getCalApi();
      // Initialize the global Cal embed configuration
      cal("ui", {
        theme: "light",
        layout: layout as any,
        styles: { branding: { brandColor: "#06b6d4" } },
      });
    })();
  }, [layout]);

  return (
    <div
      className={cn(
        "relative rounded-lg z-30 box-border flex justify-center items-center overflow-hidden",
        width,
        height,
        className
      )}
    >
      <motion.button
        data-cal-link={calLink}
        data-cal-config={JSON.stringify({ layout })}
        whileHover="hover"
        initial="rest"
        animate="rest"
        variants={{}}
        className={cn(
          bgColor === "bg-black" ? "border-2 border-cyan-500" : bgColor,
          "transition-all duration-500 overflow-hidden w-full h-full font-poppins rounded-lg relative"
        )}
      >
        {/* Background Layers */}
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

        {/* Text Animations */}
        <motion.span
          className={cn(
            "absolute inset-0 z-10 flex justify-center items-center font-medium",
            textColor
          )}
          variants={{ rest: { y: 0 }, hover: { y: "-100%" } }}
          transition={{ duration: 0.3, ease: "easeIn" }}
        >
          {text}
        </motion.span>

        <motion.span
          className="absolute inset-0 z-40 flex justify-center items-center text-white font-medium"
          variants={{ rest: { y: "100%" }, hover: { y: 0 } }}
          transition={{ duration: 0.3, ease: "easeIn" }}
        >
          {text}
        </motion.span>
      </motion.button>
    </div>
  );
}
