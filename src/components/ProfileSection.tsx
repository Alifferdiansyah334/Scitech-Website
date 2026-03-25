"use client";

import { useEffect, useState } from "react";
import { Target, Eye, Lightbulb, Award, Users, School, Sparkles } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

import expertPhoto from "../app/assets/expert.jpg";
import profilePhoto from "../app/assets/profile.png";

type PersonCard = {
  name: string;
  role: string;
  bio: string;
  photo: string | StaticImageData;
  photos?: Array<string | StaticImageData>;
};

const founders: PersonCard[] = [
  {
    name: "Husni Teja Sukmana, S.T., M.Sc, Ph.D",
    role: "Founder",
    bio: "Berfokus pada pengembangan kurikulum teknologi yang aplikatif dan berdampak.",
    photo: expertPhoto,
  },
  {
    name: "Nenny Anggraini, S.Kom, MT",
    role: "Co-Founder",
    bio: "Mendorong ekosistem belajar yang menyenangkan dan berorientasi pada karakter siswa.",
    photo: expertPhoto,
  },
  {
    name: "Khair Fadhillah, S.Kom",
    role: "Co-Founder",
    bio: "Mengawal strategi program dan kolaborasi agar implementasi di sekolah berjalan optimal.",
    photo: expertPhoto,
  },
];

const mentors: PersonCard[] = [
  { name: "Muhammad Zhafran Athofani, S.Kom", role: "Mentor Robotik", bio: "Membimbing siswa merancang robot dari dasar hingga siap kompetisi.", photo: expertPhoto },
  { name: "Shabira Zhillan Zhalila, S.Kom", role: "Mentor Robotik", bio: "Mengembangkan rasa ingin tahu ilmiah melalui eksperimen dan proyek kreatif.", photo: expertPhoto },
  { name: "Mutiara, S.Kom", role: "Mentor Robotik", bio: "Mengajarkan logika pemrograman dengan pendekatan visual yang mudah dipahami.", photo: expertPhoto },
  { name: "Muhammad Alif Ferdyansyah", role: "Mentor Robotik", bio: "Membimbing pembuatan perangkat pintar berbasis mikrokontroler dan sensor.", photo: expertPhoto },
  { name: "Muslim Haq", role: "Mentor Robotik", bio: "Fokus pada penguatan mekanika robot dan strategi problem solving lomba.", photo: expertPhoto },
  {
    name: "Risqi Ananda Jayanti",
    role: "Mentor Robotik",
    bio: "Mendorong siswa membangun game edukatif dengan pola pikir komputasional.",
    photo: expertPhoto,
  },
  {
    name: "Adelia Dheanty",
    role: "Mentor Robotik",
    bio: "Membantu siswa memahami konsep sains melalui aktivitas interaktif dan menyenangkan.",
    photo: expertPhoto,
  },
  { name: "Rian Yuliawan", role: "Mentor Robotik", bio: "Mengenalkan dasar AI dan machine learning untuk proyek berbasis data sederhana.", photo: expertPhoto },
  { name: "Zalfa Syawlia Hediatami", role: "Mentor Robotik", bio: "Mendampingi siswa membangun fondasi coding dari Scratch hingga text-based coding.", photo: expertPhoto },
  {
    name: "Muhammad Irfan Ali",
    role: "Mentor Robotik",
    bio: "Membimbing implementasi sensor dan aktuator dalam proyek perangkat nyata.",
    photo: expertPhoto,
  },
  { name: "Zuhdan Kahfi", role: "Mentor Robotik", bio: "Mengasah skill desain robot dan ketangguhan siswa dalam challenge praktis.", photo: expertPhoto },
  { name: "Muhammad Rayhan Ramadhan", role: "Mentor Robotik", bio: "Memadukan kreativitas dan konsep teknik agar siswa mampu menghasilkan karya inovatif.", photo: expertPhoto },
];

const values = [
  { icon: <Lightbulb size={18} />, title: "Inovatif", desc: "Pembelajaran berbasis proyek dan teknologi terbaru agar siswa selalu relevan." },
  { icon: <Users size={18} />, title: "Kolaboratif", desc: "Mendorong teamwork, komunikasi, dan problem solving sejak dini." },
  { icon: <Award size={18} />, title: "Berorientasi Prestasi", desc: "Program terstruktur untuk mendorong prestasi akademik dan kompetisi." },
  { icon: <School size={18} />, title: "Siap Implementasi Sekolah", desc: "Sistem pembelajaran mudah diadopsi sebagai intrakurikuler dan ekstrakurikuler." },
];

