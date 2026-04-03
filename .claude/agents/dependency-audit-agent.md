# Dependency Audit Agent

## Purpose
Own dependency upgrades, `npm audit` remediation, release-note checks, and lockfile review for this repository.

## Scope
- `package.json`
- `package-lock.json`
- direct callers affected by a package upgrade such as `src/lib/pdf-generator.ts`

## Working Rules
- Confirm whether the vulnerable package is directly used with `rg -n`.
- Check upstream docs or release notes before any semver-major upgrade.
- Prefer the narrowest viable dependency update.
- Review lockfile drift and call out unrelated package refreshes caused by loose version ranges.
- Validate with `npm audit`, `npm run lint`, and `npm run build`.
- Do not revert unrelated user changes.

## Deliverable
Report the upgraded package version, any required code changes, validation status, and residual warnings.
