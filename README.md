# Scitech Academy Web

Website profil Scitech Academy berbasis Next.js untuk menampilkan program belajar, kerja sama sekolah, portofolio karya, profil tim, testimoni, dan galeri pencapaian dalam tampilan modern.

## Highlights

- Landing page dengan section hero, statistik, program, partnership, FAQ, CTA, dan footer.
- Halaman profil untuk founder, mentor, visi, misi, dan nilai Scitech.
- Halaman galeri untuk prestasi, karya siswa, kegiatan, dan portofolio lomba.
- UI interaktif dengan reveal animation, tilt card, masonry gallery, dan mouse glow.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- GSAP
- Lucide React

## Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` setelah server berjalan.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Struktur Project

```text
src/
  app/
    page.tsx
    profile/page.tsx
    gallery/page.tsx
  components/
public/
```

## Aset Privat

Foto mentor atau founder yang memakai nama orang tidak ikut dikomit ke repository.

- Simpan aset privat lokal di `src/app/assets/private-mentors/` bila diperlukan.
- File aset bernama orang sudah masuk `.gitignore`.
- Komponen profil sudah memakai aset aman agar repo tetap bisa di-push ke GitHub tanpa foto personal.

## Deploy

Project ini bisa dideploy ke Vercel atau platform lain yang mendukung Next.js.

## Push ke GitHub

Jika repo GitHub Anda sudah dibuat, gunakan perintah berikut:

```bash
git remote add origin <URL-REPO-GITHUB-ANDA>
git add .
git commit -m "feat: prepare scitech web for github"
git branch -M main
git push -u origin main
```
