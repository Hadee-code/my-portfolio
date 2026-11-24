import React, { useState, useEffect } from "react";
import { Download, Sparkles, Menu, X, ArrowUpRight } from "lucide-react";
import profileData from "../data/profileData";
import { useToast } from "./ToastContext";
import { useSmoothScroll } from "./SmoothScrollContext";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { addToast } = useToast();
  const smoothScroll = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100));
        setScrollProgress(progress);
      }

      // Sections in order + footer
      const sections = ["home", "profile", "career", "showcase", "arsenal", "education", "footer"];
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
    { name: "Profile", href: "#profile", id: "profile" },
    { name: "Career", href: "#career", id: "career" },
    { name: "Showcase", href: "#showcase", id: "showcase" },
    { name: "Arsenal", href: "#arsenal", id: "arsenal" },
    { name: "Education", href: "#education", id: "education" },
  ];

  const handleDownloadCV = () => {
    addToast("Downloading Muhammad Hadee Butt's CV...", "info", 3000);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (smoothScroll && smoothScroll.scrollTo) {
      smoothScroll.scrollTo(href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#F3F3F3]/90 backdrop-blur-md border-b border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
          : "bg-transparent border-b border-black/[0.05]"
      }`}
    >
      {/* Editorial Reading Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-[#111111] transition-all duration-100 ease-out z-50 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="w-full max-w-[1400px] mx-auto h-[68px] sm:h-[74px] flex items-center justify-between px-6 md:px-12 lg:px-16">
        
        {/* Brand Monogram & Minimalist Geometric Icon */}
        <div className="flex items-center gap-3">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#111111] text-white flex items-center justify-center transition-transform group-hover:scale-105 duration-200 shadow-xs">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <polygon points="12 2 4 9 7 19 12 16 17 19 20 9 12 2" />
                <polyline points="9 11 12 13 15 11" />
              </svg>
            </div>
            
            <div className="flex flex-col">
              <span className="font-display text-base font-extrabold tracking-tight text-[#111111] group-hover:text-neutral-600 transition-colors">
                Hadee<span className="text-zinc-500">.</span>
              </span>
              <span className="text-[10px] text-zinc-500 font-medium tracking-wider uppercase hidden sm:block">
                Full-Stack
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[13px] font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 relative ${
                  isActive
                    ? "text-white bg-[#111111] shadow-xs font-semibold"
                    : "text-zinc-600 hover:text-[#111111] hover:bg-black/[0.04]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons & Mobile Menu Trigger */}
        <div className="flex items-center gap-2.5">
          {/* Quick CV Download (Desktop) */}
          <a
            href={profileData.cvFile}
            download="Muhammad_Hadee_Butt_CV.pdf"
            onClick={handleDownloadCV}
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-700 bg-white border border-black/[0.1] hover:border-black/30 hover:text-black transition-all duration-200 shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-zinc-600" />
            <span>CV</span>
          </a>

          {/* Primary Filled CTA Button pointing to #footer */}
          <a
            href="#footer"
            onClick={(e) => handleNavClick(e, "#footer")}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#111111] text-white font-semibold px-4.5 py-1.5 rounded-full text-xs hover:bg-neutral-800 active:scale-95 transition-all duration-200 shadow-xs group"
          >
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            <span>Hire Me</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white border border-black/[0.1] text-zinc-800 hover:text-black hover:border-black/30 transition cursor-pointer shadow-xs"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-black/[0.08] px-6 py-6 shadow-xl animate-fadeIn">
          {/* Status pill in mobile drawer */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium mb-4 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Available for Full-time Roles & Contracts</span>
          </div>

          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`py-2.5 px-4 rounded-xl text-sm transition flex items-center justify-between ${
                    isActive
                      ? "text-white bg-[#111111] font-semibold shadow-sm"
                      : "text-zinc-700 hover:text-black hover:bg-black/[0.04]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                </a>
              );
            })}

            <div className="pt-4 mt-3 border-t border-black/[0.08] flex flex-col gap-2.5">
              <a
                href={profileData.cvFile}
                download="Muhammad_Hadee_Butt_CV.pdf"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleDownloadCV();
                }}
                className="w-full text-center py-2.5 rounded-xl text-xs font-semibold text-zinc-800 bg-[#F3F3F3] border border-black/[0.08] flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-zinc-600" />
                <span>Download CV (PDF)</span>
              </a>

              <a
                href="#footer"
                onClick={(e) => handleNavClick(e, "#footer")}
                className="w-full text-center bg-[#111111] text-white py-3 rounded-xl text-xs font-semibold shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-zinc-300" />
                <span>Book A Call / Hire Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
