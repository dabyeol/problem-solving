import Banner from '@/components/banner';
import SolutionItem from '@/components/solution-item';
import { Container, Section } from '@/lib/client/style';
import { oj } from '@/lib/server/oj';
import { getQuestions } from '@/lib/server/post';

interface OJProps {
  params: {
    oj: string;
  };
}

export default function OJ({ params }: OJProps) {
  const questions = getQuestions(params.oj);

  return (
    <>
      <Banner>{oj.find(oj => oj.id === params.oj)?.name}</Banner>

      <Container>
        <Section>
          {questions.map((question, index) => (
            <SolutionItem
              key={index}
              href={`/solutions/${params.oj}/${question.slug.join('/')}`}
              title={question.title}
              subtitle={question.subtitle}
              level={question.level}
            />
          ))}
        </Section>
      </Container>
    </>
  );
}
