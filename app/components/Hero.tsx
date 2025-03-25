'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { Marquee } from '@/components/magicui/marquee';

const logos = [
  {
    name: "OpenAI",
    src: "/marquee/OpenAI_Logo.svg.png",
    alt: "OpenAI Logo",
    description: "Leading AI Research"
  },
  {
    name: "Microsoft Azure",
    src: "/marquee/Microsoft_Azure.svg.png",
    alt: "Microsoft Azure Logo",
    description: "Cloud Computing"
  },
  {
    name: "Google Gemini",
    src: "/marquee/Google_Gemini_logo.svg.png",
    alt: "Google Gemini Logo",
    description: "Next-Gen AI Model"
  },
  {
    name: "Grok",
    src: "/marquee/grok.png",
    alt: "Grok Logo",
    description: "Real-time AI Assistant"
  },
  {
    name: "Anthropic",
    src: "/marquee/Icon.jpeg",
    alt: "Anthropic Logo",
    description: "Constitutional AI"
  },
  {
    name: "Claude",
    src: "/marquee/Logo.png",
    alt: "Claude Logo",
    description: "Advanced Language Model"
  },
  {
    name: "Cohere",
    src: "/marquee/idKpB5u1dr_logos.png",
    alt: "Cohere Logo",
    description: "Enterprise AI Solutions"
  },
  {
    name: "Meta AI",
    src: "/marquee/idW0736plJ_logos.png",
    alt: "Meta Logo",
    description: "Social AI Innovation"
  }
];

const LogoCard = ({ src, alt, name, description }: { src: string; alt: string; name: string; description: string }) => {
  return (
    <div className="relative mx-4 overflow-visible">
      <div className="relative h-32 w-[320px] bg-[#FDF7F2] rounded-xl p-4 flex flex-col justify-between">
        <div className="flex items-start space-x-4">
          <div className="h-12 w-12 relative bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain p-2"
              sizes="(max-width: 48px) 100vw, 48px"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-black font-semibold text-lg">{name}</h3>
            <p className="text-gray-600 text-sm mt-1">{description}</p>
          </div>
        </div>
        <div className="mt-2">
          <span className="inline-block px-3 py-1 bg-[#FEF3E7] text-[#D46B08] rounded-full text-xs font-medium">
            Multimodal
          </span>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated blob background */}
      <div className="container">
        <div className="blob"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-max mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
          Let AI Handle Your{' '}
          <span className="text-blue-600">
            <Typewriter
              words={['Paperwork', 'Routine Tasks', 'Manual Workflows', 'Repetitive Tasks']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={80}
              delaySpeed={2000}
            />
          </span>
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-8">
          You Focus on What Matters
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/trial"
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-6 py-1 text-sm font-medium text-black backdrop-blur-3xl">
              Start a Free Trial
            </span>
          </Link>
          <Link
            href="/contact"
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-6 py-1 text-sm font-medium text-black backdrop-blur-3xl">
              Contact Us
            </span>
          </Link>
        </div>

        {/* Logo Marquee */}
        {/* <div className="relative w-full overflow-hidden py-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white z-10"></div>
          <Marquee pauseOnHover className="[--duration:40s]">
            {logos.map((logo, index) => (
              <LogoCard key={index} {...logo} />
            ))}
          </Marquee>
        </div> */}
      </div>
    </div>
  );
};

export default Hero; 