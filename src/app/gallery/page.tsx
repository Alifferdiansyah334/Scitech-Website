import Image, { type StaticImageData } from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import Masonry from "@/components/Masonry";

import alatAquaponikPhoto from "../assets/Alat Aquaponik Karya Siswa.jpeg";
import mesinJuicerPhoto from "../assets/Mesin Juicer Otomatis Karya Siswa.jpeg";
import mesinJamuPhoto from "../assets/Mesin Jamu Otomatis Karya Siswa.jpeg";
import internationalGoldWinnerPhoto from "../assets/International Gold Winner.png";
import internationalGoldWinner2Photo from "../assets/International Gold Winner 2.png";
import juaraUmumSukabumiPhoto from "../assets/Juara Umum Sukabumi Robotic.png";
import mengajarPhoto from "../assets/Mengajar.jpeg";
import demonstrasiEkskulPhoto from "../assets/Demonstrasi Ekskul.jpeg";
import trainingOfTrainerPhoto from "../assets/Training Of Trainer.jpeg";
import portofolio1Photo from "../assets/portofolio1.jpeg";
import portofolio2Photo from "../assets/portofolio2.jpeg";
import portofolio3Photo from "../assets/portofolio3.jpeg";
import portofolio4Photo from "../assets/portofolio4.jpeg";
import portofolio5Photo from "../assets/portofolio5.jpeg";
import portofolio6Photo from "../assets/portofolio6.jpeg";
import portofolio7Photo from "../assets/portofolio7.jpeg";
import portofolio8Photo from "../assets/portofolio8.jpeg";
import portofolio9Photo from "../assets/portofolio9.jpeg";
import portofolio10Photo from "../assets/portofolio10.jpeg";
import portofolio11Photo from "../assets/portofolio11.jpeg";
import portofolio12Photo from "../assets/portofolio12.jpeg";

type Item = {
  title: string;
  image: StaticImageData;
};

type SectionData = {
  chapter: string;
  badge: string;
  title: string;
  subtitle: string;
  watermark: string;
  lead: Item;
  side: Item[];
  stats: { k: string; v: string }[];
};

const sections: SectionData[] = [
  {
    chapter: "01",
    badge: "Prestasi Kami",
    title: "Momen Juara",
    subtitle: "Dokumentasi persiapan dan eksekusi siswa dalam kompetisi regional hingga internasional.",
    watermark: "PRESTASI",
    lead: { title: "International Gold Winner", image: internationalGoldWinnerPhoto },
    side: [
      { title: "Juara Umum SRC", image: juaraUmumSukabumiPhoto },
      { title: "International Gold Winner 2", image: internationalGoldWinner2Photo },
    ],
    stats: [
      { k: "Meraih", v: "Gold International" },
      { k: "80+", v: "Total Juara" },
      { k: "Meraih", v: "Juara Umum SRC" },
    ],
  },
  {
    chapter: "02",
    badge: "Kreasi Kami",
    title: "Karya Siswa",
    subtitle: "Setiap siswa menghasilkan output nyata: game, robot, eksperimen STEM, dan proyek IoT.",
    watermark: "KREASI",
    lead: { title: "Alat Aquaponik Karya Siswa", image: alatAquaponikPhoto },
    side: [
      { title: "Mesin Juicer Otomatis Karya Siswa", image: mesinJuicerPhoto },
      { title: "Mesin Jamu Otomatis Karya Siswa", image: mesinJamuPhoto },
    ],
    stats: [
      { k: "Project", v: "Based Class" },
      { k: "Weekly", v: "Showcase" },
      { k: "Real", v: "Output" },
    ],
  },
  {
    chapter: "03",
    badge: "Kegiatan Kami",
    title: "Aktifitas & Kegiatan",
    subtitle: "Ritme belajar kolaboratif: mentoring, praktik rutin, dan simulasi challenge berbasis tim.",
    watermark: "KEGIATAN",
    lead: { title: "Mengajar", image: mengajarPhoto },
    side: [
      { title: "Demonstrasi Ekskul", image: demonstrasiEkskulPhoto },
      { title: "Training Of Trainer", image: trainingOfTrainerPhoto },
    ],
    stats: [
      { k: "500+", v: "Siswa Dibina" },
      { k: "15+", v: "Sekolah Mitra" },
      { k: "3+", v: "Tahun Program" },
    ],
  },
];

