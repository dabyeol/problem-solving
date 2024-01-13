import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import rehypePrettyCode, { Options } from 'rehype-pretty-code';

interface Props extends MDXRemoteProps {}

const options: Options = {
  theme: {
    dark: 'github-dark',
    light: 'github-light',
  },
  keepBackground: false,
  defaultLang: 'plaintext',
};

export default function CodeMDX(props: Props) {
  return (
    <MDXRemote
      {...props}
      options={{
        mdxOptions: { rehypePlugins: [[rehypePrettyCode as any, options]] },
      }}
    />
  );
}
