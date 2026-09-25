# Freeze & Prototype-to-CI4 Mapping

Freeze only after requirement, DB, workflow/RBAC, security, prototype, JSON, screenshots, and test plan are aligned.

Mapping:
- database.sql → CI4 migrations
- data/*.json → seeders/fixtures
- workflow docs → Services
- RBAC → Filters/authorization services
- prototype → Layout/View
- route docs → Routes.php
- screenshots → UI acceptance
- security docs → Filters/Validation/Services/Tests

No redesign during migration without an explicit new UI approval.
