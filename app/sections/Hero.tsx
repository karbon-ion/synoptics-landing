'use client';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(240, 245, 255)"
        gradientBackgroundEnd="rgb(255, 255, 255)" 
        firstColor="230, 240, 255"
        secondColor="220, 235, 255"
        thirdColor="235, 230, 255"
        fourthColor="210, 230, 255"
        fifthColor="225, 220, 255"
        pointerColor="108, 126, 212"
        size="100%"
        blendingValue="soft-light"
      >
        {/* Content */}
        <div className="absolute z-40 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl mt-32">
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Link
              href="/trial"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Start a Free Trial
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
          {/* <ProvidersMarquee />   */}
        </div>
        
      </BackgroundGradientAnimation>
    </div>
  );
};

export default Hero; 