const MentorCarousel = ({ photos, alt }: { photos: Array<string | StaticImageData>; alt: string }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;

    const timerId = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 1500);

    return () => window.clearInterval(timerId);
  }, [photos.length]);

  return (
    <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
      {photos.map((photo, photoIndex) => (
        <div
          key={`${alt}-${photoIndex}`}
          className={`absolute inset-0 transition-opacity duration-500 ${
            photoIndex === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={photoIndex !== index}
        >
          <Image
            src={photo}
            alt={photoIndex === index ? alt : ""}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      ))}

    </div>
  );
};

const ProfileSection = () => {
  const [pointer, setPointer] = useState({ x: 52, y: 42 });

  return (
    <div>
      <section
        className="section-shell relative overflow-hidden pt-28 pb-16 px-4 bg-[radial-gradient(circle_at_18%_0%,rgba(255,214,184,0.22),transparent_34%),linear-gradient(130deg,#071c48_0%,#0b4db8_58%,#1c84ff_100%)]"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setPointer({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
        }}
      >
        <p className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 font-heading text-[20vw] md:text-[11rem] leading-none font-extrabold tracking-[-0.05em] text-white/10 select-none">
          PROFILE
        </p>
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 transition duration-300" style={{ background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(255,255,255,0.28), transparent 42%)` }} />

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <Reveal className="text-white" variant="right">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/30 text-xs font-bold tracking-[0.14em] uppercase mb-5">
              <Sparkles size={14} /> The Story Behind Scitech
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold leading-[1.04] tracking-[-0.02em]">
              Dari Rasa Ingin Tahu
              <br />
              Menjadi <span className="text-orange-200">Inovator Digital</span>
            </h1>
            <p className="mt-6 text-blue-100 text-lg leading-relaxed max-w-2xl">
              Scitech Academy lahir dari keyakinan sederhana: setiap anak berhak merasakan pengalaman belajar
              teknologi yang menyenangkan, terarah, dan berdampak nyata untuk masa depannya.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mt-8">
              {[
                { k: "500+", v: "Siswa Dibina" },
                { k: "15+", v: "Sekolah Mitra" },
                { k: "80+", v: "Piala & Medali" },
              ].map((item) => (
                <div key={item.v} className="glass-pop rounded-xl p-3">
                  <p className="font-heading text-2xl font-extrabold">{item.k}</p>
                  <p className="text-xs text-blue-100">{item.v}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal variant="zoom" duration={850}>
            <div className="fluid-card bg-white/95 rounded-3xl p-3">
              <div className="relative rounded-2xl overflow-hidden">
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-scitech-blue/40 via-transparent to-transparent" />
                <Image
                  src={profilePhoto}
                  alt="Perjalanan belajar siswa di Scitech Academy"
                  width={1200}
                  height={900}
                  className="rounded-2xl w-full h-[320px] md:h-[500px] object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell px-4 pt-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="rb-ribbon">
            <div className="rb-ribbon-track">
              {["FOUNDERS", "MENTORS", "VISION", "MISSION", "NILAI SCITECH", "STORY", "FOUNDERS", "MENTORS", "VISION", "MISSION", "NILAI SCITECH", "STORY"].map((word, idx) => (
                <span key={`${word}-${idx}`} className="rb-ribbon-pill rb-ribbon-pill-alt">{word}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell px-4 pb-14">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4">
          {[
            { no: "01", title: "People First", desc: "Mentor dan founder hadir bukan hanya mengajar, tapi membangun kepercayaan diri siswa.", tone: "bg-[linear-gradient(145deg,#eef5ff_0%,#ffffff_100%)] border-blue-100 text-scitech-blue" },
            { no: "02", title: "Culture of Making", desc: "Budaya berkarya lewat proyek nyata: mencoba, gagal, memperbaiki, dan tumbuh.", tone: "bg-[linear-gradient(145deg,#fff4ea_0%,#ffffff_100%)] border-orange-100 text-scitech-orange" },
            { no: "03", title: "Performance Mindset", desc: "Proses pembinaan terstruktur untuk menyiapkan siswa tampil di level kompetisi.", tone: "bg-[linear-gradient(145deg,#eefcf3_0%,#ffffff_100%)] border-emerald-100 text-emerald-600" },
          ].map((item, idx) => (
            <Reveal key={item.title} delay={idx * 80}>
              <article className={`fluid-card rounded-2xl p-5 border ${item.tone}`}>
                <p className="font-heading text-4xl tracking-[-0.03em] font-extrabold mb-3">{item.no}</p>
                <h3 className="font-heading text-xl md:text-2xl tracking-[-0.01em] font-extrabold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-16 px-4 bg-[linear-gradient(180deg,#eff5ff_0%,#ffffff_100%)]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <Reveal>
            <article className="fluid-card interactive-card bg-[linear-gradient(140deg,#0b4db8_0%,#1b8bff_100%)] text-white border-blue-300/35 rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-3"><Eye size={20} /><h2 className="font-heading font-bold text-2xl">Visi</h2></div>
              <p className="text-white/90 leading-relaxed">Menjadi lembaga pendidikan teknologi anak terdepan di Indonesia yang melahirkan inovator masa depan berkarakter, adaptif, dan berdaya saing global.</p>
            </article>
          </Reveal>
          <Reveal delay={90}>
            <article className="fluid-card interactive-card bg-[linear-gradient(140deg,#ff6b00_0%,#ff9346_100%)] text-white border-orange-300/40 rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-3"><Target size={20} /><h2 className="font-heading font-bold text-2xl">Misi</h2></div>
              <p className="text-white/90 leading-relaxed">Menyediakan pembelajaran STEM berbasis praktik, membangun ekosistem belajar yang menyenangkan, serta mendorong kolaborasi dengan sekolah dan orang tua.</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-slate-900 mb-3">Nilai Scitech</h2>
            <p className="text-slate-600">Nilai utama yang selalu hadir di setiap sesi pembelajaran.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, idx) => (
              <Reveal key={value.title} delay={idx * 60}>
                <article className="fluid-card interactive-card rounded-2xl p-5 bg-white border-slate-200/75">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${idx === 0 ? "bg-blue-100 text-blue-700" : idx === 1 ? "bg-orange-100 text-orange-700" : idx === 2 ? "bg-emerald-100 text-emerald-700" : "bg-violet-100 text-violet-700"}`}>
                    {value.icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{value.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16 px-4 bg-[linear-gradient(180deg,#eef5ff_0%,#ffffff_100%)]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-8" variant="right">
            <p className="text-xs uppercase tracking-[0.16em] text-scitech-blue font-semibold mb-2">Chapter 01</p>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-slate-900">Founder Cast</h2>
            <p className="text-slate-600 mt-2">Tokoh utama di balik arah strategis dan budaya Scitech Academy.</p>
          </Reveal>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 mb-14">
            {founders.map((founder, idx) => (
              <li key={founder.name} className={idx === 0 ? "xl:col-span-2" : ""}>
                <Reveal delay={idx * 70}>
                  <TiltCard className="rounded-2xl" maxTilt={12}>
                    <article className="fluid-card cast-card rounded-2xl border border-slate-200/80 bg-white p-4 flex flex-col gap-3 min-h-[560px] relative overflow-hidden">
                      <div className="absolute top-3 right-3 z-20 rounded-full border border-blue-100 bg-white/95 px-3 py-1">
                        <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-scitech-blue">{founder.role}</p>
                      </div>
                      <div className={`relative ${idx === 0 ? "h-[26rem] md:h-[32rem]" : "h-96 md:h-[28rem]"} rounded-xl overflow-hidden`}>
                        <Image src={founder.photo} alt={founder.name} fill className="cast-photo object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-scitech-blue/45 via-transparent to-transparent" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-heading font-bold text-xl tracking-[-0.01em] text-slate-900 leading-snug">{founder.name}</h3>
                        <p className="text-xs uppercase tracking-[0.12em] text-slate-500 font-semibold mt-1">Leadership Core</p>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed text-center">{founder.bio}</p>
                    </article>
                  </TiltCard>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="text-center mb-8" variant="right">
            <p className="text-xs uppercase tracking-[0.16em] text-scitech-orange font-semibold mb-2">Chapter 02</p>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-slate-900">Mentor Cast</h2>
            <p className="text-slate-600 mt-2">Tim mentor yang menjaga ritme belajar siswa tetap progresif dan menyenangkan.</p>
          </Reveal>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {mentors.map((mentor, idx) => (
              <li key={mentor.name}>
                <Reveal delay={idx * 50}>
                  {mentor.photos && mentor.photos.length > 1 ? (
                    <article className="fluid-card cast-card rounded-2xl border border-slate-200/80 bg-white p-4 flex flex-col gap-3 min-h-[520px] relative overflow-hidden">
                      <div className="absolute top-3 right-3 z-20 rounded-full border border-orange-100 bg-white/95 px-3 py-1">
                        <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-scitech-orange">{mentor.role.replace("Mentor ", "")}</p>
                      </div>
                      <MentorCarousel photos={mentor.photos} alt={mentor.name} />
                      <div className="text-center">
                        <h3 className="font-heading font-bold text-lg tracking-[-0.01em] text-slate-900 leading-snug">{mentor.name}</h3>
                        <p className="text-[11px] uppercase tracking-[0.1em] text-slate-500 font-semibold mt-1">{mentor.role}</p>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed text-center">{mentor.bio}</p>
                    </article>
                  ) : (
                    <TiltCard className="rounded-2xl" maxTilt={10}>
                      <article className="fluid-card cast-card rounded-2xl border border-slate-200/80 bg-white p-4 flex flex-col gap-3 min-h-[520px] relative overflow-hidden">
                        <div className="absolute top-3 right-3 z-20 rounded-full border border-orange-100 bg-white/95 px-3 py-1">
                          <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-scitech-orange">{mentor.role.replace("Mentor ", "")}</p>
                        </div>
                        <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                          <Image src={mentor.photo} alt={mentor.name} fill className="cast-photo object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" />
                          <div className="absolute inset-0 bg-gradient-to-t from-scitech-blue/40 via-transparent to-transparent" />
                        </div>
                        <div className="text-center">
                          <h3 className="font-heading font-bold text-lg tracking-[-0.01em] text-slate-900 leading-snug">{mentor.name}</h3>
                          <p className="text-[11px] uppercase tracking-[0.1em] text-slate-500 font-semibold mt-1">{mentor.role}</p>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed text-center">{mentor.bio}</p>
                      </article>
                    </TiltCard>
                  )}
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ProfileSection;
