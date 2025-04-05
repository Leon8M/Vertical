import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Anchored-Heights/', 
  build: {
    outDir: '../dist',     
    emptyOutDir: true,         
    sourcemap: false          
  }
});