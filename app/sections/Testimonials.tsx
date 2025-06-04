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
      text: "Before Synoptix, we were overwhelmed with customer inquiries. Now, AI handles over 70% of them, cutting down wait times and improving satisfaction. It’s a game changer for us.",
      name: "David R",
      position: "Head of Customer Experience",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      text: "We were looking for a solution that would integrate smoothly with our existing tools and keep our data secure. Synoptix nailed it—they made automation work without compromising on security.",
      name: "Samantha L",
      position: "IT Director",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      text: "Compliance used to be one of our biggest bottlenecks. Since switching to Synoptix, we’ve cut processing time by nearly 60% and eliminated most of the manual work. It’s not just smart—it’s the only AI platform for enterprise that actually fits how we work. ",
      name: "Mark T  ",
      position: "Compliance Officer",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 4,
      text: "AI felt like a huge leap at first, but Synoptix made it simple. Their AI agents are now part of our sales and marketing, and managing leads and customer interactions has never been smoother. Best enterprise AI platform! Highly Recomended!",
      name: "Jessica P",
      position: "VP of Marketing",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 5,
      text: "Data security is our priority, and Synoptix gave us that peace of mind. They helped us automate admin tasks, so our staff can focus on what truly matters—patient care",
      name: "Dr. Andrew M",
      position: "NovaCare Medica",
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
