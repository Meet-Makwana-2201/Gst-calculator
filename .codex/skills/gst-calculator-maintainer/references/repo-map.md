# Repo Map

## Core Paths
- `src/app/page.tsx`: home page
- `src/app/calculators/[slug]/page.tsx`: calculator detail routes
- `src/app/blog/[slug]/page.tsx`: blog detail routes
- `src/lib/calculators/registry/index.ts`: calculator registry entrypoint
- `src/lib/pdf-generator.ts`: PDF export helper
- `src/config/site.ts`: site-wide metadata/config

## Naming Patterns
- React component files: PascalCase, for example `GSTCalculator.tsx`
- Shared utility files: kebab-case, for example `calculation-history.ts`
- Route folders: lowercase
- Blog post source: lowercase slug-style filenames ending in `.tsx`

## Validation Commands
- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm audit`
