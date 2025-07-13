'use client';

import Image from "next/image";


export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center md:justify-center min-h-[90vh] md:min-h-[100vh] bg-black text-white overflow-hidden px-4">
      {/* Intro */}
      <Image src="/lines-bg.png" alt="background-lines" className="z-10 absolute w-[100vw] h-[100vh]" width={100} height={100}/>
      <Image src="/gradientoverlay.png" alt="gradientoverlay" className="z-30 grayscale-100 absolute bottom-0 w-[100vw] h-[5vh]" width={100} height={10} />
      <div className="absolute rounded-full w-full md:w-auto h-auto mx-auto z-0 -bottom-1/2 right-0 left-0 top-0 bg-[radial-gradient(circle_at_50%_50%,rgba(1,182,212,0.7),transparent_50%)]"></div>
      <Image
            className="absolute bottom-0 mx-auto select-none z-20 h-auto w-[340px] sm:w-[40%] lg:w-[25%]"
            src="/bg-remove3.png"
            alt="Abdur Rehman portrait"
            
            style={{ objectFit: 'cover' }}
            priority
            width={100}
            height={100}
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
    </section>
  );
}


