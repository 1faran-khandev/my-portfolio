import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

// Project Data
const projects = [
  {
    title: 'Hoodify – Hoodie eCommerce',
    description:
      'A modern hoodie eCommerce store built with React and Tailwind CSS. Features animated hero, add-to-cart UI, and responsive design.',
    link: 'https://hoodify-eight.vercel.app/',
    github: 'https://github.com/1faran-khandev/hoodify',
    image: '/images/hoodify.png',
  },
  {
    title: 'BrickSpace – Real Estate Web App',
    description:
      'A responsive real estate platform where users can explore, filter, and view property listings. Built with React and Tailwind CSS.',
    link: 'https://brickspace-real-estate.vercel.app/',
    github: 'https://github.com/1faran-khandev/brickspace-real-estate',
    image: '/images/brickspace.png',
  },
  {
    title: 'Crypto Dashboard',
    description:
      'A real-time crypto dashboard showing live market data, charts, and coin tracking UI built with React.',
    link: 'https://crypto-dashboard-green-seven.vercel.app/',
    github: 'https://github.com/1faran-khandev/crypto-dashboard',
    image: '/images/crypto-dashboard.png',
  },
  {
    title: 'AI Prompt Tool',
    description:
      'Tool built using Cohere + React to generate optimized prompts for AI use cases.',
    link: 'https://ai-prompt-tool-bay.vercel.app/',
    github: 'https://github.com/1faran-khandev/ai-prompt-tool',
    image: '/images/prompt-tool.png',
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
      <div className="max-w-7xl mx-auto px-6">
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
              {/* Project Image or Placeholder */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-700 text-center flex items-center justify-center text-gray-400 italic">
                  No Image Available
                </div>
              )}

              {/* Text Content */}
              <div className="p-6 flex flex-col justify-between min-h-[220px]">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto flex-wrap">
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
