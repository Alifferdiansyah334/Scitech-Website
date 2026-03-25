<div align="center">

# Scitech Academy Website

### Website company profile Scitech Academy

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

<img src="https://skillicons.dev/icons?i=nextjs,react,ts,tailwind,nodejs,npm&theme=light" alt="Tech Stack Icons" />

</div>

## Deskripsi

Repositori ini berisi website company profile Scitech Academy yang dibangun menggunakan Next.js. Website digunakan untuk menampilkan informasi program, profil tim, kerja sama sekolah, testimoni, serta dokumentasi kegiatan dan prestasi siswa.

## Fitur Utama

- Halaman utama yang memuat hero section, statistik, program, partnership, testimoni, FAQ, dan call to action.
- Halaman profil yang menampilkan founder, mentor, visi, misi, dan nilai lembaga.
- Halaman galeri untuk dokumentasi kegiatan, karya siswa, dan pencapaian kompetisi.
- Komponen antarmuka interaktif seperti reveal animation, tilt card, masonry gallery, dan mouse glow.

## Tech Stack

| Kategori | Teknologi |
|---|---|
| Framework | Next.js 16 |
| Library | React 19 |
| Bahasa | TypeScript |
| Styling | Tailwind CSS 4 |
| Animasi | GSAP |
| Ikon | Lucide React, React Icons |

## Struktur Halaman

```text
/
|-- Home
|-- /profile
|-- /gallery
```

## Menjalankan Project

```bash
npm install
npm run dev
```

Website dapat diakses melalui `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Struktur Folder

```text
src/
  app/
    page.tsx
    profile/page.tsx
    gallery/page.tsx
    assets/
  components/
public/
```

## Catatan Aset

Beberapa file foto yang menggunakan nama personal tidak disertakan ke repository publik.

- File tersebut telah ditambahkan ke `.gitignore`.
- Komponen profil telah disesuaikan agar repository tetap dapat dibangun tanpa aset privat.
- Jika diperlukan untuk penggunaan lokal, aset dapat disimpan di `src/app/assets/private-mentors/`.

## Deployment

Project ini dapat dideploy ke platform yang mendukung Next.js, termasuk Vercel, Netlify, atau server Node.js.

## Repository

Remote repository:

```bash
https://github.com/Alifferdiansyah334/Scitech-Website.git
```

## Push ke GitHub

```bash
git push -u origin main
```
