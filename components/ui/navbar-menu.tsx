"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  href,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  href?: string;
}) => {
  const pathname = usePathname();

  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      {href ? (
        <Link href={href}>
          <motion.p
            transition={{ duration: 0.3 }}
            className={`cursor-pointer hover:opacity-[0.9] uppercase ${pathname === href ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '14px', lineHeight: '20px', letterSpacing: '0%', whiteSpace: 'nowrap' }}
          >
            {item}
          </motion.p>
        </Link>
      ) : (
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-gray-700 hover:text-blue-600 uppercase"
          style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '14px', lineHeight: '20px', letterSpacing: '0%', whiteSpace: 'nowrap' }}
        >
          {item}
        </motion.p>
      )}
      {active !== null && children && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 z-50">
              <motion.div
                transition={transition}
                layoutId={`active-${item}`}
                className="bg-white  backdrop-blur-sm rounded-xl overflow-hidden border border-black/[0.1]  shadow-xl"
              >
                <motion.div
                  layout
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  isScrolled,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  isScrolled: boolean;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={`relative rounded-full border border-transparent hidden md:flex items-center justify-center space-x-6 px-30 py-4 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
        }`}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black ">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] ">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, href, ...rest }: any) => {
  return (
    <Link
      href={href}
      className="text-sm text-gray-700 hover:text-blue-600 block px-4 py-3 hover:bg-gray-50 transition-colors"
      {...rest}
    >
      {children}
    </Link>
  );
};

export const NavbarMenu = () => {
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Platform dropdown configuration that matches the image layout
  const platformDropdownConfig = {
    overview: {
      title: 'Platform Overview →',
      description: 'Turn ideas into structured workflows using simple, natural language prompts or our visual builder.',
      href: '/platform'
    },
    columns: [
      {
        icon: '/navbar-platform/synoptix-search-icon.svg',
        title: 'Synoptix Search',
        items: [
          { name: 'Universal Knowledge', href: '/platform/search/universal' },
          { name: 'Data Insights', href: '/platform/search/insights' },
          { name: 'Enterprise Data Search', href: '/platform/search/enterprise' },
          { name: 'Fine-Tuning/Industry Specific', href: '/platform/search/industry' }
        ]
      },
      {
        icon: '/navbar-platform/synoptix-agent-icon.svg',
        title: 'Synoptix Agents',
        items: [
          { name: 'Custom Agents', href: '/synoptix-agents/custom' },
          { name: 'Reasoning Agent', href: '/synoptix-agents/reasoning' },
          { name: 'Knowledge Access', href: '/synoptix-agents/knowledge' },
          { name: 'Agent Library', href: '/synoptix-agents/library' }
        ]
      },
      {
        icon: '/navbar-platform/synoptix-library-icon.svg',
        title: 'Synoptix Library',
        items: [
          { name: 'Prompt Library', href: '/platform/library/prompts' },
          { name: 'Agent Library', href: '/platform/library/agents' }
        ]
      }
    ],
    bottom: [
      {
        icon: '/navbar-platform/evaluatiom-icon.svg',
        title: 'Evaluation',
        items: [
          { name: 'Prompt Library', href: '/platform/evaluation/prompts' },
          { name: 'Agent Library', href: '/platform/evaluation/agents' }
        ]
      },
      {
        icon: '/navbar-platform/synoguard-icon.svg',
        title: 'Synoguard',
        items: [
          { name: 'Prompt Library', href: '/platform/synoguard/prompts' },
          { name: 'Agent Library', href: '/platform/synoguard/agents' }
        ]
      },
      {
        icon: '/navbar-platform/synoptix-voice-agents.svg',
        title: 'Synoptix Voice Agents',
        description: 'Coming Soon ...',
        href: '/platform/voice'
      }
    ],
    footer: [
      {
        icon: '/navbar-platform/integration-icon.svg',
        title: 'Integration',
        href: '/',
        description: 'Coming Soon...'
      },
      {
        icon: '/navbar-platform/model-hub.svg',
        title: 'Model Hub',
        href: '/',
        description: 'Coming Soon...'
      },
      {
        icon: '/navbar-platform/apis-icon.svg',
        title: 'APIs',
        href: '/',
        description: 'Coming Soon...'
      }
    ]
  };

  // Keeping the original platformItems for backward compatibility with mobile view
  const platformItems = [
    { 
      name: 'RAG', 
      href: '/platform/enterprise-rag-application', 
      description: 'Enterprise RAG Solutions with powerful context retrieval capabilities.',
      image: '/images/New/Header - RAG.jpg'
    },
    { 
      name: 'Agent', 
      href: '/platform/enterprise-ai-agents', 
      description: 'AI Agent Platform for automating complex tasks and workflows.',
      image: '/images/New/Header - Agent.png'
    },
    { 
      name: 'Workflow', 
      href: '/platform/agentic-workflows', 
      description: 'Automated Workflows that streamline your business processes.',
      image: '/images/New/Header - Workflows.png'
    },
    { 
      name: 'Evaluations', 
      href: '/platform/ai-performace-evaluation', 
      description: 'Performance Metrics to measure and optimize AI system quality.',
      image: '/images/New/Header -  Evaluations.png'
    },
  ];

  const servicesItems = [
    // { name: 'Fine-Tuning', href: '/services/fine-tuning', description: 'Custom Model Fine-Tuning' },
    { name: 'AI Consulting', href: '/services/ai-consulting', description: 'Enterprise AI Solutions' },
  ];

  const resourcesItems = [
    { name: 'Blog', href: '/resources/blogs', description: 'Latest insights and updates' },
    // { name: 'Tutorials', href: '/resources/tutorials', description: 'Step-by-step guides' },
  ];

  return (
    <div className={`fixed w-full left-0 top-0 z-50 transition-all duration-300 flex justify-center items-center ${scrolled ? 'py-2' : 'py-6'}`}>
      {/* Mobile header bar with logo and hamburger - Only visible on mobile */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-3 bg-white/80 backdrop-blur-sm">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-7 h-7 transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/synoptix_logo.png"
              alt="Synoptix Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Synoptix<span className="text-blue-500">.</span>AI
          </span>
        </Link>
        
        {/* Hamburger button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="inline-flex items-center justify-center p-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
        >
          <span className="sr-only">Open main menu</span>
          {!isMobileMenuOpen ? (
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
      

      <div className="max-w-7xl w-full flex justify-center">
      <Menu setActive={setActive} isScrolled={scrolled}>
  <div className="flex items-center pr-30">
    {/* Logo */}
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
        <Image
          src="/synoptix_logo.png"
          alt="Synoptix Logo"
          fill
          className="object-contain"
        />
      </div>
      <span className="text-[28px] font-bold tracking-tight">
        Synoptix<span className="text-blue-500">.</span>AI
      </span>
    </Link>
  </div>

  <div className="ml-10 flex items-center space-x-8">
            <MenuItem setActive={setActive} active={active} item="Home" href="/" />

            <MenuItem setActive={setActive} active={active} item="Platform">
              <div className="w-[1419px] bg-white p-10" style={{ height: '' }}>
                {/* Main Container - Two Column Layout */}
                <div className="flex w-full">
                  {/* Left Column - Platform Overview */}
                  <div className="w-[350px] pr-8 border-r border-gray-200">
                    <Link href={platformDropdownConfig.overview.href} className="block">
                      <h3 
                        className="text-[#5662F6]" 
                        style={{ 
                          fontFamily: 'Syne', 
                          fontWeight: 700, 
                          fontSize: '20px', 
                          lineHeight: '100%', 
                          letterSpacing: '0px' 
                        }}
                      >
                        {platformDropdownConfig.overview.title}
                      </h3>
                      <p 
                        className="text-gray-600 mt-2 mb-4" 
                        style={{ 
                          fontFamily: 'Poppins', 
                          fontWeight: 400, 
                          fontSize: '12px', 
                          lineHeight: '20px', 
                          letterSpacing: '0%' 
                        }}
                      >
                        {platformDropdownConfig.overview.description}
                      </p>
                      
                      <div className="rounded-lg overflow-hidden">
                        <Image 
                          src="/platform/image.png" 
                          alt="Platform Overview" 
                          width={300} 
                          height={200}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </Link>
                  </div>
                  
                  {/* Right Column - Menu Grid */}
                  <div className="flex-1 pl-8">
                    {/* Top Row - Main Sections */}
                    <div className="grid grid-cols-3 mb-8">
                      {platformDropdownConfig.columns.map((column, idx) => (
                        <div key={`col-${idx}`}>
                          <div className="flex items-center mb-3">
                            <Image src={column.icon} width={24} height={24} alt={`${column.title} icon`} className="mr-3" />
                            <h3 
                              className="text-[#5662F6]" 
                              style={{ 
                                fontFamily: 'Syne', 
                                fontWeight: 700, 
                                fontSize: '20px', 
                                lineHeight: '100%', 
                                letterSpacing: '0px' 
                              }}
                            >
                              {column.title}
                            </h3>
                          </div>
                          <ul className="space-y-2 ml-9">
                            {column.items.map((item, itemIdx) => (
                              <li key={`item-${idx}-${itemIdx}`}>
                                <Link 
                                  href={item.href} 
                                  className="text-gray-600 hover:text-blue-600 block" 
                                  style={{ 
                                    fontFamily: 'Poppins', 
                                    fontWeight: 400, 
                                    fontSize: '12px', 
                                    lineHeight: '20px', 
                                    letterSpacing: '0%' 
                                  }}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    
                    {/* Middle Row */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      {platformDropdownConfig.bottom.map((section, idx) => (
                        <div key={`bottom-${idx}`}>
                          <div className="flex flex-col mb-3">
                            <div className="flex items-center">
                              <Image src={section.icon} width={24} height={24} alt={`${section.title} icon`} className="mr-3" />
                              <h3 
                                className="text-[#5662F6]" 
                                style={{ 
                                  fontFamily: 'Syne', 
                                  fontWeight: 700, 
                                  fontSize: '20px', 
                                  lineHeight: '100%', 
                                  letterSpacing: '0px' 
                                }}
                              >
                                {section.title}
                              </h3>
                            </div>
                            {section.description && (
                              <div className="ml-9 mt-1">
                                <span 
                                  className="text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md" 
                                  style={{ 
                                    fontFamily: 'Poppins', 
                                    fontWeight: 400, 
                                    fontSize: '12px', 
                                    lineHeight: '20px' 
                                  }}
                                >
                                  {section.description}
                                </span>
                              </div>
                            )}
                          </div>
                          {section.items && (
                            <ul className="space-y-2 ml-9">
                              {section.items.map((item, itemIdx) => (
                                <li key={`bottom-item-${idx}-${itemIdx}`}>
                                  <Link 
                                    href={item.href} 
                                    className="text-gray-600 hover:text-blue-600 block" 
                                    style={{ 
                                      fontFamily: 'Poppins', 
                                      fontWeight: 400, 
                                      fontSize: '12px', 
                                      lineHeight: '20px', 
                                      letterSpacing: '0%' 
                                    }}
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
                    
                    {/* Bottom Row - Footer */}
                    <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                      {platformDropdownConfig.footer.map((item, idx) => (
                        <div key={`footer-${idx}`}>
                          <Link 
                            href={item.href} 
                            className="flex flex-col text-gray-600 hover:text-blue-600"
                          >
                            <div className="flex items-center">
                              <Image src={item.icon} width={24} height={24} alt={`${item.title} icon`} className="mr-3" />
                              <span style={{ 
                                fontFamily: 'Syne', 
                                fontWeight: 700, 
                                fontSize: '20px', 
                                lineHeight: '100%', 
                                letterSpacing: '0px' 
                              }}>
                                {item.title}
                              </span>
                            </div>
                            <div className="ml-9 mt-1">
                              <span 
                                className="text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md" 
                                style={{ 
                                  fontFamily: 'Poppins', 
                                  fontWeight: 400, 
                                  fontSize: '12px', 
                                  lineHeight: '20px' 
                                }}
                              >
                                Coming Soon...
                              </span>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </MenuItem>

            {/* <MenuItem setActive={setActive} active={active} item="SynoGuard" href="/ai-security-tool/syno-guard" /> */}

            <MenuItem setActive={setActive} active={active} item="Services" href="/services/ai-consulting" />

            <MenuItem setActive={setActive} active={active} item="Resources">
              <div className="grid gap-4 w-64">
                {resourcesItems.map((item) => (
                  <div key={item.name} className="w-full">
                    <Link 
                      href={item.href}
                      className="group flex flex-col py-2 px-2 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500 group-hover:text-blue-500">
                        {item.description}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </MenuItem>
            <div className="flex space-x-4">
              <MenuItem setActive={setActive} active={active} item="About Us" href="/about-us" />
              <MenuItem setActive={setActive} active={active} item="Contact Us" href="/#contact" />
            </div>
          </div>
        </Menu>

        {/* Mobile menu button removed from here - now in the header */}

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 top-0 z-40 bg-white/95 backdrop-blur-sm overflow-y-auto"
            >
              <div className="flex flex-col pt-16 pb-8 px-6 space-y-4">
                <div className="h-12"></div> {/* Spacer for fixed header */}

                <div className="animate-fadeIn" style={{ animationDelay: '150ms' }}>
                  <Link 
                    href="/" 
                    className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${pathname === '/' ? 'text-blue-600 bg-blue-50/50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </div>

                <div className="space-y-2 animate-fadeIn" style={{ animationDelay: '200ms' }}>
                  <div className="text-lg font-medium py-2 px-4 text-gray-700">
                    Platform
                  </div>
                  <div className="pl-4 space-y-2">
                    {platformItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center py-2 px-4 rounded-lg transition-colors ${pathname === item.href ? 'text-blue-600 bg-blue-50/50' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* <div className="animate-fadeIn" style={{ animationDelay: '250ms' }}>
                  <Link 
                    href="/ai-security-tool/syno-guard" 
                    className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${pathname === '/syno-guard' ? 'text-blue-600 bg-blue-50/50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    SynoGuard
                  </Link>
                </div> */}

                <div className="animate-fadeIn" style={{ animationDelay: '300ms' }}>
                  <Link 
                    href="/services/ai-consulting" 
                    className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${pathname === '/services/ai-consulting' ? 'text-blue-600 bg-blue-50/50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                </div>

                <div className="space-y-2 animate-fadeIn" style={{ animationDelay: '350ms' }}>
                  <div className="text-lg font-medium py-2 px-4 text-gray-700">
                    Resources
                  </div>
                  <div className="pl-4 space-y-2">
                    {resourcesItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center py-2 px-4 rounded-lg transition-colors ${pathname === item.href ? 'text-blue-600 bg-blue-50/50' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="animate-fadeIn" style={{ animationDelay: '400ms' }}>
                  <Link 
                    href="/about-us" 
                    className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${pathname === '/about-us' ? 'text-blue-600 bg-blue-50/50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </div>

                <div className="animate-fadeIn" style={{ animationDelay: '450ms' }}>
                  <Link 
                    href="/#contact" 
                    className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${pathname === '/#contact' ? 'text-blue-600 bg-blue-50/50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>


              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
