# Threat Model — V1

Assets: credentials, sessions, translation history, favorites, user progress, provider secrets, admin content, audit logs.

Threats: credential stuffing, CSRF, XSS, injection, IDOR/BOLA, privilege escalation, mass assignment, API abuse/cost exhaustion, malicious content, session fixation, secret exposure.

Controls: server validation, CSRF, output encoding, parameterized DB access, RBAC + ownership checks, rate limiting, session regeneration, CSP nonce/hash, HSTS production, nosniff, Referrer/Permissions-Policy, frame-ancestors, secret management, audit/security events.

Never log passwords, plaintext OTP, provider keys, access tokens, or secrets.
