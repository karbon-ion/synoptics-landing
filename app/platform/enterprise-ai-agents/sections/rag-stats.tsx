'use client';

const stats = [
  {
    id: 'azure',
    category: 'Faster Workflows',
    value: '40%',
    label: 'UPTIME',
    description: 'Cut process delays and keep operations moving—clients see results within just 3 months'
  },
  {
    id: 'models',
    category: 'Fewer Errors',
    value: '60%',
    label: '',
    description: 'Reduce human mistakes with AI-powered precision, ensuring smoother execution and higher accuracy..'
  },
  {
    id: 'automation',
    category: 'Faster Approvals',
    value: '70%',
    label: '',
    description: 'Reduce manual workflows with AI-powered agents.'
  }
];

const RagStatsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100 z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4">
          <span className="text-sm font-semibold tracking-wider uppercase text-gray-600">
            GLOBAL IMPACT
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto">
          AI That Powers Enterprise Innovation
        </h2>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-16">
          Synoptix makes enterprise automation easy. Built on Azure, our AI-powered platform 
          delivers secure data processing, intelligent automation, and 250+ integrations—
          helping businesses improve operations and stay ahead.
        </p>
        
        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-start">
              <div className="w-full mb-4">
                
                <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-600 mb-2 text-left">
                  {stat.category}
                </h3>
                <div className="h-[2px] w-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
              </div>
              
              <div className="flex flex-col items-start">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">
                    {stat.value}
                  </span>
                  {stat.label && (
                    <span className="ml-2 text-xs font-semibold uppercase text-gray-500">
                      {stat.label}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-gray-600 text-left">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RagStatsSection; 