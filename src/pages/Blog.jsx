import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiSearch, FiClock, FiBookmark, FiShare2 } from 'react-icons/fi';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Management', 'Recruitment', 'Technology', 'Culture', 'Retention', 'Automation'];

  const posts = [
    {
      id: 1,
      title: '10 Best Practices for Remote Employee Management',
      excerpt: 'Learn how to effectively manage your remote workforce with these proven strategies that boost productivity and engagement.',
      date: 'May 15, 2024',
      category: 'Management',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'How to Streamline Your Hiring Process',
      excerpt: 'Reduce time-to-hire by 40% and improve candidate experience with these actionable recruitment strategies.',
      date: 'April 28, 2024',
      category: 'Recruitment',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 3,
      title: 'The Future of HR Technology in 2023',
      excerpt: 'Discover the 5 emerging trends that will shape HR technology and how to prepare your organization.',
      date: 'March 10, 2024',
      category: 'Technology',
      readTime: '6 min read',
      featured: true
    },
    {
      id: 4,
      title: 'Creating an Inclusive Workplace Culture',
      excerpt: 'Practical steps to build a more diverse and inclusive organization that drives innovation.',
      date: 'February 22, 2025',
      category: 'Culture',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Employee Retention Strategies That Work',
      excerpt: 'Keep your top talent engaged and motivated with these 8 proven retention approaches.',
      date: 'January 15, 2025',
      category: 'Retention',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 6,
      title: 'Automating HR Processes: Where to Start',
      excerpt: 'A step-by-step guide to implementing HR automation that saves 15+ hours per week.',
      date: 'December 5, 2024',
      category: 'Automation',
      readTime: '8 min read',
      featured: false
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              HR Insights
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              HRPro Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest HR trends, strategies, and best practices
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
              <div className="relative w-full md:w-96">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Post */}
          {filteredPosts.some(post => post.featured) && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredPosts.filter(post => post.featured).map(post => (
                  <motion.div
                    key={post.id}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <button className="text-gray-400 hover:text-indigo-600">
                          <FiBookmark />
                        </button>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm text-gray-500">
                          <FiClock className="mr-1" />
                          {post.readTime} • {post.date}
                        </div>
                        <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                          Read article
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* All Posts */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex gap-2">
                        <button className="text-gray-400 hover:text-indigo-600">
                          <FiBookmark size={16} />
                        </button>
                        <button className="text-gray-400 hover:text-indigo-600">
                          <FiShare2 size={16} />
                        </button>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center text-gray-500">
                        <FiClock className="mr-1" size={14} />
                        {post.readTime}
                      </div>
                      <span className="text-gray-400">{post.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center shadow-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated with HR Trends</h2>
            <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest HR insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;