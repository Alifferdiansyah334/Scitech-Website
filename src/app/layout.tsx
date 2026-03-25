import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Scitech Academy - Sekolah Robotik & Coding Indonesia",
  description:
    "Scitech Academy menghadirkan kurikulum Robotics, Coding, dan STEM terbaik. Belajar seru, hasil nyata, dan berprestasi.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${sora.variable} ${jakarta.variable} font-sans antialiased text-gray-700`}
      >
        {children}
      </body>
    </html>
  );
}
