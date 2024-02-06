import Button from '@/components/button';
import Level from '@/components/level';
import { Prose, Section, Tags, Title } from '@/lib/client/style';
import { getProblem } from '@/lib/server/post';
import { getLevelInfo } from '@/lib/utils';

interface Props {
  oj: string;
  number: string;
}

export default function ProblemTemplate({ oj, number }: Props) {
  const { problemData: data, Problem } = getProblem(oj, number);
  const { color, value } = getLevelInfo(oj, data.level);

  return (
    <>
      <Section>
        <Title>
          {data.title} <Level color={color} value={value} />
        </Title>
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
