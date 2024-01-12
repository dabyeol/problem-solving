import Banner from '@/components/banner';
import ProseLayout from '@/components/prose-layout';
import { Container } from '@/lib/client/style';
import { getOj } from '@/lib/server/oj';
import { getQuestionData, getSolutionsParams } from '@/lib/server/post';
import QuestionTemplate from './question-template';
import SolutionTemplate from './solution-template';

export function generateStaticParams() {
  return getSolutionsParams();
}

interface Props {
  params: {
    oj: string;
    slug: string[];
  };
}

export function generateMetadata({
  params: {
    oj,
    slug: [number, language],
  },
}: Props) {
  const data = getQuestionData(oj, number);
  const ojName = getOj(oj)?.name;
  const title = `${ojName} ▸ ${data.title} (${data.subtitle})${
    language ? ` ▸ ${language}` : ''
  }`;

  return { title };
}

export default function Page({
  params: {
    oj,
    slug: [number, language],
  },
}: Props) {
  const { subtitle } = getQuestionData(oj, number);

  return (
    <>
      <Banner small>{`${getOj(oj)?.name} ▸ ${subtitle}`}</Banner>
      <Container>
        <ProseLayout>
          <QuestionTemplate oj={oj} number={number} />
          <SolutionTemplate oj={oj} number={number} language={language} />
        </ProseLayout>
      </Container>
    </>
  );
}
