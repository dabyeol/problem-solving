'use client';

import { getLevelInfo } from '@/lib/utils';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import Level from './level';

const Wrapper = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 8px;
  margin: -8px;
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-secondary);
  }
`;

const Left = styled(Link)`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
`;

const Titlebar = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  justify-content: center;
`;

const Title = styled.span`
  font-size: var(--text-lg);
  font-weight: 600;
`;

const Subtitle = styled.span`
  font-size: var(--text-xs);
  color: var(--color-description);
`;

const Languages = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Language = styled(Image)`
  border-radius: 100%;
`;

interface SolutionItemProps {
  href: string;
  title: string;
  subtitle: string;
  oj: string;
  level: string | number;
  languages: string[];
}

export default function SolutionItem({
  href,
  title,
  subtitle,
  oj,
  level,
  languages,
}: SolutionItemProps) {
  const { color, value } = getLevelInfo(oj, level);

  return (
    <Wrapper>
      <Left href={href}>
        <Level color={color} value={value} />
        <Titlebar>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Titlebar>
      </Left>

      <Languages>
        {languages.map(language => (
          <Link href={`${href}?language=${language}`} key={language}>
            <Language
              src={`/images/languages/${language}.png`}
              width={24}
              height={24}
              alt={language}
              priority
            />
          </Link>
        ))}
      </Languages>
    </Wrapper>
  );
}
