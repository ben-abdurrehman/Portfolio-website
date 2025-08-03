'use client';

import Image from "next/image";


export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center md:justify-center w-full min-h-[90vh] md:min-h-[100vh] bg-black text-white overflow-hidden px-4">
      {/* Intro */}
      <main className="flex flex-col rounded-3xl border border-cyan-500 items-center justify-center w-4/5 h-[80vh] max-w-7xl relative mt-14 overflow-hidden z-20">
      {/* <div className="absolute inset-0 w-full h-[200%] animate-spin bg-cyan-500 z-0" />
      <div className="absolute inset-0 w-[99.5%] h-[99%] m-5 rounded-3xl mx-auto bg-black z-10" />
      */}
      <div className="absolute left-0 right-0 bottom-0 w-full h-[20vh] bg-gradient-to-t from-black/90 via-transparent to-transparent z-30" />
      <div className="absolute inset w-full h-full bg-[url('/lines-bg.png') bg-cover z-20"/>
      
      <div className="absolute rounded-full w-full md:w-auto animate-pulse h-auto mx-auto z-0 -bottom-1/2 right-0 left-0 top-0 bg-[radial-gradient(circle_at_50%_50%,rgba(1,182,212,0.7),transparent_50%)]"></div>
      <Image
            className="absolute bottom-0 object-cover mx-auto select-none z-20 h-auto w-[340px] sm:w-[40%] lg:w-[25%]"
            src="/bg-remove3.png"
            alt="Abdur Rehman portrait"
            priority
            width={100}
            height={100}
            quality={100}
            unoptimized={true}
          />
      <div className="flex flex-col mb-40">
        <div className="mt-8 font-poppins text-center z-10">
          <span className="text-base md:text-lg font-light flex items-start justify-center lg:items-center lg:justify-center xl:gap-2 mb:1 xl:mb-2">
            <span className="hidden md:flex" role="img" aria-label="Waving hand">👋</span>
            <span>Hi, my name is <b>Abdur Rehman</b> and I am a freelance</span>
          </span>
        </div>
        <div className="relative  flex flex-col items-center z-20">
            <h1 className="font-extrabold text-3xl md:text-7xl text-center leading-tight mb-0">
            <span className="text-white">
               Software Engineer
            </span>
          </h1>
        </div>
      </div>
      </main>
    </section>
  );
}


