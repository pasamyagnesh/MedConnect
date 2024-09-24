import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Update if you use custom aliases
    },
  },
  build: {
    rollupOptions: {
      external: ['react-router-dom'], 
      external: ['react-toastify'],
      external: [
        'react-toastify/dist/ReactToastify.css'  // Exclude the CSS file
      ],
      external: ['swiper/react', 'swiper/swiper-bundle.min.css'],// If you need to externalize this package explicitly
    },
  },
});
