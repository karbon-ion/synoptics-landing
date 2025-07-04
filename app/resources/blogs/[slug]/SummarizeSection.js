'use client';

import React, { Children, isValidElement, cloneElement } from 'react';
import Image from 'next/image';

const SummarizeSection = ({ children }) => {
  const renderWithIcon = (heading) => (
    <div key="heading-with-icon" className="flex items-center gap-3  border-b border-[#E5E7EB] ">
      <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#F3F7FB] p-3">
        <Image 
          src="/synoptix_logo.svg" 
          alt="Summary icon" 
          width={30} 
          height={30}
          style={{ backgroundColor: 'transparent' }}
          className="shadow-none"
          objectFit="contain"
        />
      </div>
      {React.cloneElement(heading, {
        style: {
          fontFamily: 'Syne',
          fontWeight: 700,
          fontSize: '40px',
          lineHeight: '45px',
          letterSpacing: '0%'
        }
      })}
    </div>
  );

  let foundFirstHeading = false;
  const enhancedChildren = Children.map(children, (child) => {
    // Handle direct heading elements
    if (!foundFirstHeading && isValidElement(child) && /^h[1-6]$/i.test(child.type)) {
      foundFirstHeading = true;
      return renderWithIcon(child);
    }
    
    // Handle headings inside dangerouslySetInnerHTML divs
    if (!foundFirstHeading && isValidElement(child) && child.props.dangerouslySetInnerHTML) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = child.props.dangerouslySetInnerHTML.__html;
      const headings = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
      
      if (headings.length > 0) {
        foundFirstHeading = true;
        // Only modify the first heading
        const modifiedHtml = child.props.dangerouslySetInnerHTML.__html.replace(
          /(<h[1-6][^>]*>.*?<\/h[1-6]>)/i,
          '<div class="flex items-center gap-3  border-b border-[#E5E7EB] mb-4"><div class="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#F3F7FB] p-3"><img src="/synoptix_logo.svg" alt="Summary icon" width="30" height="30" style="background-color: transparent; object-fit: contain;" class="shadow-none" /></div><div style="font-family: Syne; font-weight: 700; font-size: 40px; line-height: 45px; letter-spacing: 0%;">$1</div></div>'
        );
        
        return React.cloneElement(child, {
          dangerouslySetInnerHTML: { __html: modifiedHtml }
        });
      }
    }
    return child;
  });

  return (
    <div className="my-8 relative p-[1.5px] rounded-[20px] bg-gradient-to-r from-[#155DFC] via-[#7FF4F9] via-[#A855FF] to-[#DF9C2F]">
      <div className="bg-white rounded-[20px] p-6 h-full">
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
