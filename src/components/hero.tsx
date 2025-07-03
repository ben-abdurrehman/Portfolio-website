'use client';

import Image from "next/image";

// import '@/styles/globals.css';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center md:justify-start min-h-[90vh] md:min-h-[100vh] bg-black py-20 text-white overflow-hidden px-4">
      {/* Intro */}
      <Image src="/lines-bg.png" alt="background-lines" className="z-10 bg-gradient-to-b from-40% from-transparent via-60% via-transparent to-black absolute w-[100vw] h-[100vh]" width={100} height={100}/>
      <Image src="/gradientoverlay.png" alt="gradientoverlay" className="z-30 grayscale-100 absolute bottom-0 w-[100vw] h-[10vh]" width={100} height={10} />
      <div className="flex flex-col mb-20">
        <div className="mt-8 font-poppins text-center z-10">
          <span className="text-base md:text-lg font-light flex items-start justify-center lg:items-center lg:justify-center xl:gap-2 mb:1 xl:mb-2">
            <span className="hidden md:flex" role="img" aria-label="Waving hand">👋</span>
            <span>Hi, my name is <b>Abdur Rehman</b> and I am a freelance</span>
          </span>
        </div>
        <div className="relative mix-blend-difference flex flex-col items-center z-20">
            <h1 className="font-extrabold mix-blend-difference text-3xl md:text-7xl text-center leading-tight mb-0">
            <span className="text-white mix-blend-difference">
               Software Engineer
            </span>
          </h1>
        </div>
      </div>
      

      {/* Photo */}
      <div className="absolute top-64 lg:top-30 xl:top-32 bottom-0 right-0 z-10 flex justify-center w-full h-full">
        <div className="overflow-hidden  shadow-xl">
          <div className="absolute rounded-full w-full lg:w-2/5  mx-auto -z-10 inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(1,182,212,0.7),transparent_50%)]"></div>
          <Image
            className=" mx-auto select-none grayscale z-20 w-80 lg:w-2/3"
            src="/bg-remove2.png"
            alt="Abdur Rehman portrait"
            
            style={{ objectFit: 'cover' }}
            priority
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
}