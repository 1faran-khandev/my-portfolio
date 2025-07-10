import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Hi, I’m <span className="text-blue-500">Faran Khan</span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-300">
          <Typewriter
            words={[
              'Front-End Developer',
              'React + Tailwind Specialist',
              'Building Stunning UIs',
              'Exploring AI + OpenAI',
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
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