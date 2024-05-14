import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-xl font-bold">Movie Project</a>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
              <li><a href="/" className="text-white hover:text-gray-300">Movies</a></li>
              <li><a href="/" className="text-white hover:text-gray-300">TV Shows</a></li>
              <li><a href="/" className="text-white hover:text-gray-300">About</a></li>
              <li><a href="/" className="text-white hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="text-white" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
                <path fill="currentColor" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Responsive menu */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <ul className="flex flex-col space-y-2">
              <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
              <li><a href="/" className="text-white hover:text-gray-300">Movies</a></li>
              <li><a href="/" className="text-white hover:text-gray-300">TV Shows</a></li>
              <li><a href="/" className="text-white hover:text-gray-300">About</a></li>
              <li><a href="/" className="text-white hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
