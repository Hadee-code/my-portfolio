import React, { useState, useEffect } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Download,
  ArrowRight
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";
import profileData from "../data/profileData";
import { useToast } from "./ToastContext";

const inquiryTypes = [
  "Full-Time Role",
  "Project Contract",
  "Technical Consultation",
  "General Inquiry",
];

export function Contact() {
  const { email, phone, location, socials, cvFile } = profileData;
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

  const handleDownloadCV = () => {
    addToast("Downloading Muhammad Hadee Butt's CV...", "info", 2500);
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
    <section id="contact" className="w-full bg-[#F3F3F3] text-[#111111] px-6 md:px-12 lg:px-16 py-16 md:py-20 border-t border-black/[0.08] relative">
      <div className="w-full max-w-[1400px] mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
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

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start lg:items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full gap-3 lg:gap-0">
            
            {/* Availability Card */}
            <div className="bg-white border border-black/[0.08] hover:border-black/30 rounded-2xl p-4 sm:p-4.5 transition-all duration-200 shadow-xs flex items-center justify-between">
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

            {/* Email Card */}
            <div className="bg-white border border-black/[0.08] hover:border-black/30 rounded-2xl p-4 sm:p-4.5 transition-all duration-200 shadow-xs flex items-center justify-between">
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

            {/* Phone Card */}
            <div className="bg-white border border-black/[0.08] hover:border-black/30 rounded-2xl p-4 sm:p-4.5 transition-all duration-200 shadow-xs flex items-center justify-between">
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

            {/* Location Card */}
            <div className="bg-white border border-black/[0.08] hover:border-black/30 rounded-2xl p-4 sm:p-4.5 transition-all duration-200 shadow-xs flex items-center justify-between">
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

            {/* CV & Social Links */}
            <div className="bg-white border border-black/[0.08] hover:border-black/30 rounded-2xl p-3.5 sm:p-4 transition-all duration-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
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

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 flex flex-col h-full">
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

      </div>
    </section>
  );
}

export default Contact;