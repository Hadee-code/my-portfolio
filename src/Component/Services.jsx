import React from "react";
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";
import profileData from "../data/profileData";
import Reveal from "./Reveal";

const serviceConfig = {
  fullstack: {
    icon: <Code2 className="w-6 h-6" />,
    gradient: "from-blue-600 to-indigo-600",
    glow: "shadow-blue-500/20",
    badge: "MERN & Next.js",
    technologies: ["React.js", "Next.js", "Node.js", "Express", "MongoDB"],
  },
  frontend: {
    icon: <Layout className="w-6 h-6" />,
    gradient: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/20",
    badge: "UI / UX Engineering",
    technologies: ["React 19", "Tailwind CSS", "JavaScript ES6+", "HTML5/CSS3"],
  },
  backend: {
    icon: <Server className="w-6 h-6" />,
    gradient: "from-indigo-600 to-violet-600",
    glow: "shadow-indigo-500/20",
    badge: "Microservices & APIs",
    technologies: ["Node.js", "Express.js", "REST APIs", "Postman", "Python"],
  },
  database: {
    icon: <Database className="w-6 h-6" />,
    gradient: "from-emerald-500 to-teal-600",
    glow: "shadow-emerald-500/20",
    badge: "SQL & NoSQL",
    technologies: ["MongoDB", "PostgreSQL", "Prisma ORM", "Mongoose"],
  },
  auth: {
    icon: <ShieldCheck className="w-6 h-6" />,
    gradient: "from-amber-500 to-orange-600",
    glow: "shadow-amber-500/20",
    badge: "Enterprise Security",
    technologies: ["JWT", "RBAC", "Bcrypt", "Route Guards", "Secure Cookies"],
  },
  optimization: {
    icon: <Cpu className="w-6 h-6" />,
    gradient: "from-rose-500 to-purple-600",
    glow: "shadow-rose-500/20",
    badge: "Code Quality & Tuning",
    technologies: ["Performance Tuning", "Git / GitHub", "Debugging", "Clean Arch"],
  },
};

function Services() {
  const { services } = profileData;

  return (
    <section id="services" className="w-full bg-[#F3F3F3] text-[#111111] px-6 md:px-12 lg:px-16 py-24 border-t border-black/[0.06] relative overflow-hidden bg-lines-pattern">
      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal direction="down" delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] mb-3.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#111111]" />
              <span className="text-[#111111] text-xs font-bold uppercase tracking-wider">Services & Expertise</span>
            </div>
          </Reveal>
          
          <Reveal direction="clip-up" delay={200}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
              Architectural & Engineering <span className="font-light italic text-zinc-500">Capabilities</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <p className="text-zinc-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
              Delivering full-cycle engineering from responsive frontend interfaces to scalable server architectures, secure authentication, and optimized database systems.
            </p>
          </Reveal>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const config = serviceConfig[service.id] || serviceConfig.fullstack;
            const indexNumber = `0${index + 1}`;

            return (
              <Reveal key={service.id} direction="up" delay={100 * (index % 3 + 1)}>
                <div className="group h-full bg-white rounded-3xl p-7 sm:p-8 border border-black/[0.08] hover:border-black/30 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] flex flex-col justify-between relative overflow-hidden shadow-sm">
                  
                  <div>
                    {/* Header Row: Icon, Index Number & Badge */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/[0.06]">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-[#111111] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-300">
                          {config.icon}
                        </div>
                        <span className="font-mono-code text-xs font-bold text-zinc-400">
                          /{indexNumber}
                        </span>
                      </div>

                      <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F3F3F3] text-zinc-700 border border-black/[0.06]">
                        {config.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-[#111111] text-xl font-bold mb-3 group-hover:text-black transition-colors duration-200 flex items-center justify-between">
                      <span>{service.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100" />
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-600 text-sm leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>

                    {/* Feature Bullets */}
                    <ul className="space-y-2.5 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                          <CheckCircle2 className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Tech Pills */}
                  <div className="pt-4 border-t border-black/[0.06]">
                    <div className="flex flex-wrap gap-1.5">
                      {config.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#F3F3F3] text-zinc-700 border border-black/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Services;
