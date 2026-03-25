"use client";

import { useEffect, useRef, useState } from "react";

type StatItem = {
  label: string;
  target: number;
  suffix?: string;
};

const stats: StatItem[] = [
  { label: "Siswa Dibina", target: 500, suffix: "+" },
  { label: "Sekolah Mitra", target: 15, suffix: "+" },
  { label: "Piala & Medali", target: 80, suffix: "+" },
  { label: "Tahun Pengalaman", target: 3 },
];

const Stats = () => {
  const [values, setValues] = useState<number[]>(stats.map(() => 0));
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const startAt = performance.now();
    const duration = 1400;

    let frame = 0;
    const animate = (now: number) => {
      const progress = Math.min((now - startAt) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;

      setValues(stats.map((stat) => Math.round(stat.target * eased)));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started]);

  return (
    <section ref={sectionRef} className="section-shell -mt-8 md:-mt-12 relative z-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto bg-[linear-gradient(120deg,#081733_0%,#0c2f68_55%,#1364cf_100%)] rounded-3xl p-5 md:p-7 border border-blue-300/25 shadow-[0_28px_60px_rgba(4,25,69,0.35)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white/10 border border-white/20 p-4 md:p-5 text-center backdrop-blur appear-up hover:scale-[1.02] transition"
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <div className="text-3xl md:text-4xl font-heading font-extrabold text-scitech-orange mb-1">
                {values[idx]}
                {stat.suffix ?? ""}
              </div>
              <div className="text-xs md:text-sm text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
