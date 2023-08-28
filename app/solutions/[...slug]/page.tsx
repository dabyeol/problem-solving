import { QuestionData } from '@/lib/client/interface';
import { Container, Wrapper } from '@/lib/client/style';
import { getAllQuestions, getSolutionLanguages } from '@/lib/server/post';
import matter from 'gray-matter';
import dynamic from 'next/dynamic';
import Banner from './banner';
import QuestionLayout from './question-layout';
import SolutionLayout from './solution-layout';

export async function generateStaticParams() {
  return getAllQuestions();
}

interface Params {
  slug: string[];
}

function getQuestion(params: Params) {
  // Read frontmatter from question.mdx
  const { data } = matter.read(
    `posts/solutions/${params.slug.slice(0, -1).join('/')}/question.mdx`
  );

  return {
    questionData: data as QuestionData,
    Question: dynamic(
      () =>
        import(
          `@/posts/solutions/${params.slug.slice(0, -1).join('/')}/question.mdx`
        )
    ),
  };
}

function getSolution(params: Params) {
  // Get all languages for this solution
  const languages = getSolutionLanguages(params.slug.slice(0, -1).join('/'));

  return {
    languages,
    Solution: dynamic(
      () => import(`@/posts/solutions/${params.slug.join('/')}.mdx`)
    ),
  };
}

interface SolutionProps {
  params: Params;
}

export default function Solution({ params }: SolutionProps) {
  const { questionData, Question } = getQuestion(params);
  const { languages, Solution } = getSolution(params);

  return (
    <>
      <Banner>{questionData.subtitle}</Banner>
      <Container>
        <Wrapper loose column={8}>
          <QuestionLayout data={questionData}>
            <Question />
          </QuestionLayout>
          <SolutionLayout
            languages={languages}
            currentLanguage={String(params.slug.at(-1))}
          >
            <Solution />
          </SolutionLayout>
        </Wrapper>
      </Container>
    </>
  );
}
