"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [selected, setSelected] = useState<number | null>(0);

  const faqs = [
    {
      q: "Apakah pemula boleh ikut?",
      a: "Tentu! Kami memiliki level Beginner yang dirancang khusus untuk anak yang belum pernah belajar coding atau robotik sebelumnya.",
    },
    {
      q: "Usia berapa bisa mulai?",
      a: "Anak-anak bisa mulai belajar sejak usia 5 tahun (TK B) dengan materi logika dasar menggunakan mainan edukatif.",
    },
    {
      q: "Apakah alat harus beli?",
      a: "Untuk kelas offline di center atau sekolah, alat dipinjamkan. Untuk kelas online, disarankan membeli atau menyewa.",
    },
  ];

  return (
    <section className="section-shell py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-center mb-10 text-slate-900">
          Pertanyaan Sering Diajukan
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <article
              key={idx}
              className={`fluid-card rounded-2xl p-4 md:p-5 transition ${
                selected === idx ? "bg-blue-50/60 border-blue-200" : "bg-white"
              }`}
            >
              <button
                onClick={() => setSelected(selected === idx ? null : idx)}
                className="flex justify-between items-center gap-3 w-full text-left"
              >
                <span className="font-bold text-slate-900">{faq.q}</span>
                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  {selected === idx ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              {selected === idx && <p className="mt-3 text-gray-600 text-sm leading-relaxed">{faq.a}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
