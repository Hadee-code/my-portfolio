import React from "react";
import profileData from "../data/profileData";
import Reveal from "./Reveal";

function About() {
  const { name, about, aboutImage, cvFile, email, phone, location, availability } = profileData;

  const infoItems = [
    { label: "Name", value: name },
    { label: "Role", value: "Junior MERN Stack Developer" },
    { label: "Education", value: "BSIT — University of Education" },
    { label: "Experience", value: "Techset Solutions (Full Stack)" },
    { label: "Location", value: location },
    { label: "Email", value: email },
    { label: "Phone", value: phone },
    { label: "Status", value: availability },
  ];

  return (
    <section id="about" className="w-full bg-[#0A0E17] px-6 md:px-10 lg:px-16 py-24 border-t border-slate-800/80 relative">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Image with modern frame */}
          <Reveal direction="left" delay={200} className="flex-1 w-full max-w-[460px] relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-indigo-600/10 to-transparent rounded-3xl blur-2xl -z-10" />

            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/80 bg-[#131B2E] shadow-2xl group">
              <img
                src={aboutImage}
                alt={name}
                className="w-full h-[480px] sm:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-transparent opacity-85" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#131B2E]/95 backdrop-blur-md border border-slate-700/80 rounded-xl p-4 flex items-center gap-4 shadow-xl">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Available for Opportunities</p>
                  <p className="text-blue-400 text-xs font-medium">Full Stack & MERN Specialist</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Bio & Info */}
          <div className="flex-1 text-left">
            <Reveal direction="up" delay={200}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-3.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">About Me</span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <h2 className="text-white text-3xl sm:text-4xl font-black tracking-tight mb-6">
                Engineering <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">High-Performance</span> Web Systems
              </h2>
            </Reveal>

            <Reveal direction="up" delay={400}>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {about}
              </p>
            </Reveal>

            {/* Quick Specs Grid */}
            <Reveal direction="up" delay={450}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 bg-[#131B2E] border border-slate-800/90 rounded-2xl p-6 shadow-lg">
                {infoItems.map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-slate-400 text-xs uppercase tracking-wider font-semibold">{item.label}</span>
                    <span className="text-slate-200 text-sm font-semibold mt-0.5 truncate">{item.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Action Buttons */}
            <Reveal direction="up" delay={500}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={cvFile}
                  download="Muhammad_Hadee_Butt_CV.pdf"
                  className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white px-7 py-3 rounded-xl text-sm font-semibold hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-blue-500/25 inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download CV</span>
                </a>

                <a
                  href="#contact"
                  className="border border-slate-700 bg-slate-900/60 text-slate-200 px-7 py-3 rounded-xl text-sm font-semibold hover:border-blue-500 hover:text-blue-400 active:scale-95 transition-all"
                >
                  Get In Touch
                </a>
              </div>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
