import { ojs } from '@/lib/server/oj';
import {
  generateSolutionsParams,
  getSolutionLanguages,
} from '@/lib/server/post';
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
  const questionsSitemap = solutionsParams.map(({ oj, number }) => ({
    url: `${baseUrl}/solutions/${oj}/${number}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  })) as MetadataRoute.Sitemap;
  const solutionsSitemap = solutionsParams.flatMap(({ oj, number }) => {
    const languages = getSolutionLanguages(oj, number);

    return languages.map(language => ({
      url: `${baseUrl}/solutions/${oj}/${number}?language=${language}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
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
    ...ojsSitemap,
    ...questionsSitemap,
    ...solutionsSitemap,
  ];
}
