import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use 'variables.scss';",
          loadPaths: ["src/styles"],
        },
      },
    },
  },
  integrations: [
    react({ include: ["**/react/*"] }),
    svelte({ include: ["**/svelte/*"] }),
  ],
});
