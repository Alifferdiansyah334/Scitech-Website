import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Awalnya anak saya kecanduan game, sekarang malah bikin game sendiri lewat kelas Coding di Scitech. Nilai matematikanya juga ikut naik!",
      author: "Ibu Ani",
      role: "Orang Tua Siswa",
    },
    {
      text: "Kerja sama ekskul dengan Scitech sangat profesional. Mentornya disiplin, RPP jelas, dan sekolah kami langsung bawa pulang piala di tahun pertama.",
      author: "Bpk. Budi",
      role: "Kepala Sekolah SD Harapan",
    },
    {
      text: "Alhamdulillah ketiga anak kami sangat suka robotik. Kakak pembimbing Scitech baik, ramah, sabar, komunikatif, dan bisa jadi teman anak-anak. Saat lomba, kakak pembimbing juga tepat melihat potensi anak dan sabar mendampingi persiapan sampai pelaksanaan. Anak-anak jadi makin semangat latihan. Terima kasih untuk semua kakak pembimbing, semoga makin baik ke depannya.",
      author: "Rury",
      role: "Bunda dari Azka Wafiq Alfariz, Anandya Shadan Alfariz, Fardzan Ahza Alfariz",
    },
    {
      text: "Selama 7 bulan dilatih kakak Scitech, tiga anak kami terlihat banyak kemajuan. Kakak pembimbing juga sabar, termasuk saat anak nomor 2 dan 3 moody atau jenuh menunggu kejuaraan. Terima kasih kak Akhil, kak Alif, kak Rara, dan kak Shabira yang sudah berbagi ilmu dan kesabarannya. Semangat.",
      author: "Kurnia Munfiati Desfitri, ST",
      role: "Orang Tua Siswa",
    },
  ];

  return (
    <section className="section-shell py-20 bg-[linear-gradient(180deg,#edf4ff_0%,#f9fbff_100%)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-flex px-4 py-1.5 rounded-full bg-white border border-blue-100 text-xs font-semibold tracking-[0.14em] uppercase text-scitech-blue mb-4">
            Testimoni
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900">Cerita Orang Tua & Sekolah</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-7">
          {testimonials.map((item, idx) => (
            <article key={idx} className="fluid-card bg-white rounded-2xl p-7 relative">
              <Quote className="absolute top-5 right-5 text-blue-100" size={38} />
              <p className="text-gray-700 italic leading-relaxed mb-6">&ldquo;{item.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-scitech-blue to-scitech-orange" />
                <div>
                  <h5 className="font-bold text-sm text-slate-900">{item.author}</h5>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
