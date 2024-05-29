import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-start flex-wrap">
          {/* About Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">About Movie Project</h4>
            <p className="text-sm text-gray-400">Movie Project is your go-to platform for all the latest and greatest in the world of cinema. Stay tuned for updates, reviews, and much more!</p>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
              <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="/blog" className="hover:text-gray-300">Blog</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h4>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="p-2 rounded bg-gray-700 border border-gray-600 text-sm text-gray-200 focus:outline-none focus:border-gray-500"
              />
              <button 
                type="submit" 
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4">
          <div className="flex justify-between items-center flex-wrap">
            <p className="text-sm mb-4 lg:mb-0">© 2024 Movie Project. All rights reserved.</p>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
            <div className="flex space-x-4 mt-4 lg:mt-0">
              <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-gray-300"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
