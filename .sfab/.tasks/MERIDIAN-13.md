---
id: task_QuxcGIm8JdRt9mirWamuL
number: 13
display_id: MERIDIAN-13
title: "Atlas Console — Full Platform Story: Fixture Repo, PR Seeding, Dashboard, Onboarding & Repo Sync"
status: draft
priority: high
created: 2026-05-29T23:59:37.197Z
updated: 2026-05-29T23:59:37.197Z
comment_count: 0
---

# MERIDIAN-13 Atlas Console — Full Platform Story: Fixture Repo, PR Seeding, Dashboard, Onboarding & Repo Sync

# Atlas Console — Full Platform Story

## Summary

This is a comprehensive story covering the entire **Meridian Atlas** fixture repository and its role in the SFAB platform development lifecycle. The repo (`sfab-oss/meridian-atlas`) is a simulated customer monorepo that powers local development, PR testing, and platform-to-GitHub synchronization for Atlas Console.

---

## Part 1 — Repository Structure & Purpose

Meridian Atlas is a **fixture repository** designed to look and behave like a real customer monorepo linked to the SFAB platform. It enables engineers to run `pnpm dev:reset:local` from the SFAB monorepo, syncing pull requests into local D1 storage so the PR list, large diffs, and review UI can be tested against realistic GitHub data.

### Layout

```text
apps/console/                    Web client fixture stubs
  src/routes/onboarding/         Onboarding flow
    checklist.ts                 Step definitions (Connect GitHub, Import repo, Invite team)
    welcome.md                   Welcome copy rendered on first login
packages/ui/                     Shared UI components
  src/dashboard/widgets.ts       Dashboard widget registry (Open tasks, PRs in review)
scripts/                         Dev tooling
  generate-pr-fixtures.mjs       PR fixture generator (large, medium, small, onboarding modes)
.github/workflows/ci.yml         Minimal CI stub
.sfab/.docs/architecture/        Synced platform documentation
  repo-sync.md                   Repo sync architecture spec
```

No `pnpm-lock.yaml`, `package.json`, or lock file exists — this is scaffold, not a runnable project.

---

## Part 2 — Seeded Pull Requests

The README defines five seeded PR branches that simulate real engineering work:

| Branch | Task | Size | Purpose |
| --- | --- | --- | --- |
| `meridian-4-task-table-refactor` | MERIDIAN-4 | ~70 files, ~3k+ lines | Tests the platform's ability to handle large diffs in the review UI |
| `meridian-5-docs-sidebar-tree` | MERIDIAN-5 | ~20 files | Tests the document sidebar/tree navigation under moderate load |
| `meridian-11-fix-staging-deploy` | MERIDIAN-11 | CI hotfix (small) | Tests small, focused PRs — CI pipeline fix |
| `meridian-8-onboarding-copy` | MERIDIAN-8 | Merged | Tests the merged-PR state in the platform |
| `experiment/graphql-api-spike` | — | Closed experiment | Tests closed/unlinked PRs — no task auto-link |

Branch names embed the org slug (`meridian-`) so the platform auto-links them to task rows.

---

## Part 3 — PR Fixture Generator (`generate-pr-fixtures.mjs`)

The script at `scripts/generate-pr-fixtures.mjs` is the engine behind the seeded PRs. It takes a target directory and a mode, then writes synthetic files:

### Mode: `large` (MERIDIAN-4 — Task Table Refactor)
- Generates a **task table shell** component with `rowCount` and `virtualOverscan` props.
- Produces **48 column definition files** (`column-set-00.ts` through `column-set-47.ts`), each with 24 column entries, formatting functions, and comparators.
- Produces **12 table state hooks** (`use-task-table-0.ts` through `use-task-table-11.ts`) with memoized sorting/filter/page state.
- Produces **8 filter chip components** (`filter-chip-0.tsx` through `filter-chip-7.tsx`).
- **Total: ~70 files, ~3k+ lines** — designed to stress-test the diff viewer and review UI.

### Mode: `medium` (MERIDIAN-5 — Docs Sidebar Tree)
- Generates **18 doc tree node files** (`node-00.ts` through `node-17.ts`), each with typed interfaces and subtree builders at varying depths.
- Generates a root **`build-tree.ts`** that assembles all nodes into a sidebar tree.
- **Total: ~20 files** — tests moderate-scale navigation rendering.

### Mode: `small` (MERIDIAN-11 — Fix Staging Deploy)
- Overwrites `.github/workflows/ci.yml` with a restored version that includes `pnpm/action-setup@v4` and a frozen-lockfile install step.
- Simulates a real CI hotfix — single file, clear before/after.

### Mode: `onboarding` (MERIDIAN-8 — Onboarding Copy)
- Writes updated `welcome.md` with refreshed onboarding copy.
- Writes updated `checklist.ts` with three steps: Connect GitHub, Import a repository, Invite your team.
- Simulates a content/copy change PR — already merged on main.

