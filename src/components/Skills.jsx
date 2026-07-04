import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  { icon: <FaReact />, name: "React", color: "text-sky-400" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
  { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-500" },
  { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-400" },
  { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
  { icon: <FaPython />, name: "Python", color: "text-yellow-300" },
  { icon: <FaGithub />, name: "Git & GitHub", color: "text-gray-300" },
  { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-400" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-28 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Tech Stack
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Technologies I use to build responsive, scalable, and modern web
            applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <div className="group rounded-xl border border-gray-800 bg-white/5 p-6 hover:bg-white/10 transition">
                <div
                  className={`text-4xl mb-3 flex justify-center ${skill.color}`}
                >
                  {skill.icon}
                </div>

                <p className="text-sm text-gray-300 group-hover:text-white transition">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
