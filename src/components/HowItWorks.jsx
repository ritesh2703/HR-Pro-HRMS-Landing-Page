import { FiUpload, FiSettings, FiUsers, FiClock, FiCheckCircle } from 'react-icons/fi';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FiUpload className="w-6 h-6 text-blue-600" />,
      title: "Easy Setup",
      description: "Get started in minutes with our simple onboarding process",
      features: [
        "Create admin account",
        "Add company details",
        "Invite team members"
      ],
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100"
    },
    {
      icon: <FiSettings className="w-6 h-6 text-purple-600" />,
      title: "Configure System",
      description: "Customize to match your HR workflows",
      features: [
        "Set up departments",
        "Define roles & permissions",
        "Configure approval workflows"
      ],
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100"
    },
    {
      icon: <FiUsers className="w-6 h-6 text-green-600" />,
      title: "Go Live",
      description: "Start managing your HR operations",
      features: [
        "Onboard employees",
        "Process payroll",
        "Track performance"
      ],
      bgColor: "bg-green-50",
      borderColor: "border-green-100"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Streamline Your HR Processes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform makes HR management simple, efficient, and effective for businesses of all sizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative ${step.bgColor} rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border ${step.borderColor} overflow-hidden group`}
            >
              {/* Step number */}
              <div className={`absolute top-0 left-0 ${index === 0 ? 'bg-blue-600' : index === 1 ? 'bg-purple-600' : 'bg-green-600'} text-white px-4 py-1 rounded-br-lg text-sm font-medium`}>
                Step {index + 1}
              </div>
              
              {/* Icon */}
              <div className={`w-14 h-14 ${index === 0 ? 'bg-blue-100' : index === 1 ? 'bg-purple-100' : 'bg-green-100'} rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}>
                {step.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 mb-6">{step.description}</p>
              
              <ul className="space-y-3">
                {step.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <FiCheckCircle className={`w-5 h-5 ${index === 0 ? 'text-blue-500' : index === 1 ? 'text-purple-500' : 'text-green-500'} mt-0.5 mr-2 flex-shrink-0`} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Estimated time */}
              <div className="mt-6 pt-6 border-t border-gray-200 flex items-center text-gray-500">
                <FiClock className="w-4 h-4 mr-2" />
                <span className="text-sm">Estimated time: {index === 0 ? '5 mins' : index === 1 ? '15 mins' : 'Immediate'}</span>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default HowItWorks;