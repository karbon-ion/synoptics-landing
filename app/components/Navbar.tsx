'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Platform', href: '/platform' },
    { name: 'Synoptix Guard', href: '/guard' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
    { name: 'Company', href: '/company' },
    { name: 'Contact us', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className={`absolute inset-0 transition-all duration-300 ${scrolled
          ? 'bg-white/80 shadow-lg backdrop-blur-md'
          : 'bg-white/60 backdrop-blur-sm bg-gradient-to-r from-blue-50/40 to-white/60'
        }`} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-16' : 'h-[72px]'}`}>
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-7 h-7 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/synoptix_logo.png"
                  alt=""
                  fill
                  className="object-contain"
                />

              </div>
              <span className="text-[28px] font-bold tracking-tight">
                Synoptix<span className="text-blue-500">.</span>ai
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[15px] text-gray-600 hover:text-blue-600 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/demo"
              className="bg-black text-white px-6 py-2.5 rounded-[14px] text-[15px] hover:bg-blue-600 transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              Book a demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="relative md:hidden py-4 bg-white/90 backdrop-blur-md rounded-b-2xl shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-4 px-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 text-[15px] px-2 py-2 transition-colors duration-300 hover:bg-blue-50/50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-2 pt-2">
                <Link
                  href="/demo"
                  className="bg-black text-white px-5 py-2.5 rounded-[14px] text-[15px] inline-block hover:bg-blue-600 transition-colors duration-300 shadow-sm hover:shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  Book a demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 