import Layout from '@/components/layout';
import type { Metadata } from 'next';
import 'react-loading-skeleton/dist/skeleton.css';
import './globals.css';
import './normalize.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Problem Solving',
    default: 'Problem Solving',
  },
  description: '기본에 충실한 문제 풀이',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
