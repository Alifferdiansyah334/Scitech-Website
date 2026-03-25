import {
  Shapes,
  Bot,
  Laptop,
  Microchip,
  Wifi,
  Network,
  Code,
  Brain,
  Trophy,
  Check,
} from "lucide-react";
import Image from "next/image";
import beginnerPhoto from "../app/assets/beginner.jpeg";
import basic1Photo from "../app/assets/basic1.png";
import basic2Photo from "../app/assets/basic2.jpg";
import basic3Photo from "../app/assets/basic3.png";
import intermediatePhoto from "../app/assets/intermediate.png";
import expertPhoto from "../app/assets/expert.jpg";
import codingForKidsPhoto from "../app/assets/codingforkids.jpg";
import competitionClassPhoto from "../app/assets/Competition Class.jpeg";

const Programs = () => {
  const programs = [
    {
      icon: <Shapes />,
      age: "Usia 4 - 6 Tahun",
      title: "Beginner",
      desc: "Program pengenalan dasar konstruksi.",
      details: "16 Pertemuan (4 bulan) • 90 Menit/Sesi",
      features: ["Belajar Bricks & Lego", "Pengenalan Actuator"],
      borderColor: "border-green-500",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      image: beginnerPhoto,
      waLink: "https://wa.me/6287877955526?text=Halo%20saya%20tertarik%20kelas%20Beginner",
    },
    {
      icon: <Bot />,
      age: "Usia 6 - 8 Tahun",
      title: "Basic 1",
      desc: "Membangun robot sederhana dengan sensor.",
      details: "16 Pertemuan (4 bulan) • 90 Menit/Sesi",
      features: ["Bricks & Lego", "Actuator & Sensor"],
      borderColor: "border-green-500",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      image: basic1Photo,
      waLink: "https://wa.me/6287877955526?text=Halo%20saya%20tertarik%20kelas%20Basic%201",
    },
    {
      icon: <Laptop />,
      age: "Usia 8 - 10 Tahun",
      title: "Basic 2",
      desc: "Kombinasi merakit robot dan coding dasar.",
      details: "16 Pertemuan (4 bulan) • 90 Menit/Sesi",
      features: ["Coding & Lego", "Sensor & Actuator"],
      borderColor: "border-scitech-blue",
      bgColor: "bg-blue-100",
      textColor: "text-scitech-blue",
      image: basic2Photo,
      waLink: "https://wa.me/6287877955526?text=Halo%20saya%20tertarik%20kelas%20Basic%202",
    },
    {
      icon: <Microchip />,
      age: "Usia 10 - 12 Tahun",
      title: "Basic 3",
      desc: "Pemrograman mikrokontroler Arduino.",
      details: "16 Pertemuan (4 bulan) • 90 Menit/Sesi",
      features: ["Pictoblox & Arduino", "Advanced Sensor"],
      borderColor: "border-scitech-blue",
      bgColor: "bg-blue-100",
      textColor: "text-scitech-blue",
      image: basic3Photo,
      waLink: "https://wa.me/6287877955526?text=Halo%20saya%20tertarik%20kelas%20Basic%203",
    },
    {
      icon: <Wifi />,
      age: "Usia 12 - 15 Tahun",
      title: "Intermediate",
      desc: "Membuat perangkat pintar berbasis IoT.",
      details: "16 Pertemuan (4 bulan) • 90 Menit/Sesi",
      features: ["ESP32 & IoT", "Actuator Control"],
      borderColor: "border-yellow-400",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
      image: intermediatePhoto,
      waLink: "https://wa.me/6287877955526?text=Halo%20saya%20tertarik%20kelas%20Intermediate",
    },
    {
      icon: <Network />,
      age: "Usia 15 - 18 Tahun",
      title: "Expert",
      desc: "Sistem IoT tingkat lanjut dan integrasi sistem.",
      details: "16 Pertemuan (4 bulan) • 90 Menit/Sesi",
      features: ["IoT Advance", "Complex Sensors"],
      borderColor: "border-red-500",
      bgColor: "bg-red-100",
      textColor: "text-red-600",
      image: expertPhoto,
      waLink: "https://wa.me/6287877955526?text=Halo%20saya%20tertarik%20kelas%20Expert",
    },
    {
      icon: <Code />,
      age: "Usia 7 - 17 Tahun",
      title: "Coding for Kids",
      desc: "Belajar logika pemrograman visual (Scratch) hingga teks (Roblox Studio) untuk membuat game.",
      features: ["Game Creation", "Logic Thinking"],
      borderColor: "border-scitech-orange",
      bgColor: "bg-orange-100",
      textColor: "text-scitech-orange",
      image: codingForKidsPhoto,
      waLink: "https://wa.me/6287877955526?text=Halo%20saya%20tertarik%20kelas%20Coding",
    },
    {
      icon: <Brain />,
      age: "Usia 12+ Tahun",
      title: "AI & Machine Learning",
      desc: "Pengenalan kecerdasan buatan dasar. Melatih komputer mengenali gambar dan suara.",
      features: ["Face Recognition", "Voice Assistant"],
      borderColor: "border-scitech-blue",
      bgColor: "bg-blue-100",
      textColor: "text-scitech-blue",
      image: expertPhoto,
      waLink: "https://wa.me/6287877955526?text=Halo%20saya%20tertarik%20kelas%20AI",
    },
  ];

  return (
    <section id="program" className="section-shell py-20 bg-[linear-gradient(180deg,#f4f8ff_0%,#eaf2ff_100%)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-flex px-4 py-1.5 rounded-full bg-white border border-blue-100 text-xs font-semibold tracking-[0.14em] uppercase text-scitech-blue mb-4">
            Kurikulum Berjenjang
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-[#0d367d] mb-4">
            Pilihan Program Belajar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kurikulum berjenjang dari pemula hingga mahir, disesuaikan dengan usia dan teknologi terkini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {programs.map((prog, idx) => (
            <article
              key={idx}
              className={`fluid-card interactive-card bg-white rounded-2xl p-6 border-t-4 ${prog.borderColor} group appear-up`}
              style={{ animationDelay: `${idx * 70}ms` }}
            >
              <div className="relative h-36 rounded-xl overflow-hidden mb-5">
                <Image
                  src={prog.image}
                  alt={`Program ${prog.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>

              <div className="flex justify-between items-start gap-3 mb-5">
                <div className={`w-12 h-12 ${prog.bgColor} rounded-xl flex items-center justify-center ${prog.textColor}`}>
                  {prog.icon}
                </div>
                <span className="bg-slate-100 text-slate-600 text-[11px] font-bold px-3 py-1 rounded-full h-fit">
                  {prog.age}
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold mb-2 text-slate-900">{prog.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {prog.desc}
                {prog.details ? (
                  <>
                    <br />
                    <strong>{prog.details}</strong>
                  </>
                ) : null}
              </p>

              <ul className="text-sm text-gray-700 mb-5 space-y-2">
                {prog.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href={prog.waLink}
                className="btn-lift inline-flex items-center text-scitech-blue font-bold hover:text-scitech-orange text-sm"
              >
                Info Lengkap →
              </a>
            </article>
          ))}

          <article className="fluid-card edge-shimmer-orange edge-3d-hover group rounded-2xl p-6 text-white appear-up" style={{ animationDelay: "200ms" }}>
            <div className="relative h-36 rounded-xl overflow-hidden mb-5">
              <Image
                src={competitionClassPhoto}
                alt="Competition Class"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="flex justify-between items-start gap-3 mb-5">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-scitech-orange">
                <Trophy size={22} />
              </div>
              <span className="bg-white/10 text-blue-100 text-[11px] font-bold px-3 py-1 rounded-full h-fit">
                Seleksi
              </span>
            </div>

            <h3 className="font-heading text-xl font-bold mb-2">Competition Class</h3>
            <p className="text-blue-100 mb-4 text-sm leading-relaxed">
              Kelas intensif persiapan lomba nasional & internasional. Fokus strategi dan mental juara.
            </p>

            <ul className="text-sm text-blue-100 mb-5 space-y-2">
              <li className="flex items-center">
                <Check className="text-scitech-orange mr-2" size={16} />
                Karantina Lomba
              </li>
              <li className="flex items-center">
                <Check className="text-scitech-orange mr-2" size={16} />
                Mentoring Khusus
              </li>
            </ul>

            <a href="#" className="btn-lift text-scitech-orange font-bold hover:text-white text-sm inline-flex items-center">
              Info Lengkap →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Programs;
