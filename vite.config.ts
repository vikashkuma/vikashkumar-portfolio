import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression(),
    imagetools(),
  ],
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          icons: ['@heroicons/react'],
        },
      },
    },
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
})
