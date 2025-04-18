"use client"
import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    email: '',
    phone: '',
    subscribe: false
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    errorMessage: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: 'Please fill out all required fields.'
      });
      return;
    }
    
    setFormStatus({
      ...formStatus,
      isSubmitting: true,
      isError: false,
      errorMessage: ''
    });

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `${formData.message}\n\nPhone: ${formData.phone || 'Not provided'}\nSubscribe: ${formData.subscribe ? 'Yes' : 'No'}`
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Success
      setFormStatus({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        errorMessage: ''
      });
      
      // Reset form
      setFormData({
        message: '',
        name: '',
        email: '',
        phone: '',
        subscribe: false
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, isSuccess: false }));
      }, 5000);
      
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: error instanceof Error ? error.message : 'An unknown error occurred'
      });
    }
  };

  return (
    <section className="w-full py-20 bg-[#F5FAFF]" id="contact">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-16">
          {/* Left side - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-sm font-medium uppercase mb-4">CONTACT US</h2>
            <h3 className="text-[40px] font-bold mb-4">Book a Demo</h3>
            <p className="text-gray-600 mb-12">
            Have questions or want to see how our Enterprise AI Platform works in action? Let’s connect.
            </p>

            <div className="mb-12">
              <h3 className="text-[32px] font-bold mb-4">Talk to an AI Expert</h3>
              <p className="text-gray-600 mb-6">
              Need tailored advice? Speak with a Synoptix AI specialist to find the right AI Platform for Enterprise success.
              </p>
              {/* <button className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg">
              Schedule a Call
              </button> */}
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="w-full lg:flex-1 max-w-xl mx-auto lg:mx-0">
            <div className="bg-white rounded-[32px] p-8 border border-blue-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                {formStatus.isSuccess && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-xl">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
                
                {formStatus.isError && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-xl">
                    {formStatus.errorMessage}
                  </div>
                )}
                
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="How can we help you?*"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name*"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email*"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-start gap-2">
                  <input
                    name="subscribe"
                    type="checkbox"
                    id="subscribe"
                    className="mt-1"
                    checked={formData.subscribe}
                    onChange={handleChange}
                  />
                  <label htmlFor="subscribe" className="text-sm text-gray-600">
                    Check here to subscribe for updates.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0B0F1C] text-white py-3 rounded-xl font-medium hover:bg-gray-900 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? 'Sending...' : 'Submit'}
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