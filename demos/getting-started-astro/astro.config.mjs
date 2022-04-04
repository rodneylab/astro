import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  sitemap: true,
  site: 'https://example.com/',
  integrations: [react(), svelte()],
  vite: {
    define: {
      'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
    },
    plugins: [],
  },
});
