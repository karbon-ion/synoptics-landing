"use client"

import Image from "next/image"
import { useState } from "react"

interface Testimonial {
  id: number
  text: string
  name: string
  position: string
  avatar: string
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Synoptix has transformed how we handle customer inquiries. The AI-powered responses are incredibly accurate and have cut our response time in half.",
      name: "ROBERT CHEN",
      position: "Customer Service Director",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      text: "The analytics dashboard gives us invaluable insights into our team's performance. We've optimized our workflows and increased productivity by 40%.",
      name: "JULIA MARTINEZ",
      position: "Operations Manager",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      text: "Security was our top concern, and Synoptix exceeded our expectations. The enterprise-grade protection gives us peace of mind with our sensitive data.",
      name: "SARAH PATEL",
      position: "IT Security Lead",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 4,
      text: "The AI-powered content generation has revolutionized our marketing efforts. We're creating engaging campaigns in a fraction of the time.",
      name: "MICHAEL WONG",
      position: "Marketing Director",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 5,
      text: "Implementation was smooth and the support team was exceptional. Our entire team was up and running with minimal training required.",
      name: "EMMA THOMPSON",
      position: "HR Manager",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      id: 6,
      text: "The ROI we've seen with Synoptix is remarkable. Our sales team closes deals faster with AI-powered insights and automated follow-ups.",
      name: "DAVID KUMAR",
      position: "Sales Director",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    },
    {
      id: 7,
      text: "Synoptix's compliance features are top-notch. We maintain perfect audit trails while automating our financial processes.",
      name: "LISA ANDERSON",
      position: "Finance Controller",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      id: 8,
      text: "The platform's scalability is impressive. As our company grew, Synoptix seamlessly adapted to our increasing demands.",
      name: "JAMES WILSON",
      position: "CTO",
      avatar: "https://randomuser.me/api/portraits/men/92.jpg",
    },
    {
      id: 9,
      text: "Synoptix's integration capabilities are fantastic. It works perfectly with our existing tools, creating a unified workflow.",
      name: "SOPHIA LEE",
      position: "Systems Architect",
      avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    },
  ]

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h3 style={{
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '100%',
  letterSpacing: '0%',
  textAlign: 'center',
  marginTop: '0.5rem', // corresponds to mt-2
  color: '#5662F6' // text-gray-800
}}>TESTIMONIALS</h3>
        <h2 style={{
  fontFamily: 'Syne, sans-serif',
  fontWeight: 700,
  fontSize: '36px',
  lineHeight: '100%',
  letterSpacing: '0%',
  textAlign: 'center',
  marginTop: '0.5rem', // corresponds to mt-2
  color: '#323E50' // text-gray-800
}}>
  The people have spoken
</h2>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.slice(activeIndex, activeIndex + 3).map((testimonial) => (
          <div key={testimonial.id} className="relative flex flex-col items-center text-center">
          <div
            className="bg-white shadow-md border border-gray-100 flex flex-col items-center text-center pt-16 pb-12 mb-10"
            style={{
              width: '370px',
              height: '322px',
              borderRadius: '5px',
              padding: '1.5rem', // equivalent to p-6
            }}
          >
        
                        <div className="text-indigo-500">
                  <Image
                    src="/test-page/testimonials/quotes.svg"
                    alt="Quote Icon"
                    width={50}
                    height={80}
                  />
                </div>

              <p 
                className="text-gray-600 p-12"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '150%',
                  letterSpacing: '0%',
                  textAlign: 'center'
                }}
              >
                {testimonial.text}
              </p>
              <div className="flex text-yellow-400 mb-6">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>

            <div className="absolute bottom-10 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <h4 className="font-bold text-sm" style={{fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '16px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center', marginTop: '0.5rem', color: '#323E50'}}>{testimonial.name}</h4>
            <p className="text-xs mt-2" style={{fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center', color: '#575757'}}>{testimonial.position}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 space-x-2">
        {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index * 3)}
            className={`rounded-full transition-all duration-300
              ${activeIndex === index * 3 ? "w-7 h-7 bg-[#5662F6]" : "w-4 h-4 mt-2 bg-[#9483FF]"}`}
            aria-label={`Go to testimonial group ${index + 1}`}
          />
        ))}
      </div>

    </div>
  )
}
