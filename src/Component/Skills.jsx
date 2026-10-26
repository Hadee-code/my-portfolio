import React, { useState, useMemo } from "react";
import { 
  Code2, 
  Layers, 
  Server, 
  Database, 
  ShieldCheck, 
  Terminal, 
  Search, 
  Sparkles, 
  Cpu, 
  Boxes,
  Cloud,
  Brain,
  GitBranch
} from "lucide-react";
import Reveal from "./Reveal";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    badge: "UI & Client Architecture",
    description: "Building responsive, accessible, component-driven, and high-performance user interfaces.",
    skills: [
      {
        name: "React.js",
        detail: "React 19, Custom Hooks, Context API, Reusable Component Architecture",
        level: "Production Core",
        percentage: 92,
        icon: <Code2 className="w-5 h-5 text-zinc-800" />,
      },
      {
        name: "Next.js",
        detail: "App Router, Server Components, SSR, Static Site Generation & SEO",
        level: "Production",
        percentage: 88,
        icon: <Layers className="w-5 h-5 text-zinc-800" />,
      },
      {
        name: "JavaScript (ES6+)",
        detail: "Async/Await, Promises, Closures, Array Operations, Clean DOM Logic",
        level: "Core Language",
        percentage: 94,
        icon: <Sparkles className="w-5 h-5 text-zinc-800" />,
      },
      {
        name: "Tailwind CSS",
        detail: "Utility-first design, fluid typography, dark-mode styling, responsive layouts",
        level: "Mastery",
        percentage: 95,
        icon: <Cpu className="w-5 h-5 text-zinc-800" />,
      },
      {
        name: "HTML5 & CSS3",
        detail: "Semantic elements, accessible web standards, Flexbox & CSS Grid systems",
        level: "Foundation",
        percentage: 96,
        icon: <Code2 className="w-5 h-5 text-zinc-800" />,
      },
    ],
  },
  {
    id: "backend",
    title: "Backend & RESTful APIs",
    badge: "Server & Microservices",
    description: "Architecting structured, secure server workflows, controllers, and REST endpoints.",
    skills: [
      {
        name: "Node.js",
        detail: "Event-driven runtime, non-blocking asynchronous I/O, modular architecture",
        level: "Production Core",
        percentage: 90,
        icon: <Server className="w-5 h-5 text-zinc-800" />,
      },
      {
        name: "Express.js",
        detail: "REST routing, middleware pipelines, error handling & input sanitization",
        level: "Production Core",
        percentage: 90,
        icon: <Boxes className="w-5 h-5 text-zinc-800" />,
      },
      {
        name: "Python",
        detail: "FastAPI endpoints, automation scripting, data processing & API hooks",
        level: "Expanding Core",
        percentage: 82,
        icon: <Terminal className="w-5 h-5 text-zinc-800" />,
      },
      {
        name: "REST API Design",
        detail: "JSON Schema, pagination, HTTP status code standards, API documentation",
        level: "Production",
        percentage: 92,
        icon: <Server className="w-5 h-5 text-zinc-800" />,
      },
      {
        name: "JWT Auth & RBAC",
        detail: "Stateless authentication, refresh cycles, bcrypt password hashing",
        level: "Security Core",
        percentage: 90,
        icon: <ShieldCheck className="w-5 h-5 text-zinc-800" />,
      },
    ],
  },
  {
    id: "database",
    title: "Databases & Storage",
    badge: "SQL & NoSQL Systems",
    description: "Designing normalized relational schemas and high-throughput document datastores.",
    skills: [
      {
        name: "MongoDB & Mongoose",
        detail: "Document collections, schema validation, aggregation pipelines, Atlas clusters",
        level: "Production Core",
        percentage: 90,
        icon: <Database className="w-5 h-5 text-zinc-800" />,
      },
      {
        name: "PostgreSQL",
        detail: "Relational modeling, foreign keys, table joins, transactions & indexes",
        level: "Production",
        percentage: 85,
        icon: <Database className="w-5 h-5 text-zinc-800" />,
      },
      {
        name: "Prisma ORM",
        detail: "Type-safe database client, schema migrations, relation queries",
        level: "Production",
        percentage: 88,
        icon: <Boxes className="w-5 h-5 text-zinc-800" />,
      },
      {
        name: "Schema Architecture",
        detail: "Normalization vs embedding, query performance tuning, indexing strategies",
        level: "Architecture",
        percentage: 88,
        icon: <Cpu className="w-5 h-5 text-zinc-800" />,
      },
    ],
  },
  {
    id: "tools",
    title: "Development Tools",
    badge: "Toolchain & Quality",
    description: "Industry-standard development, version control, and debugging environments.",
    skills: [
      {
        name: "Git & GitHub",
        detail: "Distributed version control, branch management, pull requests, merge conflict resolution",
        level: "Standard Flow",
        percentage: 92,
        icon: <GitBranch className="w-5 h-5 text-zinc-800" />,
      },
      {
        name: "Postman API Suite",
        detail: "Endpoint test automation, environment variables, collection runners",
        level: "Advanced",
        percentage: 92,
        icon: <Terminal className="w-5 h-5 text-zinc-800" />,
      },
      {
        name: "VS Code & Debuggers",
        detail: "Breakpoints, workspace configurations, linting, extensions",
        level: "Daily Driver",
        percentage: 95,
        icon: <Cpu className="w-5 h-5 text-zinc-800" />,
      },
      {
        name: "Vite 8 & Bundlers",
        detail: "Lightning-fast HMR, Rollup production chunking, asset optimization",
        level: "Toolchain",
        percentage: 90,
        icon: <Sparkles className="w-5 h-5 text-zinc-800" />,
      },
    ],
  },
  {
    id: "deployment",
    title: "Deployment & Cloud",
    badge: "Hosting & CI/CD",
    description: "Reliable build pipelines, containerized packaging, and edge deployments.",
    skills: [
      {
        name: "Vercel & Next.js Hosting",
        detail: "Zero-config edge deployments, serverless functions, preview environments",
        level: "Production",
        percentage: 92,
        icon: <Cloud className="w-5 h-5 text-zinc-800" />,
      },
      {
        name: "Docker Basics",
        detail: "Containerization, Dockerfile recipes, local multi-service testing",
        level: "Practitioner",
        percentage: 75,
        icon: <Boxes className="w-5 h-5 text-zinc-800" />,
      },
      {
        name: "Render & Netlify",
        detail: "Web service backends, managed PostgreSQL hosting, static asset CDNs",
        level: "Production",
        percentage: 88,
        icon: <Cloud className="w-5 h-5 text-zinc-800" />,
      },
      {
        name: "CI/CD & Automated Checks",
        detail: "GitHub automated actions, Oxlint code linting, automated build validations",
        level: "Workflow",
        percentage: 80,
        icon: <Terminal className="w-5 h-5 text-zinc-800" />,
      },
    ],
  },
  {
    id: "ai_ml",
    title: "AI & Machine Learning",
    badge: "Intelligent Systems",
    description: "Integrating modern LLM workflows, Python data pipelines, and vector search.",
    skills: [
      {
        name: "Python for AI",
        detail: "Scripting, NumPy data structures, requests pipelines, automation",
        level: "Expanding Core",
        percentage: 84,
        icon: <Terminal className="w-5 h-5 text-zinc-800" />,
      },
      {
        name: "LLM API Integration",
        detail: "OpenAI, Anthropic & Groq REST APIs, streaming responses, error retries",
        level: "Integration",
        percentage: 86,
        icon: <Brain className="w-5 h-5 text-zinc-800" />,
      },
      {
        name: "Prompt Engineering",
        detail: "Few-shot prompting, structured JSON schema output, system persona tuning",
        level: "Design Core",
        percentage: 90,
        icon: <Sparkles className="w-5 h-5 text-zinc-800" />,
      },
      {
        name: "Vector Embeddings & Search",
        detail: "Text embedding generation, cosine distance matching, document Q&A",
        level: "Applied AI",
        percentage: 80,
        icon: <Cpu className="w-5 h-5 text-zinc-800" />,
      },
      {
        name: "LangChain Basics",
        detail: "Prompt templates, sequential chains, memory modules & tools integration",
        level: "Applied AI",
        percentage: 75,
        icon: <Layers className="w-5 h-5 text-zinc-800" />,
      },
    ],
  },
];

