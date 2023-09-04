import Banner from '@/components/banner';
import SolutionItem from '@/components/solution-item';
import { Container, Section } from '@/lib/client/style';
import { ojList } from '@/lib/server/oj';
import { getQuestions } from '@/lib/server/post';

export async function generateStaticParams() {
  return ojList.map(({ id }) => ({ oj: id }));
}

interface OJProps {
  params: {
    oj: string;
  };
}

export default function OJ({ params }: OJProps) {
  const questions = getQuestions(params.oj);

  return (
    <>
      <Banner>{ojList.find(oj => oj.id === params.oj)?.name}</Banner>

      <Container>
        <Section>
          {questions.map((question, index) => (
            <SolutionItem
              key={index}
              href={`/solutions/${params.oj}/${question.slug.join('/')}`}
              title={question.title}
              subtitle={question.subtitle}
              oj={params.oj}
              level={question.level}
              languages={question.languages}
            />
          ))}
        </Section>
      </Container>
    </>
  );
}
