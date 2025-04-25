'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const TableOfContents = ({ content }) => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [expandedSections, setExpandedSections] = useState({});

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
    
    // Initialize expanded state for H1 and H2 headings
    const initialExpandedState = {};
    headingsArray.forEach(heading => {
      // H1 headings are expanded by default, H2 headings are collapsed
      if (heading.level === 1) {
        initialExpandedState[heading.id] = true; // H1 expanded by default
      } else if (heading.level === 2) {
        initialExpandedState[heading.id] = false; // H2 collapsed by default
      }
    });
    setExpandedSections(initialExpandedState);
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

  // Toggle expanded state for a heading
  const toggleExpand = (headingId) => {
    setExpandedSections(prev => ({
      ...prev,
      [headingId]: !prev[headingId]
    }));
  };

  // Organize headings into a hierarchical structure
  const organizeHeadings = () => {
    const result = [];
    const h1Sections = [];
    let currentH1 = null;
    let currentH2 = null;
    let h1Children = [];
    let h2Children = [];

    headings.forEach(heading => {
      if (heading.level === 1) {
        // If we already have a section, add it to the result
        if (currentH1) {
          // Add any remaining H2 section to the H1's children
          if (currentH2 && h2Children.length > 0) {
            h1Children.push({
              heading: currentH2,
              children: h2Children
            });
          }
          
          h1Sections.push({
            heading: currentH1,
            children: h1Children
          });
        }
        // Start a new H1 section
        currentH1 = heading;
        currentH2 = null;
        h1Children = [];
        h2Children = [];
      } else if (heading.level === 2) {
        // If we already have an H2 section, add it to the H1's children
        if (currentH2 && h2Children.length > 0) {
          h1Children.push({
            heading: currentH2,
            children: h2Children
          });
        }
        // Start a new H2 section
        currentH2 = heading;
        h2Children = [];
      } else if (currentH2) {
        // Add this heading to the current H2 section
        h2Children.push(heading);
      } else if (currentH1) {
        // Add this heading directly to the H1 section (no parent H2)
        h1Children.push(heading);
      }
    });

    // Add the last sections if they exist
    if (currentH2 && h2Children.length > 0) {
      h1Children.push({
        heading: currentH2,
        children: h2Children
      });
    }
    
    if (currentH1) {
      h1Sections.push({
        heading: currentH1,
        children: h1Children
      });
    }

    return h1Sections;
  };

  if (headings.length === 0) {
    return null;
  }

  const organizedHeadings = organizeHeadings();

  return (
    <div className="table-of-contents">
      <h3 className="text-lg font-bold mb-4 text-gray-800 border-b pb-2">Table of Contents</h3>
      <ul className="space-y-1">
        {organizedHeadings.map(({ heading: h1, children: h1Children }) => (
          <li key={h1.id} className="mb-2">
            {/* H1 heading */}
            <div className="flex items-center">
              {h1Children.length > 0 && (
                <button 
                  onClick={() => toggleExpand(h1.id)}
                  className="w-5 h-5 flex items-center justify-center text-gray-500 hover:text-blue-600 transition-colors"
                  aria-label={expandedSections[h1.id] ? "Collapse section" : "Expand section"}
                >
                  <svg 
                    className={`w-3 h-3 transition-transform duration-200 ${expandedSections[h1.id] ? 'transform rotate-90' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
              <a
                href={`#${h1.id}`}
                className={`flex-grow py-1 pl-2 hover:text-blue-600 font-bold transition-all duration-200 ${activeId === h1.id ? 'text-blue-600' : 'text-gray-800'}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(h1.id)?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                {h1.text}
              </a>
            </div>
            
            {/* H1's children (including H2 sections and other direct children) */}
            {h1Children.length > 0 && expandedSections[h1.id] && (
              <ul className="mt-1 ml-4 pl-2 border-l border-gray-200">
                {h1Children.map(child => {
                  // Check if this child is an H2 with its own children
                  if (child.heading && child.children) {
                    const h2 = child.heading;
                    return (
                      <li key={h2.id} className="my-2">
                        {/* H2 heading with expand/collapse */}
                        <div className="flex items-center">
                          {child.children.length > 0 && (
                            <button 
                              onClick={() => toggleExpand(h2.id)}
                              className="w-4 h-4 flex items-center justify-center text-gray-500 hover:text-blue-600 transition-colors"
                              aria-label={expandedSections[h2.id] ? "Collapse subsection" : "Expand subsection"}
                            >
                              <svg 
                                className={`w-2.5 h-2.5 transition-transform duration-200 ${expandedSections[h2.id] ? 'transform rotate-90' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          )}
                          <a
                            href={`#${h2.id}`}
                            className={`flex-grow py-1 pl-2 text-sm font-medium hover:text-blue-600 transition-colors ${activeId === h2.id ? 'text-blue-600' : 'text-gray-700'}`}
                            onClick={(e) => {
                              e.preventDefault();
                              document.getElementById(h2.id)?.scrollIntoView({
                                behavior: 'smooth'
                              });
                            }}
                          >
                            {h2.text}
                          </a>
                        </div>
                        
                        {/* H2's children */}
                        {child.children.length > 0 && expandedSections[h2.id] && (
                          <ul className="mt-1 ml-4 pl-2 border-l border-gray-200">
                            {child.children.map(h3Plus => (
                              <li key={h3Plus.id} className="my-1">
                                <a
                                  href={`#${h3Plus.id}`}
                                  className={`block py-0.5 text-xs hover:text-blue-600 transition-colors ${activeId === h3Plus.id ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                                  style={{ 
                                    marginLeft: `${(h3Plus.level - 3) * 8}px`,
                                  }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(h3Plus.id)?.scrollIntoView({
                                      behavior: 'smooth'
                                    });
                                  }}
                                >
                                  {h3Plus.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  } else {
                    // Regular heading (H3-H6) directly under H1
                    return (
                      <li key={child.id} className="my-1">
                        <a
                          href={`#${child.id}`}
                          className={`block py-1 text-sm hover:text-blue-600 transition-colors ${activeId === child.id ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                          style={{ 
                            marginLeft: `${(child.level - 2) * 8}px`,
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(child.id)?.scrollIntoView({
                              behavior: 'smooth'
                            });
                          }}
                        >
                          {child.text}
                        </a>
                      </li>
                    );
                  }
                })}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <style jsx>{`
        .table-of-contents {
          position: sticky;
          top: 100px;
          max-height: calc(100vh - 150px);
          overflow-y: auto;
          padding: 1rem 1rem 1rem 0.5rem;
          background-color: #f8fafc;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.05);
          font-size: 0.95rem;
        }

        /* Custom scrollbar for the table of contents */
        .table-of-contents::-webkit-scrollbar {
          width: 3px;
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
