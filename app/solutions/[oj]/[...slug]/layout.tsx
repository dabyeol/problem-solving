import { getQuestionData } from '@/lib/server/post';

interface Props {
  params: {
    oj: string;
    slug: string[];
  };
}

export async function generateMetadata({ params }: Props) {
  const path = decodeURIComponent([params.oj, ...params.slug].join('/'));
  const data = getQuestionData(path);

  return { title: `${data.title} (${data.subtitle})` };
}

export default function SolutionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
