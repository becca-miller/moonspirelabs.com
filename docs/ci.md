# CI/CD

Last audited: not yet

## Commands

- `npm run build`: builds the site into `dist/`. There are no tests, so a successful build is the check. Run before every push; CI runs the same command.

## What runs where

Workflow: `.github/workflows/deploy.yml`.

| Event | What runs |
|---|---|
| Push to any branch | Build (Linux) |
| Push to `main` | Build, then deploy `dist/` to DreamHost |
| Manual run (`gh workflow run deploy.yml --ref main`) | Build, then deploy. Use to redeploy without a new commit. |
| Push touching only `README.md`, `CLAUDE.md`, `docs/**`, or `draft_copy/**` | Nothing |

`src/content/*.md` is site content, so Markdown files are not skipped in general.

## Deploying

Push to `main`. The deploy job copies `dist/` to the server with `rsync --delete` over SSH, so files removed from the site are removed from the server too.

These server paths are protected from deletion because they are not part of the build:

- `.htaccess`
- `.well-known/` (SSL certificate renewal)
- `.dh-diag`
- `stats/`

To keep another file on the server that the build doesn't produce, add a `--filter='protect <path>'` line to the deploy step, or add the file to `src/` so it ships with the build.

## Secrets

Stored in the `production` environment, which only `main` can deploy from.

- `DEPLOY_SSH_KEY`: private half of a deploy-only SSH key. The public half is in the DreamHost user's `~/.ssh/authorized_keys`.
- `DEPLOY_KNOWN_HOSTS`: the server's host key line, from `ssh-keyscan`.
- `DEPLOY_HOST`: SSH hostname of the DreamHost server.
- `DEPLOY_USER`: DreamHost SSH user.
- `DEPLOY_PATH`: web directory on the server, e.g. `~/moonspirelabs.com`.

## Protections

| Protection | Status |
|---|---|
| Actions token read-only by default | already set, confirmed 2026-09-30 |
| Auto-delete merged branches | applied 2026-09-30 |
| Ruleset: main (blocks force-push and deletion) | applied 2026-09-30 |
| `production` environment limited to `main` | applied 2026-09-30 |
| `.claude/settings.json` agent rules | applied 2026-09-30 |

## Decisions and deviations

- No versioned releases, tags, or release branches. The site deploys from `main` on every push, because it is a static site with a single live copy and no installed versions to track.
- No full check tier. The build is the only check; there are no test suites.
- Deploys run without a required reviewer, so a push to `main` goes live without an approval step.
