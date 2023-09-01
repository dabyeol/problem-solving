import Banner from '@/components/banner';
import { Container, Wrapper } from '@/lib/client/style';
import {
  getAllSolutions,
  getQuestion,
  getSolutionLanguages,
} from '@/lib/server/post';
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

interface SolutionProps {
  params: Params;
}

export default function Solution({ params }: SolutionProps) {
  const path = [params.oj, ...params.slug].join('/');
  const { questionData, Question } = getQuestion(path);
  const languages = getSolutionLanguages(path);

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
