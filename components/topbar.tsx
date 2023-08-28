'use client';

import styled from '@emotion/styled';
import Link from 'next/link';
import NavLink from './nav-link';

const Wrapper = styled.nav`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--background-light);
  gap: 24px;
  position: fixed;
  top: 0;
  z-index: 100;

  @media (max-width: 809px) {
    padding: 24px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
  }
`;

const Left = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Logo = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
`;

const LogoText = styled.div`
  font-family: monospace;
  font-weight: 700;
`;

export default function Topbar() {
  return (
    <Wrapper>
      <Left href="/">
        {/* <Logo>
          <Image
            src="/images/dabyeol-light.png"
            width="48"
            height="48"
            alt="Logo"
            priority
          />
        </Logo> */}
        <LogoText>Problem Solving</LogoText>
      </Left>

      <NavLink href="/about">소개</NavLink>
    </Wrapper>
  );
}
