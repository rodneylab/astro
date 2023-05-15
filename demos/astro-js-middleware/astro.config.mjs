import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	experimental: {
		inlineStylesheets: 'auto',
		middleware: true,
	},
	preview: {
		port: 3001,
	},
	server: {
		port: 3001,
	},
	output: 'server',
	adapter: cloudflare(),
});
