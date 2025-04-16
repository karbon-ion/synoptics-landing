'use client'

const metricsData = [
    {
        title: "Query Count",
        description: "Consolidator Workflow"
    },
    {
        title: "Response Time",
        description: "All Insights. One Clear Decision."
    },
    {
        title: "User Feedback",
        description: "Make Informed Decisions Faster"
    }
];

export default function Metrics() {
    return (
        <section className="relative w-full py-24 px-4 bg-gradient-to-br from-white via-[#f0f5ff] to-[#e5f6ff]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Right Query. Right Expert. Instant Action.
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Not every request needs the same answer. The Router Workflow analyses incoming
                        queries, identifies the most relevant expert agent, and routes tasks accordingly. Each
                        request is handled with precision, ensuring accuracy and efficiency—no misrouted
                        queries, no wasted time.
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
                                Get the Right Answer, Instantly
                            </h3>
                            <p className="text-gray-600 mb-12 max-w-3xl">
                                Data without structure slows everything down. The Consolidator Workflow pulls key information from multiple sources, processes it, and delivers a single, refined output. No scattered details, no missing insights—just the complete picture for better decision-making.
                            </p>

                            {/* Metrics List */}
                            <div className="space-y-8">
                                {metricsData.map((metric, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E5F6FF] flex items-center justify-center mt-1">
                                            <div className="w-2 h-2 rounded-full bg-[#00A3FF]"></div>
                                        </div>
                                        <div>
                                            {/* <h4 className="font-semibold text-lg mb-2">{metric.title}</h4> */}
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