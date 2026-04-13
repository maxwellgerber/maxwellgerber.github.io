import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'export',
};

const withMDX = createMDX({
  options: {
    rehypePlugins: ['rehype-slug'],
  },

  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
