"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
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
      
      const container = ref.current;
      const cards = cardRefs.current.filter(Boolean);
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      
      let closestCard = 0;
      let minDistance = Infinity;
      
      cards.forEach((card, index) => {
        if (!card) return;
        
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distanceToCenter = Math.abs(cardCenter - viewportCenter);
        
        if (distanceToCenter < minDistance) {
          minDistance = distanceToCenter;
          closestCard = index;
        }
      });
      
      setActiveCard(closestCard);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundColors = [
    "rgb(239 246 255)", // blue-50
    "rgb(239 246 255)", // blue-50
    "rgb(239 246 255)", // blue-50
  ];
  
  const linearGradients = [
    "linear-gradient(to bottom right, rgb(59 130 246), rgb(37 99 235))", // blue-500 to blue-600
    "linear-gradient(to bottom right, rgb(59 130 246), rgb(37 99 235))", // blue-500 to blue-600
    "linear-gradient(to bottom right, rgb(59 130 246), rgb(37 99 235))", // blue-500 to blue-600
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex min-h-[30rem] justify-center space-x-10 rounded-2xl p-10 border border-blue-100"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div 
              key={item.title + index} 
              className="my-20"
              ref={el => cardRefs.current[index] = el}
            >
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-gray-900"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg mt-6 max-w-sm text-gray-600"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div className="sticky top-0 hidden h-screen lg:flex items-center">
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "h-80 w-96 overflow-hidden rounded-2xl bg-white shadow-lg flex items-center justify-center",
            contentClassName,
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </div>
    </motion.div>
  );
};
