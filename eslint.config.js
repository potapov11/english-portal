import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import parserTypescript from '@typescript-eslint/parser';

export default [
	{ ignores: ['dist'] },
	{
		files: ['**/*.{ts,tsx}'], // Изменяем расширения на ts/tsx
		languageOptions: {
			ecmaVersion: 'latest',
			globals: globals.browser,
			parser: parserTypescript, // Используем @typescript-eslint/parser
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module',
				project: './eslint.tsconfig.json',
			},
		},
		settings: { react: { version: '18.3' } },
		plugins: {
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'@typescript-eslint': typescriptEslint, // Добавляем плагин для TypeScript
		},
		rules: {
			...js.configs.recommended.rules,
			...react.configs.recommended.rules,
			...react.configs['jsx-runtime'].rules,
			...reactHooks.configs.recommended.rules,
			...typescriptEslint.configs.recommended.rules, // Добавляем рекомендуемые правила TypeScript

			// Отключаем или настраиваем правила, которые могут конфликтовать с TypeScript
			'react/jsx-no-target-blank': 'off',
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'no-console': ['error', { allow: ['warn', 'error'] }],
			'react/prop-types': 'off', // TypeScript уже проверяет типы пропсов
			'no-alert': 'warn',
			'react/jsx-key': 'error',
			'react/no-set-state': 'warn',
			'react/default-props-match-prop-types': 'warn',
			'arrow-body-style': ['error', 'as-needed'],
			'react/self-closing-comp': ['error', { component: true, html: true }],

			// Правила для TypeScript
			'@typescript-eslint/explicit-module-boundary-types': 'warn', // Требует явное указание типов
			'@typescript-eslint/no-explicit-any': 'warn', // Ограничивает использование any
			'@typescript-eslint/no-unused-vars': 'error', // Проверяет неиспользуемые переменные
			'@typescript-eslint/no-empty-function': 'warn', // Предупреждает о пустых функциях
		},
	},
];
