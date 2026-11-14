import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Download, 
  Terminal, 
  Layers, 
  Database, 
  ShieldCheck, 
  ArrowRight,
  Copy,
  Check,
  FileCode2
} from "lucide-react";
import profileData from "../data/profileData";
import { useToast } from "./ToastContext";
import InteractiveTilt from "./InteractiveTilt";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const { name, about, cvFile } = profileData;
  const { addToast } = useToast();
  const [activeCodeTab, setActiveCodeTab] = useState("developer.ts");
  const [copiedCode, setCopiedCode] = useState(false);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const ideRef = useRef(null);
  const pillarsRef = useRef(null);

  const handleDownloadCV = () => {
    addToast("Downloading Muhammad Hadee Butt's CV...", "info");
  };

  const codeFiles = {
    "developer.ts": {
      badge: "ONLINE",
      badgeColor: "text-emerald-800 bg-emerald-50 border-emerald-200",
      content: `const developer: Engineer = {
  name: "${name}",
  role: "Full-Stack & AI Engineer",
  status: "Ready for high-impact production roles",
  stack: ["MERN", "Next.js", "PostgreSQL", "Python"],
  focus: "Performance, scalable architecture & clean code"
};`,
    },
    "architecture.ts": {
      badge: "PATTERNS",
      badgeColor: "text-blue-800 bg-blue-50 border-blue-200",
      content: `const architecture: SystemDesign = {
  patterns: ["Component Hierarchies", "RESTful APIs", "MVC"],
  security: ["JWT Auth", "RBAC Route Guards", "Bcrypt"],
  databases: ["PostgreSQL (Prisma)", "MongoDB Atlas"],
  scalability: "Normalized schemas & optimized queries"
};`,
    },
    "metrics.ts": {
      badge: "BENCHMARKS",
      badgeColor: "text-amber-800 bg-amber-50 border-amber-200",
      content: `const productionMetrics: Benchmarks = {
  averageLatency: "~38ms API response time",
  architectureQuality: "100% modular & maintainable",
  testingDiscipline: "Automated Postman test collections",
  buildTarget: "Vite 8 & Tailwind CSS v4 optimized"
};`,
    },
    "workflow.ts": {
      badge: "STANDARDS",
      badgeColor: "text-zinc-800 bg-zinc-100 border-black/[0.08]",
      content: `const workflow: DevelopmentCycle = {
  versionControl: "Git Flow & structured branch reviews",
  methodology: "Agile sprints & fast iterative delivery",
  collaboration: ["Pull Requests", "Code Reviews"],
  availability: "Actively seeking engineering roles"
};`,
    },
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeFiles[activeCodeTab].content);
    setCopiedCode(true);
    addToast(`Copied ${activeCodeTab} code to clipboard!`, "success", 2000);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const pillars = [
    {
      title: "Full-Stack Web Architecture",
      desc: "End-to-end resilient MERN & Next.js systems engineered with reusable components, fast load times, and clean routing.",
      badge: "Architecture",
      icon: <Layers className="w-5 h-5" />,
    },
    {
      title: "API & Data Modeling",
      desc: "Structured RESTful APIs using Node.js & Express paired with normalized PostgreSQL (Prisma) and flexible MongoDB schemas.",
      badge: "Backend & DB",
      icon: <Database className="w-5 h-5" />,
    },
    {
      title: "Production Security & Polish",
      desc: "JWT authentication, token lifecycles, role-based access control, input validation, and pixel-perfect responsive Tailwind styling.",
      badge: "Security & UI",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
  ];

  // GSAP ScrollTrigger Animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // IDE entrance
      if (ideRef.current) {
        gsap.fromTo(
          ideRef.current,
          { opacity: 0, x: -40, scale: 0.96 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ideRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Pillars staggered entrance
      if (pillarsRef.current) {
        gsap.fromTo(
          pillarsRef.current.children,
          { opacity: 0, x: 40, y: 20 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: pillarsRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="profile" 
      className="w-full bg-[#F3F3F3] text-[#111111] px-6 md:px-12 lg:px-16 py-14 md:py-18 border-t border-black/[0.06] relative overflow-hidden bg-grid-pattern"
    >
      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#111111]" />
            <span className="text-[#111111] text-xs font-bold uppercase tracking-wider">Engineering Profile</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3.5 text-[#111111]">
            Architecting <span className="font-light italic text-zinc-500">High-Performance</span> Web Systems
          </h2>
          
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            {about}
          </p>
        </div>

        {/* Split Layout: Interactive IDE Inspector & Engineering Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Interactive IDE Editor Window */}
          <div ref={ideRef} className="lg:col-span-6 flex flex-col justify-between">
            <InteractiveTilt maxTilt={5} scale={1.01} className="h-full">
              <div className="h-full bg-white border border-black/[0.08] rounded-3xl p-5 sm:p-6 shadow-sm hover:border-black/20 transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* IDE Window Top Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-black/[0.06]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#111111] inline-block" />
                      <span className="ml-2 font-mono-code text-xs text-zinc-500 flex items-center gap-1.5 font-medium">
                        <Terminal className="w-3.5 h-3.5 text-zinc-700" />
                        <span>workspace/core</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono-code px-2.5 py-0.5 rounded-full border font-semibold ${codeFiles[activeCodeTab].badgeColor}`}>
                        {codeFiles[activeCodeTab].badge}
                      </span>

                      <button
                        type="button"
                        onClick={handleCopyCode}
                        className="p-1.5 rounded-lg bg-[#F8F8F9] hover:bg-zinc-200 border border-black/[0.06] text-zinc-600 hover:text-black transition cursor-pointer active:scale-95 shadow-xs"
                        title="Copy file code"
                      >
                        {copiedCode ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* File Tabs Switcher */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {Object.keys(codeFiles).map((fileName) => {
                      const isActive = activeCodeTab === fileName;
                      return (
                        <button
                          key={fileName}
                          onClick={() => setActiveCodeTab(fileName)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-mono-code font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                            isActive
                              ? "bg-[#111111] text-white shadow-xs"
                              : "bg-[#F8F8F9] text-zinc-600 hover:text-black hover:bg-zinc-200 border border-black/[0.06]"
                          }`}
                        >
                          <FileCode2 className={`w-3.5 h-3.5 ${isActive ? "text-blue-300" : "text-zinc-500"}`} />
                          <span>{fileName}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Code Body */}
                  <div className="bg-[#18181B] text-zinc-200 rounded-2xl p-4 sm:p-5 border border-black/[0.1] font-mono-code text-xs leading-relaxed overflow-x-auto shadow-inner min-h-[220px]">
                    <pre className="text-zinc-300 font-mono-code whitespace-pre">
                      {codeFiles[activeCodeTab].content}
                    </pre>
                  </div>
                </div>

                {/* IDE Bottom Status Bar */}
                <div className="pt-3.5 mt-3 border-t border-black/[0.06] flex items-center justify-between text-[11px] text-zinc-500 font-mono-code">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    <span>TypeScript 5.x</span>
                  </div>
                  <span>UTF-8 · Production Ready</span>
                </div>
              </div>
            </InteractiveTilt>
          </div>

          {/* Right Column: 3 Panoramic Engineering Pillars + Action CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-3.5">
            <div ref={pillarsRef} className="space-y-3">
              {pillars.map((pillar) => (
                <InteractiveTilt key={pillar.title} maxTilt={4} scale={1.01}>
                  <div className="group bg-white rounded-2xl p-5 sm:p-6 border border-black/[0.08] hover:border-black/30 transition-all duration-300 hover:shadow-[0_12px_24px_rgba(0,0,0,0.05)] shadow-xs">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#111111] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
                          {pillar.icon}
                        </div>
                        <h3 className="font-display text-[#111111] text-base sm:text-lg font-bold group-hover:text-black transition-colors">
                          {pillar.title}
                        </h3>
                      </div>

                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#F3F3F3] text-zinc-700 border border-black/[0.06]">
                        {pillar.badge}
                      </span>
                    </div>

                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal mt-2">
                      {pillar.desc}
                    </p>
                  </div>
                </InteractiveTilt>
              ))}
            </div>

            {/* Quick Action Buttons embedded right below pillars */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={cvFile}
                download="Muhammad_Hadee_Butt_CV.pdf"
                onClick={handleDownloadCV}
                className="bg-[#111111] text-white font-semibold px-6 py-3 rounded-full text-xs sm:text-sm hover:bg-neutral-800 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 shadow-xs inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-zinc-300" />
                <span>Download Full CV</span>
              </a>

              <a
                href="#footer"
                className="border border-black/[0.12] bg-white text-zinc-800 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold hover:border-black hover:text-black hover:-translate-y-0.5 active:scale-95 transition-all duration-200 inline-flex items-center gap-2 group shadow-xs"
              >
                <span>Discuss Opportunities</span>
                <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:translate-x-1 group-hover:text-black transition-all" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
