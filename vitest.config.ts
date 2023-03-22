import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

export default defineConfig({
	root: 'src',
	plugins: [
		svelte({
			hot: !process.env.VITEST,
			preprocess: [
				sveltePreprocess({
					scss: {
						renderSync: true,
					},
					typescript: {
						tsconfigFile: './tsconfig.json',
					},
				}),
			],
		}),
	],
	test: {
		include: ['**/*.test.{js,mjs,cjs,ts,mts,cts}'],
		globals: true,
		environment: 'jsdom',
		setupFiles: 'test.globals.ts',
	},
	resolve: {
		alias: {
			'@': join(dirname(fileURLToPath(import.meta.url)), 'src'),
		},
	},
});
