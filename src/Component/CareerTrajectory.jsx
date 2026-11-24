import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2,
  Milestone,
  Brain
} from "lucide-react";
import profileData from "../data/profileData";
import InteractiveTilt from "./InteractiveTilt";

gsap.registerPlugin(ScrollTrigger);

export function CareerTrajectory() {
  const { experience, careerMilestones } = profileData;

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const timelineProgressRef = useRef(null);
  const timelineTrackRef = useRef(null);

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

      // Left Column Experience Card entrance
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { opacity: 0, x: -40, scale: 0.97 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: leftColRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Right Column Milestones staggered entrance
      if (rightColRef.current) {
        const milestoneCards = rightColRef.current.querySelectorAll(".milestone-item");
        gsap.fromTo(
          milestoneCards,
          { opacity: 0, x: 35, y: 15 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.75,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: rightColRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animated Timeline Laser/Progress Line
      if (timelineProgressRef.current && timelineTrackRef.current) {
        gsap.fromTo(
          timelineProgressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top center",
            scrollTrigger: {
              trigger: timelineTrackRef.current,
              start: "top 75%",
              end: "bottom 65%",
              scrub: 0.8,
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
      id="career" 
      className="w-full bg-[#F3F3F3] text-[#111111] px-6 md:px-12 lg:px-16 py-14 md:py-18 border-t border-black/[0.06] relative overflow-hidden bg-lines-pattern"
    >
      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Heading */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#111111]" />
            <span className="text-[#111111] text-xs font-bold uppercase tracking-wider">Career Trajectory</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
            Professional Journey & <span className="font-light italic text-zinc-500">AI Progression</span>
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base mt-3 leading-relaxed font-normal">
            Hands-on software engineering at Techset Solutions paired with continuous progression toward scalable AI pipelines and intelligent systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Current Role & Production Achievements */}
          <div ref={leftColRef} className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#111111] flex items-center justify-center text-white shadow-xs">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-[#111111] text-xl sm:text-2xl font-bold">Engineering Experience</h3>
                <p className="text-zinc-500 text-[11px] uppercase tracking-wider font-semibold">Active Production Engineering</p>
              </div>
            </div>

            {experience.map((job, idx) => (
              <InteractiveTilt key={idx} maxTilt={4} scale={1.01}>
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-black/[0.08] hover:border-black/30 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] transition-all duration-300 shadow-sm relative overflow-hidden">
                  
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F3F3F3] text-zinc-700 border border-black/[0.06] flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{job.period}</span>
                      </span>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{job.type}</span>
                      </span>
                    </div>

                    <span className="text-xs text-zinc-500 font-medium flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{job.location}</span>
                    </span>
                  </div>

                  <h4 className="font-display text-[#111111] text-xl sm:text-2xl font-bold mt-1">{job.role}</h4>
                  
                  <div className="flex items-center gap-2 text-zinc-800 text-sm font-semibold mb-3 mt-1">
                    <Building2 className="w-4 h-4 text-zinc-500" />
                    <span>{job.company}</span>
                  </div>

                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                    {job.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-black/[0.06]">
                    <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-wider mb-2">Key Production Contributions</p>
                    {job.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                        <CheckCircle2 className="w-4 h-4 text-zinc-900 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* AI Engineering Progression Sub-card */}
                  <div className="mt-5 pt-4 border-t border-black/[0.06] bg-[#F8F8F9] rounded-2xl p-4 sm:p-5 border border-black/[0.06]">
                    <div className="flex items-center gap-2 mb-2.5">
                      <Brain className="w-4 h-4 text-zinc-800" />
                      <span className="font-display font-bold text-xs sm:text-sm text-[#111111]">
                        Progression Toward AI Engineering
                      </span>
                      <span className="text-[10px] font-mono-code bg-white text-zinc-700 px-2 py-0.5 rounded border border-black/[0.08] ml-auto font-semibold">
                        EXPANDING
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {job.aiProgression.map((item, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs text-zinc-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="mt-5 pt-3.5 border-t border-black/[0.06] flex flex-wrap gap-1.5">
                    {["React 19", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma", "Python", "JWT Auth", "Git Flow"].map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-[#F8F8F9] text-zinc-700 border border-black/[0.06] hover:border-black/30 hover:bg-white transition-all">
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </InteractiveTilt>
            ))}
          </div>

          {/* Right Column: Strategic Milestones & Engineering Phases with Scroll-Driven Progress Line */}
          <div ref={rightColRef} className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#111111] flex items-center justify-center text-white shadow-xs">
                <Milestone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-[#111111] text-xl sm:text-2xl font-bold">Career Milestones</h3>
                <p className="text-zinc-500 text-[11px] uppercase tracking-wider font-semibold">Career Timeline</p>
              </div>
            </div>

            {/* Vertical Stepper Timeline with Scroll-linked progress */}
            <div ref={timelineTrackRef} className="relative pl-6 ml-3 sm:ml-4 space-y-4">
              {/* Timeline Background Track */}
              <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-black/[0.08]" />

              {/* Timeline Animated Fill Line */}
              <div
                ref={timelineProgressRef}
                className="absolute left-0 top-2 bottom-2 w-[2px] bg-[#111111] will-change-transform"
                style={{ transformOrigin: "top center" }}
              />

              {careerMilestones.map((milestone, mIdx) => (
                <div key={mIdx} className="milestone-item relative group">
                  {/* Node Dot */}
                  <div className="absolute -left-[30px] top-4 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#111111] group-hover:bg-[#111111] group-hover:scale-125 transition-all shadow-xs z-10" />

                  <div className="bg-white rounded-2xl p-4 sm:p-5 border border-black/[0.08] shadow-xs hover:border-black/30 hover:shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-200">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-mono-code font-bold text-zinc-500">
                        {milestone.period}
                      </span>
                      <span className="text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-full bg-[#F3F3F3] text-zinc-700 border border-black/[0.06]">
                        {milestone.badge}
                      </span>
                    </div>

                    <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
                      {milestone.phase}
                    </p>

                    <h4 className="font-display text-[#111111] font-bold text-sm sm:text-base mb-1.5">
                      {milestone.title}
                    </h4>

                    <p className="text-zinc-600 text-xs leading-relaxed font-normal">
                      {milestone.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CareerTrajectory;
