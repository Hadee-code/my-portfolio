import React, { useState, useEffect } from "react";
import { 
  Download, 
  Mail, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  Copy, 
  Check, 
  Phone, 
  Code2, 
  Layers, 
  Server, 
  Database,
  Briefcase
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";
import profileData from "../data/profileData";
import Reveal from "./Reveal";
import { useToast } from "./ToastContext";

const rotatingRoles = [
  "Full Stack & AI Engineer",
  "Junior MERN Stack Developer",
  "React 19 & Next.js Specialist",
  "RESTful API & Python Engineer",
  "Database & Intelligent Workflows",
];

function Hero() {
  const { name, tagline, profileImage, cvFile, socials, stats, email, location } = profileData;
  const { addToast } = useToast();
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [fadeRole, setFadeRole] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Rotating roles with smooth fade transition
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
    <section id="home" className="w-full bg-[#F3F3F3] text-[#111111] px-6 md:px-12 lg:px-16 pt-8 pb-16 md:py-20 relative overflow-hidden bg-grid-pattern">
      
      {/* Background Subtle Ambient Halos */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-black/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[550px] h-[550px] bg-black/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-14 relative z-10">

        {/* Left Vertical Editorial Rail (Matches Reference Design) */}
        <div className="hidden xl:flex flex-col items-center justify-between py-4 pr-6 border-r border-black/[0.08] select-none text-[11px] font-semibold text-zinc-400 uppercase tracking-[0.2em]">
          <span className="vertical-rail-text">
            Full-Stack & AI Engineer
          </span>
          <div className="w-[1px] h-16 bg-black/[0.12]" />
          <span className="font-mono-code text-[11px] text-zinc-500">
            2026
          </span>
        </div>

        {/* Main Content Column */}
        <div className="flex-1 flex flex-col justify-between max-w-[720px] text-left">
          
          <div>
            {/* Top Stats Counters matching reference (*200 Project completed / *50 Startup raised) */}
            <Reveal direction="down" delay={100}>
              <div className="flex flex-wrap items-center gap-8 sm:gap-12 mb-8 pt-2 border-b border-black/[0.06] pb-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="group">
                    <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight flex items-baseline">
                      <span className="text-zinc-400 font-light text-2xl mr-0.5">*</span>
                      {stat.value.replace("+", "")}
                      <span className="text-zinc-500 text-xl font-normal">{stat.value.includes("+") ? "+" : ""}</span>
                    </p>
                    <p className="text-zinc-500 text-xs font-medium tracking-wide mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                ))}

                <div className="hidden sm:block">
                  <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
                    <span className="text-zinc-400 font-light text-2xl mr-0.5">*</span>~38
                    <span className="text-zinc-500 text-xl font-normal">ms</span>
                  </p>
                  <p className="text-zinc-500 text-xs font-medium tracking-wide mt-0.5">
                    Avg API Latency
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Availability & Location Badges */}
            <Reveal direction="fade" delay={150}>
              <div className="flex flex-wrap items-center gap-2.5 mb-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Available for Engineering Roles</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-black/[0.08] text-zinc-600 text-xs font-medium shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{location}</span>
                </div>
              </div>
            </Reveal>

            {/* Giant "Hello" Editorial Headline (Direct visual match to reference) */}
            <Reveal direction="clip-up" delay={200}>
              <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[118px] font-normal leading-[0.92] text-[#111111] tracking-tight mb-4 select-none">
                Hello
              </h1>
            </Reveal>

            {/* Signature Tagline: — It's Muhammad Hadee Butt, a Full-Stack & AI Engineer */}
            <Reveal direction="clip-up" delay={280}>
              <div className="mb-4">
                <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#111111] tracking-tight flex items-center gap-2 flex-wrap">
                  <span className="text-zinc-400">—</span>
                  <span>It's <strong className="font-extrabold">{name}</strong>,</span>
                  <span className="text-zinc-600 font-normal">a full-stack & AI engineer</span>
                </p>
              </div>
            </Reveal>

            {/* Dynamic Rotating Role Headline */}
            <Reveal direction="fade" delay={340}>
              <div className="h-8 flex items-center mb-4">
                <span className="font-mono-code text-xs sm:text-sm text-zinc-500 mr-2">// Focus:</span>
                <span
                  className={`font-semibold text-sm sm:text-base text-blue-600 transition-all duration-300 transform ${
                    fadeRole ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                >
                  {rotatingRoles[roleIndex]}
                </span>
              </div>
            </Reveal>

            {/* Tagline Paragraph */}
            <Reveal direction="up" delay={380}>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-6 max-w-xl font-normal">
                {tagline} Specializing in building resilient end-to-end applications with reusable component hierarchies, optimized database queries, and secure JWT authentication.
              </p>
            </Reveal>

            {/* Tech Stack Badges */}
            <Reveal direction="up" delay={420}>
              <div className="flex flex-wrap items-center gap-2 mb-8">
                {[
                  { name: "React 19", icon: <Code2 className="w-3.5 h-3.5 text-zinc-700" /> },
                  { name: "Next.js", icon: <Layers className="w-3.5 h-3.5 text-zinc-700" /> },
                  { name: "Node.js", icon: <Server className="w-3.5 h-3.5 text-zinc-700" /> },
                  { name: "Express.js", icon: <Server className="w-3.5 h-3.5 text-zinc-700" /> },
                  { name: "MongoDB", icon: <Database className="w-3.5 h-3.5 text-zinc-700" /> },
                  { name: "PostgreSQL", icon: <Database className="w-3.5 h-3.5 text-zinc-700" /> },
                  { name: "Python / AI", icon: <Sparkles className="w-3.5 h-3.5 text-zinc-700" /> },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/[0.08] text-zinc-800 text-xs font-medium hover:border-black/30 transition-all shadow-sm"
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Clear Call-To-Action Buttons: View Projects + Contact Me + Download CV */}
            <Reveal direction="up" delay={460}>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                
                {/* Primary CTA: View Projects */}
                <a
                  href="#showcase"
                  className="bg-[#111111] text-white font-semibold px-7 py-3.5 rounded-full text-xs sm:text-sm hover:bg-neutral-800 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 flex items-center gap-2 shadow-sm group"
                >
                  <Briefcase className="w-4 h-4 text-zinc-300" />
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Secondary CTA: Contact Me */}
                <a
                  href="#footer"
                  className="border border-black/[0.12] bg-white text-zinc-800 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold hover:border-black hover:text-black hover:-translate-y-0.5 active:scale-95 transition-all duration-200 inline-flex items-center gap-2 shadow-sm"
                >
                  <Mail className="w-4 h-4 text-zinc-600" />
                  <span>Contact Me</span>
                </a>

                {/* Download CV CTA */}
                <a
                  href={cvFile}
                  download="Muhammad_Hadee_Butt_CV.pdf"
                  onClick={handleDownloadCV}
                  className="border border-black/[0.12] bg-[#F8F8F9] text-zinc-700 px-5 py-3.5 rounded-full text-xs sm:text-sm font-medium hover:border-black hover:text-black hover:-translate-y-0.5 active:scale-95 transition-all duration-200 inline-flex items-center gap-2 shadow-xs"
                >
                  <Download className="w-4 h-4 text-zinc-500" />
                  <span>Download CV</span>
                  <span className="text-[10px] bg-white text-zinc-700 px-1.5 py-0.5 rounded border border-black/[0.08]">
                    PDF
                  </span>
                </a>

                {/* Copy Email Fast Action */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-4 py-3.5 rounded-full border border-black/[0.1] bg-white text-zinc-700 hover:text-black hover:border-black/30 text-xs sm:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer active:scale-95 shadow-sm"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-500" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </Reveal>

            {/* Social Profiles Row */}
            <Reveal direction="up" delay={500}>
              <div className="flex items-center gap-3">
                <span className="text-xs text-zinc-400 font-medium">Connect:</span>
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target={s.url.startsWith("http") ? "_blank" : undefined}
                    rel={s.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={s.label || s.name}
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-black/[0.08] bg-white text-zinc-700 hover:text-black hover:border-black/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 shadow-sm"
                  >
                    {getSocialIcon(s.name)}
                  </a>
                ))}
              </div>
            </Reveal>

          </div>

          {/* Bottom "Scroll down ↓" indicator pointing to Section 02. Engineering Profile */}
          <Reveal direction="up" delay={550}>
            <div className="pt-10 mt-6 border-t border-black/[0.06]">
              <a
                href="#profile"
                className="inline-flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-black transition-colors group cursor-pointer"
              >
                <span>Scroll down</span>
                <span className="group-hover:translate-y-1 transition-transform duration-200">↓</span>
              </a>
            </div>
          </Reveal>

        </div>

        {/* Right Column: Monochrome Editorial Portrait Showcase */}
        <Reveal direction="scale" delay={250} className="flex-1 flex justify-center items-center relative w-full max-w-[460px] lg:max-w-[500px] self-center">
          
          {/* Subtle Ambient Backing Halo */}
          <div className="absolute inset-4 bg-black/[0.03] rounded-3xl blur-2xl -z-10 pointer-events-none" />

          {/* Floating Minimal Badge - Top Right */}
          <div className="absolute -top-3 right-2 sm:-top-4 sm:right-0 z-20 bg-white/95 backdrop-blur-md border border-black/[0.08] px-4 py-2 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center gap-2.5 animate-float-slow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
            </span>
            <div className="flex flex-col">
              <span className="text-[#111111] text-xs font-bold leading-tight">Full Stack & AI</span>
              <span className="text-zinc-500 text-[10px] leading-tight">Production Ready</span>
            </div>
          </div>

          {/* Floating Minimal Badge - Bottom Left */}
          <div className="absolute -bottom-3 left-2 sm:-bottom-4 sm:left-0 z-20 bg-white/95 backdrop-blur-md border border-black/[0.08] px-4 py-2 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center gap-2.5 animate-float-delayed">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <div className="flex flex-col">
              <span className="text-[#111111] text-xs font-bold leading-tight">MERN & Python</span>
              <span className="text-emerald-700 text-[10px] font-semibold leading-tight">Open to Work</span>
            </div>
          </div>

          {/* Monochromatic Portrait Container */}
          <div className="relative w-full max-w-[360px] sm:max-w-[410px] rounded-3xl p-2.5 bg-white border border-black/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.06)] group overflow-hidden">
            
            {/* Top Minimal Pill Bar */}
            <div className="absolute top-4 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-black/[0.08] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-zinc-300 inline-block" />
                <span className="w-2 h-2 rounded-full bg-zinc-400 inline-block" />
                <span className="w-2 h-2 rounded-full bg-[#111111] inline-block" />
                <span className="text-[10px] text-zinc-600 font-mono-code ml-1 font-semibold">hadee.dev</span>
              </div>
              <span className="text-[10px] bg-black/[0.05] text-zinc-800 px-2.5 py-0.5 rounded-full border border-black/[0.08] font-bold">
                ENGINEER
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-[#ECECEC] aspect-[3/4] sm:h-[490px]">
              
              {/* Muhammad Hadee Butt Portrait with Editorial Monochrome Treatment */}
              <img
                src={profileImage}
                alt={name}
                className="w-full h-full object-cover object-[center_16%] filter grayscale contrast-[1.12] brightness-[0.98] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />

              {/* Bottom Subtle Soft Gradient for Seamless Grounding */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Interactive Hover Pill at Bottom */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/[0.1] text-[11px] text-zinc-800 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md">
                Full Color Preview
              </div>
            </div>
          </div>

        </Reveal>

      </div>
    </section>
  );
}

export default Hero;
