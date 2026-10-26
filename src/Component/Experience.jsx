import React from "react";
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Cpu, 
  Building2 
} from "lucide-react";
import profileData from "../data/profileData";
import Reveal from "./Reveal";

function Experience() {
  const { experience, education } = profileData;

  const foundationTopics = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "REST API Engineering",
    "Distributed Git Version Control",
    "Agile Development & Problem Solving",
    "Software Architecture Patterns",
    "Web Security & Authentication",
  ];

  return (
    <section id="experience" className="w-full bg-[#F3F3F3] text-[#111111] px-6 md:px-12 lg:px-16 py-24 border-t border-black/[0.06] relative overflow-hidden bg-lines-pattern">
      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal direction="down" delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] mb-3.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#111111]" />
              <span className="text-[#111111] text-xs font-bold uppercase tracking-wider">Career Trajectory</span>
            </div>
          </Reveal>
          
          <Reveal direction="clip-up" delay={200}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
              Experience & <span className="font-light italic text-zinc-500">Education</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <p className="text-zinc-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
              Hands-on engineering contributions in fast-moving dev environments paired with formal computer science education.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          
          {/* Work Experience Column */}
          <Reveal direction="left" delay={200}>
            <div>
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-11 h-11 rounded-2xl bg-[#111111] flex items-center justify-center text-white shadow-sm">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-[#111111] text-2xl font-bold">Work Experience</h3>
                  <p className="text-zinc-500 text-xs uppercase tracking-wider font-semibold">Professional Engineering Roles</p>
                </div>
              </div>

              <div className="relative border-l-2 border-black/[0.12] pl-6 sm:pl-8 ml-4 space-y-8">
                {experience.map((job, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline Node with Hover Ring */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#111111] group-hover:bg-[#111111] group-hover:scale-125 transition-all duration-300 shadow-sm" />

                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.08] hover:border-black/30 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 ease-out shadow-sm">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
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

                      <h4 className="font-display text-[#111111] text-xl sm:text-2xl font-bold mt-2">{job.role}</h4>
                      
                      <div className="flex items-center gap-2 text-zinc-800 text-sm font-semibold mb-4">
                        <Building2 className="w-4 h-4 text-zinc-500" />
                        <span>{job.company}</span>
                      </div>

                      <p className="text-zinc-600 text-sm leading-relaxed mb-6 font-normal">
                        {job.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-3 pt-4 border-t border-black/[0.06]">
                        {job.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                            <CheckCircle2 className="w-4 h-4 text-zinc-900 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="mt-6 pt-4 border-t border-black/[0.06] flex flex-wrap gap-1.5">
                        {["MERN Stack", "React 19", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "JWT", "Git"].map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#F8F8F9] text-zinc-700 border border-black/[0.06]">
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Education Column */}
          <Reveal direction="right" delay={300}>
            <div>
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-11 h-11 rounded-2xl bg-[#111111] flex items-center justify-center text-white shadow-sm">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-[#111111] text-2xl font-bold">Education</h3>
                  <p className="text-zinc-500 text-xs uppercase tracking-wider font-semibold">Academic Foundation</p>
                </div>
              </div>

              <div className="relative border-l-2 border-black/[0.12] pl-6 sm:pl-8 ml-4 space-y-8">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#111111] group-hover:bg-[#111111] group-hover:scale-125 transition-all duration-300 shadow-sm" />

                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.08] hover:border-black/30 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 ease-out shadow-sm">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F3F3F3] text-zinc-700 border border-black/[0.06] flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                          <span>{edu.period}</span>
                        </span>
                        <span className="text-xs text-zinc-500 font-medium flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                          <span>{edu.location}</span>
                        </span>
                      </div>

                      <h4 className="font-display text-[#111111] text-xl sm:text-2xl font-bold mt-2">{edu.degree}</h4>
                      <p className="text-zinc-800 text-sm font-semibold mb-4">{edu.institution}</p>
                      <p className="text-zinc-600 text-sm leading-relaxed font-normal">{edu.description}</p>
                    </div>
                  </div>
                ))}

                {/* Core Theoretical Foundations Card */}
                <div className="relative group">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-black/[0.3] group-hover:border-black transition-colors" />
                  
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.08] shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Cpu className="w-4 h-4 text-zinc-700" />
                      <h4 className="font-display text-[#111111] text-lg font-bold">Core Academic Foundations</h4>
                    </div>
                    <p className="text-zinc-500 text-xs mb-5 font-semibold">
                      Key Theoretical Disciplines & CS Fundamentals
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {foundationTopics.map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1.5 rounded-full bg-[#F8F8F9] text-zinc-700 border border-black/[0.06] text-xs font-medium hover:border-black/30 hover:bg-white hover:text-black transition-colors shadow-xs"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}

export default Experience;
