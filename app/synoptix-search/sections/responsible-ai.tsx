'use client';

import Image from 'next/image';

const aiPrinciples = [
  {
    id: 'safe',
    title: 'Predictable ',
    icon: '/synoptix-search/responsible-ai/safe-icon.svg',
    description: 'Outcomes stay within approved boundaries. '
  },
  {
    id: 'explainable',
    title: 'Auditable ',
    icon: '/synoptix-search/responsible-ai/explainable.svg',
    description: 'Every result can be reviewed and explained. '
  },
  {
    id: 'unbiased',
    title: 'Impartial  ',
    icon: '/synoptix-search/responsible-ai/unbiased.svg',
    description: 'Models are tested to avoid bias and promote fairness. '
  },
  {
    id: 'compliant',
    title: 'Regulatory-Ready  ',
    icon: '/synoptix-search/responsible-ai/compliant.svg',
    description: 'Designed to meet industry and global standards. '
  }
];

export default function ResponsibleAI() {
    return (
        <section className="bg-[#6B7BF7] py-16 text-white max-w-7xl rounded-xl mx-auto mb-30">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-center text-4xl font-bold mb-4" style={{fontFamily: "Syne",fontWeight:700,fontSize:"36px",lineHeight:"45px"}}>
                Why do Enterprises Need Responsible AI? 
                </h2>
                <p className="text-center max-w-3xl mx-auto mb-8" style={{fontFamily: "Poppins",fontWeight:400,fontSize:"16px",lineHeight:"30px",letterSpacing:"2%"}}>
                AI that’s unchecked can do more harm than good. Responsible AI gives businesses the structure they need to scale safely and smartly. 
                </p>
                
                <div className="w-full max-w-4xl mx-auto border-t border-white/30 pt-8 mb-12"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
                    {aiPrinciples.map(principle => (
                        <div key={principle.id} className="flex items-start">
                            <div className="relative mr-6 flex items-center justify-center w-[90px] h-[90px]">  
                                <Image 
                                    src="/synoptix-search/responsible-ai/responsible-ai-icon-bg.svg" 
                                    alt="Icon Background" 
                                    width={90} 
                                    height={90} 
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Image 
                                        src={principle.icon} 
                                        alt={principle.title} 
                                        width={40} 
                                        height={40}
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
