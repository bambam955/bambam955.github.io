import globals from "globals";
import tseslint from "typescript-eslint";
import eslintConfigPrettierRecommended from "eslint-config-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  ...tseslint.configs.recommended,
  eslintConfigPrettierRecommended,
];
