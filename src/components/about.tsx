"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export function About() {
  return (
    <section id="about" className="py-24  px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">
                About Me
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                How I Can Help You
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Mohammad, a Full Stack Web Developer focused on creating digital experiences 
                that combine beautiful design with flawless functionality.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Frontend Expertise</h3>
                <p className="text-muted-foreground">
                  I specialize in React, Next.js, and modern JavaScript to create 
                  responsive, interactive user interfaces that users love.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                <p className="text-muted-foreground">
                  From Node.js to database design, I build robust backend systems 
                  that power your applications efficiently and securely.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Performance & SEO</h3>
                <p className="text-muted-foreground">
                  Every project is optimized for speed and search engines, 
                  ensuring your site performs well and ranks high.
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
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
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-blue-500/20">
              <Image
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                alt="Developer portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl shadow-lg border"
            >
              <div className="text-2xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}