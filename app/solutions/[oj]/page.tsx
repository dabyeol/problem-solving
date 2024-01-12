import Banner from '@/components/banner';
import SolutionItem from '@/components/solution-item';
import { Container, List } from '@/lib/client/style';
import { getOj, ojList } from '@/lib/server/oj';
import { getQuestions } from '@/lib/server/post';

export function generateStaticParams() {
  return ojList.map(({ id }) => ({ oj: id }));
}

interface Props {
  params: {
    oj: string;
  };
}

export function generateMetadata({ params: { oj } }: Props) {
  return { title: getOj(oj)?.name };
}

export default function Page({ params: { oj } }: Props) {
  const questions = getQuestions(oj);

  return (
    <>
      <Banner small>{getOj(oj)?.name}</Banner>

      <Container>
        <List>
          {questions.map((question, index) => (
            <SolutionItem
              key={index}
              href={`/solutions/${oj}/${question.number}`}
              title={question.title}
              subtitle={question.subtitle}
              oj={oj}
              level={question.level}
              languages={question.languages}
            />
          ))}
        </List>
      </Container>
    </>
  );
}
