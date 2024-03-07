import SolutionSkeleton from '@/components/solution-skeleton';
import { existsSync, readFileSync } from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import dynamic from 'next/dynamic';
import { ProblemData } from '../interface';
import { getLanguageByExtension, getLanguageById } from './language';

/**
 * Generate the solutions params.
 * @returns The solutions params.
 */
export function generateSolutionsParams() {
  const paths = sync('posts/solutions/*/*/{problem.mdx,code*}');

  return paths.map(path => {
    const [oj, ...slug] = path
      .replace(/\/problem\.mdx|code\./g, '')
      .split('/')
      .slice(2);

    if (slug[1]) {
      if (slug[1].includes('-')) {
        slug[1] = slug[1].split(/-|\./)[1];
      } else {
        slug[1] = getLanguageByExtension(slug[1])!.id;
      }
    }

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
 * Get the common solution of a problem.
 * @param oj The online judge.
 * @param number The number of the problem.
 * @returns The common solution.
 */
export function getCommonSolution(oj: string, number: number | string) {
  const exists = existsSync(`posts/solutions/${oj}/${number}/solution.mdx`);

  if (!exists) return;

  return dynamic(
    () => import(`@/posts/solutions/${oj}/${number}/solution.mdx`),
    {
      loading: SolutionSkeleton,
    }
  );
}

/**
 * Get the languages of a solution.
 * @param oj The online judge.
 * @param number The number of the problem.
 * @returns The languages of the solution.
 */
export function getSolutionLanguages(oj: string, number: number | string) {
  const paths = sync(`posts/solutions/${oj}/${number}/code*`).sort();

  return paths.map(path => {
    const [filename, extension] = path.split('/')[4].split('.');

    if (filename.includes('-')) {
      return filename.split('-')[1];
    }

    return getLanguageByExtension(extension)!.id;
  });
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
  const exists = existsSync(
    `posts/solutions/${oj}/${number}/solution-${language}.mdx`
  );

  if (!exists) return;

  return dynamic(
    () => import(`@/posts/solutions/${oj}/${number}/solution-${language}.mdx`),
    {
      loading: SolutionSkeleton,
    }
  );
}

/**
 * Get the code of a solution.
 * @param oj The online judge.
 * @param number The number of the problem.
 * @param language The language of the solution.
 * @returns The code of the solution.
 */
export function getSolutionCode(
  oj: string,
  number: number | string,
  language: string
) {
  const extension = getLanguageById(language)?.extension;

  if (!extension) return;

  let path = `posts/solutions/${oj}/${number}/code.${extension}`;
  if (!existsSync(path)) {
    path = `posts/solutions/${oj}/${number}/code-${language}.${extension}`;

    if (!existsSync(path)) return;
  }

  return `## 코드

\`\`\`${extension}
${readFileSync(path, 'utf-8')}\`\`\`
`;
}
