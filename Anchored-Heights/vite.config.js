import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/*',
          dest: ''
        }
      ]
    })
  ],
  base: '/Anchored-Heights/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});