import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const links = ['About', 'Projects', 'Skills', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'bg-black/70 backdrop-blur-xl shadow-xl' : 'bg-transparent'
        }`}
      >
        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          Faran<span className="text-blue-500">.Dev</span>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 text-white text-lg font-medium">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="group relative inline-block transition duration-300"
              >
                <span className="group-hover:-translate-y-1 inline-block transition-transform duration-300">
                  {link}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
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
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-black/90 to-black/80 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-12 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                variants={linkVariants}
                initial="initial"
                animate="animate"
                custom={i}
                className="text-2xl font-semibold hover:text-blue-400 transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

