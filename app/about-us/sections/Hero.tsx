'use client'

import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return ( 
        <section className="relative w-full py-30">
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/about-us/bg.png"
                    alt="Background"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>
            
            <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 style={{
                        fontFamily: "Syne",
                        fontWeight: 700,
                        fontSize: "48px",
                        lineHeight: "72px",
                        letterSpacing: "0%",
                        textAlign: "center"
                    }}>
                       Powering Enterprise Intelligence with Responsible AI

                    </h1>
                    
                    <p className="mt-6" style={{
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "30px",
                        letterSpacing: "2%",
                        textAlign: "center"
                    }}>
                        Synoptix AI is a Microsoft-certified platform that transforms how organizations interact with their data by delivering real-time, AI-powered answers from complex documents and systems.

                    </p>
                    
                    <div className="mt-8">
                    <Link href="/contact-us" className="bg-[#5662F6] text-white font-medium py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300 inline-flex items-center">
            Want to learn more?
          </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
