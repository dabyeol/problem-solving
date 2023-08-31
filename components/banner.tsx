'use client';

import { Container } from '@/lib/client/style';
import styled from '@emotion/styled';
import Image from 'next/image';

const Wrapper = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Backdrop = styled(Image)`
  object-fit: cover;
`;

const Text = styled.h1`
  color: #ffffff;
  font-size: var(--text-2xl);
  margin: 0;
`;

interface BannerProps {
  children?: React.ReactNode;
}

export default function Banner({ children }: BannerProps) {
  return (
    <Wrapper>
      <Backdrop src="/images/backdrop.jpg" alt="Backdrop" priority fill />
      <Container>
        <Text>{children}</Text>
      </Container>
    </Wrapper>
  );
}
