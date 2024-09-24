// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       external: ['react-router-dom']
//     }
//   }
// });

// vite.config.js
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
       external: ['react-toastify'],// If you need to externalize this package explicitly
    },
  },
});
