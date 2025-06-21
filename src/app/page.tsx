import React from 'react';
import { Header } from '@/components/header';
import Hero from '@/components/hero';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Work } from '@/components/work';
import { FAQ } from '@/components/faq';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen w-[100vw] overflow-hidden bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Work />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}