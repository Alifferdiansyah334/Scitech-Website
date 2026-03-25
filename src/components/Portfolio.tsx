import Image from "next/image";

const Portfolio = () => {
  const achievements = [
    {
      title: "Scratch Game",
      sub: "International Robotic Competition (Malaysia 2025)",
      label: "JUARA 1 | GOLD",
      color: "border-yellow-400",
      textColor: "text-yellow-500",
    },
    {
      title: "Line Follower",
      sub: "International Robotic Competition (Malaysia 2025)",
      label: "JUARA 1 | GOLD",
      color: "border-gray-400",
      textColor: "text-gray-500",
    },
    {
      title: "Pemenang Terbanyak",
      sub: "Sukabumi Robotic Competition (2025)",
      label: "JUARA UMUM",
      color: "border-orange-500",
      textColor: "text-orange-500",
    },
    {
      title: "80+ Juara Lainnya",
      sub: "Nasional/Internasional",
      label: "Juara Lainnya",
      color: "border-yellow-500",
      textColor: "text-blue-500",
    },
  ];

  const partners = ["foto1.png", "foto2.png", "foto3.png", "foto4.png", "foto5.png", "foto6.png"];
  const marqueePartners = [...partners, ...partners];

  return (
    <section id="portofolio" className="section-shell py-20 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex px-4 py-1.5 rounded-full bg-white border border-blue-100 text-xs font-semibold tracking-[0.14em] uppercase text-scitech-blue mb-4">
            Prestasi Siswa
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 text-slate-900">Portofolio Juara</h2>
          <p className="text-gray-600">Bukti kualitas kurikulum kami di kancah nasional dan internasional.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-14">
          {achievements.map((item, idx) => (
            <article key={idx} className={`fluid-card interactive-card bg-white rounded-xl p-6 border-l-4 ${item.color} appear-up`} style={{ animationDelay: `${idx * 90}ms` }}>
              <div className={`${item.textColor} text-xs font-bold mb-1 uppercase tracking-wide`}>{item.label}</div>
              <h4 className="font-heading font-bold text-xl mb-1 text-slate-900">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.sub}</p>
            </article>
          ))}
        </div>

        <div className="border-t border-blue-100 pt-10 mt-12">
          <p className="text-center text-slate-400 text-xs mb-8 uppercase tracking-[0.3em] font-semibold">
            Dipercaya oleh sekolah & mitra
          </p>

          <div className="marquee">
            <div className="marquee-track">
              {marqueePartners.map((logo, idx) => (
                <div key={`${logo}-${idx}`} className="group relative">
                  <Image
                    src={`/logo/${logo}`}
                    alt={`Mitra ${idx + 1}`}
                    width={120}
                    height={64}
                    className="h-16 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
