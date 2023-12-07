import Banner from '@/components/banner';
import ProseLayout from '@/components/prose-layout';
import { Container } from '@/lib/client/style';
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
  const path = decodeURIComponent([params.oj, ...params.slug].join('/'));
  const { questionData, Question } = getQuestion(path);
  const languages = getSolutionLanguages(path);

  return (
    <>
      <Banner small>{questionData.subtitle}</Banner>
      <Container>
        <ProseLayout>
          <QuestionLayout data={questionData}>
            <Question />
          </QuestionLayout>
          <Suspense>
            <SolutionLayout path={path} languages={languages} />
          </Suspense>
        </ProseLayout>
      </Container>
    </>
  );
}
