import { getQuestionData } from '@/lib/server/post';

interface Props {
  params: {
    oj: string;
    slug: string[];
  };
}

export async function generateMetadata({ params }: Props) {
  const data = getQuestionData([params.oj, ...params.slug].join('/'));

  return { title: `${data.title} (${data.subtitle})` };
}

export default function SolutionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
