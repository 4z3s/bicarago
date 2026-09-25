-- BicaraGo PRE-CI4 V0.1.0
-- Source-of-truth schema draft. Review/freeze before CI4 migrations.

CREATE TABLE languages (
 id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 code VARCHAR(10) NOT NULL,
 name VARCHAR(100) NOT NULL,
 native_name VARCHAR(100) NOT NULL,
 is_enabled TINYINT(1) NOT NULL DEFAULT 1,
 created_at DATETIME NULL,
 updated_at DATETIME NULL,
 UNIQUE KEY uq_languages_code (code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE categories (
 id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 slug VARCHAR(120) NOT NULL,
 name VARCHAR(150) NOT NULL,
 sort_order INT UNSIGNED NOT NULL DEFAULT 0,
 is_active TINYINT(1) NOT NULL DEFAULT 1,
 created_at DATETIME NULL,
 updated_at DATETIME NULL,
 deleted_at DATETIME NULL,
 UNIQUE KEY uq_categories_slug (slug),
 KEY idx_categories_active_sort (is_active, sort_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE phrases (
 id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 category_id BIGINT UNSIGNED NULL,
 content_key VARCHAR(120) NOT NULL,
 status ENUM('draft','review','verified','published','archived') NOT NULL DEFAULT 'draft',
 created_by BIGINT UNSIGNED NULL,
 verified_by BIGINT UNSIGNED NULL,
 verified_at DATETIME NULL,
 created_at DATETIME NULL,
 updated_at DATETIME NULL,
 deleted_at DATETIME NULL,
 UNIQUE KEY uq_phrases_content_key (content_key),
 KEY idx_phrases_category_status (category_id,status),
 CONSTRAINT fk_phrases_category FOREIGN KEY (category_id) REFERENCES categories(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE phrase_translations (
 id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 phrase_id BIGINT UNSIGNED NOT NULL,
 language_id BIGINT UNSIGNED NOT NULL,
 text_value TEXT NOT NULL,
 is_primary TINYINT(1) NOT NULL DEFAULT 1,
 created_at DATETIME NULL,
 updated_at DATETIME NULL,
 UNIQUE KEY uq_phrase_translation (phrase_id,language_id,is_primary),
 KEY idx_pt_language (language_id),
 CONSTRAINT fk_pt_phrase FOREIGN KEY (phrase_id) REFERENCES phrases(id) ON DELETE CASCADE,
 CONSTRAINT fk_pt_language FOREIGN KEY (language_id) REFERENCES languages(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE phrase_pronunciations (
 id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 phrase_translation_id BIGINT UNSIGNED NOT NULL,
 scheme ENUM('easy_id','ipa') NOT NULL DEFAULT 'easy_id',
 pronunciation_text TEXT NOT NULL,
 status ENUM('draft','review','verified') NOT NULL DEFAULT 'draft',
 created_at DATETIME NULL,
 updated_at DATETIME NULL,
 UNIQUE KEY uq_pronunciation_scheme (phrase_translation_id,scheme),
 CONSTRAINT fk_pron_translation FOREIGN KEY (phrase_translation_id) REFERENCES phrase_translations(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE phrase_examples (
 id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 phrase_id BIGINT UNSIGNED NOT NULL,
 sort_order INT UNSIGNED NOT NULL DEFAULT 0,
 created_at DATETIME NULL,
 updated_at DATETIME NULL,
 KEY idx_examples_phrase_sort (phrase_id,sort_order),
 CONSTRAINT fk_examples_phrase FOREIGN KEY (phrase_id) REFERENCES phrases(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE conversation_scenarios (
 id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 category_id BIGINT UNSIGNED NULL,
 slug VARCHAR(150) NOT NULL,
 title VARCHAR(200) NOT NULL,
 status ENUM('draft','review','verified','published','archived') NOT NULL DEFAULT 'draft',
 created_at DATETIME NULL,
 updated_at DATETIME NULL,
 deleted_at DATETIME NULL,
 UNIQUE KEY uq_scenario_slug (slug),
 CONSTRAINT fk_scenario_category FOREIGN KEY (category_id) REFERENCES categories(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE conversation_steps (
 id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 scenario_id BIGINT UNSIGNED NOT NULL,
 phrase_id BIGINT UNSIGNED NOT NULL,
 step_no INT UNSIGNED NOT NULL,
 speaker ENUM('user','partner') NOT NULL,
 created_at DATETIME NULL,
 updated_at DATETIME NULL,
 UNIQUE KEY uq_scenario_step (scenario_id,step_no),
 CONSTRAINT fk_step_scenario FOREIGN KEY (scenario_id) REFERENCES conversation_scenarios(id) ON DELETE CASCADE,
 CONSTRAINT fk_step_phrase FOREIGN KEY (phrase_id) REFERENCES phrases(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Identity/user tables are intentionally finalized after authentication requirements review.
-- Favorites/history/progress will reference authenticated users with explicit ownership.
