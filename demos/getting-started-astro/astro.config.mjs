import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  buildOptions: {
    sitemap: true,
    site: 'https://astro.build/',
  },
  // Comment out "renderers: []" to enable Astro's default component support.
  integrations: [react(), svelte()],
  vite: {
    define: {
      'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
    },
    plugins: [],
  },
});
