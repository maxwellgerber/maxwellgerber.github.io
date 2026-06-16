import createMDX from '@next/mdx';
import { fileURLToPath } from 'node:url';

const krokiPlugin = fileURLToPath(new URL('./lib/rehype-kroki.mjs', import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'export',
};

const withMDX = createMDX({
  options: {
    rehypePlugins: ['rehype-slug', [krokiPlugin, { endpoint: process.env.KROKI_URL ?? 'http://localhost:8000' }]],
  },

  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
