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
    <section id="services" className="w-full bg-[#0A0F1D] px-6 md:px-10 lg:px-16 py-24 border-t border-slate-800/80 relative overflow-hidden bg-lines-pattern">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal direction="down" delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-3.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Services & Expertise</span>
            </div>
          </Reveal>
          
          <Reveal direction="clip-up" delay={200}>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Architectural & Engineering <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">Capabilities</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              Delivering full-cycle engineering from responsive frontend interfaces to scalable server architectures, secure authentication, and optimized database systems.
            </p>
          </Reveal>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const config = serviceConfig[service.id] || serviceConfig.fullstack;

            return (
              <Reveal key={service.id} direction="up" delay={100 * (index % 3 + 1)}>
                <div className="group h-full bg-[#0F172A]/75 backdrop-blur-xl rounded-3xl p-7 sm:p-8 border border-slate-800/90 hover:border-blue-500/60 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/15 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Subtle top card glow line */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${config.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div>
                    {/* Header Row: Icon & Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white shadow-lg ${config.glow} group-hover:scale-110 transition-transform duration-500`}>
                        {config.icon}
                      </div>

                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-colors">
                        {config.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300 flex items-center justify-between">
                      <span>{service.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100" />
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>

                    {/* Feature Bullets */}
                    <ul className="space-y-2.5 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Tech Pills */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {config.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#070A12] text-slate-300 border border-slate-800/80"
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
