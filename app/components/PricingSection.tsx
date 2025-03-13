import React from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'SMALL',
      price: '$19',
      subtitle: 'EVERYTHING IN SMALL PLAN',
      features: [
        { name: 'Multi-step Zap', included: true },
        { name: 'Unlimited Premium Apps', included: 'Limited' },
        { name: 'Unlimited Users Team', included: true },
        { name: 'Advanced Admin', included: true },
        { name: 'Unlimited Users Team', included: true },
      ],
    },
    {
      name: 'MEDIUM',
      price: '$19',
      subtitle: 'EVERYTHING IN MEDIUM PLAN',
      features: [
        { name: 'Multi-step Zap', included: true },
        { name: 'Unlimited Premium Apps', included: 'Limited' },
        { name: 'Unlimited Users Team', included: true },
        { name: 'Advanced Admin', included: true },
        { name: 'Custom Data Retention', included: 'Unlimited' },
        { name: 'Unlimited Premium Apps', included: 'Unlimited' },
      ],
    },
    {
      name: 'LARGE',
      price: '$19',
      subtitle: 'EVERYTHING IN LARGE PLAN',
      features: [
        { name: 'Multi-step Zap', included: true },
        { name: 'Unlimited Premium Apps', included: 'Limited' },
        { name: 'Unlimited Users Team', included: true },
        { name: 'Advanced Admin', included: true },
        { name: 'Custom Data Retention', included: 'Unlimited' },
        { name: 'Unlimited Premium Apps', included: 'Unlimited' },
        { name: 'Unlimited Users Team', included: true },
      ],
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">OUR PLANS</h3>
          <h2 className="text-4xl font-bold mb-4">Pricing and Plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dummy Text dummy text dummy text helping businesses improve operations and stay ahead.
          </p>
          <button className="mt-8 bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">
            Book a demo
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