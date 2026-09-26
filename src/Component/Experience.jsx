import React from "react";
import profileData from "../data/profileData";
import Reveal from "./Reveal";

function Experience() {
  const { experience, education } = profileData;

  return (
    <section id="experience" className="w-full bg-[#0D121F] px-6 md:px-10 lg:px-16 py-24 border-t border-slate-800/80 relative">
      <div className="w-full max-w-[1440px] mx-auto">
        
        {/* Section Heading */}
        <Reveal direction="up" delay={100}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-3.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Journey</span>
            </div>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Experience & <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">Education</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
              Hands-on engineering contributions in fast-moving dev environments paired with formal computer science education.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Work Experience Column */}
          <Reveal direction="left" delay={200}>
            <div>
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 shadow-sm">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-2xl font-bold">Work Experience</h3>
                  <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Professional Engineering Roles</p>
                </div>
              </div>

              <div className="relative border-l-2 border-blue-500/30 pl-6 sm:pl-8 ml-4 space-y-8">
                {experience.map((job, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0A0E17] border-2 border-blue-500 group-hover:bg-blue-500 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.8)] transition-all" />

                    <div className="bg-[#131B2E] rounded-2xl p-6 sm:p-7 border border-slate-800/90 hover:border-blue-500/50 transition-all duration-300 shadow-xl">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {job.period}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">{job.location}</span>
                      </div>

                      <h4 className="text-white text-xl font-bold mt-1.5">{job.role}</h4>
                      <p className="text-blue-400 text-sm font-semibold mb-3">{job.company}</p>
                      <p className="text-slate-300 text-sm leading-relaxed mb-5">{job.description}</p>

                      <div className="space-y-2.5 pt-3 border-t border-slate-800">
                        {job.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </div>
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
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 shadow-sm">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-2xl font-bold">Education</h3>
                  <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Academic Foundation</p>
                </div>
              </div>

              <div className="relative border-l-2 border-blue-500/30 pl-6 sm:pl-8 ml-4 space-y-8">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0A0E17] border-2 border-blue-500 group-hover:bg-blue-500 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.8)] transition-all" />

                    <div className="bg-[#131B2E] rounded-2xl p-6 sm:p-7 border border-slate-800/90 hover:border-blue-500/50 transition-all duration-300 shadow-xl">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {edu.period}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">{edu.location}</span>
                      </div>

                      <h4 className="text-white text-xl font-bold mt-1.5">{edu.degree}</h4>
                      <p className="text-blue-400 text-sm font-semibold mb-3">{edu.institution}</p>
                      <p className="text-slate-300 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                ))}

                {/* Core Strengths Card */}
                <div className="relative group">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0A0E17] border-2 border-slate-700 group-hover:border-blue-500 transition-colors" />
                  <div className="bg-[#131B2E] rounded-2xl p-6 sm:p-7 border border-slate-800/90 shadow-xl">
                    <h4 className="text-white text-lg font-bold mb-2">Core Foundation</h4>
                    <p className="text-slate-400 text-xs mb-4 font-semibold">Key Academic & Theoretical Competencies</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Data Structures & Algorithms",
                        "Object-Oriented Programming (OOP)",
                        "Database Management Systems",
                        "REST API Engineering",
                        "Git Version Control",
                        "Problem Solving & Debugging",
                      ].map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1.5 rounded-lg bg-slate-900 text-slate-200 border border-slate-800 text-xs font-medium"
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
