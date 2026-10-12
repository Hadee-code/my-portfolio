import React, { useState, useEffect } from "react";
import { Download, Sparkles, Menu, X, ArrowUpRight } from "lucide-react";
import profileData from "../data/profileData";
import { useToast } from "./ToastContext";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { addToast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100));
        setScrollProgress(progress);
      }

      const sections = ["home", "services", "about", "skills", "portfolio", "experience", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Services", href: "#services", id: "services" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "Journey", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleDownloadCV = () => {
    addToast("Downloading Muhammad Hadee Butt's CV...", "info", 3000);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#070A12]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/50"
          : "bg-transparent border-b border-slate-800/30"
      }`}
    >
      {/* Radiant Top Reading Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 shadow-[0_0_14px_rgba(59,130,246,0.9)] transition-all duration-100 ease-out z-50 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="w-full max-w-[1440px] mx-auto h-[72px] flex items-center justify-between px-6 md:px-10 lg:px-16">
        
        {/* Brand Monogram & Name */}
        <div className="flex items-center gap-3">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 p-[1.5px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0B101E] rounded-[10px] flex items-center justify-center">
                <span className="text-sm font-black tracking-tighter bg-gradient-to-tr from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  HB
                </span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  Hadee<span className="text-blue-500">.</span>
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Dev
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide hidden sm:block">
                Full-Stack Engineer
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0F172A]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800/80 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 relative ${
                  isActive
                    ? "text-white bg-blue-600 shadow-md shadow-blue-500/30"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons & Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          
          {/* Quick CV Download (Desktop) */}
          <a
            href={profileData.cvFile}
            download="Muhammad_Hadee_Butt_CV.pdf"
            onClick={handleDownloadCV}
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900/80 border border-slate-800 hover:border-blue-500/60 hover:text-blue-400 transition-all duration-200"
          >
            <Download className="w-3.5 h-3.5 text-blue-400" />
            <span>CV</span>
          </a>

          {/* Hire Me CTA Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white font-bold px-5 py-2.5 rounded-xl text-xs hover:brightness-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-lg shadow-blue-600/30 group"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
            <span>Hire Me</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-blue-400" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0F1D]/98 backdrop-blur-2xl border-b border-slate-800 px-6 py-5 shadow-2xl animate-fadeIn">
          
          {/* Status pill in mobile drawer */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Available for Full-time Roles & Contracts</span>
          </div>

          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2.5 px-4 rounded-xl text-sm font-semibold transition flex items-center justify-between ${
                    isActive
                      ? "text-white bg-blue-600 shadow-md shadow-blue-500/25"
                      : "text-slate-300 hover:text-blue-400 hover:bg-slate-800/50"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-800/80 flex flex-col gap-2.5">
              <a
                href={profileData.cvFile}
                download="Muhammad_Hadee_Butt_CV.pdf"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleDownloadCV();
                }}
                className="w-full text-center py-2.5 rounded-xl text-xs font-bold text-slate-200 bg-slate-900 border border-slate-800 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download CV (PDF)</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white py-3 rounded-xl text-xs font-bold shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Hire Me Now</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;