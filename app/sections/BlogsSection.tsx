import React from 'react';
import Image from 'next/image';

const BlogsSection = () => {
  const blogs = [
    {
      title: 'Build AI Agent',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      image: '/images/blog1.jpg'
    },
    {
      title: 'Build AI Agent',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      image: '/images/blog2.jpg'
    },
    {
      title: 'Build AI Agent',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      image: '/images/blog3.jpg'
    }
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-blue-500">OUR BLOGS</h3>
          <h2 className="text-4xl font-bold mb-4">Check out our Latest<br />Blogs & Insights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="rounded-3xl p-6 bg-gradient-to-b from-blue-50 to-white border-2 border-blue-100 flex flex-col overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">{blog.title}</h3>
              <p className="text-gray-600 text-sm">{blog.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">
            View All Blogs
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection; 