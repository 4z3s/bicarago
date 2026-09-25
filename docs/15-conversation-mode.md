# Two-Way Conversation Mode

## Goal
Dua orang menggunakan satu perangkat bergantian tanpa harus mengubah pengaturan setiap kali.

## Interaction
- Indonesia speaker → STT id-ID → TranslationService → English → easy pronunciation → optional English TTS.
- English speaker → STT en-US → TranslationService → Indonesian → optional Indonesian TTS.
- Auto-speak dapat dimatikan.
- Transcript dan result terlihat pada panel terpisah.
- Riwayat sesi bersifat sementara pada prototype dan dapat dihapus.

## Production requirements
Translation provider harus berada di backend, provider secrets tidak pernah dikirim ke browser, request dibatasi/rate-limited, timeout/failure state eksplisit, dan transcript/audio mengikuti privacy policy. Audio tidak disimpan secara default.

## Accessibility
Conversation tetap harus dapat dipakai melalui teks bila microphone/speech API tidak tersedia.
