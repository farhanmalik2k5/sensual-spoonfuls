import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Target modern browsers for smaller bundles
    target: 'es2015',
    // Chunk size warning threshold
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split vendor libraries into a separate chunk for better browser caching
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  server: {
    // In dev: redirect all unknown routes to index.html (mirrors production SPA behavior)
    historyApiFallback: true,
  },
})
