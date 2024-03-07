import Banner from '@/components/banner';
import IconButton from '@/components/icon-button';
import { Container, Grid, Section } from '@/lib/client/style';
import { ojs } from '@/lib/server/oj';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Banner>
        기본에 충실한
        <br />
        문제 풀이
      </Banner>
      <Container>
        <Section>
          <h2>문제 풀이</h2>
          <Grid>
            {ojs.map(oj => (
              <Link key={oj.id} href={`/solutions/${oj.id}`}>
                <IconButton src={`/images/oj/${oj.id}.png`} text={oj.name} />
              </Link>
            ))}
          </Grid>
        </Section>
      </Container>
    </>
  );
}
