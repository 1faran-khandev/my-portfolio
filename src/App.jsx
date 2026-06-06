import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white font-sans scroll-smooth antialiased">
      
      {/* Navigation */}
      <Navbar />

      {/* Page */}
      <main className="relative">

        {/* HERO */}
        <section >
          <Hero />
        </section>

        {/* ABOUT */}
        <section className="py-24">
          <About />
        </section>

        {/* SKILLS */}
        <section className="py-24">
          <Skills />
        </section>

        {/* PROJECTS */}
        <section className="py-24">
          <Projects />
        </section>

        {/* CONTACT */}
        <section className="py-24">
          <Contact />
        </section>

      </main>
    </div>
  );
}

export default App;