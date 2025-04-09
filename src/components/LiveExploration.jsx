import { motion } from 'framer-motion';
import dashboardImg from '../assets/images/dashboard-screenshot.png';

const LiveExploration = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#fcfefe] to-[#d3ebff] text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center "
        >
          <div className="mb-8 max-w-3xl mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Live Exploration</h3>
              <h4 className="text-xl md:text-2xl font-medium text-primary-600 mb-4">Explore our feature-packed dashboard</h4>
              <p className="text-gray-700">
                From attendance tracking to payroll automation, experience a dashboard that does it all.
              </p>
            </div>
          </div>
          
          {/* Full-screen width dashboard image */}
          <motion.div
            initial={{ scale: 0.98 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full rounded-xl overflow-hidden shadow-xl border-4 border-white"
          >
            <img 
              src={dashboardImg} 
              alt="HR Dashboard Preview"
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveExploration;