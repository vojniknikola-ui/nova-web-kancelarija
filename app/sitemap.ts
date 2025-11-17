import { MetadataRoute } from 'next';
import { locales } from '../i18n-config';
import { laws } from '../lib/laws';
import { getSortedPostsData } from '../lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://andriclaw.com';
  const staticPaths = ['/', '/about', '/lawviewer', '/news', '/contact', '/privacy'];
  const entries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    staticPaths.forEach((path) => {
      entries.push({
        url: `${baseUrl}/${locale}${path === '/' ? '' : path}`,
        changeFrequency: 'weekly',
        priority: path === '/' ? 1 : 0.8,
      });
    });
    laws.forEach((law) => {
      entries.push({ url: `${baseUrl}/${locale}/lawviewer/${law.slug}`, changeFrequency: 'monthly', priority: 0.6 });
    });
  });

  const posts = getSortedPostsData();
  posts.forEach((post) => {
    locales.forEach((locale) => {
      entries.push({ url: `${baseUrl}/${locale}/news/${post.slug}`, changeFrequency: 'monthly', priority: 0.5 });
    });
  });

  return entries;
}
