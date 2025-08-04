// import { Mail, Phone, MessageSquare, Slack } from 'lucide-react'
"use client"

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { faqcta } from '@/data/objects/faq'
import Image from 'next/image'


export function FaqCta() {
  return (
    <section className="bg-black relative w-4/5 lg:w-3xl ring-1 ring-cyan-500 z-20 rounded-2xl overflow-hidden text-white text-center">
      <Image src="/Small-pattern.png" alt="background-lines" className="-z-10 absolute w-full h-full select-none" width={100} height={100}/>
      <div className="w-auto lg:max-w-3xl z-30 mx-auto p-5 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Still have questions? Let's connect.
        </h2>
        <p className="text-gray-400 text-sm md:text-base font-poppins mb-10">
          Reach out through any of the platforms below — I’ll respond as soon as I can.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
          {faqcta.map((cta, index) => (
         <FaqCtaButton
         key={index}
         icon={cta.icon}
         label={cta.label}
         onClick={cta.onclick}
         bgColor="bg-white"
       />
          ))}
        </div>
      </div>
    </section>
  )
}


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

