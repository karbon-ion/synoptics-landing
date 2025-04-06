'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const VideoSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.6, 0.9],
    ["rgb(255, 255, 255)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(255, 255, 255)"]
  );

  const scale = useTransform(
    scrollYProgress,
    [0.1, 0.45, 0.65, 0.9],
    [1, 1.05, 1.05, 1]
  );

  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundColor }}
      className="relative py-32 min-h-screen flex items-center justify-center transition-colors overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          layoutId="video-section"
          style={{ scale }}
          className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl aspect-video"
        >
          <iframe
            src="https://www.youtube.com/embed/MgRh-vN9ZBg?si=2cCxYwAaUmSEDIrb&autoplay=1"
            title="Synoptix Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full absolute inset-0"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VideoSection;