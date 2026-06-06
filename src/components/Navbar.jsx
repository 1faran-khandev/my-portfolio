import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const links = ["About", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const middle = window.innerHeight / 2;

      links.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= middle && rect.bottom >= middle) {
            setActiveLink(link);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <h1
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-semibold text-white cursor-pointer tracking-tight"
          >
            Faran<span className="text-blue-400">.dev</span>
          </h1>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            {links.map((link) => {
              const isActive = activeLink === link;

              return (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className={`relative transition ${
                      isActive ? "text-white" : "hover:text-white"
                    }`}
                  >
                    {link}

                    {/* underline */}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] w-full transition-all duration-300 ${
                        isActive
                          ? "bg-blue-400"
                          : "bg-transparent group-hover:bg-blue-400"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mobile button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-10 text-lg"
          >
            {links.map((link) => (
              <motion.button
                key={link}
                onClick={() => scrollToSection(link)}
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white transition"
              >
                {link}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}