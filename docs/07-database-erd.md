# Database / ERD

## Core V1
languages 1—N phrase_translations N—1 phrases N—1 categories.

phrases 1—N phrase_translations.
phrase_translations 1—N phrase_pronunciations.
phrases 1—N phrase_examples.
conversation_scenarios 1—N conversation_steps N—1 phrases.

## Rules
- `languages.code` unique.
- `phrases.content_key` stable unique business key.
- Translation and pronunciation are separate entities.
- English easy pronunciation uses scheme `easy_id`.
- Content status follows workflow service.
- Soft delete only where business history requires it.
- User-owned tables must include explicit owner/user FK and authorization indexes.
- Database.sql remains source of truth until blueprint freeze, then maps 1:1 to CI4 migrations.
