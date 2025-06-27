'use client'

import Image from 'next/image'

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
                        Our mission is to accelerate the development of AI applications
                    </h1>
                    
                    <p className="mt-6" style={{
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "30px",
                        letterSpacing: "2%",
                        textAlign: "center"
                    }}>
                        Better data leads to more performant models. Performant models lead to faster deployment. 
                        We help deliver value from AI investments faster with better data by providing an end-to-end 
                        solution to manage the entire ML lifecycle.
                    </p>
                    
                    <div className="mt-8">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
                            Start a free project
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
