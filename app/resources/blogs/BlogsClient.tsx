'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { BlogPost } from '@/app/utils/blog-utils';

const fallbackBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: 'AI-Driven Workflow Automation',
    description: 'Discover how our AI solutions are helping companies reduce manual processes by 70% and increase operational efficiency across departments.',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1000',
    date: 'April 2, 2025',
    category: 'Technology',
    content: 'Lorem ipsum...',
    fileName: ''
  }
];

const BlogsPageClient = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(fallbackBlogPosts);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(fallbackBlogPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    async function loadBlogs() {
      try {
        const response = await fetch('/api/blogs', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          cache: 'no-store',
        });
        const data = await response.json();
        if (data.posts?.length) {
          const sorted = data.posts.sort((a:any, b:any) => new Date(b.date).getTime() - new Date(a.date).getTime());
          setBlogPosts(sorted);
          setFilteredPosts(sorted);
        }
      } catch (err) {
        console.error('Error loading blog posts:', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadBlogs();
  }, []);

  useEffect(() => {
    let filtered = [...blogPosts];
    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(search) ||
        p.description.toLowerCase().includes(search) ||
        p.category.toLowerCase().includes(search) ||
        p.content.toLowerCase().includes(search)
      );
    }
    if (activeCategory !== 'All') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    setFilteredPosts(filtered);
  }, [searchTerm, activeCategory, blogPosts]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: 'url("/blogs/background.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '4rem 0',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '72px',
              textAlign: 'center',
              color: '#1a202c',
              marginTop: '1rem',
              marginBottom: '2rem',
            }}
          >
            Latest Blogs and Industry Insights
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '30px',
              letterSpacing: '2%',
              textAlign: 'center',
              color: '#4a5568',
              maxWidth: '48rem',
              margin: '0 auto 2rem',
            }}
          >
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
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
                    textAlign: 'center',
                    padding: '0.5rem 0',
                    color: activeCategory === 'All' ? '#1a202c' : '#ACB6BE',
                    borderBottom: activeCategory === 'All' ? '2px solid #3182ce' : 'none',
                  }}
                >
                  All Blogs
                </button>
                {Array.from(new Set(blogPosts.map((p) => p.category))).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      fontFamily: 'var(--font-syne)',
                      fontWeight: 700,
                      fontSize: '14px',
                      lineHeight: '20px',
                      textAlign: 'center',
                      padding: '0.5rem 0',
                      color: activeCategory === cat ? '#1a202c' : '#718096',
                      borderBottom: activeCategory === cat ? '2px solid #3182ce' : 'none',
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Blogs Grid Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
              <p className="mt-4 text-gray-600">Loading blog posts...</p>
            </div>
          ) : (
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
                    <div
                      style={{
                        fontFamily: 'var(--font-poppins)',
                        fontWeight: 500,
                        fontSize: '12px',
                        lineHeight: '20px',
                        color: '#60a5fa',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {post.date}
                    </div>
                    <Link
                      href={`/resources/blogs/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
                      className="block"
                    >
                      <h3
                        style={{
                          fontFamily: 'var(--font-syne)',
                          fontWeight: 600,
                          fontSize: '18px',
                          lineHeight: '28px',
                          color: '#1a202c',
                          marginBottom: '1rem',
                        }}
                        className="group-hover:text-blue-600"
                      >
                        {post.title}
                      </h3>
                    </Link>
                    <p
                      style={{
                        fontFamily: 'var(--font-poppins)',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '26px',
                        color: '#4a5568',
                        marginBottom: '1.5rem',
                      }}
                    >
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
                          color: '#3b82f6',
                          display: 'inline-flex',
                          alignItems: 'center',
                        }}
                        className="group-hover:text-blue-700"
                      >
                        Read Our Blog
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogsPageClient;
