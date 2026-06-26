import React from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white px-6 overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f2937,transparent_60%)] opacity-60" />

      {/* Soft grid overlay (modern SaaS feel) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl text-center"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gray-700 text-gray-400 text-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Open to Frontend & AI Engineering Opportunities
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Faran Khan
          </span>
        </h1>

        {/* Role */}
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          Frontend Engineer specializing in React.js, Next.js, TypeScript, and
          Tailwind CSS.
        </p>

        {/* Skills line */}
        <p className="mt-3 text-sm text-gray-500">
          React.js • Next.js • TypeScript • Tailwind CSS • REST APIs • AI Integration
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition-all"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-gray-600 text-gray-300 hover:border-white hover:text-white transition-all"
          >
            Let's Connect
          </a>
        </div>

        {/* Social proof / small note */}
        <p className="mt-6 text-xs text-gray-600">
          Building responsive web applications, AI-powered interfaces, and modern user experiences.
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-6 text-gray-400 hover:text-white transition"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <ChevronDownIcon className="w-6 h-6" />
      </motion.a>
    </section>
  );
};

export default Hero;
