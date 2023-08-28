'use client';

import { Container, Grid, Section, Wrapper } from '@/lib/client/style';
import styled from '@emotion/styled';
import Image from 'next/image';

const Banner = styled.header`
  position: relative;
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;

  @media (max-width: 1199px) {
    height: 320px;
  }

  @media (max-width: 809px) {
    height: 240px;
  }
`;

const Backdrop = styled(Image)`
  object-fit: cover;
`;

const BannerText = styled.h1`
  color: #ffffff;
  font-size: var(--text-4xl);
  font-weight: 700;
`;

export default function Home() {
  return (
    <>
      <Banner>
        <Backdrop src="/images/backdrop.jpg" alt="Backdrop" priority fill />
        <Container>
          <Wrapper>
            <BannerText>
              기본에 충실한
              <br />
              문제 풀이
            </BannerText>
          </Wrapper>
        </Container>
      </Banner>
      <Container>
        <Wrapper>
          <Section>
            <h2>문제 풀이</h2>
            <Grid></Grid>
          </Section>
        </Wrapper>
      </Container>
    </>
  );
}
