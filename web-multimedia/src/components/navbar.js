// src/components/navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/" className="text-white text-xl font-bold">Movie Project</Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
              <li><Link to="/movies" className="text-white hover:text-gray-300">Movies</Link></li>
              <li><Link to="/tv-shows" className="text-white">TV Shows</Link></li>
              <li><Link to="/aboutus" className="text-white hover:text-gray-300">About</Link></li>
              <li><Link to="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
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
      </div>
    </nav>
  );
};

export default Navbar;
