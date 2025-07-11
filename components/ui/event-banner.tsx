"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EventBanner() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  if (isMobile) return null;
  
  return (
    <div 
      onClick={() => router.push('/events')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 60,
        textAlign: 'center',
        padding: '0.5rem 0',
        marginBottom: '1rem',
        fontWeight: 500,
        color: 'white',
        backgroundColor: isHovered ? '#4550E3' : '#5662F6',
        backdropFilter: 'blur(4px)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'scale(1.01)' : 'scale(1)',
        boxShadow: isHovered ? '0 2px 10px rgba(0,0,0,0.15)' : 'none'
      }}
    >
      Upcoming Event- See Synoptix AI in action at National Convention Centre Canberra | 31 July 2025
    </div>
  );
}
