import type { MetadataRoute } from 'next'
import { site, boroughs } from '@/lib/site'

const staticRoutes: Array<{ path: string; priority: number; changeFreq: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
  { path: '/',                        priority: 1.0, changeFreq: 'weekly'  },
  { path: '/services/domestic-epc',   priority: 0.9, changeFreq: 'monthly' },
  { path: '/services/floor-plans',    priority: 0.9, changeFreq: 'monthly' },
  { path: '/landlords',               priority: 0.8, changeFreq: 'monthly' },
  { path: '/sellers',                 priority: 0.8, changeFreq: 'monthly' },
  { path: '/pricing',                 priority: 0.8, changeFreq: 'monthly' },
  { path: '/areas',                   priority: 0.7, changeFreq: 'monthly' },
  { path: '/faq',                     priority: 0.7, changeFreq: 'monthly' },
  { path: '/about',                   priority: 0.6, changeFreq: 'monthly' },
  { path: '/contact',                 priority: 0.8, changeFreq: 'monthly' },
  { path: '/privacy-policy',          priority: 0.3, changeFreq: 'yearly'  },
  { path: '/terms',                   priority: 0.3, changeFreq: 'yearly'  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const static_ = staticRoutes.map(({ path, priority, changeFreq }) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: changeFreq,
    priority,
  }))

  const boroughPages = boroughs.map((slug) => ({
    url: `${site.url}/areas/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...static_, ...boroughPages]
}
