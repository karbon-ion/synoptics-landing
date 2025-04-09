'use client';

import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'AI-Driven Workflow Automation',
    description: 'Discover how our AI solutions are helping companies reduce manual processes by 70% and increase operational efficiency across departments.',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1000',
    date: 'April 2, 2025',
    category: 'Technology',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 2,
    title: 'Machine Learning for Supply Chain',
    description: 'Learn how predictive analytics and ML models are transforming inventory management and logistics for enterprise clients worldwide.',
    image: 'https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1000',
    date: 'March 28, 2025',
    category: 'Industry',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 3,
    title: 'The Future of LLM Applications',
    description: 'Explore how large language models are creating new opportunities for businesses to enhance customer service and operational intelligence.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000',
    date: 'March 15, 2025',
    category: 'Research',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 4,
    title: 'Implementing RAG Systems for Enterprise',
    description: 'A comprehensive guide to designing and deploying Retrieval Augmented Generation systems that scale with your business needs.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000',
    date: 'March 10, 2025',
    category: 'Technology',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 5,
    title: 'AI Ethics in Business Applications',
    description: 'Exploring the ethical considerations and best practices for implementing AI solutions in enterprise environments.',
    image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1000',
    date: 'February 25, 2025',
    category: 'Ethics',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 6,
    title: 'Fine-Tuning LLMs for Domain-Specific Tasks',
    description: 'A technical deep dive into the process of customizing large language models for specialized industry applications.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000',
    date: 'February 18, 2025',
    category: 'Research',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
];

const BlogsPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-500 text-sm font-medium tracking-wider uppercase">
            INSIGHTS & KNOWLEDGE
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-8 max-w-4xl mx-auto">
            Latest Blogs and Industry Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our collection of thought leadership, technical guides, and industry analyses to stay ahead in the world of AI and enterprise solutions.
          </p>
          <div className="h-1 w-16 bg-blue-500 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Blogs Grid Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post) => (
              <div 
                key={post.id}
                className="group bg-white rounded-[32px] border border-[rgba(66,153,225,0.2)] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <div className="absolute top-4 right-4 z-10 bg-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-full">
                    {post.category}
                  </div>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="text-blue-400 text-sm mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {post.description}
                  </p>
                  <div className="mt-auto">
                    <Link 
                      href={`/blogs/${post.id}`}
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

          {/* Newsletter Subscription */}
          <div className="bg-blue-50 rounded-[32px] p-12 text-center max-w-4xl mx-auto">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
