import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import MobileMenu from './MobileMenu';

const links = ['About', 'Projects', 'Skills', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      for (let i = 0; i < links.length; i++) {
        const section = document.getElementById(links[i].toLowerCase());
        if (section) {
          const rect = section.getBoundingClientRect();
          const middle = window.innerHeight / 2;

          if (rect.top <= middle && rect.bottom >= middle) {
            setActiveLink(links[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-500 ${
          scrolled
            ? 'bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-2xl shadow-2xl border-b border-white/10'
            : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      >
        {/* Logo */}
        <motion.h1
          className="text-2xl font-extrabold text-white tracking-wide cursor-pointer select-none"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Faran
          <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
            .Dev
          </span>
        </motion.h1>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-10 text-white text-lg font-medium">
          {links.map((link, index) => {
            const isActive = activeLink === link;

            return (
              <motion.li
                key={link}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 + 0.2 }}
              >
                <a
                  href={`#${link.toLowerCase()}`}
                  className="group relative inline-block cursor-pointer transition-colors duration-300"
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive
                        ? 'text-blue-500'
                        : 'text-white group-hover:text-blue-400'
                    }`}
                  >
                    {link}
                  </span>

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-100'
                        : 'w-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-80'
                    }`}
                  ></span>
                </a>
              </motion.li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {menuOpen ? (
            <XMarkIcon
              className="h-8 w-8 text-white cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <Bars3Icon
              className="h-8 w-8 text-white cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
