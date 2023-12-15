'use client';

import { Container } from '@/lib/client/style';
import styled from '@emotion/styled';
import Link from 'next/link';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #eee;
  background-color: #222;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-weight: bold;

  @media (width < 810px) {
    justify-content: center;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (width < 810px) {
    flex-direction: column-reverse;
  }
`;

const Logo = styled.div`
  font-family: var(--font-monospace);
  font-size: var(--text-sm);
  font-weight: bold;
`;

const Copyright = styled.div`
  font-size: var(--text-sm);
  color: var(--color-description);
`;

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <Links>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </Links>
        <Text>
          <Copyright>© 2023 Dabyeol. All rights reserved.</Copyright>
          <Logo>Problem Solving</Logo>
        </Text>
      </Container>
    </Wrapper>
  );
}
