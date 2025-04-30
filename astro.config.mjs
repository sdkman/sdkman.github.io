// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import expressiveCode from 'astro-expressive-code';

import mdx from '@astrojs/mdx';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    expressiveCode({
      defaultProps: { wrap: true },
      shiki: {
        bundledLangs: ['shell', 'json'],
      },
    }),
    mdx(),
    icon(),
  ],
});
