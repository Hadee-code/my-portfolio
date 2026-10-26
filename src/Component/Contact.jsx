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
  Sparkles, 
  User, 
  Tag, 
  ArrowRight
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

function Contact() {
  const { email, phone, location, socials } = profileData;
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
      // Format time in Asia/Karachi timezone
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
    <section id="contact" className="w-full bg-[#F3F3F3] text-[#111111] px-6 md:px-12 lg:px-16 py-24 border-t border-black/[0.06] relative overflow-hidden bg-grid-pattern">
      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal direction="down" delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] mb-3.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#111111]" />
              <span className="text-[#111111] text-xs font-bold uppercase tracking-wider">Contact & Inquiries</span>
            </div>
          </Reveal>
          
          <Reveal direction="clip-up" delay={200}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
              Let's Build Something <span className="font-light italic text-zinc-500">Exceptional</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <p className="text-zinc-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
              Have an engineering opening, a high-impact project, or looking to collaborate with a skilled Full Stack Developer? Let's connect.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Contact Cards & Live Status */}
          <Reveal direction="left" delay={200} className="lg:col-span-5 space-y-5">
            
            {/* Status Card */}
            <div className="bg-white border border-black/[0.08] rounded-3xl p-6 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <span className="text-[#111111] font-bold text-sm">Available for Opportunities</span>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  FAST RESPONSE
                </span>
              </div>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal">
                Open for full-time engineering roles, high-impact contracts, and remote engineering positions worldwide.
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

            {/* Location & Live Ticking Local Time Card */}
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

              {/* Live Ticking Time */}
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

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-zinc-500 text-xs uppercase tracking-wider font-bold mb-3">Connect on Professional Socials</p>
              <div className="flex flex-wrap gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-white border border-black/[0.08] hover:border-black/30 text-zinc-700 hover:text-black text-xs font-semibold transition-all inline-flex items-center gap-2 shadow-xs hover:-translate-y-0.5"
                  >
                    {getSocialIcon(s.name)}
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right Column: Interactive Form */}
          <Reveal direction="right" delay={300} className="lg:col-span-7">
            <div className="bg-white border border-black/[0.08] rounded-3xl p-7 sm:p-9 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display text-[#111111] text-2xl font-bold">Send a Direct Message</h3>
                <Sparkles className="w-5 h-5 text-zinc-600" />
              </div>
              
              <p className="text-zinc-600 text-sm mb-7 font-normal">
                Leave a message below and I will review and reply to your inquiry promptly.
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
                  
                  {/* Inquiry Type Selector Buttons */}
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
                          className={`py-2 px-2.5 rounded-full text-xs font-semibold transition text-center cursor-pointer ${
                            formData.inquiryType === type
                              ? "bg-[#111111] text-white shadow-xs font-semibold"
                              : "bg-[#F8F8F9] text-zinc-700 hover:text-black border border-black/[0.06]"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-zinc-700 text-xs font-semibold uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Alex Johnson"
                          className="w-full bg-[#F8F8F9] border border-black/[0.08] rounded-xl pl-10 pr-4 py-3 text-[#111111] text-sm focus:outline-none focus:bg-white focus:border-black focus:ring-1 focus:ring-black transition placeholder-zinc-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-zinc-700 text-xs font-semibold uppercase tracking-wider mb-2">
                        Your Email
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@company.com"
                          className="w-full bg-[#F8F8F9] border border-black/[0.08] rounded-xl pl-10 pr-4 py-3 text-[#111111] text-sm focus:outline-none focus:bg-white focus:border-black focus:ring-1 focus:ring-black transition placeholder-zinc-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-zinc-700 text-xs font-semibold uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <Tag className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Full-Stack Developer Opening / Collaboration"
                        className="w-full bg-[#F8F8F9] border border-black/[0.08] rounded-xl pl-10 pr-4 py-3 text-[#111111] text-sm focus:outline-none focus:bg-white focus:border-black focus:ring-1 focus:ring-black transition placeholder-zinc-400"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-zinc-700 text-xs font-semibold uppercase tracking-wider">
                        Message Details
                      </label>
                      <span className="text-[11px] text-zinc-400 font-mono-code">
                        {formData.message.length} characters
                      </span>
                    </div>
                    <div className="relative">
                      <textarea
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Hi Muhammad, we'd like to discuss an opportunity regarding..."
                        className="w-full bg-[#F8F8F9] border border-black/[0.08] rounded-xl p-4 text-[#111111] text-sm focus:outline-none focus:bg-white focus:border-black focus:ring-1 focus:ring-black transition resize-none leading-relaxed placeholder-zinc-400"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#111111] text-white py-3.5 rounded-full text-sm font-bold hover:bg-neutral-800 active:scale-95 transition-all shadow-sm cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 group"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Dispatching Message...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}

export default Contact;
