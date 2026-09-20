# @barzm/skills

Open-source collection of shared [Agent Skills](https://agentskills.io/home) for coding agents.

This repo will grow into a library of reusable skills. Right now it ships one.

## Skills

### [`postgres-agent-comments`](skills/postgres-agent-comments/)

Create, audit, or generate migrations for terse, LLM-friendly PostgreSQL `COMMENT ON` documentation.

Use it when documenting user-defined database objects or reviewing comment coverage and quality. The skill:

- Drafts business-meaningful comments from schema, models, migrations, and docs (DB access optional for drafting)
- Audits coverage with a keep / add / replace / ambiguous / approved-skip ledger
- Emits deterministic `COMMENT ON` SQL; applies only when you explicitly authorize it
- Treats [reference/PG_COMMENT_REFERENCE.md](skills/postgres-agent-comments/reference/PG_COMMENT_REFERENCE.md) as the authoritative snapshot of PostgreSQL `COMMENT ON` mechanics

Install refreshes that snapshot via `postinstall` (`scripts/fetch_pg_docs.sh`). You can also run the script manually when you need a current upstream pull.

## Install

Install with the [skills.sh](https://www.skills.sh/) CLI:

```bash
# Install all skills from this repo (project scope)
npx skills add barzm/skills

# List available skills without installing
npx skills add barzm/skills --list

# Install a specific skill
npx skills add barzm/skills --skill postgres-agent-comments

# Install globally (all projects)
npx skills add barzm/skills -g

# Non-interactive (CI / scripts)
npx skills add barzm/skills --skill postgres-agent-comments -y
```

Works with Cursor, Claude Code, Codex, and other agents supported by the skills CLI.

To develop against this repo locally and refresh the PostgreSQL reference snapshot:

```bash
pnpm install
```

## Build

Package skills into Agent Skills discovery artifacts (`dist/index.json` + skill archives):

```bash
pnpm build
# optional: pass the artifact base URL used in index.json
pnpm build -- https://github.com/barzm/skills/releases/download/<tag>
```

`dist/` is gitignored. Publish those artifacts (e.g. a GitHub Release) when you want discovery installs; `npx skills add barzm/skills` installs directly from the repo’s `skills/` tree.

## Release

Tag a semver version to build and publish `@barzm/skills` to npm:

```bash
git tag v1.0.0
git push origin v1.0.0
```

Requires repo secret `NPM_TOKEN` (automation or granular access token with publish rights for `@barzm`).

## License

MIT
