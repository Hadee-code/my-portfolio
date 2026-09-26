import React from "react";

function Navbar() {
  return (
    <nav className="w-full h-[60px] bg-[#1E1E1E] flex items-center">
      <div className="w-full max-w-[1440px] mx-auto flex items-center pl-16 pr-10">

        {/* Logo Section */}
        <div className="w-[180px] flex items-center justify-start">
          <h1 className="text-[#FF7600] text-xl font-bold">Hadee</h1>
        </div>

        {/* Navigation Section */}
        <div className="flex-1 flex items-center justify-center gap-11">
          <a href="#home" className="text-[#FF7600] text-sm font-medium">
            Home
          </a>

          <a href="#services" className="text-gray-500 text-sm font-medium hover:text-[#FF7600] transition">
            Services
          </a>

          <a href="#about" className="text-gray-500 text-sm font-medium hover:text-[#FF7600] transition">
            About Me
          </a>

          <a href="#portfolio" className="text-gray-500 text-sm font-medium hover:text-[#FF7600] transition">
            Portfolio
          </a>

          <a href="#contact" className="text-gray-500 text-sm font-medium hover:text-[#FF7600] transition">
            Contact Me
          </a>
        </div>

        {/* Hire Me Section */}
        <div className="w-[180px] flex justify-end">
          
          <a  href="#contact"
            className="bg-[#FF7600] text-[#1E1E1E] px-5 py-1 rounded-md text-sm font-semibold hover:bg-[#e66a00] transition"
          >
            Hire Me
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;