"use client";

import { useEffect, useRef } from "react";

const MouseGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    let raf = 0;
    const loop = () => {
      current.current.x += (target.current.x - current.current.x) * 0.14;
      current.current.y += (target.current.y - current.current.y) * 0.14;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${current.current.x - 180}px, ${current.current.y - 180}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[1] hidden md:block w-[360px] h-[360px] rounded-full opacity-30 blur-3xl"
      style={{ background: "radial-gradient(circle, rgba(27,131,255,0.45), rgba(255,107,0,0.2) 48%, transparent 70%)" }}
      aria-hidden
    />
  );
};

export default MouseGlow;
