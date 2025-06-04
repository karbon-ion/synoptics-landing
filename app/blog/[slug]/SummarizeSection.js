'use client';

import React, { Children, isValidElement, cloneElement } from 'react';
import Image from 'next/image';

const SummarizeSection = ({ children }) => {
  let foundFirstHeading = false;

  const enhancedChildren = Children.map(children, (child) => {
    if (!foundFirstHeading && isValidElement(child) && /^h[1-6]$/i.test(child.type)) {
      foundFirstHeading = true;
      return (
        <div key="heading-with-icon" className="flex items-center gap-3">
          <div className="w-6 h-6 flex items-center justify-center">
            <Image 
              src="/icons/summarize.svg" 
              alt="Summarize icon" 
              width={20} 
              height={20}
            />
          </div>
          {child}
        </div>
      );
    }
    return child;
  });

  return (
    <div className="my-8 relative rounded-[20px]" style={{ border: '2px solid', borderImageSource: 'linear-gradient(90deg, #155DFC -0.15%, #7FF4F9 39.97%, #A855FF 68.05%, #DF9C2F 100.15%)', borderImageSlice: '1' }}>
      <div className="bg-white rounded-lg p-6">
        <div className="text-[#111111] space-y-3 font-syne text-base">
          {enhancedChildren}
        </div>
      </div>
      <style jsx global>{`
        .summarize-section ul {
          list-style-type: none !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .summarize-section ul li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          line-height: 100%;
          letter-spacing: 0%;
        }
        .summarize-section ul li:last-child {
          margin-bottom: 0;
        }
        .summarize-section ul li:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.25rem;
          width: 6px;
          height: 6px;
          background-color: #111111;
          border-radius: 50%;
        }
        .summarize-section p {
          display: none;
        }
        .summarize-section h1,
        .summarize-section h2,
        .summarize-section h3,
        .summarize-section h4,
        .summarize-section h5,
        .summarize-section h6 {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default SummarizeSection;
