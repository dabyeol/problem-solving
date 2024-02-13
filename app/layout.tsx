import Layout from '@/components/layout';
import 'katex/dist/katex.min.css';
import type { Metadata, Viewport } from 'next';
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
import 'react-loading-skeleton/dist/skeleton.css';
import './globals.css';
import './normalize.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ps.dabyeol.com'),
  title: {
    template: '%s | Problem Solving',
    default: 'Problem Solving',
  },
  description: '기본에 충실한 문제 풀이',
  openGraph: {
    title: 'Problem Solving',
    description: '기본에 충실한 문제 풀이',
    url: 'https://ps.dabyeol.com',
    siteName: 'Problem Solving',
    images: [{ url: '/images/banner.jpg' }],
    locale: 'ko_KR',
    type: 'website',
  },
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
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
