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
  Heart
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";
import profileData from "../data/profileData";
import Reveal from "./Reveal";
import { useToast } from "./ToastContext";

const inquiryTypes = [
  "Full-Time Role",
  "Freelance Project",
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
    addToast("Email copied to clipboard!", "success");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    addToast("Phone number copied to clipboard!", "success");
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
    addToast("Downloading Muhammad Hadee Butt's CV...", "info");
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Profile", href: "#profile" },
    { name: "Career", href: "#career" },
    { name: "Showcase", href: "#showcase" },
    { name: "Arsenal", href: "#arsenal" },
    { name: "AI Lab", href: "#ai-lab" },
    { name: "Education", href: "#education" },
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
    <footer id="footer" className="w-full bg-[#EAEAEA] text-[#111111] relative border-t border-black/[0.08] overflow-hidden">
      
      {/* Top Accent Line */}
      <div className="w-full h-[1px] bg-black/[0.08]" />

      {/* Main Consolidated Contact & Inquiries Section */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-16">
        
        {/* Section Heading & Invitation */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal direction="down" delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] mb-3.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#111111]" />
              <span className="text-[#111111] text-xs font-bold uppercase tracking-wider">08 / Contact & Opportunities</span>
            </div>
          </Reveal>
          
          <Reveal direction="clip-up" delay={200}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
              Let's Discuss Professional <span className="font-light italic text-zinc-500">Opportunities</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <p className="text-zinc-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
              Open for full-time engineering roles, technical contracts, and collaboration on high-performance web systems and AI workflows. Let's start a conversation.
            </p>
          </Reveal>
        </div>

        {/* 2-Column Consolidated Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-start">
          
          {/* Left Column: Direct Channels, Status & CV Download */}
          <Reveal direction="left" delay={200} className="lg:col-span-5 space-y-4">
            
            {/* Status Card */}
            <div className="bg-white border border-black/[0.08] rounded-3xl p-6 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <span className="text-[#111111] font-bold text-sm">Available for Impact</span>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  FAST RESPONSE
                </span>
              </div>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal">
                Currently taking inquiries for full-stack engineering roles (MERN, Next.js, PostgreSQL) and forward-looking AI engineering projects.
              </p>
            </div>

            {/* Email Card with One-Click Copy */}
            <div className="group bg-white border border-black/[0.08] hover:border-black/30 rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)] flex items-center justify-between">
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="w-11 h-11 rounded-2xl bg-[#111111] flex items-center justify-center text-white shadow-xs shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-zinc-500 text-[11px] uppercase tracking-wider font-bold">Email Address</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-[#111111] font-bold text-sm sm:text-base hover:text-black transition-colors truncate block"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2.5 rounded-full bg-[#F8F8F9] border border-black/[0.08] text-zinc-700 hover:text-black hover:border-black/30 transition shrink-0 cursor-pointer active:scale-95 shadow-xs"
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
            <div className="group bg-white border border-black/[0.08] hover:border-black/30 rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)] flex items-center justify-between">
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="w-11 h-11 rounded-2xl bg-[#111111] flex items-center justify-center text-white shadow-xs shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-zinc-500 text-[11px] uppercase tracking-wider font-bold">Phone / WhatsApp</p>
                  <a
                    href={`tel:${phone}`}
                    className="text-[#111111] font-bold text-sm sm:text-base hover:text-black transition-colors truncate block"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="p-2.5 rounded-full bg-[#F8F8F9] border border-black/[0.08] text-zinc-700 hover:text-black hover:border-black/30 transition shrink-0 cursor-pointer active:scale-95 shadow-xs"
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
            <div className="bg-white border border-black/[0.08] rounded-3xl p-5 sm:p-6 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#111111] flex items-center justify-center text-white shadow-xs shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-zinc-500 text-[11px] uppercase tracking-wider font-bold">Location</p>
                  <p className="text-[#111111] font-bold text-sm sm:text-base">
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

            {/* Social Profiles & Download CV Action Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={cvFile}
                download="Muhammad_Hadee_Butt_CV.pdf"
                onClick={handleDownloadCV}
                className="w-full sm:w-auto flex-1 bg-[#111111] text-white font-semibold px-6 py-3.5 rounded-2xl text-xs sm:text-sm hover:bg-neutral-800 active:scale-95 transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-zinc-300" />
                <span>Download Résumé (PDF)</span>
              </a>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-white border border-black/[0.08] hover:border-black/30 text-zinc-700 hover:text-black transition-all shadow-xs hover:-translate-y-0.5"
                    title={s.label}
                  >
                    {getSocialIcon(s.name)}
                  </a>
                ))}
              </div>
            </div>

          </Reveal>

          {/* Right Column: Direct Message Form */}
          <Reveal direction="right" delay={300} className="lg:col-span-7">
            <div className="bg-white border border-black/[0.08] rounded-3xl p-7 sm:p-9 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display text-[#111111] text-2xl font-bold">Send a Direct Message</h3>
                <Sparkles className="w-5 h-5 text-zinc-600" />
              </div>
              
              <p className="text-zinc-600 text-sm mb-7 font-normal">
                Leave your project scope or recruitment details below and I will review and reply within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="bg-[#F8F8F9] border border-black/[0.08] rounded-2xl p-8 text-center animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-display text-[#111111] font-bold text-xl mb-1.5">Message Dispatched!</h4>
                  <p className="text-zinc-600 text-sm mb-6 max-w-sm mx-auto">
                    Thank you for reaching out. Your inquiry has been received and I will reply via email shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 rounded-full bg-[#111111] text-white text-xs font-bold hover:bg-neutral-800 transition cursor-pointer shadow-xs"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Inquiry Category Pills */}
                  <div>
                    <label className="block text-zinc-500 text-xs font-bold uppercase tracking-wider mb-2.5">
                      Inquiry Category
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => handleSelectType(type)}
                          className={`py-2 px-3 rounded-xl text-xs font-semibold transition text-center cursor-pointer border ${
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-zinc-500 text-xs font-bold uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Alex Henderson"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8F8F9] border border-black/[0.08] focus:border-black focus:bg-white text-sm text-[#111111] placeholder:text-zinc-400 outline-none transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-zinc-500 text-xs font-bold uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. alex@company.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8F8F9] border border-black/[0.08] focus:border-black focus:bg-white text-sm text-[#111111] placeholder:text-zinc-400 outline-none transition"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="block text-zinc-500 text-xs font-bold uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                        <Tag className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Full Stack Developer Opening — Tech Team"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8F8F9] border border-black/[0.08] focus:border-black focus:bg-white text-sm text-[#111111] placeholder:text-zinc-400 outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-zinc-500 text-xs font-bold uppercase tracking-wider mb-2">
                      Message Details
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details about the role, technical requirements, timeline, or questions..."
                      className="w-full p-4 rounded-xl bg-[#F8F8F9] border border-black/[0.08] focus:border-black focus:bg-white text-sm text-[#111111] placeholder:text-zinc-400 outline-none transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-full bg-[#111111] hover:bg-neutral-800 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.99] disabled:opacity-50"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </Reveal>

        </div>

        {/* Bottom Quick Navigation & Brand Strip */}
        <div className="pt-10 border-t border-black/[0.08] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Brand info */}
          <div className="md:col-span-4 flex items-center gap-3">
            <a href="#home" className="inline-flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-[#111111] text-white flex items-center justify-center transition-transform group-hover:scale-105 duration-200">
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
              <span className="font-display text-2xl font-extrabold text-[#111111]">
                Hadee<span className="text-zinc-500">.</span>
              </span>
            </a>
            <span className="text-xs text-zinc-500 font-medium">
              — {role}
            </span>
          </div>

          {/* Nav links */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-center gap-4 text-xs font-semibold text-zinc-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-full bg-white border border-black/[0.1] hover:border-black/30 text-zinc-800 hover:text-black text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs cursor-pointer hover:-translate-y-0.5"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 mt-6 border-t border-black/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} <span className="text-[#111111] font-bold">{name}</span>. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-zinc-500">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>using <strong className="text-zinc-800 font-semibold">React 19 & Tailwind CSS v4</strong></span>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
