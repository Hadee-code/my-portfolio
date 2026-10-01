import React, { useState } from "react";
import profileData from "../data/profileData";
import Reveal from "./Reveal";

function Portfolio() {
  const { projects } = profileData;
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeTabByProject, setActiveTabByProject] = useState({
    1: "preview",
    2: "preview",
    3: "preview",
    4: "preview",
  });

  const filterOptions = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleTabChange = (projectId, tab) => {
    setActiveTabByProject((prev) => ({ ...prev, [projectId]: tab }));
  };

  // Realistic UI Mockups for each project
  const renderProjectMockup = (projectId) => {
    switch (projectId) {
      case 1:
        // Lean E-Commerce Mockup
        return (
          <div className="bg-[#0A0E17] rounded-xl p-4 sm:p-5 border border-slate-800/80 font-sans text-xs">
            {/* Storefront Mini Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/60">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm">LeanShop</span>
                <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/20">
                  MERN v2
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span>Search</span>
                <span className="px-2 py-0.5 bg-blue-600 text-white rounded-md font-semibold text-[10px] flex items-center gap-1">
                  <span>Cart</span>
                  <span className="w-4 h-4 rounded-full bg-white text-slate-900 flex items-center justify-center text-[9px] font-bold">2</span>
                </span>
              </div>
            </div>

            {/* Products Row */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-[#111827] p-2.5 rounded-lg border border-slate-800">
                <div className="h-16 bg-gradient-to-br from-blue-900/30 to-indigo-900/20 rounded flex items-center justify-center text-blue-300 font-mono text-[11px] mb-2 border border-blue-500/10">
                  ⚡ Dev Keyboard
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">$89.99</span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">In Stock</span>
                </div>
              </div>

              <div className="bg-[#111827] p-2.5 rounded-lg border border-slate-800">
                <div className="h-16 bg-gradient-to-br from-cyan-900/30 to-blue-900/20 rounded flex items-center justify-center text-cyan-300 font-mono text-[11px] mb-2 border border-cyan-500/10">
                  🖥️ 4K Monitor
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">$349.00</span>
                  <span className="text-[10px] text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded">Verified</span>
                </div>
              </div>
            </div>

            {/* Bottom Live Metrics Bar */}
            <div className="flex items-center justify-between bg-slate-900/90 px-3 py-2 rounded-lg border border-slate-800 text-[11px]">
              <span className="text-slate-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                MongoDB Atlas: <strong className="text-slate-200">Connected</strong>
              </span>
              <span className="text-blue-400 font-mono">Response: 38ms</span>
            </div>
          </div>
        );

      case 2:
        // Amanah Social Media Mockup
        return (
          <div className="bg-[#0A0E17] rounded-xl p-4 sm:p-5 border border-slate-800/80 font-sans text-xs">
            {/* Feed Post Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                  HB
                </div>
                <div>
                  <p className="text-white font-bold text-xs leading-none">Muhammad Hadee</p>
                  <p className="text-slate-500 text-[10px] mt-0.5">@hadeebutt · Just now</p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-semibold">
                PostgreSQL & Prisma
              </span>
            </div>

            {/* Post Content */}
            <div className="bg-[#111827] p-3 rounded-lg border border-slate-800 mb-3 text-slate-300 leading-relaxed text-[11px]">
              <p>Just merged the distributed relational feed schema with Next.js App Router and Prisma ORM! 🚀 Real-time like counts and comments now stream seamlessly.</p>
              <div className="mt-2 flex gap-1.5">
                <span className="text-blue-400 font-mono text-[10px]">#Nextjs</span>
                <span className="text-cyan-400 font-mono text-[10px]">#PostgreSQL</span>
                <span className="text-indigo-400 font-mono text-[10px]">#FullStack</span>
              </div>
            </div>

            {/* Interactive Counters */}
            <div className="flex items-center justify-between text-slate-400 px-2 py-1 text-[11px] border-t border-slate-800/70 pt-2.5">
              <span className="text-rose-400 font-semibold flex items-center gap-1">❤️ 1,280 Likes</span>
              <span className="text-blue-400 font-semibold flex items-center gap-1">💬 84 Comments</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">🔄 32 Shares</span>
            </div>
          </div>
        );

      case 3:
        // Full-Stack Portfolio Showcase Mockup (Lighthouse Benchmarks)
        return (
          <div className="bg-[#0A0E17] rounded-xl p-4 sm:p-5 border border-slate-800/80 font-sans text-xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <span className="font-bold text-white text-xs">Google Lighthouse Audits</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                100% Mobile Ready
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2 mb-3">
              {[
                { label: "Performance", score: "99", color: "text-emerald-400 border-emerald-500/30" },
                { label: "Accessibility", score: "100", color: "text-emerald-400 border-emerald-500/30" },
                { label: "Best Practice", score: "100", color: "text-emerald-400 border-emerald-500/30" },
                { label: "SEO Score", score: "100", color: "text-emerald-400 border-emerald-500/30" },
              ].map((item) => (
                <div key={item.label} className="bg-[#111827] p-2 rounded-lg border border-slate-800 text-center">
                  <div className={`w-8 h-8 rounded-full border-2 ${item.color} flex items-center justify-center font-bold text-xs mx-auto mb-1`}>
                    {item.score}
                  </div>
                  <span className="text-[9px] text-slate-400 block leading-tight truncate">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#111827] p-2.5 rounded-lg border border-slate-800 flex items-center justify-between text-[11px]">
              <span className="text-slate-300 font-medium">Bundler: <strong className="text-cyan-400">Vite 8 & Tailwind v4</strong></span>
              <span className="text-blue-400 font-mono">Build: 349ms</span>
            </div>
          </div>
        );

      case 4:
        // RESTful Auth Microservice Mockup (Terminal / JSON API Inspector)
        return (
          <div className="bg-[#0A0E17] rounded-xl p-4 sm:p-5 border border-slate-800/80 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 text-[11px]">
              <span className="text-blue-400 font-bold">POST /api/v1/auth/verify</span>
              <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                200 OK
              </span>
            </div>

            <pre className="text-[11px] text-slate-300 leading-relaxed overflow-x-auto bg-[#111827] p-3 rounded-lg border border-slate-800 mb-2.5">
{`{
  "status": "success",
  "auth": true,
  "user": "hadee_butt",
  "role": "FullStack_Developer",
  "token_type": "Bearer JWT",
  "rbac": ["read", "write", "admin"]
}`}
            </pre>

            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span>Security: <strong className="text-indigo-400">Bcrypt + JWT Rotation</strong></span>
              <span className="text-emerald-400 font-bold">Validated in Postman</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="portfolio" className="w-full bg-[#0A0E17] px-6 md:px-10 lg:px-16 py-24 border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[480px] h-[480px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal direction="down" delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-3.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Engineering Showcase</span>
            </div>
          </Reveal>
          <Reveal direction="clip-up" delay={200}>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Featured <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">Projects</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
              Full-stack production web applications, database architectures, and responsive user interfaces engineered with modern stacks.
            </p>
          </Reveal>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mt-8">
            {filterOptions.map((filter) => {
              const count = filter === "All" ? projects.length : projects.filter((p) => p.category === filter).length;
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white shadow-lg shadow-blue-500/25 font-bold"
                      : "bg-[#131B2E] text-slate-300 hover:text-blue-400 hover:bg-slate-800 border border-slate-800/90"
                  }`}
                >
                  <span>{filter}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-md font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* NEW FEATURE: Modern Project Bento Cards with Browser Frames & In-Card Tab Switchers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const activeTab = activeTabByProject[project.id] || "preview";

            return (
              <Reveal key={project.id} direction="up" delay={100 * (index % 2 + 1)}>
                <div className="group h-full bg-[#131B2E] rounded-3xl border border-slate-800/90 hover:border-blue-500/60 transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden shadow-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/15">
                  
                  {/* Top Mac-Style Window Frame Header */}
                  <div className="px-6 py-3.5 bg-[#0D1322] border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="ml-2 font-mono text-[11px] text-slate-400 truncate max-w-[140px] sm:max-w-xs">
                        hadee.dev/{project.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="text-[11px] font-medium text-amber-400 flex items-center gap-1 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                          ★ Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Main Project Card Content */}
                  <div className="p-6 sm:p-8">
                    
                    {/* Title & Subtitle */}
                    <p className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
                      {project.subtitle}
                    </p>
                    <h3 className="text-white text-2xl font-black mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* NEW: Interactive In-Card Tab Navigator */}
                    <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-800/80">
                      <button
                        onClick={() => handleTabChange(project.id, "preview")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                          activeTab === "preview"
                            ? "bg-blue-600 text-white shadow-sm"
                            : "bg-[#0A0E17] text-slate-400 hover:text-white"
                        }`}
                      >
                        <span>Interactive Mockup</span>
                      </button>

                      <button
                        onClick={() => handleTabChange(project.id, "highlights")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                          activeTab === "highlights"
                            ? "bg-blue-600 text-white shadow-sm"
                            : "bg-[#0A0E17] text-slate-400 hover:text-white"
                        }`}
                      >
                        <span>Core Highlights</span>
                      </button>
                    </div>

                    {/* Tab 1: Interactive Mockup Simulation */}
                    {activeTab === "preview" && (
                      <div className="mb-6 animate-fadeIn">
                        {renderProjectMockup(project.id)}
                      </div>
                    )}

                    {/* Tab 2: Key Highlights List */}
                    {activeTab === "highlights" && (
                      <div className="bg-[#0A0E17]/90 rounded-2xl p-5 border border-slate-800 mb-6">
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">
                          Engineering Deliverables
                        </p>
                        <ul className="space-y-2.5">
                          {project.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack Chips */}
                    <div>
                      <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-2">Technologies Used</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#0A0E17] text-slate-300 border border-slate-800 group-hover:border-slate-700 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Card Footer: Dual Actions (Repository & Live Details) */}
                  <div className="px-6 sm:px-8 py-4 border-t border-slate-800/80 bg-[#0E1524] flex items-center justify-between gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200 hover:text-blue-400 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.9-.38 2.88-.39.98.01 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55C20.71 21.38 24 17.07 24 12c0-6.27-5.23-11.5-12-11.5z" />
                      </svg>
                      <span>Explore Repository</span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/25 text-blue-400 hover:bg-blue-600 hover:text-white transition-all text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <span>View Code</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;
