import React from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'SAAS ESSENTIALS',
      price: '$3000',
      subtitle: 'EVERYTHING IN SMALL PLAN',
      features: [
        { name: 'Users', included: 'Unlimited' },
        { name: 'Quick Start Agents', included: true },
        { name: 'Customized Agents', included: true },
        { name: 'SharePoint Integration', included: true },
        { name: 'Token per user/month', included: 'Unlimited' },
        { name: 'Integrations', included: 'Contact Us' },
        { name: 'Advanced Evaluations', included: true },
      ],
    },
    {
      name: 'MANAGED PRO',
      price: 'CONTACT US',
      subtitle: 'EVERYTHING IN SAAS ESSENTIALS PLUS',
      features: [
        { name: 'Advanced Applications', included: true },
        { name: 'Managed Application', included: true },
        { name: 'Security + Safety', included: true },
        { name: 'Sentiment Analysis', included: true },
        { name: 'Toxcity Detection', included: true },
        { name: 'Premium Support', included: true },
      ],
    },
    {
      name: 'ENTERPRISE ELITE',
      price: 'CONTACT US',
      subtitle: 'EVERYTHING IN MANAGED PRO PLUS:',
      features: [
        { name: 'Advanced Reasoning Agents', included: true },
        { name: 'Tailored AI Adpotion Strategy', included: true },
        { name: 'Self Hosted Models', included: true },
        { name: 'Training and Upskilling', included: true },
        { name: 'Developer API', included: 'Unlimited' },
        { name: 'Dedicated Manager', included: true },
      ],
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Pricing and Plan</h3>
          <h2 className="text-4xl font-bold mb-4">Maximize Business Value with Smart Investments </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Choose the plan that fits your needs and scale as you grow with AI tools and integration. 
          </p>
          <button className="mt-8 bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">
            Start with 30-Day Trial
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="rounded-3xl p-8 bg-gray-50 border-2 border-gray-100 flex flex-col"
            >
              <div className="mb-8">
                <h3 className="text-sm font-semibold mb-4">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">{plan.subtitle}</p>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center justify-between">
                    <span className="text-sm">{feature.name}</span>
                    {feature.included === true ? (
                      <Check className="w-5 h-5 text-blue-500" />
                    ) : (
                      <span className="text-sm text-gray-500">{feature.included}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 