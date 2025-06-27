'use client'

import Image from 'next/image'

const CeoLetterSection = () => {
    return (
        <section className="relative max-w-[1215px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
            <div className="flex flex-col items-center justify-center">
                <div className="text-center max-w-[800px] mx-auto">
                    <div className="flex flex-col items-center justify-center mb-12">
                        <h2 style={{
                            fontFamily: "Syne",
                            fontSize: "40px",
                            fontWeight: 700,
                            lineHeight: "45px",
                            letterSpacing: "0%",
                            textAlign: "center",
                            color: "#333",
                        }}>
                            a letter from
                        </h2>
                        <div className="flex items-center">
                            <h2 style={{
                                fontFamily: "Syne",
                                fontSize: "40px",
                                fontWeight: 700,
                                lineHeight: "45px",
                                letterSpacing: "0%",
                                textAlign: "center",
                                color: "#333",
                                marginRight: "8px",
                                display: "inline-flex",
                                alignItems: "center"
                            }}>our</h2>
                            <div className="inline-flex items-center justify-center" style={{ transform: "translateY(2px)" }}>
                                <Image 
                                    src="/about-us/ceo.png" 
                                    alt="CEO" 
                                    width={40} 
                                    height={40}
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <h2 style={{
                                fontFamily: "Syne",
                                fontSize: "40px",
                                fontWeight: 700,
                                lineHeight: "45px",
                                letterSpacing: "0%",
                                textAlign: "center",
                                color: "#333",
                                marginLeft: "8px",
                                display: "inline-flex",
                                alignItems: "center"
                            }}>CEO</h2>
                        </div>
                    </div>
                    
                    <div>
                        <p style={{
                            fontFamily: "Poppins",
                            fontWeight: 400,
                            fontStyle: "italic",
                            fontSize: "16px",
                            lineHeight: "37px",
                            letterSpacing: "0%",
                            textAlign: "center",
                            marginBottom: "24px"
                        }}>
                            
                        </p>
                        
                        <p style={{
                            fontFamily: "Poppins",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "37px",
                            letterSpacing: "0%",
                            textAlign: "center"
                        }}>
                            "Artificial intelligence must be built with accountability, transparency, and trust at its core. As enterprises embrace AI to drive efficiency and innovation, the responsibility to deploy it safely and ethically becomes even more critical.
My commitment to Responsible AI starts with how my team has designed and developed the platform. Synoptix AI is built to operate within your infrastructure, ensuring full control over data access, usage, and governance. We support strict role-based permissions, audit trails, and fine-tuned agent behaviour to ensure AI outcomes align with enterprise standards.
We’ve embedded safeguards throughout the platform, from toxicity and bias detection to privacy filters and automated evaluations. Every AI interaction is traceable, explainable, and auditable so that teams can make informed decisions with confidence.
Responsible AI isn’t a checkbox. It’s a continuous practice. I have partnered with customers to ensure that AI adoption remains safe, compliant, and aligned with their values. As the technology evolves, so does our commitment to building AI that supports people, respects data, and earns trust at every level.
Thank you for joining us in building AI that works not just efficiently, but responsibly.
"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CeoLetterSection
