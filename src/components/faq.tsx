"use client";

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const faqs = [
  {
    question: "How long does it take to complete my website?",
    answer: "Timeline varies based on project complexity. A simple website typically takes 2-4 weeks, while complex applications can take 6-12 weeks. I'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "How much will my website cost?",
    answer: "Pricing depends on your specific requirements, features, and complexity. I offer flexible packages starting from basic websites to complex applications. Let's discuss your needs for a custom quote."
  },
  {
    question: "What if I need changes after the website is done?",
    answer: "I provide ongoing support and maintenance. Minor updates are included for the first month, and I offer maintenance packages for long-term support and updates."
  },
  {
    question: "What do you need from me to get started?",
    answer: "I'll need your brand assets (logo, colors, content), examples of designs you like, and a clear understanding of your goals and target audience. I'll guide you through the entire process."
  },
  {
    question: "How about hosting and domain?",
    answer: "I can help you choose the best hosting solution for your needs and budget. I work with various hosting providers and can manage the setup and deployment process for you."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! All websites I create are fully responsive and optimized for mobile devices. I follow a mobile-first approach to ensure perfect functionality across all screen sizes."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 sm:px-8 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <Badge variant="outline" className="w-fit mx-auto">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Got questions? I have the answers
          </h2>
          <p className="text-lg text-muted-foreground">
            Get fast insights here. If you can't find answers to your questions about 
            my services, don't hesitate to contact me.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}