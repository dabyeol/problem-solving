import Banner from '@/components/banner';
import ProseLayout from '@/components/prose-layout';
import { Container } from '@/lib/client/style';
import { getLanguageById } from '@/lib/server/language';
import { getOjById } from '@/lib/server/oj';
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
  const ojName = getOjById(oj)!.name;
  let title = `${data.title} (${ojName} ▸ ${data.subtitle})`;
  if (language) {
    title += ` ${getLanguageById(language)!.name}`;
  }

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
