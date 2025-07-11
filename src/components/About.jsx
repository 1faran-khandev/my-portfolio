import React from 'react';
import { motion } from 'framer-motion';
import faranImage from '../assets/farankhan.jpg';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBrain } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black text-white relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-md">
            About Me
          </span>
        </h2>

        {/* Image + Text */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <motion.img
            src={faranImage}
            alt="Faran Khan"
            className="w-64 h-64 md:w-72 md:h-72 rounded-xl object-cover shadow-xl"
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
            <p className="text-lg leading-relaxed text-gray-300 mb-4">
              I’m{' '}
              <span className="text-blue-500 font-semibold">
                Faran Khan
              </span>
              , a front-end developer focused on building responsive, beautiful, and accessible UIs using{' '}
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
              { icon: <FaReact className="text-blue-500" />, name: 'React' },
              { icon: <SiTailwindcss className="text-cyan-400" />, name: 'Tailwind CSS' },
              { icon: <FaJs className="text-yellow-400" />, name: 'JavaScript' },
              { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML5' },
              { icon: <FaCss3Alt className="text-blue-300" />, name: 'CSS3' },
              { icon: <FaBrain className="text-purple-400" />, name: 'AI / OpenAI' },
            ].map((tech, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
              >
                <div className="text-5xl drop-shadow-[0_0_12px_rgba(59,130,246,0.4)]">
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
