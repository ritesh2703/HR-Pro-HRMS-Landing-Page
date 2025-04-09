import { FiUsers, FiClock, FiDollarSign, FiBriefcase, FiMail, FiPieChart } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Import local images
import employeeMgmtImg from '../assets/images/employee-management.png';
import attendanceImg from '../assets/images/attendance-tracking.png';
import payrollImg from '../assets/images/payroll-automation.png';
import recruitmentImg from '../assets/images/recruitment-hub.png';
import inboxImg from '../assets/images/inbox.png';
import projectMgmtImg from '../assets/images/project-management.png';

const Features = () => {
  const features = [
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Employee Management",
      description: "Centralized employee database with profiles, documents, and history.",
      img: employeeMgmtImg,
      color: "from-blue-100 to-blue-50"
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: "Time & Attendance",
      description: "Automated time tracking with geofencing and facial recognition.",
      img: attendanceImg,
      color: "from-purple-100 to-purple-50"
    },
    {
      icon: <FiDollarSign className="w-6 h-6" />,
      title: "Payroll Processing",
      description: "Error-free payroll with tax compliance and direct deposit.",
      img: payrollImg,
      color: "from-green-100 to-green-50"
    },
    {
      icon: <FiBriefcase className="w-6 h-6" />,
      title: "Recruitment",
      description: "End-to-end hiring process from job posting to onboarding.",
      img: recruitmentImg,
      color: "from-amber-100 to-amber-50"
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Inbox",
      description: "Centralized messaging system for all HR communications.",
      img: inboxImg,
      color: "from-pink-100 to-pink-50"
    },
    {
      icon: <FiPieChart className="w-6 h-6" />,
      title: "Project Management",
      description: "Assign tasks, track progress, and manage team workloads.",
      img: projectMgmtImg,
      color: "from-indigo-100 to-indigo-50"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Features</h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-primary-600 mb-4">All-in-One HR & Project Management</h3>
          <p className="text-lg text-gray-600">
            Our feature-rich platform makes workforce management easy, so you can focus on what 
            matters most-growing your business.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`h-full bg-gradient-to-br ${feature.color} rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100`}>
                {/* Feature title above image */}
                <div className="px-6 pt-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
                  </div>
                </div>
                
                {/* Image container */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.img} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Description below image */}
                <div className="px-6 pb-6 pt-4">
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;