# Routes / API Draft

Auto Routing OFF.

Public:
- GET /
- POST /translate
- GET /phrases
- GET /phrases/{key}
- GET /conversation
- GET /learn

Authenticated:
- GET/POST /favorites
- GET /history
- GET /progress

Admin namespace requires RBAC filters.

Translation endpoint requires server validation, size limits, rate limiting, and provider abstraction. Never expose provider credentials to client.
