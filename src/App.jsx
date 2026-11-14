import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import CareerTrajectory from "./Component/CareerTrajectory";
import Portfolio from "./Component/Portfolio";
import Skills from "./Component/Skills";
import EducationCertifications from "./Component/EducationCertifications";
import Footer from "./Component/Footer";
import CinematicSection from "./Component/CinematicSection";
import ToastProvider from "./Component/Toast";
import SmoothScrollProvider from "./Component/SmoothScroll";
import CursorAndAmbience from "./Component/CursorAndAmbience";

function App() {
  return (
    <ToastProvider>
      <SmoothScrollProvider>
        <div className="min-h-screen bg-[#F3F3F3] text-[#111111] flex flex-col selection:bg-[#111111] selection:text-white overflow-x-hidden relative font-sans">
          
          {/* Dynamic Ambient Color Shifts & Subtle Custom Cursor */}
          <CursorAndAmbience />

          <Navbar />
        
          {/* 3D Cinematic Directional Scroll Stage */}
          <main className="flex-1 relative w-full overflow-x-clip" style={{ perspective: "1400px" }}>
            
            {/* Section 01: Hero Section */}
            <CinematicSection
              id="section-hero"
              zIndex={10}
              enableEnter={false}
              enableExit={true}
              exitDirection="top-to-bottom"
            >
              <Hero />
            </CinematicSection>

            {/* Section 02: Engineering Profile */}
            <CinematicSection
              id="section-profile"
              zIndex={20}
              enableEnter={true}
              enterDirection="top-to-bottom"
              enableExit={true}
              exitDirection="left-to-right"
            >
              <About />
            </CinematicSection>

            {/* Section 03: Career Trajectory */}
            <CinematicSection
              id="section-career"
              zIndex={30}
              enableEnter={true}
              enterDirection="left-to-right"
              enableExit={true}
              exitDirection="right-to-left"
            >
              <CareerTrajectory />
            </CinematicSection>

            {/* Section 04: Engineering Showcase */}
            <CinematicSection
              id="section-showcase"
              zIndex={40}
              enableEnter={true}
              enterDirection="right-to-left"
              enableExit={true}
              exitDirection="bottom-to-top"
            >
              <Portfolio />
            </CinematicSection>

            {/* Section 05: Technical Arsenal */}
            <CinematicSection
              id="section-arsenal"
              zIndex={50}
              enableEnter={true}
              enterDirection="bottom-to-top"
              enableExit={true}
              exitDirection="left-to-right"
            >
              <Skills />
            </CinematicSection>

            {/* Section 06: Education & Certifications */}
            <CinematicSection
              id="section-education"
              zIndex={60}
              enableEnter={true}
              enterDirection="left-to-right"
              enableExit={true}
              exitDirection="bottom-to-top"
            >
              <EducationCertifications />
            </CinematicSection>

          </main>

          {/* Section 07: Consolidated Footer (with integrated Contact & Inquiries) */}
          <div className="relative z-[70]">
            <Footer />
          </div>

        </div>
      </SmoothScrollProvider>
    </ToastProvider>
  );
}

export default App;
