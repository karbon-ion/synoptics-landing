'use client'

import { Button } from "@/components/ui/Button";
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
                title: "Router Workflow",
                description: "Right Query. Right Expert. Instant Action.",
                src: "/images/metrics/query-count.png"
            },
            {
                title: "",
                description: "Not every request needs the same answer. The Router Workflow analyses incoming queries, identifies the most relevant expert agent, and routes tasks accordingly. Each request is handled with precision, ensuring accuracy and efficiency—no misrouted queries, no wasted time.",
                src: "/images/metrics/response-time.png"
            },
            {
                title: "",
                description: "Get the Right Answer, Instantly",
                src: "/images/metrics/user-feedback.png"
            }
        ]
    }, {
        metricsData: [
            {
                title: "Consolidator Workflow",
                description: "All Insights. One Clear Decision.",
                src: "/images/metrics/query-count.png"
            },
            {
                title: "",
                description: "Data without structure slows everything down. The Consolidator Workflow pulls key retrieved information from multiple agents, consolidates it, and delivers a single, refined output. No scattered details, no missing insights—just the complete picture for better decision-making. By unifying responses across agents, the Consolidator ensures higher accuracy, consistency, and context in every output—delivered efficiently through AI Agentic Workflows.",
                src: "/images/metrics/response-time.png"
            },
            {
                title: "",
                description: "Make Informed Decisions Faster",
                src: "/images/metrics/user-feedback.png"
            }
        ]
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
                    Orchestrated Intelligence at Every Step
                    </h2>
                    <p className="text-gray-600 mb-6 md:mb-8 px-2">
                    Route queries to the right expert, consolidate insights across agents, and deliver precise, context-aware outputs—instantly.
                    </p>
                    <Button
                    href="/#contact" 
                    variant="primary"
                    size="lg"
                    className="mb-10 sm:mb-16"
                >
                        Request a Demo
                    </Button>
                </div>

                {/* Cards Section */}
                <div className="relative ">
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
                                    <div className="flex flex-col sm:flex-row">
                                        <div className="flex-1">
                                            <h3 className="text-xl sm:text-2xl font-bold mb-4">
                                            {cardIndex === 0 ? "Router Workflow" : "Consolidator Workflow"}
                                            </h3>
                                            <h4 className="text-lg font-semibold mb-4">
                                            {cardIndex === 0 ? "Right Query. Right Expert. Instant Action." : "All Insights. One Clear Decision."}
                                            </h4>
                                            <p className="text-gray-600 mb-8 text-sm sm:text-base">
                                                {cardIndex === 0 ? 
                                                    "Not every request needs the same answer. The Router Workflow analyses incoming queries, identifies the most relevant expert agent, and routes tasks accordingly. Each request is handled with precision, ensuring accuracy and efficiency—no misrouted queries, no wasted time." :
                                                    "Data without structure slows everything down. The Consolidator Workflow pulls key retrieved information from multiple agents, consolidates it, and delivers a single, refined output. No scattered details, no missing insights—just the complete picture for better decision-making. By unifying responses across agents, the Consolidator ensures higher accuracy, consistency, and context in every output."}
                                            </p>
                                            <p className="text-gray-600 mb-4 text-sm sm:text-base">
                                                {cardIndex === 0 ? "Get the Right Answer, Instantly" : "Make Informed Decisions Faster"}
                                            </p>
                                        </div>
                                        <div className="sm:w-1/3 flex justify-center items-center mt-4 sm:mt-0">
                                            <img 
                                                src={`/enterprise-rag/images/workflow${cardIndex + 1}.jpg`} 
                                                alt={cardIndex === 0 ? "Router Workflow" : "Consolidator Workflow"}
                                                className="w-full max-w-[200px] h-auto object-contain rounded-lg shadow-md"
                                            />
                                        </div>
                                    </div>
                                    {cardIndex === data.length - 1 && (
                                       <Button 
                                       href="/#contact" 
                                       variant="primary"
                                       size="lg"
                                       className="mb-10 sm:mb-16 mt-4"
                                   >
                                            Request a Demo
                                        </Button>
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