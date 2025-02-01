import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Add base URL configuration for production
  base: '/',
  // Configure build options
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: true,
  },
});
