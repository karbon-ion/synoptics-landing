'use client'

import CardStack from "@/components/ui/card-stack";
import { useScroll } from "framer-motion";
import { useRef } from "react";
type Metric = {
    title: string;
    description: string;
    src: string;
  };
  
  type MetricsGroup = {
    metricsData: Metric[];
};

const data: MetricsGroup[] = [
    {
        metricsData: [
            {
                title: "Query Count",
                description: "Track the total number of processed requests in real time. Gain visibility into AI workload and system efficiency.",
                src: "/images/metrics/query-count.png"
            },
            {
                title: "Response Time",
                description: "Measure how fast AI processes and delivers responses. Identify and eliminate latency issues for seamless performance.",
                src: "/images/metrics/response-time.png"
            },
            {
                title: "User Feedback",
                description: "Monitor approval and rejection rates from real users. Understand AI effectiveness and refine outputs for better engagement.",
                src: "/images/metrics/user-feedback.png"
            },
            {
                title: "Accuracy Score",
                description: "Evaluate how well AI-generated responses align with expectations.Ensure precision, relevance, and reliability in every interaction.",
                src: "/images/metrics/accuracy-score.png"
            }]
    }, {
        metricsData: [
            {
                title: "Query Count",
                description: "Track the total number of processed requests in real time. Gain visibility into AI workload and system efficiency.",
                src: "/images/metrics/query-count.png"
            },
            {
                title: "Response Time",
                description: "Measure how fast AI processes and delivers responses. Identify and eliminate latency issues for seamless performance.",
                src: "/images/metrics/response-time.png"
            },
            {
                title: "User Feedback",
                description: "Monitor approval and rejection rates from real users. Understand AI effectiveness and refine outputs for better engagement.",
                src: "/images/metrics/user-feedback.png"
            },
            {
                title: "Accuracy Score",
                description: "Evaluate how well AI-generated responses align with expectations.Ensure precision, relevance, and reliability in every interaction.",
                src: "/images/metrics/accuracy-score.png"
            }]
    },
];

export default function Metrics() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })
    return (
        <section ref={container} className="relative w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-[#f0f5ff] to-[#e5f6ff]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
                    Your Enterprise Deserves Better Intelligence—Discover Enterprise RAG 
                    </h2>
                    <p className="text-gray-600 mb-6 md:mb-8 px-2">
                        Get the right information at the right time, every time. Synoptix ensures speed, security, and precision—at enterprise scale 
                    </p>
                    <a
                        href="#docs"
                        className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#00A3FF] text-white rounded-full 
                            font-semibold hover:bg-[#0095eb] transition-all text-sm sm:text-base"
                    >
                        Read Docs
                    </a>
                </div>

                {/* Cards Section */}
                <div className="relative mt-6 sm:mt-8">
                    {/* Background Card */}
                    <div className="hidden md:block">
                        {
                            data.map((datum, i) => {
                                const targetScale = 1 - ((data.length - i) * 0.05);
                                return <CardStack key={`p_${i}`} i={i} metricsData={datum} progress={scrollYProgress} range={[i * .4, 1]} targetScale={targetScale} />
                            })
                        }
                    </div>
                    
                    {/* Mobile view - simplified version without animation */}
                    <div className="md:hidden mt-8 space-y-8">
                        {data.map((datum, cardIndex) => (
                            <div key={`mobile_card_${cardIndex}`} className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8">
                                <div className="relative z-10">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-4">
                                        Get Instant AI Performance Insights
                                    </h3>
                                    <p className="text-gray-600 mb-8 text-sm sm:text-base">
                                        AI performance shouldn't be a black box. Track, measure, and optimize key
                                        insights in real-time to ensure every response is fast, accurate, and aligned
                                        with expectations.
                                    </p>
                                    <div className="space-y-4">
                                        {datum.metricsData.map((metric, index) => (
                                            <div key={`mobile_metric_${cardIndex}_${index}`} className="flex items-start gap-2">
                                                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#E5F6FF] flex items-center justify-center mt-1">
                                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00A3FF]"></div>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-base sm:text-lg mb-1">{metric.title}</h4>
                                                    <p className="text-gray-600 text-sm sm:text-base">{metric.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {cardIndex === data.length - 1 && (
                                        <a
                                            href="#learn"
                                            className="inline-block mt-8 px-6 py-2 bg-[#00A3FF] text-white 
                                                rounded-full font-semibold hover:bg-[#0095eb] transition-all text-sm sm:text-base"
                                        >
                                            Learn More
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 