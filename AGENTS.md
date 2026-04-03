# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js 16 App Router project. Application routes live in `src/app`, including calculator pages, blog pages, and static content pages. Reusable UI and feature components live in `src/components`, with calculator-specific modules under `src/components/calculators` and GST tools under `src/components/gst`. Shared logic, registries, helpers, and API utilities live in `src/lib`. Blog source files are stored in `src/content/blog/posts`. Static assets, icons, sitemap files, and images belong in `public`.

## Build, Test, and Development Commands
Use `npm install` to install dependencies. Use `npm run dev` to start the local Next.js dev server with Turbopack at `http://localhost:3000`. Use `npm run build` to create a production build, and `npm run start` to serve that build locally. Use `npm run lint` before opening a PR; this runs ESLint across `.js`, `.jsx`, `.ts`, and `.tsx` files while ignoring `.next` and `node_modules`.

## Coding Style & Naming Conventions
Write code in TypeScript with `strict` mode assumptions and prefer the `@/*` import alias for internal modules. Follow the existing style in the codebase: functional React components, PascalCase for component files (`GSTCalculator.tsx`), camelCase for utilities (`calculation-history.ts` uses kebab-case at the file level for shared libs), and route folder names in lowercase. Keep styling in `src/app/globals.css` or component-local utility class strings. ESLint extends `next/core-web-vitals` and `next/typescript`; fix lint issues instead of suppressing them unless the existing config already permits an exception.

## Testing Guidelines
There is currently no dedicated automated test suite or coverage gate in `package.json`. For now, treat `npm run lint` and `npm run build` as the minimum validation set. When adding tests later, place them near the feature or in a dedicated `src/__tests__` tree and use clear names such as `gst-calculation.test.ts`.

## Commit & Pull Request Guidelines
Recent commits use short subjects such as `seo issue fix` and `website changes`, but contributors should prefer clearer imperative messages like `Add EMI calculator FAQ schema`. Keep each commit focused on one change. PRs should include a short summary, note any SEO or content changes, link related issues when available, and attach screenshots for UI changes to calculator or blog pages.
