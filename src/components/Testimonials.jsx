import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "HR Director",
      company: "TechCorp",
      content: "HRPro has reduced our onboarding time by 70% and eliminated payroll errors completely. The analytics dashboard gives us incredible insights.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      company: "RetailCo",
      content: "The mobile app is a game-changer for our field employees. Time tracking and shift management has never been easier.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "David Wilson",
      role: "CEO",
      company: "StartupXYZ",
      content: "As a small business, we couldn't afford a full HR department. HRPro gives us enterprise-level tools at a fraction of the cost.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const companyStats = [
    { value: "95%", label: "Customer Satisfaction" },
    { value: "4.8/5", label: "Average Rating" },
    { value: "500+", label: "Companies Trust Us" },
    { value: "24/7", label: "Support Available" }
  ];

  const companyLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    "https://logos-world.net/wp-content/uploads/2021/11/Meta-Emblem.png"
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-[#fcfefe] to-[#d3ebff]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Leading Companies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of businesses transforming their HR operations with our platform
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {companyStats.map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm text-center border border-white/30">
              <p className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</p>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-white/30">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-blue-100">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}, <span className="text-blue-600">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80">
          {companyLogos.map((logo, index) => (
            <img 
              key={index}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="w-32 h-auto max-h-12 object-contain grayscale hover:grayscale-0 transition-all"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;