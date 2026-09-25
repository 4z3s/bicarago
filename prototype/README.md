# BicaraGo Interactive Prototype V0.1.0

Status: **canonical candidate — belum freeze**.

## Jalankan di Windows/Laragon
```powershell
cd D:\Github-4z3s\bicarago\prototype
php -S localhost:8090
```
Buka `http://localhost:8090`.

## Fitur yang sudah dapat diuji
- Indonesia ⇄ English untuk verified/local seed phrase.
- Cara baca English yang mudah untuk penutur Indonesia.
- Text-to-Speech menggunakan kemampuan browser/perangkat.
- Speech input bila Web Speech Recognition tersedia.
- Frasa Cepat + kategori.
- Percakapan/listening.
- Favorit lokal.
- Latihan dasar.
- Light/dark.
- Responsive/mobile bottom navigation.

## Prinsip
Input di luar dataset lokal tidak akan diberi terjemahan palsu. Prototype memberi status bahwa provider online belum diaktifkan.

## Belum termasuk
Authentication/server database, cloud sync, external translation provider, CI4 backend, dan pronunciation scoring.

Setelah UI/UX disetujui, buat screenshot references, audit acceptance, lalu freeze sebelum mapping ke CI4.
