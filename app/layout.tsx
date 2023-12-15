import Layout from '@/components/layout';
import type { Metadata, Viewport } from 'next';
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

export const viewport: Viewport = {
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: '#fff',
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#222',
    },
  ],
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}