const portfolioItems = [
  { id: "portfolio-1", img: portofolio1Photo.src, url: "https://scitech.id", height: 760 },
  { id: "portfolio-2", img: portofolio2Photo.src, url: "https://scitech.id", height: 700 },
  { id: "portfolio-3", img: portofolio3Photo.src, url: "https://scitech.id", height: 680 },
  { id: "portfolio-4", img: portofolio4Photo.src, url: "https://scitech.id", height: 820 },
  { id: "portfolio-5", img: portofolio5Photo.src, url: "https://scitech.id", height: 700 },
  { id: "portfolio-6", img: portofolio6Photo.src, url: "https://scitech.id", height: 650 },
  { id: "portfolio-7", img: portofolio7Photo.src, url: "https://scitech.id", height: 730 },
  { id: "portfolio-8", img: portofolio8Photo.src, url: "https://scitech.id", height: 700 },
  { id: "portfolio-9", img: portofolio9Photo.src, url: "https://scitech.id", height: 790 },
  { id: "portfolio-10", img: portofolio10Photo.src, url: "https://scitech.id", height: 760 },
  { id: "portfolio-11", img: portofolio11Photo.src, url: "https://scitech.id", height: 680 },
  { id: "portfolio-12", img: portofolio12Photo.src, url: "https://scitech.id", height: 700 },
];

const portfolioChapter = {
  chapter: "04",
  badge: "Portofolio Kami",
  title: "Portofolio Lomba",
  subtitle:
    "Galeri lomba untuk menampilkan hasil karya dan proses belajar siswa.",
  watermark: "PORTOFOLIO",
  stats: [
    { k: "80+", v: "Lomba Diikuti" },
    { k: "Hands-on", v: "Learning" },
    { k: "Student", v: "Portfolio" },
  ],
};

const Ribbon = () => (
  <div className="rb-ribbon mb-8">
    <div className="rb-ribbon-track">
      {[
        "ROBOTICS",
        "CODING",
        "STEM",
        "INNOVATION",
        "NATIONAL AWARDS",
        "INTERNATIONAL AWARDS",
        "PROJECT BASED",
        "FUTURE SKILLS",
        "ROBOTICS",
        "CODING",
        "STEM",
        "INNOVATION",
        "NATIONAL AWARDS",
        "INTERNATIONAL AWARDS",
        "PROJECT BASED",
        "FUTURE SKILLS",
      ].map((word, idx) => (
        <span key={`${word}-${idx}`} className="rb-ribbon-pill rb-ribbon-pill-alt">
          {word}
        </span>
      ))}
    </div>
  </div>
);

