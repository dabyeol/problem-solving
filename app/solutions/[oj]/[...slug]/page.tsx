import Banner from '@/components/banner';
import { Container, Wrapper } from '@/lib/client/style';
import {
  getAllSolutions,
  getQuestionData,
  getSolutionLanguages,
} from '@/lib/server/post';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import QuestionLayout from './question-layout';
import SolutionLayout from './solution-layout';

export async function generateStaticParams() {
  return getAllSolutions();
}

interface Params {
  oj: string;
  slug: string[];
}

function getQuestion({ oj, slug }: Params) {
  // Read frontmatter from question.mdx
  const questionData = getQuestionData([oj, ...slug].join('/'));

  return {
    questionData,
    Question: dynamic(
      () => import(`@/posts/solutions/${oj}/${slug.join('/')}/question.mdx`)
    ),
  };
}

interface SolutionProps {
  params: Params;
}

export default function Solution({ params }: SolutionProps) {
  const { questionData, Question } = getQuestion(params);
  const languages = getSolutionLanguages([params.oj, ...params.slug].join('/'));

  return (
    <>
      <Banner>{questionData.subtitle}</Banner>
      <Container>
        <Wrapper loose column={8}>
          <QuestionLayout data={questionData}>
            <Question />
          </QuestionLayout>
          <Suspense>
            <SolutionLayout params={params} languages={languages} />
          </Suspense>
        </Wrapper>
      </Container>
    </>
  );
}
