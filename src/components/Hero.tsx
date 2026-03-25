"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Sparkles, Trophy, Cpu, Rocket } from "lucide-react";

const TYPE_WORDS = ["Teknologi", "Robotik", "Coding", "Inovasi"];

const Hero = () => {
  const [pointer, setPointer] = useState({ x: 50, y: 45 });
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState(TYPE_WORDS[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = TYPE_WORDS[wordIndex];
    const doneTyping = displayText === currentWord && !isDeleting;
    const doneDeleting = displayText.length === 0 && isDeleting;

    const timeout = setTimeout(
      () => {
        if (doneTyping) {
          setIsDeleting(true);
          return;
        }
        if (doneDeleting) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % TYPE_WORDS.length);
          return;
        }

        setDisplayText((prev) =>
          isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1),
        );
      },
      doneTyping ? 1000 : isDeleting ? 60 : 110,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  const glowStyle = useMemo(
    () => ({
      background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(255,255,255,0.24), transparent 40%)`,
    }),
    [pointer.x, pointer.y],
  );

  return (
    <section
      id="home"
      className="hero-bg section-shell relative overflow-hidden px-4 pt-24 md:pt-20 pb-10 md:pb-0"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setPointer({ x, y });
      }}
    >
      <div className="absolute inset-0 grid-pattern opacity-35" />
      <div className="absolute inset-0 transition-opacity duration-500" style={glowStyle} />

      <div className="max-w-7xl mx-auto relative z-10 min-h-0 md:min-h-[calc(100svh-80px)] flex items-start md:items-center py-8 md:py-0">
        <div className="w-full text-center text-white">
          <span className="appear-up inline-flex items-center gap-2 bg-white/15 border border-white/30 text-[11px] md:text-xs font-bold px-3.5 md:px-4 py-1.5 md:py-2 rounded-full mb-4 md:mb-5 tracking-wide uppercase backdrop-blur-sm">
            <Sparkles size={14} /> Ciptakan Inovator Masa Depan
          </span>

          <h1 className="appear-up font-heading text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] md:leading-[1.05] drop-shadow-lg">
            Siapkan Anak Anda Menjadi
            <br />
            Juara{" "}
            <span className="text-orange-200">
              {displayText}
              <span className="type-caret">|</span>
            </span>
          </h1>

          <p className="appear-up text-base md:text-xl mt-4 md:mt-5 mb-6 md:mb-7 text-blue-50 max-w-3xl mx-auto px-1" style={{ animationDelay: "90ms" }}>
            Scitech Academy menghadirkan kurikulum Robotics, Coding, dan STEM terbaik. Belajar seru, hasil nyata, dan berprestasi.
          </p>

          <div className="appear-up flex flex-col sm:flex-row gap-3 md:gap-4 justify-center" style={{ animationDelay: "150ms" }}>
            <a
              href="https://wa.me/6287877955526?text=Halo,%20saya%20mau%20daftar%20trial%20class"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lift shine bg-scitech-orange hover:bg-orange-600 text-white text-base md:text-lg font-bold px-6 md:px-8 py-3.5 md:py-4 rounded-full shadow-xl shadow-orange-700/35 inline-flex items-center justify-center w-full sm:w-auto"
            >
              Daftar Trial Gratis
            </a>
            <a
              href="#sekolah"
              className="btn-lift bg-white/12 border-2 border-white/85 hover:bg-white hover:text-scitech-blue text-white text-base md:text-lg font-bold px-6 md:px-8 py-3.5 md:py-4 rounded-full transition inline-flex items-center justify-center w-full sm:w-auto"
            >
              Program Sekolah <ArrowRight className="ml-2" />
            </a>
          </div>

          <div className="appear-up mt-6 md:mt-8 flex flex-wrap gap-2 justify-center" style={{ animationDelay: "220ms" }}>
            <span className="text-xs md:text-sm bg-white/15 border border-white/30 px-3 py-1 rounded-full">Robotics</span>
            <span className="text-xs md:text-sm bg-white/15 border border-white/30 px-3 py-1 rounded-full">Coding</span>
            <span className="text-xs md:text-sm bg-white/15 border border-white/30 px-3 py-1 rounded-full">STEM</span>
          </div>

          <p className="appear-up mt-3 text-sm text-blue-100/90" style={{ animationDelay: "260ms" }}>
            *Slot terbatas. Tanpa biaya pendaftaran awal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-8 md:mt-10 appear-up" style={{ animationDelay: "320ms" }}>
            <article className="fluid-card interactive-card bg-white/95 rounded-2xl p-4 md:p-5 backdrop-blur text-left">
              <div className="flex items-center gap-2 mb-2 text-scitech-blue">
                <Cpu size={18} />
                <h3 className="font-heading font-bold text-base md:text-lg">Belajar Berbasis Proyek</h3>
              </div>
              <p className="text-sm text-gray-600">Anak langsung membuat robot, game, dan perangkat IoT dari tahap dasar sampai mahir.</p>
            </article>
            <article className="fluid-card interactive-card bg-white/95 rounded-2xl p-4 md:p-5 backdrop-blur text-left">
              <div className="flex items-center gap-2 mb-2 text-scitech-orange">
                <Trophy size={18} />
                <h3 className="font-heading font-bold text-base md:text-lg">Fokus Prestasi</h3>
              </div>
              <p className="text-sm text-gray-600">Didampingi mentor kompetisi untuk siap tampil di lomba nasional dan internasional.</p>
            </article>
            <article className="fluid-card interactive-card bg-white/95 rounded-2xl p-4 md:p-5 backdrop-blur text-left">
              <div className="flex items-center gap-2 text-green-600 mb-2">
                <Rocket size={18} />
                <h3 className="font-heading font-bold text-base md:text-lg">Progress Cepat</h3>
              </div>
              <p className="text-sm text-gray-600">Pendekatan bertahap dari dasar ke level advance dengan output nyata di setiap level.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
