import React from 'react';
import { motion } from 'framer-motion';
import faranImage from '../assets/farankhan.jpg';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBrain } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-black text-white relative overflow-hidden"
      role="region"
      aria-label="About Section"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-extrabold text-center mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-md">
            About Me
          </span>
          <motion.span
            className="absolute left-1/2 transform -translate-x-1/2 mt-2 h-[3px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.h2>

        {/* Image + Text */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <motion.img
            src={faranImage}
            alt="Faran Khan portrait"
            className="w-64 h-64 md:w-72 md:h-72 rounded-xl object-cover shadow-xl"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />

          {/* Bio Text */}
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg leading-relaxed text-gray-300 mb-4">
              I’m <span className="text-blue-500 font-semibold">Faran Khan</span>, a front-end developer focused on building responsive, beautiful, and accessible UIs using{' '}
              <span className="text-sky-400 font-medium">React</span>,{' '}
              <span className="text-cyan-400 font-medium">Tailwind CSS</span>, and{' '}
              <span className="text-yellow-400 font-medium">JavaScript (ES6+)</span>.
            </p>
            <p className="text-base text-gray-400 mb-4">
              I love transforming ideas into clean and user-friendly digital experiences. From e-commerce stores to AI tools, I build with performance and elegance in mind.
            </p>
            <p className="text-base text-gray-400">
              Currently, I’m exploring the power of{' '}
              <span className="text-purple-400 font-medium">AI and OpenAI APIs</span> to create smarter, more interactive web applications. I'm always open to learning, collaborating, and solving real-world problems through code.
            </p>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-10 text-white">
            Tech Stack I Love
          </h3>

          <motion.div
            className="flex flex-wrap justify-center gap-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {[
              { icon: <FaReact />, name: 'React', color: 'text-blue-500' },
              { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: 'text-cyan-400' },
              { icon: <FaJs />, name: 'JavaScript', color: 'text-yellow-400' },
              { icon: <FaHtml5 />, name: 'HTML5', color: 'text-orange-500' },
              { icon: <FaCss3Alt />, name: 'CSS3', color: 'text-blue-300' },
              { icon: <FaBrain />, name: 'AI / OpenAI', color: 'text-purple-400' },
            ].map((tech, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300 group"
              >
                <div className={`text-5xl drop-shadow-[0_0_12px_rgba(59,130,246,0.3)] group-hover:blur-[1px] transition-all ${tech.color}`}>
                  {tech.icon}
                </div>
                <p className="text-sm font-medium text-gray-300">{tech.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll-down arrow */}
      <motion.a
        href="#projects"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        aria-label="Scroll to Projects section"
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
          <ChevronDownIcon className="w-8 h-8 text-blue-500 drop-shadow-md" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default About;
