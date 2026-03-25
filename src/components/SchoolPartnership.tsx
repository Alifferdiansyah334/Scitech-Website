"use client";

import { CheckCircle, FileText } from "lucide-react";
import Image from "next/image";

const SchoolPartnership = () => {
  const handleStepMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget.querySelector<HTMLElement>(".workflow-step-card");
    if (!card) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 18;
    const rotateX = (0.5 - y) * 12;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.04)`;
  };

  const resetStepTilt = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const card = event.currentTarget.querySelector<HTMLElement>(".workflow-step-card");
    if (!card) return;
    card.style.transform = "";
  };

  const steps = [
    { num: 1, label: "Assessment", color: "bg-blue-100", text: "text-scitech-blue" },
    { num: 2, label: "Demo/MoU", color: "bg-blue-100", text: "text-scitech-blue" },
    { num: 3, label: "Implementasi", color: "bg-blue-100", text: "text-scitech-blue" },
    { num: 4, label: "Report", color: "bg-green-100", text: "text-green-600" },
  ];

  return (
    <section id="sekolah" className="section-shell py-20 bg-white relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-70" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-scitech-blue font-bold tracking-[0.14em] uppercase text-xs">
            Untuk Sekolah & Yayasan
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Jadikan Sekolah Anda Pusat Unggulan <span className="text-scitech-blue">STEM & Robotik</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Kami membantu sekolah menyelenggarakan kegiatan Intrakurikuler dan Ekstrakurikuler tanpa perlu
              investasi alat yang mahal. Terima beres, terima prestasi.
            </p>

            <div className="space-y-4 mb-9">
              {[
                { title: "Kurikulum & Silabus Lengkap", desc: "RPP, Modul, dan Rubrik Penilaian Terstandar." },
                { title: "Mentor Profesional", desc: "Pengajar tersertifikasi dari Scitech Academy." },
                { title: "Peralatan Dipinjamkan", desc: "Sekolah tidak perlu beli alat." },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="mt-0.5 w-7 h-7 rounded-full bg-orange-100 text-scitech-orange flex items-center justify-center shrink-0">
                    <CheckCircle size={16} />
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/6287877955526?text=Halo%20Scitech,%20saya%20dari%20sekolah..."
                className="btn-lift shine bg-scitech-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-blue-700/25 inline-flex items-center"
              >
                Jadwalkan Presentasi
              </a>
              <button className="btn-lift bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl inline-flex items-center shadow-lg shadow-green-700/25">
                <FileText className="mr-2" size={18} /> Unduh Proposal
              </button>
            </div>
          </div>

          <div className="fluid-card partnership-main-card bg-white rounded-2xl p-2">
            <Image
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
              alt="Kegiatan Robotik Sekolah"
              width={1000}
              height={600}
              className="rounded-xl w-full h-[280px] md:h-[360px] object-cover"
            />
            <div className="p-6">
              <div className="mb-5">
                <h3 className="font-heading font-bold text-xl text-slate-900">Alur Kerja Sama</h3>
                <p className="text-xs text-slate-500 mt-1">Proses terstruktur, cepat, dan terukur untuk sekolah.</p>
              </div>

              <div className="relative rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] p-4 md:p-5">
                <div className="relative">
                  <div className="hidden md:block absolute left-10 right-10 top-[18px] h-[2px] bg-gradient-to-r from-blue-200 via-blue-300 to-green-200 pointer-events-none" />
                  <div className="workflow-grid grid grid-cols-2 md:grid-cols-4 gap-3">
                  {steps.map((step) => (
                    <div
                      key={step.num}
                      className="workflow-step-item relative pt-9"
                      onMouseMove={handleStepMove}
                      onMouseLeave={resetStepTilt}
                      onTouchEnd={resetStepTilt}
                    >
                      <div className={`absolute left-1/2 -translate-x-1/2 top-0 w-9 h-9 ${step.color} rounded-full flex items-center justify-center ${step.text} font-bold ring-4 ring-white shadow-sm z-10`}>
                        {step.num}
                      </div>
                      <div className="workflow-step-card rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-center">
                        <p className="text-[11px] font-bold tracking-wide uppercase text-slate-400">Tahap {step.num}</p>
                        <p className="text-sm font-semibold text-slate-700">{step.label}</p>
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolPartnership;
