import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import dashboardImage from '../assets/images/dashboard-screenshot.png';
import { FiPlay, FiArrowRight, FiCheck, FiX } from 'react-icons/fi';
import { RiShieldCheckLine } from 'react-icons/ri';

// Cloudinary video URL
const demoVideo = 'https://res.cloudinary.com/dy3gmccf3/video/upload/v1744276425/eslb0h0wa9yk6tkoripx.mp4';

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  const stats = [
    { value: "95%", label: "User Satisfaction" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "2.5x", label: "Faster Processing" }
  ];

  const openVideoModal = () => {
    setIsVideoOpen(true);
    document.body.style.overflow = 'hidden';
    
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
        setVideoError(true);
      });
    }
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    document.body.style.overflow = 'auto';
    
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/80 to-indigo-100/50">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-200/30 rounded-full filter blur-3xl"></div>
        <div className="absolute -left-40 bottom-0 w-80 h-80 bg-indigo-200/30 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-28 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm mb-6">
                <RiShieldCheckLine className="text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Trusted by 500+ companies</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Complete HR
                </span>{" "}
                Management Solution
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                Streamline your HR operations with our all-in-one platform — manage employees, 
                track attendance, process payroll, and handle recruitment efficiently.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://hr-management-dashboard-inky.vercel.app"
                  className="px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 text-center font-medium flex items-center justify-center"
                >
                  Get Started Free <FiArrowRight className="ml-2" />
                </motion.a>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openVideoModal}
                  className="px-6 py-4 bg-white text-gray-800 border border-gray-200 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-300 text-center font-medium flex items-center justify-center"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <FiPlay className="text-blue-600" />
                  </div>
                  Watch Demo
                </motion.button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-xs border border-gray-100">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Dashboard Image */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              {/* Larger dashboard screenshot */}
              <div className="bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 transform rotate-1 w-[150%] max-w-none -mr-[25%]">
                <img
                  src={dashboardImage}
                  alt="HR Dashboard"
                  className="rounded-xl border border-gray-200 w-full"
                />
              </div>

              {/* Active users floating card */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-8 -left-8 bg-white p-5 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Active Users</span>
                </div>
                <div className="text-2xl font-bold">1,240+</div>
                <div className="text-xs text-gray-500 mt-1">Across departments</div>
              </motion.div>

              {/* Feature highlight card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-8 -right-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5 rounded-xl shadow-lg"
              >
                <div className="font-medium mb-2">Key Features:</div>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center">
                    <FiCheck className="mr-1" /> Employee Management
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="mr-1" /> Payroll Processing
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="mr-1" /> Recruitment Tools
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm"
          onClick={closeVideoModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-all"
              aria-label="Close video"
            >
              <FiX className="w-6 h-6" />
            </button>
            
            <div className="w-full aspect-video">
              {videoError ? (
                <div className="flex items-center justify-center h-full bg-gray-900 text-white">
                  <p>Video failed to load. Please try again later.</p>
                </div>
              ) : (
                <video
                  ref={videoRef}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  controlsList="nodownload"
                  onError={() => setVideoError(true)}
                >
                  <source src={demoVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;