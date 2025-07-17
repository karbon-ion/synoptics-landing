'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { BlogPost } from '../../utils/blog-utils';


// Fallback blog posts in case fetching fails
const fallbackBlogPosts = [
  {
    id: "1",
    title: 'AI-Driven Workflow Automation',
    description: 'Discover how our AI solutions are helping companies reduce manual processes by 70% and increase operational efficiency across departments.',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1000',
    date: 'April 2, 2025',
    category: 'Technology',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    fileName: ''
  }
];

const BlogsPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(fallbackBlogPosts);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(fallbackBlogPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    async function loadBlogs() {
      try {
        console.log('Fetching blog posts from API');
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
        console.log('Received blog data:', data);
        
        if (data.posts && data.posts.length > 0) {
          const sortedPosts = [...data.posts].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB.getTime() - dateA.getTime();
          });
          setBlogPosts(sortedPosts);
          setFilteredPosts(sortedPosts);
        }
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadBlogs();
  }, []);
  
  useEffect(() => {
    let filtered = [...blogPosts];
    
    // Filter by search term
    if (searchTerm.trim() !== '') {
      const searchTermLower = searchTerm.toLowerCase();
      filtered = filtered.filter(post => (
        post.title.toLowerCase().includes(searchTermLower) ||
        post.description.toLowerCase().includes(searchTermLower) ||
        post.category.toLowerCase().includes(searchTermLower) ||
        post.content.toLowerCase().includes(searchTermLower)
      ));
    }
    
    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }
    
    setFilteredPosts(filtered);
  }, [searchTerm, activeCategory, blogPosts]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div style={{
        backgroundImage: 'url("/blogs/background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4rem 0',
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h1 style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 700,
            fontSize: '48px',
            lineHeight: '72px',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#1a202c',
            marginTop: '1rem',
            marginBottom: '2rem',
            maxWidth: '56rem',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Latest Blogs and Industry Insights
          </h1>
          <p style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '30px',
            letterSpacing: '2%',
            textAlign: 'center',
            color: '#4a5568',
            maxWidth: '48rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '2rem'
          }}>
            Explore our collection of thought leadership, technical guides, and industry analyses to stay ahead in the world of AI and enterprise solutions.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-12 mb-8">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search blogs..."
                className="w-full py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
             
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="mt-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-12">
            {!isLoading && (
              <>
                <button
                  onClick={() => setActiveCategory('All')}
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '0px',
                    textAlign: 'center',
                    padding: '0.5rem 0',
                    position: 'relative',
                    color: activeCategory === 'All' ? '#1a202c' : '#ACB6BE',
                    borderBottom: activeCategory === 'All' ? '2px solid #3182ce' : 'none'
                  }}
                >
                  All Blogs
                </button>
                {Array.from(new Set(blogPosts.map(post => post.category))).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    style={{
                      fontFamily: 'var(--font-syne)',
                      fontWeight: 700,
                      fontSize: '14px',
                      lineHeight: '20px',
                      letterSpacing: '0px',
                      textAlign: 'center',
                      padding: '0.5rem 0',
                      position: 'relative',
                      color: activeCategory === category ? '#1a202c' : '#718096',
                      borderBottom: activeCategory === category ? '2px solid #3182ce' : 'none'
                    }}
                  >
                    {category}
                  </button>
                ))}
              </>
            )}
          </div>
          {/* <div className="border-b border-gray-200 mt-2"></div> */}
        </div>
      </div>

      {/* Blogs Grid Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
              <p className="mt-4 text-gray-600">Loading blog posts...</p>
            </div>
          )}

          {/* Blogs Grid */}
          {!isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredPosts.map((post) => (
                <div 
                  key={post.id}
                  className="group bg-white rounded-[32px] border border-[rgba(66,153,225,0.2)] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative h-56 w-full overflow-hidden">
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
                  <div className="p-8 flex-grow flex flex-col">
                    <div style={{
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 500,
                      fontSize: '12px',
                      lineHeight: '20px',
                      letterSpacing: '0%',
                      color: '#60a5fa',
                      marginBottom: '0.5rem'
                    }}>{post.date}</div>
                    <Link 
                      href={`/resources/blogs/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
                      className="block"
                    >
                      <h3 style={{
                        fontFamily: 'var(--font-syne)',
                        fontWeight: 600,
                        fontSize: '18px',
                        lineHeight: '28px',
                        letterSpacing: '0%',
                        color: '#1a202c',
                        marginBottom: '1rem',
                        transition: 'color 0.3s ease',
                        cursor: 'pointer'
                      }} className="group-hover:text-blue-600">
                        {post.title}
                      </h3>
                    </Link>
                    <p style={{
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '26px',
                      letterSpacing: '0%',
                      color: '#4a5568',
                      marginBottom: '1.5rem'
                    }}>
                      {post.description.replace(/(?:https?:\/\/[^\s]+|[^\s]+\.(?:jpg|jpeg|png|gif|webp))/gi, '').trim()}
                    </p>
                    <div className="mt-auto">
                      <Link 
                        href={`/resources/blogs/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
                        style={{
                          fontFamily: 'var(--font-syne)',
                          fontWeight: 700,
                          fontSize: '18px',
                          lineHeight: '100%',
                          letterSpacing: '0px',
                          color: '#3b82f6',
                          display: 'inline-flex',
                          alignItems: 'center',
                          transition: 'color 0.3s ease'
                        }}
                        className="group-hover:text-blue-700"
                      >
                        Read Our Blog
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

          {/* No posts message */}
          {!isLoading && blogPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">No blog posts found</h3>
              <p className="text-gray-600">
                Add .docx files to the uploads folder to see them appear here.
              </p>
            </div>
          )}

          {/* Newsletter Subscription */}
          {/* <div className="bg-blue-50 rounded-[32px] p-12 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay updated with the latest insights, industry trends, and AI advancements delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-8 py-3 text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
