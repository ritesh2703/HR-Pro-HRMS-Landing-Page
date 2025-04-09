import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      id: 1,
      name: 'Starter',
      monthlyPrice: '$19',
      annualPrice: '$15',
      period: billingCycle === 'monthly' ? 'per month' : 'per year',
      features: [
        'Up to 10 employees',
        'Basic HR features',
        'Email support',
        'Standard reports',
        'Mobile app access',
        'Document storage (5GB)'
      ],
      cta: 'Get Started',
      color: 'from-blue-400 to-blue-500'
    },
    {
      id: 2,
      name: 'Professional',
      monthlyPrice: '$49',
      annualPrice: '$39',
      period: billingCycle === 'monthly' ? 'per month' : 'per year',
      features: [
        'Up to 50 employees',
        'Advanced HR features',
        'Priority support',
        'Advanced analytics',
        'Payroll integration',
        'Custom workflows',
        'API access',
        'Document storage (25GB)'
      ],
      cta: 'Get Started',
      popular: true,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact us',
      features: [
        'Unlimited employees',
        'All features included',
        '24/7 dedicated support',
        'Custom integrations',
        'Onboarding assistance',
        'Unlimited API access',
        'Dedicated account manager',
        'Unlimited document storage',
        'Single sign-on (SSO)',
        'Custom reporting'
      ],
      cta: 'Contact Sales',
      color: 'from-indigo-600 to-blue-700'
    }
  ];

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly');
  };

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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Flexible <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your organization's needs
            </p>
            
            {/* Billing cycle toggle */}
            <div className="mt-8 flex items-center justify-center">
              <span className={`mr-4 font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={toggleBillingCycle}
                className="relative inline-flex items-center h-6 rounded-full w-12 bg-gradient-to-r from-blue-500 to-indigo-600"
              >
                <span
                  className={`${
                    billingCycle === 'monthly' ? 'translate-x-1' : 'translate-x-7'
                  } inline-block w-4 h-4 transform transition-transform duration-200 ease-in-out bg-white rounded-full`}
                />
              </button>
              <span className={`ml-4 font-medium ${billingCycle === 'annual' ? 'text-gray-900' : 'text-gray-400'}`}>
                Annual <span className="text-sm text-green-600">(Save 20%)</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                onClick={() => handlePlanSelect(plan.id)}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden border-0 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-indigo-200' : ''
                } ${
                  selectedPlan === plan.id ? 'ring-4 ring-indigo-300 shadow-2xl' : ''
                } ${
                  hoveredPlan === plan.id ? 'transform hover:-translate-y-2' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    {selectedPlan === plan.id && (
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shadow-md">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-end">
                      <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        {plan.id !== 3 ? (billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice) : plan.price}
                      </span>
                      <span className="text-gray-500 ml-2 mb-1">{plan.period}</span>
                    </div>
                    {plan.id !== 3 && billingCycle === 'annual' && (
                      <p className="text-sm text-green-600 mt-1">Billed annually, save ${(parseInt(plan.monthlyPrice.substring(1)) * 12 - parseInt(plan.annualPrice.substring(1)))}</p>
                    )}
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6"></div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSubmit();
                    }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      selectedPlan === plan.id 
                        ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg'
                        : `bg-gradient-to-r ${plan.color} text-white hover:shadow-md`
                    } ${
                      selectedPlan && selectedPlan !== plan.id ? 'opacity-50' : ''
                    }`}
                    disabled={selectedPlan && selectedPlan !== plan.id}
                  >
                    {selectedPlan === plan.id && isSubmitted ? (
                      <span className="flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      plan.cta
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {isSubmitted && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl text-center max-w-2xl mx-auto shadow-sm"
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {selectedPlan === 3 ? 'Request Received!' : 'Plan Selected!'}
              </h3>
              <p className="text-gray-700">
                You've selected the <span className="font-semibold">{plans.find(plan => plan.id === selectedPlan).name}</span> plan. 
                {selectedPlan === 3 ? ' Our sales team will contact you within 24 hours.' : ' Redirecting to checkout...'}
              </p>
            </motion.div>
          )}

          {/* Enterprise CTA section */}
          <div className="mt-16 bg-gradient-to-r from-indigo-900 to-blue-900 rounded-2xl p-8 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need something more customized?</h2>
              <p className="text-xl text-indigo-100 mb-6">
                Our Enterprise plan offers fully customized solutions tailored to your organization's specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-6 py-3 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Request a Demo
                </button>
                <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-900 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;