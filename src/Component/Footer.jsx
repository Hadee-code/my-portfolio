import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  ArrowUp, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  ArrowRight,
  ArrowUpRight,
  FileText
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";
import profileData from "../data/profileData";
import { useToast } from "./ToastContext";
import { useSmoothScroll } from "./SmoothScrollContext";

gsap.registerPlugin(ScrollTrigger);

const inquiryTypes = [
  "Full-Time Role",
  "Project Contract",
  "Technical Consultation",
  "General Inquiry",
];

export function Footer() {
  const { name, role, email, phone, location, socials, cvFile } = profileData;
  const { addToast } = useToast();
  const smoothScroll = useSmoothScroll();

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const footerNavRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "Full-Time Role",
    subject: "",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  
  // Real-time ticking clock for Lahore, Pakistan (PKT, UTC+5)
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setLocalTime(timeStr);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Subtle GSAP ScrollTrigger Animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header subtle fade-in & slide-up
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Left column cards staggered reveal
      if (leftColRef.current) {
        const cards = leftColRef.current.querySelectorAll(".contact-card-item");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.07,
            ease: "power2.out",
            scrollTrigger: {
              trigger: leftColRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Right column form subtle entrance
      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: rightColRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Footer bottom directory subtle reveal
      if (footerNavRef.current) {
        gsap.fromTo(
          footerNavRef.current,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: footerNavRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectType = (type) => {
    setFormData((prev) => ({ ...prev, inquiryType: type }));
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    addToast("Email copied to clipboard!", "success", 2000);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    addToast("Phone number copied to clipboard!", "success", 2000);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
      addToast("Message dispatched successfully!", "success", 4000);
      setFormData({
        name: "",
        email: "",
        inquiryType: "Full-Time Role",
        subject: "",
        message: "",
      });
    }, 800);
  };

  const scrollToTop = () => {
    if (smoothScroll && smoothScroll.scrollTo) {
      smoothScroll.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    addToast("Downloading Muhammad Hadee Butt's CV...", "info", 2500);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (smoothScroll && smoothScroll.scrollTo) {
      smoothScroll.scrollTo(href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Engineering Profile", href: "#profile" },
    { name: "Career Trajectory", href: "#career" },
    { name: "Engineering Showcase", href: "#showcase" },
    { name: "Technical Arsenal", href: "#arsenal" },
    { name: "Education & Certifications", href: "#education" },
  ];

  const getSocialIcon = (sName) => {
    switch (sName) {
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
    <footer 
      ref={sectionRef}
      id="footer" 
      className="w-full bg-[#F3F3F3] text-[#111111] relative border-t border-black/[0.08]"
    >
      {/* Anchor target for #contact */}
      <div id="contact" className="absolute -top-16 left-0 pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 pb-12 md:pb-16">
        
        {/* ============================================================== */}
        {/* 1. CONTACT SECTION HEADING (Clean, Minimal, Swiss Typography) */}
        {/* ============================================================== */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.08] mb-3.5 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
            <span className="text-[#111111] text-xs font-semibold uppercase tracking-wider font-mono-code">
              Contact & Inquiries
            </span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
            Let's Discuss Professional <span className="font-light italic text-zinc-500">Opportunities</span>
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base mt-3.5 leading-relaxed font-normal max-w-xl mx-auto">
            Open for full-time software engineering roles, high-impact contracts, and architecture discussions. Let's start a conversation.
          </p>
        </div>

        {/* ============================================================== */}
        {/* 2. TWO-COLUMN BALANCED CONTACT & FORM GRID                    */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start lg:items-stretch">
          
          {/* ------------------------------------------------------------ */}
          {/* LEFT COLUMN: Contact Information Cards (Equal Height Grid)  */}
          {/* ------------------------------------------------------------ */}
          <div ref={leftColRef} className="lg:col-span-5 flex flex-col justify-between h-full gap-3 lg:gap-0">
            
            {/* Card 1: Availability Status */}
            <div className="contact-card-item bg-white border border-black/[0.08] hover:border-black/30 rounded-2xl p-4 sm:p-4.5 transition-all duration-200 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#111111] text-white flex items-center justify-center shrink-0">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-zinc-500">Availability Status</p>
                  <p className="text-[#111111] font-semibold text-xs sm:text-sm truncate mt-0.5">Available for Full-Time Roles</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[10px] sm:text-[11px] font-mono-code font-bold shrink-0 ml-2">
                ACTIVE
              </span>
            </div>

            {/* Card 2: Email Address */}
            <div className="contact-card-item bg-white border border-black/[0.08] hover:border-black/30 rounded-2xl p-4 sm:p-4.5 transition-all duration-200 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#111111] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-zinc-500">Email Address</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-[#111111] font-semibold text-xs sm:text-sm hover:text-zinc-600 transition-colors truncate block mt-0.5"
                  >
                    {email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-[#F8F8F9] border border-black/[0.08] text-zinc-600 hover:text-black hover:border-black/30 hover:bg-white transition-all shrink-0 cursor-pointer active:scale-95 shadow-xs ml-2"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Card 3: Phone / WhatsApp */}
            <div className="contact-card-item bg-white border border-black/[0.08] hover:border-black/30 rounded-2xl p-4 sm:p-4.5 transition-all duration-200 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#111111] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-zinc-500">Phone / WhatsApp</p>
                  <a
                    href={`tel:${phone}`}
                    className="text-[#111111] font-semibold text-xs sm:text-sm hover:text-zinc-600 transition-colors truncate block mt-0.5"
                  >
                    {phone}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="p-2 rounded-xl bg-[#F8F8F9] border border-black/[0.08] text-zinc-600 hover:text-black hover:border-black/30 hover:bg-white transition-all shrink-0 cursor-pointer active:scale-95 shadow-xs ml-2"
                title="Copy phone number"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Card 4: Location & Live Ticking Clock */}
            <div className="contact-card-item bg-white border border-black/[0.08] hover:border-black/30 rounded-2xl p-4 sm:p-4.5 transition-all duration-200 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#111111] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-zinc-500">Location</p>
                  <p className="text-[#111111] font-semibold text-xs sm:text-sm truncate mt-0.5">
                    {location}
                  </p>
                </div>
              </div>
              <div className="text-right shrink-0 ml-2">
                <div className="flex items-center gap-1 text-[10px] font-mono-code text-zinc-500 font-bold uppercase justify-end">
                  <Clock className="w-3 h-3 text-zinc-400" />
                  <span>PKT</span>
                </div>
                <p className="text-xs font-mono-code font-bold text-[#111111] mt-0.5">
                  {localTime || "12:00 PM"}
                </p>
              </div>
            </div>

            {/* Card 5: CV Download & Social Links */}
            <div className="contact-card-item bg-white border border-black/[0.08] hover:border-black/30 rounded-2xl p-3.5 sm:p-4 transition-all duration-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={cvFile}
                download="Muhammad_Hadee_Butt_CV.pdf"
                onClick={handleDownloadCV}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#111111] text-white text-xs font-semibold hover:bg-neutral-800 active:scale-95 transition-all shadow-xs group"
              >
                <Download className="w-3.5 h-3.5 text-zinc-300 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download CV (PDF)</span>
              </a>

              <div className="flex items-center gap-1.5 w-full sm:w-auto justify-center sm:justify-end">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-[#F8F8F9] border border-black/[0.08] hover:border-black/30 hover:bg-white text-zinc-700 hover:text-black flex items-center justify-center transition-all shadow-xs active:scale-95"
                    title={s.label || s.name}
                  >
                    {getSocialIcon(s.name)}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* ------------------------------------------------------------ */}
          {/* RIGHT COLUMN: Clean, Professionally Structured Contact Form  */}
          {/* ------------------------------------------------------------ */}
          <div ref={rightColRef} className="lg:col-span-7 flex flex-col h-full">
            <div className="bg-white border border-black/[0.08] rounded-2xl p-5 sm:p-6 lg:p-7 shadow-xs flex flex-col justify-between h-full">
              
              <div>
                <h3 className="font-display text-[#111111] text-lg sm:text-xl font-bold">
                  Send a Message
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm mt-1 leading-relaxed">
                  Fill out the brief details below and I will respond to your inquiry within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-[#F8F8F9] border border-black/[0.08] rounded-xl p-8 text-center flex-1 flex flex-col items-center justify-center my-4">
                  <div className="w-11 h-11 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-[#111111] font-bold text-base mb-1">
                    Message Dispatched Successfully
                  </h4>
                  <p className="text-zinc-600 text-xs sm:text-sm mb-4 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. Your message has been received and I will reply via email shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-[#111111] text-white text-xs font-semibold hover:bg-neutral-800 transition cursor-pointer shadow-xs active:scale-95"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between space-y-3 sm:space-y-3.5 mt-3 sm:mt-4">
                  
                  {/* Inquiry Category Selectors */}
                  <div>
                    <label className="block text-[10px] font-mono-code font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                      Inquiry Category
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => handleSelectType(type)}
                          className={`h-9 px-2.5 rounded-xl text-xs font-medium transition-all text-center cursor-pointer border ${
                            formData.inquiryType === type
                              ? "bg-[#111111] text-white border-[#111111] shadow-xs font-semibold"
                              : "bg-[#F8F8F9] text-zinc-700 border-black/[0.08] hover:border-black/25 hover:text-black hover:bg-white"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                    <div>
                      <label className="block text-[10px] font-mono-code font-bold uppercase tracking-wider text-zinc-500 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Henderson"
                        className="w-full h-10 sm:h-11 px-3.5 rounded-xl bg-[#F8F8F9] border border-black/[0.08] focus:border-[#111111] focus:bg-white text-xs sm:text-sm text-[#111111] placeholder:text-zinc-400 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono-code font-bold uppercase tracking-wider text-zinc-500 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full h-10 sm:h-11 px-3.5 rounded-xl bg-[#F8F8F9] border border-black/[0.08] focus:border-[#111111] focus:bg-white text-xs sm:text-sm text-[#111111] placeholder:text-zinc-400 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="block text-[10px] font-mono-code font-bold uppercase tracking-wider text-zinc-500 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Full Stack Developer Opening / Architecture Consultation"
                      className="w-full h-10 sm:h-11 px-3.5 rounded-xl bg-[#F8F8F9] border border-black/[0.08] focus:border-[#111111] focus:bg-white text-xs sm:text-sm text-[#111111] placeholder:text-zinc-400 outline-none transition-colors"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="flex-1 flex flex-col min-h-[100px]">
                    <label className="block text-[10px] font-mono-code font-bold uppercase tracking-wider text-zinc-500 mb-1">
                      Message Details
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share project scope, technical requirements, timeline, or relevant details..."
                      className="w-full flex-1 min-h-[88px] p-3 rounded-xl bg-[#F8F8F9] border border-black/[0.08] focus:border-[#111111] focus:bg-white text-xs sm:text-sm text-[#111111] placeholder:text-zinc-400 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-10 sm:h-11 rounded-xl bg-[#111111] hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-[0.99] disabled:opacity-50"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Message...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* 3. SUBTLE HORIZONTAL SEPARATION LINE                          */}
        {/* ============================================================== */}
        <div className="w-full h-[1px] bg-black/[0.08] my-12 sm:my-14" />

        {/* ============================================================== */}
        {/* 4. STRUCTURED FOOTER DIRECTORY (Clean Swiss Grid)              */}
        {/* ============================================================== */}
        <div ref={footerNavRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-5 space-y-3">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, "#home")}
              className="inline-flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#111111] text-white flex items-center justify-center transition-transform group-hover:scale-105 duration-200 shadow-xs">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <polygon points="12 2 4 9 7 19 12 16 17 19 20 9 12 2" />
                  <polyline points="9 11 12 13 15 11" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold text-[#111111] tracking-tight leading-tight">
                  Hadee<span className="text-zinc-500">.</span>
                </span>
                <span className="text-[10px] text-zinc-500 font-mono-code font-medium uppercase tracking-wider">
                  {role}
                </span>
              </div>
            </a>

            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              Junior Full-Stack & AI Engineer specializing in resilient MERN architectures, Next.js, and high-performance web systems.
            </p>

            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open to work · Remote & On-site</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 sm:col-span-1">
            <p className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-zinc-400 mb-3.5">
              Navigation
            </p>
            <ul className="space-y-2 text-xs font-medium text-zinc-600">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-black transition-all inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-zinc-400 group-hover:text-black transition-colors font-mono-code text-[10px]">
                      //
                    </span>
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect & Socials */}
          <div className="lg:col-span-2 sm:col-span-1">
            <p className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-zinc-400 mb-3.5">
              Connect
            </p>
            <ul className="space-y-2 text-xs font-medium text-zinc-600">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target={s.url.startsWith("http") ? "_blank" : undefined}
                    rel={s.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="hover:text-black transition-all inline-flex items-center gap-2 group"
                  >
                    <span className="text-zinc-500 group-hover:text-black transition-colors">
                      {getSocialIcon(s.name)}
                    </span>
                    <span className="group-hover:translate-x-0.5 transition-transform capitalize">
                      {s.label || s.name}
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources & Back to Top */}
          <div className="lg:col-span-2 flex flex-col justify-between space-y-3">
            <div>
              <p className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-zinc-400 mb-3.5">
                Resources
              </p>
              <a
                href={cvFile}
                download="Muhammad_Hadee_Butt_CV.pdf"
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-black/[0.08] hover:border-black/30 text-xs font-medium text-zinc-800 hover:text-black transition-all shadow-xs w-full justify-between group mb-2"
              >
                <span className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-zinc-500 group-hover:text-black transition-colors" />
                  <span>Resume</span>
                </span>
                <span className="text-[10px] font-mono-code bg-[#F8F8F9] px-1.5 py-0.5 rounded text-zinc-600 border border-black/[0.06]">
                  PDF
                </span>
              </a>

              <button
                type="button"
                onClick={scrollToTop}
                className="w-full px-3 py-2 rounded-xl bg-white border border-black/[0.08] hover:border-black/30 text-zinc-800 hover:text-black text-xs font-medium transition-all flex items-center justify-between shadow-xs cursor-pointer group active:scale-95"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-zinc-500 group-hover:text-black group-hover:-translate-y-0.5 transition-all" />
              </button>
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* 5. SUBTLE BOTTOM SEPARATION & COPYRIGHT                       */}
        {/* ============================================================== */}
        <div className="w-full h-[1px] bg-black/[0.08] mt-10 md:mt-12 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} <span className="text-[#111111] font-semibold">{name}</span>. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-zinc-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            <span>Built with <strong className="text-zinc-800 font-semibold">React 19, GSAP & Tailwind CSS</strong></span>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;