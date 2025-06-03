'use client';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import SummarizeSection from './SummarizeSection';

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
  // Updated to handle URLs with spaces in the filename
  const imageUrlRegex = /(<p>|<div>|^|\n|<br\s*\/?>)\s*(https?:\/\/[^<>"']+\.(jpg|jpeg|png|gif|webp|svg)(\?[^<>"']*)?)\s*(<\/p>|<\/div>|$|\n|<br\s*\/?>)/gi;
  
  // Replace standalone URLs with img tags
  return content.replace(imageUrlRegex, (match, prefix, url, ext, query, suffix) => {
    // Ensure URL is properly encoded for spaces and special characters
    const encodedUrl = url.replace(/\s+/g, '%20');
    return `${prefix}<img src="${encodedUrl}" alt="Blog image" class="blog-image" />${suffix}`;
  });
}

const BlogContent = ({ content }) => {
  // Process the content when the component mounts
  const [processedContent, setProcessedContent] = useState('');
  
  // Function to ensure center-aligned headings are properly styled
  const ensureCenterAlignment = (htmlContent) => {
    if (!htmlContent) return htmlContent;
    
    // Find headings that might be center-aligned in the original document
    // This looks for headings with text that suggests they should be centered
    const titleRegex = /<h([1-6])([^>]*)>([^<]*(?:title|overview|summary|introduction|conclusion|benefits|features)[^<]*)<\/h\1>/gi;
    
    // Apply center alignment directly to these headings
    let processedHtml = htmlContent.replace(titleRegex, (match, level, attrs, text) => {
      // Only apply to headings that don't already have alignment styles
      if (!attrs.includes('style=') || !attrs.includes('text-align')) {
        return `<h${level}${attrs} style="text-align: center; width: 100%;">${text}</h${level}>`;
      }
      return match;
    });
    
    // Also explicitly handle any heading with the 'align' attribute
    processedHtml = processedHtml.replace(/<h([1-6])([^>]*)align="center"([^>]*)>(.*?)<\/h\1>/gi, 
      (match, level, attrsBefore, attrsAfter, text) => {
        return `<h${level}${attrsBefore}${attrsAfter} style="text-align: center; width: 100%;">${text}</h${level}>`;
      });
    
    // Handle headings that might have center alignment in a class
    processedHtml = processedHtml.replace(/<h([1-6])([^>]*)class="([^"]*center[^"]*)"([^>]*)>(.*?)<\/h\1>/gi, 
      (match, level, attrsBefore, className, attrsAfter, text) => {
        return `<h${level}${attrsBefore}class="${className}"${attrsAfter} style="text-align: center; width: 100%;">${text}</h${level}>`;
      });
    
    // Force center alignment on first h1 and h2 elements
    processedHtml = processedHtml.replace(/(<h1[^>]*>)(.*?)(<\/h1>)/i, 
      (match, openTag, content, closeTag) => {
        if (!openTag.includes('style=') || !openTag.includes('text-align')) {
          return `<h1 style="text-align: center; width: 100%;">${content}</h1>`;
        }
        return match;
      });
    
    return processedHtml;
  };
  
  const processSummarizeSection = (htmlContent) => {
    if (!htmlContent) return htmlContent;

    // Find content between Summarize heading and a line of dashes
    const summarizeRegex = /<h[1-6][^>]*>\s*Summarize:?\s*<\/h[1-6]>\s*([\s\S]*?)(?:-{10,}|$)/i;
    
    return htmlContent.replace(summarizeRegex, (match, content) => {
      // Clean up any trailing whitespace or empty paragraphs
      const cleanContent = content.replace(/(<p>\s*<\/p>\s*)*$/, '');
      // Return the content wrapped in our custom component's structure
      return `<div class="summarize-section">${cleanContent}</div>`;
    });
  };
  useEffect(() => {
    // First remove any existing table of contents
    const contentWithoutToc = removeExistingTableOfContents(content);
    // Then add IDs to headings and process images
    const contentWithIds = addHeadingIds(contentWithoutToc);
    // Process the content with all our functions
    const processed = processSummarizeSection(
      processContentWithImages(
        addHeadingIds(
          removeExistingTableOfContents(
            ensureCenterAlignment(content)
          )
        )
      )
    );
    setProcessedContent(processed);
  }, [content]);
  
  const createMarkup = () => {
    if (!processedContent) return { __html: '' };
    
    // Replace the summarize section placeholder with the actual component
    const contentWithComponents = processedContent.replace(
      /<div class="summarize-section">(.*?)<\/div>/gs,
      (match, content) => `<div class="summarize-wrapper" data-content="${encodeURIComponent(content)}"></div>`
    );
    
    return { __html: contentWithComponents };
  };

  useEffect(() => {
    // After rendering, replace placeholders with actual React components
    const wrappers = document.querySelectorAll('.summarize-wrapper');
    wrappers.forEach(wrapper => {
      const content = decodeURIComponent(wrapper.getAttribute('data-content'));
      const temp = document.createElement('div');
      temp.innerHTML = content;
      
      // Create a new instance of SummarizeSection
      const summarizeElement = document.createElement('div');
      wrapper.parentNode.replaceChild(summarizeElement, wrapper);
      
      // Render the SummarizeSection component
      const root = ReactDOM.createRoot(summarizeElement);
      root.render(
        <SummarizeSection>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </SummarizeSection>
      );
    });
  }, [processedContent]);

  return (
    <>
      {/* Add the styles for blog content */}
      <style jsx global>{`
        /* Preserve alignment from docx file */
        .blog-content-wrapper h1[style*="text-align: center"],
        .blog-content-wrapper h2[style*="text-align: center"],
        .blog-content-wrapper h3[style*="text-align: center"],
        .blog-content-wrapper h4[style*="text-align: center"],
        .blog-content-wrapper h5[style*="text-align: center"],
        .blog-content-wrapper h6[style*="text-align: center"],
        .blog-content-wrapper p[style*="text-align: center"],
        .blog-content-wrapper .center-aligned,
        .blog-content-wrapper .center {
          text-align: center !important;
          margin-left: auto !important;
          margin-right: auto !important;
          width: 100% !important;
        }
        
        .blog-content-wrapper h1[style*="text-align: right"],
        .blog-content-wrapper h2[style*="text-align: right"],
        .blog-content-wrapper h3[style*="text-align: right"],
        .blog-content-wrapper h4[style*="text-align: right"],
        .blog-content-wrapper h5[style*="text-align: right"],
        .blog-content-wrapper h6[style*="text-align: right"],
        .blog-content-wrapper p[style*="text-align: right"],
        .blog-content-wrapper .right-aligned {
          text-align: right !important;
        }
        
        .blog-content-wrapper h1[style*="text-align: justify"],
        .blog-content-wrapper h2[style*="text-align: justify"],
        .blog-content-wrapper h3[style*="text-align: justify"],
        .blog-content-wrapper h4[style*="text-align: justify"],
        .blog-content-wrapper h5[style*="text-align: justify"],
        .blog-content-wrapper h6[style*="text-align: justify"],
        .blog-content-wrapper p[style*="text-align: justify"],
        .blog-content-wrapper .justify-aligned {
          text-align: justify !important;
        }
        
        /* Mobile-friendly responsive headings */
        .blog-content-wrapper h1 { font-size: 1.875rem; font-weight: 800; margin-top: 1.75rem; margin-bottom: 1rem; color: #1a202c; line-height: 1.2; word-wrap: break-word; overflow-wrap: break-word; hyphens: auto; }
        .blog-content-wrapper h2 { font-size: 1.5rem; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.75rem; color: #2d3748; line-height: 1.3; word-wrap: break-word; overflow-wrap: break-word; hyphens: auto; }
        .blog-content-wrapper h3 { font-size: 1.25rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.75rem; color: #2d3748; line-height: 1.4; word-wrap: break-word; overflow-wrap: break-word; hyphens: auto; }
        .blog-content-wrapper h4 { font-size: 1.125rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.5rem; color: #2d3748; line-height: 1.4; word-wrap: break-word; overflow-wrap: break-word; hyphens: auto; }
        .blog-content-wrapper h5 { font-size: 1rem; font-weight: 600; margin-top: 1rem; margin-bottom: 0.5rem; color: #2d3748; line-height: 1.5; word-wrap: break-word; overflow-wrap: break-word; hyphens: auto; }
        .blog-content-wrapper h6 { font-size: 0.875rem; font-weight: 600; margin-top: 1rem; margin-bottom: 0.5rem; color: #2d3748; line-height: 1.5; word-wrap: break-word; overflow-wrap: break-word; hyphens: auto; }
        
        /* Medium screens and larger */
        @media (min-width: 768px) {
          .blog-content-wrapper h1 { font-size: 2.25rem; }
          .blog-content-wrapper h2 { font-size: 1.75rem; }
          .blog-content-wrapper h3 { font-size: 1.5rem; }
          .blog-content-wrapper h4 { font-size: 1.25rem; }
          .blog-content-wrapper h5 { font-size: 1.125rem; }
          .blog-content-wrapper h6 { font-size: 1rem; }
        }
        
        /* Large screens */
        @media (min-width: 1024px) {
          .blog-content-wrapper h1 { font-size: 2.5rem; }
          .blog-content-wrapper h2 { font-size: 2rem; }
          .blog-content-wrapper h3 { font-size: 1.5rem; }
          .blog-content-wrapper h4 { font-size: 1.3rem; }
          .blog-content-wrapper h5 { font-size: 1.15rem; }
          .blog-content-wrapper h6 { font-size: 1rem; }
        }
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
        dangerouslySetInnerHTML={createMarkup()}
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
