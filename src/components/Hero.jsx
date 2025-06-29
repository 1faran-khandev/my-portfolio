import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Faran Khan</h1>
        <p className="text-lg">Front-End Developer | React, Tailwind, JavaScript | Building Responsive UIs | Exploring AI + OpenAI</p>
      </motion.div>
    </section>
  );
};

export default Hero;
