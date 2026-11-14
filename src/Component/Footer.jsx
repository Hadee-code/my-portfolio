import React, { useState, useEffect } from "react";
import { 
  ArrowUp, 
  Sparkles, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  User, 
  Tag, 
  ArrowRight,
  ArrowUpRight,
  FileText
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";
import profileData from "../data/profileData";
import Reveal from "./Reveal";
import { useToast } from "./ToastContext";

const inquiryTypes = [
  "Full-Time Role",
  "Project Contract",
  "Technical Consultation",
  "General Inquiry",
];

function Footer() {
  const { name, role, email, phone, location, socials, cvFile } = profileData;
  const { addToast } = useToast();

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    addToast("Downloading Muhammad Hadee Butt's CV...", "info", 2500);
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
    <footer id="footer" className="w-full bg-[#EAEAEA] text-[#111111] relative border-t border-black/[0.08] overflow-hidden">
      
      {/* Top Hairline Seam */}
      <div className="w-full h-[1px] bg-black/[0.08]" />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-14 md:pt-16 pb-10 md:pb-12">
        
        {/* ======================================================== */}
        {/* SECTION 1: INVITATION & DIRECT CONTACT STAGE             */}
        {/* ======================================================== */}
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <Reveal direction="down" delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#111111]" />
              <span className="text-[#111111] text-xs font-bold uppercase tracking-wider font-mono-code">
                Contact & Opportunities
              </span>
            </div>
          </Reveal>
          
          <Reveal direction="clip-up" delay={200}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
              Let's Discuss Professional <span className="font-light italic text-zinc-500">Opportunities</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <p className="text-zinc-600 text-sm sm:text-base mt-3 leading-relaxed font-normal max-w-2xl mx-auto">
              Open for full-time engineering roles, technical contracts, and architecture discussions. Let's start a conversation.
            </p>
          </Reveal>
        </div>

        {/* 2-Column Consolidated Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Direct Channels & Status */}
          <Reveal direction="left" delay={200} className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
            
            {/* Status Card */}
            <div className="bg-white border border-black/[0.08] rounded-2xl p-5 shadow-xs relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-[#111111] font-bold text-sm">Available for Impact</span>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono-code">
                  FAST RESPONSE
                </span>
              </div>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal">
                Currently taking inquiries for full-stack engineering roles (MERN, Next.js, PostgreSQL) and software contracts.
              </p>
            </div>

            {/* Email Card with One-Click Copy */}
            <div className="group bg-white border border-black/[0.08] hover:border-black/30 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-0.5 shadow-xs hover:shadow-[0_12px_24px_rgba(0,0,0,0.04)] flex items-center justify-between">
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-[#111111] flex items-center justify-center text-white shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-zinc-500 text-[10px] uppercase tracking-wider font-bold font-mono-code">Email Address</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-[#111111] font-bold text-xs sm:text-sm hover:text-black transition-colors truncate block"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-full bg-[#F8F8F9] border border-black/[0.08] text-zinc-700 hover:text-black hover:border-black/30 transition shrink-0 cursor-pointer active:scale-95 shadow-xs"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card with One-Click Copy */}
            <div className="group bg-white border border-black/[0.08] hover:border-black/30 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-0.5 shadow-xs hover:shadow-[0_12px_24px_rgba(0,0,0,0.04)] flex items-center justify-between">
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-[#111111] flex items-center justify-center text-white shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-zinc-500 text-[10px] uppercase tracking-wider font-bold font-mono-code">Phone / WhatsApp</p>
                  <a
                    href={`tel:${phone}`}
                    className="text-[#111111] font-bold text-xs sm:text-sm hover:text-black transition-colors truncate block"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="p-2 rounded-full bg-[#F8F8F9] border border-black/[0.08] text-zinc-700 hover:text-black hover:border-black/30 transition shrink-0 cursor-pointer active:scale-95 shadow-xs"
                title="Copy phone to clipboard"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location & Live Ticking Clock Card */}
            <div className="bg-white border border-black/[0.08] rounded-2xl p-4 sm:p-5 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#111111] flex items-center justify-center text-white shadow-xs shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-wider font-bold font-mono-code">Location</p>
                  <p className="text-[#111111] font-bold text-xs sm:text-sm">
                    {location}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <div className="flex items-center gap-1.5 text-xs text-zinc-600 font-bold justify-end font-mono-code">
                  <Clock className="w-3.5 h-3.5 text-zinc-500" />
                  <span>PKT (UTC+5)</span>
                </div>
                <p className="text-xs text-zinc-800 font-mono-code mt-0.5 font-bold">
                  {localTime || "12:00 PM"}
                </p>
              </div>
            </div>

            {/* Quick Actions Strip */}
            <div className="pt-1 flex flex-col sm:flex-row items-center gap-2.5">
              <a
                href={cvFile}
                download="Muhammad_Hadee_Butt_CV.pdf"
                onClick={handleDownloadCV}
                className="w-full sm:w-auto flex-1 bg-[#111111] text-white font-semibold px-5 py-3 rounded-2xl text-xs sm:text-sm hover:bg-neutral-800 active:scale-95 transition-all shadow-xs flex items-center justify-center gap-2 group"
              >
                <Download className="w-4 h-4 text-zinc-300 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Résumé (PDF)</span>
              </a>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-white border border-black/[0.08] hover:border-black/30 text-zinc-700 hover:text-black transition-all shadow-xs hover:-translate-y-0.5 active:scale-95"
                    title={s.label}
                  >
                    {getSocialIcon(s.name)}
                  </a>
                ))}
              </div>
            </div>

          </Reveal>

          {/* Right Column: Direct Message Form */}
          <Reveal direction="right" delay={300} className="lg:col-span-7 flex flex-col justify-between">
            <div className="h-full bg-white border border-black/[0.08] rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-display text-[#111111] text-xl sm:text-2xl font-bold">Send a Direct Message</h3>
                  <Sparkles className="w-5 h-5 text-zinc-600" />
                </div>
                
                <p className="text-zinc-600 text-xs sm:text-sm mb-5 font-normal">
                  Leave your project scope or recruitment details below and I will review and reply within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="bg-[#F8F8F9] border border-black/[0.08] rounded-2xl p-6 text-center animate-fadeIn">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-display text-[#111111] font-bold text-lg mb-1">Message Dispatched!</h4>
                    <p className="text-zinc-600 text-xs sm:text-sm mb-4 max-w-sm mx-auto">
                      Thank you for reaching out. Your inquiry has been received and I will reply via email shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2 rounded-full bg-[#111111] text-white text-xs font-bold hover:bg-neutral-800 transition cursor-pointer shadow-xs"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    
                    {/* Inquiry Category Pills */}
                    <div>
                      <label className="block text-zinc-500 text-[11px] font-bold uppercase tracking-wider mb-2 font-mono-code">
                        Inquiry Category
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
                        {inquiryTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => handleSelectType(type)}
                            className={`py-1.5 px-2.5 rounded-xl text-xs font-semibold transition text-center cursor-pointer border ${
                              formData.inquiryType === type
                                ? "bg-[#111111] text-white border-[#111111] shadow-xs"
                                : "bg-[#F8F8F9] text-zinc-700 border-black/[0.08] hover:border-black/30 hover:bg-white"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-zinc-500 text-[11px] font-bold uppercase tracking-wider mb-1.5 font-mono-code">
                          Your Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                            <User className="w-3.5 h-3.5" />
                          </div>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Alex Henderson"
                            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[#F8F8F9] border border-black/[0.08] focus:border-black focus:bg-white text-xs sm:text-sm text-[#111111] placeholder:text-zinc-400 outline-none transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-zinc-500 text-[11px] font-bold uppercase tracking-wider mb-1.5 font-mono-code">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                            <Mail className="w-3.5 h-3.5" />
                          </div>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e.g. alex@company.com"
                            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[#F8F8F9] border border-black/[0.08] focus:border-black focus:bg-white text-xs sm:text-sm text-[#111111] placeholder:text-zinc-400 outline-none transition"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Subject Input */}
                    <div>
                      <label className="block text-zinc-500 text-[11px] font-bold uppercase tracking-wider mb-1.5 font-mono-code">
                        Subject
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                          <Tag className="w-3.5 h-3.5" />
                        </div>
                        <input
                          type="text"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="e.g. Full Stack Developer Opening"
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[#F8F8F9] border border-black/[0.08] focus:border-black focus:bg-white text-xs sm:text-sm text-[#111111] placeholder:text-zinc-400 outline-none transition"
                        />
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label className="block text-zinc-500 text-[11px] font-bold uppercase tracking-wider mb-1.5 font-mono-code">
                        Message Details
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share details about the role, project scope, requirements..."
                        className="w-full p-3.5 rounded-xl bg-[#F8F8F9] border border-black/[0.08] focus:border-black focus:bg-white text-xs sm:text-sm text-[#111111] placeholder:text-zinc-400 outline-none transition resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 rounded-full bg-[#111111] hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-[0.99] disabled:opacity-50 mt-1"
                    >
                      {submitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Transmitting...</span>
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
          </Reveal>

        </div>

        {/* ======================================================== */}
        {/* SECTION 2: SUBTLE HORIZONTAL SEPARATION LINE             */}
        {/* ======================================================== */}
        <div className="w-full h-[1px] bg-black/[0.08] my-10 md:my-12" />

        {/* ======================================================== */}
        {/* SECTION 3: STRUCTURED 4-COLUMN FOOTER DIRECTORY           */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Column 1: Brand & Philosophy (5 Cols on lg) */}
          <div className="lg:col-span-5 space-y-3.5">
            <a href="#home" className="inline-flex items-center gap-2.5 group">
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
                <span className="font-display text-xl font-extrabold text-[#111111] tracking-tight leading-tight">
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

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open to work · Remote & On-site</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 Cols on lg) */}
          <div className="lg:col-span-3">
            <p className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-zinc-400 mb-3.5">
              Navigation
            </p>
            <ul className="space-y-2 text-xs font-medium text-zinc-600">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-black transition-colors inline-flex items-center gap-1.5 group"
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

          {/* Column 3: Connect & Socials (2 Cols on lg) */}
          <div className="lg:col-span-2">
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
                    className="hover:text-black transition-colors inline-flex items-center gap-2 group"
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

          {/* Column 4: Quick Actions & Back to Top (2 Cols on lg) */}
          <div className="lg:col-span-2 flex flex-col justify-between space-y-3">
            <div>
              <p className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-zinc-400 mb-3.5">
                Resources
              </p>
              <a
                href={cvFile}
                download="Muhammad_Hadee_Butt_CV.pdf"
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-black/[0.08] text-xs font-semibold text-zinc-800 hover:text-black hover:border-black/30 transition-all shadow-xs w-full justify-between group"
              >
                <span className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-zinc-500 group-hover:text-black transition-colors" />
                  <span>Resume</span>
                </span>
                <span className="text-[10px] font-mono-code bg-[#F3F3F3] px-1.5 py-0.5 rounded text-zinc-600 border border-black/[0.06]">
                  PDF
                </span>
              </a>
            </div>

            <div>
              <button
                type="button"
                onClick={scrollToTop}
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-black/[0.08] hover:border-black/30 text-zinc-800 hover:text-black text-xs font-semibold transition-all flex items-center justify-between shadow-xs cursor-pointer hover:-translate-y-0.5 group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-zinc-500 group-hover:text-black group-hover:-translate-y-0.5 transition-all" />
              </button>
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* SECTION 4: SUBTLE HORIZONTAL SEPARATION LINE             */}
        {/* ======================================================== */}
        <div className="w-full h-[1px] bg-black/[0.08] mt-10 md:mt-12 mb-6" />

        {/* ======================================================== */}
        {/* SECTION 5: BOTTOM COPYRIGHT & METADATA BAR               */}
        {/* ======================================================== */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} <span className="text-[#111111] font-bold">{name}</span>. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-zinc-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            <span>Built with <strong className="text-zinc-800 font-semibold">React 19 & Tailwind CSS v4</strong></span>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;