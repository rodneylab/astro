import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  buildOptions: {
    sitemap: true,
    site: 'https://astro.build/',
  },
  // Comment out "renderers: []" to enable Astro's default component support.
  renderers: ['@astrojs/renderer-react', '@astrojs/renderer-svelte'],
  vite: {
    define: {
      'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
    },
    plugins: [],
  },
});
