import React, { useEffect, useRef } from "react";

/**
 * CinematicSection
 * Wraps page sections in a 3D, multi-plane parallax stage with:
 * - Parallax Layers: Background moves at a slower rate (0.35x) while content moves faster (1.0x).
 * - Subtle Zoom & Blur-to-Sharp Transitions: Content emerges with subtle camera push-in and focus rack.
 * - Directional 3D Depth: Sequence rotates through top-to-bottom, left-to-right, right-to-left, bottom-to-top.
 * - Directional Radiant Beams: Illuminates opening seam during entry.
 * - Physics Damping: 60-120 FPS requestAnimationFrame interpolation.
 */
export function CinematicSection({
  children,
  id,
  zIndex = 10,
  enableEnter = true,
  enableExit = true,
  enterDirection = "top-to-bottom", // "top-to-bottom" | "left-to-right" | "right-to-left" | "bottom-to-top"
  exitDirection = "top-to-bottom",  // "top-to-bottom" | "left-to-right" | "right-to-left" | "bottom-to-top"
  className = "",
}) {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const curtainRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;
    const curtain = curtainRef.current;
    const glow = glowRef.current;
    if (!container || !content) return;

    // Accessibility: respects reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let targetExit = 0;
    let targetEnter = enableEnter ? 0 : 1;
    let currentExit = 0;
    let currentEnter = enableEnter ? 0 : 1;
    let animationFrameId = null;
    let isRunning = false;

    const updateTargets = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight || 800;
      const elementHeight = rect.height || windowHeight;

      // 1. Calculate Enter Progress (section entering from bottom of viewport)
      if (enableEnter) {
        if (rect.top >= windowHeight) {
          targetEnter = 0;
        } else if (rect.top <= 0) {
          targetEnter = 1;
        } else {
          const enterDistance = windowHeight * 0.9;
          targetEnter = Math.min(1, Math.max(0, (windowHeight - rect.top) / enterDistance));
        }
      } else {
        targetEnter = 1;
      }

      // 2. Calculate Exit Progress (section exiting top of viewport)
      if (enableExit) {
        const transitionDistance = Math.min(windowHeight * 0.85, elementHeight);

        if (elementHeight > windowHeight) {
          // Tall sections: exit begins when bottom approaches viewport
          if (rect.bottom >= windowHeight) {
            targetExit = 0;
          } else {
            targetExit = Math.min(1, Math.max(0, (windowHeight - rect.bottom) / transitionDistance));
          }
        } else {
          // Standard sections: exit begins when top passes 0
          if (rect.top >= 0) {
            targetExit = 0;
          } else {
            targetExit = Math.min(1, Math.max(0, -rect.top / transitionDistance));
          }
        }
      } else {
        targetExit = 0;
      }

      startLoop();
    };

    const render = () => {
      // Smooth linear interpolation (lerp) with refined physical damping
      const damping = 0.14;
      currentExit += (targetExit - currentExit) * damping;
      currentEnter += (targetEnter - currentEnter) * damping;

      const diffExit = Math.abs(targetExit - currentExit);
      const diffEnter = Math.abs(targetEnter - currentEnter);

      if (diffExit < 0.001) currentExit = targetExit;
      if (diffEnter < 0.001) currentEnter = targetEnter;

      // --- Content Layer Variables (Faster / Full Motion) ---
      let contentScale = 1;
      let contentTX = 0;
      let contentTY = 0;
      let contentTZ = 0;
      let rotateX = 0;
      let rotateY = 0;
      let contentBlur = 0;
      let contentBrightness = 1;
      let borderRadius = 0;

      // --- Background Parallax Layer Variables (Slower Motion) ---
      let bgTX = 0;
      let bgTY = 0;
      let bgTZ = 0;
      let bgScale = 1;

      // --- Overlay & Glow Beams ---
      let curtainOpacity = 0;
      let glowOpacity = 0;
      let transformOrigin = "center center";

      // 1. Exiting State (Closing into Depth)
      if (currentExit > 0.001) {
        // Content sinks back with subtle zoom-out and blur
        contentScale = 1 - currentExit * 0.08; // Subtle 1.0 -> 0.92
        contentTZ = -currentExit * 140;
        contentBlur = currentExit * 6; // Refined blur
        contentBrightness = 1 - currentExit * 0.42;
        borderRadius = currentExit * 30;
        curtainOpacity = currentExit * 0.65;

        // Background layer stays deeper and moves slower
        bgScale = 1 - currentExit * 0.04;
        bgTZ = -currentExit * 70;

        switch (exitDirection) {
          case "left-to-right":
            transformOrigin = "right center";
            contentTX = currentExit * 65;
            rotateY = currentExit * 3.5;
            bgTX = currentExit * 22; // Background moves at ~35% speed
            break;
          case "right-to-left":
            transformOrigin = "left center";
            contentTX = -currentExit * 65;
            rotateY = -currentExit * 3.5;
            bgTX = -currentExit * 22;
            break;
          case "bottom-to-top":
            transformOrigin = "center top";
            contentTY = -currentExit * 55;
            rotateX = -currentExit * 3;
            bgTY = -currentExit * 18;
            break;
          case "top-to-bottom":
          default:
            transformOrigin = "center bottom";
            contentTY = currentExit * 70;
            rotateX = currentExit * 3;
            bgTY = currentExit * 24;
            break;
        }
      }
      // 2. Entering State (Opening from Assigned Direction with Parallax & Blur-to-Sharp)
      else if (enableEnter && currentEnter < 0.999) {
        const invEnter = 1 - currentEnter;

        // Subtle Zoom: scales from 0.96 in to 1.0
        contentScale = 0.96 + currentEnter * 0.04;

        // Blur-to-Sharp: resolves from 5px down to 0px
        contentBlur = invEnter * 5.2;

        // Brightness elevation
        contentBrightness = 0.8 + currentEnter * 0.2;

        // Radiant glow peaks mid-transition
        glowOpacity = Math.sin(currentEnter * Math.PI) * 0.9;

        // Background subtle counter-zoom
        bgScale = 1.04 - currentEnter * 0.04;

        switch (enterDirection) {
          case "left-to-right":
            transformOrigin = "left center";
            contentTX = -invEnter * 75; // Content moves 75px
            rotateY = -invEnter * 4.5;  // 3D vault swing
            bgTX = -invEnter * 24;      // Background moves at slower speed (24px)
            break;
          case "right-to-left":
            transformOrigin = "right center";
            contentTX = invEnter * 75;
            rotateY = invEnter * 4.5;
            bgTX = invEnter * 24;
            break;
          case "bottom-to-top":
            transformOrigin = "center bottom";
            contentTY = invEnter * 65;
            rotateX = invEnter * 3.5;
            bgTY = invEnter * 20;
            break;
          case "top-to-bottom":
          default:
            transformOrigin = "center top";
            contentTY = -invEnter * 65;
            rotateX = -invEnter * 3.5;
            bgTY = -invEnter * 20;
            break;
        }
      }

      // Apply transforms to Foreground Content Layer
      content.style.transformOrigin = transformOrigin;
      content.style.transform = `perspective(1400px) scale(${contentScale.toFixed(4)}) translate3d(${contentTX.toFixed(1)}px, ${contentTY.toFixed(1)}px, ${contentTZ.toFixed(1)}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
      content.style.filter = contentBlur > 0.08 || contentBrightness < 0.99
        ? `blur(${contentBlur.toFixed(1)}px) brightness(${contentBrightness.toFixed(2)})`
        : "none";
      content.style.borderRadius = borderRadius > 0.5 ? `${borderRadius.toFixed(1)}px` : "0px";

      // Apply slower Parallax transforms to Background Layer
      if (bg) {
        bg.style.transform = `translate3d(${bgTX.toFixed(1)}px, ${bgTY.toFixed(1)}px, ${bgTZ.toFixed(1)}px) scale(${bgScale.toFixed(4)})`;
      }

      if (curtain) {
        curtain.style.opacity = curtainOpacity.toFixed(3);
      }

      if (glow) {
        glow.style.opacity = glowOpacity.toFixed(3);
      }

      if (diffExit >= 0.001 || diffEnter >= 0.001) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        isRunning = false;
      }
    };

    const startLoop = () => {
      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const onScroll = () => updateTargets();
    const onResize = () => updateTargets();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    updateTargets();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [enableEnter, enableExit, enterDirection, exitDirection]);

  // Determine Beam Styling based on enterDirection
  const getGlowBeamClasses = () => {
    switch (enterDirection) {
      case "left-to-right":
        return "absolute top-0 bottom-0 left-0 w-[2.5px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_25px_rgba(34,211,238,0.9)]";
      case "right-to-left":
        return "absolute top-0 bottom-0 right-0 w-[2.5px] bg-gradient-to-b from-transparent via-indigo-500 to-transparent shadow-[0_0_25px_rgba(99,102,241,0.9)]";
      case "bottom-to-top":
        return "absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_25px_rgba(59,130,246,0.9)]";
      case "top-to-bottom":
      default:
        return "absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_25px_rgba(59,130,246,0.9)]";
    }
  };

  return (
    <div
      ref={containerRef}
      id={id}
      className={`relative w-full overflow-x-clip ${className}`}
      style={{
        zIndex,
      }}
    >
      {/* 3D Hardware Accelerated Stage */}
      <div
        className="w-full relative overflow-hidden"
        style={{
          perspective: "1400px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* PARALLAX LAYER 1: Background Atmospheric Layer (moves at slower speed) */}
        <div
          ref={bgRef}
          className="absolute inset-0 pointer-events-none -z-10 overflow-hidden"
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Subtle Ambient Radial Halos that shift with parallax */}
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-[550px] h-[550px] bg-indigo-600/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.03),transparent_70%)]" />
        </div>

        {/* PARALLAX LAYER 2: Foreground Content Layer (moves at full speed with 3D tilt & zoom) */}
        <div
          ref={contentRef}
          className="w-full relative overflow-hidden transition-shadow duration-300"
          style={{
            willChange: "transform, filter, border-radius",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Directional Radiant Horizon Beam */}
          {enableEnter && (
            <div
              ref={glowRef}
              className={`${getGlowBeamClasses()} pointer-events-none z-30 opacity-0 transition-opacity`}
            />
          )}

          {/* Section Main Content */}
          {children}

          {/* Closing Dark Cinematic Vignette Curtain */}
          {enableExit && (
            <div
              ref={curtainRef}
              className="absolute inset-0 bg-gradient-to-b from-[#0A0E17]/50 via-[#0A0E17]/75 to-[#0A0E17] pointer-events-none z-40 opacity-0 transition-opacity"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CinematicSection;
