import Banner from '@/components/banner';
import SolutionItem from '@/components/solution-item';
import { Container, List } from '@/lib/client/style';
import { getOj, ojList } from '@/lib/server/oj';
import { getProblems } from '@/lib/server/post';

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
  const problems = getProblems(oj);

  return (
    <>
      <Banner small>{getOj(oj)?.name}</Banner>

      <Container>
        <List>
          {problems.map((problem, index) => (
            <SolutionItem
              key={index}
              href={`/solutions/${oj}/${problem.number}`}
              title={problem.title}
              subtitle={problem.subtitle}
              oj={oj}
              level={problem.level}
              languages={problem.languages}
            />
          ))}
        </List>
      </Container>
    </>
  );
}
