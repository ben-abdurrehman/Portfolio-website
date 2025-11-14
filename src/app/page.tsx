import React from 'react';
import { Header } from '@/components/header';
import Hero from '@/components/hero';
import PitchingTagline from '@/components/boltedTextSection';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Work } from '@/components/work';
import { FAQ } from '@/components/faq';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import UpworkNLinkedinCTAs from '@/components/UpworkNLinkedinCTAs';
// import { ProjectFanGrid } from '@/components/projectFanGrid';

export default function Home() {
  return (
  
      <main className="min-h-screen w-[100vw] overflow-hidden bg-background">
        <Header />
        <Hero />
        <Work />
        <PitchingTagline />
        <About />
        <Services />
        <UpworkNLinkedinCTAs />
        <FAQ />
        <Contact />
        <Footer />
      </main>
  );
}