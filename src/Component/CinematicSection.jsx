import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * CinematicSection
 * Wraps page sections in a GSAP ScrollTrigger-driven 3D multi-plane parallax stage:
 * - Parallax Layer: Background moves at a slower rate (0.25x) while content moves at full speed.
 * - Directional 3D Entry & Exit: Smooth perspective tilt and scale-to-focus.
 * - Directional Radiant Horizon Beam: Illuminates the entry seam.
 * - GPU Accelerated & Memory-leak safe via gsap.context().
 */
export function CinematicSection({
  children,
  id,
  zIndex = 10,
  enableEnter = true,
  enableExit = true,
  enterDirection = "top-to-bottom", // "top-to-bottom" | "left-to-right" | "right-to-left" | "bottom-to-top"
  exitDirection = "top-to-bottom",
  className = "",
}) {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const glowRef = useRef(null);
  const curtainRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const container = containerRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;
    const glow = glowRef.current;
    const curtain = curtainRef.current;

    if (!container || !content || prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      // Background Parallax: slower subtle drift
      if (bg) {
        gsap.fromTo(
          bg,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      }

      // Section Entrance Animation
      if (enableEnter) {
        let fromVars = {
          opacity: 0.85,
          scale: 0.97,
          duration: 1,
          ease: "power3.out",
        };

        switch (enterDirection) {
          case "left-to-right":
            fromVars.x = -40;
            fromVars.rotateY = -2;
            break;
          case "right-to-left":
            fromVars.x = 40;
            fromVars.rotateY = 2;
            break;
          case "bottom-to-top":
            fromVars.y = 45;
            fromVars.rotateX = 2;
            break;
          case "top-to-bottom":
          default:
            fromVars.y = -30;
            fromVars.rotateX = -1.5;
            break;
        }

        gsap.fromTo(
          content,
          fromVars,
          {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 88%",
              end: "top 25%",
              scrub: 0.8,
            },
          }
        );

        // Radiant Beam pulse upon entry
        if (glow) {
          gsap.fromTo(
            glow,
            { opacity: 0 },
            {
              opacity: 0.9,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: container,
                start: "top 85%",
                end: "top 45%",
                scrub: 0.8,
                onLeave: () => gsap.to(glow, { opacity: 0, duration: 0.5 }),
              },
            }
          );
        }
      }

      // Section Exit Depth: smoothly sinks into depth as next section approaches
      if (enableExit) {
        gsap.to(content, {
          scale: 0.975,
          y: -25,
          opacity: 0.9,
          ease: "power2.in",
          scrollTrigger: {
            trigger: container,
            start: "bottom 55%",
            end: "bottom top",
            scrub: 0.8,
          },
        });

        if (curtain) {
          gsap.fromTo(
            curtain,
            { opacity: 0 },
            {
              opacity: 0.25,
              ease: "none",
              scrollTrigger: {
                trigger: container,
                start: "bottom 60%",
                end: "bottom top",
                scrub: 0.8,
              },
            }
          );
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, [enableEnter, enableExit, enterDirection, exitDirection]);

  const getGlowBeamClasses = () => {
    switch (enterDirection) {
      case "left-to-right":
        return "absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-neutral-400 to-transparent shadow-[0_0_12px_rgba(0,0,0,0.12)]";
      case "right-to-left":
        return "absolute top-0 bottom-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-neutral-400 to-transparent shadow-[0_0_12px_rgba(0,0,0,0.12)]";
      case "bottom-to-top":
        return "absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neutral-400 to-transparent shadow-[0_0_12px_rgba(0,0,0,0.12)]";
      case "top-to-bottom":
      default:
        return "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neutral-400 to-transparent shadow-[0_0_12px_rgba(0,0,0,0.12)]";
    }
  };

  return (
    <div
      ref={containerRef}
      id={id}
      className={`relative w-full overflow-x-clip ${className}`}
      style={{ zIndex }}
    >
      <div
        className="w-full relative overflow-hidden"
        style={{
          perspective: "1400px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* PARALLAX LAYER 1: Background Atmospheric Layer */}
        <div
          ref={bgRef}
          className="absolute inset-0 pointer-events-none -z-10 overflow-hidden"
          style={{ willChange: "transform", backfaceVisibility: "hidden" }}
        >
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-black/[0.015] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-black/[0.015] rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.02),transparent_70%)]" />
        </div>

        {/* PARALLAX LAYER 2: Foreground Content Layer */}
        <div
          ref={contentRef}
          className="w-full relative overflow-hidden will-change-transform"
          style={{ backfaceVisibility: "hidden" }}
        >
          {enableEnter && (
            <div
              ref={glowRef}
              className={`${getGlowBeamClasses()} pointer-events-none z-30 opacity-0`}
            />
          )}

          {children}

          {enableExit && (
            <div
              ref={curtainRef}
              className="absolute inset-0 bg-black/10 pointer-events-none z-40 opacity-0"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CinematicSection;
