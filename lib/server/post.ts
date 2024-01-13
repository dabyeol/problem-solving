import SolutionSkeleton from '@/components/solution-skeleton';
import { sync } from 'glob';
import matter from 'gray-matter';
import dynamic from 'next/dynamic';
import { ProblemData } from '../interface';

/**
 * Get all solutions params.
 * @returns The solutions params.
 */
export function getSolutionsParams() {
  const paths = sync('posts/solutions/*/*/*.mdx');

  return paths.map(path => {
    const [oj, ...slug] = path
      .replace(/\.mdx|\/problem/g, '')
      .split('/')
      .slice(2);

    return { oj, slug };
  });
}

/**
 * Get all problems of a specific online judge.
 * @param oj The online judge.
 * @returns The problems.
 */
export function getProblems(oj: string) {
  const numbers = sync(`posts/solutions/${oj}/*/problem.mdx`)
    .map(path => Number(path.split('/')[3]))
    .sort((a, b) => a - b);

  return numbers.map(number => {
    const languages = getSolutionLanguages(oj, number);

    return { ...getProblemData(oj, number), number, languages };
  });
}

/**
 * Get the data of a problem.
 * @param oj The online judge.
 * @param number The number of the problem.
 * @returns The data of the problem.
 */
export function getProblemData(oj: string, number: number | string) {
  return matter.read(`posts/solutions/${oj}/${number}/problem.mdx`)
    .data as ProblemData;
}

/**
 * Get the problem.
 * @param oj The online judge.
 * @param number The number of the problem.
 * @returns The problem.
 */
export function getProblem(oj: string, number: number | string) {
  // Read frontmatter from problem.mdx
  const problemData = getProblemData(oj, number);

  return {
    problemData,
    Problem: dynamic(
      () => import(`@/posts/solutions/${oj}/${number}/problem.mdx`)
    ),
  };
}

/**
 * Get the languages of a solution.
 * @param oj The online judge.
 * @param number The number of the problem.
 * @returns The languages of the solution.
 */
export function getSolutionLanguages(oj: string, number: number | string) {
  const paths = sync(`posts/solutions/${oj}/${number}/!(problem).mdx`).sort();

  return paths.map(path => path.split(/\/|\./).at(-2)!);
}

/**
 * Get the solution of a problem.
 * @param oj The online judge.
 * @param number The number of the problem.
 * @param language The language of the solution.
 * @returns The solution.
 */
export function getSolution(
  oj: string,
  number: number | string,
  language: string
) {
  return dynamic(
    () => import(`@/posts/solutions/${oj}/${number}/${language}.mdx`),
    {
      loading: SolutionSkeleton,
    }
  );
}
