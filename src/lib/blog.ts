import { getCollection } from 'astro:content';

export async function getPublishedPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) =>
    b.data.pubDate.getTime() - a.data.pubDate.getTime() || a.id.localeCompare(b.id),
  );
}

export function blogUrl(id?: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const path = id ? `${id.split('/').map(encodeURIComponent).join('/')}/` : '';
  return `${base}/blog/${path}`;
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  }).format(date);
}
