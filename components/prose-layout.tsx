'use client';

import { Container } from '@/lib/client/style';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  width: 100%;

  @media (width < 1200px) {
    flex-direction: column;
  }
`;

const Prose = styled(Container)`
  width: 744px;
  padding: 0 !important;

  @media (width < 1200px) {
    width: 100%;
  }
`;

interface ProseLayoutProps {
  children?: React.ReactNode;
}

export default function ProseLayout({ children }: ProseLayoutProps) {
  return (
    <Wrapper>
      <Prose>{children}</Prose>
    </Wrapper>
  );
}