---

## Part 4 — Dashboard Widget Registry

`packages/ui/src/dashboard/widgets.ts` defines the baseline widget registry on `main`:

```typescript
export const WIDGET_REGISTRY = [
  { id: "open-tasks", title: "Open tasks" },
  { id: "in-review", title: "PRs in review" },
];
```

Two widgets — one for open tasks count, one for PRs in review. The `getWidget(id)` lookup function supports dynamic widget rendering. This is the **main-branch baseline** that the large PR (MERIDIAN-4) builds on top of with its task table infrastructure.

---

## Part 5 — Onboarding Flow

The onboarding route (`apps/console/src/routes/onboarding/`) provides:

1. **`checklist.ts`** — Three-step onboarding array:
   - `link-github` — Connect GitHub (install the Meridian GitHub App)
   - `import-repo` — Import a repository (choose the default branch)
   - `invite-team` — Invite your team (send invites from org settings)

2. **`welcome.md`** — Markdown welcome page rendered on first login:
   > Meridian Labs teams use Atlas to plan work, review code, and keep docs in sync with GitHub.

This was updated in the merged MERIDIAN-8 PR and represents the current onboarding experience.

---

## Part 6 — Repo Sync Architecture (`repo-sync.md`)

The document at `.sfab/.docs/architecture/repo-sync.md` defines how the SFAB platform syncs managed content to GitHub:

### Sync Paths
- **Documents** → `.sfab/.docs/` (Markdown, mirrors `repo_documents.path`)
- **Tasks** → `.sfab/.tasks/` (one file per task, filename is the task ID)

### Sync Direction
**Platform → GitHub only.** Engineers author docs and task specs in the web UI. The GitHub App commits changes to the default branch (or a dispatch branch for contractor work).

### Branch Auto-Linking
PRs opened against the repo are indexed by the platform. Branch names containing a task display ID (e.g. `meridian-4-task-table-refactor`) automatically link back to the corresponding task row.

### Conflict Handling
If a file changes on both GitHub and the platform since the last sync, the document is marked **unsynced** with a sidebar badge until an operator resolves the drift.

### Status
This doc is marked **Draft — not yet pushed from the platform seed**, meaning the sync mechanism it describes has not been activated in production yet.

---

## Part 7 — CI Pipeline

`.github/workflows/ci.yml` is a minimal stub on `main`:

```yaml
name: CI
on:
  push:
    branches: [main]
  pull_request:
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: echo "Atlas Console fixture CI"
```

The `small` fixture mode (MERIDIAN-11) replaces this with a more realistic version that includes `pnpm/action-setup@v4` and a frozen-lockfile install, simulating a CI fix for staging deploys.

---

## Part 8 — Cross-Cutting Themes & Open Questions

### Testing Surface
The fixture repo gives SFab engineers confidence in:
- **Large diff rendering** (3k+ line PRs)
- **Moderate-scale navigation** (docs sidebar tree)
- **Small focused changes** (CI hotfix)
- **Content/copy updates** (onboarding)
- **PR lifecycle states** (open, merged, closed)
- **Task auto-linking** (branch name → task ID parsing)

### Open Questions
1. **No package manifest** — There is no `package.json`, `tsconfig.json`, or lock file. Should the fixture repo gain a minimal manifest to support real build/lint CI, or remain pure scaffold?
2. **Sync activation** — The `repo-sync.md` doc is in draft status. When should platform → GitHub sync be enabled, and what is the rollout plan?
3. **Widget expansion** — The dashboard currently has two widgets. What is the roadmap for additional widgets (e.g., recent activity, deployment status, team workload)?
4. **Onboarding depth** — Three steps is minimal. Should the onboarding flow expand to include repository configuration, branch protection setup, or notification preferences?
5. **Conflict resolution UX** — The unsynced badge is defined but the resolution flow is unspecified. How should operators reconcile drift?

### Dependencies & Risks
- The fixture generator depends on Node.js `fs` and `path` — no runtime dependencies.
- PR seeding requires the **sfab-dev** GitHub App to be installed and `DEV_SEED_INSTALLATION_ID` to be configured.
- The repo is public (`sfab-oss` org) — any secrets or environment-specific config must stay in the SFab monorepo, not here.

---

## Acceptance Criteria

- [ ] All five seeded PR branches are accessible and generate correct fixture files via `generate-pr-fixtures.mjs`
- [ ] Dashboard widget registry renders both widgets and supports `getWidget()` lookup
- [ ] Onboarding flow displays all three steps and renders `welcome.md` copy
- [ ] CI workflow runs (even as a stub) on push to `main` and on PRs
- [ ] `repo-sync.md` architecture is reviewed and approved before sync activation
- [ ] No `package.json` or lock file is introduced without explicit decision (see open questions)
