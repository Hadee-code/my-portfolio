import React from "react";
import { 
  Download, 
  Terminal, 
  Layers, 
  Database, 
  ShieldCheck, 
  ArrowRight,
  Cpu,
  Sparkles,
  GitBranch
} from "lucide-react";
import profileData from "../data/profileData";
import Reveal from "./Reveal";
import { useToast } from "./ToastContext";

function About() {
  const { name, about, cvFile } = profileData;
  const { addToast } = useToast();

  const handleDownloadCV = () => {
    addToast("Downloading Muhammad Hadee Butt's CV...", "info");
  };

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
    <section id="profile" className="w-full bg-[#F3F3F3] text-[#111111] px-6 md:px-12 lg:px-16 py-24 border-t border-black/[0.06] relative overflow-hidden bg-grid-pattern">
      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal direction="down" delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#111111]" />
              <span className="text-[#111111] text-xs font-bold uppercase tracking-wider">Engineering Profile</span>
            </div>
          </Reveal>
          
          <Reveal direction="clip-up" delay={200}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-[#111111]">
              Architecting <span className="font-light italic text-zinc-500">High-Performance</span> Web Systems
            </h2>
          </Reveal>
          
          <Reveal direction="up" delay={300}>
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              {about}
            </p>
          </Reveal>
        </div>

        {/* Split Layout: Vertically Stacked Developer Code Cards & Engineering Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-start">
          
          {/* Left Column: Vertically Stacked Developer Code Cards (Highlighting Engineering Strengths) */}
          <Reveal direction="left" delay={200} className="lg:col-span-6 space-y-4">
            
            {/* Card 1: Core Developer Identity (Main developer card) */}
            <div className="bg-white border border-black/[0.08] rounded-2xl p-5 shadow-sm hover:border-black/30 hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)] transition-all duration-300">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#111111] inline-block" />
                  <span className="ml-2 font-mono-code text-xs text-zinc-500 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-zinc-700" />
                    <span>developer.ts</span>
                  </span>
                </div>
                <span className="text-[10px] font-mono-code text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-semibold">
                  ONLINE
                </span>
              </div>

              <div className="bg-[#F8F8F9] rounded-xl p-4 border border-black/[0.06] font-mono-code text-xs text-zinc-800 leading-relaxed overflow-x-auto shadow-inner">
                <span className="text-indigo-600 font-semibold">const</span>{" "}
                <span className="text-blue-700 font-semibold">developer</span> = &#123;
                <div className="pl-4">
                  <div><span className="text-zinc-500">name:</span> <span className="text-emerald-700 font-medium">"{name}"</span>,</div>
                  <div><span className="text-zinc-500">status:</span> <span className="text-emerald-700 font-medium">"Ready for impact"</span>,</div>
                  <div><span className="text-zinc-500">stack:</span> [<span className="text-blue-700">"MERN"</span>, <span className="text-blue-700">"Next.js"</span>, <span className="text-blue-700">"PostgreSQL"</span>],</div>
                  <div><span className="text-zinc-500">codeFocus:</span> <span className="text-amber-700 font-medium">"Performance & Clean Arch"</span></div>
                </div>
                &#125;;
              </div>
            </div>

            {/* Card 2: Architecture & System Design Stack */}
            <div className="bg-white border border-black/[0.08] rounded-2xl p-5 shadow-sm hover:border-black/30 hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)] transition-all duration-300">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#111111] inline-block" />
                  <span className="ml-2 font-mono-code text-xs text-zinc-500 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-zinc-700" />
                    <span>architecture.ts</span>
                  </span>
                </div>
                <span className="text-[10px] font-mono-code text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 font-semibold">
                  PATTERNS
                </span>
              </div>

              <div className="bg-[#F8F8F9] rounded-xl p-4 border border-black/[0.06] font-mono-code text-xs text-zinc-800 leading-relaxed overflow-x-auto shadow-inner">
                <span className="text-indigo-600 font-semibold">const</span>{" "}
                <span className="text-blue-700 font-semibold">architecture</span> = &#123;
                <div className="pl-4">
                  <div><span className="text-zinc-500">patterns:</span> [<span className="text-blue-700">"Component Hierarchies"</span>, <span className="text-blue-700">"RESTful APIs"</span>],</div>
                  <div><span className="text-zinc-500">security:</span> [<span className="text-blue-700">"JWT Auth"</span>, <span className="text-blue-700">"RBAC"</span>, <span className="text-blue-700">"Bcrypt"</span>],</div>
                  <div><span className="text-zinc-500">databases:</span> [<span className="text-blue-700">"MongoDB Atlas"</span>, <span className="text-blue-700">"PostgreSQL"</span>],</div>
                  <div><span className="text-zinc-500">systemDesign:</span> <span className="text-emerald-700 font-medium">"Scalable & Resilient"</span></div>
                </div>
                &#125;;
              </div>
            </div>

            {/* Card 3: Production Metrics & Quality Benchmarks */}
            <div className="bg-white border border-black/[0.08] rounded-2xl p-5 shadow-sm hover:border-black/30 hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)] transition-all duration-300">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#111111] inline-block" />
                  <span className="ml-2 font-mono-code text-xs text-zinc-500 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-zinc-700" />
                    <span>production_metrics.ts</span>
                  </span>
                </div>
                <span className="text-[10px] font-mono-code text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 font-semibold">
                  BENCHMARKS
                </span>
              </div>

              <div className="bg-[#F8F8F9] rounded-xl p-4 border border-black/[0.06] font-mono-code text-xs text-zinc-800 leading-relaxed overflow-x-auto shadow-inner">
                <span className="text-indigo-600 font-semibold">const</span>{" "}
                <span className="text-blue-700 font-semibold">productionMetrics</span> = &#123;
                <div className="pl-4">
                  <div><span className="text-zinc-500">averageLatency:</span> <span className="text-emerald-700 font-medium">"~38ms API response"</span>,</div>
                  <div><span className="text-zinc-500">codeQuality:</span> <span className="text-emerald-700 font-medium">"100% modular & maintainable"</span>,</div>
                  <div><span className="text-zinc-500">testDiscipline:</span> <span className="text-blue-700">"Postman automated validation"</span>,</div>
                  <div><span className="text-zinc-500">buildTarget:</span> <span className="text-amber-700 font-medium">"Vite 8 & Tailwind v4 Optimized"</span></div>
                </div>
                &#125;;
              </div>
            </div>

            {/* Card 4: Engineering Workflow & Collaboration */}
            <div className="bg-white border border-black/[0.08] rounded-2xl p-5 shadow-sm hover:border-black/30 hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)] transition-all duration-300">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#111111] inline-block" />
                  <span className="ml-2 font-mono-code text-xs text-zinc-500 flex items-center gap-1.5">
                    <GitBranch className="w-3.5 h-3.5 text-zinc-700" />
                    <span>workflow.ts</span>
                  </span>
                </div>
                <span className="text-[10px] font-mono-code text-zinc-800 bg-zinc-100 px-2.5 py-0.5 rounded-full border border-black/[0.08] font-semibold">
                  STANDARDS
                </span>
              </div>

              <div className="bg-[#F8F8F9] rounded-xl p-4 border border-black/[0.06] font-mono-code text-xs text-zinc-800 leading-relaxed overflow-x-auto shadow-inner">
                <span className="text-indigo-600 font-semibold">const</span>{" "}
                <span className="text-blue-700 font-semibold">workflow</span> = &#123;
                <div className="pl-4">
                  <div><span className="text-zinc-500">versionControl:</span> <span className="text-emerald-700 font-medium">"Git Flow & structured branches"</span>,</div>
                  <div><span className="text-zinc-500">methodology:</span> <span className="text-emerald-700 font-medium">"Agile sprints & fast iterations"</span>,</div>
                  <div><span className="text-zinc-500">collaboration:</span> [<span className="text-blue-700">"Code Reviews"</span>, <span className="text-blue-700">"PR Workflows"</span>],</div>
                  <div><span className="text-zinc-500">availability:</span> <span className="text-emerald-700 font-medium">"Open for full-time engineering roles"</span></div>
                </div>
                &#125;;
              </div>
            </div>

          </Reveal>

          {/* Right Column: 3 Panoramic Engineering Pillars + Action CTAs */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar, idx) => (
              <Reveal key={pillar.title} direction="right" delay={120 * (idx + 1)}>
                <div className="group bg-white rounded-2xl p-6 sm:p-7 border border-black/[0.08] hover:border-black/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)] shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#111111] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                        {pillar.icon}
                      </div>
                      <h3 className="font-display text-[#111111] text-lg sm:text-xl font-bold group-hover:text-black transition-colors">
                        {pillar.title}
                      </h3>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F3F3F3] text-zinc-700 border border-black/[0.06]">
                      {pillar.badge}
                    </span>
                  </div>

                  <p className="text-zinc-600 text-sm leading-relaxed pl-13 font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </Reveal>
            ))}

            {/* Quick Action Buttons embedded right below pillars */}
            <Reveal direction="up" delay={350}>
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <a
                  href={cvFile}
                  download="Muhammad_Hadee_Butt_CV.pdf"
                  onClick={handleDownloadCV}
                  className="bg-[#111111] text-white font-semibold px-7 py-3.5 rounded-full text-xs sm:text-sm hover:bg-neutral-800 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 shadow-sm inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-zinc-300" />
                  <span>Download Full CV</span>
                </a>

                <a
                  href="#footer"
                  className="border border-black/[0.12] bg-white text-zinc-800 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold hover:border-black hover:text-black hover:-translate-y-0.5 active:scale-95 transition-all duration-200 inline-flex items-center gap-2 group shadow-sm"
                >
                  <span>Discuss Opportunities</span>
                  <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:translate-x-1 group-hover:text-black transition-all" />
                </a>
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
