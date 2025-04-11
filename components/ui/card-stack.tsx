'use client'
import Image from 'next/image';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';
type Metric = {
  title: string;
  description: string;
  src: string;
};

type MetricsGroup = {
  metricsData: Metric[];
};

const CardStack = ({ i, metricsData, progress, range, targetScale }: { i: number, metricsData: MetricsGroup, progress: MotionValue<number>, range: number[], targetScale: number }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  // const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 lg:top-20">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
        className="flex flex-col relative w-full max-w-7xl rounded-[25px] p-4 md:p-[30px] lg:p-[50px] transform-origin-top"
      >
        <div className="relative bg-white rounded-2xl border border-[#E2E8F0] p-6 md:p-8 lg:p-12">
          <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5 rounded-2xl"></div>
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
              {metricsData.metricsData[0].title}
            </h3>
            <h4 className="text-lg font-semibold mb-4">
              {metricsData.metricsData[0].description}
            </h4>
            <p className="text-sm md:text-base text-gray-600 mb-8 md:mb-12 max-w-3xl">
              {metricsData.metricsData[1].description}
            </p>
            <p className="text-sm md:text-base text-gray-600 mt-8 md:mt-12">
              {metricsData.metricsData[2].description}
            </p>
            <a
              href="#learn"
              className="inline-block mt-8 md:mt-12 px-6 md:px-8 py-2 bg-[#00A3FF] text-white 
                                    rounded-full font-semibold hover:bg-[#0095eb] transition-all text-sm md:text-base"
            >
              Learn More
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardStack;

