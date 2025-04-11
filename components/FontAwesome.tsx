"use client"; // Ensure it's a Client Component

import { useEffect, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    FontAwesome?: {
      dom: {
        i2svg: () => void;
      };
    };
  }
}

export default function FontAwesome() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkFontAwesome = () => {
      if (window.FontAwesome) {
        console.log("✅ FontAwesome initialized successfully.");
        window.FontAwesome.dom.i2svg();
        setIsLoaded(true);
      } else {
        console.warn("⚠️ FontAwesome is still undefined, retrying...");
        setTimeout(checkFontAwesome, 500); // Retry after 500ms
      }
    };

    // Wait a bit for the script to load before checking
    const timer = setTimeout(checkFontAwesome, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Script
      src="https://kit.fontawesome.com/a29f576bea.js"
      crossOrigin="anonymous"
      strategy="afterInteractive"
      onLoad={() => {
        console.log("🔄 FontAwesome script loaded.");
        if (window.FontAwesome) {
          window.FontAwesome.dom.i2svg();
          setIsLoaded(true);
        }
      }}
    />
  );
}
