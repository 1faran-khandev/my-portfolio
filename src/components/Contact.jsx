import React, { useState } from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setIsSending(true);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch {
      setStatus("Network error. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Let’s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Work Together
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Have a project idea, startup, or freelance opportunity? I’m open to
            building modern web experiences.
          </p>
        </motion.div>

        {/* Socials */}
        <motion.div
          className="flex justify-center gap-6 mt-10 text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://github.com/1faran-khandev"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:your@email.com"
            className="text-gray-400 hover:text-white transition"
          >
            <EnvelopeIcon className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="mt-12 max-w-2xl mx-auto rounded-2xl border border-gray-800 bg-white/5 backdrop-blur-md p-8 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form
            action="https://formspree.io/f/mkgbdwde"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-black/40 border border-gray-800 text-white focus:border-blue-500 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-black/40 border border-gray-800 text-white focus:border-blue-500 focus:outline-none"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              required
              className="w-full p-3 rounded-lg bg-black/40 border border-gray-800 text-white focus:border-blue-500 focus:outline-none"
            />

            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-3 rounded-lg font-medium transition ${
                isSending
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Status */}
          {status && (
            <p
              className={`mt-4 text-sm ${
                status.includes("successfully")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;