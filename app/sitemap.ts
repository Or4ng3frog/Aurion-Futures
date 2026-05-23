import type { MetadataRoute } from 'next';
import { tools } from './lib/tools';
import { site } from './lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: '', priority: 1.0, freq: 'weekly' as const },
    { path: '/blog', priority: 0.6, freq: 'weekly' as const },
    { path: '/contact', priority: 0.4, freq: 'yearly' as const },
    { path: '/imprint', priority: 0.2, freq: 'yearly' as const },
    { path: '/privacy-policy', priority: 0.2, freq: 'yearly' as const },
    { path: '/disclaimer', priority: 0.2, freq: 'yearly' as const },
    { path: '/affiliate-disclosure', priority: 0.3, freq: 'yearly' as const },
    { path: '/terms-of-use', priority: 0.2, freq: 'yearly' as const }
  ].map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority
  }));

  const toolRoutes = tools.map((t) => ({
    url: `${site.url}/tools/${t.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }));

  return [...staticRoutes, ...toolRoutes];
}
