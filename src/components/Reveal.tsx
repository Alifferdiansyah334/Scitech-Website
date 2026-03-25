"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: "up" | "zoom" | "right";
};

const Reveal = ({ children, className = "", delay = 0, duration = 680, variant = "up" }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasIntersectionObserver = "IntersectionObserver" in window;
    return prefersReducedMotion || !hasIntersectionObserver;
  });

  useEffect(() => {
    if (visible) return;

    const target = ref.current;
    if (!target) return;

    // Extra fallback for mobile/runtime quirks where intersection callback never fires.
    const safetyTimeout = window.setTimeout(() => {
      setVisible(true);
    }, 1800);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.clearTimeout(safetyTimeout);
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(target);
    return () => {
      window.clearTimeout(safetyTimeout);
      observer.disconnect();
    };
  }, [visible]);

  return (
    <div
      ref={ref}
      className={`reveal reveal--${variant} ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms`, "--reveal-duration": `${duration}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
};

export default Reveal;
