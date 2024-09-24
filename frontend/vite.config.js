import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Update if you use custom aliases
      // 'swiper': 'node_modules/swiper/react',
    },
  },
  build: {
    rollupOptions: {
      external: [
        'react-toastify',
        'react-toastify/dist/ReactToastify.css', // Exclude the CSS file
         // If you need to externalize this package explicitly
      ],
    },
  },
});
