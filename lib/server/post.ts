import { sync } from 'glob';
import matter from 'gray-matter';
import dynamic from 'next/dynamic';
import { QuestionData } from '../interface';

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
    const languages = getSolutionLanguages(
      path.split('/').slice(2, -1).join('/')
    );

    return { ...getQuestionData([oj, ...slug].join('/')), slug, languages };
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
 * Get the question of a solution.
 * @param path The path of the question.
 * @returns The question.
 */
export function getQuestion(path: string) {
  // Read frontmatter from question.mdx
  const questionData = getQuestionData(path);

  return {
    questionData,
    Question: dynamic(() => import(`@/posts/solutions/${path}/question.mdx`)),
  };
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
