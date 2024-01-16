import Banner from '@/components/banner';
import { Container, Prose } from '@/lib/client/style';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '소개',
};

export default function Page() {
  return (
    <>
      <Banner>소개</Banner>
      <Container>
        <Prose>
          <h3>준비중</h3>
        </Prose>
      </Container>
    </>
  );
}
