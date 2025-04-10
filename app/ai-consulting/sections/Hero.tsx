import { Button } from "@/components/ui/Button";

export default function RagHero() {
  return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 bg-gradient-to-b bg-[#f0f5ff]">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Artificial Intelligence Consulting Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mb-6">
          Boost efficiency, automate workflows, and accelerate success with customized AI integration. Let’s transform the way you work.
          </p>
          {/* <p className="text-2xl md:text-3xl font-semibold text-gray-800 max-w-3xl mb-12">
              Your data holds the answers—put it to work and take control.
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
