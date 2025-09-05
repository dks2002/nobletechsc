import type { MetadataRoute } from 'next';

const staticPaths = ['/', '/about', '/services', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || 'https://nobletechsc.vercel.app/').replace(/\/$/, '');
  const now = new Date();
  return staticPaths.map((p) => ({
    url: `${base}${p === '/' ? '' : p}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: p === '/' ? 1 : 0.7
  }));
}
