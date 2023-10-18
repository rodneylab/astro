import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	middleware: true,
	output: 'server',
	adapter: cloudflare(),
});
