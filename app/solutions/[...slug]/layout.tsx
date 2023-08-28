import matter from 'gray-matter';

interface Props {
  params: { slug: string[] };
}

export async function generateMetadata({ params }: Props) {
  const { data } = matter.read(
    `posts/solutions/${params.slug.slice(0, -1).join('/')}/question.mdx`
  );

  return { title: `${data.title} (${data.subtitle})` };
}

export default function SolutionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
