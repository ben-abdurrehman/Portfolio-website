"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/objects/Projects";
import Link from "next/link";



export function Work() {
  return (
    <section id="work" className="bg-black text-white px-6">
      <div className="max-w-5xl py-20  mx-auto">
        <div className="flex flex-col items-center justify-center mb-16">
          <Badge variant="outline" className="text-base mb-4">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Featured Projects
          </h2>
          <p className="text-muted-foreground font-poppins max-w-xl">
            Real-world solutions crafted with precision, built for performance.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`flex flex-col ring-1 bg-background  hover:ring-cyan-500 ring-gray-900 transition-all group duration-300 p-10 rounded-lg md:flex-row items-center gap-10 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex-1"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="rounded-lg w-full ring-1 group-hover:ring-cyan-500 ring-gray-900 object-cover shadow-md group-hover:scale-[1.015] transition-transform duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex-1"
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 font-poppins text-base md:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/10 px-3 py-1 text-sm font-poppins rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button asChild variant="secondary">
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 text-lg w-4" /> Live Demo
                  </Link>
                </Button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
