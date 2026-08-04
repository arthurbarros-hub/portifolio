import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import tailwindcss from 'eslint-plugin-tailwindcss';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    plugins: { tailwindcss },
    rules: {
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/enforces-shorthand': 'warn',
      'tailwindcss/migration-from-tailwind-2': 'off',
    },
    settings: {
      tailwindcss: {
        callees: ['cn'],
        config: 'tailwind.config.ts',
      },
    },
  },
];
