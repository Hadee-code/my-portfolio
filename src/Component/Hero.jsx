import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
import { useToast } from "./ToastContext";
import InteractiveTilt from "./InteractiveTilt";

gsap.registerPlugin(ScrollTrigger);

const rotatingRoles = [
  "Full Stack & AI Engineer",
  "Junior MERN Stack Developer",
  "React 19 & Next.js Specialist",
  "RESTful API & Python Engineer",
  "Database & Intelligent Workflows",
];

export function Hero() {
  const { name, tagline, profileImage, cvFile, socials, stats, email, location } = profileData;
  const { addToast } = useToast();
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [fadeRole, setFadeRole] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const statsRef = useRef(null);
  const badgesRef = useRef(null);
  const ctaRef = useRef(null);
  const portraitWrapperRef = useRef(null);
  const portraitCardRef = useRef(null);
  const portraitImgRef = useRef(null);
  const floatingBadge1Ref = useRef(null);
  const floatingBadge2Ref = useRef(null);

  // Rotating roles with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeRole(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
        setFadeRole(true);
      }, 280);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  // GSAP Entrance & ScrollTrigger Animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Entrance Master Timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Title & Subtitle Entrance with 3D stagger
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current.children,
          { opacity: 0, y: 40, rotateX: -20 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.9, stagger: 0.08 },
          0.1
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.35
        );
      }

      if (statsRef.current) {
        tl.fromTo(
          statsRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
          0.2
        );
      }

      if (badgesRef.current) {
        tl.fromTo(
          badgesRef.current.children,
          { opacity: 0, scale: 0.9, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.05 },
          0.5
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          0.65
        );
      }

      // Portrait Card Entrance
      if (portraitCardRef.current) {
        tl.fromTo(
          portraitCardRef.current,
          { opacity: 0, scale: 0.92, y: 30, filter: "blur(6px)" },
          { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", duration: 1.1, ease: "expo.out" },
          0.3
        );
      }

      if (portraitImgRef.current) {
        tl.fromTo(
          portraitImgRef.current,
          { scale: 1.12 },
          { scale: 1, duration: 1.4, ease: "power2.out" },
          0.3
        );
      }

      // Floating Badges Entrance
      if (floatingBadge1Ref.current && floatingBadge2Ref.current) {
        tl.fromTo(
          [floatingBadge1Ref.current, floatingBadge2Ref.current],
          { opacity: 0, scale: 0.8, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "back.out(1.4)" },
          0.7
        );
      }

      // 2. Cinematic Scroll Parallax when scrolling past Hero section
      if (portraitWrapperRef.current && heroRef.current) {
        gsap.to(portraitWrapperRef.current, {
          y: 80,
          scale: 0.92,
          rotateX: 4,
          rotateY: -3,
          opacity: 0.8,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // Parallax drifting background elements
      gsap.to(".hero-bg-halo", {
        y: 60,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, heroRef);

    return () => ctx.revert();
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
    <section 
      ref={heroRef}
      id="home" 
      className="w-full bg-[#F3F3F3] text-[#111111] px-6 md:px-12 lg:px-16 pt-6 md:pt-10 pb-14 md:pb-16 relative overflow-hidden bg-grid-pattern"
    >
      {/* Background Subtle Ambient Halos */}
      <div className="hero-bg-halo absolute top-1/4 -left-20 w-[500px] h-[500px] bg-black/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="hero-bg-halo absolute bottom-10 -right-20 w-[550px] h-[550px] bg-black/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12 relative z-10">

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
            {/* Top Stats Counters */}
            <div ref={statsRef} className="flex flex-wrap items-center gap-6 sm:gap-10 mb-6 pt-1 border-b border-black/[0.06] pb-5">
              {stats.map((stat) => (
                <div key={stat.label} className="group">
                  <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight flex items-baseline">
                    <span className="text-zinc-400 font-light text-xl mr-0.5">*</span>
                    {stat.value}
                  </p>
                  <p className="text-zinc-500 text-xs font-medium tracking-wide mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}

              <div className="hidden sm:block">
                <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight flex items-baseline">
                  <span className="text-zinc-400 font-light text-xl mr-0.5">*</span>~38
                  <span className="text-zinc-500 text-lg font-normal ml-0.5">ms</span>
                </p>
                <p className="text-zinc-500 text-xs font-medium tracking-wide mt-0.5">
                  Avg API Latency
                </p>
              </div>
            </div>

            {/* Availability & Location Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-medium shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Available for Engineering Roles</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/[0.08] text-zinc-600 text-xs font-medium shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>{location}</span>
              </div>
            </div>

            {/* Giant "Hello" Editorial Headline */}
            <div ref={titleRef} className="perspective-[1000px] mb-3">
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[104px] font-normal leading-[0.92] text-[#111111] tracking-tight select-none">
                Hello
              </h1>
            </div>

            {/* Signature Tagline */}
            <div ref={subtitleRef} className="mb-3">
              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#111111] tracking-tight flex items-center gap-2 flex-wrap">
                <span className="text-zinc-400">—</span>
                <span>It's <strong className="font-extrabold">{name}</strong>,</span>
                <span className="text-zinc-600 font-normal">a full-stack & AI engineer</span>
              </p>
            </div>

            {/* Dynamic Rotating Role Headline */}
            <div className="h-7 flex items-center mb-3">
              <span className="font-mono-code text-xs sm:text-sm text-zinc-500 mr-2">// Focus:</span>
              <span
                className={`font-bold text-sm sm:text-base text-[#111111] transition-all duration-300 transform ${
                  fadeRole ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1.5"
                }`}
              >
                {rotatingRoles[roleIndex]}
              </span>
            </div>

            {/* Tagline Paragraph */}
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-5 max-w-xl font-normal">
              {tagline} Specializing in building resilient end-to-end applications with reusable component hierarchies, optimized database queries, and secure JWT authentication.
            </p>

            {/* Tech Stack Badges */}
            <div ref={badgesRef} className="flex flex-wrap items-center gap-2 mb-6">
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
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/[0.08] text-zinc-800 text-xs font-medium hover:border-black/30 hover:-translate-y-0.5 transition-all shadow-xs"
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>

            {/* Call-To-Action Buttons */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
              <a
                href="#showcase"
                className="bg-[#111111] text-white font-semibold px-6 py-3 rounded-full text-xs sm:text-sm hover:bg-neutral-800 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 flex items-center gap-2 shadow-sm group"
              >
                <Briefcase className="w-4 h-4 text-zinc-300" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#footer"
                className="border border-black/[0.12] bg-white text-zinc-800 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold hover:border-black hover:text-black hover:-translate-y-0.5 active:scale-95 transition-all duration-200 inline-flex items-center gap-2 shadow-xs"
              >
                <Mail className="w-4 h-4 text-zinc-600" />
                <span>Contact Me</span>
              </a>

              <a
                href={cvFile}
                download="Muhammad_Hadee_Butt_CV.pdf"
                onClick={handleDownloadCV}
                className="border border-black/[0.12] bg-[#F8F8F9] text-zinc-700 px-4 py-3 rounded-full text-xs sm:text-sm font-medium hover:border-black hover:text-black hover:-translate-y-0.5 active:scale-95 transition-all duration-200 inline-flex items-center gap-2 shadow-xs"
              >
                <Download className="w-4 h-4 text-zinc-500" />
                <span>Download CV</span>
                <span className="text-[10px] bg-white text-zinc-700 px-1.5 py-0.5 rounded border border-black/[0.08]">
                  PDF
                </span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3.5 py-3 rounded-full border border-black/[0.1] bg-white text-zinc-700 hover:text-black hover:border-black/30 text-xs sm:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer active:scale-95 shadow-xs"
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

            {/* Social Profiles Row */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs text-zinc-400 font-medium">Connect:</span>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target={s.url.startsWith("http") ? "_blank" : undefined}
                  rel={s.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label || s.name}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-black/[0.08] bg-white text-zinc-700 hover:text-black hover:border-black/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 shadow-xs"
                >
                  {getSocialIcon(s.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom "Scroll down ↓" indicator */}
          <div className="mt-6 pt-4 border-t border-black/[0.06]">
            <a
              href="#profile"
              className="inline-flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-black transition-colors group cursor-pointer"
            >
              <span>Scroll down</span>
              <span className="group-hover:translate-y-1 transition-transform duration-200">↓</span>
            </a>
          </div>
        </div>

        {/* Right Column: Monochrome Editorial Portrait Showcase with 3D Parallax Transformation */}
        <div 
          ref={portraitWrapperRef}
          className="flex-1 flex justify-center items-center relative w-full max-w-[440px] lg:max-w-[480px] self-center will-change-transform"
        >
          {/* Subtle Ambient Backing Halo */}
          <div className="absolute inset-4 bg-black/[0.03] rounded-3xl blur-2xl -z-10 pointer-events-none" />

          {/* Floating Minimal Badge - Top Right */}
          <div 
            ref={floatingBadge1Ref}
            className="absolute -top-2.5 right-1 sm:-top-3 sm:right-0 z-20 bg-white/95 backdrop-blur-md border border-black/[0.08] px-3.5 py-1.5 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center gap-2 animate-float-slow"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#111111]" />
            </span>
            <div className="flex flex-col">
              <span className="text-[#111111] text-[11px] font-bold leading-tight">Full Stack & AI</span>
              <span className="text-zinc-500 text-[9px] leading-tight">Production Ready</span>
            </div>
          </div>

          {/* Floating Minimal Badge - Bottom Left */}
          <div 
            ref={floatingBadge2Ref}
            className="absolute -bottom-2.5 left-1 sm:-bottom-3 sm:left-0 z-20 bg-white/95 backdrop-blur-md border border-black/[0.08] px-3.5 py-1.5 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center gap-2 animate-float-delayed"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <div className="flex flex-col">
              <span className="text-[#111111] text-[11px] font-bold leading-tight">MERN & Python</span>
              <span className="text-emerald-700 text-[9px] font-semibold leading-tight">Open to Work</span>
            </div>
          </div>

          {/* Monochromatic Portrait Container with Interactive 3D Tilt */}
          <InteractiveTilt 
            maxTilt={6} 
            scale={1.015} 
            className="w-full max-w-[340px] sm:max-w-[390px]"
          >
            <div 
              ref={portraitCardRef}
              className="relative w-full rounded-3xl p-2.5 bg-white border border-black/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.06)] group overflow-hidden"
            >
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

              <div className="relative rounded-2xl overflow-hidden bg-[#ECECEC] aspect-[3/4] sm:h-[460px]">
                {/* Muhammad Hadee Butt Portrait with Editorial Monochrome Treatment */}
                <img
                  ref={portraitImgRef}
                  src={profileImage}
                  alt={name}
                  className="w-full h-full object-cover object-[center_16%] filter grayscale contrast-[1.12] brightness-[0.98] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Bottom Soft Gradient for Seamless Grounding */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Interactive Hover Pill at Bottom */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/[0.1] text-[11px] text-zinc-800 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md">
                  Full Color Preview
                </div>
              </div>
            </div>
          </InteractiveTilt>
        </div>

      </div>
    </section>
  );
}

export default Hero;
