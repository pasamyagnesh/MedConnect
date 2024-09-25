import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Custom alias for easier imports
    },
  },
  build: {
    outDir: 'dist', // Specify the output directory
    rollupOptions: {
      // No need to exclude react-toastify if you want it to be included in the bundle
      // external: [
      //   'react-toastify', // Exclude from bundle
      //   'react-toastify/dist/ReactToastify.css', // Exclude CSS file as well
      // ],
    },
    // Ensure the entry point is correct for Vite
    entry: '/src/main.jsx',
  },
  server: {
    port: 3000, // Optional: specify server port for local development
  },
  base: '/', // Ensure the base path is correct for Vercel
});
