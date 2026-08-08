// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Required for sitemap.xml URLs and BaseLayout's canonical/OG tags to be
  // absolute — without it Astro falls back to relative URLs, which Google
  // Search Console and social share previews both reject.
  site: 'https://najahai.com.au',
  integrations: [sitemap()],
});
