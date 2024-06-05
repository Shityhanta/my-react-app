import React, { useState } from 'react';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='sticky'>
      <nav className="top-0 flex justify-between bg-gray-900 text-white w-full z-10">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <a className="text-3xl font-bold font-heading flex items-center" href="#">
            <img className="h-9 mr-2" src={Logo} alt="logo" />
            We Protect
          </a>
          {/* Nav Links */}
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li><a className="hover:text-green-600" href="#">HOME</a></li>
            <li><a className="hover:text-green-600" href="#">ECOSYSTEM</a></li>
            <li><a className="hover:text-green-600" href="#">SPECIES</a></li>
            <li><a className="hover:text-green-600" href="#">CLIMATE</a></li>
            <li><a className="hover:text-green-600" href="#">FAQs</a></li>
          </ul>
          {/* Header Icons */}
          <div className="hidden xl:flex items-center space-x-5">
            <a className="flex items-center hover:text-gray-200" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Responsive navbar */}
        <a className="navbar-burger self-center mr-12 xl:hidden" href="#" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </a>
      </nav>
      {/* Mobile Menu */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-20`}>
        <div className="px-5 py-6">
          <a className="text-3xl font-bold font-heading flex items-center">
            <img className="h-9 mr-2" src={Logo} alt="logo" />
            We Protect
          </a>
          <ul className="mt-8 space-y-6">
            <li><a className="hover:text-green-700" href="#">HOME</a></li>
            <li><a className="hover:text-green-700" href="#">ECOSYSTEM</a></li>
            <li><a className="hover:text-green-700" href="#">SPECIES</a></li>
            <li><a className="hover:text-green-700" href="#">CLIMATE</a></li>
            <li><a className="hover:text-green-700" href="#">FAQs</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
