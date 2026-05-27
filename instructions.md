<!-- markdownlint-disable MD013 -->

# Coding Instruction: snake_case variable naming convention

Scope:
- Applies to variable names, function parameter names, and local identifiers in source code across the repository unless a language's idiomatic style or external API requires otherwise.
- Applies primarily to Python, Ruby, and other snake_case-preferred languages; for mixed-language repos mark exceptions per-file.

Rule (enforced):
- Use lower-case letters and underscores only: `lower_case_with_underscores`.
- No camelCase or PascalCase for variables or parameters in files where this instruction applies.
- Constants may be UPPER_SNAKE_CASE if the language uses that convention.

Rationale:
- Improves readability and consistency across code reviewers and tooling.
- Matches the preferred style for many scripting languages and Python projects.

Examples:
- Good: `user_id`, `max_retries`, `file_path`
- Bad: `userId`, `MaxRetries`, `filePath`

Exceptions:
- When interacting with external libraries, APIs, or data using a different naming style (e.g., JSON fields using camelCase), keep external names as-is but map them to snake_case in internal variables.
- When a language's official style guide prescribes otherwise (e.g., Java, JavaScript for public API methods), follow that language's public API conventions; apply snake_case to internal/private identifiers where practical.

How to apply in prompts to Copilot / agents:
- "Use snake_case variable names for all variables and function parameters in this file. Convert any camelCase identifiers to snake_case."
- "Enforce lower_case_with_underscores for local variables; constants can be UPPER_SNAKE_CASE."

Suggested enforcement checks (manual or CI):
- Add a linter rule (e.g., flake8/pep8 for Python, custom ESLint rule for JS files flagged for conversion) to detect camelCase variables.
- Include a pre-commit hook to run the linter and fail on violations.

Questions / Clarifications to resolve:
- Should this apply to all languages in the repo, or only specific folders/languages? (default: repo-wide, with explicit file-level exceptions)
- For generated code or vendor files, should we skip enforcement? (default: skip vendor/generated directories)

Next steps I can take for you:
- Create a `copilot-instructions.md` or `instructions.md` file (already drafted and saved at the repo root).
- Add suggested linter config snippets for specific languages (Python/JS).
- Add a pre-commit hook example.

If you'd like any changes to the scope, strictness, or examples, tell me which parts to adjust.

NASA 10 Coding Rules (summary)
Purpose: Adopt a compact set of safety- and quality-focused rules inspired by NASA coding guidance. These are expressed here as pragmatic, enforceable practices for agents producing or modifying code.

- **1. Simplicity:** Prefer simple, clear implementations over clever or compact code. Simple code is easier to review, test, and verify.
- **2. Readability:** Use descriptive names, consistent formatting, and short functions so intent is obvious.
- **3. Robust error handling:** Detect and handle error conditions explicitly; fail safely and log context for diagnostics.
- **4. Defensive programming:** Validate all inputs and assert critical invariants; never trust external data.
- **5. Limit complexity:** Keep functions short and modules focused; apply single-responsibility principles.
- **6. Explicit assumptions:** Document assumptions, preconditions, and postconditions for critical code paths.
- **7. Testability:** Produce code with unit tests, integration tests, and reproducible test fixtures; include edge cases.
- **8. Static checks & reviews:** Run static analysis, linters, and peer reviews regularly; address high-severity findings promptly.
- **9. Traceability:** Link code changes to requirements, design decisions, or issue IDs so behavior is auditable.
- **10. No silent failures:** Avoid swallowing exceptions or returning ambiguous results; make failures explicit and actionable.

How agents should apply these rules:
- Always prefer readable code and add tests and error handling before completing a change.
- When generating or editing code, include a short note stating which NASA rule(s) were applied and how (e.g., "Added input validation — rule 4; added unit tests — rule 7").
- Treat static analysis/security findings of high severity as blockers; document medium/low findings and propose remediations.
- For changes touching safety- or security-critical code paths, require an explicit peer review and a traceable link to the requirement.

If you want, I can automatically add a short checklist that enforces these rules in PR templates or CI jobs.