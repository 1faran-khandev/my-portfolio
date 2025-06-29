import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Faran Khan</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-800 font-medium">
          <li>
            <a href="#about" className="hover:text-blue-600 transition-colors duration-300">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 transition-colors duration-300">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition-colors duration-300">Contact</a>
          </li>
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <XMarkIcon
              className="h-8 w-8 text-gray-800 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <Bars3Icon
              className="h-8 w-8 text-gray-800 cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center gap-10 text-lg text-gray-800 font-medium"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
