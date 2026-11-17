import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://paterson-project.co.kr',
  integrations: [sitemap()],
});
