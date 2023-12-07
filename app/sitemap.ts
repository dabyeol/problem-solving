import { getAllSolutions } from '@/lib/server/post';
import { MetadataRoute } from 'next';

const baseUrl = 'https://ps.dabyeol.com';

// TODO: Add query string to the url

export default function sitemap(): MetadataRoute.Sitemap {
  const solutions = getAllSolutions();
  const solutionsSitemap = solutions.map(solution => ({
    url: `${baseUrl}/solutions/${solution.oj}/${solution.slug.join('/')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  })) as MetadataRoute.Sitemap;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...solutionsSitemap,
  ];
}
