'use client';

import { ojList } from '@/lib/server/oj';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

const Left = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

const Level = styled.div<{ color: string }>`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ color }) => color};
  font-size: 0.75rem; // 12px
  font-weight: 700;
  color: #ffffff;
`;

const Titlebar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.span`
  font-size: var(--text-lg);
  font-weight: 600;
`;

const Subtitle = styled.span`
  font-size: 0.75rem; // 12px
  color: var(--text-secondary);
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
  const color = ojList
    .find(o => o.id === oj)
    ?.levels.find(l => l.id === levelId)?.color!;

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
