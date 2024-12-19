import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
// import perfectionist from "eslint-plugin-perfectionist";
import prettier from 'eslint-plugin-prettier';
import reactRefresh from 'eslint-plugin-react-refresh';
import jest from 'eslint-plugin-jest';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      '**/dist',
      '**/*.js',
      '**/node_modules',
      'tests/**/*',
      '**/alias.ts',
      '**/*.test.ts',
      '**/*.test.tsx',
      '**/*.config.ts',
      '**/*.d.ts',
      '**/codegen.ts',
      '**/*.cjs',
      '**/*.schemas.tsx',
      '**/eslint.config.mjs',
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      // "plugin:perfectionist/recommended-natural",
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:jsx-a11y/recommended',
      'prettier',
    ),
  ),
  {
    plugins: {
      // perfectionist: fixupPluginRules(perfectionist),
      prettier,
      'react-refresh': reactRefresh,
      jest,
      'unused-imports': unusedImports,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },

    settings: {
      'import/ignore': ['node_modules'],

      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },

      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx'],
        },

        typescript: {
          project: './tsconfig.json',
        },
      },

      react: {
        version: 'detect',
      },
    },

    rules: {
      'prettier/prettier': ['error'],
      'react/react-in-jsx-scope': 'off',
      'react/destructuring-assignment': 'error',

      'react/function-component-definition': [
        'warn',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],

      'react/hook-use-state': 'error',
      'react/jsx-fragments': ['error', 'syntax'],

      'react/jsx-handler-names': [
        'off',
        {
          checkInlineFunction: true,
        },
      ],

      'react/jsx-no-leaked-render': 'error',
      'react/button-has-type': 'error',
      'react/no-array-index-key': 'off',
      'react/no-unstable-nested-components': 'error',
      'react/no-unused-prop-types': 'error',
      'react/self-closing-comp': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',

      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],

      'react/jsx-no-script-url': [
        'error',
        [
          {
            name: 'Link',
            props: ['to'],
          },
        ],
      ],

      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/consistent-type-definitions': 'off',

      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
        },
      ],

      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/method-signature-style': 'error',
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/no-unnecessary-type-arguments': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unnecessary-type-constraint': 'error',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'warn',

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-useless-empty-export': 'error',

      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/restrict-template-expressions': 'warn',
      'unused-imports/no-unused-imports': 'error',
      'array-callback-return': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'default-case-last': 'error',
      'default-param-last': 'error',
      'dot-notation': 'error',
      'generator-star-spacing': 'error',
      'import/newline-after-import': 'error',
      'import/no-mutable-exports': 'error',
      'max-lines': ['warn', 500],
      'max-params': ['warn', 5],
      'multiline-comment-style': ['error', 'separate-lines'],
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],

      'no-else-return': [
        'error',
        {
          allowElseIf: false,
        },
      ],

      'no-lonely-if': ['error'],
      'no-loop-func': 'error',
      'no-nested-ternary': ['error'],
      'no-new-func': 'error',
      'no-new-object': 'error',
      'no-param-reassign': 'error',

      'no-unneeded-ternary': ['error'],

      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],

      'object-shorthand': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-destructuring': ['error'],
      'prefer-object-spread': 'error',
      'prefer-template': 'error',
      'comma-dangle': [1, 'always-multiline'],
      'no-shadow': 'off',
      'no-empty-function': 1,
      'no-use-before-define': 0,
      'no-unsafe-optional-chaining': 0,
      'no-underscore-dangle': 0,

      'no-plusplus': [
        2,
        {
          allowForLoopAfterthoughts: true,
        },
      ],

      'func-names': ['error', 'never'],
    },
  },
  ...compat.extends('plugin:jest/all').map((config) => ({
    ...config,
    files: ['**/src'],
  })),
];
