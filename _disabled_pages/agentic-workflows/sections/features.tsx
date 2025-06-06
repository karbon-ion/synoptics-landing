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
        <section className="relative w-full min-h-screen bg-[#f0f5ff] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 overflow-hidden">
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
                {/* <div className="text-cyan-500 font-medium mb-4 text-center md:text-left">QUICK START AGENTS</div> */}
                
                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <div className="space-y-6 md:space-y-8">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
                        Your Business Moves Fast—Your Workflows Should Too. 
                        </h2>
                        
                        <p className="text-gray-700 text-center md:text-left">
                        Advanced automation isn’t built for complex operations. Synoptix AI goes further—breaking down intricate tasks, distributing work intelligently, and executing every step with precision—eliminating delays and inefficiencies through AI Agentic Workflows.<br/><br/>

                        In real time, specialized agents analyse data, structure insights, and refine outputs, ensuring accuracy at every stage. Whether managing multi-step operations or high-stakes decisions, Synoptix AI adapts dynamically to keep everything on track using scalable Agentic Workflows.
                        <br/><br/>

                        This isn’t just automation—it’s intelligent workflow at its best. Tasks move forward seamlessly, approvals happen without hold-ups, and systems stay perfectly in sync.
                        <br/><br/>

                        Stop waiting. Start executing—with Synoptix AI.
                        </p>
                        
                        {/* <p className="text-gray-700 text-center md:text-left">
                            Designed for enterprise use, Synoptix RAG 3.0 ensures your data stays 
                            under your control—always. Unlike other tools, it protects sensitive 
                            business information and keeps proprietary knowledge safe.
                        </p> */}
                        
                        {/* <p className="text-gray-700 text-center md:text-left">
                            With real-time data refinement, Synoptix helps you cut research time 
                            and make better decisions, faster.
                        </p> */}
                        
                        {/* <p className="font-semibold text-lg sm:text-xl text-center md:text-left">
                            Turn Data into Action—On Demand, On Your Terms.
                        </p> */}
                        
                        <div className="text-center md:text-left">
                            <a 
                                href="#trial" 
                                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-400 to-blue-600 
                                    text-white rounded-full font-semibold hover:shadow-lg transition-all"
                            >
                            Start Automating Today
                            </a>
                        </div>
                    </div>
                    
                    {/* Experience Sections */}
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                        {/* Employee Experience */}
                        <div className="flex-1 bg-white rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-50" />
                            <div className="relative z-10">
                                <h3 className="text-sm font-bold tracking-wider mb-4 sm:mb-6 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-blue-500 after:mt-2 after:mx-auto sm:after:mx-0 text-center sm:text-left">
                                    EMPLOYEE EXPERIENCE
                                </h3>
                                <div className="flex flex-col gap-3 sm:gap-4 w-full">
                                    {employeeExperience.map((item, index) => (
                                        <div 
                                            key={index}
                                            className="flex items-center justify-center sm:justify-start px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white border border-blue-100 
                                                text-gray-800 hover:border-blue-300 transition-colors
                                                shadow-sm hover:shadow-md text-sm sm:text-base"
                                        >
                                            <span className="whitespace-nowrap truncate">{item}</span>
                                        </div>
                                    ))}
                                    {/* <span className="px-4 sm:px-6 py-2 sm:py-3 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer text-center sm:text-left">
                                        More...
                                    </span> */}
                                </div>
                            </div>
                        </div>
                        
                        {/* Customer Experience */}
                        <div className="flex-1 bg-white rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-50" />
                            <div className="relative z-10">
                                <h3 className="text-sm font-bold tracking-wider mb-4 sm:mb-6 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-blue-500 after:mt-2 after:mx-auto sm:after:mx-0 text-center sm:text-left">
                                    CUSTOMER EXPERIENCE
                                </h3>
                                <div className="flex flex-col gap-3 sm:gap-4 w-full">
                                    {customerExperience.map((item, index) => (
                                        <div 
                                            key={index}
                                            className="flex items-center justify-center sm:justify-start px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white border border-blue-100 
                                                text-gray-800 hover:border-blue-300 transition-colors
                                                shadow-sm hover:shadow-md text-sm sm:text-base"
                                        >
                                            <span className="whitespace-nowrap truncate">{item}</span>
                                        </div>
                                    ))}
                                    {/* <span className="px-4 sm:px-6 py-2 sm:py-3 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer text-center sm:text-left">
                                        More...
                                    </span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 