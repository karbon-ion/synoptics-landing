'use client';

import Link from 'next/link';

const features = [
  {
    id: 'stack',
    title: 'Use Synoptic with your stack',
    description: 'We offer client and server libraries in everything from React and PHP to .NET and iOS',
    link: '/libraries'
  },
  {
    id: 'no-code',
    title: 'Try no-code options',
    description: 'Customize and deploy payments interfaces directly from the Synoptic Dashboard',
    link: '/no-code'
  },
  {
    id: 'integration',
    title: 'Explore pre-built integration',
    description: 'Connect Synoptic to over a hundred tools including Adobe, Salesforce and Xera.',
    link: '/integrations'
  },
  {
    id: 'apps',
    title: 'Build on Synoptic Apps',
    description: 'Create an app just for your team or for the millions of businesses on Synoptic',
    link: '/apps'
  }
];

const SecuritySection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100 z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-600">
              GLOBAL IMPACT
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto">
            Data is stored encrypted in your Azure subscription
          </h2>
          
          <div className="flex justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Book a demo
            </Link>
          </div>
        </div>
        
        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-blue-100 hover:shadow-md transition-all duration-200 flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-8 flex-grow">
                {feature.description}
              </p>
              
              <div className="mt-auto">
                <Link 
                  href={feature.link}
                  className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection; 