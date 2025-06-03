'use client';

import React from 'react';
import Image from 'next/image';

const SummarizeSection = ({ children }) => {
  return (
    <div className="my-8 relative rounded-xl p-[1px] bg-gradient-to-r from-[#5B9FFF] to-[#FF5BCD]">
      <div className="bg-white rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg">
            <Image 
              src="/icons/summarize.svg" 
              alt="Summarize icon" 
              width={24} 
              height={24}
            />
          </div>
          <h2 className="text-[#111111] font-syne text-xl font-semibold">Summarize</h2>
        </div>
        <div className="text-[#111111] space-y-3 font-syne text-base">
          {children}
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
