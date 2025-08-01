import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-black text-white px-4 overflow-hidden"
      role="banner"
      aria-label="Hero Section"
    >
      {/* Glow Background */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px] top-[-150px] left-[-150px] z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px] bottom-[-150px] right-[-150px] z-0"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl text-center relative z-10"
      >
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

        <p className="text-gray-400 max-w-xl mx-auto mb-6 text-sm md:text-base">
          I craft responsive, fast, and modern web interfaces using tools like React, Tailwind CSS, and AI APIs. Let's build something amazing together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all text-white font-semibold shadow-md hover:shadow-blue-500/50"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white transition-all font-semibold shadow-md hover:shadow-blue-500/50"
          >
            Let’s Talk
          </a>
          <a
            href="/Faran_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all font-semibold shadow-md"
          >
            View Resume
          </a>
        </div>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.a
        href="#about"
        className="absolute bottom-8 text-white z-10"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        whileHover={{ scale: 1.2 }}
        aria-label="Scroll to About section"
      >
        <ChevronDownIcon className="w-8 h-8 text-blue-500 drop-shadow-md" />
      </motion.a>
    </section>
  );
};

export default Hero;
