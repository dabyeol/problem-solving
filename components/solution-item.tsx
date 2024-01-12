'use client';

import { getOj } from '@/lib/server/oj';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

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

const Level = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-size: var(--text-xs);
  font-weight: bold;
  color: #fff;
  background-color: ${({ color }) => color};
  border-radius: 4px;
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
  const levelText =
    typeof level === 'string' ? level.split(' ').pop()?.[0] : level;
  const levelId =
    typeof level === 'string' ? level.split(' ')[0] : level.toString();
  const color = getOj(oj)?.levels.find(l => l.id === levelId)?.color!;

  return (
    <Wrapper>
      <Left href={href}>
        <Level color={color}>{levelText}</Level>
        <Titlebar>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Titlebar>
      </Left>

      <Languages>
        {languages.map(language => (
          <Link href={`${href}/${language}`} key={language}>
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
