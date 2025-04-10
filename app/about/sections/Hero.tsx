'use client';
import Link from 'next/link';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { Button } from '@/components/ui/Button';

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center overflow-hidden relative">
      {/* <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(240, 245, 255)"
        gradientBackgroundEnd="rgb(255, 255, 255)" 
        firstColor="230, 240, 255"
        secondColor="220, 235, 255"
        thirdColor="235, 230, 255"
        fourthColor="210, 230, 255"
        fifthColor="225, 220, 255"
        pointerColor="180, 200, 255"
        size="100%"
        blendingValue="soft-light"
      > */}
        <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8">
            About Us
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 max-w-4xl mx-auto mb-6">
            Our mission is to accelerate the development of AI applications
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            Better data leads to more performant models. Performant models lead to faster deployment. We
            help deliver value from AI investments faster with better data by providing an end-to-end
            solution to manage the entire ML lifecycle.
          </p>
          <Button 
                    href="#contact" 
                    variant="primary"
                    size="lg"
                    className="mb-10 sm:mb-16"
                > 
            Book a demo
          </Button>
        </div>
      {/* </BackgroundGradientAnimation> */}
    </div>
  );
};

export default Hero;
