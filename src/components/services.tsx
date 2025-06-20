"use client";

import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Search, Smartphone, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    icon: Code,
    title: 'Development',
    description: 'Clean, modern code built with the latest technologies and best practices.',
    features: ['React & Next.js', 'TypeScript', 'API Integration', 'Database Design']
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Beautiful, user-centered designs that convert visitors into customers.',
    features: ['UI/UX Design', 'Responsive Layout', 'Brand Identity', 'Prototyping']
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Seamless deployment and ongoing support to keep your site running smoothly.',
    features: ['Cloud Hosting', 'CI/CD Pipeline', 'Monitoring', 'Maintenance']
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your visibility with technical SEO and performance optimization.',
    features: ['Technical SEO', 'Core Web Vitals', 'Schema Markup', 'Site Speed']
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Mobile-optimized experiences that work perfectly on any device.',
    features: ['Responsive Design', 'Touch Optimization', 'PWA Features', 'Cross-Browser']
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Lightning-fast websites that provide exceptional user experiences.',
    features: ['Code Splitting', 'Lazy Loading', 'CDN Integration', 'Caching Strategy']
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 sm:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <Badge variant="outline" className="w-fit mx-auto">
            Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Here's How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I use a proven process to deliver exceptional results, from initial concept 
            to final deployment and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-muted-foreground">
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