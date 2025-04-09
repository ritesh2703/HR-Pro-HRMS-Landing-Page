// src/pages/Blog.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: '10 Best Practices for Remote Employee Management',
      excerpt: 'Learn how to effectively manage your remote workforce with these proven strategies.',
      date: 'May 15, 2023',
      category: 'Management'
    },
    {
      id: 2,
      title: 'How to Streamline Your Hiring Process',
      excerpt: 'Reduce time-to-hire and improve candidate experience with these tips.',
      date: 'April 28, 2023',
      category: 'Recruitment'
    },
    {
      id: 3,
      title: 'The Future of HR Technology in 2023',
      excerpt: 'Discover the emerging trends that will shape HR technology this year.',
      date: 'March 10, 2023',
      category: 'Technology'
    },
    {
      id: 4,
      title: 'Creating an Inclusive Workplace Culture',
      excerpt: 'Practical steps to build a more diverse and inclusive organization.',
      date: 'February 22, 2023',
      category: 'Culture'
    },
    {
      id: 5,
      title: 'Employee Retention Strategies That Work',
      excerpt: 'Keep your top talent engaged and motivated with these approaches.',
      date: 'January 15, 2023',
      category: 'Retention'
    },
    {
      id: 6,
      title: 'Automating HR Processes: Where to Start',
      excerpt: 'A beginner\'s guide to implementing HR automation in your organization.',
      date: 'December 5, 2022',
      category: 'Automation'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-indigo-700 mb-4">HR Insights & Updates</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest HR trends, tips, and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="text-sm text-indigo-600 font-medium mb-2">{post.category}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;