# SFAB dev fixtures

Public fixture repository for local SFAB platform development.

## Purpose

- Stable pull requests with real diffs for PR list/detail UI testing
- Branch names match seeded task display IDs (`dev-4-…` → **DEV-4** in the dev org)
- Used by `pnpm dev:reset:local` when `DEV_SEED_INSTALLATION_ID` is set in `.dev.seed.vars`

## Pull requests

| Branch | Task | State |
|--------|------|-------|
| `dev-4-polish-task-list-ui` | DEV-4 | open |
| `dev-5-document-file-tree` | DEV-5 | open |
| `dev-11-restore-staging-deploy` | DEV-11 | open |
| `dev-8-onboarding-copy` | DEV-8 | merged |
| `experiment/graphql-api` | — | closed |

## Onboarding

Install the **sfab-dev** GitHub App on this repo, then set `DEV_SEED_INSTALLATION_ID` in `apps/platform/.dev.seed.vars`.
