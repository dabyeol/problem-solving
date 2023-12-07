'use client';

import styled from '@emotion/styled';
import Footer from './footer';
import Topbar from './topbar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 80px;
`;

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <Topbar />
      {children}
      <Footer />
    </Wrapper>
  );
}
