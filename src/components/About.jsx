import React from 'react';
import { motion } from 'framer-motion';
import faranImage from '../assets/farankhan.jpg'; 

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">About Me</h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image */}
          <motion.img
            src={faranImage}
            alt="Faran Khan"
            className="w-72 h-72 rounded-xl object-cover shadow-lg"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />

          {/* Text */}
          <motion.div
            className="md:w-3/5 text-gray-700 text-base leading-relaxed"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4">
              Hi, I'm <span className="font-semibold text-blue-600">Faran Khan</span>, a passionate front-end developer and AI enthusiast from Pakistan 🇵🇰.
             </p><p> I specialize in building modern, responsive websites using <span className="font-medium">React</span> and <span className="font-medium">Tailwind CSS</span>.
            </p>
            <p className="mb-4">
              I'm also diving into the world of <span className="font-medium">Artificial Intelligence</span>, exploring how it can be used in real-world applications.
              I enjoy learning new tools, experimenting with creative ideas, and building cool things on the web.
            
              I'm open to freelance work, internships, and collaborations. Let's connect and build something awesome together!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
