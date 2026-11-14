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

  // Realistic Clean UI Mockups matching the editorial style
  const renderProjectMockup = (projectId) => {
    switch (projectId) {
      case 1:
        // Lean E-Commerce Mockup
        return (
          <div className="bg-[#F8F8F9] rounded-2xl p-4 sm:p-5 border border-black/[0.08] font-sans text-xs">
            {/* Storefront Mini Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/[0.06]">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#111111] text-sm tracking-tight">LeanShop</span>
                <span className="text-[10px] bg-white text-zinc-800 px-2.5 py-0.5 rounded-full border border-black/[0.08] font-semibold shadow-xs">
                  MERN v2.4
                </span>
              </div>
              <div className="flex items-center gap-3 text-zinc-600">
                <span className="hidden sm:inline text-[11px] font-medium">Dynamic Catalog</span>
                <div className="px-3 py-1 bg-[#111111] text-white rounded-full font-semibold text-[11px] flex items-center gap-1.5 shadow-xs">
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Cart ({cartCount})</span>
                </div>
              </div>
            </div>

            {/* Products Row with interactive Add-to-Cart */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-white p-3 rounded-xl border border-black/[0.06] shadow-xs flex flex-col justify-between">
                <div className="h-16 bg-[#F3F3F3] rounded-lg flex items-center justify-center text-zinc-800 font-mono-code text-[11px] mb-2 border border-black/[0.04]">
                  ⚡ Mechanical KB
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#111111] font-bold text-xs">$89.99</span>
                    <span className="text-[10px] text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-1.5 py-0.5 rounded font-semibold">
                      In Stock
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart("Mechanical KB")}
                    className="w-full py-1.5 bg-[#111111] hover:bg-neutral-800 active:scale-95 text-white rounded-lg text-[10px] font-bold transition flex items-center justify-center gap-1 cursor-pointer"
                  >
                    {addedItem === "Mechanical KB" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-300" />
                        <span>Added!</span>
                      </>
                    ) : (
                      <span>+ Add to Cart</span>
                    )}
                  </button>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-black/[0.06] shadow-xs flex flex-col justify-between">
                <div className="h-16 bg-[#F3F3F3] rounded-lg flex items-center justify-center text-zinc-800 font-mono-code text-[11px] mb-2 border border-black/[0.04]">
                  🖥️ 4K Ultra Monitor
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#111111] font-bold text-xs">$349.00</span>
                    <span className="text-[10px] text-zinc-700 bg-zinc-100 border border-black/[0.06] px-1.5 py-0.5 rounded font-semibold">
                      Verified
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart("4K Ultra Monitor")}
                    className="w-full py-1.5 bg-[#111111] hover:bg-neutral-800 active:scale-95 text-white rounded-lg text-[10px] font-bold transition flex items-center justify-center gap-1 cursor-pointer"
                  >
                    {addedItem === "4K Ultra Monitor" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-300" />
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
            <div className="flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-black/[0.06] text-[11px] shadow-xs">
              <span className="text-zinc-600 flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                MongoDB Atlas: <strong className="text-zinc-800">Replica Set Connected</strong>
              </span>
              <span className="text-[#111111] font-mono-code font-bold">Latency: 38ms</span>
            </div>
          </div>
        );

      case 2:
        // Amanah Social Media Mockup
        return (
          <div className="bg-[#F8F8F9] rounded-2xl p-4 sm:p-5 border border-black/[0.08] font-sans text-xs">
            {/* Feed Post Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#111111] flex items-center justify-center text-white font-bold text-xs shadow-xs">
                  HB
                </div>
                <div>
                  <p className="text-[#111111] font-bold text-xs leading-none">Muhammad Hadee</p>
                  <p className="text-zinc-500 text-[10px] mt-0.5">@hadeebutt · Just now</p>
                </div>
              </div>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white text-zinc-700 border border-black/[0.08] font-semibold shadow-xs">
                PostgreSQL & Prisma
              </span>
            </div>

            {/* Post Content */}
            <div className="bg-white p-3.5 rounded-xl border border-black/[0.06] mb-3 text-zinc-700 leading-relaxed text-[11px] shadow-xs">
              <p>Just merged the distributed relational feed schema with Next.js App Router and Prisma ORM! 🚀 Real-time reactions and follower relationships now stream with zero layout shift.</p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                <span className="text-zinc-800 font-mono-code text-[10px] bg-[#F3F3F3] border border-black/[0.06] px-2 py-0.5 rounded">#Nextjs</span>
                <span className="text-zinc-800 font-mono-code text-[10px] bg-[#F3F3F3] border border-black/[0.06] px-2 py-0.5 rounded">#PostgreSQL</span>
                <span className="text-zinc-800 font-mono-code text-[10px] bg-[#F3F3F3] border border-black/[0.06] px-2 py-0.5 rounded">#FullStack</span>
              </div>
            </div>

            {/* Interactive Counters with Clickable Like */}
            <div className="flex items-center justify-between text-zinc-500 px-2 py-1 text-[11px] border-t border-black/[0.06] pt-2.5">
              <button
                onClick={toggleAmanahLike}
                className={`flex items-center gap-1.5 transition font-semibold cursor-pointer ${
                  amanahLiked ? "text-rose-600 scale-105" : "text-zinc-600 hover:text-rose-600"
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${amanahLiked ? "fill-rose-600 text-rose-600" : ""}`} />
                <span>{amanahLikeCount.toLocaleString()} Likes</span>
              </button>

              <span className="text-zinc-700 font-medium flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-zinc-500" />
                <span>84 Comments</span>
              </span>

              <span className="text-zinc-700 font-medium flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5 text-zinc-500" />
                <span>32 Shares</span>
              </span>
            </div>
          </div>
        );

      case 3:
        // Full-Stack Portfolio Showcase Mockup (Lighthouse Benchmarks)
        return (
          <div className="bg-[#F8F8F9] rounded-2xl p-4 sm:p-5 border border-black/[0.08] font-sans text-xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/[0.06]">
              <span className="font-bold text-[#111111] text-xs flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Google Lighthouse Speed Audits</span>
              </span>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                100% Mobile Ready
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2.5 mb-3.5">
              {[
                { label: "Performance", score: "99" },
                { label: "Accessibility", score: "100" },
                { label: "Best Practice", score: "100" },
                { label: "SEO Score", score: "100" },
              ].map((item) => (
                <div key={item.label} className="bg-white p-2.5 rounded-xl border border-black/[0.06] text-center shadow-xs">
                  <div className="w-9 h-9 rounded-full border-2 border-emerald-500 bg-emerald-50 text-emerald-800 flex items-center justify-center font-black text-xs mx-auto mb-1">
                    {item.score}
                  </div>
                  <span className="text-[10px] text-zinc-700 font-semibold block leading-tight truncate">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-black/[0.06] flex items-center justify-between text-[11px] shadow-xs">
              <span className="text-zinc-600 font-medium">Bundler: <strong className="text-zinc-900">Vite 8 & Tailwind CSS v4</strong></span>
              <span className="text-[#111111] font-mono-code font-bold">Build: 349ms</span>
            </div>
          </div>
        );

      case 4:
        // RESTful Auth Microservice Mockup (Terminal / JSON API Inspector)
        return (
          <div className="bg-[#F8F8F9] rounded-2xl p-4 sm:p-5 border border-black/[0.08] font-mono-code text-xs">
            {/* Endpoint Selector Tabs */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/[0.06] text-[11px]">
              <div className="flex gap-1.5">
                {["verify", "login", "refresh"].map((ep) => (
                  <button
                    key={ep}
                    onClick={() => setAuthEndpoint(ep)}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-bold cursor-pointer transition ${
                      authEndpoint === ep
                        ? "bg-[#111111] text-white shadow-xs"
                        : "bg-white text-zinc-600 hover:text-black border border-black/[0.08]"
                    }`}
                  >
                    POST /{ep}
                  </button>
                ))}
              </div>
              <span className="text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 text-[10px]">
                200 OK
              </span>
            </div>

            <pre className="text-[11px] text-zinc-200 leading-relaxed overflow-x-auto bg-[#18181B] p-3 rounded-xl border border-black/[0.1] mb-2.5 font-mono-code shadow-inner">
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

            <div className="flex items-center justify-between text-[10px] text-zinc-500">
              <span>Security: <strong className="text-zinc-800">Bcrypt + JWT Rotation</strong></span>
              <span className="text-emerald-700 font-bold">100% Postman Validated</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="showcase" className="w-full bg-[#F3F3F3] text-[#111111] px-6 md:px-12 lg:px-16 py-14 md:py-18 border-t border-black/[0.06] relative overflow-hidden bg-grid-pattern">
      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <Reveal direction="down" delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#111111]" />
              <span className="text-[#111111] text-xs font-bold uppercase tracking-wider">Engineering Showcase</span>
            </div>
          </Reveal>
          
          <Reveal direction="clip-up" delay={200}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
              Featured <span className="font-light italic text-zinc-500">Projects</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <p className="text-zinc-600 text-sm sm:text-base mt-3 leading-relaxed font-normal">
              Full-stack production web applications, database architectures, and responsive user interfaces engineered with modern stacks.
            </p>
          </Reveal>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mt-6 sm:mt-7">
            {filterOptions.map((filter) => {
              const count = filter === "All" ? projects.length : projects.filter((p) => p.category === filter).length;
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 sm:px-4.5 py-1.5 sm:py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#111111] text-white shadow-xs font-semibold"
                      : "bg-white text-zinc-700 hover:text-black hover:bg-black/[0.04] border border-black/[0.08] shadow-xs"
                  }`}
                >
                  <span>{filter}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-[#F3F3F3] text-zinc-600"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => {
            const activeTab = activeTabByProject[project.id] || "preview";

            return (
              <Reveal key={project.id} direction="up" delay={100 * (index % 2 + 1)}>
                <div className="group h-full bg-white rounded-3xl border border-black/[0.08] hover:border-black/30 transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                  
                  {/* Top Mac-Style Window Frame Header */}
                  <div className="px-5 sm:px-6 py-3 bg-[#F8F8F9] border-b border-black/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#111111] inline-block" />
                      <div className="ml-2 flex items-center gap-1.5 bg-white px-2.5 py-0.5 rounded-full border border-black/[0.08] text-zinc-600 text-[10px] sm:text-[11px] font-mono-code truncate max-w-[150px] sm:max-w-xs shadow-xs">
                        <Lock className="w-2.5 h-2.5 text-zinc-500" />
                        <span>hadee.dev/{project.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EFEFEF] text-zinc-800 border border-black/[0.06]">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="text-[11px] font-medium text-amber-800 flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                          <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                          <span>Featured</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Main Project Card Content */}
                  <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
                    
                    <div>
                      {/* Title & Subtitle */}
                      <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-wider mb-1">
                        {project.subtitle}
                      </p>
                      <h3 className="font-display text-[#111111] text-xl sm:text-2xl font-bold mb-2 group-hover:text-black transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                        {project.description}
                      </p>

                      {/* Interactive In-Card Tab Navigator */}
                      <div className="flex items-center gap-2 pb-3 mb-4 border-b border-black/[0.06]">
                        <button
                          onClick={() => handleTabChange(project.id, "preview")}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                            activeTab === "preview"
                              ? "bg-[#111111] text-white shadow-xs font-semibold"
                              : "bg-[#F8F8F9] text-zinc-700 hover:text-black hover:bg-[#F0F0F0] border border-black/[0.06]"
                          }`}
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Interactive Simulator</span>
                        </button>

                        <button
                          onClick={() => handleTabChange(project.id, "highlights")}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                            activeTab === "highlights"
                              ? "bg-[#111111] text-white shadow-xs font-semibold"
                              : "bg-[#F8F8F9] text-zinc-700 hover:text-black hover:bg-[#F0F0F0] border border-black/[0.06]"
                          }`}
                        >
                          <ListOrdered className="w-3.5 h-3.5" />
                          <span>Architecture Highlights</span>
                        </button>
                      </div>

                      {/* Tab 1: Interactive Simulator */}
                      {activeTab === "preview" && (
                        <div className="mb-4 animate-fadeIn">
                          {renderProjectMockup(project.id)}
                        </div>
                      )}

                      {/* Tab 2: Key Deliverables List */}
                      {activeTab === "highlights" && (
                        <div className="bg-[#F8F8F9] rounded-2xl p-4 sm:p-5 border border-black/[0.08] mb-4 shadow-xs">
                          <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-wider mb-2.5">
                            Key Architecture Achievements
                          </p>
                          <ul className="space-y-2">
                            {project.features.map((feat, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="mt-3.5 pt-3.5 border-t border-black/[0.06]">
                      <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mb-2">Technologies Used</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#F8F8F9] text-zinc-800 border border-black/[0.06] group-hover:border-black/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Card Footer: Dual Actions */}
                  <div className="px-5 sm:px-7 py-3.5 border-t border-black/[0.06] bg-[#FAFAFA] flex items-center justify-between gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-800 hover:text-black transition-colors"
                    >
                      <GithubIcon className="w-4 h-4 text-zinc-700" />
                      <span>Explore Repository</span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-full bg-[#111111] text-white hover:bg-neutral-800 transition-all text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
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
