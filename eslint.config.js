import js from '@eslint/js';
import markdown from '@eslint/markdown';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  // Base JS configuration
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
  },

  // TypeScript configuration
  tseslint.configs.recommended,

  // Test configuration
  {
    files: ['**/_tests_/*', '**/*.{test,spec}.{js,ts}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },

  // Markdown files (for linting code blocks)
  markdown.configs.recommended,

  // Prettier integration
  prettierRecommended,
]);
