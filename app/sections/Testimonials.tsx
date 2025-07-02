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
      text: "Synoptix AI doesn’t try to replace people, it empowers them. It connects the dots, preserves institutional knowledge, and provides clarity exactly when it’s needed. That’s digital transformation that respects human intelligence.",
      name: "Rony B ",
      position: "Business Development Manager ",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      text: "Synoptix highlights a crucial issue many organizations face. Integrating AI with existing systems can revolutionize how we access and use data.",
      name: "Nikhil Borole ",
      position: "Software Test Engineer ",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      text: "Synoptix AI emphasis on security and compliance is reassuring. Having real-time, AI-powered answers would dramatically enhance operational efficiency.",
      name: "Daniel Bode   ",
      position: "Chief Sales Officer (CSO) ",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 4,
      text: "Synoptix AI excels at unifying scattered enterprise data. It’s an essential part of successful digital transformation. It helps preserve critical institutional knowledge.",
      name: "Manuel Barragan ",
      position: "Digital Transformation Director & Strategist ",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 5,
      text: "Synoptix AI is shaping a bold path forward that combines clarity, precision, and real-world relevance in one powerful platform. Highly Recommended!",
      name: "Georgios L ",
      position: "Industrial Battery & Charger Technician, Bassi Labs Inc. ",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      id: 6,
      text: "Solving the problem of scattered enterprise data is critical. Synoptix AI’s approach to knowledge preservation and accessibility stands out as highly effective. ",
      name: "Susanne Hahn ",
      position: "Founding Partner & CEO, SKV Invest GmbH  ",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      id: 7,
      text: "Synoptix AI emphasis on security and compliance is reassuring. Having real-time, AI-powered answers dramatically enhances operational efficiency.” ",
      name: "Zefyron ",
      position: "Software Engineer ",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
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
                height: '335px',
                borderRadius: '5px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div className="flex flex-col items-center">
                <div className="text-indigo-500 mb-4">
                  <Image
                    src="/test-page/testimonials/quotes.svg"
                    alt="Quote Icon"
                    width={50}
                    height={80}
                  />
                </div>

                <p 
                  className="text-gray-600 px-6 py-4 flex-grow"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '150%',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    minHeight: '150px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {testimonial.text}
                </p>
              </div>
              
              <div className="flex text-yellow-400 mt-auto mb-4">
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

            <div className="absolute bottom-10 mb-5 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <h4 
              className="font-bold mt-12" 
              style={{
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: 700, 
                fontSize: '16px', 
                lineHeight: '100%', 
                letterSpacing: '0%', 
                textAlign: 'center', 
                color: '#323E50'
              }}
            >
              {testimonial.name}
            </h4>
            <p 
              className="text-xs mt-2" 
              style={{
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: 400, 
                fontSize: '14px', 
                lineHeight: '100%', 
                letterSpacing: '0%', 
                textAlign: 'center', 
                color: '#575757'
              }}
            >
              {testimonial.position}
            </p>
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
