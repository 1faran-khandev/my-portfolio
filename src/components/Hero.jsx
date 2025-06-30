import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-white text-black dark:bg-black dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-3xl shadow-lg border border-white/10 px-8 py-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-white drop-shadow-glow">
          Hi, I’m <span className="text-blue-500">Faran Khan</span>
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
          Front-End Developer | React, Tailwind, JavaScript | Building Responsive UIs | Exploring AI + OpenAI
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold shadow-lg hover:shadow-blue-500/50"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white transition-all font-semibold shadow-md hover:shadow-blue-500/50"
          >
            Let’s Talk
          </a>
        </div>
      </motion.div>

      {/* Scroll-down arrow */}
      <motion.a
        href="#about"
        className="absolute bottom-8 text-white"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDownIcon className="w-8 h-8 text-blue-500 drop-shadow-glow" />
      </motion.a>
    </section>
  );
};

export default Hero;
