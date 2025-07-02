'use client';

import Image from 'next/image';

const aiPrinciples = [
  {
    id: 'safe',
    title: 'Controlled ',
    icon: '/synoptix-search/responsible-ai/safe-icon.svg',
    description: 'Outputs remain within approved data boundaries, respecting permissions and context. '
  },
  {
    id: 'explainable',
    title: 'Auditable ',
    icon: '/synoptix-search/responsible-ai/explainable.svg',
    description: 'Every response is traceable, explainable, and backed by citations, supporting internal reviews and regulatory audits. '
  },
  {
    id: 'unbiased',
    title: 'Impartial  ',
    icon: '/synoptix-search/responsible-ai/unbiased.svg',
    description: 'Models are evaluated for fairness and monitored to reduce bias across outcomes. '
  },
  {
    id: 'compliant',
    title: 'Regulatory-Ready  ',
    icon: '/synoptix-search/responsible-ai/compliant.svg',
    description: 'Designed to meet global standards across security, data privacy, and compliance. '
  }
];

export default function ResponsibleAI() {
    return (
        <section className="bg-[#6B7BF7] py-10 sm:py-12 md:py-16 text-white max-w-7xl rounded-xl mx-auto mb-20 sm:mb-25 md:mb-30 mx-4 sm:mx-6 md:mx-auto">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-center font-bold mb-4" style={{fontFamily: "Syne",fontWeight:700,fontSize:"clamp(28px, 5vw, 36px)",lineHeight:"clamp(36px, 5vw, 45px)"}}>
                Why do Enterprises Need Responsible AI? 
                </h2>
                <p className="text-center max-w-3xl mx-auto mb-8" style={{fontFamily: "Poppins",fontWeight:400,fontSize:"16px",lineHeight:"30px",letterSpacing:"2%"}}>
                When AI lacks oversight, it can compromise trust and compliance. Synoptix AI is built with responsibility at its core, enabling enterprises to scale intelligence safely.  
                </p>
                
                <div className="w-full max-w-4xl mx-auto border-t border-white/30 pt-8 mb-12"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 max-w-4xl mx-auto">
                    {aiPrinciples.map(principle => (
                        <div key={principle.id} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left mb-6 sm:mb-0">
                            <div className="relative mb-4 sm:mb-0 sm:mr-6 flex items-center justify-center w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px]">  
                                <Image 
                                    src="/synoptix-search/responsible-ai/responsible-ai-icon-bg.svg" 
                                    alt="Icon Background" 
                                    width={90} 
                                    height={90} 
                                    className="w-full h-full"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Image 
                                        src={principle.icon} 
                                        alt={principle.title} 
                                        width={40} 
                                        height={40}
                                        className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]"
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl mb-2" style={{fontFamily: "var(--font-jakarta)",fontWeight:600,fontSize:"20px",lineHeight:"32px"}}>{principle.title}</h3>
                                <p style={{fontFamily: "Poppins",fontWeight:400,fontSize:"16px",lineHeight:"28px",letterSpacing:""}}>{principle.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
