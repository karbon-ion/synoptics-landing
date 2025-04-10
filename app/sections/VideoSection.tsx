'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Define YouTube Player types
declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        config: {
          videoId: string;
          playerVars?: {
            autoplay?: number;
            rel?: number;
            [key: string]: any;
          };
          events?: {
            onReady?: (event: { target: any }) => void;
            [key: string]: any;
          };
        }
      ) => {
        playVideo: () => void;
        pauseVideo: () => void;
        setVolume: (volume: number) => void;
      };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

const VideoSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const playerRef = useRef<any>(null);
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

  // Load YouTube API
  useEffect(() => {
    // Load the YouTube IFrame API script
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Define the onYouTubeIframeAPIReady callback
    window.onYouTubeIframeAPIReady = () => {
      if (playerRef.current) return;
      
      playerRef.current = new window.YT.Player('video-player', {
        videoId: 'MgRh-vN9ZBg',
        playerVars: {
          autoplay: isInView ? 1 : 0,
          rel: 0,
        },
        events: {
          onReady: (event) => {
            event.target.setVolume(50); // Set volume to 50%
            if (isInView) {
              event.target.playVideo();
            }
          }
        }
      });
    };

    return () => {
      if (playerRef.current) {
        playerRef.current = null;
      }
      // Clean up the global callback
      window.onYouTubeIframeAPIReady = () => {};
    };
  }, []);

  // Control player based on isInView changes
  useEffect(() => {
    if (!playerRef.current) return;
    
    if (isInView) {
      playerRef.current.playVideo();
    } else {
      playerRef.current.pauseVideo();
    }
  }, [isInView]);

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
          <div id="video-player" className="w-full h-full absolute inset-0"></div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VideoSection;