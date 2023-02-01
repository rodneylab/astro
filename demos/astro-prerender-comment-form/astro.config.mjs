import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from '@astrojs/svelte';

// https://astro.build/config
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	adapter: cloudflare(),
	integrations: [svelte()],
	output: 'server',
	preview: {
		port: 3001,
	},
	server: {
		port: 3001,
	},
});
