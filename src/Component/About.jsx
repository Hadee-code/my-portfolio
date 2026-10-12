import React from "react";
import { 
  User, 
  Code2, 
  GraduationCap, 
  Briefcase, 
  MapPin, 
  CheckCircle, 
  Mail, 
  Phone, 
  Download, 
  Terminal, 
  Layers, 
  Database, 
  ShieldCheck, 
  ArrowRight 
} from "lucide-react";
import profileData from "../data/profileData";
import Reveal from "./Reveal";
import { useToast } from "./ToastContext";

function About() {
  const { name, about, cvFile, email, phone, location, availability, aboutImage } = profileData;
  const { addToast } = useToast();

  const handleDownloadCV = () => {
    addToast("Downloading Muhammad Hadee Butt's CV...", "info");
  };

  const infoItems = [
    {
      label: "Full Name",
      value: name,
      icon: <User className="w-4 h-4 text-blue-400" />,
    },
    {
      label: "Role",
      value: "Junior MERN Stack Developer",
      icon: <Code2 className="w-4 h-4 text-cyan-400" />,
    },
    {
      label: "Education",
      value: "BSIT — University of Education",
      icon: <GraduationCap className="w-4 h-4 text-indigo-400" />,
    },
    {
      label: "Experience",
      value: "Techset Solutions (Full Stack)",
      icon: <Briefcase className="w-4 h-4 text-emerald-400" />,
    },
    {
      label: "Location",
      value: location,
      icon: <MapPin className="w-4 h-4 text-rose-400" />,
    },
    {
      label: "Status",
      value: availability,
      icon: <CheckCircle className="w-4 h-4 text-teal-400" />,
    },
    {
      label: "Email",
      value: email,
      icon: <Mail className="w-4 h-4 text-amber-400" />,
    },
    {
      label: "Phone",
      value: phone,
      icon: <Phone className="w-4 h-4 text-sky-400" />,
    },
  ];

  const pillars = [
    {
      title: "Full-Stack Web Architecture",
      desc: "End-to-end resilient MERN & Next.js systems engineered with reusable components, fast load times, and clean routing.",
      badge: "Architecture",
      color: "from-blue-600 to-indigo-600",
      icon: <Layers className="w-5 h-5" />,
    },
    {
      title: "API & Data Modeling",
      desc: "Structured RESTful APIs using Node.js & Express paired with normalized PostgreSQL (Prisma) and flexible MongoDB schemas.",
      badge: "Backend & DB",
      color: "from-indigo-600 to-cyan-600",
      icon: <Database className="w-5 h-5" />,
    },
    {
      title: "Production Security & Polish",
      desc: "JWT authentication, token lifecycles, role-based access control, input validation, and pixel-perfect responsive Tailwind styling.",
      badge: "Security & UI",
      color: "from-cyan-600 to-blue-600",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
  ];

  return (
    <section id="about" className="w-full bg-[#070A12] px-6 md:px-10 lg:px-16 py-24 border-t border-slate-800/80 relative overflow-hidden bg-grid-pattern">
      {/* Background Ambient Breathing Lights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal direction="down" delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Engineering Profile</span>
            </div>
          </Reveal>
          
          <Reveal direction="clip-up" delay={200}>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-5">
              Architecting <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">High-Performance</span> Web Systems
            </h2>
          </Reveal>
          
          <Reveal direction="up" delay={300}>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              {about}
            </p>
          </Reveal>
        </div>

        {/* Split Layout: Visual Bio Terminal & Engineering Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-center">
          
          {/* Left Column: Visual Bio with Real Image & Code Frame */}
          <Reveal direction="left" delay={200} className="lg:col-span-5">
            <div className="bg-[#0F172A]/90 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden group">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 font-mono-code text-xs text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span>hadee_profile.ts</span>
                  </span>
                </div>
                <span className="text-[10px] font-mono-code text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  ONLINE
                </span>
              </div>

              {/* Framed Image Showcase */}
              <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[4/3] bg-slate-900 border border-slate-800">
                <img
                  src={aboutImage}
                  alt="Muhammad Hadee Butt"
                  className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">{name}</p>
                    <p className="text-blue-400 text-xs">MERN & Next.js Developer</p>
                  </div>
                  <span className="text-[10px] bg-blue-600/90 text-white font-semibold px-2 py-1 rounded-lg">
                    Techset Solutions
                  </span>
                </div>
              </div>

              {/* TypeScript Terminal Object */}
              <div className="bg-[#070A12] rounded-xl p-4 border border-slate-800/80 font-mono-code text-xs text-slate-300 leading-relaxed overflow-x-auto">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">developer</span> = &#123;
                <div className="pl-4">
                  <div><span className="text-slate-400">name:</span> <span className="text-emerald-300">"{name}"</span>,</div>
                  <div><span className="text-slate-400">status:</span> <span className="text-emerald-300">"Ready for impact"</span>,</div>
                  <div><span className="text-slate-400">stack:</span> [<span className="text-cyan-300">"MERN"</span>, <span className="text-cyan-300">"Next.js"</span>, <span className="text-cyan-300">"PostgreSQL"</span>],</div>
                  <div><span className="text-slate-400">codeFocus:</span> <span className="text-amber-300">"Performance & Clean Arch"</span></div>
                </div>
                &#125;;
              </div>
            </div>
          </Reveal>

          {/* Right Column: 3 Panoramic Engineering Pillars */}
          <div className="lg:col-span-7 space-y-5">
            {pillars.map((pillar, idx) => (
              <Reveal key={pillar.title} direction="right" delay={150 * (idx + 1)}>
                <div className="group bg-[#0F172A]/75 backdrop-blur-xl rounded-2xl p-6 sm:p-7 border border-slate-800/90 hover:border-blue-500/60 transition-all duration-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform`}>
                        {pillar.icon}
                      </div>
                      <h3 className="text-white text-lg sm:text-xl font-bold group-hover:text-blue-400 transition-colors">
                        {pillar.title}
                      </h3>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {pillar.badge}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed pl-13 font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>

        {/* 4-Column Professional Specifications Matrix */}
        <Reveal direction="up" delay={300}>
          <div className="glass-panel rounded-3xl p-7 sm:p-9 shadow-2xl backdrop-blur-md mb-12 border border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-7 border-b border-slate-800/80 gap-4">
              <div>
                <span className="text-blue-400 text-xs font-bold uppercase tracking-wider block mb-1">
                  Professional Breakdown
                </span>
                <h3 className="text-white text-2xl font-black">
                  Core Engineering Profile & Attributes
                </h3>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold self-start sm:self-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Available for Opportunities</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {infoItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-3.5 p-4 rounded-2xl bg-[#070A12]/80 border border-slate-800/80 hover:border-blue-500/50 hover:bg-[#0B101E] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-slate-400 text-[11px] uppercase tracking-wider font-bold block">
                      {item.label}
                    </span>
                    <span className="text-slate-200 text-sm font-bold mt-0.5 block truncate group-hover:text-blue-400 transition-colors">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Action Bar */}
        <Reveal direction="up" delay={400}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={cvFile}
              download="Muhammad_Hadee_Butt_CV.pdf"
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white font-bold px-8 py-3.5 rounded-xl text-sm hover:brightness-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-lg shadow-blue-500/25 inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Full CV</span>
            </a>

            <a
              href="#contact"
              className="border border-slate-700 bg-slate-900/90 text-slate-200 px-8 py-3.5 rounded-xl text-sm font-semibold hover:border-blue-500 hover:text-blue-400 hover:bg-slate-800 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 inline-flex items-center gap-2 group"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default About;
