'use client';

import { getSolution } from '@/lib/client/post';
import { Prose, Section, Wrapper } from '@/lib/client/style';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

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
  path: string;
  languages: string[];
}

export default function SolutionLayout({ path, languages }: QuestionProps) {
  const searchParams = useSearchParams();
  const currentLanguage = languages.find(
    language => language === searchParams.get('language')
  );
  const Solution = currentLanguage ? getSolution(path, currentLanguage) : null;

  return (
    <Wrapper>
      <Section>
        <h1>풀이</h1>
        {languages.length > 0 ? (
          <Languages>
            {languages.map(language => (
              <Link
                key={language}
                href={`?language=${language}`}
                scroll={false}
                replace
              >
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
        ) : (
          <p>아직 풀이가 없어요.</p>
        )}
      </Section>

      {languages.length > 0 && (
        <Prose>{Solution ? <Solution /> : <p>언어를 선택해주세요.</p>}</Prose>
      )}
    </Wrapper>
  );
}
