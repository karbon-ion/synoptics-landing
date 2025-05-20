import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const platformLinks = [
    { name: 'Enterprise RAG', href: '/platform/enterprise-rag-application' },
    { name: 'AI Agent', href: '/platform/enterprise-ai-agents' },
    { name: 'Workflows', href: '/platform/agentic-workflows' },
    { name: 'Evaluations', href: '/platform/ai-performace-evaluation' },
    { name: 'SynoGuard', href: '/ai-security-tool/syno-guard' },
  ];

  const solutionsLinks = [
    { name: 'Sales', href: '/solutions/sales' },
    { name: 'Marketing', href: '/solutions/marketing' },
    { name: 'Finance', href: '/solutions/finance' },
    { name: 'HR', href: '/solutions/hr' },
    { name: 'IT', href: '/solutions/it' },
  ];

  const servicesLinks = [
    { name: 'AI Consulting', href: '/services/ai-consulting' },
    { name: 'Fine-tuning & Optimization', href: '/services/fine-tuning' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61574933377526', icon: '/facebook-icon.svg' },
    { name: 'Twitter', href: 'https://x.com/Synoptix_AI', icon: '/twitter-icon.svg' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/synoptix-ai', icon: '/linkedin-icon.svg' },
    { name: 'YouTube', href: 'https://www.youtube.com', icon: '/youtube-icon.svg' },
  ];

  return (
    <footer className="bg-[#323e50] text-white py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          {/* Logo and Enterprise RAG */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Image
                src="/synoptix_logo.png"
                alt="Synoptix AI"
                width={36}
                height={36}
                className="mr-2"
              />
              <span className="text-xl font-bold">Synoptix.AI</span>
            </div>
            <p className="text-sm text-gray-300 mb-2">
hello@synoptix.ai

</p>
          </div>

          {/* Platform Links */}
          <div className="mb-8 md:mb-0">
            <h3 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '0%',
              textTransform: 'uppercase',
              color: '#626DFF'
            }} className="mb-4">PLATFORM</h3>
            <ul className="space-y-2">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="mb-8 md:mb-0">
          <h3 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '0%',
              textTransform: 'uppercase',
              color: '#626DFF' }} className="mb-4">SOLUTIONS</h3>
            <ul className="space-y-2">
              {solutionsLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="mb-8 md:mb-0">
          <h3 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '0%',
              textTransform: 'uppercase',
              color: '#626DFF'
            }} className="mb-4">SERVICES</h3>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
          <h3 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '0%',
              textTransform: 'uppercase',
              color: '#626DFF'
            }} className="mb-4">SOCIALS</h3>
            <div className="flex space-x-3">
              <Link 
                href="https://www.facebook.com/profile.php?id=61574933377526" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-white rounded-full flex items-center justify-center w-10 h-10 hover:opacity-80 transition-opacity"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.5 2C6.977 2 2.5 6.477 2.5 12C2.5 16.991 6.157 21.128 10.938 21.878V14.891H8.398V12H10.938V9.797C10.938 7.291 12.43 5.907 14.715 5.907C15.809 5.907 16.953 6.102 16.953 6.102V8.562H15.693C14.45 8.562 14.063 9.333 14.063 10.124V12H16.836L16.393 14.89H14.063V21.878C18.843 21.128 22.5 16.991 22.5 12C22.5 6.477 18.023 2 12.5 2Z" />
                </svg>
              </Link>
              
              <Link 
                href="https://x.com/Synoptix_AI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-white rounded-full flex items-center justify-center w-10 h-10 hover:opacity-80 transition-opacity"
              >
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              
              <Link 
                href="https://www.linkedin.com/company/synoptix-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-white rounded-full flex items-center justify-center w-10 h-10 hover:opacity-80 transition-opacity"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              
              <Link 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-white rounded-full flex items-center justify-center w-10 h-10 hover:opacity-80 transition-opacity"
              >
                <span className="sr-only">YouTube</span>
                <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#c3bbbb] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white mb-4 md:mb-0" style={{fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center', color: '#ffffff'}}>
            2025 Synoptix.AI All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-sm text-white hover:text-white transition-colors"style={{fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center', color: '#ffffff'}}>
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-white hover:text-white transition-colors"style={{fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center', color: '#ffffff'}}>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;