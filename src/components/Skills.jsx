import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaNodeJs,
  FaPython,
} from 'react-icons/fa';
import { SiTailwindcss, SiOpenai, SiTypescript } from 'react-icons/si';

const skills = [
  { icon: <FaReact title="React" />, name: 'React', color: 'text-sky-400' },
  { icon: <SiTailwindcss title="Tailwind CSS" />, name: 'Tailwind CSS', color: 'text-cyan-400' },
  { icon: <FaJs title="JavaScript" />, name: 'JavaScript', color: 'text-yellow-400' },
  { icon: <SiTypescript title="TypeScript" />, name: 'TypeScript', color: 'text-blue-500' },
  { icon: <FaHtml5 title="HTML5" />, name: 'HTML5', color: 'text-orange-500' },
  { icon: <FaCss3Alt title="CSS3" />, name: 'CSS3', color: 'text-blue-400' },
  { icon: <FaGithub title="GitHub" />, name: 'GitHub', color: 'text-gray-300' },
  { icon: <SiOpenai title="OpenAI / AI" />, name: 'OpenAI / AI', color: 'text-green-400' },
  { icon: <FaPython title="Python (Basic)" />, name: 'Python (Basic)', color: 'text-yellow-200' },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0f0f0f] py-24 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-14"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Tech Stack & Skills
          </span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <div className="bg-gradient-to-br from-blue-800/30 via-gray-800/30 to-purple-800/30 p-[2px] rounded-xl shadow-xl hover:scale-105 transition-transform duration-300">
                  <div className="bg-[#1a1a1a] rounded-xl py-6 px-4 flex flex-col items-center justify-center">
                    <div
                      className={`text-5xl drop-shadow-md mb-2 ${skill.color}`}
                    >
                      {skill.icon}
                    </div>
                    <p className="text-sm text-gray-300">{skill.name}</p>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
