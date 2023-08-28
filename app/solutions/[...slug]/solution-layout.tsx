'use client';

import { MDXLayout, Section, Wrapper } from '@/lib/client/style';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const Languages = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Language = styled(Image)<{ disabled?: boolean }>`
  border-radius: 100%;
  ${({ disabled }) => disabled && 'filter: contrast(50%) opacity(50%);'}
`;

interface QuestionProps {
  languages: string[];
  currentLanguage: string;
  children?: React.ReactNode;
}

export default function SolutionLayout({
  languages,
  currentLanguage,
  children,
}: QuestionProps) {
  return (
    <Wrapper>
      <Section>
        <h1>풀이</h1>
        <Languages>
          {languages.map(language => (
            <Link key={language} href={language} scroll={false}>
              <Language
                src={`/images/languages/${language}.png`}
                width={32}
                height={32}
                alt={language}
                priority
                disabled={language !== currentLanguage}
              />
            </Link>
          ))}
        </Languages>
      </Section>
      <Section>
        <MDXLayout>{children}</MDXLayout>
      </Section>
    </Wrapper>
  );
}
