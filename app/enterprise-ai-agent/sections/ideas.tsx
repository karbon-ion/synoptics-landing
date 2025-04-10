'use client'
import { Button } from "@/components/ui/Button";
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
        <section className="relative w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
                    Too Many Ideas, Not Enough Direction?
                </h2>
                <p className="text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
                    Focus on what matters—turn processes into practical, automated solutions that work.
                </p>
                <Button 
                    href="/#contact" 
                    variant="primary"
                    size="lg"
                    className="mb-10 sm:mb-16"
                >
                    Contact Us
                </Button>

                {/* Tags Section */}
                <div className="space-y-4 sm:space-y-6 overflow-hidden">
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
                    <div className="py-1 w-full mx-auto">
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