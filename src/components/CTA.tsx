const CTA = () => {
  return (
    <section className="section-shell bg-[linear-gradient(110deg,#072359_0%,#0b4db8_55%,#1d83ff_100%)] text-white py-16 text-center px-4 overflow-hidden relative">
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] rounded-full bg-white/10 blur-3xl" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4">
          Jangan Sampai Anak Tertinggal di Era Digital
        </h2>
        <p className="mb-8 text-blue-100 text-base md:text-lg">
          Bergabunglah dengan ribuan siswa lain yang sudah menciptakan masa depan mereka hari ini.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/6287877955526"
            className="btn-lift shine bg-scitech-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-orange-700/30"
          >
            Konsultasi Program
          </a>
          <a
            href="#program"
            className="btn-lift bg-transparent border border-white hover:bg-white hover:text-scitech-blue text-white font-bold py-3 px-8 rounded-full transition"
          >
            Lihat Jadwal Kelas
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
