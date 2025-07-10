import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const links = ['About', 'Projects', 'Skills', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 250, damping: 20 }}
          whileHover={{ scale: 1.05 }}
        >
          Faran
          <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">.Dev</span>
        </motion.h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-white text-lg font-medium">
          {links.map((link, index) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 + 0.2 }}
            >
              <motion.a
                href={`#${link.toLowerCase()}`}
                className="group relative inline-block cursor-pointer"
                onMouseEnter={() => setActiveLink(link)}
                onMouseLeave={() => setActiveLink('')}
                whileHover={{ y: -1.5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <motion.span
                  className="relative z-10"
                  animate={{ color: activeLink === link ? '#3b82f6' : '#ffffff' }}
                >
                  {link}
                </motion.span>

                {/* Underline */}
                <motion.span
                  className="absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: activeLink === link ? '100%' : 0, opacity: activeLink === link ? 1 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />

                {/* Glow Blur */}
                <motion.span
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-md -z-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: activeLink === link ? 1 : 0,
                    scale: activeLink === link ? 1.1 : 0.9,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <motion.div
            animate={menuOpen ? { rotate: 180 } : { rotate: 0 }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
          >
            {menuOpen ? (
              <XMarkIcon
                aria-label="Close menu"
                className="h-8 w-8 text-white cursor-pointer hover:text-blue-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <Bars3Icon
                aria-label="Open menu"
                className="h-8 w-8 text-white cursor-pointer hover:text-blue-400 transition-colors"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen z-40 flex flex-col items-center justify-center space-y-12 text-white overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backdropFilter: 'blur(30px)',
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(30, 30, 30, 0.9) 50%, rgba(0, 0, 0, 0.95) 100%)',
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            {/* Blurred Background Orbs */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {/* Navigation Links */}
            <div className="relative z-10 flex flex-col items-center space-y-12">
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, scale: 0.8, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 20,
                    delay: i * 0.1,
                  }}
                  whileHover={{
                    scale: 1.1,
                    x: 10,
                    color: '#3b82f6',
                  }}
                  className="text-3xl font-bold transition-all duration-300 cursor-pointer relative"
                >
                  <span className="relative z-10 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text hover:from-blue-400 hover:via-purple-400 hover:to-blue-400 transition-all duration-300">
                    {link}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Animated Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full shadow-md"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    y: [0, -40, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
