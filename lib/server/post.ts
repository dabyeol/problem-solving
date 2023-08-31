import { sync } from 'glob';
import matter from 'gray-matter';
import { QuestionData } from '../client/interface';

/**
 * Get all solutions.
 * @returns The solutions.
 */
export function getAllSolutions() {
  const paths = sync('posts/solutions/**/question.mdx');

  return paths.map(path => ({
    oj: path.split('/')[2],
    slug: path.split('/').slice(3, -1),
  }));
}

/**
 * Get all questions of a specific online judge.
 * @param oj The online judge.
 * @returns The questions.
 */
export function getQuestions(oj: string) {
  const paths = sync(`posts/solutions/${oj}/**/question.mdx`).sort();

  return paths.map(path => {
    const slug = path.split('/').slice(3, -1);

    return { ...getQuestionData([oj, ...slug].join('/')), slug };
  });
}

/**
 * Get the data of a question.
 * @param path The path of the question.
 * @returns The data of the question.
 */
export function getQuestionData(path: string) {
  return matter.read(`posts/solutions/${path}/question.mdx`)
    .data as QuestionData;
}

/**
 * Get the languages of a solution.
 * @param path The path of the question.
 * @returns The languages of the solution.
 */
export function getSolutionLanguages(path: string) {
  const paths = sync(`posts/solutions/${path}/!(question).mdx`).sort();

  return paths.map(path => path.split(/\/|\./).at(-2) as string);
}
