import { sync } from 'glob';

export function getAllQuestions() {
  const paths = sync('posts/solutions/**/!(question).mdx', {});

  return paths.map(path => ({
    slug: path.split(/\/|\./).slice(2, -1),
  }));
}

export function getSolutionLanguages(path: string) {
  const paths = sync(`posts/solutions/${path}/!(question).mdx`);

  return paths.map(path => path.split(/\/|\./).at(-2) as string).sort();
}
