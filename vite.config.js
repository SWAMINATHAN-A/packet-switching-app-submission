import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const pagesBase = '/packet-switching-app-submission/'
const isVercel = process.env.VERCEL
const isPagesBuild = process.env.GITHUB_PAGES === 'true' || process.env.GITHUB_ACTIONS === 'true'
const base = isVercel ? '/' : (isPagesBuild ? pagesBase : '/')

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    strictPort: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation': ['framer-motion'],
          'icons': ['lucide-react'],
          'gsap': ['gsap'],
          'three': ['three'],
          'zdog': ['zdog'],
        },
      },
    },
  },
  preview: {
    port: 4173,
  },
})
