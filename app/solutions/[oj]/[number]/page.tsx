import Banner from '@/components/banner';
import ProseLayout from '@/components/prose-layout';
import { Container } from '@/lib/client/style';
import { getOjById } from '@/lib/server/oj';
import { generateSolutionsParams, getProblemData } from '@/lib/server/post';
import ProblemTemplate from './problem-template';
import SolutionTemplate from './solution-template';

export const dynamicParams = false;

export function generateStaticParams() {
  return generateSolutionsParams();
}

interface Props {
  params: {
    oj: string;
    number: string;
  };
  searchParams: {
    language?: string;
  };
}

export function generateMetadata({
  params: { oj, number },
  searchParams: { language },
}: Props) {
  const data = getProblemData(oj, number);
  const ojName = getOjById(oj)!.name;
  let title = `${data.title} (${ojName} ▸ ${data.subtitle})`;
  if (language) {
    title += ` ▸ ${language}`;
  }

  return { title };
}

export default function Page({
  params: { oj, number },
  searchParams: { language },
}: Props) {
  const { subtitle } = getProblemData(oj, number);

  return (
    <>
      <Banner small>{`${getOjById(oj)!.name} ▸ ${subtitle}`}</Banner>
      <Container>
        <ProseLayout>
          <ProblemTemplate oj={oj} number={number} />
          <SolutionTemplate oj={oj} number={number} language={language} />
        </ProseLayout>
      </Container>
    </>
  );
}
