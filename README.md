# Vinicius Portfolio

Rebuild of [viniciusportfolio.com](https://www.viniciusportfolio.com) (originally on Wix) in **Astro + TypeScript**. It keeps the original visual identity and moves the focus to AI and backend work.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npx astro check    # type-check
```

## Where things live

| What | Where |
|---|---|
| Colours, fonts, LEGO title style | `src/styles/global.css` |
| Hero stripes, quick facts, education, full career list (About), links, favourite games | `src/data/site.ts` |
| Work experience (home list + `/experience/<id>` pages) | `src/content/experience/*.md` |
| Projects (home grid + `/projects/<id>` pages) | `src/content/projects/*.md` |
| Schemas for both | `src/content.config.ts` |
| Tech chip labels | `src/components/StackTag.astro` |
| Old Wix URL → new URL redirects | `astro.config.mjs` |

## Content patterns

Home order: **Hero → Experience → Quick Facts → Personal Projects → About → Contact**.

**Colour means something:** blue = Backend & AI projects, red = Games, and yellow is only for highlights (`<mark>`, "Current" badge, links on dark backgrounds).

**Icons** are always square with sharp corners. Company logos are the official site icons (`public/images/`), shown in a square frame with a thin black border.

**Tech chips** are always text, never logos. Cards show the first 2 (projects) or 4 (experience).

**Call to action:** heading `See it on <Place>` or `Play it on <Place>`, label `go to <Place> >>>`.

### Adding a project

```yaml
---
title: My Project
type: CLI tool            # what it is, 1–3 words (card label)
platform: Go              # header subtitle = "type · platform"
category: backend         # backend | games
order: 5                  # position inside its category
stack: [golang, redis]    # keys from StackTag.astro
thumb: /images/my-project.png   # square
summary: What it is + the result or why it matters (1–2 sentences).
cta: { heading: See it on GitHub, label: go to GitHub >>>, url: https://github.com/... }
---
## The Project
### The problem       # games: ### Gameplay
### What it does      # games: ### Mechanics
### How it's built    # games: ### Key features / ### What I learned
```

### Adding a job

```yaml
---
company: Acme
role: Senior Software Engineer   # most recent role
start: 2025-10                   # YYYY-MM; period and duration are computed
end: 2026-09                     # omit for the current job
location: Lisbon, Portugal
order: 1                         # 1 = most recent
logo: /images/acme.svg
stack: [golang, kafka]
summary: One or two sentences on the company and your impact.
cta: { heading: See it on LinkedIn, label: go to LinkedIn >>>, url: https://www.linkedin.com/in/... }
---
## Senior Software Engineer
**Oct 2025 – Present · 1 yr**
One-line context with a <mark>highlight</mark>.
- Bullets with outcomes
**Tech:** ...
```

## TODO

- [ ] Fill in the AI bootcamp details (`education` in `src/data/site.ts`).
- [ ] Review the hero / About copy.
- [ ] Self-host images: they are still loaded from `static.wixstatic.com`.
- [ ] Optional: add a licensed "Lego Thick" font (see the note at the top of `global.css`).
- [ ] Deploy (Vercel/Netlify) and point the domain.

Original design by @brubregas.
