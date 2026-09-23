import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;
export type Experience = CollectionEntry<'experience'>;

const categoryRank = { backend: 0, games: 1 } as const;

/** Projects: Backend & AI first, then Games, each by `order`. */
export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('projects');
  return all.sort(
    (a, b) => categoryRank[a.data.category] - categoryRank[b.data.category] || a.data.order - b.data.order,
  );
}

/** Work experience, most recent first. */
export async function getExperience(): Promise<Experience[]> {
  const all = await getCollection('experience');
  return all.sort((a, b) => a.data.order - b.data.order);
}

/** Circular previous/next inside a list (callers pass one category at a time). */
export function neighbours<T extends { id: string }>(list: T[], id: string) {
  const i = list.findIndex((p) => p.id === id);
  const n = list.length;
  return { prev: list[(i - 1 + n) % n], next: list[(i + 1) % n] };
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function parseMonth(ym: string) {
  const [y, m] = ym.split('-').map(Number);
  return { y, m };
}

/** "Apr 2019 – Mar 2025" / "Oct 2025 – Present" */
export function formatPeriod(start: string, end?: string) {
  const fmt = (ym: string) => {
    const { y, m } = parseMonth(ym);
    return `${MONTHS[m - 1]} ${y}`;
  };
  return `${fmt(start)} – ${end ? fmt(end) : 'Present'}`;
}

/** LinkedIn-style inclusive duration: "6 yrs", "1 yr 7 mos". Open-ended roles count up to today. */
export function formatDuration(start: string, end?: string) {
  const s = parseMonth(start);
  const now = new Date();
  const e = end ? parseMonth(end) : { y: now.getFullYear(), m: now.getMonth() + 1 };
  const months = (e.y - s.y) * 12 + (e.m - s.m) + 1;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];
  if (years) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (rest) parts.push(`${rest} mo${rest > 1 ? 's' : ''}`);
  return parts.join(' ');
}
