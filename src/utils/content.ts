import type { CollectionEntry } from 'astro:content';

export const contentSlug = (id: string) => id.replace(/\/index\.md$/, '');
export const byNewest = <T extends { data: { date: Date } }>(a: T, b: T) =>
  b.data.date.valueOf() - a.data.date.valueOf();
export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
export type BlogEntry = CollectionEntry<'blog'>;
export type ProjectEntry = CollectionEntry<'projects'>;
