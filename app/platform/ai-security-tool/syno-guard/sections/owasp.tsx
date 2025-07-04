'use client';
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from 'next/link';

const features = [
  {
    id: 'llm01',
    title: 'Prompt Injection',
    description: 'Attackers can craft prompts that override system behavior or extract sensitive data. SynoGuard inspects every input to detect and block manipulative prompts before they reach your AI—so the model always responds within safe, authorised boundaries.',
    code: 'LLM01',
  },
  {
    id: 'llm02',
    title: 'Sensitive Information Disclosure',
    description: 'AI systems can unintentionally leak private or restricted data. SynoGuard scans all inputs and outputs to prevent exposure of sensitive content, keeping your users privacy and your business data fully protected.',
    code: 'LLM02',
  },
  {
    id: 'llm03',
    title: 'Supply Chain',
    description: 'Third-party components and models can introduce hidden risks. SynoGuard audits your AI supply chain, checking model sources, datasets, and integrations for weaknesses, bias, or unsafe dependencies, before they impact performance or security.',
    code: 'LLM03',
  },
  {
    id: 'llm04',
    title: 'Data and Model Poisoning',
    description: 'Corrupted or biased training data can lead your AI to generate misleading or harmful responses. SynoGuard filters out low-quality or adversarial data sources during training and fine-tuning, keeping your model clean, accurate, and trustworthy.',
    code: 'LLM04',
  },
  {
    id: 'llm05',
    title: 'Improper Output Handling',
    description: 'Unchecked AI responses may be misused or cause harm if shared externally. SynoGuard validates every output in real time to ensure it meets your safety, compliance, and content standards before it ever leaves your system.',
    code: 'LLM05',
  },
  {
    id: 'llm06',
    title: 'Excessive Agency',
    description: 'When an LLM can access tools, APIs, or plugins, it gains the power to act on its own. SynoGuard sets clear limits on what the model can do, monitors every action, and blocks any unauthorised or unsafe behaviour, keeping system control firmly in your hands.',
    code: 'LLM06',
  },
  {
    id: 'llm07',
    title: 'System Prompt Leakage',
    description: 'If attackers gain visibility into system prompts, they can manipulate model behavior. SynoGuard keeps all system instructions secure and monitors for leakage risks, so the core of your AI logic stays protected and private.',
    code: 'LLM07',
  },
  {
    id: 'llm08',
    title: 'Embedding & Vector Manipulation',
    description: 'Attackers may exploit embedded systems to inject harmful data or distort retrieval results. SynoGuard monitors your embeddings for anomalies, filters adversarial inputs, and ensures consistent, reliable semantic search performance.',
    code: 'LLM08',
  },
  {
    id: 'llm09',
    title: 'Misinformation',
    description: 'AI-generated misinformation can harm brand credibility and decision-making. SynoGuard tracks response accuracy and context, alerting your team to misleading outputs and offering correction workflows to prevent reputational damage.',
    code: 'LLM09',
  },
  {
    id: 'llm10',
    title: 'Unbounded Consumption',
    description: 'Some prompts or plugins can cause runaway compute usage or intentional slowdowns. SynoGuard watches for spikes in usage, throttles excessive activity, and helps you stay within performance and cost thresholds without compromising functionality.',
    code: 'LLM10',
  }
];

const OWASP = () => {
  return (
    <section className="py-24 mb-10 relative overflow-hidden">
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
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto" style={{
            fontFamily: "Syne",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "48px",
            letterSpacing: "0%",
            textAlign: "center",
            verticalAlign: "middle"
          }}>
            OWASP Top 10 for LLMs
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-16" style={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "28px",
            letterSpacing: "0%",
            textAlign: "center",
            verticalAlign: "middle"
          }}>
          Ensure your AI stays secure and compliant with SynoGuard. We continuously update your guardrails to align with the latest security standards, including the OWASP Top 10 for LLMs, so you’re always protected against emerging threats.  
          </p>
          
          <div className="flex justify-center">
          <Link href="/contact-us" className="bg-[#5662F6] text-white font-medium py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300 inline-flex items-center">
                        Book a consultation 
                    </Link>
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
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-800" style={{
          fontFamily: "Syne",
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: "28px",
          letterSpacing: "0%",
          verticalAlign: "middle"
        }}>
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-600 max-w-xs relative z-10 px-10" style={{
        fontFamily: "Poppins",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "20px",
        letterSpacing: "0%",
        verticalAlign: "middle"
      }}>
        {description}
      </p>
    </div>
  );
};