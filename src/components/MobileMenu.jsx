import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

const links = ["About", "Projects", "Skills", "Contact"];

const MobileMenu = ({ setMenuOpen }) => {
  const menuRef = useRef();

  // Close on ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [setMenuOpen]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [setMenuOpen]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl"
      aria-label="Mobile navigation"
    >
      {/* Close button */}
      <button
        aria-label="Close menu"
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-gray-300 hover:text-white transition"
      >
        <XMarkIcon className="w-7 h-7" />
      </button>

      {/* Menu */}
      <div
        ref={menuRef}
        className="h-full flex flex-col items-center justify-center gap-10"
      >
        {links.map((link, i) => (
          <motion.button
            key={link}
            onClick={() => scrollToSection(link)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="text-2xl font-medium text-gray-300 hover:text-white transition"
          >
            {link}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileMenu;