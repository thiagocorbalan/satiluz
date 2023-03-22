module.exports = {
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	env: {
		es2022: true,
		node: true,
		browser: true,
	},
	ignorePatterns: ['dist'],
	parserOptions: {
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	root: true,
	settings: {
		'svelte3/typescript': require('typescript'),
	},
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				project: './tsconfig.json',
				extraFileExtensions: ['.astro', '.svelte'],
			},
			extends: [
				'plugin:astro/recommended',
				'plugin:astro/jsx-a11y-recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
		},
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				ecmaVersion: 2020,
				sourceType: 'module',
				tsconfigRootDir: __dirname,
				project: ['./tsconfig.json'],
				extraFileExtensions: ['.astro', '.svelte'],
			},
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
		},
		{
			files: ['*.ts'],
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module',
				tsconfigRootDir: __dirname,
				project: ['./tsconfig.json'],
				extraFileExtensions: ['.astro', '.svelte'],
			},
		},
	],
};