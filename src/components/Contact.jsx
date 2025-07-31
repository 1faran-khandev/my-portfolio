import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    setIsSending(true);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('✅ Message sent successfully!');
        form.reset();
      } else {
        setStatus('❌ Something went wrong. Try again.');
      }
    } catch (error) {
      setStatus('❌ Network error. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-4 text-blue-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Connect
        </motion.h2>
        <motion.div
          className="w-16 h-[3px] mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
        />

        <motion.p
          className="text-gray-400 text-lg mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Have a project or idea in mind? Let’s build something awesome together.
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mb-12 text-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {[
            {
              href: 'https://github.com/1faran-khandev',
              icon: <FaGithub />,
              label: 'GitHub',
            },
            {
              href: 'https://linkedin.com/in/1farankhan',
              icon: <FaLinkedin />,
              label: 'LinkedIn',
            },
            {
              href: 'mailto:farankhan7067@gmail.com',
              icon: <EnvelopeIcon className="h-7 w-7" />,
              label: 'Email',
            },
          ].map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="hover:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 transition duration-300 hover:scale-110"
              whileHover={{ y: -4 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-black border border-gray-800 p-6 md:p-8 rounded-2xl shadow-lg max-w-xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form
            action="https://formspree.io/f/mkgbdwde"
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            aria-label="Contact form"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              aria-label="Your name"
              required
              className="bg-black border border-gray-700 text-white placeholder-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              aria-label="Your email"
              required
              className="bg-black border border-gray-700 text-white placeholder-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              aria-label="Your message"
              required
              className="bg-black border border-gray-700 text-white placeholder-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            ></textarea>
            <button
              type="submit"
              disabled={isSending}
              className={`${
                isSending
                  ? 'bg-blue-800 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              } text-white py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-blue-500/30 font-semibold`}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Status Message */}
          {status && (
            <motion.p
              className={`mt-4 text-sm font-medium ${
                status.includes('✅') ? 'text-green-400' : 'text-red-400'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              aria-live="polite"
            >
              {status}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
