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
        {/* Heading */}
        <h1
          role="heading"
          aria-level="1"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4"
        >
          Hi, I’m{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-md">
            Faran Khan
          </span>
        </h1>

        {/* Typewriter Role Titles */}
        <h2 className="text-lg md:text-2xl font-medium mb-4 text-gray-300">
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

        {/* Optional Summary */}
        <p className="text-gray-400 max-w-xl mx-auto mb-6 text-sm md:text-base">
          I build responsive, fast, and modern websites using cutting-edge tech like React, Tailwind CSS, and AI tools. Let’s collaborate and create something impactful.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold shadow-md hover:shadow-blue-500/50"
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
        whileHover={{ scale: 1.2 }}
      >
        <ChevronDownIcon className="w-8 h-8 text-blue-500 drop-shadow-md" />
      </motion.a>
    </section>
  );
};

export default Hero;
