# Architecture

## Layers
Client (Web/PWA) → CI4 Routes/Filters → Controller → Authorization/Validation → Service → Repository/Model → Database/Provider.

Controller hanya Request → Authorization → Validation → Service → Response.

## Services
- TranslationService
- PronunciationService
- SpeechService
- PhraseService
- LearningService
- ContentWorkflowService
- AuditService

## Provider strategy
TranslationService dapat memakai LocalVerifiedPhraseProvider terlebih dahulu lalu external/AI provider yang dikonfigurasi. API key hanya server-side.

## Target
CodeIgniter 4, PHP 8.3+, MySQL 8/MariaDB, Apache/Nginx, public/ document root, Auto Routing OFF production.
