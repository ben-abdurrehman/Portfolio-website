'use client';

import Link from "next/link";
import Image from "next/image";

// import '@/styles/globals.css';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-start min-h-[90vh] md:min-h-[100vh] bg-black py-20 text-white overflow-hidden px-4">
      {/* Intro */}
      <Image src="/lines-bg.png" alt="background-lines" className="z-10 bg-gradient-to-b from-40% from-transparent via-60% via-transparent to-black absolute w-[100vw] h-[100vh]" width={100} height={100}/>
      <Image src="/gradientoverlay.png" alt="gradientoverlay" className="z-30 grayscale-100 absolute bottom-0 w-[100vw] h-[10vh]" width={100} height={10} />
      <div className="flex flex-col">
        <div className="mt-8 text-center z-10">
          <span className="text-base md:text-2xl flex items-start justify-center lg:items-center lg:justify-center xl:gap-2 mb:1 xl:mb-2">
            <span className="hidden md:flex" role="img" aria-label="Waving hand">👋</span>
            <span>Hi, my name is <b>Abdur Rehman</b> and I am a freelance</span>
          </span>
        </div>
        <div className="relative mix-blend-difference flex flex-col items-center z-20">
            <h1 className="font-extrabold mix-blend-difference text-3xl md:text-7xl text-center font-inter leading-tight mb-0">
            <span className="text-white mix-blend-difference">
               Software Engineer
            </span>
          </h1>
          {/* <h2
            className="font-extrabold text-4xl md:text-6xl text-center mt-2 mb-4 text-transparent"
            style={{
              WebkitTextStroke: '2px #fff',
              color: 'transparent',
              textStroke: '2px #fff',
              opacity: 0.2,
            }}
          >
            & Photographer
          </h2> */}
        </div>
      </div>
      

      {/* Photo */}
      <div className="absolute top-64 md:top-32 bottom-0 right-0 z-10 flex justify-center w-full h-full">
        <div className="w-80 h-[600px] md:w-[400px] grayscale-100 overflow-hidden  shadow-xl">
          <div className="absolute rounded-full w-full lg:w-1/2 h-full mx-auto -z-10 inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,188,166,0.5),transparent_50%)]"></div> 
          <Image
            className=" mx-auto select-none z-20 w-80 h-[500px] lg:w-80 lg:h-[600px]"
            src="/bg-remove2.png"
            alt="Abdur Rehman portrait"
            
            style={{ objectFit: 'cover' }}
            priority
            width={100}
            height={100}
          />
        </div>
      </div>
      
      {/* Buttons */}
      {/* <div className="flex flex-col md:flex-row gap-4 mt-8 z-10">
        <button className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition">
          You need a designer
        </button>
        <button className="px-6 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-black transition">
          You need a photographer
        </button>
      </div> */}
    </section>
  );
}