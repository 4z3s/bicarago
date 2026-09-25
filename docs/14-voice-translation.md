# Voice Translation — V1

## UX
BicaraGo menyediakan dua entry point:
1. **Bicara Langsung** — speech recognition mengisi teks dan menerjemahkan setelah ujaran selesai.
2. **Rekam Suara** — pengguna dapat berbicara lebih panjang lalu menekan Selesai; transcript kemudian diterjemahkan.

## Pipeline
User gesture → microphone permission → speech recognition → editable transcript → TranslationService → easy pronunciation (English output) → optional TTS.

## Privacy
- Mikrofon hanya dimulai setelah tindakan pengguna.
- Prototype tidak menyimpan file audio.
- Transcript hanya berada di UI/local flow kecuali kelak pengguna mengirimnya ke backend/provider.
- Production wajib memberi disclosure bila provider cloud memproses audio/transcript.
- Penyimpanan rekaman di masa depan harus opt-in dengan retention/delete policy.

## Failure
Permission denied, unsupported API, no speech, network/provider failure, dan unknown local phrase harus menghasilkan state yang jelas. Sistem tidak boleh mengarang hasil.

## Production architecture
Browser speech API hanya prototype/fallback. CI4 production menggunakan `SpeechToTextService` dengan provider abstraction sehingga browser/native/cloud provider dapat diganti tanpa mengubah UI.
