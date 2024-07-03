'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="min-w-full m-0 fixed z-30">
      <div className="flex min-w-full flex-row items-center justify-between flex-wrap bg-slate-900 p-6">
        <div className="flex w-1/3 items-center flex-shrink-0 text-white">
          <Link href="/">
            <span className="font-semibold text-xl tracking-tight cursor-pointer">StudyLinks</span>
          </Link>
        </div>
        <div className="block lg:hidden" onClick={toggleMenu}>
          <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className={`w-full ${menuOpen ? 'block' : 'hidden'} flex-grow w-[80%] justify-between lg:flex lg:items-center lg:w-auto`}>
          <div className=" lg:flex-grow gap-5 flex ">
            <div className="relative inline-block text-left mt-4 lg:mt-0 mr-4">
              <button onClick={toggleDropdown} className="inline-flex justify-center w-full font-medium text-white hover:text-white focus:outline-none">
                Engineering Branches
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className={`${dropdownOpen ? 'block' : 'hidden'} origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}>
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link href="/cse" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Computer Science and Engineering</Link>
                  <Link href="/ece" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Electronics and Communication Engineering</Link>
                  <Link href="/mech" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mechanical Engineering</Link>
                  <Link href="/civil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Civil Engineering</Link>
                </div>
              </div>
            </div>
            <Link href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              About Us
            </Link>
            <Link href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
              Contact
            </Link>
          </div>
          <div>
            <Link href="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
