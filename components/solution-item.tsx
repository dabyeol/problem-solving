'use client';

import styled from '@emotion/styled';
import Link from 'next/link';

const Wrapper = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

const Level = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #aa5500;
  font-size: 0.75rem; // 12px
  font-weight: 700;
  color: #ffffff;
`;

const Titlebar = styled.div`
  width: 100%;
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

interface SolutionItemProps {
  href: string;
  title: string;
  subtitle: string;
  level: string | number;
}

export default function SolutionItem({
  href,
  title,
  subtitle,
  level,
}: SolutionItemProps) {
  return (
    <Wrapper href={href}>
      <Level>5</Level>
      <Titlebar>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Titlebar>
    </Wrapper>
  );
}
