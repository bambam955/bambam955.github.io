import globals from "globals";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.{js,ts,md,mdx}"],
    parser: "@typescript-eslint/parser", // Use TypeScript parser
    plugins: [
      "@typescript-eslint", // TypeScript plugin
    ],
    extends: [
      "eslint:recommended", // Base recommended ESLint rules
      "plugin:@typescript-eslint:recommended", // Additional recommended TypeScript rules
    ],
    rules: {
      // Customize other rules here if needed
    }
  }
];