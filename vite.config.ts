import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/gsap')) return 'gsap'
          if (id.includes('node_modules/react-router') || id.includes('node_modules/react-router-dom')) {
            return 'router'
          }
          if (
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/react/') ||
            id.includes('node_modules/scheduler/')
          ) {
            return 'react-vendor'
          }
        },
      },
    },
  },
  server: {
    host: true,
    allowedHosts: ['noppin-systems-1.onrender.com'],
    port: 3000,
    strictPort: false,
    open: false,
  },
  preview: {
    host: true,
    allowedHosts: ['noppin-systems-1.onrender.com'],
    port: 3000,
    strictPort: false,
  },
})
