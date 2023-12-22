import { getAllSolutions, getSolutionLanguages } from '@/lib/server/post';
import { MetadataRoute } from 'next';

const baseUrl = 'https://ps.dabyeol.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const solutions = getAllSolutions();
  const solutionsSitemap = solutions.flatMap(solution => {
    const path = decodeURIComponent([solution.oj, ...solution.slug].join('/'));
    const languages = getSolutionLanguages(path);

    return languages.map(language => ({
      url: `${baseUrl}/solutions/${path}?language=${language}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }));
  }) as MetadataRoute.Sitemap;

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
