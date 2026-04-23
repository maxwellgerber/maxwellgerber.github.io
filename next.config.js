import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'export',
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      'rehype-slug',
      [
        '@vahor/rehype-d2',
        {
          strategy: 'inline-svg',
          defaultMetadata: { default: { layout: 'dagre', sketch: true, pad: 0 } },
        },
      ],
    ],
  },

  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
