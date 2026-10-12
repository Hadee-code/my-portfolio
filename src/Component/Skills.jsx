import React, { useState, useMemo } from "react";
import { 
  Code2, 
  Layers, 
  Server, 
  Database, 
  ShieldCheck, 
  Terminal, 
  GitBranch, 
  Search, 
  Sparkles, 
  Cpu, 
  Boxes 
} from "lucide-react";
import Reveal from "./Reveal";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    badge: "Client & UI Architecture",
    description: "Building responsive, accessible, component-driven, and high-performance user interfaces.",
    color: "from-blue-600 to-cyan-500",
    skills: [
      {
        name: "React.js",
        detail: "React 19, Custom Hooks, Context API, Reusable Component Architecture",
        level: "Production Core",
        percentage: 92,
        icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      },
      {
        name: "Next.js",
        detail: "App Router, Server Components, SSR, Static Site Generation & SEO",
        level: "Production",
        percentage: 88,
        icon: <Layers className="w-5 h-5 text-white" />,
      },
      {
        name: "JavaScript (ES6+)",
        detail: "Async/Await, Promises, Closures, Array Operations, Clean DOM Logic",
        level: "Core Language",
        percentage: 94,
        icon: <Sparkles className="w-5 h-5 text-amber-400" />,
      },
      {
        name: "Tailwind CSS",
        detail: "Utility-first design, fluid typography, dark-mode styling, responsive layouts",
        level: "Mastery",
        percentage: 95,
        icon: <Cpu className="w-5 h-5 text-sky-400" />,
      },
      {
        name: "HTML5 & Modern CSS3",
        detail: "Semantic elements, accessible web standards, Flexbox & CSS Grid systems",
        level: "Foundation",
        percentage: 96,
        icon: <Code2 className="w-5 h-5 text-orange-400" />,
      },
    ],
  },
  {
    id: "backend",
    title: "Backend & RESTful APIs",
    badge: "Server & Microservices",
    description: "Architecting structured, secure server workflows, controllers, and REST endpoints.",
    color: "from-indigo-600 to-purple-600",
    skills: [
      {
        name: "Node.js",
        detail: "Event-driven runtime, non-blocking asynchronous I/O, modular architecture",
        level: "Production Core",
        percentage: 90,
        icon: <Server className="w-5 h-5 text-emerald-400" />,
      },
      {
        name: "Express.js",
        detail: "REST routing, middleware pipelines, error handling & input sanitization",
        level: "Production Core",
        percentage: 90,
        icon: <Server className="w-5 h-5 text-slate-300" />,
      },
      {
        name: "JWT Authentication",
        detail: "Access & refresh token lifecycle, RBAC, bcrypt password hashing & cookies",
        level: "Security Core",
        percentage: 92,
        icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
      },
      {
        name: "REST API Design",
        detail: "Standard HTTP methods, status code contracts, schema validation & Postman",
        level: "Production",
        percentage: 94,
        icon: <Boxes className="w-5 h-5 text-blue-400" />,
      },
      {
        name: "Python",
        detail: "Object-oriented scripting, backend logic, data processing fundamentals",
        level: "Competent",
        percentage: 78,
        icon: <Terminal className="w-5 h-5 text-amber-300" />,
      },
    ],
  },
  {
    id: "database",
    title: "Databases & Data Modeling",
    badge: "Relational & Document Stores",
    description: "Designing structured database schemas, optimized indexes, migrations, and relationships.",
    color: "from-emerald-600 to-teal-500",
    skills: [
      {
        name: "MongoDB & Mongoose",
        detail: "Document schemas, nested model relationships, aggregation pipelines",
        level: "Production Core",
        percentage: 90,
        icon: <Database className="w-5 h-5 text-emerald-500" />,
      },
      {
        name: "PostgreSQL",
        detail: "Relational schema design, foreign key constraints, indexing & ACID compliance",
        level: "Production",
        percentage: 86,
        icon: <Database className="w-5 h-5 text-blue-400" />,
      },
      {
        name: "Prisma ORM",
        detail: "Declarative schemas, type-safe queries, automated database migrations",
        level: "Production",
        percentage: 88,
        icon: <Layers className="w-5 h-5 text-indigo-400" />,
      },
      {
        name: "Data Modeling",
        detail: "Normalization, query performance tuning, entity-relationship diagrams",
        level: "Core Skill",
        percentage: 88,
        icon: <Boxes className="w-5 h-5 text-teal-400" />,
      },
    ],
  },
  {
    id: "tools",
    title: "Tooling & Engineering Core",
    badge: "Workflow & Computer Science",
    description: "Collaborative Git workflows, automated testing, containerization, and CS foundations.",
    color: "from-amber-600 to-rose-600",
    skills: [
      {
        name: "Git & GitHub",
        detail: "Branch management, pull requests, merge conflict resolution, team collaboration",
        level: "Daily Driver",
        percentage: 92,
        icon: <GitBranch className="w-5 h-5 text-orange-400" />,
      },
      {
        name: "Postman",
        detail: "Endpoint validation, automated testing collections, environment variables",
        level: "Daily Driver",
        percentage: 94,
        icon: <Terminal className="w-5 h-5 text-rose-400" />,
      },
      {
        name: "Docker",
        detail: "Containerization, isolated local runtime environments, Dockerfiles",
        level: "Proficient",
        percentage: 75,
        icon: <Boxes className="w-5 h-5 text-blue-400" />,
      },
      {
        name: "Data Structures & OOP",
        detail: "Object-oriented design, algorithmic efficiency, clean code architecture",
        level: "Academic Core",
        percentage: 88,
        icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      },
    ],
  },
];

