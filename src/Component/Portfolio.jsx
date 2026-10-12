import React, { useState } from "react";
import { 
  ExternalLink, 
  Star, 
  Lock, 
  CheckCircle2, 
  Sparkles, 
  Eye, 
  ListOrdered, 
  Heart, 
  MessageSquare, 
  Share2, 
  ShoppingCart, 
  Check 
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import profileData from "../data/profileData";
import Reveal from "./Reveal";
import { useToast } from "./ToastContext";

function Portfolio() {
  const { projects } = profileData;
  const { addToast } = useToast();
  
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeTabByProject, setActiveTabByProject] = useState({
    1: "preview",
    2: "preview",
    3: "preview",
    4: "preview",
  });

  // Interactive mockup state for Amanah (likes toggle)
  const [amanahLiked, setAmanahLiked] = useState(false);
  const [amanahLikeCount, setAmanahLikeCount] = useState(1280);

  // Interactive mockup state for Lean E-Commerce (cart count)
  const [cartCount, setCartCount] = useState(2);
  const [addedItem, setAddedItem] = useState(null);

  // Interactive mockup state for Auth API inspector (endpoint selector)
  const [authEndpoint, setAuthEndpoint] = useState("verify");

  const filterOptions = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleTabChange = (projectId, tab) => {
    setActiveTabByProject((prev) => ({ ...prev, [projectId]: tab }));
  };

  const toggleAmanahLike = () => {
    if (amanahLiked) {
      setAmanahLikeCount((prev) => prev - 1);
      setAmanahLiked(false);
    } else {
      setAmanahLikeCount((prev) => prev + 1);
      setAmanahLiked(true);
      addToast("Liked post on Amanah simulator!", "success", 2000);
    }
  };

  const handleAddToCart = (itemName) => {
    setCartCount((prev) => prev + 1);
    setAddedItem(itemName);
    addToast(`Added "${itemName}" to cart!`, "success", 2000);
    setTimeout(() => setAddedItem(null), 1500);
  };

  // Realistic UI Mockups for each project
  const renderProjectMockup = (projectId) => {
    switch (projectId) {
      case 1:
        // Lean E-Commerce Mockup
        return (
          <div className="bg-[#070A12] rounded-2xl p-4 sm:p-5 border border-slate-800 font-sans text-xs">
            {/* Storefront Mini Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm tracking-tight">LeanShop</span>
                <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/20 font-semibold">
                  MERN v2.4
                </span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <span className="hidden sm:inline text-[11px]">Dynamic Catalog</span>
                <div className="px-2.5 py-1 bg-blue-600 text-white rounded-lg font-semibold text-[11px] flex items-center gap-1.5 shadow-sm shadow-blue-500/20">
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Cart ({cartCount})</span>
                </div>
              </div>
            </div>

            {/* Products Row with interactive Add-to-Cart */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-[#0F172A] p-3 rounded-xl border border-slate-800 flex flex-col justify-between">
                <div className="h-16 bg-gradient-to-br from-blue-900/30 to-indigo-900/20 rounded-lg flex items-center justify-center text-blue-300 font-mono-code text-[11px] mb-2 border border-blue-500/10">
                  ⚡ Mechanical KB
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-bold">$89.99</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-semibold">In Stock</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart("Mechanical KB")}
                    className="w-full py-1 bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white rounded-lg text-[10px] font-bold transition flex items-center justify-center gap-1 cursor-pointer"
                  >
                    {addedItem === "Mechanical KB" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Added!</span>
                      </>
                    ) : (
                      <span>+ Add to Cart</span>
                    )}
                  </button>
                </div>
              </div>

              <div className="bg-[#0F172A] p-3 rounded-xl border border-slate-800 flex flex-col justify-between">
                <div className="h-16 bg-gradient-to-br from-cyan-900/30 to-blue-900/20 rounded-lg flex items-center justify-center text-cyan-300 font-mono-code text-[11px] mb-2 border border-cyan-500/10">
                  🖥️ 4K Ultra Monitor
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-bold">$349.00</span>
                    <span className="text-[10px] text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded font-semibold">Verified</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart("4K Ultra Monitor")}
                    className="w-full py-1 bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white rounded-lg text-[10px] font-bold transition flex items-center justify-center gap-1 cursor-pointer"
                  >
                    {addedItem === "4K Ultra Monitor" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Added!</span>
                      </>
                    ) : (
                      <span>+ Add to Cart</span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Live Metrics Bar */}
            <div className="flex items-center justify-between bg-slate-900/90 px-3 py-2 rounded-xl border border-slate-800 text-[11px]">
              <span className="text-slate-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                MongoDB Atlas: <strong className="text-slate-200">Replica Set Connected</strong>
              </span>
              <span className="text-blue-400 font-mono-code">Latency: 38ms</span>
            </div>
          </div>
        );

      case 2:
        // Amanah Social Media Mockup
        return (
          <div className="bg-[#070A12] rounded-2xl p-4 sm:p-5 border border-slate-800 font-sans text-xs">
            {/* Feed Post Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                  HB
                </div>
                <div>
                  <p className="text-white font-bold text-xs leading-none">Muhammad Hadee</p>
                  <p className="text-slate-400 text-[10px] mt-0.5">@hadeebutt · Just now</p>
                </div>
              </div>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-semibold">
                PostgreSQL & Prisma
              </span>
            </div>

            {/* Post Content */}
            <div className="bg-[#0F172A] p-3.5 rounded-xl border border-slate-800 mb-3 text-slate-300 leading-relaxed text-[11px]">
              <p>Just merged the distributed relational feed schema with Next.js App Router and Prisma ORM! 🚀 Real-time reactions and follower relationships now stream with zero layout shift.</p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                <span className="text-blue-400 font-mono-code text-[10px] bg-blue-500/10 px-2 py-0.5 rounded">#Nextjs</span>
                <span className="text-cyan-400 font-mono-code text-[10px] bg-cyan-500/10 px-2 py-0.5 rounded">#PostgreSQL</span>
                <span className="text-indigo-400 font-mono-code text-[10px] bg-indigo-500/10 px-2 py-0.5 rounded">#FullStack</span>
              </div>
            </div>

            {/* Interactive Counters with Clickable Like */}
            <div className="flex items-center justify-between text-slate-400 px-2 py-1 text-[11px] border-t border-slate-800 pt-2.5">
              <button
                onClick={toggleAmanahLike}
                className={`flex items-center gap-1.5 transition font-semibold cursor-pointer ${
                  amanahLiked ? "text-rose-400 scale-105" : "text-slate-400 hover:text-rose-400"
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${amanahLiked ? "fill-rose-400" : ""}`} />
                <span>{amanahLikeCount.toLocaleString()} Likes</span>
              </button>

              <span className="text-blue-400 font-semibold flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>84 Comments</span>
              </span>

              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5" />
                <span>32 Shares</span>
              </span>
            </div>
          </div>
        );

      case 3:
        // Full-Stack Portfolio Showcase Mockup (Lighthouse Benchmarks)
        return (
          <div className="bg-[#070A12] rounded-2xl p-4 sm:p-5 border border-slate-800 font-sans text-xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <span className="font-bold text-white text-xs flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Google Lighthouse Speed Audits</span>
              </span>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                100% Mobile Ready
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2.5 mb-3.5">
              {[
                { label: "Performance", score: "99", color: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10" },
                { label: "Accessibility", score: "100", color: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10" },
                { label: "Best Practice", score: "100", color: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10" },
                { label: "SEO Score", score: "100", color: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10" },
              ].map((item) => (
                <div key={item.label} className="bg-[#0F172A] p-2.5 rounded-xl border border-slate-800 text-center">
                  <div className={`w-9 h-9 rounded-full border-2 ${item.color} flex items-center justify-center font-black text-xs mx-auto mb-1`}>
                    {item.score}
                  </div>
                  <span className="text-[10px] text-slate-300 font-semibold block leading-tight truncate">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#0F172A] p-2.5 rounded-xl border border-slate-800 flex items-center justify-between text-[11px]">
              <span className="text-slate-300 font-medium">Bundler: <strong className="text-cyan-400">Vite 8 & Tailwind CSS v4</strong></span>
              <span className="text-blue-400 font-mono-code font-bold">Build: 349ms</span>
            </div>
          </div>
        );

      case 4:
        // RESTful Auth Microservice Mockup (Terminal / JSON API Inspector)
        return (
          <div className="bg-[#070A12] rounded-2xl p-4 sm:p-5 border border-slate-800 font-mono-code text-xs">
            {/* Endpoint Selector Tabs */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px]">
              <div className="flex gap-1.5">
                {["verify", "login", "refresh"].map((ep) => (
                  <button
                    key={ep}
                    onClick={() => setAuthEndpoint(ep)}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer transition ${
                      authEndpoint === ep
                        ? "bg-blue-600 text-white"
                        : "bg-slate-900 text-slate-400 hover:text-white"
                    }`}
                  >
                    POST /{ep}
                  </button>
                ))}
              </div>
              <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                200 OK
              </span>
            </div>

            <pre className="text-[11px] text-slate-300 leading-relaxed overflow-x-auto bg-[#0F172A] p-3 rounded-xl border border-slate-800 mb-2.5">
{authEndpoint === "verify" && `{
  "status": "success",
  "auth": true,
  "user": "hadee_butt",
  "role": "FullStack_Developer",
  "token_type": "Bearer JWT",
  "rbac": ["read", "write", "admin"]
}`}
{authEndpoint === "login" && `{
  "status": "success",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX...",
  "refreshToken": "d7a8f9c2e1b4a3...",
  "expiresIn": 3600
}`}
{authEndpoint === "refresh" && `{
  "status": "success",
  "tokenRotated": true,
  "newAccessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX...",
  "status": "Token cycle refreshed"
}`}
            </pre>

            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span>Security: <strong className="text-indigo-400">Bcrypt + JWT Rotation</strong></span>
              <span className="text-emerald-400 font-bold">100% Postman Validated</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="portfolio" className="w-full bg-[#070A12] px-6 md:px-10 lg:px-16 py-24 border-t border-slate-800/80 relative overflow-hidden bg-grid-pattern">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-[140px] pointer-events-none" />

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
              Featured <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">Projects</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed font-normal">
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
                      ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25 font-bold"
                      : "bg-[#0F172A] text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800/90"
                  }`}
                >
                  <span>{filter}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${
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

        {/* Modern Project Bento Cards with Browser Frames & In-Card Tab Switchers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const activeTab = activeTabByProject[project.id] || "preview";

            return (
              <Reveal key={project.id} direction="up" delay={100 * (index % 2 + 1)}>
                <div className="group h-full bg-[#0F172A]/75 backdrop-blur-xl rounded-3xl border border-slate-800/90 hover:border-blue-500/60 transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden shadow-2xl hover:-translate-y-2 hover:shadow-blue-500/15">
                  
                  {/* Top Mac-Style Window Frame Header */}
                  <div className="px-6 py-3.5 bg-[#0B101E] border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                      <div className="ml-2 flex items-center gap-1.5 bg-[#070A12] px-2.5 py-1 rounded-md border border-slate-800 text-slate-400 text-[11px] font-mono-code truncate max-w-[150px] sm:max-w-xs">
                        <Lock className="w-2.5 h-2.5 text-emerald-400" />
                        <span>hadee.dev/{project.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="text-[11px] font-medium text-amber-400 flex items-center gap-1 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span>Featured</span>
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
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Interactive In-Card Tab Navigator */}
                    <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-800/80">
                      <button
                        onClick={() => handleTabChange(project.id, "preview")}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                          activeTab === "preview"
                            ? "bg-blue-600 text-white shadow-sm shadow-blue-500/25"
                            : "bg-[#070A12] text-slate-400 hover:text-white"
                        }`}
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Interactive Simulator</span>
                      </button>

                      <button
                        onClick={() => handleTabChange(project.id, "highlights")}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                          activeTab === "highlights"
                            ? "bg-blue-600 text-white shadow-sm shadow-blue-500/25"
                            : "bg-[#070A12] text-slate-400 hover:text-white"
                        }`}
                      >
                        <ListOrdered className="w-3.5 h-3.5" />
                        <span>Engineering Deliverables</span>
                      </button>
                    </div>

                    {/* Tab 1: Interactive Simulator */}
                    {activeTab === "preview" && (
                      <div className="mb-6 animate-fadeIn">
                        {renderProjectMockup(project.id)}
                      </div>
                    )}

                    {/* Tab 2: Key Deliverables List */}
                    {activeTab === "highlights" && (
                      <div className="bg-[#070A12]/90 rounded-2xl p-5 border border-slate-800 mb-6">
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">
                          Key Architecture Achievements
                        </p>
                        <ul className="space-y-2.5">
                          {project.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
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
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#070A12] text-slate-300 border border-slate-800 group-hover:border-slate-700 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Card Footer: Dual Actions */}
                  <div className="px-6 sm:px-8 py-4 border-t border-slate-800 bg-[#0B101E] flex items-center justify-between gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200 hover:text-blue-400 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Explore Repository</span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/25 text-blue-400 hover:bg-blue-600 hover:text-white transition-all text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <span>View Code</span>
                      <ExternalLink className="w-3.5 h-3.5" />
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
