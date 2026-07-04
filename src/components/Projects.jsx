import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Hoodify – E-commerce Application",
    description:
      "Responsive e-commerce application built with React and Tailwind CSS featuring reusable components, shopping cart functionality, and a mobile-first design.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://hoodify-eight.vercel.app/",
    github: "https://github.com/1faran-khandev/hoodify",
    image: "/images/hoodify.png",
  },
  {
    title: "BrickSpace – Real Estate Platform",
    description:
      "Real estate platform with property search, filtering, responsive layouts, and smooth user interactions built using React and Framer Motion.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://brickspace-real-estate.vercel.app/",
    github: "https://github.com/1faran-khandev/brickspace-real-estate",
    image: "/images/brickspace.png",
  },
  {
    title: "Crypto Dashboard",
    description:
      "Dashboard displaying real-time cryptocurrency market data through REST APIs with interactive charts and optimized client-side rendering.",
    technologies: ["React", "REST API", "Recharts"],
    link: "https://crypto-dashboard-green-seven.vercel.app/",
    github: "https://github.com/1faran-khandev/crypto-dashboard",
    image: "/images/crypto-dashboard.png",
  },
  {
    title: "AI Prompt Tool",
    description:
      "AI-powered application that integrates external APIs to generate prompts with asynchronous data fetching, error handling, and a responsive interface.",
    technologies: ["React", "REST API", "AI Integration"],
    link: "https://ai-prompt-tool-bay.vercel.app/",
    github: "https://github.com/1faran-khandev/ai-prompt-tool",
    image: "/images/prompt-tool.png",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-28 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Projects
            </span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            A selection of projects focused on responsive web applications,
            REST API integration, reusable UI components, and modern frontend
            development.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid gap-10 sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={card}
              className="group overflow-hidden rounded-2xl border border-gray-800 bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:border-white hover:text-white transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>
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
