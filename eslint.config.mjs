import eslintAstroPlugin from 'eslint-plugin-astro';
import typescriptEslintPlugin from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';

import eslintJs from '@eslint/js';

export default [
  ...eslintAstroPlugin.configs.recommended,
  {
    ...eslintJs.configs.recommended, // Base recommended ESLint rules
    ...typescriptEslintPlugin.configs.recommended, // Additional recommended TypeScript rules
    ...prettierPlugin.configs.recommended, // Additional Prettier rules (they won't conflict)
    files: ['**/*.{js,ts,md,mdx}'],
    languageOptions: {
      parser: '@typescript-eslint/parser', // Use TypeScript parser
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin, // TypeScript plugin
      prettier: prettierPlugin, // Prettier plugin
    },

    // Customize other rules here if needed
    rules: {
      'prettier/prettier': ['error'], // Enforce Prettier strictly
    },
  },
];
