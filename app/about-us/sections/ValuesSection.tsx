'use client'

import Image from 'next/image'

const ValuesSection = () => {
    const valueCards = [
        {
            title: "Trust by Design",
            description: "We build systems with security, transparency, and accountability at the core because trust isn't a feature, it's a foundation. We uphold the highest standards of data ethics—respecting privacy, minimising bias, and ensuring responsible AI deployment at every step."
        },
        {
            title: "Purposeful Innovation",
            description: "We don't chase trends. We solve real problems using AI that is practical, scalable, and aligned with enterprise needs. We go beyond answers by understanding your data, workflows, and objectives, we deliver relevance at enterprise scale."
        },
        {
            title: "Human-Centred Automation",
            description: "We build systems that augment people, not replace them. Our mission is to empower teams, not sideline them. We design agents and workflows that support teams, enhance productivity, and strengthen collaboration across the organisation."
        },
        {
            title: "Security & Privacy by Design",
            description: "Security, data privacy, and user control are embedded into every layer of the platform. Enterprises maintain full data ownership, whether deployed in the cloud or a fully offline environment."
        }
    ];
    return (
        <section className="relative max-w-[1300px] mt-12 sm:mt-16 md:mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 overflow-hidden">
            {/* Blue background area - not full width */}
            <div className="bg-[#5458da] max-h-[278px] w-[95%] h-[250px] sm:h-[280px] md:h-[350px] absolute top-0 left-1/2 transform -translate-x-1/2 rounded-lg"></div>
            
            {/* Values title with dots */}
            <div className="container mx-auto px-2 sm:px-4 relative z-10">
                <div className="flex justify-center items-center mb-8 sm:mb-12 md:mb-16 -mt-8 sm:-mt-12 md:-mt-16">
                    <div className="relative w-full max-w-[1041px] h-[60px] sm:h-[70px] md:h-[78px] rounded-[39px] overflow-hidden">
                        <div className="absolute inset-0 bg-[#6164e6] rounded-[39px]"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="hidden sm:flex gap-2 mr-4">
                                <Image src="/about-us/circle.png" alt="Circle" width={20} height={20} />
                                <Image src="/about-us/circle.png" alt="Circle" width={20} height={20} />
                                <Image src="/about-us/circle.png" alt="Circle" width={20} height={20} />
                            </div>
                            <div 
                                className="bg-[#5458da] inline-flex items-center justify-center"
                                style={{
                                    height: "40px",
                                    borderRadius: "25px",
                                    padding: "0 25px",
                                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1) inset"
                                }}
                            >
                                <h2 style={{
                                    fontFamily: "Syne",
                                    fontWeight: 700,
                                    fontSize: "18px",
                                    lineHeight: "1.3",
                                    color: "white",
                                    letterSpacing: "0.5px"
                                }} className="text-base sm:text-xl md:text-2xl lg:text-[28px]">
                                    THE SYNOPTIX VALUES
                                </h2>
                            </div>
                            <div className="hidden sm:flex gap-2 ml-4">
                                <Image src="/about-us/circle.png" alt="Circle" width={20} height={20} />
                                <Image src="/about-us/circle.png" alt="Circle" width={20} height={20} />
                                <Image src="/about-us/circle.png" alt="Circle" width={20} height={20} />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Value cards - 2x2 grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-6 md:gap-8 lg:gap-12 max-w-[1000px] mx-auto">
                    {valueCards.map((card, index) => (
                        <div key={index} className="bg-white shadow-lg overflow-hidden w-full max-w-[450px]" style={{
                            height: "auto",
                            minHeight: "280px",
                            borderRadius: "16px"
                        }}>
                            <div className="p-4 sm:p-6 md:p-8">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#5E5CF9] rounded-full flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full"></div>
                                </div>
                                <h3 style={{
                                    fontFamily: "Syne",
                                    fontWeight: 700,
                                    fontSize: "20px",
                                    lineHeight: "1.3",
                                    marginBottom: "8px"
                                }} className="text-lg sm:text-xl md:text-2xl">
                                    {card.title}
                                </h3>
                                <p style={{
                                    fontFamily: "Poppins",
                                    fontWeight: 400,
                                    fontSize: "12px",
                                    lineHeight: "1.5",
                                    color: "#4B5563"
                                }} className="text-xs sm:text-sm md:text-base">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ValuesSection
