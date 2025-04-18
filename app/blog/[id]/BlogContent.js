'use client';

import React from 'react';

const BlogContent = ({ content }) => {
  return (
    <>
      {/* Add the styles for blog content */}
      <style jsx global>{`
        .blog-content-wrapper h1 { font-size: 2.5rem; font-weight: 800; margin-top: 2rem; margin-bottom: 1rem; color: #1a202c; }
        .blog-content-wrapper h2 { font-size: 2rem; font-weight: 700; margin-top: 1.75rem; margin-bottom: 0.75rem; color: #2d3748; }
        .blog-content-wrapper h3 { font-size: 1.75rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem; color: #2d3748; }
        .blog-content-wrapper h4 { font-size: 1.5rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.5rem; color: #2d3748; }
        .blog-content-wrapper h5 { font-size: 1.25rem; font-weight: 600; margin-top: 1rem; margin-bottom: 0.5rem; color: #2d3748; }
        .blog-content-wrapper h6 { font-size: 1.1rem; font-weight: 600; margin-top: 1rem; margin-bottom: 0.5rem; color: #2d3748; }
        .blog-content-wrapper p { margin-bottom: 1rem; line-height: 1.7; }
        .blog-content-wrapper ul { list-style-type: disc; margin-left: 2rem; margin-bottom: 1.5rem; }
        .blog-content-wrapper ol { list-style-type: decimal; margin-left: 2rem; margin-bottom: 1.5rem; }
        .blog-content-wrapper li { margin-bottom: 0.5rem; padding-left: 0.5rem; }
        .blog-content-wrapper li > ul, .blog-content-wrapper li > ol { margin-top: 0.5rem; margin-bottom: 0.5rem; }
        .blog-content-wrapper a { color: #3182ce; text-decoration: underline; }
        .blog-content-wrapper a:hover { color: #2c5282; }
        .blog-content-wrapper strong, .blog-content-wrapper b { font-weight: 700; }
        .blog-content-wrapper em, .blog-content-wrapper i { font-style: italic; }
        .blog-content-wrapper u { text-decoration: underline; }
        .blog-content-wrapper table { border-collapse: collapse; width: 100%; margin-bottom: 1.5rem; }
        .blog-content-wrapper th, .blog-content-wrapper td { border: 1px solid #e2e8f0; padding: 0.75rem; text-align: left; }
        .blog-content-wrapper th { background-color: #f7fafc; font-weight: 600; }
        .blog-content-wrapper blockquote { border-left: 4px solid #e2e8f0; padding-left: 1rem; margin-left: 0; margin-right: 0; font-style: italic; margin-bottom: 1.5rem; }
        .blog-content-wrapper hr { border: 0; border-top: 1px solid #e2e8f0; margin: 2rem 0; }
        .blog-content-wrapper img { max-width: 100%; height: auto; margin: 1.5rem 0; }
      `}</style>

      {/* Display the HTML content with preserved formatting */}
      <div 
        dangerouslySetInnerHTML={{ __html: content }}
        className="docx-content blog-content-wrapper"
        style={{
          fontSize: '1.125rem',
          lineHeight: '1.75',
          color: '#374151',
        }}
      />
    </>
  );
};

export default BlogContent;
