'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"] // Adjusted timing to start transition at center
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.6, 0.9], // Adjusted timing points
    ["rgb(255, 255, 255)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(255, 255, 255)"]
  );

  const width = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.6, 0.9], // Adjusted timing points
    ["85%", "calc(100% - 4rem)", "calc(100% - 4rem)", "85%"] // Added margin consideration
  );

  const scale = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.6, 0.9], // Adjusted timing points
    [1, 1.05, 1.05, 1] // Reduced scale for better containment
  );

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundColor }}
      className="relative py-20 min-h-screen flex items-center justify-center transition-colors overflow-hidden"
    >
      <div className="w-full px-24"> {/* Added horizontal padding */}
        <div className="text-center mb-12">
          <motion.h2 
            style={{ color: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["#111827", "#ffffff", "#ffffff", "#111827"]) }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            See Synoptix in Action
          </motion.h2>
          <motion.p 
            style={{ color: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["#4B5563", "#E5E7EB", "#E5E7EB", "#4B5563"]) }}
            className="text-xl max-w-3xl mx-auto"
          >
            Watch how our AI platform automates workflows and entire job functions with built-in safety guardrails.
          </motion.p>
        </div>

        <motion.div
          style={{ width, scale }}
          className="relative mx-auto rounded-2xl overflow-hidden shadow-xl"
        >
          {!isPlaying ? (
            <>
              <div className="relative aspect-video bg-gray-100 overflow-hidden"> {/* Fixed aspect ratio */}
                <Image 
                  src="https://via.placeholder.com/1280x720.png" 
                  alt="Video thumbnail" 
                  width={1280} 
                  height={720}
                  className="w-full h-full object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button
                    onClick={handlePlayVideo}
                    className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-blue-700 shadow-lg group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white group-hover:text-white/90 transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-1/3 pointer-events-none" />
            </>
          ) : (
            <div className="aspect-video bg-black"> {/* Fixed aspect ratio */}
              <iframe
                width="100%"
                height="100%"
                src="about:blank" // Replace with actual video URL when available
                title="Synoptix Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          )}
        </motion.div>
        
        <motion.div 
          style={{ color: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["#6B7280", "#9CA3AF", "#9CA3AF", "#6B7280"]) }}
          className="mt-8 text-center"
        >
          <p className="text-sm">
            See how our AI platform can transform your business operations
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VideoSection;