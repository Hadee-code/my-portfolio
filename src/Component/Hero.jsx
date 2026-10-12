import React, { useState, useEffect } from "react";
import { 
  Download, 
  Sparkles, 
  Copy, 
  Check, 
  MapPin, 
  Mail, 
  Phone, 
  Code2, 
  Database, 
  Server, 
  Layers,
  ArrowRight
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";
import profileData from "../data/profileData";
import Reveal from "./Reveal";
import { useToast } from "./ToastContext";

const rotatingRoles = [
  "Junior MERN Stack Developer",
  "React.js & Next.js Specialist",
  "RESTful API & Node.js Engineer",
  "MongoDB & PostgreSQL Modeler",
];

function Hero() {
  const { greeting, name, tagline, profileImage, cvFile, socials, stats, email, location } = profileData;
  const { addToast } = useToast();
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [fadeRole, setFadeRole] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Smooth rotating roles interval
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeRole(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
        setFadeRole(true);
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    addToast("Email copied to clipboard!", "success");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDownloadCV = () => {
    addToast("Downloading Muhammad Hadee Butt's CV...", "info");
  };

  const getSocialIcon = (name) => {
    switch (name) {
      case "linkedin":
        return <LinkedinIcon className="w-4 h-4" />;
      case "github":
        return <GithubIcon className="w-4 h-4" />;
      case "email":
        return <Mail className="w-4 h-4" />;
      case "phone":
        return <Phone className="w-4 h-4" />;
      default:
        return <ArrowRight className="w-4 h-4" />;
    }
  };

  return (
    <section id="home" className="w-full bg-[#070A12] px-6 md:px-10 lg:px-16 pt-10 pb-16 md:py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background Decorative Ambient Halos */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-blue-600/12 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 -right-20 w-[550px] h-[550px] bg-indigo-600/12 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-600/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">

        {/* Text Content Column */}
        <div className="flex-1 max-w-[680px] text-center lg:text-left">
          
          {/* Top Status & Location Badges */}
          <Reveal direction="down" delay={100}>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6">
              
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Available for Q4/2026 Roles</span>
              </div>

              {/* Location Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{location}</span>
              </div>
            </div>
          </Reveal>

          {/* Name & Greeting */}
          <Reveal direction="clip-up" delay={200}>
            <div className="mb-2">
              <span className="text-blue-400 font-mono-code text-xs sm:text-sm font-semibold tracking-wider block mb-1">
                // {greeting}
              </span>
              <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                {name}
              </h1>
            </div>
          </Reveal>

          {/* Dynamic Rotating Role Headline */}
          <Reveal direction="clip-up" delay={300}>
            <div className="h-14 sm:h-16 flex items-center justify-center lg:justify-start mb-4">
              <h2
                className={`text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent transition-all duration-300 transform ${
                  fadeRole ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                {rotatingRoles[roleIndex]}
              </h2>
            </div>
          </Reveal>

          {/* Tagline Paragraph */}
          <Reveal direction="up" delay={350}>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 font-normal">
              {tagline} Specializing in building resilient end-to-end applications with reusable component hierarchies, optimized database queries, and secure JWT authentication.
            </p>
          </Reveal>

          {/* Interactive Tech Stack Marquee / Badges */}
          <Reveal direction="up" delay={400}>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8">
              {[
                { name: "React 19", icon: <Code2 className="w-3.5 h-3.5 text-cyan-400" /> },
                { name: "Next.js", icon: <Layers className="w-3.5 h-3.5 text-white" /> },
                { name: "Node.js", icon: <Server className="w-3.5 h-3.5 text-emerald-400" /> },
                { name: "Express.js", icon: <Server className="w-3.5 h-3.5 text-slate-300" /> },
                { name: "MongoDB", icon: <Database className="w-3.5 h-3.5 text-emerald-500" /> },
                { name: "PostgreSQL", icon: <Database className="w-3.5 h-3.5 text-blue-400" /> },
                { name: "Tailwind CSS", icon: <Sparkles className="w-3.5 h-3.5 text-sky-400" /> },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0F172A]/80 border border-slate-800 text-slate-300 text-xs font-semibold hover:border-blue-500/40 hover:text-white transition-all shadow-sm"
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>
          </Reveal>

          {/* Action Buttons: Hire Me + Download CV + Copy Email */}
          <Reveal direction="up" delay={450}>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-10">
              
              {/* Primary Hire Me CTA */}
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white font-bold px-7 py-3.5 rounded-xl text-xs sm:text-sm hover:brightness-110 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Hire Me Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Download CV CTA */}
              <a
                href={cvFile}
                download="Muhammad_Hadee_Butt_CV.pdf"
                onClick={handleDownloadCV}
                className="border border-slate-700 bg-slate-900/90 text-slate-200 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold hover:border-blue-500 hover:text-blue-400 hover:bg-slate-800 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download CV</span>
                <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700">
                  PDF
                </span>
              </a>

              {/* Copy Email Fast Action */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-4 py-3.5 rounded-xl border border-slate-800 bg-slate-900/70 text-slate-300 hover:text-white hover:border-slate-700 text-xs sm:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </Reveal>

          {/* Social Profiles Row */}
          <Reveal direction="up" delay={500}>
            <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-10">
              <span className="text-xs text-slate-400 font-semibold mr-1">Connect:</span>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target={s.url.startsWith("http") ? "_blank" : undefined}
                  rel={s.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label || s.name}
                  className="w-9 h-9 flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 hover:text-blue-400 hover:border-blue-500/60 hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/20 active:scale-95 transition-all duration-200"
                >
                  {getSocialIcon(s.name)}
                </a>
              ))}
            </div>
          </Reveal>

          {/* Stats Summary Bar */}
          <Reveal direction="up" delay={550}>
            <div className="glass-panel rounded-2xl p-4 sm:p-5 flex items-center justify-between sm:justify-start gap-4 sm:gap-8 w-full sm:w-fit shadow-xl shadow-black/40 mx-auto lg:mx-0 border border-slate-800">
              {stats.map((stat, i) => (
                <React.Fragment key={stat.label}>
                  {i !== 0 && <div className="w-px h-9 bg-slate-800" />}
                  <div className="text-center sm:text-left group cursor-default">
                    <p className="text-xl sm:text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                      {stat.value}
                    </p>
                    <p className="text-slate-400 text-[11px] sm:text-xs font-medium mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                </React.Fragment>
              ))}

              <div className="w-px h-9 bg-slate-800 hidden sm:block" />
              <div className="text-left group cursor-default hidden sm:block">
                <p className="text-xl sm:text-2xl font-black text-emerald-400">
                  ~38ms
                </p>
                <p className="text-slate-400 text-[11px] sm:text-xs font-medium mt-0.5">
                  Avg API Latency
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Hero Image Container with Cyber-Glass Frame & Interactive Badges */}
        <Reveal direction="scale" delay={300} className="flex-1 flex justify-center items-center relative w-full max-w-[430px] lg:max-w-[470px]">
          
          {/* Ambient Breathing Light behind image */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-cyan-500/20 rounded-[3rem] blur-2xl -z-10 animate-pulse-glow pointer-events-none" />

          {/* Floating Badge 1 - Top Right */}
          <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 z-20 bg-[#0F172A]/95 backdrop-blur-md border border-slate-700/80 px-3.5 py-2 rounded-2xl shadow-2xl flex items-center gap-2.5 animate-float-slow">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
            </span>
            <div className="flex flex-col">
              <span className="text-white text-xs font-bold leading-tight">MERN Stack</span>
              <span className="text-slate-400 text-[10px] leading-tight">Production Ready</span>
            </div>
          </div>

          {/* Floating Badge 2 - Bottom Left */}
          <div className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-4 z-20 bg-[#0F172A]/95 backdrop-blur-md border border-slate-700/80 px-3.5 py-2 rounded-2xl shadow-2xl flex items-center gap-2.5 animate-float-delayed">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <div className="flex flex-col">
              <span className="text-white text-xs font-bold leading-tight">Full-Stack Dev</span>
              <span className="text-emerald-400 text-[10px] leading-tight">Open to Work</span>
            </div>
          </div>

          {/* Cybernetic Framed Portrait Container */}
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] rounded-[2.5rem] p-2 bg-gradient-to-b from-blue-500/40 via-slate-800/80 to-indigo-500/40 border border-slate-700/80 shadow-2xl group overflow-hidden">
            
            {/* Top decorative glass bar */}
            <div className="absolute top-4 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-1.5 bg-[#0B101E]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-700/60">
                <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
                <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                <span className="text-[10px] text-slate-300 font-mono-code ml-1 font-semibold">hadee.dev</span>
              </div>
              <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full border border-blue-500/30 font-bold">
                PRO
              </span>
            </div>

            <div className="relative rounded-[2.1rem] overflow-hidden bg-[#0B101E] aspect-[3/4] sm:h-[470px] md:h-[490px]">
              
              {/* Muhammad Hadee Butt Portrait with Monochrome-to-Color Hover Effect */}
              <img
                src={profileImage}
                alt={name}
                className="w-full h-full object-cover object-[center_16%] filter grayscale contrast-[1.15] brightness-[0.96] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />

              {/* Bottom Subtle Dark Gradient Vignette for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A12]/95 via-transparent to-transparent opacity-85 pointer-events-none" />

              {/* Interactive Hover Pill at Bottom */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-full bg-[#070A12]/85 backdrop-blur-md border border-slate-700/80 text-[11px] text-slate-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
                ✨ Hover: Full Color Mode
              </div>
            </div>
          </div>

        </Reveal>

      </div>

      {/* Smooth Scroll Down Indicator */}
      <Reveal direction="up" delay={600} className="w-full flex justify-center mt-12 sm:mt-16">
        <a
          href="#services"
          className="inline-flex flex-col items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group cursor-pointer"
          aria-label="Scroll to services"
        >
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-400 transition-colors">
            Scroll to explore
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-700/80 group-hover:border-blue-500 flex items-start justify-center p-1.5 transition-colors">
            <span className="w-1.5 h-2.5 rounded-full bg-blue-500 animate-bounce-subtle" />
          </div>
        </a>
      </Reveal>
    </section>
  );
}

export default Hero;