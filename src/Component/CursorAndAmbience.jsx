import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function CursorAndAmbience() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const [activeSectionHue, setActiveSectionHue] = useState("hero");
  const [isTouch] = useState(() => 
    typeof window !== "undefined" && 
    (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window)
  );

  useEffect(() => {
    if (isTouch) return;

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(dot, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    // Smooth trailing ring loop using GSAP ticker
    const updateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      gsap.set(ring, {
        x: ringX,
        y: ringY,
      });
    };

    gsap.ticker.add(updateRing);
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Handle interactive hover states (buttons, links, inputs)
    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, input, textarea, select, [data-cursor='hover']");
      if (target) {
        gsap.to(ring, {
          scale: 1.8,
          borderColor: "rgba(17, 17, 17, 0.4)",
          backgroundColor: "rgba(17, 17, 17, 0.04)",
          duration: 0.25,
          ease: "power2.out",
        });
        gsap.to(dot, {
          scale: 0.5,
          duration: 0.2,
        });
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest("a, button, input, textarea, select, [data-cursor='hover']");
      if (target) {
        gsap.to(ring, {
          scale: 1,
          borderColor: "rgba(17, 17, 17, 0.18)",
          backgroundColor: "transparent",
          duration: 0.25,
          ease: "power2.out",
        });
        gsap.to(dot, {
          scale: 1,
          duration: 0.2,
        });
      }
    };

    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });

    // ScrollTrigger to detect active section and subtly alter ambient background atmosphere
    const sections = [
      { id: "home", hue: "hero" },
      { id: "profile", hue: "profile" },
      { id: "career", hue: "career" },
      { id: "showcase", hue: "showcase" },
      { id: "arsenal", hue: "arsenal" },
      { id: "education", hue: "education" },
      { id: "footer", hue: "footer" },
    ];

    const triggers = [];

    sections.forEach(({ id, hue }) => {
      const el = document.getElementById(id);
      if (el) {
        const st = ScrollTrigger.create({
          trigger: el,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => setActiveSectionHue(hue),
          onEnterBack: () => setActiveSectionHue(hue),
        });
        triggers.push(st);
      }
    });

    return () => {
      gsap.ticker.remove(updateRing);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      triggers.forEach((st) => st.kill());
    };
  }, [isTouch]);

  // Ambient aura styling based on active section
  const getAmbienceStyle = () => {
    switch (activeSectionHue) {
      case "profile":
        return "from-blue-500/[0.03] via-indigo-500/[0.02] to-transparent";
      case "career":
        return "from-emerald-500/[0.03] via-teal-500/[0.02] to-transparent";
      case "showcase":
        return "from-violet-500/[0.035] via-blue-500/[0.02] to-transparent";
      case "arsenal":
        return "from-amber-500/[0.025] via-orange-500/[0.015] to-transparent";
      case "education":
        return "from-cyan-500/[0.025] via-sky-500/[0.015] to-transparent";
      case "footer":
        return "from-neutral-900/[0.05] via-neutral-900/[0.03] to-transparent";
      case "hero":
      default:
        return "from-black/[0.02] via-neutral-400/[0.015] to-transparent";
    }
  };

  return (
    <>
      {/* Dynamic Ambient Background Aura */}
      <div
        className={`fixed inset-0 pointer-events-none -z-20 transition-all duration-1000 ease-out bg-radial ${getAmbienceStyle()}`}
        aria-hidden="true"
      />

      {/* Subtle Custom Interactive Cursor on Desktop */}
      {!isTouch && (
        <>
          <div
            ref={cursorDotRef}
            className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#111111] pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform hidden md:block"
            aria-hidden="true"
          />
          <div
            ref={cursorRingRef}
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-black/20 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 will-change-transform hidden md:block transition-colors duration-200"
            aria-hidden="true"
          />
        </>
      )}
    </>
  );
}

export default CursorAndAmbience;
