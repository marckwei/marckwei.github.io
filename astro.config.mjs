import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://marckwei.github.io',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
