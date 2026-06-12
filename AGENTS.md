# AGENTS.md — website-samples

> **Sync rule**: This file and `CLAUDE.md` must always have identical content.
> Whenever you edit one, apply the same change to the other immediately.

## Project Overview

This repository is a **website sample catalog** published via GitHub Pages at `https://axunion.github.io/website-samples`.

- The root page (`src/pages/index.astro`) serves as the catalog index, listing all available samples with links.
- Each sample lives in its own subdirectory under `src/pages/` and is completely self-contained.
- No tests — this project contains static web pages only.
- Deployment triggers only on changes to `src/pages/**`. Config, documentation, and other file changes do not trigger a deploy.

### Sample Directory Structure

All files belonging to a sample (components, layouts, assets) are colocated inside its `src/pages/[sample-name]/` directory. Use `_` prefixed subdirectories to prevent Astro from treating them as routes:

```
src/pages/
  index.astro          ← catalog index
  sample-name/
    index.astro
    _components/
    _assets/
```

### Tech Stack

- **Framework**: Astro 6
- **Package manager**: pnpm (workspace)
- **Linter / Formatter**: Biome
- **CSS**: CSS Modules with LightningCSS (via Vite transformer)

### Key Commands

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm preview` | Preview production build |
| `pnpm fix` | Lint + auto-fix |

## Sample Isolation Rules

Each website sample **must be fully independent**. This is a hard constraint:

- No shared components, layouts, or utilities between samples.
- No shared design tokens, CSS variables, or style sheets across samples.
- Each sample defines its own color palette, typography, spacing, and visual language.
- Samples must not import from or reference each other in any way.
- The goal is to demonstrate distinct, unrelated design directions — not a design system.

## CSS Rules

- Use CSS Modules (`.module.css`) for all component and page styles.
- Do not use global stylesheets except for bare resets scoped to each sample's root.

## Design Rules

### Typography
- Do not use web fonts for Japanese text — the payload is too large for mobile.
- Use device/system fonts (`font-family: system-ui, sans-serif`) as the default. This project is mobile-first.

### Images
- Do not store raster images in the repository; use external CDN URLs (e.g., Unsplash) for photographs.
- Size every image container with `aspect-ratio` and a `background-color` so layout does not shift when the image is absent or loading.
- On every `<img>` that loads from an external URL, add an `onerror` handler that replaces the broken image with a single-color gradient SVG data URI. Always set `this.onerror=null` first to prevent retry loops. Choose gradient colors that suit the component's palette.

```html
<img
  src="https://..."
  onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22%3E%3ClinearGradient id=%22g%22 x2=%221%22 y2=%221%22%3E%3Cstop stop-color=%22%23AAA%22/%3E%3Cstop offset=%221%22 stop-color=%22%23888%22/%3E%3C/linearGradient%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22url(%23g)%22/%3E%3C/svg%3E'"
/>
```

### Icons & SVG
- Use `astro-icon` (Lucide set via `@iconify-json/lucide`) for UI icons.
- Use inline SVG for titles, logos, and branding — craft these as SVG rather than text or raster images.
- When a figure, diagram, or illustration adds clarity, prefer inline SVG over raster images.
- SVG shapes and illustrations are also a valid alternative or supplement to icon libraries when they fit the design better.

## Routing Rules

- Always use `import.meta.env.BASE_URL` as a prefix for internal links (e.g., `` `${base}page/` ``). Never use root-relative paths (`/path/`) — they break under the GitHub Pages base path. Relative paths (`./`) are also unreliable when the URL lacks a trailing slash.

## Code Rules

- Keep code simple, efficient, and clean — prefer clarity over cleverness.
- Minimize file count; avoid unnecessary abstraction layers.
- One concern per file; keep files focused and small.
- Delete dead code rather than commenting it out.

## Language Rules

All of the following must be written in **English only**:

- In-code comments
- Console output and error messages
- Log messages
- AI-readable config and documentation files (CLAUDE.md, AGENTS.md, etc.)

## Commit Rules

Message format:

```
<one-line summary>

<Why: one sentence — the motivation or problem that drove this change>

- <what changed, one bullet per distinct change>
```

- Summary: imperative mood, under 70 characters, no trailing period, no prefix tags (`feat:`, `fix:`, etc.).
- Why line: required only when the reason is non-obvious. Skip for trivial changes.
- Bullets: only when there are multiple distinct changes. Skip for single-concern changes.
- Never commit secrets (`.env*`, `*.key`, `*.pem`, `credentials*`).
- Never use `--no-verify` or `--amend`. Always create a new commit.
- Stage explicit paths only — never `git add -A` or `git add .`.
