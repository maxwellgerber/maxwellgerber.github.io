import createMDX from '@next/mdx';
import rehypeSlug from 'rehype-slug';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'export',
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [rehypeSlug],
  },

  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
