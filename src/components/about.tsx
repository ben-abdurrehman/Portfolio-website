"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import AnimatedHeadline from "./AnimatedHeadline";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-24 relative bg-black px-6 sm:px-20">
      <div className="hidden md:flex absolute z-0 top-0 bottom-0 left-1/2 right-0 bg-[radial-gradient(circle_at_50%_50%,rgba(1,182,212,0.7),transparent_50%)]"></div>
      <div className="z-20 lg:h-[80vh] max-w-7xl flex items-center justify-center mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <div className="flex flex-col items-center lg:items-start gap-5">
            <div className="space-y-8">
              <Badge variant="outline" className="w-fit">
                About Me
              </Badge>
            </div>
            <div className="space-y-6">
              <AnimatedHeadline
                text="I'm Abdurrehman, a full stack-web developer, who design and develop custom web solutions. I don't only create websites, I turn your physical presence into digital presence, I create an emotional and an everlasting connection between you and your clients, this is what I've been doing it for 4 years. So what are you waiting for?"
                as="p"
                className="text-xl md:text-3xl font-medium text-center lg:text-justify"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center  mt-2"
            >
              <Button variant="outline" className="font-poppins bg-black hover:bg-black ring-2 ring-gray-900 hover:ring-cyan-500" size="lg">
                Start here
              </Button>
            </motion.div>
          </div>
          {/* Trust Badges */}
          {/* <div className="flex flex-wrap gap-4 pt-4">
              {[
                'React Certified',
                'AWS Certified', 
                '50+ Projects',
                '5 Star Rating'
              ].map((badge) => (
                <Badge key={badge} variant="secondary">
                  {badge}
                </Badge>
              ))}
            </div> */}

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative  h-[500px] overflow-hidden">
              <Image
                src="/My-talk.png"
                alt="Developer portrait"
                fill
                className="object-cover grayscale hidden md:flex"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <Image src="/gradientoverlay.png" alt="gradientoverlay" className="z-30 grayscale-100 absolute bottom-0 w-full h-20" width={100} height={10} />
            </div>

            {/* Floating Card */}
            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl shadow-lg border"
            >
              <div className="text-2xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
