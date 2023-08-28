'use client';

import Button from '@/components/button';
import { QuestionData } from '@/lib/client/interface';
import { MDXLayout, Section, Wrapper } from '@/lib/client/style';
import styled from '@emotion/styled';

const Title = styled.h1`
  font-size: var(--text-4xl);
  font-weight: 700;
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

interface QuestionProps {
  data: QuestionData;
  children?: React.ReactNode;
}

export default function QuestionLayout({ data, children }: QuestionProps) {
  return (
    <>
      <Wrapper>
        <Section>
          <Title>{data.title}</Title>
          <Tags>
            {data.tags.map(tag => (
              <Button key={tag}>{tag}</Button>
            ))}
          </Tags>
        </Section>
      </Wrapper>

      <MDXLayout>{children}</MDXLayout>
    </>
  );
}
