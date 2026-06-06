import React from "react";
import { motion } from "framer-motion";
import faranImage from "../assets/farankhan.jpg";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f2937,transparent_60%)] opacity-60" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Me
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            A quick introduction about who I am, what I build, and what I’m learning.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src={faranImage}
                alt="Faran Khan"
                className="w-72 h-72 object-cover rounded-2xl shadow-2xl border border-gray-800"
              />

              {/* subtle glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-xl -z-10" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 leading-relaxed">
              I’m <span className="text-white font-semibold">Faran Khan</span>,
              a frontend developer focused on building modern, fast, and responsive web interfaces.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              I enjoy turning ideas into real products using React and Tailwind CSS. My focus is clean UI, performance, and user experience, not just “pretty design”.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Currently exploring{" "}
              <span className="text-purple-400">AI integrations</span> and building smarter web apps using APIs and automation tools.
            </p>
          </motion.div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <ChevronDownIcon className="w-6 h-6" />
      </motion.a>
    </section>
  );
};

export default About;