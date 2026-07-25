import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://k-arv.com',
  integrations: [sitemap()],
});