const ShowcaseSection = ({ data, index }: { data: SectionData; index: number }) => {
  const reverse = index % 2 === 1;
  const isInternationalGoldWinner = data.lead.title === "International Gold Winner";
  const isKaryaSiswaLead = data.title === "Karya Siswa";

  return (
    <section className="section-shell px-4 pb-24">
      <div className="max-w-7xl mx-auto relative">
        <p className="pointer-events-none absolute -top-7 md:-top-10 left-1/2 -translate-x-1/2 font-heading text-[18vw] md:text-[11rem] leading-none font-extrabold tracking-[-0.04em] text-blue-100/60 select-none">
          {data.watermark}
        </p>

        <div className="relative z-10 grid lg:grid-cols-12 gap-6 items-start">
          <Reveal className={`lg:col-span-4 ${reverse ? "lg:order-2" : ""}`} variant="right" duration={760}>
            <div className="lg:sticky lg:top-24">
              <p className="font-heading text-6xl md:text-8xl leading-none font-extrabold text-scitech-blue tracking-[-0.04em] mb-4">{data.chapter}</p>
              <span className="inline-flex px-4 py-1.5 rounded-full bg-white border border-blue-100 text-xs font-semibold tracking-[0.14em] uppercase text-scitech-blue mb-4">
                {data.badge}
              </span>
              <h2 className="font-heading text-4xl md:text-6xl leading-[0.96] tracking-[-0.02em] font-extrabold text-slate-900 mb-4">{data.title}</h2>
              <p className="text-slate-600 leading-relaxed mb-6">{data.subtitle}</p>

              <div className="grid grid-cols-3 gap-2">
                {data.stats.map((item) => (
                  <div key={item.v} className="rounded-xl bg-[linear-gradient(180deg,#ffffff_0%,#eef5ff_100%)] border border-blue-100 p-2.5 text-center">
                    <p className="font-heading text-2xl tracking-[-0.02em] font-extrabold text-scitech-blue">{item.k}</p>
                    <p className="text-[10px] uppercase tracking-[0.13em] text-slate-500">{item.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className={`lg:col-span-8 grid md:grid-cols-2 gap-4 ${reverse ? "lg:order-1" : ""}`}>
            <Reveal className="md:col-span-2" variant="zoom" duration={900}>
              <TiltCard className="rounded-[2rem]" maxTilt={14}>
                <article
                  className={`apple-panel rounded-[2rem] p-4 overflow-hidden ${isInternationalGoldWinner ? "gold-winner-frame" : ""} ${isKaryaSiswaLead ? "blue-karya-frame" : ""}`}
                >
                  <div className="relative h-72 md:h-[28rem] rounded-[1.4rem] overflow-hidden">
                    <Image src={data.lead.image} alt={data.lead.title} fill className="object-cover apple-photo" sizes="(max-width: 1024px) 100vw, 70vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-scitech-blue/60 via-transparent to-transparent" />
                    <div className="absolute left-5 bottom-5">
                      <p className="text-xs uppercase tracking-[0.16em] text-orange-100 mb-1">Highlight Frame</p>
                      <h3 className="font-heading text-3xl md:text-5xl leading-[0.95] tracking-[-0.02em] font-extrabold text-white">{data.lead.title}</h3>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </Reveal>

            {data.side.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 90 + 30}>
                <TiltCard className="rounded-2xl" maxTilt={16}>
                  <article className="fluid-card rounded-2xl overflow-hidden bg-white">
                    <div className="relative h-56 md:h-64">
                      <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 35vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-scitech-blue/55 via-transparent to-transparent" />
                      <p className="absolute left-4 bottom-4 text-white font-heading text-xl md:text-2xl tracking-[-0.01em] font-bold">{item.title}</p>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  return (
    <section className="section-shell px-4 pb-24">
      <div className="max-w-7xl mx-auto relative">
        <p className="pointer-events-none absolute -top-7 md:-top-10 left-1/2 -translate-x-1/2 font-heading text-[18vw] md:text-[11rem] leading-none font-extrabold tracking-[-0.04em] text-blue-100/60 select-none">
          {portfolioChapter.watermark}
        </p>

        <div className="relative z-10 grid lg:grid-cols-12 gap-6 items-start">
          <Reveal className="lg:col-span-4 lg:order-2" variant="right" duration={760}>
            <div className="lg:sticky lg:top-24">
              <p className="font-heading text-6xl md:text-8xl leading-none font-extrabold text-scitech-blue tracking-[-0.04em] mb-4">
                {portfolioChapter.chapter}
              </p>
              <span className="inline-flex px-4 py-1.5 rounded-full bg-white border border-blue-100 text-xs font-semibold tracking-[0.14em] uppercase text-scitech-blue mb-4">
                {portfolioChapter.badge}
              </span>
              <h2 className="font-heading text-4xl md:text-6xl leading-[0.96] tracking-[-0.02em] font-extrabold text-slate-900 mb-4">
                {portfolioChapter.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">{portfolioChapter.subtitle}</p>

              <div className="grid grid-cols-3 gap-2">
                {portfolioChapter.stats.map((item) => (
                  <div
                    key={item.v}
                    className="rounded-xl bg-[linear-gradient(180deg,#ffffff_0%,#eef5ff_100%)] border border-blue-100 p-2.5 text-center"
                  >
                    <p className="font-heading text-2xl tracking-[-0.02em] font-extrabold text-scitech-blue">{item.k}</p>
                    <p className="text-[10px] uppercase tracking-[0.13em] text-slate-500">{item.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-8 lg:order-1" variant="zoom" duration={900}>
            <article className="apple-panel rounded-[2rem] p-3 md:p-4 overflow-hidden">
              <div className="h-[560px] md:h-[640px] lg:h-[700px] rounded-[1.4rem] border border-blue-100 bg-[linear-gradient(180deg,#f7fbff_0%,#edf4ff_100%)] p-2 md:p-3 overflow-hidden">
                <Masonry
                  items={portfolioItems}
                  animateFrom="bottom"
                  stagger={0.06}
                  duration={0.7}
                  ease="power3.out"
                  blurToFocus
                  scaleOnHover
                  hoverScale={0.98}
                  colorShiftOnHover={false}
                  autoScrollLeft={false}
                  autoScrollUp
                  extraColumns={1}
                  autoScrollDuration={24}
                  horizontalDrift={false}
                  columnConfig={[4, 3, 2, 1]}
                />
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <MouseGlow />
      <Navbar />

      <section className="section-shell pt-28 pb-16 px-4 bg-[radial-gradient(circle_at_18%_0%,#deebff_0%,transparent_34%),radial-gradient(circle_at_84%_0%,#ffe8d7_0%,transparent_30%),linear-gradient(180deg,#ecf4ff_0%,#ffffff_100%)] overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="absolute -top-16 -left-8 h-28 w-28 rounded-full bg-blue-200/60 blur-2xl animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute -top-10 right-0 h-24 w-24 rounded-full bg-orange-200/70 blur-2xl animate-[float_9s_ease-in-out_infinite]" />

          <Reveal variant="zoom" duration={840}>
            <span className="inline-flex px-4 py-1.5 rounded-full bg-white border border-blue-100 text-xs font-semibold tracking-[0.16em] uppercase text-scitech-blue mb-4">
              Gallery Showcase
            </span>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.03em] font-extrabold text-slate-900">
              Bukan Sekadar Foto,
              <br />
              <span className="text-scitech-blue">Ini Cerita Pencapaian</span>
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed text-slate-600">
              Presentasi visual perjalanan siswa Scitech: dari kegiatan rutin, proses kreasi, hingga momen juara.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3 max-w-4xl mx-auto">
              {[
                "Robotics",
                "Coding",
                "STEM",
                "Competition",
                "Showcase",
                "Innovation",
              ].map((item) => (
                <span key={item} className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[10px] md:text-xs uppercase tracking-[0.14em] font-semibold text-scitech-blue">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell px-4 pt-4 pb-4">
        <div className="max-w-7xl mx-auto">
          <Ribbon />
        </div>
      </section>

      {sections.map((section, idx) => (
        <ShowcaseSection key={section.badge} data={section} index={idx} />
      ))}

      <PortfolioSection />

      <section className="section-shell px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <Reveal className="apple-panel rounded-[2rem] p-7 md:p-10 text-center" variant="zoom" duration={820}>
            <p className="text-xs uppercase tracking-[0.16em] text-scitech-blue mb-3 font-semibold">Ready to Join</p>
            <h2 className="font-heading text-4xl md:text-6xl leading-[0.95] tracking-[-0.02em] font-extrabold text-slate-900 mb-4">
              Siap Jadi Bagian dari
              <br />
              <span className="text-scitech-orange">Cerita Berikutnya?</span>
            </h2>
            <p className="max-w-2xl mx-auto text-slate-600 leading-relaxed mb-7">
              Daftarkan anak untuk trial class dan lihat sendiri bagaimana Scitech membangun skill, karya, dan prestasi.
            </p>
            <a
              href="https://wa.me/6287877955526?text=Halo%20Scitech,%20saya%20ingin%20daftar%20trial%20class"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-scitech-orange hover:bg-orange-600 text-white font-bold px-8 py-3.5 btn-lift"
            >
              Daftar Trial Gratis
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
