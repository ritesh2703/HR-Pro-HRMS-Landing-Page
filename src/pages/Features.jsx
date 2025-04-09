import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

// Import images
import dashboardImg from '../assets/images/dashboard-screenshot.png';
import inboxImg from '../assets/images/inbox.png';
import hiringImg from '../assets/images/recruitment-hub.png';
import calendarImg from '../assets/images/calendar.png';
import projectsImg from '../assets/images/project-management.png';
import employeesImg from '../assets/images/employee-management.png';
import payrollImg from '../assets/images/payroll-automation.png';
import attendanceImg from '../assets/images/attendance-tracking.png';

const Features = () => {
  const features = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      desc: 'Comprehensive overview of your HR metrics with real-time analytics and key performance indicators',
      img: dashboardImg,
      icon: '📊',
      bgGradient: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      borderColor: 'border-blue-100'
    },
    {
      title: 'Inbox',
      path: '/inbox',
      desc: 'Centralized communication hub for all HR-related messages with smart categorization',
      img: inboxImg,
      icon: '✉️',
      bgGradient: 'bg-gradient-to-br from-purple-50 to-pink-50',
      borderColor: 'border-purple-100'
    },
    {
      title: 'Hiring',
      path: '/hiring',
      desc: 'End-to-end recruitment solution from job posting to candidate onboarding',
      img: hiringImg,
      icon: '👔',
      bgGradient: 'bg-gradient-to-br from-amber-50 to-orange-50',
      borderColor: 'border-amber-100'
    },
    {
      title: 'Calendar',
      path: '/calendar',
      desc: 'Synchronized scheduling for interviews, meetings, and company events',
      img: calendarImg,
      icon: '📅',
      bgGradient: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      borderColor: 'border-emerald-100'
    },
    {
      title: 'Projects',
      path: '/projects',
      desc: 'Task management and collaboration tools for HR initiatives and team projects',
      img: projectsImg,
      icon: '✅',
      bgGradient: 'bg-gradient-to-br from-violet-50 to-fuchsia-50',
      borderColor: 'border-violet-100'
    },
    {
      title: 'Employees',
      path: '/employees',
      desc: 'Complete employee directory with profiles, documents, and performance history',
      img: employeesImg,
      icon: '👥',
      bgGradient: 'bg-gradient-to-br from-rose-50 to-pink-50',
      borderColor: 'border-rose-100'
    },
    {
      title: 'Payroll',
      path: '/payroll',
      desc: 'Automated payroll processing with tax compliance and direct deposit',
      img: payrollImg,
      icon: '💰',
      bgGradient: 'bg-gradient-to-br from-green-50 to-cyan-50',
      borderColor: 'border-green-100'
    },
    {
      title: 'Attendance',
      path: '/attendance',
      desc: 'Time tracking with geofencing, facial recognition and PTO management',
      img: attendanceImg,
      icon: '⏱️',
      bgGradient: 'bg-gradient-to-br from-indigo-50 to-blue-50',
      borderColor: 'border-indigo-100'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              Powerful Features
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Transform Your HR Operations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive suite of HR tools designed to streamline your workforce management
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="space-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 lg:gap-12`}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className={`relative rounded-2xl overflow-hidden shadow-xl ${feature.bgGradient} p-1 border ${feature.borderColor}`}
                  >
                    <div className="rounded-xl overflow-hidden">
                      <img 
                        src={feature.img} 
                        alt={feature.title}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium shadow-sm">
                      {feature.title}
                    </div>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2">
                  <div className={`p-6 ${index % 2 === 0 ? 'md:pl-0' : 'md:pr-0'}`}>
                    <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100">
                      <span className="text-2xl mr-2">{feature.icon}</span>
                      <span className="text-sm font-medium text-gray-700">FEATURE</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{feature.desc}</p>
                    <Link 
                      to={feature.path}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                      Explore Feature
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center shadow-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform Your HR Operations?</h2>
            <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of companies who trust HRPro for their workforce management needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/signin" 
                className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Sign In
              </Link>
              <Link 
                 href="https://hr-management-dashboard-inky.vercel.app"
                className="px-8 py-3 bg-indigo-800 text-white font-medium rounded-xl hover:bg-indigo-900 transition-colors duration-300 shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;