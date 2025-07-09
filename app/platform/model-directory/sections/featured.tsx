'use client';

import Image from 'next/image'
import { useState, useEffect } from 'react';

const Featured = () => {
  const [windowWidth, setWindowWidth] = useState(1024);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const integrations = [
    { name: 'XAI - Grok', src: '/model-hub/logos/Grok logo.jpeg', hasBackground: false },
    { name: 'DeepSeek', src: '/model-hub/logos/Deepseek logo.png', hasBackground: true },
    { name: 'Databricks', src: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png', hasBackground: false },
    { name: 'Cohere', src: '/model-hub/logos/cohere.png', hasBackground: true },
    { name: 'AI21 Labs', src: '/model-hub/logos/A121 labs.png', hasBackground: false },
    { name: 'NVIDIA', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/1280px-Nvidia_logo.svg.png', hasBackground: true },
    { name: 'Mistral', src: '/model-hub/logos/Mistral.png', hasBackground: false },
    { name: 'Meta', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png', hasBackground: true },
    { name: 'Microsoft', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png', hasBackground: false },
    { name: 'Azure OpenAI', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1200px-Microsoft_Azure_Logo.svg.png', hasBackground: true }
  ]

  return (
    <section className="mt-10 md:mt-20 relative py-10 md:py-20">
      <Image
        src="/integrations/featured/bg.png"
        alt="Background"
        fill
        className="object-cover z-0"
        quality={100}
      />
      <div className="relative z-10 container mx-auto px-4">
        <h2 style={{
          fontFamily: 'Syne',
          fontWeight: 700,
          fontSize: windowWidth < 768 ? '30px' : windowWidth < 1024 ? '36px' : '48px',
          lineHeight: windowWidth < 768 ? '1.2' : '72px',
          textAlign: 'center',
          marginBottom: windowWidth < 768 ? '12px' : '16px'
        }}>
          Featured Models 
        </h2>
        <p style={{
          fontFamily: 'Poppins',
          fontWeight: 400,
          fontSize: windowWidth < 768 ? '14px' : '16px',
          lineHeight: windowWidth < 768 ? '1.5' : '30px',
          textAlign: 'center',
          maxWidth: '60rem',
          margin: '0 auto',
          marginBottom: windowWidth < 768 ? '32px' : '64px'
        }}>
          Synoptix supports a wide range of leading AI models, allowing you to leverage the best technology for your specific use cases and requirements 
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-[1200px] mx-auto">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-4 md:p-5 rounded-lg ${index % 2 === 0 ? 'shadow-lg bg-white' : 'bg-white md:transform md:translate-y-3'}`}
              style={{
                minHeight: '160px',
                height: '100%'
              }}
            >
              <div className="mb-3 md:mb-4 flex items-center justify-center" style={{height: '64px'}}>
                <Image
                  src={integration.src}
                  alt={integration.name}
                  width={64}
                  height={64}
                  className="object-contain max-h-[64px]"
                />
              </div>
              <p style={{
                fontFamily: 'Poppins',
                fontSize: windowWidth < 768 ? '16px' : windowWidth < 1024 ? '18px' : '20px',
                textAlign: 'center',
                color: '#323E50'
              }}>
                {integration.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured
