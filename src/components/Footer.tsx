import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import logoImage from "../app/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(180deg,#08101f_0%,#050913_100%)] text-slate-300 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4 text-white">
            <Image src={logoImage} alt="Logo Scitech Academy" width={26} height={26} className="object-contain" />
            <span className="font-heading font-bold text-lg uppercase">SCITECH ACADEMY</span>
          </div>
          <p className="mb-4 leading-relaxed">Platform edukasi STEM terintegrasi untuk mencetak inovator masa depan.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-white transition"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-white transition"><FaYoutube size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Program</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-scitech-orange transition">Robotics</a></li>
            <li><a href="#" className="hover:text-scitech-orange transition">Coding Kids</a></li>
            <li><a href="#" className="hover:text-scitech-orange transition">IoT & Smart Home</a></li>
            <li><a href="#" className="hover:text-scitech-orange transition">Competition Class</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Kemitraan</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-scitech-orange transition">Kerja Sama Sekolah</a></li>
            <li><a href="#" className="hover:text-scitech-orange transition">Sponsorship</a></li>
            <li><a href="#" className="hover:text-scitech-orange transition">Karir Mentor</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Kontak</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2"><FaWhatsapp size={16} /> 0878-7795-5526</li>
            <li className="flex items-center gap-2"><Mail size={16} /> halo@scitechacademy.id</li>
            <li className="flex items-center gap-3"><MapPin size={22} className="flex-shrink-0" /> Ruko Grand Tech No. 12, Jakarta Selatan</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
        <p>&copy; {new Date().getFullYear()} Scitech Academy Indonesia. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
