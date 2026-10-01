import React from "react";
import profileData from "../data/profileData";
import Reveal from "./Reveal";

function About() {
  const { name, about, cvFile, email, phone, location, availability } = profileData;

  const infoItems = [
    {
      label: "Full Name",
      value: name,
      icon: (
        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      label: "Role",
      value: "Junior MERN Stack Developer",
      icon: (
        <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      label: "Education",
      value: "BSIT — University of Education",
      icon: (
        <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
    },
    {
      label: "Experience",
      value: "Techset Solutions (Full Stack)",
      icon: (
        <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: "Location",
      value: location,
      icon: (
        <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      label: "Status",
      value: availability,
      icon: (
        <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: "Email",
      value: email,
      icon: (
        <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: phone,
      icon: (
        <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
  ];

  const pillars = [
    {
      title: "Full-Stack Web Architecture",
      desc: "End-to-end resilient MERN & Next.js systems engineered with reusable components, fast load times, and clean routing.",
      badge: "Architecture",
      color: "from-blue-600 to-indigo-600",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "API & Data Modeling",
      desc: "Structured RESTful APIs using Node.js & Express.js paired with normalized PostgreSQL (Prisma) and flexible MongoDB schemas.",
      badge: "Backend & DB",
      color: "from-indigo-600 to-sky-600",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      title: "Production Security & Polish",
      desc: "JWT authentication, token lifecycles, role-based access control, input validation, and pixel-perfect responsive Tailwind styling.",
      badge: "Security & UI",
      color: "from-sky-600 to-blue-600",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="w-full bg-[#0A0E17] px-6 md:px-10 lg:px-16 py-24 border-t border-slate-800/80 relative overflow-hidden">
      {/* Background Ambient Breathing Lights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        
        {/* Spacious Panoramic Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal direction="down" delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Engineering Profile</span>
            </div>
          </Reveal>
          
          <Reveal direction="clip-up" delay={200}>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6">
              Architecting <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">High-Performance</span> Web Systems
            </h2>
          </Reveal>
          
          <Reveal direction="up" delay={300}>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {about}
            </p>
          </Reveal>
        </div>

        {/* 3 Panoramic Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {pillars.map((pillar, idx) => (
            <Reveal key={pillar.title} direction="up" delay={150 * (idx + 1)}>
              <div className="group h-full bg-[#131B2E] rounded-3xl p-7 sm:p-8 border border-slate-800/90 hover:border-blue-500/60 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/15 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500`}>
                      {pillar.icon}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-white text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Spacious 4-Column Luxury Specs Grid */}
        <Reveal direction="up" delay={300}>
          <div className="bg-[#131B2E]/90 border border-slate-800/90 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-md mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-800/80 gap-4">
              <div>
                <span className="text-blue-400 text-xs font-bold uppercase tracking-wider block mb-1">
                  Professional Breakdown
                </span>
                <h3 className="text-white text-2xl font-black">
                  Core Engineering Profile & Attributes
                </h3>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold self-start sm:self-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Available for Opportunities</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {infoItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-3.5 p-4 rounded-2xl bg-[#0A0E17]/70 border border-slate-800/80 hover:border-blue-500/50 hover:bg-[#0A0E17] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold block">
                      {item.label}
                    </span>
                    <span className="text-slate-200 text-sm font-bold mt-0.5 block truncate group-hover:text-blue-400 transition-colors">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Centered Actions Bar */}
        <Reveal direction="up" delay={400}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={cvFile}
              download="Muhammad_Hadee_Butt_CV.pdf"
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl text-sm hover:brightness-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-lg shadow-blue-500/25 inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download CV</span>
            </a>

            <a
              href="#contact"
              className="border border-slate-700 bg-slate-900/80 text-slate-200 px-8 py-3.5 rounded-xl text-sm font-semibold hover:border-blue-500 hover:text-blue-400 hover:bg-slate-800 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default About;
