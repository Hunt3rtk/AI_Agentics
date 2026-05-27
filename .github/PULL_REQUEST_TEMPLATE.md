<!-- markdownlint-disable MD013 -->

## Summary

Provide a concise summary of the change and its purpose.

## Related issues
- Fixes: # (link issue)
- Related-to: # (link other issues)

## Type of change
- Bug fix
- New feature
- Refactor
- Docs
- CI / test

## Description
Provide a more detailed description of the change, why it was needed, and any design decisions.

## How to test
Steps to reproduce and verify the change locally, including commands and test data.

## Checklist (required)
- [ ] I have added/updated unit tests and they pass locally.
- [ ] I have run integration/E2E tests where applicable.
- [ ] Linting and static analysis pass locally.
- [ ] Security scans (dependency SCA / SAST) were run and any high/critical issues are addressed or documented.
- [ ] I have updated documentation where relevant (README, design notes).
- [ ] This change includes traceability to requirements or issue IDs (see 'Related issues').

## NASA Rules Checklist (pick applied rules and explain)
Please list which NASA 10 Coding Rules apply and how you addressed each. Example:
- Rule 1 (Simplicity): "Used straightforward loop instead of nested comprehensions; added comment explaining intent."
- Rule 4 (Defensive programming): "Added input validation and explicit error handling in `validate_user_input()`."

## Testing summary / Results
- Unit tests: `pytest`/`npm test` output snippet or link to CI artifact
- Integration tests: pass/fail summary
- E2E tests: pass/fail summary
- Security scan results: short summary and links to reports

## Migration / Rollout notes (if applicable)
- DB migrations, data backfill, downtime windows, feature flags.

## Reviewer notes
- Anything special the reviewer should look for (race conditions, data model changes, security impacts).

## Branch flow
- Production changes should merge into `main` only after passing through `qa` for testing and verification.
- Use `qa` for validation work, then open the production PR from `qa` into `main` when checks pass.

---
By submitting this PR you confirm that you followed the project's contributing guidelines and the NASA coding rules where applicable. Include short notes about which rules were enforced and how in the NASA Rules Checklist above.
