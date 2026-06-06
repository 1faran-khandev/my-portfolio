import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Hoodify – Hoodie eCommerce",
    description:
      "Modern eCommerce UI built with React + Tailwind. Focused on clean UX, cart flow, and responsive design.",
    link: "https://hoodify-eight.vercel.app/",
    github: "https://github.com/1faran-khandev/hoodify",
    image: "/images/hoodify.png",
  },
  {
    title: "BrickSpace – Real Estate Platform",
    description:
      "Real estate listing UI with filtering system and responsive property browsing experience.",
    link: "https://brickspace-real-estate.vercel.app/",
    github: "https://github.com/1faran-khandev/brickspace-real-estate",
    image: "/images/brickspace.png",
  },
  {
    title: "Crypto Dashboard",
    description:
      "Live crypto tracking dashboard with real-time data UI and clean analytics layout.",
    link: "https://crypto-dashboard-green-seven.vercel.app/",
    github: "https://github.com/1faran-khandev/crypto-dashboard",
    image: "/images/crypto-dashboard.png",
  },
  {
    title: "AI Prompt Tool",
    description:
      "AI-powered prompt generator built with React + API integration for better AI outputs.",
    link: "https://ai-prompt-tool-bay.vercel.app/",
    github: "https://github.com/1faran-khandev/ai-prompt-tool",
    image: "/images/prompt-tool.png",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-28 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            A selection of projects focused on UI design, performance, and real-world usability.
          </p>
        </div>

        {/* Grid */}
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
              className="group rounded-2xl overflow-hidden border border-gray-800 bg-white/5 hover:bg-white/10 transition"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-3 mt-6">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
                    >
                      Live Demo
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-gray-700 text-gray-300 hover:border-white hover:text-white transition"
                    >
                      <FaGithub />
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