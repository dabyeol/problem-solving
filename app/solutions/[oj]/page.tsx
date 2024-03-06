import Banner from '@/components/banner';
import SolutionItem from '@/components/solution-item';
import { Container, List } from '@/lib/client/style';
import { getOjById, ojs } from '@/lib/server/oj';
import { getProblems } from '@/lib/server/post';

export const dynamicParams = false;

export function generateStaticParams() {
  return ojs.map(({ id }) => ({ oj: id }));
}

interface Props {
  params: {
    oj: string;
  };
}

export function generateMetadata({ params: { oj } }: Props) {
  return { title: getOjById(oj)!.name };
}

export default function Page({ params: { oj } }: Props) {
  const problems = getProblems(oj);

  return (
    <>
      <Banner small>{getOjById(oj)!.name}</Banner>

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
