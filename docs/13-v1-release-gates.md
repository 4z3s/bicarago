# V1 Release Gates

## Gate A — Blueprint
Requirements, PRD, architecture, database, workflow/RBAC, pronunciation standard, security, offline strategy aligned.

## Gate B — Prototype
Home/Translate, Quick Phrases, Conversation, Learn, Favorites, responsive navigation, TTS, microphone fallback and unknown-phrase state demonstrated.

## Gate C — Content
Initial categories populated; English/Indonesian/pronunciation reviewed; no draft content shipped as verified content.

## Gate D — CI4 Mapping
Routes, migrations, models, services, filters, seeders and views mapped from frozen blueprint.

## Gate E — Security/Test
CSRF, XSS, injection, IDOR/BOLA, RBAC, rate limiting, session, CSP/headers, provider secret handling, responsive and PWA tests executed.

## Gate F — Production
HTTPS, public/ document root, debug OFF, Auto Routing OFF, secrets outside repo, backup/restore, smoke test, production provider configuration.

No gate may be marked PASS without execution evidence.
