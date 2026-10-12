import React from "react";
import { 
  ArrowUp, 
  Sparkles, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Heart 
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";
import profileData from "../data/profileData";
import Reveal from "./Reveal";
import { useToast } from "./ToastContext";

function Footer() {
  const { name, role, email, phone, location, socials, cvFile } = profileData;
  const { addToast } = useToast();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    addToast("Downloading Muhammad Hadee Butt's CV...", "info");
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Journey", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const getSocialIcon = (name) => {
    switch (name) {
      case "linkedin":
        return <LinkedinIcon className="w-3.5 h-3.5" />;
      case "github":
        return <GithubIcon className="w-3.5 h-3.5" />;
      case "email":
        return <Mail className="w-3.5 h-3.5" />;
      case "phone":
        return <Phone className="w-3.5 h-3.5" />;
      default:
        return <ArrowRight className="w-3.5 h-3.5" />;
    }
  };

  return (
    <footer className="w-full bg-[#05070D] text-slate-300 relative border-t border-slate-800">
      
      {/* High-Visibility Radiant Top Glowing Separator Line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.8)]" />

      {/* Pre-Footer Action Banner */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-16 pb-12">
        <Reveal direction="up" delay={100}>
          <div className="bg-gradient-to-r from-[#0C1222] via-[#101930] to-[#0C1222] rounded-3xl p-8 sm:p-12 border border-slate-700/80 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="text-center lg:text-left max-w-xl">
              <span className="text-blue-400 text-xs font-bold uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                Let's Build Together
              </span>
              <h3 className="text-white text-2xl sm:text-3xl font-black mt-3 mb-2">
                Ready to Bring Your Vision to Life?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Looking for a dedicated Junior MERN Stack Developer for your engineering team or upcoming product? Let's connect today.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white font-bold px-7 py-3.5 rounded-xl text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={cvFile}
                download="Muhammad_Hadee_Butt_CV.pdf"
                onClick={handleDownloadCV}
                className="border border-slate-700 bg-slate-900/90 text-white font-semibold px-7 py-3.5 rounded-xl text-sm hover:border-blue-500 hover:text-blue-400 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download CV</span>
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
            <a href="#home" className="inline-flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 p-[1.5px] shadow-md shadow-blue-500/20">
                <div className="w-full h-full bg-[#0B101E] rounded-[10px] flex items-center justify-center">
                  <span className="text-xs font-black tracking-tighter text-blue-400">
                    HB
                  </span>
                </div>
              </div>
              <span className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">
                Hadee<span className="text-blue-500">.</span>
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Dev
              </span>
            </a>
            
            <p className="text-slate-300 text-sm leading-relaxed font-normal">
              {role} specializing in MERN stack web applications, Next.js, RESTful microservices, and modern database systems.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
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
                    className="text-xs sm:text-sm text-slate-300 hover:text-blue-400 hover:translate-x-1 inline-block transition-all font-medium"
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
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400 text-xs font-semibold">Email</span>
                  <a
                    href={`mailto:${email}`}
                    className="text-slate-200 hover:text-blue-400 transition-colors font-medium break-all"
                  >
                    {email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400 text-xs font-semibold">Phone</span>
                  <a
                    href={`tel:${phone}`}
                    className="text-slate-200 hover:text-blue-400 transition-colors font-medium"
                  >
                    {phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400 text-xs font-semibold">Location</span>
                  <span className="text-slate-200 font-medium">{location}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Profiles & Back To Top */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-3">
                Social Profiles
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target={s.url.startsWith("http") ? "_blank" : undefined}
                    rel={s.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="px-3.5 py-2 rounded-xl bg-[#0F172A] border border-slate-800 hover:border-blue-500 text-slate-200 hover:text-blue-400 text-xs font-semibold transition-all shadow-sm flex items-center gap-1.5 hover:-translate-y-0.5"
                  >
                    {getSocialIcon(s.name)}
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="w-full bg-[#0F172A] border border-slate-700/80 hover:border-blue-500 text-slate-200 hover:text-blue-400 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:-translate-y-0.5"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-4 h-4 text-blue-400" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Tech Stack Info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} <span className="text-white font-bold">{name}</span>. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>using <strong className="text-blue-400 font-semibold">React 19 & Tailwind CSS v4</strong></span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
