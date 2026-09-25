# Workflow & RBAC

## Roles
- guest: translate, phrase, public learning.
- user: guest + favorite, history, progress.
- content_editor: draft/update content.
- translator: linguistic verification.
- moderator: review/feedback moderation.
- admin: operational administration.
- superadmin: system configuration and RBAC.

Frontend registration always receives lowest user role. No self-assignment of elevated roles.

## Content Status
draft → review → verified → published → archived

Transitions occur through ContentWorkflowService and are audited. Menu visibility is not authorization; server-side permission checks remain mandatory.
