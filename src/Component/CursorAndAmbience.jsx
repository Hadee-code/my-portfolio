import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export function CursorAndAmbience() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
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

    return () => {
      gsap.ticker.remove(updateRing);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isTouch]);

  // Subtle monochrome ambient aura
  const getAmbienceStyle = () => {
    return "from-black/[0.02] via-neutral-400/[0.012] to-transparent";
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
