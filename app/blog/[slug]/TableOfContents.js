'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const TableOfContents = ({ content }) => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!content) return;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;

    const headingElements = tempDiv.querySelectorAll('h1, h2');
    const headingsArray = [];

    headingElements.forEach((heading) => {
      const headingText = heading.textContent.trim();
      
      // Skip the Summarize heading
      if (headingText.toLowerCase() === 'summarize') return;
      
      if (!heading.id) {
        const id = headingText
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        heading.id = id;
      }

      headingsArray.push({
        id: heading.id,
        text: headingText.replace(/[^a-zA-Z0-9\s-]/g, '').trim(),
        level: parseInt(heading.tagName.substring(1), 10)
      });
    });

    setHeadings(headingsArray);
  }, [content]);

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
    <nav className="text-sm">
      <h4 className="font-medium mb-4 text-gray-900" style={{ fontFamily: 'Raleway', fontSize: '18px', fontWeight: 600, lineHeight: '100%', letterSpacing: '0%' }}>In this article</h4>
      {headings.length > 0 && (
        <ul className="space-y-6">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={`${heading.level > 1 ? 'ml-4' : ''}`}
            >
              <Link
                href={`#${heading.id}`}
                className={`block relative hover:text-blue-600 transition-colors pl-3 ${activeId === heading.id ? 'text-blue-600 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-blue-600' : 'text-gray-600'}`}
                style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '100%', letterSpacing: '0%' }}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(heading.id);
                  if (element) {
                    const headerOffset = 100; // Adjust this value based on your navbar height
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                {heading.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default TableOfContents;
