import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Copy, 
  Check, 
  BookOpen, 
  ShieldCheck, 
  Sparkles
} from "lucide-react";
import profileData from "../data/profileData";
import { useToast } from "./ToastContext";
import InteractiveTilt from "./InteractiveTilt";

gsap.registerPlugin(ScrollTrigger);

export function EducationCertifications() {
  const { education, certifications } = profileData;
  const { addToast } = useToast();
  const [copiedId, setCopiedId] = useState(null);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const degreeCardRef = useRef(null);
  const certsRef = useRef(null);

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

      // Degree Card entrance
      if (degreeCardRef.current) {
        gsap.fromTo(
          degreeCardRef.current,
          { opacity: 0, x: -40, scale: 0.97 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: degreeCardRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Certification cards staggered entrance
      if (certsRef.current) {
        const certCards = certsRef.current.querySelectorAll(".cert-card-item");
        gsap.fromTo(
          certCards,
          { opacity: 0, y: 30, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: certsRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyCredential = (credId) => {
    navigator.clipboard.writeText(credId);
    setCopiedId(credId);
    addToast(`Credential ID ${credId} copied to clipboard!`, "success", 2500);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section 
      ref={sectionRef}
      id="education" 
      className="w-full bg-[#F3F3F3] text-[#111111] px-6 md:px-12 lg:px-16 py-14 md:py-18 border-t border-black/[0.06] relative overflow-hidden bg-lines-pattern"
    >
      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Heading */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#111111]" />
            <span className="text-[#111111] text-xs font-bold uppercase tracking-wider">Education & Certifications</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
            Academic Foundation & <span className="font-light italic text-zinc-500">Credentials</span>
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base mt-3 leading-relaxed font-normal">
            Rigorous university computer science training coupled with verified industry certifications in full-stack engineering, databases, and Python backend systems.
          </p>
        </div>

        {/* Main Grid: Degree on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          
          {/* Degree Card (5 Cols) */}
          <div ref={degreeCardRef} className="lg:col-span-5 h-full">
            <InteractiveTilt maxTilt={4} scale={1.01} className="h-full">
              <div className="h-full bg-white rounded-3xl p-6 sm:p-7 border border-black/[0.08] hover:border-black/30 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] transition-all duration-300 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div>
                  {/* Header Badge */}
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-black/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#111111] text-white flex items-center justify-center shadow-xs">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block">Formal Degree</span>
                        <span className="text-sm font-extrabold text-[#111111]">University Education</span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono-code font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {education[0]?.status || "In Progress"}
                    </span>
                  </div>

                  <h3 className="font-display text-[#111111] text-xl sm:text-2xl font-bold mb-1.5">
                    {education[0]?.degree}
                  </h3>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3.5 text-xs text-zinc-600 mb-3.5 font-medium">
                    <span className="flex items-center gap-1.5 font-semibold text-zinc-800">
                      <BookOpen className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{education[0]?.institution}</span>
                    </span>
                    <span className="flex items-center gap-1 text-zinc-500">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{education[0]?.location}</span>
                    </span>
                    <span className="flex items-center gap-1 text-zinc-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{education[0]?.period}</span>
                    </span>
                  </div>

                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                    {education[0]?.description}
                  </p>

                  {/* Core Courses Pills */}
                  <div className="pt-3.5 border-t border-black/[0.06]">
                    <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-zinc-700" />
                      <span>Core Academic Coursework</span>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {education[0]?.coreCourses.map((course, idx) => (
                        <div
                          key={idx}
                          className="bg-[#F8F8F9] border border-black/[0.06] rounded-xl px-2.5 py-1.5 flex items-center gap-2 text-xs text-zinc-700 font-medium"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 shrink-0" />
                          <span className="truncate">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Verification Note */}
                <div className="mt-5 pt-3.5 border-t border-black/[0.06] flex items-center justify-between text-[11px] text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Accredited Curriculum</span>
                  </span>
                  <span className="font-mono-code font-semibold text-zinc-700">HEC Recognized</span>
                </div>
              </div>
            </InteractiveTilt>
          </div>

          {/* Certifications Grid (7 Cols) */}
          <div ref={certsRef} className="lg:col-span-7 flex flex-col justify-between space-y-3.5">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#111111] text-white flex items-center justify-center shadow-xs">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display text-[#111111] text-base sm:text-lg font-bold">Verified Specializations</h3>
                    <p className="text-zinc-500 text-xs font-medium">Industry and Engineering Certificates</p>
                  </div>
                </div>

                <span className="text-xs font-mono-code text-zinc-600 bg-white border border-black/[0.08] px-3 py-1 rounded-full shadow-xs">
                  {certifications.length} Credentials Verified
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {certifications.map((cert) => (
                  <div key={cert.credentialId} className="cert-card-item">
                    <InteractiveTilt maxTilt={4} scale={1.01} className="h-full">
                      <div className="h-full bg-white rounded-2xl p-4 sm:p-5 border border-black/[0.08] hover:border-black/30 hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)] transition-all duration-300 shadow-sm flex flex-col justify-between">
                        <div>
                          {/* Top Badges */}
                          <div className="flex items-center justify-between gap-2 mb-2.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F3F3F3] text-zinc-700 border border-black/[0.06]">
                              {cert.issuer}
                            </span>
                            <span className="text-xs font-mono-code text-zinc-500 font-semibold">
                              {cert.date}
                            </span>
                          </div>

                          <h4 className="font-display text-[#111111] text-sm sm:text-base font-bold leading-snug mb-1.5">
                            {cert.title}
                          </h4>

                          <p className="text-zinc-600 text-xs leading-relaxed mb-3 font-normal">
                            {cert.detail}
                          </p>
                        </div>

                        {/* Credential ID Bar with Copy Feature */}
                        <div className="pt-2.5 border-t border-black/[0.06] flex items-center justify-between">
                          <div className="flex items-center gap-1.5 overflow-hidden">
                            <span className="text-[10px] text-zinc-400 font-mono-code">ID:</span>
                            <span className="text-[11px] font-mono-code text-zinc-800 font-bold truncate">
                              {cert.credentialId}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleCopyCredential(cert.credentialId)}
                            className="p-1 rounded-lg bg-[#F8F8F9] hover:bg-zinc-200 border border-black/[0.08] text-zinc-600 hover:text-black transition cursor-pointer active:scale-95 shrink-0"
                            title="Copy Credential ID"
                          >
                            {copiedId === cert.credentialId ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>
                    </InteractiveTilt>
                  </div>
                ))}
              </div>
            </div>

            {/* Continuous Learning Callout Strip */}
            <InteractiveTilt maxTilt={3} scale={1.008}>
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-black/[0.08] flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0 ml-1" />
                  <p className="text-xs text-zinc-700 font-medium leading-relaxed">
                    Actively advancing knowledge in <strong className="text-zinc-900 font-semibold">FastAPI microservices</strong>, <strong className="text-zinc-900 font-semibold">LangChain agents</strong>, and <strong className="text-zinc-900 font-semibold">PostgreSQL query optimization</strong>.
                  </p>
                </div>
              </div>
            </InteractiveTilt>

          </div>

        </div>

      </div>
    </section>
  );
}

export default EducationCertifications;
