# Moonspire Labs website

## CI and branches

- Run `npm run build` before pushing. CI runs the same command. Details in `docs/ci.md`.
- Every push to `main` deploys to the live site at moonspirelabs.com.
- Working interactively with the user: follow their direction on branches.
- Working unattended (cloud session, background agent, routine): work on a new branch, never `main`. Push it and open a pull request, and don't merge it.
- Never trigger deploys manually, change GitHub settings or secrets, or touch the DreamHost server directly. Propose the command instead.
- Don't edit `.github/workflows/` or `.claude/settings.json` without asking.
