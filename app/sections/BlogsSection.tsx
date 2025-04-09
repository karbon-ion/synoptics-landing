'use client';

import Image from 'next/image';
import Link from 'next/link';

const newsItems = [
  {
    id: 1,
    title: 'AI-Driven Workflow Automation',
    description: 'Discover how our AI solutions are helping companies reduce manual processes by 70% and increase operational efficiency across departments.',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1000',
    date: 'April 2, 2025',
    category: 'Technology'
  },
  {
    id: 2,
    title: 'Machine Learning for Supply Chain',
    description: 'Learn how predictive analytics and ML models are transforming inventory management and logistics for enterprise clients worldwide.',
    image: 'https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1000',
    date: 'March 28, 2025',
    category: 'Industry'
  },
  {
    id: 3,
    title: 'The Future of LLM Applications',
    description: 'Explore how large language models are creating new opportunities for businesses to enhance customer service and operational intelligence.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000',
    date: 'March 15, 2025',
    category: 'Research'
  }
];

const BlogSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-500 text-sm font-medium tracking-wider uppercase">
            LEARN MORE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto">
                        Checkout out latest <br/> blogs and insights
          </h2>
          
          <div className="h-1 w-16 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {newsItems.map((item) => (
            <div 
              key={item.id}
              className="group bg-white rounded-[32px] border border-[rgba(66,153,225,0.2)] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute top-4 right-4 z-10 bg-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-full">
                  {item.category}
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="text-blue-400 text-sm mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="mt-auto">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-blue-500 font-medium group-hover:text-blue-700 transition-colors duration-300"
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View Blogs
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
