"use client"
import { motion } from 'framer-motion'
// import type { ButtonHTMLAttributes, ReactNode } from "react"    
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type CalStylingProps = {
  bgColor: string
}



export default function CalFloatingButton({bgColor} : CalStylingProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return (
  <>
      <div className="relative rounded-lg  box-border flex justify-center overflow-hidden w-52 h-12 items-center">
  <motion.button
          data-cal-namespace="30min"
          data-cal-link="benabdurrehman/30min"
          data-cal-config='{"layout":"month_view"}'
          whileHover="hover"
          initial="rest"
          animate="rest"
          variants={{}}
          className={cn(bgColor === "bg-black" ? "border-2 border-cyan-500" : bgColor, "hover:scale-95 transition-all duration-300 overflow-hidden w-full h-full font-poppins rounded-lg")}
        >
          {/* Background layers */}
          <motion.div
            className="absolute inset-0 z-0 rounded-lg"
          >
            <motion.div
              className={cn(bgColor === "bg-black" ? "bg-transparent" : bgColor, "absolute inset-0")}
              variants={{ rest: { y: 0 }, hover: { y: '100%' } }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
            <motion.div
              className={cn("absolute inset-0 bg-cyan-500")}
              variants={{ rest: { y: '-100%' }, hover: { y: 0 } }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </motion.div>

          <motion.span
            className="absolute text-black inset-0 z-10 flex justify-center items-center"
            variants={{
              rest: { y: 0 },
              hover: { y: '-100%' },
            }}
            transition={{ duration: 0.2, ease: 'easeIn' }}
          >
            Book an appiontment
          </motion.span>
  
          <motion.span
            className="absolute text-white inset-0 z-40 flex justify-center items-center"
            variants={{
              rest: { y: '100%' },
              hover: { y: 0 },
            }}
            transition={{ duration: 0.2, ease: 'easeIn' }}
          > 
          Book an appiontment
          </motion.span>
        </motion.button>
        </div>
  </>)
};