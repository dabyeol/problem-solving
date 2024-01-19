import Banner from '@/components/banner';
import ProseLayout from '@/components/prose-layout';
import { Container } from '@/lib/client/style';
import { getOj } from '@/lib/server/oj';
import { generateSolutionsParams, getProblemData } from '@/lib/server/post';
import ProblemTemplate from './problem-template';
import SolutionTemplate from './solution-template';

export function generateStaticParams() {
  return generateSolutionsParams();
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
  const data = getProblemData(oj, number);
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
  const { subtitle } = getProblemData(oj, number);

  return (
    <>
      <Banner small>{`${getOj(oj)?.name} ▸ ${subtitle}`}</Banner>
      <Container>
        <ProseLayout>
          <ProblemTemplate oj={oj} number={number} />
          <SolutionTemplate oj={oj} number={number} language={language} />
        </ProseLayout>
      </Container>
    </>
  );
}
