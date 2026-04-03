---
name: seo-content-writer
description: Use this skill when creating or updating blog posts, calculator copy, landing pages, or marketing content that should be SEO-friendly and highly rankable on Google. It is best for search-intent-led writing, metadata planning, internal linking, FAQ coverage, and repository-aligned content structure in the Gst-calculator codebase.
---

# SEO Content Writer

## Overview
Use this skill when the task is to write or revise content that should rank for a target query without sounding stuffed, vague, or generic. In this repository, it applies to blog posts in `src/content/blog/posts`, calculator page copy in `src/components/calculators` or `src/components/gst`, and SEO-facing text in `src/app` routes.

## Core Rules
- Start with search intent. Identify whether the query is informational, comparison-driven, navigational, or calculator/tool-led.
- Put the primary keyword in the title, introduction, one or more H2s, and the meta description, but keep phrasing natural.
- Write for topical completeness, not keyword repetition. Cover definitions, formula or method, examples, mistakes, use cases, and FAQs when relevant.
- Keep claims precise. Do not invent statistics, rankings, legal rules, or tax facts. If a fact is uncertain, flag it for verification instead of asserting it.
- Prefer helpful specificity over filler. Every section should either answer the query, support the answer, or move the user toward a tool or related page.
- Use internal links deliberately. Link to the most relevant calculator, guide, or category page instead of scattering low-value links.
- Match the repository tone: practical, direct, and SEO-aware. Keep India-specific tax content India-specific unless the task clearly targets a different market.

## Repository Fit
- Blog posts usually export `metadata`, define a `toc`, include `JsonLd`, and render through `BlogPostWrapper`.
- Existing posts often include:
  - Title and meta description with clear query phrasing
  - `keywords` arrays
  - canonical URL in `metadata.alternates`
  - Open Graph and Twitter metadata
  - `BlogPosting` schema and often `FAQPage` schema
  - a scannable structure with H2s, examples, and FAQ sections
- Before writing a new page, inspect a similar existing post and stay consistent with its depth and JSX structure.

## Workflow
1. Define the primary keyword and 3 to 6 close secondary phrases.
2. Identify the reader goal and the conversion goal.
3. Choose the content type:
   - Blog guide for informational queries
   - Comparison post for versus queries
   - Tool-supporting content for calculator queries
   - Landing page copy for category or feature queries
4. Draft the outline around intent:
   - direct answer in the introduction
   - H2 sections for major subtopics
   - worked examples or steps where useful
   - FAQ section only if it adds real coverage
5. Build SEO support:
   - strong title
   - concise meta description
   - canonical path
   - relevant internal links
   - article and FAQ schema where appropriate
6. Review for rankability:
   - remove fluff
   - reduce repeated phrases
   - tighten headings
   - check that the piece actually answers the query better than a thin summary would

## Rankability Heuristics
- Front-load the answer. The first 1 to 3 paragraphs should satisfy the core query.
- Make headings search-aligned, not clever. Prefer `How to Calculate GST Backwards` over vague headings.
- Include examples with real numbers when the topic is formula-driven, especially for GST, tax, finance, and calculators.
- Anticipate adjacent intents. A good page often answers the main query plus the obvious follow-ups users search next.
- Add FAQs only for unanswered follow-ups, not to repeat the article.
- Use short paragraphs and lists for scan-heavy queries, but keep the copy substantial enough to show expertise.
- Avoid obvious keyword stuffing patterns such as repeating the exact match phrase in every heading.

## Quality Bar
- The content should be useful even if search traffic did not exist.
- The page should make a stronger promise than competitors only if the body fully supports it.
- Prefer original explanation, worked examples, and repo-relevant tool integration over generic SEO phrasing.
- If the page targets a calculator query, connect the explanation to the actual tool flow in this repo.

## Validation
- If editing content files, also verify imports, JSX validity, and route alignment.
- Run `npm run lint` when the task includes code or content file changes.
- Run `npm run build` for larger content additions, new routes, or schema-heavy changes when practical.

## References
Read `references/seo-content-checklist.md` when you need:
- a brief checklist before publishing
- a reusable article blueprint
- title, meta, and FAQ guidance
