import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const platformLinks = [
    { name: 'Platform Overview', href: '/platform' },
    { name: 'Synoptix Search', href: '/platform/synoptix-ai-search' },
    { name: 'Synoptix Agents', href: '/platform/synoptix-ai-agents' },
    { name: 'Evaluations', href: '/platform/ai-performace-evaluation' },
    { name: 'SynoGuard', href: '/platform/ai-security-tool/syno-guard' },
    // { name: 'Synoptix Library', href: '/platform/synoptix-library' },
    { name: 'Integrations', href: '/platform/integrations' },
  ];

  const solutionsLinks = [
    { name: 'Blog', href: '/resources/blogs' },
    { name: 'Glossary', href: '/resources/glossary' },
    { name: 'Agent Library', href: '/platform/synoptix-library/agent-library' },
    { name: 'Prompt Library', href: '/platform/synoptix-library/prompt-library' },
    { name: 'Model Directory', href: '/platform/model-directory' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Events', href: '/events' },
  ];

  const servicesLinks = [
    { name: 'AI Consulting', href: '/services/ai-consulting' },
    { name: 'Fine-tuning & Optimization', href: '/services/fine-tuning' },
    { name: 'Proof of Concepts', href: '/services/proof-of-concepts' },
    { name: 'Training and Education', href: '/services/training' },
  ];
  
  const companyLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact-us' },
    // { name: 'Integration', href: '/platform/integration' },
    { name: 'Model Directory', href: '/platform/model-directory' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61574933377526', icon: '/facebook-icon.svg' },
    { name: 'Twitter', href: 'https://x.com/Synoptix_AI', icon: '/twitter-icon.svg' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/synoptix-ai', icon: '/linkedin-icon.svg' },
    // { name: 'YouTube', href: 'https://www.youtube.com', icon: '/youtube-icon.svg' },
  ];

  return (
    <footer className="bg-[#323e50] text-white py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          {/* Logo and Enterprise RAG */}
          <div className="mb-8 md:mb-0">
            <div className="ml-4 flex items-center ">
              <Image
                src="/synoptix_logo.svg"
                alt="Synoptix AI"
                width={36}
                height={36}
                className="mr-2"
              />
              <span className="text-xl font-bold">Synoptix.AI</span>
            </div>
            
            <div className="bg-[#323e50] p-4 rounded-lg">
              <div className="flex items-center">
                <div>
                  <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '12px', lineHeight: '37px', letterSpacing: '0%' }}>iawards ACT finalists</div>
                  <Image
                    src="/footer/finalist.png"
                    alt="iawards ACT finalists"
                    width={100}
                    height={100}
                  />
                </div>
                
                <Image
                  src="/footer/vertical-line.png"
                  alt="Vertical Line"
                  width={2}
                  height={80}
                  className="mx-6"
                />
                
                <div>
                  <div className='mb-6' style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '12px', lineHeight: '24px', letterSpacing: '0%' }}>Trusted by</div>
                  <a href="https://aidirectory.industry.gov.au/organisation/synoptix-ai" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/footer/intellegence.png"
                      alt="National Artificial Intelligence Centre"
                      width={100}
                      height={40}
                      style={{ marginTop: '-5px' }}
                    />
                  </a>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div className="mb-8 md:mb-0 ">
            <span style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '0%',
              textTransform: 'uppercase',
              color: '#626DFF'
            }}>
            <p  className="mb-4">PLATFORM</p>
            </span>
            <span style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              letterSpacing: '0%',
              color: '#626DFF'
            }}>
            <ul className="space-y-2">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            </span>
          </div>
          
          {/* Company Links */}
          {/* <div className="mb-8 md:mb-0">
            <h3 style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0%',
                textTransform: 'uppercase',
                color: '#626DFF'
              }} className="mb-4">COMPANY</h3>
              <span style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0%',
                color: '#626DFF'
              }}>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              </span>
          </div> */}
          
          {/* Solutions Links - Commented out */}
        
         

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
            <span style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              letterSpacing: '0%',
              color: '#626DFF'
            }}>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            </span>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '0%',
              textTransform: 'uppercase',
              color: '#626DFF' }} className="mb-4">RESOURCES</h3>
            <span style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              letterSpacing: '0%',
              color: '#626DFF'
            }}>
              <ul className="space-y-2">
                {solutionsLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </span>
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
                <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  {/* <circle cx="24" cy="24" r="23" fill="#2C3E50" stroke="white" stroke-width="2"/> */}
                  <path fill="white" d="M26.25 14h2.25V10.125C28.062 10.086 26.777 10 25.312 10c-2.938 0-4.937 1.793-4.937 5.09V18H17v4.125h3.375V34h4.125V22.125h3.562L28.5 18h-4.125v-2.656c0-1.188.321-1.844 1.875-1.844z"/>
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
                <Image 
                  src="/linkedin.svg" 
                  alt="" 
                  width={20} 
                  height={20} 
                  className="w-5 h-5"
                />
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
            <p className="text-sm text-gray-300 mt-3 mb-4">
hello@synoptix.ai
</p>
            <a href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/ihaconsulting1737191751062.synoptix_azure-managed-application?tab=Overview" target="_blank" rel="noopener noreferrer" className="block mb-4">
              <Image
                src="/footer/MS_Azure_Marketplace.png"
                alt="Microsoft Azure Marketplace"
                width={150}
                height={40}
              />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#c3bbbb] pt-8 flex flex-col md:flex-row justify-between items-center">
         <span style={{fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center', color: '#ffffff'}}>
          <p className=" mb-4 md:mb-0" >
            2025 Synoptix.AI All Rights Reserved.
          </p>
          </span>
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