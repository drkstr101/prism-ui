import { defineConfig } from 'vite';
import viteRails from 'vite-plugin-rails';

export default defineConfig({
  plugins: [
    viteRails(),
  ],
  // Import from arbitrary paths.
  // resolve: { alias: {} },
})
