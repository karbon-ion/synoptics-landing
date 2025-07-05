'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/app/utils/blog-utils';

const fallbackBlogPosts = [
  {
    id: "1",
    title: 'AI-Driven Workflow Automation',
    description: 'Discover how our AI solutions are helping companies reduce manual processes by 70% and increase operational efficiency across departments.',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1000',
    date: 'April 2, 2025',
    category: 'Technology',
    content: '',
    fileName: ''
  },
  {
    id: "2",
    title: 'The Future of Enterprise AI',
    description: 'Explore how cutting-edge AI technologies are transforming enterprise operations and creating new opportunities for innovation.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000',
    date: 'March 28, 2025',
    category: 'Innovation',
    content: '',
    fileName: ''
  },
  {
    id: "3",
    title: 'Building Responsible AI Systems',
    description: 'Learn about the ethical considerations and best practices for developing AI systems that are transparent, fair, and accountable.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000',
    date: 'March 15, 2025',
    category: 'Ethics',
    content: '',
    fileName: ''
  }
];

const BlogsSection = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(fallbackBlogPosts);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const response = await fetch('/api/blogs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          cache: 'no-store'
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch blog posts: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.posts && data.posts.length > 0) {
          const sortedPosts = [...data.posts]
            .sort((a, b) => {
              const dateA = new Date(a.date);
              const dateB = new Date(b.date);
              return dateB.getTime() - dateA.getTime();
            })
            .slice(0, 3); // Only take the first 3 posts
          setBlogPosts(sortedPosts);
        }
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadBlogs();
  }, []);

  return (
    <section className="py-6 sm:py-8 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-16">
          <span className="text-blue-500 text-sm font-medium tracking-wider uppercase">
            LATEST INSIGHTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-8"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
            }}>
            <span style={{ color: '#5662F6' }}>Latest</span> From Our Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
            }}>
            Stay updated with our latest insights on AI technology, industry trends, and best practices
          </p>
          <div className="h-1 w-16 bg-blue-500 mx-auto rounded-full mt-8"></div> */}
        {/* </div> */}

        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
            <p className="mt-4 text-gray-600">Loading blog posts...</p>
          </div>
        )}

        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {blogPosts.map((post) => (
              <div 
                key={post.id}
                className="group bg-white rounded-[32px] border border-[rgba(66,153,225,0.2)] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-48 sm:h-52 md:h-56 w-full overflow-hidden">
                  <div className="absolute top-4 right-4 z-10 bg-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-full">
                    {post.category}
                  </div>
                  <Image
                    src={decodeURIComponent(post.image)}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6 md:p-8 flex-grow flex flex-col">
                  <div className="text-blue-400 text-sm mb-2">{post.date}</div>
                  <Link 
                    href={`/resources/blogs/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
                    className="block"
                  >
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {post.description.replace(/https?:\/\/[^\s]+/g, '')}
                  </p>
                  <div className="mt-auto">
                    <Link 
                      href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
                      className="inline-flex items-center text-blue-500 font-medium group-hover:text-blue-700 transition-colors duration-300"
                    >
                      Read More
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* <div className="text-center">
          <Link 
            href="/resources/blogs"
            className="inline-flex items-center justify-center px-8 py-3 text-white rounded-full bg-[#5662F6] hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '18px',
            }}
          >
            View All Blogs
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default BlogsSection;
