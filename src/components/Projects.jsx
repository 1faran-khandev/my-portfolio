import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

// Project Data
const projects = [
  {
    title: 'Hoodie Website',
    description: 'A modern e-commerce site for selling hoodies with full responsiveness and animations.',
    link: 'https://1faran-khandev.github.io/Hoodie-website/',
    github: 'https://github.com/1faran-khandev/Hoodie-website',
  },
  {
    title: 'AI Prompt Tool',
    description: 'An AI-powered tool to generate high-quality prompts for ChatGPT and other models.',
    link: 'https://ai-prompt-tool-bay.vercel.app/',
    github: 'https://github.com/1faran-khandev/ai-prompt-tool',
  },
  {
    title: 'Weather App (In Progress)',
    description: 'A weather forecast app built with React and OpenWeather API. Currently under development.',
    link: '',
    github: '',
  },
];

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // Delay between each card
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-500">
          My Projects
        </h2>

        {/* Project Grid with Stagger Animation */}
        <motion.div
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={card}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_20px_#3b82f6]"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex gap-4 mt-auto">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all"
                  >
                    Visit Site
                  </a>
                ) : (
                  <span className="text-gray-400 italic">Coming Soon</span>
                )}

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-500 text-gray-300 hover:text-white hover:border-white transition-all text-sm"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </a>
                ) : null}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
