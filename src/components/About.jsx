import React from 'react';
import { motion } from 'framer-motion';
import faranImage from '../assets/farankhan.jpg';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBrain } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-white relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-500">
          About Me
        </h2>

        {/* Image + Text */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image */}
          <motion.img
            src={faranImage}
            alt="Faran Khan"
            className="w-72 h-72 rounded-xl object-cover shadow-xl"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />

          {/* Text */}
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg leading-relaxed text-gray-200">
              I'm <span className="font-semibold text-blue-400">Faran Khan</span>, a front-end developer passionate about building modern UIs using <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>JavaScript</strong>.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              I love turning ideas into responsive, user-friendly websites. I'm also diving deep into the world of <strong className="text-purple-400">Artificial Intelligence</strong> and integrating AI tools into real-world projects.
            </p>
          </motion.div>
        </div>

        {/* Skills / Tech Stack */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-white">
            Tech Stack I Love 
          </h3>

          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="flex flex-col items-center gap-2">
              <FaReact className="text-5xl text-blue-500 drop-shadow-glow" />
              <p className="text-sm font-medium">React</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiTailwindcss className="text-5xl text-teal-400 drop-shadow-glow" />
              <p className="text-sm font-medium">Tailwind</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaJs className="text-5xl text-yellow-400 drop-shadow-glow" />
              <p className="text-sm font-medium">JavaScript</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaHtml5 className="text-5xl text-orange-500 drop-shadow-glow" />
              <p className="text-sm font-medium">HTML</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaCss3Alt className="text-5xl text-blue-300 drop-shadow-glow" />
              <p className="text-sm font-medium">CSS</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaBrain className="text-5xl text-purple-400 drop-shadow-glow" />
              <p className="text-sm font-medium">AI / OpenAI</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll-down Arrow */}
      <motion.a
        href="#projects"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <motion.div
          className="p-2 rounded-full"
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{
            opacity: [0.8, 1, 0.8],
            scale: [1, 1.1, 1],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDownIcon className="w-8 h-8 text-blue-500 drop-shadow-[0_0_10px_#3b82f6]" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default About;
