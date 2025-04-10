'use client';
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from 'next/link';

const features = [
  {
    id: 'llm01',
    title: 'Prompt Injections',
    description: 'Smart hackers can feed your AI harmful inputs to steal data or trigger unauthorized actions. With Synoptix, we intercept these attacks before they even start.',
    code: 'LLM01',
  },
  {
    id: 'llm02',
    title: 'Insecure Output Handling',
    description: 'Unchecked AI responses can be a prospect for malicious actors. Synoptix makes sure every output gets the green light before it ever leaves your system.',
    code: 'LLM02',
  },
  {
    id: 'llm03',
    title: 'Training Data Poisoning',
    description: 'If your AI learns from the wrong data, it could mislead users and spread misinformation. Synoptix filters out toxic data, ensuring your AI stays sharp, focused, and trustworthy.',
    code: 'LLM03',
  },
  {
    id: 'llm04',
    title: 'Denial of Service',
    description: 'Some attacks aim to slow your AI down or rack up costs. Synoptix keeps a real-time eye on usage, spotting any spikes before they become a problem.',
    code: 'LLM04',
  },
  {
    id: 'llm05',
    title: 'Supply Chain',
    description: 'Vulnerabilities in the AI supply chain are a hidden risk. Synoptix evaluates your models for biases, weaknesses, and performance gaps, so you can spot and fix them before they harm your system.',
    code: 'LLM05',
  },
  {
    id: 'llm06',
    title: 'Permission Issues',
    description: 'Weak permissions can leave the door open for unwanted access. Synoptix tracks everything—no one gets in without permission, and no actions go unchecked.',
    code: 'LLM06',
  },
  {
    id: 'llm07',
    title: 'Data Leakage',
    description: 'Sensitive data slipping through the cracks? Not with Synoptix. We scan your inputs and outputs to stop leaks in their tracks, protecting your privacy and user data.',
    code: 'LLM07',
  },
  {
    id: 'llm08',
    title: 'Excessive Agency',
    description: 'LLMs shouldn\'t be making decisions on their own. Synoptix ensures your system only does what it\'s supposed to, with strict controls embedded into every action.',
    code: 'LLM08',
  },
  {
    id: 'llm09',
    title: 'Overreliance',
    description: 'AI mistakes can lead to chaos, misleading responses and faulty data. Synoptix makes it easy to identify and correct these errors, keeping your AI on track and accurate every time.',
    code: 'LLM09',
  },
  {
    id: 'llm10',
    title: 'Insecure Plugins',
    description: 'Plugins can be a weak spot for your AI. Synoptix continuously monitors these connections, ensuring malicious requests don\'t slip through the cracks and compromise your system.',
    code: 'LLM10',
  }
];

const OWASP = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-blue-100 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.04),transparent_25%),radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.04),transparent_25%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-600">
              SECURITY
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto">
            OWASP Top 10 for LLMs
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-16">
            Ensure your AI stays secure and compliant with Synoptix Guard. We continuously update 
            your guardrails to align with the latest security standards, including the OWASP 
            Top 10 for LLMs, so you're always protected against emerging threats.
          </p>
          
          <div className="flex justify-center">
          <Button 
                    href="/#contact" 
                    variant="primary"
                    size="lg"
                    className="mb-10 sm:mb-16"
                >
              Contact us for more information
            </Button>
          </div>
        </div>
        
        <FeaturesSection />
      </div>
    </section>
  );
};

export default OWASP;

function FeaturesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  code,
  index,
}: {
  title: string;
  description: string;
  code: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-10 relative group/feature bg-white/40 backdrop-blur-sm",
        (index === 0 || index === 5 || index === 10) && "lg:border-l border-blue-100",
        index < 10 && (index % 5 === 4 ? "" : "lg:border-b border-blue-100"),
        (index + 1) % 5 !== 0 && "lg:border-r border-blue-100"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10 text-blue-500">
        <span className="text-sm font-medium">{code}</span>
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-blue-400 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-800">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-600 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};