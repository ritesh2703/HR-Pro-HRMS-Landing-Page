// src/pages/AboutFaq.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutFaq = () => {
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-indigo-700 mb-4">About HRPro</h1>
              <p className="text-xl text-gray-600">
                Transforming HR management for modern organizations
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2018, HRPro began as a solution to the fragmented HR tools that organizations were forced to use. 
                  Our team of HR professionals and technologists saw an opportunity to create a unified platform that could 
                  handle all aspects of human resources management.
                </p>
                <p>
                  Today, HRPro serves over 5,000 companies worldwide, from small businesses to enterprise organizations. 
                  We're committed to continuous innovation and providing exceptional support to our customers.
                </p>
                <p>
                  Our mission is to make HR management effortless, so you can focus on what matters most - your people.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="text-lg text-gray-800 group-hover:text-indigo-600">{faq.question}</span>
                        <span className="transition group-open:rotate-180">
                          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <p className="text-gray-600 mt-3">{faq.answer}</p>
                    </details>
                  </div>
                ))}
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