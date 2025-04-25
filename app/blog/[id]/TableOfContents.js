'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const TableOfContents = ({ content }) => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');

  // Extract headings from content
  useEffect(() => {
    if (!content) return;

    // Regular expression to find all headings (h1-h6)
    const headingRegex = /<h([1-6])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h\1>/gi;
    const headingsArray = [];
    let match;

    // Create a temporary div to parse HTML content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;

    // Find all heading elements in the content
    const headingElements = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    headingElements.forEach((heading) => {
      // Generate an ID if one doesn't exist
      if (!heading.id) {
        const headingText = heading.textContent;
        const id = headingText
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        heading.id = id;
      }

      headingsArray.push({
        id: heading.id,
        text: heading.textContent,
        level: parseInt(heading.tagName.substring(1), 10)
      });
    });

    setHeadings(headingsArray);
  }, [content]);

  // Set up intersection observer to highlight active heading
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    // Observe all heading elements
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="table-of-contents">
      <h3 className="text-xl font-bold mb-6 text-gray-800 border-b pb-3">Table of Contents</h3>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`toc-item level-${heading.level}`}
            style={{ 
              marginLeft: `${(heading.level - 1) * 12}px`,
              fontSize: `${Math.max(16 - (heading.level - 1), 12)}px`,
              transition: 'all 0.2s ease'
            }}
          >
            <a
              href={`#${heading.id}`}
              className={`block py-1.5 border-l-2 pl-3 hover:text-blue-600 transition-all duration-200 ${
                activeId === heading.id
                  ? 'border-blue-500 text-blue-600 font-medium bg-blue-50 rounded-r'
                  : 'border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50/50 hover:rounded-r'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .table-of-contents {
          position: sticky;
          top: 100px;
          max-height: calc(100vh - 150px);
          overflow-y: auto;
          padding-right: 10px;
          padding: 1.5rem;
          background-color: #f8fafc;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        /* Custom scrollbar for the table of contents */
        .table-of-contents::-webkit-scrollbar {
          width: 4px;
        }
        
        .table-of-contents::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .table-of-contents::-webkit-scrollbar-thumb {
          background: #ccd5e0;
          border-radius: 10px;
        }
        
        .table-of-contents::-webkit-scrollbar-thumb:hover {
          background: #a3b8cc;
        }
      `}</style>
    </div>
  );
};

export default TableOfContents;
