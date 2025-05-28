'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [platformDropdownOpen, setPlatformDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
  const [servicesDropdownPosition, setServicesDropdownPosition] = useState({ x: 0, y: 0 });
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
          servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setPlatformDropdownOpen(false);
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (platformDropdownOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        x: rect.left + 5 + (rect.width / 2),
        y: rect.bottom + 10
      });
    }
  }, [platformDropdownOpen, scrolled]);

  useEffect(() => {
    if (servicesDropdownOpen && servicesButtonRef.current) {
      const rect = servicesButtonRef.current.getBoundingClientRect();
      setServicesDropdownPosition({
        x: rect.left + 5 + (rect.width / 2),
        y: rect.bottom + 10
      });
    }
  }, [servicesDropdownOpen, scrolled]);

  const platformDropdownConfig = {
    overview: {
      title: 'Platform Overview →',
      description: 'Turn ideas into structured workflows using simple, natural language prompts or our visual builder.',
      href: '/platform'
    },
    columns: [
      {
        icon: '🔍',
        title: 'Synoptix Search',
        items: [
          { name: 'Universal Knowledge', href: '/platform/search/universal' },
          { name: 'Data Insights', href: '/platform/search/insights' },
          { name: 'Enterprise Data Search', href: '/platform/search/enterprise' },
          { name: 'Fine-Tuning/Industry Specific', href: '/platform/search/industry' }
        ]
      },
      {
        icon: '👤',
        title: 'Synoptix Agents',
        items: [
          { name: 'Custom Agents', href: '/synoptix-agents/custom' },
          { name: 'Reasoning Agent', href: '/synoptix-agents/reasoning' },
          { name: 'Knowledge Access', href: '/synoptix-agents/knowledge' },
          { name: 'Agent Library', href: '/synoptix-agents/library' }
        ]
      },
      {
        icon: '📚',
        title: 'Synoptix Library',
        items: [
          { name: 'Prompt Library', href: '/platform/library/prompts' },
          { name: 'Agent Library', href: '/platform/library/agents' }
        ]
      }
    ],
    bottom: [
      {
        icon: '📊',
        title: 'Evaluation',
        items: [
          { name: 'Prompt Library', href: '/platform/evaluation/prompts' },
          { name: 'Agent Library', href: '/platform/evaluation/agents' }
        ]
      },
      {
        icon: '🛡️',
        title: 'Synoguard',
        items: [
          { name: 'Prompt Library', href: '/platform/synoguard/prompts' },
          { name: 'Agent Library', href: '/platform/synoguard/agents' }
        ]
      },
      {
        icon: '🔊',
        title: 'Synoptix Voice Agent',
        description: '(Coming Soon)',
        href: '/platform/voice'
      }
    ],
    footer: [
      {
        icon: '🔄',
        title: 'Integration',
        href: '/platform/integration'
      },
      {
        icon: '📦',
        title: 'Model Hub',
        href: '/platform/model-hub'
      },
      {
        icon: '🔌',
        title: 'APIs',
        href: '/platform/apis'
      }
    ]
  };

  const platformDropdownItems = [
    { name: 'RAG', href: '/rag-application', description: 'Enterprise RAG Solutions' },
    { name: 'Agent', href: '/enterprise-ai-agent', description: 'AI Agent Platform' },
    { name: 'Workflow', href: '/workflow', description: 'Automated Workflows' },
    { name: 'Evaluations', href: '/enterprise-rag', description: 'Performance Metrics' },
  ];

  const servicesDropdownItems = [
    { name: 'Fine-Tuning', href: '/fine-tuning', description: 'Custom Model Fine-Tuning' },
    { name: 'AI Consulting', href: '/ai-consulting', description: 'Enterprise AI Solutions' },
  ];

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Platform', href: '#', hasDropdown: true, dropdownState: platformDropdownOpen, setDropdownState: setPlatformDropdownOpen, buttonRef: buttonRef, items: platformDropdownItems },
    { name: 'SynoGuard', href: '/syno-guard' },
    { name: 'Services', href: '#', hasDropdown: true, dropdownState: servicesDropdownOpen, setDropdownState: setServicesDropdownOpen, buttonRef: servicesButtonRef, items: servicesDropdownItems },
    { name: 'Resources', href: '/resources' },
    // { name: 'Company', href: '/company' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  const handleDropdownToggle = (setDropdownState: React.Dispatch<React.SetStateAction<boolean>>) => {
    // Close any open dropdowns
    if (platformDropdownOpen) setPlatformDropdownOpen(false);
    if (servicesDropdownOpen) setServicesDropdownOpen(false);
    // Toggle the requested dropdown
    setDropdownState(prev => !prev);
  };

  const handleDropdownItemClick = () => {
    setPlatformDropdownOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <>
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
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <button
                      ref={item.buttonRef}
                      onClick={() => handleDropdownToggle(item.setDropdownState)}
                      onMouseEnter={() => item.setDropdownState(true)}
                      className={`text-sm font-medium transition-colors hover:text-blue-600 ${pathname.startsWith('/enterprise') || pathname === '/workflow' || pathname.startsWith(item.items[0].href) ? 'text-blue-600' : 'text-gray-700'}`}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-sm font-medium transition-colors hover:text-blue-600 ${pathname === item.href ? 'text-blue-600' : 'text-gray-700'}`}
                      onClick={(e) => {
                        // Special handling for contact link
                        if (item.name === 'Contact us') {
                          e.preventDefault();
                          // If already on homepage, just scroll to contact section
                          if (pathname === '/') {
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                          } else {
                            // Otherwise navigate to homepage with contact hash
                            window.location.href = '/#contact';
                          }
                        }
                      }}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/demo"
                className={`px-6 py-2.5 rounded-[14px] text-[15px] transition-colors duration-300 shadow-sm hover:shadow-md ${pathname === '/demo'
                    ? 'bg-blue-600 text-white'
                    : 'bg-black text-white hover:bg-blue-600'
                  }`}
              >
                Log in 
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
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <div
                          className={`text-[15px] px-2 py-2 font-medium ${pathname.startsWith('/enterprise') || pathname === '/workflow' || pathname.includes(item.items[0].href) ? 'text-blue-600' : 'text-gray-700'}`}
                        >
                          {item.name}
                        </div>
                        <div className="pl-4 space-y-2">
                          {item.items.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className={`text-[14px] px-2 py-1.5 transition-colors duration-300 rounded-lg block ${pathname === dropdownItem.href
                                  ? 'text-blue-600 bg-blue-50/50'
                                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
                                }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`text-[15px] px-2 py-2 transition-colors duration-300 rounded-lg block ${pathname === item.href
                            ? 'text-blue-600 bg-blue-50/50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
                          }`}
                        onClick={() => setIsOpen(false)}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-2 pt-2">
                  <Link
                    href="/demo"
                    className={`px-5 py-2.5 rounded-[14px] text-[15px] inline-block transition-colors duration-300 shadow-sm hover:shadow-md ${pathname === '/demo'
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
      
      {platformDropdownOpen && (
        <div
          ref={dropdownRef}
          className="fixed w-[800px] rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-[60] overflow-hidden"
          style={{
            top: `${dropdownPosition.y}px`,
            left: `${dropdownPosition.x}px`,
            transform: 'translateX(-50%)'
          }}
          onMouseLeave={() => setPlatformDropdownOpen(false)}
        >
          {/* Platform Overview Section */}
          <div className="p-4 border-b">
            <Link href={platformDropdownConfig.overview.href} className="flex" onClick={handleDropdownItemClick}>
              <div className="w-1/3">
                <h3 className="text-lg font-semibold text-blue-600">{platformDropdownConfig.overview.title}</h3>
                <p className="text-xs text-gray-500 mt-1 pr-4">{platformDropdownConfig.overview.description}</p>
              </div>
              <div className="w-2/3">
                <div className="bg-gray-100 rounded-lg w-full h-28 flex items-center justify-center">
                  {/* Placeholder for the image */}
                  <Image 
                    src="/platform-overview-placeholder.png" 
                    alt="Platform Overview" 
                    width={240} 
                    height={100}
                    className="object-cover rounded"
                    onError={(e) => {
                      e.currentTarget.src = 'https://dummyimage.com/240x100/e6e7ff/6B7BF7.png&text=Platform+Overview';
                    }}
                  />
                </div>
              </div>
            </Link>
          </div>
          
          {/* Main Columns */}
          <div className="flex p-4 border-b">
            {platformDropdownConfig.columns.map((column, idx) => (
              <div key={`col-${idx}`} className="flex-1 px-3">
                <div className="flex items-center mb-2">
                  <span className="mr-2">{column.icon}</span>
                  <h3 className="text-sm font-semibold text-blue-600">{column.title}</h3>
                </div>
                <ul className="space-y-1">
                  {column.items.map((item, itemIdx) => (
                    <li key={`item-${idx}-${itemIdx}`}>
                      <Link 
                        href={item.href} 
                        className="text-xs text-gray-700 hover:text-blue-600 block py-1"
                        onClick={handleDropdownItemClick}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Bottom Row */}
          <div className="flex p-4 border-b">
            {platformDropdownConfig.bottom.map((section, idx) => (
              <div key={`bottom-${idx}`} className="flex-1 px-3">
                <div className="flex items-center mb-2">
                  <span className="mr-2">{section.icon}</span>
                  <h3 className="text-sm font-semibold text-blue-600">{section.title}</h3>
                  {section.description && (
                    <span className="text-xs text-gray-500 ml-1">{section.description}</span>
                  )}
                </div>
                {section.items && (
                  <ul className="space-y-1">
                    {section.items.map((item, itemIdx) => (
                      <li key={`bottom-item-${idx}-${itemIdx}`}>
                        <Link 
                          href={item.href} 
                          className="text-xs text-gray-700 hover:text-blue-600 block py-1"
                          onClick={handleDropdownItemClick}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          
          {/* Footer */}
          <div className="flex p-4 bg-gray-50">
            {platformDropdownConfig.footer.map((item, idx) => (
              <div key={`footer-${idx}`} className="flex-1 px-3">
                <Link 
                  href={item.href} 
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
                  onClick={handleDropdownItemClick}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {servicesDropdownOpen && (
        <div
          ref={servicesDropdownRef}
          className="fixed w-64 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-[60] overflow-hidden"
          style={{
            top: `${servicesDropdownPosition.y}px`,
            left: `${servicesDropdownPosition.x}px`,
            transform: 'translateX(-50%)'
          }}
          onMouseLeave={() => setServicesDropdownOpen(false)}
        >
          <div className="py-1">
            {servicesDropdownItems.map((dropdownItem) => (
              <Link
                key={dropdownItem.name}
                href={dropdownItem.href}
                className="group flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                onClick={handleDropdownItemClick}
              >
                <div className="w-full">
                  <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                    {dropdownItem.name}
                  </p>
                  <p className="text-xs text-gray-500 group-hover:text-blue-500">
                    {dropdownItem.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar; 