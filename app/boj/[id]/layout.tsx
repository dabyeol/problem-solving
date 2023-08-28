import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1000: A+B',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
