import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const CTA = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    date: '',
    time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      return 'Valid email is required';
    }
    if (!formData.company.trim()) return 'Company name is required';
    if (!formData.date) return 'Preferred date is required';
    if (!formData.time) return 'Preferred time is required';
    return '';
  };

  const sendEmails = async () => {
    // Initialize EmailJS
    emailjs.init('j22Z4TJML-4EZQMHt');

    // Generate demo credentials
    const demoId = `DEMO-${Date.now().toString().slice(-6)}`;
    const demoCredentials = {
      username: `demo_${formData.company.toLowerCase().replace(/\s/g, '_')}`,
      password: `welcome${Math.floor(1000 + Math.random() * 9000)}`,
      expiry: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()
    };

    try {
      // 1. Send notification email to admin (your email)
      await emailjs.send(
        'service_3igokyo',
        'template_1hpnumi',
        {
          to_email: 'riteshanagtode27@gmail.com', // Your email as recipient
          client_name: formData.name,
          client_email: formData.email,
          company_name: formData.company,
          demo_date: new Date(formData.date).toLocaleDateString(),
          demo_time: formData.time,
          demo_id: demoId,
          current_date: new Date().toLocaleDateString(),
          current_time: new Date().toLocaleTimeString(),
          priority: 'High',
          lead_source: 'Website Demo Request'
        }
      );

      // 2. Send automatic reply to client
      await emailjs.send(
        'service_3igokyo',
        'template_ovh7u2i',
        {
          to_email: formData.email, // Client's email as recipient
          to_name: formData.name,
          client_email: formData.email,
          company_name: formData.company,
          demo_date: new Date(formData.date).toLocaleDateString(),
          demo_time: formData.time,
          demo_id: demoId,
          demo_video_link: 'https://drive.google.com/file/d/1eHJqpBaFmKKUMGR-zcMj0yixvF0F6p6k/view?usp=sharing',
          demo_meeting_link: 'https://zoom.us/j/123456789',
          demo_dashboard_link: 'https://hr-management-dashboard-inky.vercel.app/',
          demo_username: demoCredentials.username,
          demo_password: demoCredentials.password,
          credentials_expiry: demoCredentials.expiry,
          support_email: 'support@hrpro.com',
          support_phone: '+91 9552811724',
          account_manager: 'Ritesh Nagtode',
          manager_email: 'riteshanagtode27@gmail.com',
          manager_phone: '+91 9552811724'
        }
      );

      return true;
    } catch (err) {
      console.error('Email sending failed:', err);
      throw err; // Re-throw the error to handle it in the calling function
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const success = await sendEmails();

      if (success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          date: '',
          time: ''
        });
      }
    } catch (err) {
      setError('Failed to submit request. Please try again or contact support.');
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white text-gray-900 relative overflow-hidden">
      {/* Subtle animated elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <motion.div 
          className="absolute top-20 left-20 w-40 h-40 rounded-full bg-indigo-100 blur-xl"
          animate={{
            x: [0, 20, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-blue-100 blur-xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {showDemoForm ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-lg mx-auto bg-gradient-to-br from-indigo-25 to-blue-50 p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">Request Submitted Successfully!</h3>
                    <p className="text-gray-600 mb-4">
                      We've sent the demo materials to your email at <span className="font-medium">{formData.email}</span>.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Check your inbox (and spam folder) for the demo video, meeting link, and access credentials.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSubmitSuccess(false);
                        setShowDemoForm(false);
                      }}
                      className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all"
                    >
                      Return to Home
                    </motion.button>
                  </motion.div>
                ) : (
                  <>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-800">
                        Schedule Your Demo
                      </h3>
                      <motion.button
                        onClick={() => setShowDemoForm(false)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-500 hover:text-gray-700 text-sm flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back
                      </motion.button>
                    </div>
                    
                    {error && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm"
                      >
                        {error}
                      </motion.div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div whileHover={{ scale: 1.02 }}>
                          <label className="block text-left text-sm font-medium text-gray-600 mb-1">Your Name</label>
                          <input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            type="text"
                            className="w-full px-5 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-gray-800 placeholder-gray-400"
                            required
                          />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }}>
                          <label className="block text-left text-sm font-medium text-gray-600 mb-1">Work Email</label>
                          <input
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            type="email"
                            className="w-full px-5 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-gray-800 placeholder-gray-400"
                            required
                          />
                        </motion.div>
                      </div>
                      <motion.div whileHover={{ scale: 1.02 }}>
                        <label className="block text-left text-sm font-medium text-gray-600 mb-1">Company Name</label>
                        <input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          type="text"
                          className="w-full px-5 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-gray-800 placeholder-gray-400"
                          required
                        />
                      </motion.div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div whileHover={{ scale: 1.02 }}>
                          <label className="block text-left text-sm font-medium text-gray-600 mb-1">Preferred Date</label>
                          <input
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            type="date"
                            className="w-full px-5 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-gray-800"
                            required
                          />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }}>
                          <label className="block text-left text-sm font-medium text-gray-600 mb-1">Preferred Time</label>
                          <select
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            className="w-full px-5 py-3 rounded-lg bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-gray-800"
                            required
                          >
                            <option value="">Select Time</option>
                            <option value="09:00">9:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="16:00">4:00 PM</option>
                          </select>
                        </motion.div>
                      </div>
                      <div className="pt-2">
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                          className={`w-full px-8 py-4 rounded-lg font-semibold shadow-md transition-all ${
                            isSubmitting
                              ? 'bg-blue-400 cursor-not-allowed'
                              : 'bg-blue-500 hover:bg-blue-600 text-white'
                          }`}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </span>
                          ) : (
                            'Get Demo Materials Now'
                          )}
                        </motion.button>
                      </div>
                    </form>
                  </>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="cta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div 
                  className="inline-block mb-8"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="bg-blue-50 text-blue-500 px-4 py-2 rounded-full text-sm font-medium tracking-wide shadow-sm">
                    TRUSTED BY 5,000+ BUSINESSES
                  </span>
                </motion.div>
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-800"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Transform Your <span className="text-blue-500">HR Operations</span>
                </motion.h2>
                <motion.p 
                  className="text-xl mb-10 text-gray-600 max-w-3xl mx-auto"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Discover how HRPro can automate 80% of your HR tasks and boost employee satisfaction by 40%.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row justify-center gap-4"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button 
                    onClick={() => setShowDemoForm(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-300 text-center font-semibold shadow-md flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Request Demo
                  </motion.button>
                  <motion.a 
                    href="/signup" 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-white hover:bg-gray-50 text-blue-500 border-2 border-blue-200 rounded-xl transition-all duration-300 text-center font-semibold shadow-sm flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Get Started Free
                  </motion.a>
                </motion.div>
                <motion.div 
                  className="mt-8 flex flex-wrap justify-center gap-4 text-gray-500 text-sm"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {[
                    "No credit card required",
                    "14-day free trial",
                    "Cancel anytime"
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CTA;