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
    <div ref={container} className="h-screen flex items-center justify-center sticky top-20">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
        className="flex flex-col relative w-7xl rounded-[25px] p-[50px] transform-origin-top"
      >
        <div className="relative bg-white rounded-2xl border border-[#E2E8F0] p-12">
          <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5 rounded-2xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6">
              Get Instant AI Performance Insights
            </h3>
            <p className="text-gray-600 mb-12 max-w-3xl">
              AI performance shouldn't be a black box. Track, measure, and optimize key
              insights in real-time to ensure every response is fast, accurate, and aligned
              with expectations.
            </p>
            <div className="space-y-3">
              {metricsData.metricsData.map((metric, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E5F6FF] flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#00A3FF]"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{metric.title}</h4>
                    <p className="text-gray-600">{metric.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#learn"
              className="inline-block mt-12 px-8 py-2 bg-[#00A3FF] text-white 
                                    rounded-full font-semibold hover:bg-[#0095eb] transition-all"
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

