import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration
export default defineConfig({
  root: 'src',  // Make sure Vite is using the `src` folder as the root
  plugins: [react()],
  build: {
    outDir: '../dist',  // Ensures that the build output goes to the root directory
    emptyOutDir: true,  // Clears out the previous build before generating a new one
  },
});
