// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://example.com', // TODO: replace with your domain
  vite: {
    plugins: [tailwindcss()],
  },
});
