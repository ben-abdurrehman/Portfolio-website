// components/Work.tsx
"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/objects/Projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function Work() {
  const swiperRef = useRef<any>(null);

  return (
    <section id="work" className="min-h-screen w-full bg-black flex flex-col px-4 py-10 relative overflow-hidden">
      {/* Static Left Text */}
      
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-left space-y-4 w-full z-10 mb-8"
      >
        <Badge variant="outline" className="w-fit">
          Portfolio
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Work I'm Proud Of
        </h2>
        <p className="text-sm md:text-base font-poppins text-muted-foreground">
          Premium design. Flawless code. Built to succeed and built to last.
        </p>
      </motion.div>
      
      <div className="flex-1 w-full">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            waitForTransition: true,
          }}
          slidesPerView="auto"
          speed={8000}
          loop={true}
          allowTouchMove={false}
          spaceBetween={24}
          className="w-full h-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title} style={{ width: "auto" }}>
                <Card className="group p-5 h-[30vh] md:h-[45vh] w-[70vw] max-w-[350px] md:w-[70vw] lg:w-[50vw] overflow-hidden transition-all duration-300">
                  <div className="relative h-auto overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={500}
                      className="object-cover w-full h-20 md:h-36 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-1 md:p-2">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  </CardContent>
                </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
