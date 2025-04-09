import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const navigation = {
    platform: [
      { name: 'Enterprise RAG', href: '#' },
      { name: 'AI Agent', href: '#' },
      { name: 'Workflows', href: '#' },
      { name: 'Evaluations', href: '#' },
      { name: 'Synoguard', href: '/syno-guard' },
    ],
    services: [
      { name: 'AI Consulting', href: '#' },
      { name: 'Fine-tuning & Optimization', href: '#' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Quick Start AI', href: '#' },
      { name: 'User Guide', href: '#' },
    ],
    standalone: [
      { name: '', href: '#' },
    ]
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#F5FAFF] to-white border-t border-gray-100 w-full">
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

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1 text-center sm:text-left">
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
              <p>hello@synoptix.ai</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1 text-center sm:text-left">
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

          <div className="col-span-1 text-center sm:text-left">
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

          <div className="col-span-1 text-center sm:text-left">
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
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2025 Synoptix.AI All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                Terms & Conditions
              </Link>
              {navigation.standalone.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 