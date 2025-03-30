'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
    <nav className={`fixed w-full left-1/2 -translate-x-1/2 border border-transparent z-50 transition-all duration-300 overflow-hidden ${scrolled ? 'my-2 max-w-7xl px-6 rounded-3xl bg-gradient-to-r from-blue-300 via-blue-50/30 to-purple-300' : 'py-4'}`}>
      <div className={`absolute inset-0 transition-all duration-300 ${scrolled
        ? 'bg-white/60 backdrop-blur-sm'
        : 'bg-transparent'
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
                Synoptix<span className="text-blue-500">.</span>AI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[15px] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] ${
                  pathname === item.href 
                    ? 'text-blue-600 after:w-full after:bg-blue-500'
                    : 'text-gray-600 hover:text-blue-600 after:w-0 after:bg-blue-500 hover:after:w-full'
                } after:transition-all after:duration-300`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/demo"
              className={`px-6 py-2.5 rounded-[14px] text-[15px] transition-colors duration-300 shadow-sm hover:shadow-md ${
                pathname === '/demo'
                  ? 'bg-blue-600 text-white'
                  : 'bg-black text-white hover:bg-blue-600'
              }`}
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
                  className={`text-[15px] px-2 py-2 transition-colors duration-300 rounded-lg ${
                    pathname === item.href
                      ? 'text-blue-600 bg-blue-50/50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-2 pt-2">
                <Link
                  href="/demo"
                  className={`px-5 py-2.5 rounded-[14px] text-[15px] inline-block transition-colors duration-300 shadow-sm hover:shadow-md ${
                    pathname === '/demo'
                      ? 'bg-blue-600 text-white'
                      : 'bg-black text-white hover:bg-blue-600'
                  }`}
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