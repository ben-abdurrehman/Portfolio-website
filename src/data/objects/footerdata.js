import { Github, Linkedin, Instagram, Mail } from 'lucide-react';



export const socialLinks = [
  { icon: Github, href: 'https://github.com/ben-abdurrehman/', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/abdurrehman-waseem/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/benabdurrehman', label: 'Twitter' },
  { icon: Mail, href: 'mailto:benabdurrehman@gmail.com', label: 'Email' },
];

export const footerLinks = [
  {
    title: 'Services',
    links: [
      { name: 'Web Development', href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'SEO Optimization', href: '#services' },
      { name: 'Maintenance', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '#about' },
      { name: 'Work', href: '#work' },
      { name: 'Process', href: '#services' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  // {
  //   title: 'Resources',
  //   links: [
  //     { name: 'Blog', href: '#' },
  //     { name: 'Case Studies', href: '#work' },
  //     { name: 'FAQ', href: '#faq' },
  //     { name: 'Support', href: '#contact' },
  //   ],
  // },
];