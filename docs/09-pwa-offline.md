# PWA / Offline

V1 caches application shell and a versioned set of verified phrases/categories. Draft/review content must never enter public offline packs.

Offline behavior:
1. App shell opens.
2. Search verified local phrase data.
3. TTS uses supported device/browser capability when available.
4. If online-only translation is required while offline, clearly report that it is unavailable; do not fabricate output.

Cache versions must support safe invalidation after content updates.
