import i18n from 'astro-i18n';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://withastroastroawrhjw-0wep--3000.local-credentialless.webcontainer.io',
  integrations: [i18n(), mdx(), sitemap(), vue()],
});
