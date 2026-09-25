# Requirements — BicaraGo V1

## Tujuan
Membantu pengguna Indonesia berkomunikasi dalam Bahasa Inggris dengan cepat sekaligus memahami cara mengucapkannya.

## Functional Requirements
1. Terjemahan Indonesia ⇄ English.
2. Easy pronunciation untuk setiap kalimat English.
3. Text-to-Speech English.
4. Input teks; microphone/speech input pada tahap implementasi yang didukung perangkat.
5. Swap arah bahasa.
6. Frasa cepat dan pencarian.
7. Kategori percakapan.
8. Percakapan situasional dan contoh jawaban.
9. Favorit dan riwayat untuk user login.
10. Materi belajar dasar.
11. PWA/offline basic untuk konten terverifikasi.
12. Admin/content workflow.

## Non-functional
- Mobile-first, responsive, accessible, theme-aware.
- Clean URL; no hardcoded paths.
- Fast first interaction.
- Graceful degradation bila speech/API tidak tersedia.
- Database sebagai source of truth.
- OWASP ASVS 5.0 L2 baseline.

## Out of Scope V1
Multi-language selain id/en, advanced pronunciation scoring, social/community, payment/subscription, dan AI tutor penuh.
