"use client"
import React from 'react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="w-full py-20 bg-[#F5FAFF]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          {/* Left side - Content */}
          <div className="max-w-xl">
            <h3 className="text-sm font-medium uppercase mb-4">CONTACT US</h3>
            <h2 className="text-[40px] font-bold mb-4">Let's Connect</h2>
            <p className="text-gray-600 mb-12">
              We're here to help. Whether you have questions,<br />
              need guidance, or just want to learn more, reach out<br />
              —we'd love to hear from you
            </p>

            <div className="mb-12">
              <h2 className="text-[32px] font-bold mb-4">Talk to an AI Expert</h2>
              <p className="text-gray-600 mb-6">
                Need advice on the right solution for your business?<br />
                Schedule a call with one of our AI specialists and get<br />
                the answers you need.
              </p>
              <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors">
                Book a demo
              </button>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="flex-1 w-full max-w-xl">
            <div className="bg-white rounded-[32px] p-8 border border-blue-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="subscribe"
                    className="mt-1"
                  />
                  <label htmlFor="subscribe" className="text-sm text-gray-600">
                    Check here to subscribe for updates.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0B0F1C] text-white py-3 rounded-xl font-medium hover:bg-gray-900 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 