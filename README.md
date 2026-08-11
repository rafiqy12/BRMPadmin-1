# PRD Update - BRMP DIY Admin Dashboard

Dokumen ini menjelaskan kebutuhan produk dan arah pengembangan aplikasi web BRMP DIY yang saat ini difokuskan pada dashboard admin untuk mendukung operasional layanan pertanian.

---

## 1. Tujuan Produk

BRMP DIY dikembangkan sebagai sistem informasi terpadu yang membantu tim admin mengelola berbagai aktivitas operasional secara terpusat, termasuk:

- permohonan layanan
- progress laboratorium
- data benih dan stok
- pengguna sistem
- aktivitas operasional harian

---

## 2. Fokus Aplikasi Saat Ini

Versi saat ini berfokus pada tampilan dashboard admin yang modern, rapi, dan mudah dipantau.

### Fitur utama yang sudah disajikan

- Dashboard utama dengan ringkasan KPI
- Sidebar navigasi untuk modul utama
- Daftar permohonan terbaru dengan status
- Log aktivitas terkini
- Shortcut aksi cepat untuk operasional
- Modul preview: Permohonan, Laboratorium, Benih, dan User
- Visual tren bulanan dan status sampel laboratorium

---

## 3. Visi UI/UX

Desain aplikasi mengusung nuansa pertanian yang kuat dengan warna hijau, putih, dan elemen visual yang bersih serta profesional.

Karakteristik visual yang diutamakan:

- modern dan ergonomis
- mudah dibaca
- fokus pada efisiensi admin
- konsisten antar komponen

---

## 4. Pengguna Utama

Aplikasi ini ditujukan terutama untuk pengguna internal, terutama:

- Superadmin
- Admin Lab
- Admin Layanan
- Operator
- Viewer (rencana pengembangan berikutnya)

---

## 5. Ruang Lingkup Fitur

### Dashboard Admin

Menampilkan data penting dalam satu tampilan, seperti:

- jumlah permohonan hari ini
- sampel laboratorium yang diproses
- stok benih aktif
- akun aktif

### Modul yang menjadi fokus utama

- Permohonan
- Laboratorium
- Benih
- User
- Pengaturan

---

## 6. Teknologi yang Digunakan

- React.js
- Vite
- Tailwind CSS
- Lucide React Icons

---

## 7. Status Pengembangan Saat Ini

Saat ini aplikasi sudah memiliki tampilan dashboard admin yang fungsional sebagai prototype UI.

Status saat ini:

- UI dashboard sudah tersedia
- data masih bersifat statis/mock
- integrasi backend dan database belum diterapkan
- navigasi modul masih dalam tahap pengembangan lanjutan

---

## 8. Rencana Pengembangan Selanjutnya

Prioritas berikutnya adalah mengubah dashboard ini menjadi sistem yang lebih lengkap dan terhubung data nyata:

1. Integrasi autentikasi dan role-based access
2. Penghubungan data ke backend/database
3. CRUD untuk permohonan, laboratorium, benih, dan user
4. Tambah fitur real-time monitoring
5. Perluasan modul sesuai kebutuhan operasional BRMP DIY

---

## 9. Cara Menjalankan Proyek

```bash
# Install dependencies
npm install

# Jalankan developer server
npm run dev

# Build untuk produksi
npm run build
```
