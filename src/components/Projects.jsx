import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

// Project Data with Images
const projects = [
  {
    title: 'Hoodie Website',
    description: 'A modern e-commerce site to sell hoodies with animations and full responsiveness.',
    link: 'https://1faran-khandev.github.io/Hoodie-website/',
    github: 'https://github.com/1faran-khandev/Hoodie-website',
    image: '/images/hoodie.png', 
  },
  {
    title: 'AI Prompt Tool',
    description: 'An AI-powered tool for generating high-quality prompts for ChatGPT and other models.',
    link: 'https://ai-prompt-tool-bay.vercel.app/',
    github: 'https://github.com/1faran-khandev/ai-prompt-tool',
    image: '/images/prompt-tool.png',
  },
  {
    title: 'Weather App (In Progress)',
    description: 'A React-based weather app using OpenWeather API. Still in development.',
    link: '',
    github: '',
  },
];

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-500">
          My Projects
        </h2>

        {/* Project Grid */}
        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ scale: 1.03 }}
              className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all hover:shadow-[0_0_20px_#3b82f6]"
            >
              {/* Project Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}

              {/* Text Content */}
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                    >
                      Visit Site
                    </a>
                  ) : (
                    <span className="text-gray-500 italic">Coming Soon</span>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-1.5 text-sm border border-gray-500 text-gray-300 hover:text-white hover:border-white rounded-full"
                    >
                      <FaGithub className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
