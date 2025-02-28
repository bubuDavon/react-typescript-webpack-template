import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import typescriptParser from '@typescript-eslint/parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';

const ignorePaths = ['.vscode', 'node_modules', 'webpack'];
export default [
  // js code
  js.configs.recommended,
  // code style
  prettier,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: { ...globals.browser },
    },
  },
  // tsx code
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: { modules: true },
        ecmaVersion: 'latest',
        project: './tsconfig.json',
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': hooksPlugin,
      '@typescript-eslint': typescriptEslint,
      'react-compiler': reactCompiler,
    },

    rules: {
      ...typescriptEslint.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...hooksPlugin.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      'react-compiler/react-compiler': 'error',
    },
  },
  // custom rules
  {
    rules: {
      'react-hooks/exhaustive-deps': 0,
    },
  },
  // ignore paths
  {
    ignores: ignorePaths,
  },
];
