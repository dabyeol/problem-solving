import Button from '@/components/button';
import { Prose, Section, Tags, Title } from '@/lib/client/style';
import { getProblem } from '@/lib/server/post';
import { Level, TitleBar } from './style';
import { getLevelInfo } from '@/lib/utils';

interface Props {
  oj: string;
  number: string;
}

export default function ProblemTemplate({ oj, number }: Props) {
  const { problemData: data, Problem } = getProblem(oj, number);
  const { text, color } = getLevelInfo(oj, data.level);

  return (
    <>
      <Section>
        <TitleBar>
          <Title>{data.title}</Title>
          <Level color={color}>{text}</Level>
        </TitleBar>
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
