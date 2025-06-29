import { FaLinkedin, FaSquareUpwork } from "react-icons/fa6";

export const cardData = [
  {
      icon: <FaLinkedin className="h-10 w-10 text-[#0077B5] mb-4" />,
      heading: "Connect on LinkedIn",
      description: "Reach out on LinkedIn to discuss how we can work together.",
      onclick: () => window.open('https://www.linkedin.com/in/abdurrehman-waseem/', '_blank'),
      btntext: "View LinkedIn Profile",
      color: "bg-[#0077B5]", 
      borderColor: "border-[#0077B5]",
  },
  {
      icon: <FaSquareUpwork className="h-10 w-10 text-[#14a800] mb-4" />, 
      heading: "Hire on Upwork",
      description: "Invite me to your project on Upwork and let's get started.",
      onclick: () => window.open('https://www.upwork.com/freelancers/~01669495152aa87771', '_blank'),
      btntext: "Hire Me on Upwork",
      color: "bg-[#14A800]",
      borderColor: "border-[#14A800]",
  },
];
