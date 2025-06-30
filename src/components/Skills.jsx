import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiOpenai } from 'react-icons/si';

const skills = [
  { icon: <FaReact className="text-sky-400" />, name: 'React' },
  { icon: <SiTailwindcss className="text-teal-400" />, name: 'Tailwind CSS' },
  { icon: <FaJs className="text-yellow-400" />, name: 'JavaScript (ES6+)' },
  { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML5' },
  { icon: <FaCss3Alt className="text-blue-400" />, name: 'CSS3' },
  { icon: <FaGithub className="text-gray-300" />, name: 'GitHub' },
  { icon: <SiOpenai className="text-green-400" />, name: 'OpenAI / AI' },
  { icon: <FaPython className="text-yellow-200" />, name: 'Python (basic)' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-500">Skills</h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-center items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-2 text-center hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">{skill.icon}</div>
              <p className="text-sm text-gray-300 mt-1">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

