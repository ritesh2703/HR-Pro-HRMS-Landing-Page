// src/pages/AboutFaq.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

const AboutFaq = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const faqs = [
    {
      question: 'What is HRPro?',
      answer: 'HRPro is a comprehensive HR management platform designed to streamline all your human resources processes, from hiring and onboarding to payroll and performance management.'
    },
    {
      question: 'How secure is my data with HRPro?',
      answer: 'We use industry-standard encryption and security protocols to protect your data. Our systems are regularly audited and we comply with all major data protection regulations.'
    },
    {
      question: 'Can I integrate HRPro with other tools?',
      answer: 'Yes, HRPro offers integrations with many popular business tools including Slack, Google Workspace, Microsoft 365, and various payroll providers.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We provide 24/5 email support for all plans, with phone support available for professional and enterprise plans. Our average response time is under 2 hours.'
    },
    {
      question: 'Is there a mobile app?',
      answer: 'Yes, HRPro has fully-featured iOS and Android apps that allow you to manage HR tasks on the go.'
    },
    {
      question: 'How often do you release updates?',
      answer: 'We release minor updates weekly and major feature updates quarterly. All updates are included in your subscription at no additional cost.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', contactForm);
    setFormSubmitted(true);
    setContactForm({ name: '', email: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">About HRPro</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Empowering organizations with innovative HR solutions since 2018
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2024, HRPro began as a solution to the fragmented HR tools that organizations were forced to use. 
                    Our team of HR professionals and technologists saw an opportunity to create a unified platform that could 
                    handle all aspects of human resources management.
                  </p>
                  <p>
                    In 2025, HRPro serves over 15,000 companies worldwide, from small businesses to Fortune 500 enterprises. 
                    We've expanded our offerings to include AI-powered HR analytics and predictive workforce planning tools.
                  </p>
                  <p>
                    Our mission remains the same: to make HR management effortless, so you can focus on what matters most - your people.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">2025 Milestones</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">Launched Automatic Payroll HR assistant </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">Active Users 1,240+ Across departmentss</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">Achieved 98% customer satisfaction rating</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600"> Archive 4.9/5 Average Rating & 2.5x Faster Processing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-12 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-3">
                        <span className="text-lg text-gray-800 group-hover:text-indigo-600 transition-colors">{faq.question}</span>
                        <span className="transition-transform duration-200 group-open:rotate-180">
                          <svg className="w-5 h-5 text-gray-500 group-hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <p className="text-gray-600 mt-3 pl-2">{faq.answer}</p>
                    </details>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700">
                  Thank you for your message! We'll get back to you within 24 hours.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={contactForm.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Other Ways to Reach Us</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-900">Phone Support</h4>
                      <p className="text-sm text-gray-500">+91 9552811724</p>
                      <p className="text-xs text-gray-400 mt-1">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-900">Email Us</h4>
                      <p className="text-sm text-gray-500">support@hrpro.com</p>
                      <p className="text-xs text-gray-400 mt-1">24/5 support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutFaq;