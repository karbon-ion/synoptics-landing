import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const navigation = {
    platform: [
      { name: 'RAG 3.0', href: '#' },
      { name: 'Enterprise AI Agent', href: '#' },
      { name: 'Workflows', href: '#' },
      { name: 'Evaluation', href: '#' },
    ],
    services: [
      { name: 'Fine-tuning & Optimization', href: '#' },
      { name: 'AI Consulting', href: '#' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Quick Start Agents', href: '#' },
      { name: 'User Manual', href: '#' },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#F5FAFF] to-white border-t border-gray-100 w-max-full px-8">
      {/* Background Blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src="/footerblob.png"
          alt=""
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      <div className="container relative mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Contact Info */}
          <div className="md:col-span-3">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <Image
                  src="/synoptix_logo.png"
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <span className="text-[28px] font-bold tracking-tight">
                  Synoptix<span className="text-blue-500">.</span>AI
                </span>
              </div>
            </Link>
            <div className="space-y-2 text-sm text-gray-600">
              <p>(123) 456-7890</p>
              <p>hello@synoptix.ai</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-blue-500 uppercase mb-4">PLATFORM</h3>
            <ul className="space-y-3">
              {navigation.platform.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-gray-900">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-blue-500 uppercase mb-4">SERVICES</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-gray-900">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-blue-500 uppercase mb-4">RESOURCES</h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-gray-900">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2025 Synoptix.ai All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 