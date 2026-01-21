import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    sveltePreprocess({
      postcss: true,
    }),
  ],

  kit: {
    files: {
      appTemplate: 'src/app/entrypoint/app.html',
      errorTemplate: 'src/app/entrypoint/error.html',
      routes: 'src/app/routes',
      hooks: {
        server: 'src/app/entrypoint/hooks.server',
      },
    },

    adapter: adapter({
      fallback: 'index.html',
    }),

    alias: {
      '$pages/*': 'src/pages/*',
      '$widgets/*': 'src/widgets/*',
      '$features/*': 'src/features/*',
      '$entities/*': 'src/entities/*',
      '$shared/*': 'src/shared/*',
    },
  },
};

export default config;
