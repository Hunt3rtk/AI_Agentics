# AI Agentics

Repository for custom Copilot agents, agent instructions, design conventions, and workflow enforcement files.

## What’s included
- `.github/agents/` custom agent definitions
- `.github/workflows/` CI and PR validation workflows
- `.github/PULL_REQUEST_TEMPLATE.md` merge checklist template
- `instructions.md` and `copilot-instructions.md` repository guidance
- `design-conventions.md` frontend design guidance

## Purpose
This repository centralizes the agent behavior and review rules used by the project so code, design, and validation stay consistent.

## Branch workflow
- `main` is the production branch.
- `qa` is the branch for testing and verification.
- Production-ready changes should be validated in `qa` before merging to `main`.

## Getting started
1. Open the repository in VS Code.
2. Review the agent files under `.github/agents/`.
3. Use the PR template when proposing changes.
