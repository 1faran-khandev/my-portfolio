import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaNodeJs,
  FaPython,
} from 'react-icons/fa';
import { SiTailwindcss, SiOpenai } from 'react-icons/si';

const skills = [
  { icon: <FaReact className="text-sky-400" />, name: 'React' },
  { icon: <SiTailwindcss className="text-cyan-400" />, name: 'Tailwind CSS' },
  { icon: <FaJs className="text-yellow-400" />, name: 'JavaScript (ES6+)' },
  { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML5' },
  { icon: <FaCss3Alt className="text-blue-400" />, name: 'CSS3' },
  { icon: <FaGithub className="text-gray-300" />, name: 'GitHub' },
  { icon: <SiOpenai className="text-green-400" />, name: 'OpenAI / AI' },
  { icon: <FaPython className="text-yellow-200" />, name: 'Python (basic)' },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-md">
            My Skills
          </span>
        </h2>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-1 drop-shadow-[0_0_12px_rgba(59,130,246,0.4)]">
                {skill.icon}
              </div>
              <p className="text-sm text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
