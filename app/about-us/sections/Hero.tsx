'use client'

import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return ( 
        <section className="relative w-full">
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/about-us/bg.png"
                    alt="Background"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28 lg:py-32 relative z-10">
                <div className="max-w-4xl mx-auto text-center mt-8 sm:mt-4 md:mt-0">
                    <h1 style={{
                        fontFamily: "Syne",
                        fontWeight: 700,
                        fontSize: "32px",
                        lineHeight: "1.2",
                        letterSpacing: "0%",
                        textAlign: "center"
                    }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                       Powering Enterprise Intelligence with Responsible AI

                    </h1>
                    
                    <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg px-2" style={{
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "1.6",
                        letterSpacing: "2%",
                        textAlign: "center"
                    }}>
                        Synoptix AI is a Microsoft-certified platform that transforms how organizations interact with their data by delivering real-time, AI-powered answers from complex documents and systems.

                    </p>
                    
                    <div className="mt-6 sm:mt-7 md:mt-8">
                    <Link 
                        href="/contact-us" 
                        className="bg-[#5662F6] text-white font-medium text-sm sm:text-base py-2 px-5 sm:py-3 sm:px-6 rounded-full hover:bg-blue-600 transition duration-300 inline-flex items-center"
                    >
            Want to learn more?
          </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
