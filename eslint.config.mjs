import eslintAstroPlugin from 'eslint-plugin-astro';
import typescriptEslint from 'typescript-eslint';
import prettierPlugin from 'prettier';

import eslintJs from '@eslint/js';

export default [
  ...eslintAstroPlugin.configs.recommended,
  {
    ...eslintJs.configs.recommended, // Base recommended ESLint rules
    ...typescriptEslint.configs.recommended, // Additional recommended TypeScript rules
    files: ['**/*.{js,ts,md,mdx}'],
    languageOptions: {
      parser: '@typescript-eslint/parser', // Use TypeScript parser
    },
    plugins: {
      '@typescript-eslint': typescriptEslint, // TypeScript plugin
      prettier: prettierPlugin, // Prettier plugin
    },
    extends: [
      'plugin:prettier/recommended', // Add Prettier rules (they won't conflict)
    ],
    rules: {
      // Customize other rules here if needed
      'prettier/prettier': ['error'], // Enforce Prettier strictly
    },
  },
];
