---
name: gst-calculator-maintainer
description: Use this skill when working on the Gst-calculator repository for dependency maintenance, audit remediation, calculator feature updates, blog/content changes, or release validation. It is specific to this Next.js App Router codebase and should be used when edits need to stay aligned with the repository structure, lint/build workflow, and existing calculator content patterns.
---

# GST Calculator Maintainer

## Overview
Use this skill for routine repository maintenance in this project. It keeps work aligned with the local structure, the current validation commands, and the way calculators, blog posts, and shared utilities are organized.

## Repository Map
- `src/app`: App Router pages for home, calculators, blog, and static pages.
- `src/components/calculators`: calculator UI shells and content components.
- `src/components/gst`: GST-specific calculator components.
- `src/content/blog/posts`: blog post source files.
- `src/lib`: shared helpers, registries, SEO helpers, PDF generation, and persistence utilities.
- `public`: static assets, manifest, sitemap, and images.

## Common Workflows

### Dependency and Security Work
1. Inspect current usage with `rg -n`.
2. Run `npm audit` before changing dependencies.
3. Check upstream package documentation or release notes before major upgrades.
4. Prefer the smallest safe dependency change, then review `package-lock.json` for unrelated drift.
5. Re-run `npm audit`, `npm run lint`, and `npm run build`.

### Calculator or Content Work
1. Identify the route in `src/app` and the supporting component or registry entry in `src/components` or `src/lib/calculators/registry`.
2. Keep naming consistent with existing files such as `EMICalculatorContent.tsx` and `gst-rate-chart-2025-india.tsx`.
3. Preserve existing content tone: practical, direct, SEO-aware, and India-focused where applicable.
4. For UI changes, verify both calculator pages and any related listing or category page.

## Validation
- Minimum validation: `npm run lint` and `npm run build`
- For dependency work: also run `npm audit`
- If build output warns about workspace root or lockfiles, note it separately unless the task is to fix build configuration

## When to Add Agents
- Use a dependency-focused agent for package upgrades, audits, release notes, and lockfile review.
- Use a calculator/content agent for route changes, blog updates, schema updates, and content consistency checks.

## References
Read `references/repo-map.md` when you need a quick repo map or naming examples.
