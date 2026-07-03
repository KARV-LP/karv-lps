import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://karv-platform.netlify.app',
  integrations: [sitemap()],
});
