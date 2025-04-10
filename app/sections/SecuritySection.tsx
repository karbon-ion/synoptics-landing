'use client';
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import Link from 'next/link';

const features = [
  {
    id: 'stack',
    title: 'Fine Tuning & Optimisation',
    description: 'Get higher accuracy and efficiency with AI models fine-tuned to your specific requirements and objectives. ',
    icon: <IconTerminal2 />,

    link: '/fine-tuning'
  },
  {
    id: 'no-code',
    title: 'AI Consulting',
    description: 'Partner with our AI consulting experts to develop and execute strategies that maximize AI, ensure compliance, and align with your objectives.',
    icon: <IconEaseInOut />,

    link: '/ai-consulting'
  },
  {
    id: 'integration',
    title: 'AI Strategy Development',
    description: 'Align AI investments with your business objectives, identify opportunities, and create a roadmap for long-term success.',
    icon: <IconCurrencyDollar />,
    link: '/ai-consulting'
  },
  {
    id: 'apps',
    title: 'Training & Education',
    description: 'Boost your workforce’s AI skills with tailored training programs, learning paths, and leadership workshops for business transformation.',
    icon: <IconCloud />,
    link: '/ai-consulting'
  }
];

const SecuritySection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-blue-100 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.04),transparent_25%),radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.04),transparent_25%)] z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-4">

            <span className="text-sm font-semibold tracking-wider uppercase text-gray-600">
              SERVICES
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto">
          AI Expertise That Gets Enterprises from Idea to Impact  
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-16">
          AI only creates value when it’s built, deployed, and managed the right way. Practical solutions, real impact—so your AI works the way you need it to.   
        </p>
          
          <div className="flex justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Optimize Your Business with Synoptix AI 
            </Link>
          </div>
        </div>
        
        <FeaturesSection />
      </div>
    </section>
  );
};

export default SecuritySection; 




function FeaturesSection() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  link,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  link: string;
}) => {
  return (
    <Link href={link}>
      <div
        className={cn(
          "flex flex-col lg:border-r py-10 relative group/feature bg-white/40 backdrop-blur-sm cursor-pointer hover:shadow-md transition-shadow duration-200",
          (index === 0 || index === 4) && "lg:border-l border-blue-100",
          index < 4 && "lg:border-b border-blue-100"
        )}
      >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-white/80 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-blue-500">
        {icon}
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
    </Link>
  );
};
