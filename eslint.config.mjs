import globals from 'globals';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // {
  ...eslintPluginAstro.configs.recommended,
  // files: ['**/*.astro'],
  // },
  {
    files: ['**/*.{js,ts,md,mdx}'],
    parser: '@typescript-eslint/parser', // Use TypeScript parser
    plugins: [
      '@typescript-eslint', // TypeScript plugin
      'prettier', // Prettier plugin
    ],
    extends: [
      'eslint:recommended', // Base recommended ESLint rules
      'plugin:@typescript-eslint:recommended', // Additional recommended TypeScript rules
      'plugin:prettier/recommended', // Add Prettier rules (they won't conflict)
    ],
    rules: {
      // Customize other rules here if needed
      'prettier/prettier': ['error'], // Enforce Prettier strictly
    },
  },
];
