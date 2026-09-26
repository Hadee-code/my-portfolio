import React from "react";
import profileData from "../data/profileData";
import Reveal from "./Reveal";

const socialIcons = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zM8.5 8h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.5V23h-4V8z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.9-.38 2.88-.39.98.01 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55C20.71 21.38 24 17.07 24 12c0-6.27-5.23-11.5-12-11.5z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
};

function Hero() {
  const { greeting, name, role, tagline, profileImage, cvFile, socials, stats } = profileData;

  return (
    <section id="home" className="w-full bg-[#0A0E17] px-6 md:px-10 lg:px-16 pt-10 pb-16 md:py-24 relative overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-14 relative z-10">

        {/* Text Content */}
        <div className="flex-1 max-w-[640px] text-center lg:text-left">
          
          <Reveal direction="down" delay={100}>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-sm mb-5">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <p className="text-slate-300 text-xs sm:text-sm font-medium">{greeting}</p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black mb-2 tracking-tight">
              {name}
            </h2>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-5 bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              {role}
            </h1>
          </Reveal>

          <Reveal direction="up" delay={400}>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {tagline}
            </p>
          </Reveal>

          {/* Social Icons */}
          <Reveal direction="up" delay={450}>
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-9">
              {socials.map((s) => {
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target={s.url.startsWith("http") ? "_blank" : undefined}
                    rel={s.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={s.label || s.name}
                    className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 hover:text-blue-400 hover:border-blue-500/60 hover:bg-slate-800/80 hover:-translate-y-0.5 transition-all shadow-sm"
                  >
                    {socialIcons[s.name] || <span>•</span>}
                  </a>
                );
              })}
            </div>
          </Reveal>

          {/* Action Buttons */}
          <Reveal direction="up" delay={500}>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-11">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
              >
                <span>Hire Me</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href={cvFile}
                download="Muhammad_Hadee_Butt_CV.pdf"
                className="border border-slate-700 bg-slate-900/60 text-slate-200 px-8 py-3.5 rounded-xl text-sm font-semibold hover:border-blue-500 hover:text-blue-400 hover:bg-slate-800/80 active:scale-95 transition-all inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download CV</span>
              </a>
            </div>
          </Reveal>

          {/* Stats Bar */}
          <Reveal direction="up" delay={550}>
            <div className="bg-[#131B2E]/90 border border-slate-800 rounded-2xl p-5 md:p-6 flex items-center justify-between sm:justify-start gap-6 sm:gap-10 w-full sm:w-fit shadow-xl shadow-black/30 mx-auto lg:mx-0">
              {stats.map((stat, i) => {
                return (
                  <React.Fragment key={stat.label}>
                    {i !== 0 && <div className="w-px h-10 bg-slate-800" />}
                    <div className="text-center sm:text-left">
                      <p className="text-blue-400 text-2xl md:text-3xl font-black tracking-tight">
                        {stat.value}
                      </p>
                      <p className="text-slate-400 text-xs md:text-sm font-medium mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Hero Image Container */}
        <Reveal direction="scale" delay={300} className="flex-1 flex justify-center items-end relative w-full max-w-[440px] h-[390px] sm:h-[470px] md:h-[510px]">
          {/* Subtle Blue Glow Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-blue-500/20 blur-3xl pointer-events-none animate-pulse-glow" />

          {/* Circular Backdrop Arch */}
          <div className="absolute bottom-0 w-[290px] sm:w-[350px] md:w-[380px] h-[290px] sm:h-[350px] md:h-[380px] rounded-full bg-gradient-to-b from-blue-600/30 via-[#131B2E] to-[#0A0E17] border border-blue-500/20 shadow-2xl" />

          {/* Muhammad Hadee Butt Portrait */}
          <img
            src={profileImage}
            alt={name}
            className="relative z-10 w-[280px] sm:w-[320px] md:w-[350px] h-[360px] sm:h-[440px] md:h-[480px] object-cover object-top scale-[1.14] origin-bottom rounded-t-[160px] transition-transform duration-500 hover:scale-[1.17]"
          />
        </Reveal>

      </div>
    </section>
  );
}

export default Hero;