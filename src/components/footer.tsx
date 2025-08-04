"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { socialLinks } from '@/data/objects/footerdata'
import { footerLinks } from '@/data/objects/footerdata'
import Link from 'next/link';
import CONSTANTS from "@/constants/index";


export function Footer() {
const privacyandtemslink = [
  {
    label: "Terms of Condition",
    link: CONSTANTS.TERMS_AND_CONDITION
  },
  {
    label: "Privacy Policy",
    link: CONSTANTS.PRIVACY_AND_POLICY
  },
]

  const currentYear = new Date().getFullYear();
  const website = 'https://benabdurrehman.com';
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-black pb-10 md:p-10 relative bottom-0">
      <div className="w-[90%] md:max-w-5xl rounded-2xl hover:ring-2 transition-all ring-1 ring-cyan-500 mx-auto px-6 sm:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand */}
            <div className=" lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2"
              >
                <span className="text-xl font-bold">
                  <Link href={website}>
                    Ben A.
                  </Link>
                  </span>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-sm md:text-base font-poppins text-muted-foreground leading-relaxed max-w-md"
              >
                Creating exceptional digital experiences that help businesses grow 
                and connect with their audiences. Let's build something amazing together.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex font-poppins space-x-4"
              >
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="hover:bg-primary/10 hover:scale-95 transition-all duration-300"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (index + 3) }}
                className="space-y-4"
              >
                <h3 className="font-semibold text-foreground">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="text-muted-foreground font-poppins hover:text-primary transition-all  text-sm"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-6 flex flex-col sm:flex-row items-center justify-center lg:justify-between space-y-4 sm:space-y-0"
        >
          <p className="text-sm text-center lg:text-left font-poppins text-muted-foreground">
            © {currentYear} 
            <Link href={website} >
                <span className='font-semibold text-white hover:text-cyan-500'>
                &nbsp;benabdurrehman&nbsp;  
                </span>
              </Link> 
                All rights reserved.
          </p>
          <div className="flex max-sm:flex-col font-poppins items-center justify-center md:space-x-6 text-sm text-muted-foreground">
            {
              privacyandtemslink.map((data, i) => (
              <Link key={i} href={data.link} className="hover:text-primary transition-colors">
                {data.label} 
              </Link>
              ))
            }
          </div>
        </motion.div>
      </div>
    </footer>
  );
}