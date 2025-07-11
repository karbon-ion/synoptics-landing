'use client';

const BenefitCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-blue-100 hover:shadow-md transition-all duration-300 h-full flex flex-col">
      <h3 className="text-gray-900 font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const ResultSection = () => {
  // Define the benefits
  const benefits = [
    {
      title: "Industry-Specific Customisation",
      description: "A generic AI model isn't cut out for the tough challenges of handling real-world challenges in healthcare, finance, and legal industries with precision."
    },
    {
      title: "Improved Model Performance",
      description: "A fine-tuned model doesn't just perform, it understands. Expect more relevant outputs that align with your specific needs."
    },
    {
      title: "Bias Mitigation",
      description: "Bias in AI is a real problem. We train models on diverse data to ensure balanced, ethical decisions you can trust."
    },
    {
      title: "Optimised Compute Costs",
      description: "Enhance performance by leveraging powerful foundational models. Fine-tuning ensures maximum efficiency, faster processing, and reduced computational expenses."
    }
  ];

  return (
    <section className="py-24 bg-[#eafcff] relative overflow-hidden">
      {/* Blue curved shape on the left side */}
      <div className="absolute left-0 top-0 bottom-0 w-32 xl:w-64">
        <svg 
          height="100%" 
          width="100%" 
          viewBox="0 0 100 800" 
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,0 Q100,400 0,800" 
            stroke="#1E90FF" 
            strokeWidth="2" 
            fill="#1E90FF" 
            opacity="0.2"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Benefits You get from our Fine Tuning
& Optimisation Services
        </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultSection;