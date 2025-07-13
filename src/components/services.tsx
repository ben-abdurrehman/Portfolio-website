// components/Services.tsx
"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { services } from '@/data/objects/Features';
import Image from 'next/image';

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 600, damping: 100 });
  const springY = useSpring(mouseY, { stiffness: 600, damping: 100 });

  const x = useTransform(springX, (v) => `${v}px`);
  const y = useTransform(springY, (v) => `${v}px`);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      const centerX = e.clientX - rect.left - 400; // 288px ball → 144px radius
      const centerY = e.clientY - rect.top - 400;

      mouseX.set(centerX);
      mouseY.set(centerY);
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener('mousemove', move);
    }

    return () => {
      if (el) {
        el.removeEventListener('mousemove', move);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative min-h-[100vh] flex flex-col items-center justify-start px-6 overflow-hidden bg-black"
    >
      {/* Gradient Mouse Follower */}
      <motion.div
        className="hidden md:block absolute top-0 left-0 w-[750px] h-[750px] bg-[radial-gradient(circle_at_50%_50%,rgba(1,182,212,0.3),transparent_50%)] rounded-full pointer-events-none z-10"
        style={{ translateX: x, translateY: y }}
      />

      {/* Overlays */}
      <Image
        src="/gradientoverlay.png"
        alt="gradientoverlay"
        className="z-30 grayscale-100 absolute bottom-0 w-full h-20"
        width={100}
        height={10}
      />
      <Image
        src="/gradientoverlay.png"
        alt="gradientoverlay"
        className="z-30 grayscale-100 absolute scale-y-[-1] top-0 w-full h-20"
        width={100}
        height={10}
      />
      <Image
        src="/Linespattern.png"
        alt="background-lines"
        className="z-0 absolute w-[100vw] h-auto select-none"
        width={100}
        height={100}
      />

      <div className="max-w-5xl py-20 z-20 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <Badge variant="outline" className="w-fit text-base mx-auto">
            Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Here's How It Works
          </h2>
          <p className="text-sm md:text-base font-poppins text-muted-foreground max-w-2xl mx-auto">
            I use a proven process to deliver exceptional results, from initial concept to final deployment and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full ring-2 ring-gray-900 hover:ring-cyan-500 transition-shadow duration-300 group">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-sm md:text-base font-poppins leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex font-poppins items-center text-sm md:text-base text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
