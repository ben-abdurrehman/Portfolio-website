"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution built with Next.js, featuring real-time inventory, payment processing, and admin dashboard.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    github: "#",
    live: "#"
  },
  {
    title: "SaaS Dashboard",
    description: "A comprehensive analytics dashboard with real-time data visualization, user management, and subscription handling.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    github: "#",
    live: "#"
  },
  {
    title: "Mobile App Landing",
    description: "A stunning landing page for a mobile app with interactive animations, testimonials, and download tracking.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    tags: ["Next.js", "Framer Motion", "TailwindCSS"],
    github: "#",
    live: "#"
  },
  {
    title: "Healthcare Portal",
    description: "A secure patient portal with appointment booking, medical records, and telemedicine integration.",
    image: "https://images.pexels.com/photos/4386477/pexels-photo-4386477.jpeg",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "#",
    live: "#"
  }
];

export function Work() {
  return (
    <section id="work" className="py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <Badge variant="outline" className="w-fit mx-auto">
            Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Work I'm Proud Of
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium design. Flawless code. Built to succeed and built to last.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}