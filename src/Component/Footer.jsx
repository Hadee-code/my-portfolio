import React from "react";
import profileData from "../data/profileData";
import Reveal from "./Reveal";

function Footer() {
  const { name, role, email, phone, location, socials, cvFile } = profileData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-[#070A10] text-slate-300 relative border-t border-slate-800">
      
      {/* High-Visibility Radiant Top Glowing Separator Line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.8)]" />

      {/* Pre-Footer Action Banner */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-16 pb-12">
        <Reveal direction="up" delay={100}>
          <div className="bg-gradient-to-r from-[#101726] via-[#141E33] to-[#101726] rounded-3xl p-8 sm:p-12 border border-slate-700/80 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="text-center lg:text-left max-w-xl">
              <span className="text-blue-400 text-xs font-bold uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                Let's Build Together
              </span>
              <h3 className="text-white text-2xl sm:text-3xl font-black mt-3 mb-2">
                Ready to Bring Your Vision to Life?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Looking for a skilled Junior MERN Stack Developer for your team or next project? Get in touch today.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2"
              >
                <span>Get In Touch</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href={cvFile}
                download="Muhammad_Hadee_Butt_CV.pdf"
                className="border border-slate-700 bg-slate-900/80 text-white font-semibold px-7 py-3.5 rounded-xl text-sm hover:border-blue-500 hover:text-blue-400 transition-all"
              >
                Download CV
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Main Footer Content */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-8 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <a href="#home" className="inline-flex items-center gap-2 group">
              <span className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors">
                Hadee<span className="text-blue-500">.</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Dev
              </span>
            </a>
            <p className="text-slate-300 text-sm leading-relaxed">
              {role} specializing in MERN stack web applications, Next.js, and modern databases.
            </p>
            <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Hire & Contracting</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <p className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-3">
              Quick Navigation
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-300 hover:text-blue-400 hover:translate-x-1 inline-block transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div>
            <p className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-3">
              Direct Contact
            </p>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <span className="block text-slate-400 text-xs font-semibold">Email</span>
                <a
                  href={`mailto:${email}`}
                  className="text-slate-200 hover:text-blue-400 transition-colors font-medium break-all"
                >
                  {email}
                </a>
              </li>
              <li>
                <span className="block text-slate-400 text-xs font-semibold">Phone</span>
                <a
                  href={`tel:${phone}`}
                  className="text-slate-200 hover:text-blue-400 transition-colors font-medium"
                >
                  {phone}
                </a>
              </li>
              <li>
                <span className="block text-slate-400 text-xs font-semibold">Location</span>
                <span className="text-slate-200 font-medium">{location}</span>
              </li>
            </ul>
          </div>

          {/* Social Profiles & Scroll To Top */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-3">
                Social Profiles
              </p>
              <div className="flex flex-wrap gap-2.5 mb-6">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target={s.url.startsWith("http") ? "_blank" : undefined}
                    rel={s.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="px-3.5 py-2 rounded-xl bg-[#131B2E] border border-slate-700/80 hover:border-blue-500 text-slate-200 hover:text-blue-400 text-xs font-semibold transition-all shadow-sm"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="w-full bg-[#131B2E] border border-slate-700 hover:border-blue-500 text-slate-200 hover:text-blue-400 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:-translate-y-0.5"
              >
                <span>Back to Top</span>
                <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} <span className="text-white font-medium">{name}</span>. All rights reserved.
          </p>

          <p className="text-slate-400">
            Engineered with <span className="text-blue-400 font-semibold">React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
