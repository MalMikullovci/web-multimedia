import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center flex-wrap"> {/* Added flex-wrap to ensure items wrap on smaller screens */}
          <p className="text-sm mb-4 lg:mb-0">© 2024 Movie Project. All rights reserved.</p> {/* Added margin bottom for small screens */}
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
