import React from 'react';
import { motion } from 'framer-motion';

const links = ['About', 'Projects', 'Skills', 'Contact'];

const MobileMenu = ({ setMenuOpen }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen z-40 flex flex-col items-center justify-center space-y-12 text-white bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 backdrop-blur-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
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
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileMenu;
