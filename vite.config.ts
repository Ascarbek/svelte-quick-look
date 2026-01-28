import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  server: {
    port: 5483,
  },
  plugins: [sveltekit()],
};

export default config;
