"use client";

import React, { useEffect, useState } from 'react';

export default function EventBanner() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  if (isMobile) return null;
  
  return (
    <div style={{
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 60,
      textAlign: 'center',
      padding: '0.5rem 0',
      marginBottom: '1rem',
      fontWeight: 500,
      color: 'white',
      backgroundColor: '#5662F6',
      backdropFilter: 'blur(4px)'
    }}>
      Upcoming Event- See Synoptix AI in action at National Convention Centre Canberra | 31 July 2025
    </div>
  );
}
