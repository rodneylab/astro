import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	inlineStylesheets: 'auto',
	preview: {
		port: 3001,
	},
	server: {
		port: 3001,
	},
});
