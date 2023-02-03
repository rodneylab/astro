import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from '@astrojs/svelte';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
	integrations: [svelte()],
	output: 'server',
	preview: { port: 3001 },
	server: { port: 3001 },
	adapter: netlify(),
});
