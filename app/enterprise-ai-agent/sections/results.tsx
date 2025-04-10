'use client';

const stats = [
  {
    id: 'azure',
    category: 'AI PRODUCTIVITY BOOST',
    value: '64%',
    label: '',
    description: 'of businesses expect AI to increase overall productivity. '
  },
  {
    id: 'models',
    category: 'AI & CUSTOMER ENGAGEMENT',
    value: '60%',
    label: '',
    description: 'of business owners believe AI will improve customer relationships. '
  },
  {
    id: 'automation',
    category: 'AI RELUCTANCE',
    value: '52%',
    label: '',
    description: 'of people who use AI at work are reluctant to admit using it for their most important tasks. '
  },
  {
    id: 'automation2',
    category: 'AI TRUST GAP',
    value: '52%',
    label: '',
    description: 'of professionals using AI still hesitate to acknowledge its role in key tasks—despite its growing impact. '
  }
];

const ResultSection = () => { 
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-white from-blue-50 to-blue-100 z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        
        <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 max-w-4xl mx-auto">
          RESULTS YOU CAN EXPECT
        </h2>
        
       
        
        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
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

export default ResultSection; 