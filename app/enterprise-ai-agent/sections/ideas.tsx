'use client'
import { InfiniteMovingTags } from "@/components/ui/infinite-moving-tags";

const agentTags = [
    "Chat Support Agent",
    "Customer Sentiment Analysis Agent",
    "Multilingual Support Bot",
    "Customer Churn Predictor"
];

const industryTags = [
    "Finance",
    "IT",
    "Healthcare",
    "Sales",
    "Marketing",
    "Fintech",
    "Coding",
    "Insurance"
];

const supportTags = [
    "Live Chat Support Agent",
    "Customer Sentiment Analysis Agent",
    "Multilingual Support Bot",
    "Customer Churn Predictor"
];

export default function Ideas() {
    return (
        <section className="relative w-full py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Too Many Ideas, Not<br />Enough Direction?
                </h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    Focus on what matters—turn processes into practical, automated solutions that work.
                </p>
                <a 
                    href="#contact" 
                    className="inline-block px-8 py-4 bg-blue-500 text-white rounded-full 
                        font-semibold hover:bg-blue-600 transition-all mb-16"
                >
                    Contact Us
                </a>

                {/* Tags Section */}
                <div className="space-y-6">
                    {/* First Row - Moving Right */}
                    <div className="py-1">
                        <InfiniteMovingTags
                            items={agentTags}
                            direction="right"
                            speed="normal"
                            pauseOnHover={false}
                            className="py-1"
                        />
                    </div>

                    {/* Second Row - Moving Left */}
                    <div className="py-1 w-5xl mx-auto">
                        <InfiniteMovingTags
                            items={industryTags}
                            direction="left"
                            speed="normal"
                            pauseOnHover={false}
                            className="py-1"
                        />
                    </div>

                    {/* Third Row - Moving Right */}
                    <div className="py-1">
                        <InfiniteMovingTags
                            items={supportTags}
                            direction="right"
                            speed="normal"
                            pauseOnHover={false}
                            className="py-1"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
} 