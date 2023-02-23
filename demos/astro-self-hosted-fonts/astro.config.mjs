import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [],
	preview: { port: 3001 },
	server: { port: 3001 },
	vite: {
		ssr: {
			external: ['svgo'],
		},
	},
});
