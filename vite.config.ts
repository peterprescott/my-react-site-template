import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['gray-matter']
  },
  assetsInclude: ['**/*.md'],
  server: {
    fs: {
      // Allow serving files from the project root
      allow: ['..']
    }
  }
});
