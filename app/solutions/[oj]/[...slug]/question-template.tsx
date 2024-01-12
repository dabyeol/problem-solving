import Button from '@/components/button';
import { Prose, Section, Tags, Title } from '@/lib/client/style';
import { getQuestion } from '@/lib/server/post';

interface Props {
  oj: string;
  number: string;
}

export default function QuestionTemplate({ oj, number }: Props) {
  const { questionData: data, Question } = getQuestion(oj, number);

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
        <Question />
      </Prose>
    </>
  );
}
