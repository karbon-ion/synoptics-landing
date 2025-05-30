'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const VideoSection = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const videoUrl = isInView 
    ? "https://www.youtube.com/embed/MgRh-vN9ZBg?si=2cCxYwAaUmSEDIrb&autoplay=1&mute=1&rel=0"
    : "https://www.youtube.com/embed/MgRh-vN9ZBg?si=2cCxYwAaUmSEDIrb&rel=0";

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.6, 0.9],
    ["rgb(255, 255, 255)", "rgb(231, 241, 255)", "rgb(231, 241, 255)", "rgb(255, 255, 255)"]
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
            src={videoUrl}
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