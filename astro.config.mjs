// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

export default defineConfig({
  site: "https://axunion.github.io",
  base: "website-samples",
  vite: {
    css: {
      transformer: "lightningcss",
    },
  },

  integrations: [icon()],
});
