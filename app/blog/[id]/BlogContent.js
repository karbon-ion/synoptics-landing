'use client';

import React, { useEffect, useState } from 'react';

// Function to remove any existing table of contents from the blog content
function removeExistingTableOfContents(content) {
  if (!content) return content;
  
  // Common patterns for table of contents sections
  const tocPatterns = [
    // Match div with 'table of contents' or 'toc' in class or id
    /<div[^>]*(?:class|id)[^>]*(?:table-of-contents|toc)[^>]*>.*?<\/div>/is,
    // Match section with 'table of contents' or 'toc' in class or id
    /<section[^>]*(?:class|id)[^>]*(?:table-of-contents|toc)[^>]*>.*?<\/section>/is,
    // Match nav with 'table of contents' or 'toc' in class or id
    /<nav[^>]*(?:class|id)[^>]*(?:table-of-contents|toc)[^>]*>.*?<\/nav>/is,
    // Match any element containing 'Table of Contents' text with a list after it
    /<h\d[^>]*>\s*Table\s+of\s+Contents\s*<\/h\d>\s*<ul[^>]*>.*?<\/ul>/is,
    // Match any div containing 'Table of Contents' heading
    /<div[^>]*>\s*<h\d[^>]*>\s*Table\s+of\s+Contents\s*<\/h\d>.*?<\/div>/is
  ];
  
  let processedContent = content;
  
  // Apply each pattern to remove table of contents sections
  tocPatterns.forEach(pattern => {
    processedContent = processedContent.replace(pattern, '');
  });
  
  return processedContent;
}

// Function to add IDs to headings for table of contents
function addHeadingIds(content) {
  if (!content) return content;
  
  // Regular expression to find heading tags
  const headingRegex = /<h([1-6])([^>]*)>(.*?)<\/h\1>/gi;
  
  // Replace headings with versions that have IDs
  return content.replace(headingRegex, (match, level, attrs, text) => {
    // Generate an ID from the heading text
    const id = text
      .replace(/<[^>]+>/g, '') // Remove any HTML tags inside the heading
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric chars with hyphens
      .replace(/(^-|-$)/g, ''); // Remove leading/trailing hyphens
    
    // Check if ID attribute already exists
    if (attrs.includes('id=')) {
      return match; // Don't modify if ID already exists
    }
    
    return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
  });
}

// Function to process content and convert URLs to image tags
function processContentWithImages(content) {
  if (!content) return content;
  
  // Regular expression to find standalone URLs that are likely images
  const imageUrlRegex = /(<p>|<div>|^|\n|<br\s*\/?>)\s*(https?:\/\/[^\s]+\.(jpg|jpeg|png|gif|webp|svg)(\?[^\s]*)?)\s*(<\/p>|<\/div>|$|\n|<br\s*\/?>)/gi;
  
  // Replace standalone URLs with img tags
  return content.replace(imageUrlRegex, (match, prefix, url, ext, query, suffix) => {
    return `${prefix}<img src="${url}" alt="Blog image" class="blog-image" />${suffix}`;
  });
}

const BlogContent = ({ content }) => {
  // Process the content when the component mounts
  const [processedContent, setProcessedContent] = useState('');
  
  useEffect(() => {
    // First remove any existing table of contents
    const contentWithoutToc = removeExistingTableOfContents(content);
    // Then add IDs to headings and process images
    const contentWithIds = addHeadingIds(contentWithoutToc);
    setProcessedContent(processContentWithImages(contentWithIds));
  }, [content]);
  
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
        .blog-content-wrapper img { max-width: 100%; height: auto; margin: 1.5rem 0; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
        .blog-content-wrapper .blog-image { display: block; margin: 2rem auto; max-width: 100%; }
      `}</style>
      
      {/* Display the processed HTML content */}
      <div 
        dangerouslySetInnerHTML={{ __html: processedContent }}
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
