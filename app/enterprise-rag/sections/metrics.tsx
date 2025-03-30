'use client'

const metricsData = [
    {
        title: "Query Count",
        description: "Track the total number of processed requests in real time. Gain visibility into AI workload and system efficiency."
    },
    {
        title: "Response Time",
        description: "Measure how fast AI processes and delivers responses. Identify and eliminate latency issues for seamless performance."
    },
    {
        title: "User Feedback",
        description: "Monitor approval and rejection rates from real users. Understand AI effectiveness and refine outputs for better engagement."
    },
    {
        title: "Accuracy Score",
        description: "Evaluate how well AI-generated responses align with expectations.Ensure precision, relevance, and reliability in every interaction."
    }
];

export default function Metrics() {
    return (
        <section className="relative w-full py-24 px-4 bg-gradient-to-br from-white via-[#f0f5ff] to-[#e5f6ff]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Real-Time Performance Metrics
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Stay Ahead with Live AI Monitoring
                    </p>
                    <a 
                        href="#docs" 
                        className="inline-block px-8 py-4 bg-[#00A3FF] text-white rounded-full 
                            font-semibold hover:bg-[#0095eb] transition-all"
                    >
                        Read Docs
                    </a>
                </div>

                {/* Cards Section */}
                <div className="relative mt-20">
                    {/* Background Card */}
                    <div className="absolute -top-6 left-4 right-4 h-[200px] bg-white rounded-2xl border border-[#E2E8F0]"></div>
                    
                    {/* Main Card */}
                    <div className="relative bg-white rounded-2xl border border-[#E2E8F0] p-12">
                        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5 rounded-2xl"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6">
                                Get Instant AI Performance Insights
                            </h3>
                            <p className="text-gray-600 mb-12 max-w-3xl">
                                AI performance shouldn't be a black box. Track, measure, and optimize key 
                                insights in real-time to ensure every response is fast, accurate, and aligned 
                                with expectations.
                            </p>

                            {/* Metrics List */}
                            <div className="space-y-8">
                                {metricsData.map((metric, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E5F6FF] flex items-center justify-center mt-1">
                                            <div className="w-2 h-2 rounded-full bg-[#00A3FF]"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-2">{metric.title}</h4>
                                            <p className="text-gray-600">{metric.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <a 
                                href="#learn" 
                                className="inline-block mt-12 px-8 py-4 bg-[#00A3FF] text-white 
                                    rounded-full font-semibold hover:bg-[#0095eb] transition-all"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 