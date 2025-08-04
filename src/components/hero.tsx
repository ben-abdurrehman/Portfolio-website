'use client';

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const phrases = ["Design", "Develop", "Launch", "Re-build"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex items-center justify-center w-full min-h-[90vh] lg:h-[100vh] bg-black text-white overflow-hidden px-2 md:px-4">
      <main className="flex flex-col lg:flex-row rounded-3xl border border-cyan-500 items-center justify-between w-[90%] md:w-4/5 lg:h-[80vh] xl:h-[80vh] 2xl:h-[60vh] max-w-7xl relative mt-20 overflow-hidden z-20 px-4 md:px-10">
        {/* <div className="absolute left-0 right-0 bottom-0 w-full h-[20vh] bg-gradient-to-t from-black/90 via-transparent to-transparent z-30" /> */}
        {/* <div className="absolute inset w-full h-full bg-[url('/lines-bg.png')] bg-cover z-20" /> */}
        {/* <div className="absolute rounded-full w-full md:w-auto animate-pulse h-auto mx-auto z-0 -bottom-1/2 right-0 left-0 top-0 bg-[radial-gradient(circle_at_50%_50%,rgba(1,182,212,0.7),transparent_50%)]"></div> */}

          <div className="relative flex flex-col items-center justify-center mt-10 lg:m-0 lg:w-3/5 z-20">
            <h1 className="font-bold max-sm:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl items-center lg:items-start ml-5 xl:ml-10 flex flex-col gap-2 xl:gap-5 text-center lg:text-left">
              <p>Benabdurrehman is<br />
              a web agency that</p>
              <div className="inline-flex gap-3 items-center justify-center">
                <motion.div className="relative w-28 md:w-38 xl:w-52 h-10 lg:py-6 lg:px-3 xl:py-9 xl:px-7 rounded bg-cyan-500 text-white font-bold flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={phrases[index]}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute"
                    >
                      {phrases[index]}
                    </motion.span>
                  </AnimatePresence>
                </motion.div>
                <p className="text-white">websites</p>
              </div>
              <p>for brands/businesses</p>
            </h1>
          </div>
          <div className="relative h-auto lg:self-end w-[300px] sm:w-[70%] lg:1/2 xl:w-[40%]">
        <div className="absolute rounded-full w-full md:w-auto animate-pulse h-auto mx-auto z-0 -bottom-1/2 right-0 left-0 top-0 bg-[radial-gradient(circle_at_50%_50%,rgba(1,182,212,0.7),transparent_50%)]"></div>

        <Image
          className="relative object-cover select-none z-20 h-auto w-full"
          src="/bg-remove3.webp"
          alt="Abdur Rehman portrait"
          width={100}
          height={100}
          />
          </div>
      </main>
    </section>
  );
}
