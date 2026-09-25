# OWASP ASVS 5.0 — Level 2 Baseline

Target: Level 2.

Gates before production:
- Authentication/session controls tested.
- Authorization/ownership tested server-side.
- Input validation/output encoding tested.
- CSRF/XSS/injection/IDOR/BOLA tests.
- Rate limiting on authentication and expensive translation endpoints.
- Security headers/CSP verified.
- Secrets outside repository.
- Audit events exclude sensitive values.
- Debug OFF and HTTPS enforced in production.

PASS/VERIFIED may only be recorded after real tests.
