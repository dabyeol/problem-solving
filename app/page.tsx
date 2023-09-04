'use client';

import IconButton from '@/components/icon-button';
import { Container, Grid, Section, Wrapper } from '@/lib/client/style';
import { ojList } from '@/lib/server/oj';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

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
          <BannerText>
            기본에 충실한
            <br />
            문제 풀이
          </BannerText>
        </Container>
      </Banner>
      <Container>
        <Wrapper>
          <Section>
            <h2>문제 풀이</h2>
            <Grid>
              {ojList.map(oj => (
                <Link key={oj.id} href={`/solutions/${oj.id}`}>
                  <IconButton src={`/images/oj/${oj.id}.png`} text={oj.name} />
                </Link>
              ))}
            </Grid>
          </Section>
        </Wrapper>
      </Container>
    </>
  );
}
