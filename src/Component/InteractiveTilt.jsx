import React, { useRef, useState, useEffect } from "react";

export function InteractiveTilt({
  children,
  className = "",
  maxTilt = 6,
  scale = 1.015,
  glare = true,
  disabled = false,
}) {
  const containerRef = useRef(null);
  const [style, setStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
  });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(() => 
    typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => setPrefersReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e) => {
    if (disabled || prefersReduced || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotX = ((0.5 - y) * (maxTilt * 2)).toFixed(2);
    const rotY = ((x - 0.5) * (maxTilt * 2)).toFixed(2);

    setStyle({
      transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(${scale}, ${scale}, 1)`,
      transition: "transform 0.12s ease-out",
    });

    if (glare) {
      setGlarePosition({
        x: (x * 100).toFixed(1),
        y: (y * 100).toFixed(1),
        opacity: 0.12,
      });
    }
  };

  const handleMouseEnter = () => {
    if (disabled || prefersReduced) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (disabled || prefersReduced) return;
    setIsHovered(false);
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
    });
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative will-change-transform ${className}`}
      style={prefersReduced || disabled ? {} : style}
    >
      {children}
      {glare && !prefersReduced && !disabled && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden transition-opacity duration-300 z-30"
          style={{ opacity: isHovered ? glarePosition.opacity : 0 }}
        >
          <div
            className="w-[200%] h-[200%] -top-1/2 -left-1/2 absolute"
            style={{
              background: `radial-gradient(circle 320px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.4), transparent 60%)`,
            }}
          />
        </div>
      )}
    </div>
  );
}

export default InteractiveTilt;
