'use client';

import SolutionSkeleton from '@/components/solution-skeleton';
import dynamic from 'next/dynamic';

/**
 * Get the solution of a question.
 * @param path The path of the question.
 * @param language The language of the solution.
 * @returns The solution.
 */
export function getSolution(path: string, language: string) {
  return dynamic(() => import(`@/posts/solutions/${path}/${language}.mdx`), {
    loading: SolutionSkeleton,
  });
}
