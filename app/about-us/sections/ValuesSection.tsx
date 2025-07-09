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
        <section className="relative max-w-[1300px]  mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
            {/* Blue background area - not full width */}
            <div className="bg-[#5458da] max-h-[278px] w-[90%] md:w-[95%] h-[300px] md:h-[350px] absolute top-0 left-1/2 transform -translate-x-1/2 rounded-lg"></div>
            
            {/* Values title with dots */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex justify-center items-center mb-16 -mt-16">
                    <div className="relative w-[1041px] h-[78px] rounded-[39px] overflow-hidden">
                        <div className="absolute inset-0 bg-[#6164e6] rounded-[39px]"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex gap-2 mr-4">
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
                                    fontSize: "28px",
                                    lineHeight: "36px",
                                    color: "white",
                                    letterSpacing: "0.5px"
                                }}>
                                    THE SYNOPTIX VALUES
                                </h2>
                            </div>
                            <div className="flex gap-2 ml-4">
                                <Image src="/about-us/circle.png" alt="Circle" width={20} height={20} />
                                <Image src="/about-us/circle.png" alt="Circle" width={20} height={20} />
                                <Image src="/about-us/circle.png" alt="Circle" width={20} height={20} />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Value cards - 2x2 grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-6 md:gap-12 max-w-[1000px] mx-auto">
                    {valueCards.map((card, index) => (
                        <div key={index} className="bg-white shadow-lg overflow-hidden" style={{
                            width: "450px",
                            height: "auto",
                            minHeight: "320px",
                            borderRadius: "16px"
                        }}>
                            <div className="p-8">
                                <div className="w-16 h-16 bg-[#5E5CF9] rounded-full flex items-center justify-center mb-6">
                                    <div className="w-12 h-12 bg-white rounded-full"></div>
                                </div>
                                <h3 style={{
                                    fontFamily: "Syne",
                                    fontWeight: 700,
                                    fontSize: "24px",
                                    lineHeight: "32px",
                                    marginBottom: "12px"
                                }}>
                                    {card.title}
                                </h3>
                                <p style={{
                                    fontFamily: "Poppins",
                                    fontWeight: 400,
                                    fontSize: "12px",
                                    lineHeight: "20px",
                                    color: "#4B5563"
                                }}>
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
