import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Hoodie Website',
    description: 'A modern e-commerce site for selling hoodies with full responsiveness and animations.',
    link: 'https://1faran-khandev.github.io/Hoodie-website/',
  },
  {
    title: 'AI Prompt Tool',
    description: 'An AI-powered tool to generate high-quality prompts for ChatGPT and other models.',
    link: 'https://ai-prompt-tool-bay.vercel.app/',
  },
  {
    title: 'Weather App',
    description: 'A weather forecast app built with React, Tailwind, and OpenWeather API.',
    link: 'https://your-weather-app.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700">{project.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
