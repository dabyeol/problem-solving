import { ojs } from '@/lib/server/oj';
import { generateSolutionsParams } from '@/lib/server/post';
import type { MetadataRoute } from 'next';

const baseUrl = 'https://ps.dabyeol.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const ojsSitemap = ojs.map(({ id }) => ({
    url: `${baseUrl}/solutions/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  })) as MetadataRoute.Sitemap;

  const solutionsParams = generateSolutionsParams();
  const solutionsSitemap = solutionsParams.map(({ oj, slug }) => ({
    url: `${baseUrl}/solutions/${oj}/${slug.join('/')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
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
    ...ojsSitemap,
    ...solutionsSitemap,
  ];
}
