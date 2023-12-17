'use client';

import { Container } from '@/lib/client/style';
import styled from '@emotion/styled';
import Image from 'next/image';

const Wrapper = styled.header<{ small?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${props => (props.small ? 'auto' : '360px')};

  @media (width < 1200px) {
    height: ${props => (props.small ? 'auto' : '320px')};
  }

  @media (width < 810px) {
    height: ${props => (props.small ? 'auto' : '240px')};
  }
`;

const Backdrop = styled(Image)`
  object-fit: cover;
  filter: brightness(0.9);
`;

const OverlayContainer = styled(Container)`
  mix-blend-mode: overlay;
`;

const Text = styled.h1<{ small?: boolean }>`
  margin: 0;
  font-size: ${props => (props.small ? 'var(--text-2xl)' : 'var(--text-4xl)')};
  font-weight: bold;
  line-height: 1.4;
  color: #fff;
`;

interface BannerProps {
  children?: React.ReactNode;
  small?: boolean;
}

export default function Banner({ children, small }: BannerProps) {
  return (
    <Wrapper small={small}>
      <Backdrop src="/images/banner.jpg" alt="Backdrop" priority fill />
      <OverlayContainer>
        <Text small={small}>{children}</Text>
      </OverlayContainer>
    </Wrapper>
  );
}
