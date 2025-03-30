'use client'
import Image from 'next/image';

const employeeExperience = [
    "IT", "Procurement", "Cybersecurity", "HR", 
    "Supply Chain", "Talent Management"
];

const customerExperience = [
    "Wealth Management", "Clinical Trial Operations", 
    "Hi-Tech Semiconductors", "Insurance", 
    "Medical Affairs", "Media & Entertainment"
];

export default function Features() {
    return (
        <section className="relative w-full min-h-screen bg-[#f0f5ff] px-4 py-16 overflow-hidden">
            {/* Background Blob */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-transparent" />
                <Image
                    src="/rag_blob.png"
                    alt="Background Blob"
                    fill
                    className="object-cover mix-blend-screen"
                    priority
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-cyan-500 font-medium mb-4">QUICK START AGENTS</div>
                
                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Faster, Smarter, and Secure—Enterprise-Ready RAG
                        </h2>
                        
                        <p className="text-gray-700">
                            Synoptix RAG 3.0 delivers you the right information at the right time. 
                            It pulls from multiple sources, refines the data, and delivers only 
                            the most relevant insights—so you can act with confidence instead of 
                            getting lost in research.
                        </p>
                        
                        <p className="text-gray-700">
                            Designed for enterprise use, Synoptix RAG 3.0 ensures your data stays 
                            under your control—always. Unlike other tools, it protects sensitive 
                            business information and keeps proprietary knowledge safe.
                        </p>
                        
                        <p className="text-gray-700">
                            With real-time data refinement, Synoptix helps you cut research time 
                            and make better decisions, faster.
                        </p>
                        
                        <p className="font-semibold text-xl">
                            Turn Data into Action—On Demand, On Your Terms.
                        </p>
                        
                        <a 
                            href="#trial" 
                            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-600 
                                text-white rounded-full font-semibold hover:shadow-lg transition-all"
                        >
                            Start Your Free Trial
                        </a>
                    </div>
                    
                    {/* Experience Sections */}
                    <div className="flex gap-8">
                        {/* Employee Experience */}
                        <div className="flex-1 bg-white rounded-3xl p-8 shadow-sm relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-50" />
                            <div className="relative z-10">
                                <h3 className="text-sm font-bold tracking-wider mb-6 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-blue-500 after:mt-2">
                                    EMPLOYEE EXPERIENCE
                                </h3>
                                <div className="flex flex-col gap-4">
                                    {employeeExperience.map((item, index) => (
                                        <span 
                                            key={index}
                                            className="px-6 py-3 rounded-full bg-white border border-blue-100 
                                                text-gray-800 hover:border-blue-300 transition-colors
                                                shadow-sm hover:shadow-md"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                    <span className="px-6 py-3 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                                        More...
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Customer Experience */}
                        <div className="flex-1 bg-white rounded-3xl p-8 shadow-sm relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-50" />
                            <div className="relative z-10">
                                <h3 className="text-sm font-bold tracking-wider mb-6 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-blue-500 after:mt-2">
                                    CUSTOMER EXPERIENCE
                                </h3>
                                <div className="flex flex-col gap-4">
                                    {customerExperience.map((item, index) => (
                                        <span 
                                            key={index}
                                            className="px-6 py-3 rounded-full bg-white border border-blue-100 
                                                text-gray-800 hover:border-blue-300 transition-colors
                                                shadow-sm hover:shadow-md"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                    <span className="px-6 py-3 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                                        More...
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 