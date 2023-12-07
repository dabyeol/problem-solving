'use client';

import Button from '@/components/button';
import { Prose, Section } from '@/lib/client/style';
import { QuestionData } from '@/lib/interface';
import styled from '@emotion/styled';

const Title = styled.h1`
  font-size: var(--text-4xl);
  font-weight: bold;
`;

const Tags = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

interface QuestionProps {
  data: QuestionData;
  children?: React.ReactNode;
}

export default function QuestionLayout({ data, children }: QuestionProps) {
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

      <Prose>{children}</Prose>
    </>
  );
}
