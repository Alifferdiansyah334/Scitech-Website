"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../app/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Program", href: "/#program" },
    { name: "Kerja Sama Sekolah", href: "/#sekolah", isBlue: true },
    { name: "Prestasi", href: "/#portofolio" },
    { name: "Gallery", href: "/gallery" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <nav className={`glass-nav fixed w-full z-50 ${isScrolled ? "nav-scrolled" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? "h-16 md:h-16" : "h-16 md:h-20"
          }`}
        >
          <div className="flex-shrink-0 flex items-center gap-3">
            <div
              className={`bg-white rounded-xl flex items-center justify-center shadow-md shadow-blue-500/30 border border-blue-100 transition-all duration-300 overflow-hidden ${
                isScrolled ? "w-9 h-9 md:w-9 md:h-9" : "w-9 h-9 md:w-10 md:h-10"
              }`}
            >
              <Image
                src={logoImage}
                alt="Logo Scitech Academy"
                width={isScrolled ? 30 : 32}
                height={isScrolled ? 30 : 32}
                className="object-contain"
                priority
              />
            </div>
            <span
              className={`font-heading font-bold text-[#073a8e] tracking-tight transition-all duration-300 ${
                isScrolled ? "text-base md:text-xl" : "text-base md:text-2xl"
              }`}
            >
              SCITECH<span className="text-scitech-orange">ACADEMY</span>
            </span>
          </div>

          <div className="hidden xl:flex items-center gap-2 bg-white/75 border border-blue-100 rounded-full px-2 py-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold transition whitespace-nowrap ${
                  link.isBlue
                    ? "text-scitech-blue hover:bg-blue-50"
                    : "text-slate-600 hover:bg-slate-100 hover:text-scitech-blue"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden 2xl:flex">
            <a
              href="https://wa.me/6287877955526?text=Halo%20Scitech,%20saya%20ingin%20daftar%20trial%20class"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lift shine bg-scitech-orange hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-bold shadow-lg shadow-orange-600/30 inline-flex items-center gap-1"
            >
              Daftar Trial Gratis <ArrowRight size={16} />
            </a>
          </div>

          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-scitech-blue focus:outline-none p-2 rounded-lg hover:bg-blue-50 transition"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-lg border-t border-blue-100">
          <div className="px-3 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 rounded-lg text-sm font-semibold ${
                  link.isBlue ? "text-scitech-blue bg-blue-50" : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/6287877955526"
              className="block px-3 py-2 rounded-lg text-sm font-bold text-scitech-orange hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Daftar Trial Class
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
