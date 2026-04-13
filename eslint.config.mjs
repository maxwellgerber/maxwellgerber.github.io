import nextConfig from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier';

const eslintConfig = [
  {
    ignores: ['.idea/**', '.next/**', 'node_modules/**', '.claude/**', 'CLAUDE.md', 'out/**'],
  },
  ...nextConfig,
  prettierConfig,
];

export default eslintConfig;
