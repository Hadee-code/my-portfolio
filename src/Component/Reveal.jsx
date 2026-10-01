import React, { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up", // "up" | "down" | "left" | "right" | "fade" | "scale" | "clip-up" | "clip-left"
  duration = 750,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const isClip = direction === "clip-up" || direction === "clip-left";

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale(1)";
    switch (direction) {
      case "clip-up":
        return "translate3d(0, 100%, 0)";
      case "clip-left":
        return "translate3d(-100%, 0, 0)";
      case "up":
        return "translate3d(0, 24px, 0)";
      case "down":
        return "translate3d(0, -24px, 0)";
      case "left":
        return "translate3d(24px, 0, 0)";
      case "right":
        return "translate3d(-24px, 0, 0)";
      case "scale":
        return "scale(0.95)";
      case "fade":
      default:
        return "none";
    }
  };

  const getClipPath = () => {
    if (!isClip) return "none";
    if (direction === "clip-up") {
      return isVisible
        ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        : "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)";
    }
    if (direction === "clip-left") {
      return isVisible
        ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        : "polygon(0 0, 0 0, 0 100%, 0 100%)";
    }
    return "none";
  };

  return (
    <div
      ref={ref}
      className={`${className} ${isClip ? "overflow-hidden" : ""}`}
      style={{
        opacity: isVisible ? 1 : isClip ? 0.3 : 0,
        transform: getTransform(),
        clipPath: getClipPath(),
        filter: isVisible ? "blur(0px)" : isClip ? "none" : "blur(4px)",
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, clip-path ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "opacity, transform, clip-path, filter",
      }}
    >
      {children}
    </div>
  );
}

export default Reveal;
