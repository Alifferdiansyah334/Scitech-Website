"use client";

import { useRef, type ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
};

const TiltCard = ({ children, className = "", maxTilt = 10 }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;

    const rotateY = (px - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - py) * maxTilt * 2;

    inner.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    el.style.setProperty("--tilt-glow-x", `${(px * 100).toFixed(1)}%`);
    el.style.setProperty("--tilt-glow-y", `${(py * 100).toFixed(1)}%`);
  };

  const resetTilt = () => {
    const el = ref.current;
    const inner = innerRef.current;
    if (!el || !inner) return;
    inner.style.transform = "rotateX(0deg) rotateY(0deg)";
    el.style.setProperty("--tilt-glow-x", "50%");
    el.style.setProperty("--tilt-glow-y", "50%");
  };

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`.trim()}
      onPointerMove={handleMove}
      onPointerLeave={resetTilt}
      onPointerEnter={handleMove}
    >
      <div ref={innerRef} className="tilt-card-inner">
        {children}
      </div>
      <div className="tilt-card-glow" aria-hidden />
    </div>
  );
};

export default TiltCard;
