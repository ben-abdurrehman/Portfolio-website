"use client"

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FaqCtaButtonProps {
  label: string
  icon: React.ElementType
  onClick?: () => void
  bgColor?: string
}

 function FaqCtaButton({ label, icon: Icon, onClick, bgColor = "bg-white" }: FaqCtaButtonProps) {
  return (
    <div className="relative rounded-lg box-border flex justify-center overflow-hidden w-full h-12 items-center">
      <motion.button
        whileHover="hover"
        initial="rest"
        animate="rest"
        variants={{}}
        onClick={onClick}
        className={cn(
          bgColor === "bg-black" ? "border-2 border-cyan-500" : bgColor,
          "hover:scale-95 transition-all duration-300 overflow-hidden w-full h-full font-poppins rounded-lg"
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
            className="absolute inset-0 bg-cyan-500"
            variants={{ rest: { y: "-100%" }, hover: { y: 0 } }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </motion.div>

        {/* Sliding Text */}
        <motion.span
          className="absolute text-black inset-0 z-10 flex justify-center items-center gap-2"
          variants={{ rest: { y: 0 }, hover: { y: "-100%" } }}
          transition={{ duration: 0.2, ease: "easeIn" }}
        >
          <Icon className="w-4 h-4" /> {label}
        </motion.span>

        <motion.span
          className="absolute text-white inset-0 z-40 flex justify-center items-center gap-2"
          variants={{ rest: { y: "100%" }, hover: { y: 0 } }}
          transition={{ duration: 0.2, ease: "easeIn" }}
        >
          <Icon className="w-4 h-4" /> {label}
        </motion.span>
      </motion.button>
    </div>
  )
}
