import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

const links = ['About', 'Projects', 'Skills', 'Contact'];

const MobileMenu = ({ setMenuOpen }) => {
  const menuRef = useRef();
  const firstLinkRef = useRef(null);

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [setMenuOpen]);

  // Close if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setMenuOpen]);

  // Auto focus first link
  useEffect(() => {
    firstLinkRef.current?.focus();
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen z-50 bg-black/90 backdrop-blur-lg"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      aria-label="Mobile navigation"
    >
      {/* Close Button */}
      <button
        aria-label="Close menu"
        className="absolute top-5 right-6 text-white"
        onClick={() => setMenuOpen(false)}
      >
        <XMarkIcon className="h-8 w-8" />
      </button>

      {/* Nav Links */}
      <div
        ref={menuRef}
        className="h-full flex flex-col justify-center items-center space-y-12 text-white"
      >
        {links.map((link, i) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            ref={i === 0 ? firstLinkRef : null}
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 18,
              delay: i * 0.08,
            }}
            className="text-3xl font-extrabold cursor-pointer relative focus:outline-none"
          >
            <span className="relative z-10 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent hover:from-blue-400 hover:via-purple-400 hover:to-blue-400 transition-all duration-300">
              {link}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileMenu;
