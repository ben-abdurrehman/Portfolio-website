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
    <section className="relative flex items-center justify-center w-full min-h-[90vh] md:min-h-[100vh] bg-black text-white overflow-hidden px-2 md:px-4">
      <main className="flex rounded-3xl border border-cyan-500 items-center justify-between w-4/5 h-[80vh] max-w-7xl relative mt-14 overflow-hidden z-20 px-2 md:px-10">
        {/* <div className="absolute left-0 right-0 bottom-0 w-full h-[20vh] bg-gradient-to-t from-black/90 via-transparent to-transparent z-30" /> */}
        {/* <div className="absolute inset w-full h-full bg-[url('/lines-bg.png')] bg-cover z-20" /> */}
        {/* <div className="absolute rounded-full w-full md:w-auto animate-pulse h-auto mx-auto z-0 -bottom-1/2 right-0 left-0 top-0 bg-[radial-gradient(circle_at_50%_50%,rgba(1,182,212,0.7),transparent_50%)]"></div> */}

          <div className="relative flex flex-col items-center justify-center z-20">
            <h1 className="font-bold text-3xl items-center md:items-start md:ml-10 flex flex-col md:text-6xl gap-5 text-center md:text-left">
              <p>Benabdurrehman is<br />
              a web agency that</p>
              <div className="inline-flex gap-3 items-center justify-center md:items-start">
                <motion.div className="relative w-52 h-10 py-9 px-7 rounded bg-cyan-500 text-white font-bold flex items-center justify-center overflow-hidden">
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
        <Image
          className="object-cover select-none z-20 h-auto w-[340px] sm:w-[40%] self-end lg:w-[40%]"
          src="/bg-remove3.webp"
          alt="Abdur Rehman portrait"
          width={100}
          height={100}
        />
      </main>
    </section>
  );
}
