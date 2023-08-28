'use client';

import { Caption } from '@/lib/client/style';
import styled from '@emotion/styled';

const Wrapper = styled.footer`
  width: 100%;
  height: 96px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-color: var(--secondary);

  @media (max-width: 1199px) {
    padding: 0;
  }

  @media (max-width: 809px) {
    height: 80px;
  }
`;

const Text = styled(Caption)`
  width: 1176px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px;
  gap: 24px;
  color: var(--text-secondary);

  @media (max-width: 1199px) {
    width: 100%;
  }

  @media (max-width: 809px) {
    padding: 16px;
    gap: 16px;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Text>© 2023 Dabyeol. All rights reserved.</Text>
    </Wrapper>
  );
}
