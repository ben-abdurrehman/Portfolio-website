// import { Mail, Phone, MessageSquare, Slack } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { faqcta } from '@/data/objects/faq'
import Image from 'next/image'


export function FaqCta() {
  return (
    <section className="bg-black relative w-auto md:w-6xl z-20 rounded-2xl overflow-hidden text-white text-center">
      <Image src="/Small-pattern.png" alt="background-lines" className="-z-10 absolute w-full h-full select-none" width={100} height={100}/>
      <div className="w-auto md:max-w-3xl z-30 mx-auto p-5 md:p-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Still have questions? Let's connect.
        </h2>
        <p className="text-gray-400 text-sm md:text-base font-poppins mb-10">
          Reach out through any of the platforms below — I’ll respond as soon as I can.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
          {faqcta.map((cta, index) => (
          <Button
          key={index}
            variant="outline"
            className="w-full bg-white font-poppins text-black hover:bg-cyan-500 border border-white"
            onClick={cta.onclick}
            >
            <cta.icon className="mr-2 text-lg" /> 
            <span>{cta.label}</span>
          </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
