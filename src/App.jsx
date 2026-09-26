import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Services from "./Component/Services";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Portfolio from "./Component/Portfolio";
import Experience from "./Component/Experience";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0A0E17] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;