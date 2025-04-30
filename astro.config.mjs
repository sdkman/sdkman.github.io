// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import expressiveCode from 'astro-expressive-code';
import icon from 'astro-icon';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sdkman.io',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    expressiveCode({
      defaultProps: { wrap: true },
    }),
    mdx(),
    icon(),
    sitemap(),
  ],
});
