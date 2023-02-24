import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'astro/config';
import { imagetools } from 'vite-imagetools';

// https://astro.build/config
import preact from '@astrojs/preact';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	preview: { port: 3001 },
	server: { port: 3001 },
	vite: {
		plugins: [imagetools(), vanillaExtractPlugin()],
	},
	integrations: [svelte(), preact()],
});
