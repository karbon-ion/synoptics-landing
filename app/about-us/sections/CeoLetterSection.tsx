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
                            "Synoptix AI was founded on the belief that trust is the foundation of enterprise AI adoption. Our mission is to deliver AI not just for performance, but for transparency, accountability, and control. We are a Microsoft partner, and our platform is fully aligned with Microsoft’s security, compliance, and governance standards. Our platform is purpose-built for compliance-driven environments, enabling enterprises to scale AI securely and productively.  
"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CeoLetterSection
