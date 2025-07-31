import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const links = ['About', 'Projects', 'Skills', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const middle = window.innerHeight / 2;

      for (let link of links) {
        const section = document.getElementById(link.toLowerCase());
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= middle && rect.bottom >= middle) {
            setActiveLink(link);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // trigger once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // close menu on mobile
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-500 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-lg shadow-xl border-b border-white/10'
            : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        {/* Logo */}
        <h1
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl font-bold text-white tracking-wide cursor-pointer"
        >
          Faran<span className="text-blue-400">.Dev</span>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 text-white text-base font-medium">
          {links.map((link, idx) => {
            const isActive = activeLink === link;

            return (
              <li key={link}>
                <button
                  onClick={() => scrollToSection(link)}
                  className={`group relative transition duration-300 ${
                    isActive ? 'text-blue-400' : 'hover:text-blue-400'
                  }`}
                >
                  {link}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-400 to-purple-500'
                        : 'bg-transparent group-hover:bg-blue-400'
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </motion.nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center space-y-10 text-white text-2xl font-semibold md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {links.map((link) => (
              <button key={link} onClick={() => scrollToSection(link)}>
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
