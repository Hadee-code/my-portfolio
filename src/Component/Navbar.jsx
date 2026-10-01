import React, { useState, useEffect } from "react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100));
        setScrollProgress(progress);
      }

      const sections = ["home", "services", "about", "skills", "portfolio", "experience", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
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
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0E17]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-xl shadow-black/40"
          : "bg-[#0A0E17] border-b border-slate-800/40"
      }`}
    >
      {/* Top Radiant Smooth Reading Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 shadow-[0_0_12px_rgba(59,130,246,0.9)] transition-all duration-100 ease-out z-50 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="w-full max-w-[1440px] mx-auto h-[68px] flex items-center justify-between px-6 md:px-10 lg:px-16">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="text-2xl font-black tracking-tight text-white group-hover:text-blue-400 transition-colors">
              Hadee<span className="text-blue-500">.</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:border-blue-400/40 transition-colors">
              Dev
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-9">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-sm font-medium transition-all duration-200 relative py-1 ${
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "text-slate-300 hover:text-blue-400"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)] animate-fadeIn" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Hire Me CTA & Mobile Toggle */}
        <div className="flex items-center gap-3.5">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:brightness-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-md shadow-blue-500/25"
          >
            <span>Hire Me</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-blue-400 hover:bg-slate-800/60 transition cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Smooth Animation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D121F]/98 backdrop-blur-xl border-b border-slate-800 px-6 py-4 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 px-3 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? "text-blue-400 bg-blue-500/10 font-semibold border-l-2 border-blue-500"
                      : "text-slate-300 hover:text-blue-400 hover:bg-slate-800/50"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 mt-1 border-t border-slate-800 sm:hidden">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-blue-500/25 active:scale-95 transition-all"
              >
                Hire Me
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;