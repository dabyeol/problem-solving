import Button from '@/components/button';
import { Prose, Section, Tags, Title } from '@/lib/client/style';
import { getProblem } from '@/lib/server/post';

interface Props {
  oj: string;
  number: string;
}

export default function ProblemTemplate({ oj, number }: Props) {
  const { problemData: data, Problem } = getProblem(oj, number);

  return (
    <>
      <Section>
        <Title>{data.title}</Title>
        {data.tags && (
          <Tags>
            {data.tags.map(tag => (
              <Button key={tag}>{tag}</Button>
            ))}
          </Tags>
        )}
      </Section>

      <Prose>
        <Problem />
      </Prose>
    </>
  );
}
