import { BiLogoGmail, BiLogoWhatsapp, BiLogoSlack} from "react-icons/bi";
import { IoPhonePortraitOutline } from "react-icons/io5";

export const faqs = [
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

export const faqcta = [
  {
    icon: BiLogoGmail,
    label: "Gmail",
    onclick: () => window.location.href = 'mailto:benabdurrehman@gmail.com',
  },
  {
    icon: IoPhonePortraitOutline,
    label: "Phone",
    onclick: () => window.location.href = 'tel:+923254649466',
  },
  {
    icon: BiLogoWhatsapp,
    label: "Whatsapp",
    onclick: () => window.open('https://wa.me/923294019441', '_blank'),
  },
  {
    icon: BiLogoSlack,
    label: "Slack",
    onclick: () => window.open('https://join.slack.com/t/webdevelopmen-ilq4762/shared_invite/zt-387i0rvpz-18F9XZ~85DV8MN0~m9ENOw', '_blank'),
  },
]