import React, { useState } from "react";
import Reveal from "./Reveal";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    badge: "Client & UI Architecture",
    description: "Building responsive, component-driven, and high-performance user interfaces.",
    skills: [
      {
        name: "React.js",
        detail: "React 19, Hooks, Context API, Component Hierarchy",
        level: "Production Core",
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <ellipse cx="12" cy="12" rx="10" ry="4.2" />
            <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="1.8" fill="currentColor" />
          </svg>
        ),
      },
      {
        name: "Next.js",
        detail: "App Router, Server Components, SSR & SEO Optimization",
        level: "Production",
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.6 17.5l-6.1-8.1v8.1H9.8V6.5h1.7l6.2 8.3V6.5h1.7v11h-1.8z" />
          </svg>
        ),
      },
      {
        name: "JavaScript (ES6+)",
        detail: "Async/Await, Promises, Closures, DOM Manipulation",
        level: "Core Language",
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3h18v18H3V3zm13.7 13.9c.7 0 1.2-.4 1.4-.9.2-.5.1-1.1-.1-1.5-.5-.8-1.5-1.3-2.6-1.7l-.5-.2c-.8-.3-1.2-.6-1.2-1.1 0-.4.3-.8.8-.8.6 0 1 .3 1.3.8l1.4-.9c-.6-1-1.6-1.5-2.7-1.5-1.5 0-2.5.9-2.5 2.3 0 1 .6 1.7 1.6 2.1l.6.2c.9.3 1.4.6 1.4 1.2 0 .5-.4.9-1 .9-.8 0-1.4-.5-1.7-1.1l-1.4.9c.5 1.2 1.6 1.9 2.9 1.9zm-6.8-.2v-6.3H8.2v4.7c0 1.2-.6 1.6-1.5 1.6-.4 0-.8-.1-1.1-.3l-.4 1.4c.5.3 1.2.4 1.8.4 1.9 0 2.9-1.1 2.9-3.2v-.2z" />
          </svg>
        ),
      },
      {
        name: "Tailwind CSS",
        detail: "Utility-first design, fluid typography, mobile-first responsive layout",
        level: "Mastery",
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
          </svg>
        ),
      },
      {
        name: "HTML5 & Modern CSS3",
        detail: "Semantic elements, accessible web standards, Flexbox & CSS Grid",
        level: "Foundation",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "backend",
    title: "Backend & RESTful APIs",
    badge: "Server & Microservices",
    description: "Architecting structured, secure server workflows and robust endpoints.",
    skills: [
      {
        name: "Node.js",
        detail: "Event-driven runtime, non-blocking asynchronous I/O, streams",
        level: "Production Core",
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2zm0 2.3L4.5 8.6v8.8L12 21.7l7.5-4.3V8.6L12 4.3zm0 4.2a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
          </svg>
        ),
      },
      {
        name: "Express.js",
        detail: "REST routing, middleware pipelines, error handling & input sanitization",
        level: "Production Core",
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
      },
      {
        name: "JWT Authentication",
        detail: "Access & refresh token lifecycle, RBAC, bcrypt password hashing",
        level: "Security Core",
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ),
      },
      {
        name: "REST API Design",
        detail: "Standard HTTP methods, status code contracts, schema validation",
        level: "Production",
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        name: "Python",
        detail: "Object-oriented scripting, backend logic, data manipulation",
        level: "Competent",
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.9 1.5c-3.1 0-5.1.7-5.1 2.6v2.1h5.2v.7H4.4C2.3 6.9 1 8.4 1 11.2c0 2.9 1.4 4.3 3.4 4.3h1.8v-2.2c0-1.8 1.4-3.2 3.2-3.2h5.2c1.4 0 2.6-1.1 2.6-2.6V3.8c0-1.8-1.9-2.3-5.3-2.3zm-1.8 1.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zm2 20c3.1 0 5.1-.7 5.1-2.6v-2.1H12v-.7h7.6c2.1 0 3.4-1.5 3.4-4.3 0-2.9-1.4-4.3-3.4-4.3h-1.8v2.2c0 1.8-1.4 3.2-3.2 3.2H9.4c-1.4 0-2.6 1.1-2.6 2.6v3.7c0 1.8 1.9 2.3 5.3 2.3zm1.8-1.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "database",
    title: "Databases & Data Modeling",
    badge: "Relational & Document Stores",
    description: "Designing structured database schemas, optimized indexes, and relationships.",
    skills: [
      {
        name: "MongoDB & Mongoose",
        detail: "Schema modeling, nested document relationships, aggregation pipelines",
        level: "Production Core",
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.002 0c-.27 0-.54.06-.78.18-1.87.93-7.22 4.09-7.22 12.07 0 6.64 4.85 10.45 7.57 11.63.26.11.53.12.79 0 2.72-1.18 7.57-4.99 7.57-11.63 0-7.98-5.35-11.14-7.22-12.07-.24-.12-.51-.18-.78-.18h.07zm-.07 2.1c.32.18.66.38.98.6 1.77 1.25 5.25 4.19 5.25 9.55 0 4.85-3.32 8.16-5.85 9.47-.2.1-.44.09-.64 0-2.53-1.31-5.85-4.62-5.85-9.47 0-5.36 3.48-8.3 5.25-9.55.32-.22.66-.42.98-.6-.06.01-.12.01-.12 0z" />
          </svg>
        ),
      },
      {
        name: "PostgreSQL",
        detail: "Relational schema design, foreign key constraints, indexes, ACID compliance",
        level: "Production",
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zm0 2.2c4.42 0 8 1.34 8 2.3s-3.58 2.3-8 2.3-8-1.34-8-2.3 3.58-2.3 8-2.3zm8 5.4c0 .96-3.58 2.3-8 2.3s-8-1.34-8-2.3V8.8c1.9 1.13 4.83 1.7 8 1.7s6.1-.57 8-1.7v1.8zm0 4.5c0 .96-3.58 2.3-8 2.3s-8-1.34-8-2.3v-1.8c1.9 1.13 4.83 1.7 8 1.7s6.1-.57 8-1.7v1.8zm0 4.5c0 .96-3.58 2.3-8 2.3s-8-1.34-8-2.3v-1.8c1.9 1.13 4.83 1.7 8 1.7s6.1-.57 8-1.7v1.8z" />
          </svg>
        ),
      },
      {
        name: "Prisma ORM",
        detail: "Declarative schemas, type-safe queries, automated database migrations",
        level: "Production",
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.98 1.55a1.2 1.2 0 00-1.96 0L.37 17.84a1.2 1.2 0 00.98 1.86h21.3a1.2 1.2 0 00.98-1.86L12.98 1.55zm-1 3.55l8.6 12.6H3.42l8.56-12.6z" />
          </svg>
        ),
      },
      {
        name: "Database Architecture",
        detail: "Query performance, data normalization, transaction safety",
        level: "Core Skill",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "tools",
    title: "Tooling & Engineering Core",
    badge: "Workflow & Computer Science",
    description: "Collaborative Git workflows, API testing, and algorithmic foundations.",
    skills: [
      {
        name: "Git & GitHub",
        detail: "Branch management, pull requests, merge conflicts, Git Flow",
        level: "Daily Driver",
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.7 10.3l-8-8a2.4 2.4 0 00-3.4 0L8.6 4l2.2 2.2a2.3 2.3 0 012.8 2.8l2.1 2.1a2.3 2.3 0 11-1.4 1.4l-2-2v4.6a2.3 2.3 0 11-2 0V9.8L8.1 7.6 2.3 13.4a2.4 2.4 0 000 3.4l8 8a2.4 2.4 0 003.4 0l8-8a2.4 2.4 0 000-3.5z" />
          </svg>
        ),
      },
      {
        name: "Postman",
        detail: "Endpoint validation, automated test suites, environment variables",
        level: "Daily Driver",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        ),
      },
      {
        name: "Docker",
        detail: "Containerization, isolated local environments, Dockerfiles",
        level: "Proficient",
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.6 10.2c-.4-.3-1.6-.7-2.9-.3-.3-1.2-1.3-2.1-2.6-2.4-.2 0-.4 0-.6.1-.3-.6-.8-1-1.4-1.3-.2-.1-.5-.1-.7-.1H13V4.5c0-.3-.2-.5-.5-.5h-2c-.3 0-.5.2-.5.5V6H8.2c-.3 0-.5.2-.5.5v2.8H5.8c-.3 0-.5.2-.5.5v2.4H3.5c-.3 0-.5.2-.5.5v2.4H.5c-.3 0-.5.2-.5.5V17c0 3.3 2.7 6 6 6h10.8c3.9 0 6.8-2.6 7.2-6.5.1-.9 0-1.8-.4-2.6 0 0 1.2-.5 1.5-1.5.2-.6.1-1.3-.4-1.8z" />
          </svg>
        ),
      },
      {
        name: "Data Structures & OOP",
        detail: "Object-oriented design, algorithmic efficiency, clean code architecture",
        level: "Academic Core",
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ),
      },
    ],
  },
];

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Competencies" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Databases" },
    { id: "tools", label: "Tools & Core" },
  ];

  const displayedCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="w-full bg-[#0D121F] px-6 md:px-10 lg:px-16 py-24 border-t border-slate-800/80 relative">
      <div className="w-full max-w-[1440px] mx-auto">
        
        {/* Section Heading - Clean, authoritative, uncluttered */}
        <Reveal direction="up" delay={100}>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-3.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Technical Expertise</span>
            </div>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Technical <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">Proficiency</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
              Core technologies and architectural frameworks utilized across production web applications, database systems, and RESTful APIs.
            </p>

            {/* Clean, Understated Category Filter */}
            <div className="flex flex-wrap justify-center gap-2.5 mt-8">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                        : "bg-[#131B2E] text-slate-300 hover:text-blue-400 hover:bg-slate-800 border border-slate-800"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Professional 2x2 Domain Cards Grid - Clean, high signal, executive-level */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedCategories.map((cat, idx) => (
            <Reveal key={cat.id} direction="up" delay={100 * (idx + 1)}>
              <div className="h-full bg-[#131B2E] rounded-2xl border border-slate-800/90 hover:border-blue-500/50 transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between shadow-xl">
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

                  <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills List within Category */}
                  <div className="space-y-4">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex items-start justify-between gap-4 p-3 rounded-xl bg-[#0A0E17]/60 border border-slate-800/60 hover:border-blue-500/40 hover:bg-[#0A0E17] transition-all"
                      >
                        <div className="flex items-start gap-3.5">
                          {/* Tech Brand Icon */}
                          <div className="w-9 h-9 rounded-lg bg-[#111827] border border-slate-800 flex items-center justify-center text-blue-400 shrink-0 mt-0.5 group-hover:text-cyan-400 transition-colors">
                            {skill.icon}
                          </div>

                          <div>
                            <h4 className="text-white text-sm font-bold group-hover:text-blue-400 transition-colors">
                              {skill.name}
                            </h4>
                            <p className="text-slate-400 text-xs leading-relaxed mt-0.5">
                              {skill.detail}
                            </p>
                          </div>
                        </div>

                        {/* Status / Level Tag */}
                        <span className="shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800 whitespace-nowrap">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
