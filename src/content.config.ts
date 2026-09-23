import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const cta = z.object({
  // Pattern: heading "See it on <Place>" / "Play it on <Place>", label "go to <Place> >>>"
  heading: z.string(),
  label: z.string(),
  url: z.url(),
});

const media = z.array(
  z.object({ src: z.string(), caption: z.string().optional(), href: z.url().optional() }),
);

// Personal projects (side projects and games)
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    // What it is, 1–3 words: "MCP server", "2D platformer". Shown on the card.
    type: z.string(),
    // Where it runs / what it's built with: "Go", "Unity". Header subtitle is `${type} · ${platform}`.
    platform: z.string(),
    category: z.enum(['backend', 'games']),
    order: z.number(),
    // First two are shown on the card, all of them on the page
    stack: z.array(z.string()).default([]),
    thumb: z.string(),
    // 1–2 sentences: what it is + the result or why it matters
    summary: z.string(),
    cta: cta.optional(),
    media: media.default([]),
  }),
});

// Work experience: one entry per company, roles are H2 sections in the body
const experience = defineCollection({
  loader: glob({ base: './src/content/experience', pattern: '**/*.md' }),
  schema: z.object({
    company: z.string(),
    // Most recent role
    role: z.string(),
    // "YYYY-MM"; no `end` means current role
    start: z.string().regex(/^\d{4}-\d{2}$/),
    end: z
      .string()
      .regex(/^\d{4}-\d{2}$/)
      .optional(),
    location: z.string(),
    order: z.number(),
    logo: z.string(),
    stack: z.array(z.string()).default([]),
    summary: z.string(),
    cta: cta.optional(),
  }),
});

export const collections = { projects, experience };
