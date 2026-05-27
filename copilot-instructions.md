<!-- markdownlint-disable MD013 -->

# Copilot Instructions — snake_case variable naming

Purpose
- Instruct Copilot and similar agents to prefer snake_case for internal variables, parameters, and local identifiers across the repository.

Scope
- Apply by default to all source files except explicit vendor/generated directories.
- Apply strictly to internal code (functions, methods, local variables, parameters). Public APIs that must follow language conventions or external contracts are exempt.

Rules
- Use `lower_case_with_underscores` for variable names and function parameters.
- Use `UPPER_SNAKE_CASE` for language-idiomatic constants where applicable.
- Do NOT introduce camelCase or PascalCase for new internal identifiers.
- Preserve external names (JSON keys, third-party API fields) and map them to snake_case when assigning to internal variables.

Behavior for Copilot and agents
- Always ask a short clarifying question if the required naming style is ambiguous for the target language or API boundary.
- When generating code, convert identifiers to snake_case unless the file's language idiom or public API requires otherwise.
- When editing code, prefer minimal diffs: convert local identifiers to snake_case and update references in the same logical scope.
- Avoid renaming across module/public API boundaries unless instructed and include a migration plan when you do.

Examples
- Good: `user_id`, `file_path`, `max_retries`
- Bad: `userId`, `filePath`, `MaxRetries`

Exceptions
- Java/JavaScript/TypeScript public APIs should follow their language conventions for exported identifiers; apply snake_case to internal/private identifiers where practical.
- Generated code, vendor libraries, and third-party modules: do not edit.

Suggested prompts for users
- "Use snake_case for all variable and parameter names in this file."
- "Refactor local variables to snake_case within this function only; do not change public APIs."

Enforcement suggestions
- Python: enable `flake8` with a naming plugin or `pylint` naming rules in CI.
- JavaScript/TypeScript: add a rule to ESLint for internal files (use overrides) or flag camelCase for non-exported variables.
- Add a pre-commit hook to run linters and fail on naming violations.

Notes
- If a language's idiomatic style or project conventions conflict with this instruction for public APIs, follow the language/project convention for those APIs and document the exception in a per-folder README.
- For large, cross-cutting renames, create a migration plan and a reviewable patch rather than an automatic rewrite.

NASA 10 Coding Rules (summary for Copilot)
Purpose: Apply a compact set of safety- and quality-focused practices when generating or refactoring code.

- Simplicity: generate clear, straightforward code rather than clever shortcuts.
- Readability: prefer descriptive names and small functions.
- Robust error handling: validate inputs and handle failures explicitly.
- Defensive programming: do not assume external data is valid.
- Limit complexity: break work into focused, testable functions.
- Document assumptions: state preconditions/postconditions where relevant.
- Testability: include unit tests and integration tests for generated logic.
- Static checks & reviews: ensure generated code passes linting and basic static analysis.
- Traceability: when producing changes, note what requirement or task it's tied to.
- No silent failures: avoid swallowing exceptions or returning ambiguous status values.

Behavioral hints for Copilot/agents:
- When suggesting edits, include a short note referencing the applicable NASA rule(s).
- If generating code that interacts with external systems, add validation and clear failure paths.
- For high-risk changes, prefer producing a patch with tests and an explicit review request rather than auto-committing.
