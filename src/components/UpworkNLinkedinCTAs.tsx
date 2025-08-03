"use client"


import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

import { FaLinkedin, FaSquareUpwork } from "react-icons/fa6";

const cardData = [
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


export default function UpworkNLinkedinCTAs() {
  return (
    <section id="hire" className="bg-black flex items-center justify-center min-h-[100vh] relative w-full overflow-hidden text-center">
      <div className="max-w-5xl z-30 py-20 mx-auto px-6">
        <h2 className="text-4xl text-cyan-500 md:text-5xl font-bold mb-10">
          Ready to collaborate <br /> on your next big idea?
        </h2>
        <p className="text-sm md:text-base font-poppins text-white mb-14">
          Whether it's through LinkedIn or Upwork, I'm ready to work with you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardData.map((data, index) => (
          <div key={index} className={cn(data.color, data.borderColor, "border p-8 rounded-2xl shadow-lg flex flex-col bg-opacity-20 items-center")}>
            {data.icon}    
            <h3 className="text-xl font-semibold mb-2">{data.heading}</h3>
            <p className="text-gray-500 font-poppins mb-4">
              {data.description}
            </p>
            <Button
              className={cn(data.color, data.borderColor , "font-poppins border text-white hover:bg-transparent transform transition-all hover:scale-105")}
              onClick={data.onclick}
            >
              {data.btntext}
            </Button>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}
