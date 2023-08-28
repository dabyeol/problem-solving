'use client';

import Button from '@/components/button';
import { Section, Wrapper } from '@/lib/client/style';
import styled from '@emotion/styled';
import Image from 'next/image';

const Banner = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #eeeeee;
`;

const Subtitle = styled.h2`
  font-size: var(--text-2xl);
`;

const Backdrop = styled(Image)`
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: var(--text-4xl);
  font-weight: 700;
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const Languages = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Language = styled(Image)`
  border-radius: 100%;
`;

export default function BOJ() {
  return (
    <>
      <Banner>
        <Backdrop src="/images/backdrop.jpg" alt="Backdrop" priority fill />
        <Wrapper>
          <Subtitle>1000</Subtitle>
        </Wrapper>
      </Banner>
      <Wrapper>
        <Section>
          <Title>A+B</Title>
          <Tags>
            <Button>수학</Button>
            <Button>구현</Button>
            <Button>사칙연산</Button>
          </Tags>
        </Section>
      </Wrapper>
      <Wrapper>
        <Section>
          <h2>문제</h2>
          <p>
            두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
            $n \choose m$의 끝자리 $0$의 개수를 출력하는 프로그램을 작성하시오.
          </p>
        </Section>
        <Section>
          <h2>입력</h2>
          <p>{'첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)'} </p>
        </Section>
        <Section>
          <h2>출력</h2>
          <p>
            두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
          </p>
        </Section>
      </Wrapper>
      <Wrapper>
        <Section>
          <h1>풀이</h1>
          <Languages>
            <Language
              src="/images/languages/c.png"
              width={32}
              height={32}
              alt="C"
            />
            <Language
              src="/images/languages/cc.png"
              width={32}
              height={32}
              alt="C++"
            />
            <Language
              src="/images/languages/js.png"
              width={32}
              height={32}
              alt="JavaScript"
            />
          </Languages>
          <h2>이론</h2>
          <p>어쩌구 저쩌구</p>
          <h2>코드</h2>
          <p>
            두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
          </p>
        </Section>
      </Wrapper>
    </>
  );
}

// generate dynamic params
// export async function generateStaticParams() {
//   // return getAllPosts();
// }
