import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import esbuild from 'vite-plugin-esbuild'; 

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Update if you use custom aliases
    },
  },
  build: {
    rollupOptions: {
      external: [
        'react-toastify',
        'react-toastify/dist/ReactToastify.css', // Exclude the CSS file
        'swiper/react', // If you need to externalize this package explicitly
      ],
    },
  },
});
