import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  {
    ignores: ['.idea/**', '.next/**', 'node_modules/**', '.claude/**', 'CLAUDE.md', 'out/**'],
  },
  ...compat.config({
    extends: ['next', 'next/typescript', 'prettier'],
  }),
];

export default eslintConfig;
