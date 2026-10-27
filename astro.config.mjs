// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // GitHub Pages: https://aezzeroualy.github.io/portfolio_abdelalim/
  // With a custom domain (or a repo named aezzeroualy.github.io), set `site` to that URL and remove `base`.
  site: 'https://aezzeroualy.github.io',
  base: '/portfolio_abdelalim',
  vite: {
    plugins: [tailwindcss()],
  },
});
