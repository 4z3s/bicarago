# Translation Provider Contract

Input: source_language, target_language, source_text.
Output: translated_text, provider, confidence_if_available.

Rules: preserve meaning; do not invent context; provider output is untrusted input and must be validated/escaped. Verified local phrases take precedence when exact/approved.
