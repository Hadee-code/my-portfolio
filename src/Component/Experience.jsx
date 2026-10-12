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
    <section id="experience" className="w-full bg-[#0A0F1D] px-6 md:px-10 lg:px-16 py-24 border-t border-slate-800/80 relative overflow-hidden bg-lines-pattern">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal direction="down" delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-3.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Career Trajectory</span>
            </div>
          </Reveal>
          
          <Reveal direction="clip-up" delay={200}>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Experience & <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">Education</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed font-normal">
              Hands-on engineering contributions in fast-moving dev environments paired with formal computer science education.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          
          {/* Work Experience Column */}
          <Reveal direction="left" delay={200}>
            <div>
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white text-2xl font-black">Work Experience</h3>
                  <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Professional Engineering Roles</p>
                </div>
              </div>

              <div className="relative border-l-2 border-blue-500/30 pl-6 sm:pl-8 ml-4 space-y-8">
                {experience.map((job, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline Node with Pulsing Ring */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#070A12] border-2 border-blue-500 group-hover:bg-blue-500 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.9)] transition-all duration-300" />

                    <div className="bg-[#0F172A]/75 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-800/90 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-500 ease-out shadow-xl">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{job.period}</span>
                          </span>
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>{job.type}</span>
                          </span>
                        </div>

                        <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-rose-400" />
                          <span>{job.location}</span>
                        </span>
                      </div>

                      <h4 className="text-white text-xl sm:text-2xl font-black mt-2">{job.role}</h4>
                      
                      <div className="flex items-center gap-2 text-blue-400 text-sm font-bold mb-4">
                        <Building2 className="w-4 h-4 text-blue-400" />
                        <span>{job.company}</span>
                      </div>

                      <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                        {job.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-3 pt-4 border-t border-slate-800">
                        {job.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-1.5">
                        {["MERN Stack", "React 19", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "JWT", "Git"].map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#070A12] text-slate-300 border border-slate-800">
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
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white text-2xl font-black">Education</h3>
                  <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Academic Foundation</p>
                </div>
              </div>

              <div className="relative border-l-2 border-blue-500/30 pl-6 sm:pl-8 ml-4 space-y-8">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#070A12] border-2 border-blue-500 group-hover:bg-blue-500 group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.8)] transition-all duration-300" />

                    <div className="bg-[#0F172A]/75 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-800/90 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-500 ease-out shadow-xl">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-bold px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{edu.period}</span>
                        </span>
                        <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-rose-400" />
                          <span>{edu.location}</span>
                        </span>
                      </div>

                      <h4 className="text-white text-xl sm:text-2xl font-black mt-2">{edu.degree}</h4>
                      <p className="text-blue-400 text-sm font-bold mb-4">{edu.institution}</p>
                      <p className="text-slate-300 text-sm leading-relaxed font-normal">{edu.description}</p>
                    </div>
                  </div>
                ))}

                {/* Core Theoretical Foundations Card */}
                <div className="relative group">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#070A12] border-2 border-slate-700 group-hover:border-blue-500 transition-colors" />
                  
                  <div className="bg-[#0F172A]/75 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-800/90 shadow-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      <h4 className="text-white text-lg font-bold">Core Academic Foundations</h4>
                    </div>
                    <p className="text-slate-400 text-xs mb-5 font-semibold">
                      Key Theoretical Disciplines & CS Fundamentals
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {foundationTopics.map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1.5 rounded-xl bg-[#070A12] text-slate-200 border border-slate-800 text-xs font-medium hover:border-blue-500/40 hover:text-white transition-colors"
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
