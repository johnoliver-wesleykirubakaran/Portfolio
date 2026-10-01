import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Deployment base path — the single source of truth for the public base URL.
 *
 * GitHub Pages serves this project from `https://<user>.github.io/Portfolio/`,
 * so every asset URL needs the `/Portfolio/` prefix. Change this one constant
 * if the repository is renamed, or to `'/'` when serving from a custom domain
 * or from the local dev server root.
 */
const BASE_PATH = '/Portfolio/';

export default defineConfig({
  base: BASE_PATH,
  plugins: [react()],
  build: {
    // Matches the `target` in tsconfig.app.json so browsers never receive
    // syntax that older devices cannot parse.
    target: 'es2020',
  },
});