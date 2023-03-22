import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { defineConfig } from 'astro/config';
import preprocess from 'svelte-preprocess';

// https://astro.build/config
import svelte from '@astrojs/svelte';
import node from '@astrojs/node';

const scssImports = `
	@import 'bootstrap/scss/bootstrap';`;


// https://astro.build/config
export default defineConfig({
	integrations: [
		svelte({
			preprocess: [
				preprocess({
					scss: {
						renderSync: true,
						prependData: scssImports,
					},
					typescript: {
						tsconfigFile: './tsconfig.json',
					},
				}),
			],
		}),
	],
	output: 'server',
	adapter: node({
		mode: 'middleware',
	}),

	vite: {
		optimizeDeps: {
			exclude: ['@fastify/static'],
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: (content) => content,
				},
			},
		},
		resolve: {
			alias: {
				'@': join(dirname(fileURLToPath(import.meta.url)), 'src'),
				'~bootstrap': join(dirname(fileURLToPath(import.meta.url)), 'node_modules/bootstrap'),
			},
		},
	},
});
