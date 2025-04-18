import { Button } from "@/components/ui/Button";

export default function RagHero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 bg-gradient-to-b bg-[#f0f5ff]">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Smarter AI Starts with Smarter Evalution
                        </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mb-6">
            See what your AI is doing—how it performs, where it excels, and where it needs to improve. With real-time metrics on accuracy, efficiency, and user sentiment, Synoptix AI puts you in control with powerful AI Performance Evaluation capabilities.
            </p>
            {/* <p className="text-2xl md:text-3xl font-semibold text-gray-800 max-w-3xl mb-12">
            The future of AI isn’t coming—it’s here.
            </p> */}
            <Button 
                    href="/#contact" 
                    variant="primary"
                    size="lg"
                    className="mb-10 sm:mb-16"
                >
                Request a Demo
            </Button>
        </section>
    );
}
 