const dailyToolchain = [
  { name: "React 19", category: "UI Library" },
  { name: "Next.js", category: "App Router" },
  { name: "Node.js", category: "Runtime" },
  { name: "Express", category: "Framework" },
  { name: "Python", category: "AI & Scripting" },
  { name: "FastAPI", category: "API Framework" },
  { name: "MongoDB", category: "NoSQL DB" },
  { name: "PostgreSQL", category: "SQL RDBMS" },
  { name: "Prisma", category: "ORM" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "JWT", category: "Auth" },
  { name: "Git Flow", category: "VCS" },
  { name: "Postman", category: "API Testing" },
  { name: "Docker", category: "Containers" },
  { name: "Vercel", category: "Deployment" },
  { name: "OpenAI APIs", category: "LLM Engine" },
];

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Arsenal" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Databases" },
    { id: "tools", label: "Tools" },
    { id: "deployment", label: "Deployment" },
    { id: "ai_ml", label: "AI / ML" },
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
    <section id="arsenal" className="w-full bg-[#F3F3F3] text-[#111111] px-6 md:px-12 lg:px-16 py-24 border-t border-black/[0.06] relative overflow-hidden bg-lines-pattern">
      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Reveal direction="down" delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] mb-3.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#111111]" />
              <span className="text-[#111111] text-xs font-bold uppercase tracking-wider">Technical Arsenal</span>
            </div>
          </Reveal>
          
          <Reveal direction="clip-up" delay={200}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
              Engineered <span className="font-light italic text-zinc-500">Competencies</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <p className="text-zinc-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
              Structured breakdown of production frameworks, backend engines, databases, deployment toolchains, and emerging AI technologies.
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
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#111111] text-white shadow-sm font-semibold"
                        : "bg-white text-zinc-700 hover:text-black hover:bg-black/[0.04] border border-black/[0.08] shadow-sm"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Quick Skill Search Bar */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills..."
                className="w-full bg-white border border-black/[0.08] rounded-full pl-9 pr-4 py-2 text-xs sm:text-sm text-[#111111] placeholder-zinc-400 focus:outline-none focus:border-black transition shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-black text-xs cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-black/[0.08] shadow-sm">
            <p className="text-zinc-800 font-semibold mb-2">No matching technologies found</p>
            <p className="text-zinc-500 text-xs">Try adjusting your search query or switching categories.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 px-4 py-2 bg-[#111111] text-white rounded-full text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
            {filteredCategories.map((category, catIndex) => (
              <Reveal key={category.id} direction="up" delay={100 * (catIndex % 2 + 1)}>
                <div className="h-full bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.08] hover:border-black/30 transition-all duration-300 shadow-sm flex flex-col justify-between">
                  
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-black/[0.06]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#111111] flex items-center justify-center text-white shadow-xs">
                          {category.id === "frontend" && <Code2 className="w-5 h-5" />}
                          {category.id === "backend" && <Server className="w-5 h-5" />}
                          {category.id === "database" && <Database className="w-5 h-5" />}
                          {category.id === "tools" && <GitBranch className="w-5 h-5" />}
                          {category.id === "deployment" && <Cloud className="w-5 h-5" />}
                          {category.id === "ai_ml" && <Brain className="w-5 h-5" />}
                        </div>
                        <div>
                          <h3 className="font-display text-[#111111] text-xl font-bold">
                            {category.title}
                          </h3>
                          <span className="text-xs text-zinc-500 font-medium">
                            {category.badge}
                          </span>
                        </div>
                      </div>

                      <span className="font-mono-code text-xs font-bold text-zinc-400">
                        {category.skills.length} Items
                      </span>
                    </div>

                    <p className="text-zinc-600 text-xs sm:text-sm mb-6 font-normal">
                      {category.description}
                    </p>

                    {/* Skill Items List */}
                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-[#111111]">{skill.name}</span>
                              <span className="text-[10px] text-zinc-400 hidden sm:inline">· {skill.detail}</span>
                            </div>
                            <span className="font-mono-code font-bold text-zinc-600 text-[11px]">
                              {skill.percentage}%
                            </span>
                          </div>

                          {/* Minimalist Progress Track */}
                          <div className="w-full h-1.5 rounded-full bg-[#EAEAEA] overflow-hidden">
                            <div
                              className="h-full rounded-full bg-[#111111] transition-all duration-700 ease-out"
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
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.08] shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-black/[0.06] gap-2">
              <div>
                <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider block mb-0.5">
                  Production Workflows
                </span>
                <h4 className="font-display text-[#111111] text-lg sm:text-xl font-bold">
                  Daily Engineering Toolchain & Environments
                </h4>
              </div>
              <span className="text-xs text-zinc-500 font-medium">Standard Agile & Git Flow</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {dailyToolchain.map((tool) => (
                <div
                  key={tool.name}
                  className="p-3 rounded-xl bg-[#F8F8F9] border border-black/[0.06] text-center hover:border-black/20 hover:bg-white hover:-translate-y-1 transition-all duration-200"
                >
                  <p className="text-[#111111] text-xs font-bold truncate">{tool.name}</p>
                  <p className="text-zinc-500 text-[10px] mt-0.5 truncate">{tool.category}</p>
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
