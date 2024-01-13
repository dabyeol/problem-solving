import { Prose, Section } from '@/lib/client/style';
import { getSolution, getSolutionLanguages } from '@/lib/server/post';
import Link from 'next/link';
import { Language, Languages } from './style';

interface Props {
  oj: string;
  number: string;
  language?: string;
}

export default function SolutionTemplate({ oj, number, language }: Props) {
  const languages = getSolutionLanguages(oj, number);
  const Solution = language && getSolution(oj, number, language);

  return (
    <Section>
      <h1>풀이</h1>
      {languages.length ? (
        <>
          <Languages>
            {languages.map(l => (
              <Link
                key={l}
                href={`/solutions/${oj}/${number}/${l}
              `}
                scroll={false}
                replace
              >
                <Language
                  src={`/images/languages/${l}.png`}
                  width={32}
                  height={32}
                  alt={l}
                  priority
                  disabled={l !== language}
                />
              </Link>
            ))}
          </Languages>
          <Prose>{Solution ? <Solution /> : <p>언어를 선택해주세요.</p>}</Prose>
        </>
      ) : (
        <p>아직 풀이가 없어요.</p>
      )}
    </Section>
  );
}