import { Button } from "@/components/ui/Button";

export default function RagHero() {
  return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 bg-gradient-to-b bg-[#f0f5ff]">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Fine Tuning & Optimisation Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mb-6">
          Stop settling for generic AI that doesn't get your business. Synoptix fine-tunes open-source models into domain-specific AI that aligns with your industry, goals, and workflow.
          </p>
          {/* <p className="text-2xl md:text-3xl font-semibold text-gray-800 max-w-3xl mb-12">
          Experience AI that's sharp, focused, and built for impact.
          </p> */}
        <Button 
                    href="/#contact" 
                    variant="primary"
                    size="lg"
                    className="mb-10 sm:mb-16"
                >
              Book a Meeting
          </Button>
      </section>
  );
}
