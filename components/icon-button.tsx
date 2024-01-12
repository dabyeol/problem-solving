'use client';

import styled from '@emotion/styled';
import Image from 'next/image';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  padding: 16px;
  background-color: var(--color-float);
  border-radius: 16px;
  box-shadow: var(--shadow-lg);
`;

const Icon = styled(Image)`
  overflow: hidden;
  border-radius: 100%;
`;

const Text = styled.span`
  flex: 1;
  font-weight: 600;
`;

interface IconButtonProps {
  src: string;
  text: string;
  onClick?: () => void;
}

export default function IconButton({ src, text, onClick }: IconButtonProps) {
  return (
    <Wrapper onClick={onClick}>
      <Icon src={src} width={24} height={24} alt="Icon" priority />
      <Text>{text}</Text>
    </Wrapper>
  );
}
