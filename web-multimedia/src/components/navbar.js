import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl font-bold tracking-wider text-blue-400">Movie Project</Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-300 transition duration-300">Home</Link>
          <Link to="/movies" className="hover:text-blue-300 transition duration-300">Movies</Link>
          <Link to="/tv-shows" className="hover:text-blue-300 transition duration-300">TV Shows</Link>
          <Link to="/aboutus" className="hover:text-blue-300 transition duration-300">About</Link>
          <Link to="/contact" className="hover:text-blue-300 transition duration-300">Contact</Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 fill-current">
              {isOpen ? (
                <path fillRule="evenodd" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path fillRule="evenodd" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-2 space-y-2">
          <Link to="/" className="block py-2 px-4 bg-gray-800 rounded hover:bg-gray-700">Home</Link>
          <Link to="/movies" className="block py-2 px-4 bg-gray-800 rounded hover:bg-gray-700">Movies</Link>
          <Link to="/tv-shows" className="block py-2 px-4 bg-gray-800 rounded hover:bg-gray-700">TV Shows</Link>
          <Link to="/aboutus" className="block py-2 px-4 bg-gray-800 rounded hover:bg-gray-700">About</Link>
          <Link to="/contact" className="block py-2 px-4 bg-gray-800 rounded hover:bg-gray-700">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
