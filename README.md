# BicaraGo

**Bicara • Dengar • Pahami**

BicaraGo adalah aplikasi komunikasi dan pembelajaran praktis **Bahasa Indonesia ⇄ Bahasa Inggris** dengan fokus pada terjemahan, cara baca yang mudah dipahami penutur Indonesia, audio pronunciation, frasa cepat, dan percakapan situasional.

## Status
PRE-CI4 Blueprint v0.1.0 — fokus V1 Indonesia ⇄ English.

## Prinsip V1
- Guest dapat memakai terjemahan/frasa dasar tanpa login.
- Setiap konten inti memiliki: teks Indonesia, English, easy pronunciation, kategori, dan contoh.
- Cara baca ramah penutur Indonesia adalah fitur utama; IPA opsional untuk fase berikutnya.
- Arsitektur data tetap future-proof untuk penambahan bahasa.
- AI/API provider tidak boleh menjadi single point of failure.
- Prototype yang disetujui kelak menjadi canonical UI/UX reference dan tidak boleh di-redesign saat migrasi CI4.
- Security baseline: OWASP ASVS 5.0 Level 2.

## Tahapan
Requirement → Business Process → PRD/Scope → Architecture/Modules → Database/ERD → Workflow → RBAC → Security → Prototype → JSON → Screenshot Reference → Test Plan → Audit/Freeze → Mapping CI4 → Migration → Testing → Production.

Lihat folder `docs/`, `data/`, `security/`, `tests/`, dan `prototype/`.
