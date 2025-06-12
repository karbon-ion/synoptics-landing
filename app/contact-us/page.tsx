"use client"

import Image from "next/image"
import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    title: '',
    comments: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    errorMessage: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.email || !formData.firstName || !formData.lastName) {
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
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: `Comments: ${formData.comments || 'Not provided'}\n\nCompany: ${formData.company || 'Not provided'}\nTitle: ${formData.title || 'Not provided'}`
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
        email: '',
        firstName: '',
        lastName: '',
        company: '',
        title: '',
        comments: ''
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
    <div className="container mx-auto mt-16 sm:mt-24 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden bg-white shadow-lg md:min-h-[650px] rounded-[12px]">
        {/* Left side - SVG Background */}
        <div className="relative h-[400px] sm:h-[450px] md:h-auto">
          <Image
            src="/contact-us/contact-us.svg"
            alt="Contact us background"
            fill
            className="object-cover"
            priority
          />
          
          {/* Content overlay on the image */}
          <div className="absolute inset-0 flex flex-col p-6 sm:p-8 md:p-12">
            <div className="mb-6 md:mb-8">
              <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 5vw, 36px)", lineHeight: 1.2, letterSpacing: "0%" }}>
              <h2 className="tracking-tight">
                Built for <span className="text-[#6366f1]">Trust.</span> <br/> Designed for <span className="text-[#6366f1]">Trust.</span>
              </h2>
              </span>
            </div>

            <div className="space-y-6 md:space-y-5">
              <div className="flex items-start gap-3">
                <Image 
                  src="/test-page/synoptix/star.png" 
                  alt="Star bullet point" 
                  width={20} 
                  height={20} 
                  className="mt-1 flex-shrink-0" 
                />
                <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "clamp(13px, 2vw, 14px)", lineHeight: 1.4, letterSpacing: "0.4%", color: "#000000" }}>
                <p>Get real-time answers grounded in your enterprise data—securely and instantly.</p>
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Image 
                  src="/test-page/synoptix/star.png" 
                  alt="Star bullet point" 
                  width={20} 
                  height={20} 
                  className="mt-1 flex-shrink-0" 
                />
                <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "clamp(13px, 2vw, 14px)", lineHeight: 1.4, letterSpacing: "0.4%", color: "#000000" }}>
                <p>Your data is protected by the most comprehensive enterprise compliance and security controls. </p>
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Image 
                  src="/test-page/synoptix/star.png" 
                  alt="Star bullet point" 
                  width={20} 
                  height={20} 
                  className="mt-1 flex-shrink-0" 
                />
                <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "clamp(13px, 2vw, 14px)", lineHeight: 1.4, letterSpacing: "0.4%", color: "#000000" }}>
                <p>Your data is not used to train foundation models.  </p>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="p-6 sm:p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" style={{ fontFamily: 'Poppins, sans-serif', color: '#666666', fontWeight: 400, fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '100%', letterSpacing: '0%' }}>
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
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Work email
              </label>
              <input 
                id="email" 
                type="email" 
                placeholder="" 
                className="w-full px-3 py-2 border border-[#66666659] rounded-[12px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                  First name
                </label>
                <input 
                  id="firstName" 
                  type="text" 
                  placeholder="" 
                  className="w-full px-3 py-2 border border-[#66666659] rounded-[12px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                  Last name
                </label>
                <input 
                  id="lastName" 
                  type="text" 
                  placeholder="" 
                  className="w-full px-3 py-2 border border-[#66666659] rounded-[12px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-1">
                Company
              </label>
              <input 
                id="company" 
                type="text" 
                placeholder="" 
                className="w-full px-3 py-2 border border-[#66666659] rounded-[12px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">
                Title
              </label>
              <input 
                id="title" 
                type="text" 
                placeholder="" 
                className="w-full px-3 py-2 border border-[#66666659] rounded-[12px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="comments" className="block text-sm font-medium mb-1">
                Comments
              </label>
              <textarea 
                id="comments" 
                placeholder="" 
                rows={3} 
                className="w-full px-3 py-2 border border-[#66666659] rounded-[12px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 min-h-[75px]" 
                value={formData.comments}
                onChange={handleChange}
              />
            </div>

            <div className="pt-4">
            <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#5662F6] text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "100%",
                }}
                disabled={formStatus.isSubmitting}
              >
                {formStatus.isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
