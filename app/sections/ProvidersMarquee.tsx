'use client'
import Image from "next/image";

const logos = [
    {
        name: "OpenAI",
        src: "/marquee/OpenAI_Logo.svg.png",
        alt: "OpenAI Logo",
        description: "Leading AI Research"
    },
    {
        name: "Microsoft Azure",
        src: "/marquee/Microsoft_Azure.svg.png",
        alt: "Microsoft Azure Logo",
        description: "Cloud Computing"
    },
    {
        name: "Google Gemini",
        src: "/marquee/Google_Gemini_logo.svg.png",
        alt: "Google Gemini Logo",
        description: "Next-Gen AI Model"
    },
    {
        name: "Grok",
        src: "/marquee/grok.png",
        alt: "Grok Logo",
        description: "Real-time AI Assistant"
    },
    {
        name: "Anthropic",
        src: "/marquee/Icon.jpeg",
        alt: "Anthropic Logo",
        description: "Constitutional AI"
    },
    {
        name: "Claude",
        src: "/marquee/Logo.png",
        alt: "Claude Logo",
        description: "Advanced Language Model"
    },
    {
        name: "Cohere",
        src: "/marquee/idKpB5u1dr_logos.png",
        alt: "Cohere Logo",
        description: "Enterprise AI Solutions"
    },
    {
        name: "Meta AI",
        src: "/marquee/idW0736plJ_logos.png",
        alt: "Meta Logo",
        description: "Social AI Innovation"
    }
];

const LogoCard = ({ src, alt, name, description }: { src: string; alt: string; name: string; description: string }) => {
    return (
        <div className="relative mx-4">
            <div className="relative h-32 w-[320px] bg-purple-50/80 rounded-xl p-4 flex flex-col justify-between group 
                hover:shadow-lg transition-all duration-300 border border-purple-100 hover:border-purple-100">
                <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 relative bg-white rounded-lg overflow-hidden shadow-xs border border-purple-100">
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            className="object-contain p-2"
                            sizes="(max-width: 48px) 100vw, 48px"
                        />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-purple-900 font-bold text-lg tracking-tight">{name}</h3>
                        <p className="text-purple-600 text-sm mt-1 leading-snug">{description}</p>
                    </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center">
                        <svg className="w-4 h-4 text-purple-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-xs text-purple-500 font-medium">AI Powered</span>
                    </div>
                    <div className="text-xs text-purple-400 group-hover:text-purple-600 transition-colors duration-300 font-medium">
                        Explore →
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProvidersMarquee = () => {
    return (
        <div className="relative py-12 w-full">
            <div className="relative w-full overflow-hidden">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white via-white/40 to-transparent z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white via-white/40 to-transparent z-10"></div>
                <div className="whitespace-nowrap">
                    <marquee 
                        behavior="scroll" 
                        direction="left" 
                        scrollamount="3" 
                        width="100%"
                        scrolldelay="0"
                        scrollamount="12"
                        className="inline-flex items-center"
                        style={{ display: 'inline-flex' }}
                        onMouseEnter={(e: any) => e.currentTarget.stop()}
                        onMouseLeave={(e: any) => e.currentTarget.start()}
                    >
                        <div className="inline-flex gap-8">
                            {logos.map((logo, index) => (
                                <LogoCard key={`logo-${index}`} {...logo} />
                            ))}
                            {logos.map((logo, index) => (
                                <LogoCard key={`logo-${index}-duplicate`} {...logo} />
                            ))}
                        </div>
                    </marquee>
                </div>
            </div>
        </div>
    );
};

export default ProvidersMarquee;

