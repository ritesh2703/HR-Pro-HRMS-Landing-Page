// src/pages/Pricing.jsx
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const plans = [
    {
      id: 1,
      name: 'Starter',
      price: '$19',
      period: 'per month',
      features: [
        'Up to 10 employees',
        'Basic HR features',
        'Email support',
        'Standard reports'
      ],
      cta: 'Get Started'
    },
    {
      id: 2,
      name: 'Professional',
      price: '$49',
      period: 'per month',
      features: [
        'Up to 50 employees',
        'Advanced HR features',
        'Priority support',
        'Advanced analytics',
        'Payroll integration'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 'Custom',
      period: 'per month',
      features: [
        'Unlimited employees',
        'All features included',
        '24/7 dedicated support',
        'Custom integrations',
        'Onboarding assistance',
        'API access'
      ],
      cta: 'Contact Sales'
    }
  ];

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
    setIsSubmitted(false);
  };

  const handleSubmit = () => {
    if (selectedPlan) {
      setIsSubmitted(true);
      // Here you would typically send the selected plan to your backend
      console.log('Selected plan:', plans.find(plan => plan.id === selectedPlan));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-indigo-700 mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your organization's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                onClick={() => handlePlanSelect(plan.id)}
                className={`bg-white rounded-xl shadow-md overflow-hidden border cursor-pointer transition-all duration-200 ${
                  plan.popular ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-100'
                } ${
                  selectedPlan === plan.id ? 'ring-4 ring-indigo-300 transform scale-[1.02]' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-indigo-600 text-white text-center py-2 font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
                    {selectedPlan === plan.id && (
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-indigo-600">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSubmit();
                    }}
                    className={`w-full py-3 px-6 rounded-lg font-medium ${
                      plan.popular ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700'
                    } transition-colors duration-300 ${
                      selectedPlan === plan.id ? 'ring-2 ring-indigo-400' : ''
                    }`}
                    disabled={!selectedPlan || selectedPlan !== plan.id}
                  >
                    {selectedPlan === plan.id && isSubmitted ? 'Plan Selected!' : plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {isSubmitted && (
            <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg text-center max-w-2xl mx-auto">
              <p className="text-green-700 font-medium">
                You've selected the {plans.find(plan => plan.id === selectedPlan).name} plan. 
                {selectedPlan === 3 ? ' Our sales team will contact you shortly.' : ' You can now proceed with your subscription.'}
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;