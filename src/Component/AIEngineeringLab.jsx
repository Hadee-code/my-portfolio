import React, { useState } from "react";
import { 
  Brain, 
  GitBranch, 
  ArrowUpRight, 
  Play, 
  Check, 
  Activity,
  PlusCircle
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import profileData from "../data/profileData";
import Reveal from "./Reveal";
import { useToast } from "./ToastContext";

function AIEngineeringLab() {
  const { aiLabProjects } = profileData;
  const { addToast } = useToast();

  // Interactive state for Semantic Search Simulator in SmartDoc
  const [selectedDocQuery, setSelectedDocQuery] = useState("auth");
  // Interactive state for AutoFlow runner
  const [runningAgent, setRunningAgent] = useState(false);
  const [agentStep, setAgentStep] = useState(3);

  const docQueries = {
    auth: {
      query: "How is JWT token rotation handled in distributed sessions?",
      similarity: "0.984",
      matchedChunk: "AuthInterceptor.py: Token rotation occurs on /refresh via cryptographically verified refresh token with 7-day TTL.",
      confidence: "Very High Confidence"
    },
    db: {
      query: "Explain PostgreSQL Prisma connection pooling limits",
      similarity: "0.961",
      matchedChunk: "schema.prisma: Pool connection max=20 with exponential retry backoff on replica failover.",
      confidence: "High Confidence"
    },
    latency: {
      query: "What is the average response time for cached product listings?",
      similarity: "0.992",
      matchedChunk: "CacheService.py: In-memory cache returns product hierarchy in 12ms (99th percentile: 38ms).",
      confidence: "Highest Confidence"
    }
  };

  const runAgentWorkflow = () => {
    setRunningAgent(true);
    setAgentStep(1);
    addToast("Executing AutoFlow agent pipeline...", "info", 2000);
    setTimeout(() => setAgentStep(2), 600);
    setTimeout(() => {
      setAgentStep(3);
      setRunningAgent(false);
      addToast("AutoFlow: PR automated summary created!", "success", 2500);
    }, 1400);
  };

  return (
    <section id="ai-lab" className="w-full bg-[#F3F3F3] text-[#111111] px-6 md:px-12 lg:px-16 py-24 border-t border-black/[0.06] relative overflow-hidden bg-grid-pattern">
      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal direction="down" delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] mb-3.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#111111]" />
              <span className="text-[#111111] text-xs font-bold uppercase tracking-wider">AI & Engineering Lab</span>
            </div>
          </Reveal>
          
          <Reveal direction="clip-up" delay={200}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
              Experimental Systems & <span className="font-light italic text-zinc-500">AI Workflows</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <p className="text-zinc-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
              Python automation pipelines, semantic vector search experiments, LLM tooling, and predictive telemetry models engineered for real-world impact.
            </p>
          </Reveal>
        </div>

        {/* AI Lab Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {aiLabProjects.map((project, index) => (
            <Reveal key={project.id} direction="up" delay={120 * (index + 1)}>
              <div className="h-full bg-white rounded-3xl p-6 sm:p-7 border border-black/[0.08] hover:border-black/30 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] flex flex-col justify-between overflow-hidden">
                
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-black/[0.06]">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-[#111111] text-white flex items-center justify-center shadow-xs">
                        {index === 0 && <Brain className="w-4 h-4" />}
                        {index === 1 && <GitBranch className="w-4 h-4" />}
                        {index === 2 && <Activity className="w-4 h-4" />}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                        {project.badge}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono-code font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="font-display text-[#111111] text-lg sm:text-xl font-bold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                    {project.description}
                  </p>

                  {/* Interactive Playground for Lab Projects */}
                  {project.id === "ai-doc" && (
                    <div className="bg-[#F8F8F9] rounded-2xl p-4 border border-black/[0.06] mb-5 font-mono-code text-xs">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/[0.06]">
                        <span className="text-[10px] text-zinc-500 font-bold uppercase">Vector Similarity Probe</span>
                        <span className="text-emerald-700 font-bold text-[10px]">Cosine Metric</span>
                      </div>

                      {/* Select Probe */}
                      <div className="flex gap-1.5 mb-2.5">
                        {Object.keys(docQueries).map((k) => (
                          <button
                            key={k}
                            onClick={() => setSelectedDocQuery(k)}
                            className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer transition ${
                              selectedDocQuery === k
                                ? "bg-[#111111] text-white"
                                : "bg-white text-zinc-600 border border-black/[0.08]"
                            }`}
                          >
                            Query: {k}
                          </button>
                        ))}
                      </div>

                      <div className="bg-white p-2.5 rounded-xl border border-black/[0.06] mb-2 text-[11px] text-zinc-800">
                        <span className="text-zinc-400">Q:</span> "{docQueries[selectedDocQuery].query}"
                      </div>

                      <div className="bg-[#18181B] text-zinc-200 p-2.5 rounded-xl text-[10px] leading-relaxed mb-2 font-mono-code overflow-x-auto">
                        <div className="text-emerald-400">// Matched Document Chunk:</div>
                        {docQueries[selectedDocQuery].matchedChunk}
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1">
                        <span>Similarity: <strong className="text-zinc-900">{docQueries[selectedDocQuery].similarity}</strong></span>
                        <span className="text-emerald-700 font-semibold">{docQueries[selectedDocQuery].confidence}</span>
                      </div>
                    </div>
                  )}

                  {project.id === "ai-autoflow" && (
                    <div className="bg-[#F8F8F9] rounded-2xl p-4 border border-black/[0.06] mb-5 font-mono-code text-xs">
                      <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-black/[0.06]">
                        <span className="text-[10px] text-zinc-500 font-bold uppercase">Agent Workflow Pipeline</span>
                        <button
                          onClick={runAgentWorkflow}
                          disabled={runningAgent}
                          className="px-2.5 py-0.5 rounded-md bg-[#111111] text-white text-[10px] font-bold hover:bg-neutral-800 transition flex items-center gap-1 cursor-pointer disabled:opacity-50"
                        >
                          <Play className="w-2.5 h-2.5" />
                          <span>{runningAgent ? "Running..." : "Trigger"}</span>
                        </button>
                      </div>

                      <div className="space-y-1.5 text-[11px]">
                        <div className={`flex items-center gap-2 p-1.5 rounded-lg transition ${agentStep >= 1 ? "bg-white border border-black/[0.06] text-zinc-800" : "text-zinc-400"}`}>
                          <Check className={`w-3.5 h-3.5 ${agentStep >= 1 ? "text-emerald-600" : "text-zinc-300"}`} />
                          <span>1. Webhook payload received & sanitized</span>
                        </div>
                        <div className={`flex items-center gap-2 p-1.5 rounded-lg transition ${agentStep >= 2 ? "bg-white border border-black/[0.06] text-zinc-800" : "text-zinc-400"}`}>
                          <Check className={`w-3.5 h-3.5 ${agentStep >= 2 ? "text-emerald-600" : "text-zinc-300"}`} />
                          <span>2. AST parser & diff summary generated</span>
                        </div>
                        <div className={`flex items-center gap-2 p-1.5 rounded-lg transition ${agentStep >= 3 ? "bg-white border border-black/[0.06] text-zinc-800" : "text-zinc-400"}`}>
                          <Check className={`w-3.5 h-3.5 ${agentStep >= 3 ? "text-emerald-600" : "text-zinc-300"}`} />
                          <span>3. Automated review posted to PR stream</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.id === "ai-telemetry" && (
                    <div className="bg-[#F8F8F9] rounded-2xl p-4 border border-black/[0.06] mb-5 font-mono-code text-xs">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/[0.06]">
                        <span className="text-[10px] text-zinc-500 font-bold uppercase">Telemetry Model Inference</span>
                        <span className="text-emerald-700 font-bold text-[10px]">Real-Time Guard</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <div className="bg-white p-2 rounded-xl border border-black/[0.06] text-center">
                          <span className="text-[9px] text-zinc-400 uppercase block">Inference</span>
                          <span className="text-xs font-bold text-zinc-800">&lt; 3.8ms</span>
                        </div>
                        <div className="bg-white p-2 rounded-xl border border-black/[0.06] text-center">
                          <span className="text-[9px] text-zinc-400 uppercase block">Confidence</span>
                          <span className="text-xs font-bold text-emerald-700">96.2%</span>
                        </div>
                      </div>

                      <div className="bg-white px-3 py-2 rounded-xl border border-black/[0.06] flex items-center justify-between text-[10px]">
                        <span className="text-zinc-600">Active Anomaly Index:</span>
                        <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          0.02 (Nominal)
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-[#F8F8F9] text-zinc-700 border border-black/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between">
                  <span className="text-xs font-mono-code text-zinc-400">
                    {project.category}
                  </span>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-800 hover:text-black transition"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-zinc-600" />
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

        {/* Future Expansion Card - Keeps section flexible */}
        <Reveal direction="up" delay={300}>
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-dashed border-black/[0.15] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-10 h-10 rounded-2xl bg-[#F8F8F9] border border-black/[0.08] flex items-center justify-center text-zinc-700">
                <PlusCircle className="w-5 h-5 text-zinc-600" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-[#111111]">
                  AI Engineering Lab Active Pipeline
                </h4>
                <p className="text-zinc-500 text-xs">
                  New experiments in multi-modal agents, RAG architectures, and model fine-tuning are added on an ongoing basis.
                </p>
              </div>
            </div>

            <a
              href="https://github.com/muhammadhadeebutt"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#111111] text-white text-xs font-semibold hover:bg-neutral-800 transition flex items-center gap-2 shadow-xs shrink-0"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Follow GitHub Releases</span>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default AIEngineeringLab;
