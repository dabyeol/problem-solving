'use client';

import { Container } from '@/lib/client/style';
import styled from '@emotion/styled';
import Link from 'next/link';
import NavLink from './nav-link';

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: var(--color-float);
  box-shadow: var(--shadow-lg);
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Logo = styled(Link)`
  font-family: var(--font-monospace);
  font-size: var(--text-sm);
  font-weight: bold;
`;

export default function Topbar() {
  return (
    <Wrapper>
      <Container>
        <Links>
          <Logo href="/">Problem Solving</Logo>
          <NavLink href="/about">About</NavLink>
        </Links>
      </Container>
    </Wrapper>
  );
}
