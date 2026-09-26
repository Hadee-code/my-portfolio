import React from "react";
import profileData from "../data/profileData";

const socialIcons = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zM8.5 8h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.5V23h-4V8z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.9-.38 2.88-.39.98.01 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55C20.71 21.38 24 17.07 24 12c0-6.27-5.23-11.5-12-11.5z" />
    </svg>
  ),
};

function Hero() {
  const { greeting, name, role, profileImage, cvFile, socials, stats } = profileData;

  return (
    <section className="w-full bg-[#1E1E1E] px-10">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between py-16 gap-10">

        <div className="flex-1 max-w-[560px]">
          <p className="text-gray-400 text-base mb-2">{greeting}</p>
          <h2 className="text-white text-2xl font-semibold mb-3">{name}</h2>
          <h1 className="text-[#FF7600] text-5xl font-extrabold leading-tight mb-6">
            {role}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            {socials.map((s) => {
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 text-gray-300 hover:text-[#FF7600] hover:border-[#FF7600] transition"
                >
                  {socialIcons[s.name]}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-4 mb-10">
            <a
              href="#contact"
              className="bg-[#FF7600] text-[#1E1E1E] px-8 py-3 rounded-md text-sm font-semibold hover:bg-[#e66a00] transition"
            >
              Hire Me
            </a>
            <a
              href={cvFile}
              download
              className="border border-gray-500 text-white px-8 py-3 rounded-md text-sm font-semibold hover:border-[#FF7600] hover:text-[#FF7600] transition"
            >
              Download CV
            </a>
          </div>

          <div className="bg-[#2A2A2A] rounded-xl p-6 flex items-center gap-6 w-fit">
            {stats.map((stat, i) => {
              return (
                <React.Fragment key={stat.label}>
                  {i !== 0 && <div className="w-px h-10 bg-gray-600" />}
                  <div>
                    <p className="text-[#FF7600] text-2xl font-bold">{stat.value}</p>
                    <p className="text-white text-sm">{stat.label}</p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="flex-1 flex justify-center items-end relative w-[420px] h-[480px] overflow-hidden">
          <div className="absolute bottom-0 w-[380px] h-[380px] rounded-full bg-gradient-to-b from-[#FF7600]/20 to-[#2A2A2A]" />
          <img
            src={profileImage}
            alt={name}
            className="relative z-10 w-[340px] h-[460px] object-cover object-top scale-[1.3] origin-bottom rounded-t-[170px]"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;