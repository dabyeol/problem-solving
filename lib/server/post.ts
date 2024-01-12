import SolutionSkeleton from '@/components/solution-skeleton';
import { sync } from 'glob';
import matter from 'gray-matter';
import dynamic from 'next/dynamic';
import { QuestionData } from '../interface';

/**
 * Get all solutions params.
 * @returns The solutions params.
 */
export function getSolutionsParams() {
  const paths = sync('posts/solutions/*/*/*.mdx');

  return paths.map(path => {
    const [oj, ...slug] = path
      .replace(/\.mdx|\/question/g, '')
      .split('/')
      .slice(2);

    return { oj, slug };
  });
}

/**
 * Get all questions of a specific online judge.
 * @param oj The online judge.
 * @returns The questions.
 */
export function getQuestions(oj: string) {
  const numbers = sync(`posts/solutions/${oj}/*/question.mdx`)
    .map(path => Number(path.split('/')[3]))
    .sort((a, b) => a - b);

  return numbers.map(number => {
    const languages = getSolutionLanguages(oj, number);

    return { ...getQuestionData(oj, number), number, languages };
  });
}

/**
 * Get the data of a question.
 * @param oj The online judge.
 * @param number The number of the question.
 * @returns The data of the question.
 */
export function getQuestionData(oj: string, number: number | string) {
  return matter.read(`posts/solutions/${oj}/${number}/question.mdx`)
    .data as QuestionData;
}

/**
 * Get the question of a solution.
 * @param oj The online judge.
 * @param number The number of the question.
 * @returns The question.
 */
export function getQuestion(oj: string, number: number | string) {
  // Read frontmatter from question.mdx
  const questionData = getQuestionData(oj, number);

  return {
    questionData,
    Question: dynamic(
      () => import(`@/posts/solutions/${oj}/${number}/question.mdx`)
    ),
  };
}

/**
 * Get the languages of a solution.
 * @param oj The online judge.
 * @param number The number of the question.
 * @returns The languages of the solution.
 */
export function getSolutionLanguages(oj: string, number: number | string) {
  const paths = sync(`posts/solutions/${oj}/${number}/!(question).mdx`).sort();

  return paths.map(path => path.split(/\/|\./).at(-2)!);
}

/**
 * Get the solution of a question.
 * @param oj The online judge.
 * @param number The number of the question.
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
