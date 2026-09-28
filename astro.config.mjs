import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://turnkey.pt',
  vite: {
    plugins: [tailwindcss()],
  },
});