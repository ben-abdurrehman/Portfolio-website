"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedin,
  FaSquareUpwork,
  FaBarsStaggered,
  FaXmark,
} from "react-icons/fa6";
import { HiReply } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CalFloatingButton from "./cal.com";
import Link from "next/link";
import CONSTANTS from "@/constants";
import { Divide } from "lucide-react";

const navigationlinks = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
  { name: "Hire me", href: "#hire", icon: <HiReply className="h-4 w-4" /> },
];
// const hireButtons = [
//     { name: 'Upwork',icon: <FaSquareUpwork className="h-10 rounded-full w-10 text-[#14a800]" />, href: 'https://www.linkedin.com/in/abdurrehman-waseem/' },
//     { name: 'LinkedIn' ,icon: <FaLinkedin className="h-10 rounded-full w-10 text-[#0077B5]" />, href: 'https://www.linkedin.com/in/abdurrehman-waseem/' },
// ];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logo = {
    label: "BenA.",
    href: CONSTANTS.WEBSITEURL,
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "w-full flex items-center justify-center transition-all duration-300"        
      )}
    >
      <nav className={cn("max-w-7xl w-4/5 fixed top-2 rounded-3xl mx-auto px-6 sm:px-8 transition-all duration-300 z-50", 
       isScrolled
          ? "bg-background/80 backdrop-blur-md border border-border"
          : "bg-black")}>
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center w-1/4 justify-center space-x-2"
          >
            <Link className="text-xl font-bold" href={logo.href}>
              {logo.label}
            </Link>
          </motion.div>

          <div className="hidden lg:flex font-poppins w-3/4 items-center justify-center">
            {navigationlinks.map((item, i) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={cn(i === 4 && "ml-6","text-muted-foreground group max-w-[20%] w-[15%] h-6 flex justify-end")}
              >
                <span className="relative font-normal w-full h-full overflow-hidden">    
                  <span className="text-white text-sm absolute inset-0 group-hover:-translate-y-full transition-transform duration-500">
                    {item.name}
                  </span> 
                  <span className="text-cyan-500 text-sm absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      {item.name}
                  </span> 
                </span>
                {item.icon && 
                  <div className="relative w-6 h-6 flex text-sm items-end justify-end overflow-hidden">
                            <div className="text-white absolute inset-0 group-hover:-translate-x-full transition-transform duration-500" >{item.icon} </div>
                            {/* Incoming arrow from right */}
                            <div className="text-cyan-500 absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500" >{item.icon} </div>
                            </div>
                }
              </button>
            ))}
          </div>

          <div className="hidden w-1/4 lg:flex items-center justify-center">
            <CalFloatingButton bgColor="bg-white" />
          </div>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBarsStaggered className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4 border-t border-border">
                {navigationlinks.flat().map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </button>
                ))}

                <CalFloatingButton bgColor="bg-white" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
