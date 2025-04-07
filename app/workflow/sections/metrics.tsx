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
        <section className="relative w-full py-24 px-4 bg-gradient-to-br from-white via-[#f0f5ff] to-[#e5f6ff]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center ">
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
                <div className="relative mt-8">
                    {/* Background Card */}
                    {
                        data.map((datum, i) => {
                            const targetScale = 1 - ((data.length - i) * 0.05);
                            return <CardStack key={`p_${i}`} i={i} metricsData={datum} progress={scrollYProgress} range={[i * .4, 1]} targetScale={targetScale} />
                        })
                    }

                </div>
            </div>
        </section>
    );
} 