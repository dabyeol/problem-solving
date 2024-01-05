import createMDX from '@next/mdx';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  output: 'export',
  images: {
    unoptimized: true,
  },
};

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: {
    dark: 'github-dark',
    light: 'github-light',
  },
  keepBackground: false,
  defaultLang: 'plaintext',
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkMath, remarkFrontmatter],
    rehypePlugins: [rehypeKatex, [rehypePrettyCode, options]],
  },
});

export default withMDX(nextConfig);
