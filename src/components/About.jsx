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
            Learn more about my background, technical skills, and passion for
            building modern web applications.
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
              I'm{" "}
              <span className="text-white font-semibold">
                Muhammad Faran Ullah Khan
              </span>
              , a Frontend Engineer specializing in React.js, Next.js,
              TypeScript, and Tailwind CSS. I enjoy building fast, responsive,
              and scalable web applications with clean, reusable UI components.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Through hands-on projects, I've built dashboard applications,
              e-commerce interfaces, and AI-powered web applications by
              integrating REST APIs and modern frontend technologies. My focus
              is on performance, accessibility, and delivering a great user
              experience.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              I'm currently expanding my skills in{" "}
              <span className="text-purple-400">
                Node.js, PostgreSQL, Supabase, authentication systems, and AI
                integration
              </span>{" "}
              while continuing to grow as a frontend engineer and future
              full-stack developer.
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