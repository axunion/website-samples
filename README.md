# Website Samples

A catalog of website design samples built with Astro.

## Overview

Each sample is a self-contained website demonstrating a distinct design direction. The catalog index lists all available samples.

Published at: https://axunion.github.io/website-samples

## Tech Stack

- **Framework**: Astro 6
- **Package manager**: pnpm
- **CSS**: CSS Modules with LightningCSS
- **Linter / Formatter**: Biome

## Commands

| Command        | Description                    |
| :------------- | :----------------------------- |
| `pnpm dev`     | Start local dev server         |
| `pnpm build`   | Build for production           |
| `pnpm preview` | Preview the production build   |
| `pnpm check`   | Lint and type-check            |
| `pnpm fix`     | Auto-fix lint issues           |

## Adding a Sample

1. Create a new directory under `src/pages/[sample-name]/`
2. Add an `index.astro` as the entry point
3. Place all related files (components, assets) inside `_` prefixed subdirectories
4. Register the sample in `src/pages/index.astro`

Each sample must be fully independent — no shared code or styles between samples.
