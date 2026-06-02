// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat';
import prettier from 'eslint-config-prettier';

export default createConfigForNuxt({
  features: {
    tooling: true,
    stylistic: false,
  },
}).append(
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
      'no-debugger': 'warn',
    },
  },
  prettier
);
