"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const cards = cardRefs.current.filter(Boolean);
      const viewportHeight = window.innerHeight;
      
      // Add offset for navbar (approximately 80px)
      const navbarOffset = 80;
      
      // Find which card is closest to being in view
      let closestCard = 0;
      let minDistance = Infinity;
      
      cards.forEach((card, index) => {
        if (!card) return;
        
        const rect = card.getBoundingClientRect();
        
        // Calculate how far the card is from being in the optimal viewing position
        // We want the card to be just below the navbar
        const optimalPosition = navbarOffset + 50; // 50px buffer below navbar
        const distanceFromOptimal = Math.abs(rect.top - optimalPosition);
        
        // If this card is closer to the optimal position than any previous card
        if (distanceFromOptimal < minDistance) {
          minDistance = distanceFromOptimal;
          closestCard = index;
        }
      });
      
      setActiveCard(closestCard);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check after a short delay to ensure all elements are properly rendered
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed background colors array since we're using a consistent background
  const backgroundColors = [
    "rgb(239 246 255)", // blue-50 for all cards
  ];
  
  // Removed gradient variations since we're using a consistent style
  const linearGradients = [
    "none", // No gradient, we'll use the image itself
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[0],
      }}
      className="relative flex flex-col md:flex-row min-h-[30rem] rounded-2xl p-10 md:p-20 border border-blue-100"
      ref={ref}
    >
      {/* Content column */}
      <div className="w-full md:w-1/2 relative ">
        <div className="space-y-24 md:space-y-28">
          {content.map((item, index) => (
            <div 
              key={item.title + index} 
              className="relative"
              ref={(el: HTMLDivElement | null) => {
                if (cardRefs.current) {
                  cardRefs.current[index] = el;
                }
              }}
            >
              <motion.div
                animate={{
                  opacity: activeCard === index ? 1 : 0.4,
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
              
              {/* Mobile-only image */}
              <div className="mt-6 md:hidden">
                {activeCard === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl overflow-hidden"
                  >
                    {item.content}
                  </motion.div>
                )}
              </div>
            </div>
          ))}
          <div className="h-20" /> {/* Spacer at bottom */}
        </div>
      </div>
      
      {/* Image column */}
      <div className="hidden md:block w-1/2 relative">
        <div className="sticky mt-[-100px] top-20 pt-4 h-[500px] overflow-hidden rounded-3xl">
          {content.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: activeCard === index ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
              className={`absolute inset-0 flex items-start justify-center ${activeCard === index ? 'z-10' : 'z-0'}`}
            >
              {item.content}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
