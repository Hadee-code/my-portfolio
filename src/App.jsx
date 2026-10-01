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
import CinematicSection from "./Component/CinematicSection";

function App() {
  return (
    <div className="min-h-screen bg-[#0A0E17] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <Navbar />
      
      {/* 3D Cinematic Directional Scroll Stage */}
      <main className="flex-1 relative w-full overflow-x-clip" style={{ perspective: "1400px" }}>
        
        {/* Section 1: Hero */}
        <CinematicSection
          zIndex={10}
          enableEnter={false}
          enableExit={true}
          exitDirection="top-to-bottom"
        >
          <Hero />
        </CinematicSection>

        {/* Section 2: Services -> Transition 1: TOP TO BOTTOM */}
        <CinematicSection
          zIndex={20}
          enableEnter={true}
          enterDirection="top-to-bottom"
          enableExit={true}
          exitDirection="left-to-right"
        >
          <Services />
        </CinematicSection>

        {/* Section 3: About -> Transition 2: LEFT TO RIGHT */}
        <CinematicSection
          zIndex={30}
          enableEnter={true}
          enterDirection="left-to-right"
          enableExit={true}
          exitDirection="right-to-left"
        >
          <About />
        </CinematicSection>

        {/* Section 4: Skills -> Transition 3: RIGHT TO LEFT */}
        <CinematicSection
          zIndex={40}
          enableEnter={true}
          enterDirection="right-to-left"
          enableExit={true}
          exitDirection="bottom-to-top"
        >
          <Skills />
        </CinematicSection>

        {/* Section 5: Portfolio -> Transition 4: BOTTOM TO TOP */}
        <CinematicSection
          zIndex={50}
          enableEnter={true}
          enterDirection="bottom-to-top"
          enableExit={true}
          exitDirection="top-to-bottom"
        >
          <Portfolio />
        </CinematicSection>

        {/* Section 6: Experience -> Transition 5: TOP TO BOTTOM (Sequence Repeated) */}
        <CinematicSection
          zIndex={60}
          enableEnter={true}
          enterDirection="top-to-bottom"
          enableExit={true}
          exitDirection="left-to-right"
        >
          <Experience />
        </CinematicSection>

        {/* Section 7: Contact -> Transition 6: LEFT TO RIGHT (Sequence Repeated) */}
        <CinematicSection
          zIndex={70}
          enableEnter={true}
          enterDirection="left-to-right"
          enableExit={true}
          exitDirection="right-to-left"
        >
          <Contact />
        </CinematicSection>

      </main>

      <div className="relative z-[80]">
        <Footer />
      </div>
    </div>
  );
}

export default App;