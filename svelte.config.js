// svelte.config.js
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
  preprocess: vitePreprocess(),
  typescript: true, 
  kit: {
    adapter: adapter(),

    // Specify the files that define your routes
    files: {
      routes: 'src/routes', 
    },

    // Other configurations...
  },
};
