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
      section.scrollIntoView({
        behavior: "smooth",
      });

      setMenuOpen(false);
    }
  };

  return (
    <>
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
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="text-xl font-bold tracking-tight text-white"
          >
            Faran <span className="text-blue-400">Khan</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 text-sm text-gray-300">
              {links.map((link) => {
                const active = activeLink === link;

                return (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link)}
                      className={`relative pb-1 transition-colors duration-200 ${
                        active
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link}

                      <span
                        className={`absolute left-0 bottom-0 h-[2px] transition-all duration-300 ${
                          active
                            ? "w-full bg-blue-400"
                            : "w-0 bg-blue-400 group-hover:w-full"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>

            <a
              href="/Muhammad_Faran_Ullah_Khan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-black/90 backdrop-blur-xl"
          >
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="text-xl text-gray-300 transition hover:text-white"
              >
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
