import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown, FiUser } from 'react-icons/fi';
import { RiFlashlightFill } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for logged-in user on component mount
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
    window.location.reload(); // Refresh to update UI
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
    exit: { opacity: 0, height: 0 }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with animation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center space-x-2"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
              <RiFlashlightFill className="text-white text-xl" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              HRPro
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300 rounded-lg hover:bg-gray-50"
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300 rounded-lg hover:bg-gray-50"
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300 rounded-lg hover:bg-gray-50"
            >
              Pricing
            </Link>
            <Link 
              to="/blog" 
              className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300 rounded-lg hover:bg-gray-50"
            >
              Blog
            </Link>
            <Link 
              to="/about-faq" 
              className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300 rounded-lg hover:bg-gray-50"
            >
              About & FAQ
            </Link>
          </nav>

          {/* Auth Buttons with animation */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden md:flex items-center space-x-3"
          >
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => toggleDropdown('user')}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300 rounded-lg hover:bg-gray-50"
                >
                  <span className="flex items-center">
                    <FiUser className="mr-2" />
                    {user.name}
                  </span>
                  <FiChevronDown className={`transition-transform ${openDropdown === 'user' ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {openDropdown === 'user' && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100"
                    >
                      <Link 
                        to="/dashboard" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Dashboard
                      </Link>
                      <Link 
                        to="/settings" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Settings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        Sign out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <Link 
                  to="/signin" 
                  className="px-5 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300 rounded-lg hover:bg-gray-50"
                >
                  Sign In
                </Link>
                <a 
                  href="https://hr-management-dashboard-inky.vercel.app"
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  Get Started
                </a>
              </>
            )}
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-indigo-600 focus:outline-none transition-colors duration-300 p-2 rounded-lg hover:bg-gray-100"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="mt-3 pb-4 space-y-2">
                <Link 
                  to="/" 
                  className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/features" 
                  className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
                <Link 
                  to="/pricing" 
                  className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link 
                  to="/blog" 
                  className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="/about-faq" 
                  className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About & FAQ
                </Link>

                <div className="pt-2 mt-2 border-t border-gray-100 space-y-2">
                  {user ? (
                    <>
                      <Link 
                        to="/dashboard" 
                        className="block px-4 py-2.5 text-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsOpen(false);
                        }}
                        className="w-full px-4 py-2.5 text-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors"
                      >
                        Sign out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link 
                        to="/signin" 
                        className="block px-4 py-2.5 text-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Sign In
                      </Link>
                      <a 
                        href="https://hr-management-dashboard-inky.vercel.app"
                        className="block px-4 py-2.5 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-sm hover:shadow-md"
                        onClick={() => setIsOpen(false)}
                      >
                        Get Started
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;