const dailyToolchain = [
  { name: "VS Code", category: "IDE & Editor" },
  { name: "Git & GitHub", category: "Version Control" },
  { name: "Postman", category: "API Testing" },
  { name: "Docker", category: "Containers" },
  { name: "Vite 8", category: "Fast Bundler" },
  { name: "Prisma Studio", category: "Database GUI" },
  { name: "MongoDB Compass", category: "NoSQL GUI" },
  { name: "Bash & CLI", category: "Terminal Workflow" },
];

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Competencies" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Databases" },
    { id: "tools", label: "Tools & Core" },
  ];

  // Filter categories and search query
  const filteredCategories = useMemo(() => {
    return skillCategories
      .filter((cat) => activeCategory === "all" || cat.id === activeCategory)
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const q = searchQuery.toLowerCase();
        const matchingSkills = cat.skills.filter(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.detail.toLowerCase().includes(q) ||
            s.level.toLowerCase().includes(q)
        );
        return matchingSkills.length > 0
          ? { ...cat, skills: matchingSkills }
          : null;
      })
      .filter(Boolean);
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="w-full bg-[#0A0F1D] px-6 md:px-10 lg:px-16 py-24 border-t border-slate-800/80 relative overflow-hidden bg-lines-pattern">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Reveal direction="down" delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-3.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Technical Arsenal</span>
            </div>
          </Reveal>
          
          <Reveal direction="clip-up" delay={200}>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Skills & Engineering <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">Proficiency</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed font-normal">
              Production frameworks, database engines, server architectures, and engineering tools leveraged to build high-performance web applications.
            </p>
          </Reveal>

          {/* Interactive Controls Bar: Filter Pills + Search Input */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                        : "bg-[#0F172A] text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Quick Skill Search Bar */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills..."
                className="w-full bg-[#0F172A] border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 2x2 Domain Cards Grid */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-[#0F172A]/50 rounded-3xl border border-slate-800">
            <p className="text-slate-300 font-semibold mb-2">No matching technologies found</p>
            <p className="text-slate-500 text-xs">Try adjusting your search query or switching categories.</p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {filteredCategories.map((cat, idx) => (
              <Reveal key={cat.id} direction="up" delay={100 * (idx + 1)}>
                <div className="h-full bg-[#0F172A]/75 backdrop-blur-xl rounded-3xl border border-slate-800/90 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 ease-out p-7 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
                  
                  {/* Category Accent Stripe */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${cat.color}`} />

                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800/80">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 block mb-1">
                          {cat.badge}
                        </span>
                        <h3 className="text-white text-xl sm:text-2xl font-black">
                          {cat.title}
                        </h3>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {cat.skills.length} Technologies
                      </span>
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed font-normal">
                      {cat.description}
                    </p>

                    {/* Skills List within Category */}
                    <div className="space-y-4">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="group p-3.5 rounded-2xl bg-[#070A12]/70 border border-slate-800/80 hover:border-blue-500/40 hover:bg-[#0B101E] hover:translate-x-1 transition-all duration-300"
                        >
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <div className="flex items-start gap-3">
                              {/* Tech Brand Icon */}
                              <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                                {skill.icon}
                              </div>

                              <div>
                                <h4 className="text-white text-sm font-bold group-hover:text-blue-400 transition-colors">
                                  {skill.name}
                                </h4>
                                <p className="text-slate-400 text-xs leading-relaxed mt-0.5 font-normal">
                                  {skill.detail}
                                </p>
                              </div>
                            </div>

                            {/* Status Tag */}
                            <span className="shrink-0 text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800 whitespace-nowrap">
                              {skill.level}
                            </span>
                          </div>

                          {/* Proficiency Progress Meter */}
                          <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden mt-3 border border-slate-800/60">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 rounded-full group-hover:brightness-125 transition-all duration-500"
                              style={{ width: `${skill.percentage}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* Daily Developer Toolchain Strip */}
        <Reveal direction="up" delay={300}>
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-slate-800/80 gap-2">
              <div>
                <span className="text-blue-400 text-xs font-bold uppercase tracking-wider block mb-0.5">
                  Production Workflows
                </span>
                <h4 className="text-white text-lg sm:text-xl font-bold">
                  Daily Engineering Toolchain & Environments
                </h4>
              </div>
              <span className="text-xs text-slate-400 font-medium">Standard Agile & Git Flow</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {dailyToolchain.map((tool) => (
                <div
                  key={tool.name}
                  className="p-3 rounded-xl bg-[#070A12]/80 border border-slate-800/90 text-center hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-200"
                >
                  <p className="text-white text-xs font-bold truncate">{tool.name}</p>
                  <p className="text-slate-400 text-[10px] mt-0.5 truncate">{tool.category}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default Skills;
