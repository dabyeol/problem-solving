import { ojList } from '@/lib/server/oj';

interface Props {
  params: {
    oj: string;
  };
}

export async function generateMetadata({ params }: Props) {
  return { title: ojList.find(oj => oj.id === params.oj)?.name };
}

export default function OJLayout({ children }: { children: React.ReactNode }) {
  return children;
}
