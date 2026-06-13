// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

// LightningCSS Targets: (major << 16) | (minor << 8) | patch
// Tells LightningCSS which browsers to target for automatic vendor prefixing.
// Safari < 18 needs -webkit-backdrop-filter; setting safari: 16 makes LightningCSS add it.
const lightningcssTargets = {
  chrome: 100 << 16,
  edge: 100 << 16,
  firefox: 103 << 16,
  safari: 16 << 16,
  ios_saf: 16 << 16,
};

export default defineConfig({
  site: "https://axunion.github.io",
  base: "/website-samples/",
  vite: {
    css: {
      transformer: "lightningcss",
      lightningcss: { targets: lightningcssTargets },
    },
  },

  integrations: [icon()],
});
