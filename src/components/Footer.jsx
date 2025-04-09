import { FiFacebook, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';

const Footer = () => {
  const links = [
    {
      title: "Product",
      items: ["Features", "Pricing", "Integrations", "Updates"]
    },
    {
      title: "Company",
      items: ["About", "Careers", "Blog", "Press"]
    },
    {
      title: "Resources",
      items: ["Help Center", "Tutorials", "Templates", "Community"]
    },
    {
      title: "Legal",
      items: ["Privacy", "Terms", "Security", "Cookies"]
    }
  ];

  return (
    <footer 
      className="bg-gradient-to-r from-[#fcfefe] to-[#d3ebff] text-gray-800 shadow-inner"
      style={{
        backgroundImage: "linear-gradient(to right, #fcfefe, #d3ebff)",
      }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-4">
              HRPro
            </h3>
            <p className="mb-6 text-gray-700">The all-in-one HR platform for modern businesses.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800 transition hover:scale-110">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition hover:scale-110">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition hover:scale-110">
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition hover:scale-110">
                <FiGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

          {links.map((link, index) => (
            <div key={index}>
              <h4 className="font-semibold text-blue-800 mb-4">{link.title}</h4>
              <ul className="space-y-2">
                {link.items.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-700 hover:text-blue-600 transition hover:pl-2 block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-blue-200/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">© 2025 HRPro. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition font-medium">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition font-medium">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition font-medium">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;