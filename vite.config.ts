import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.',
  server: {
    port: 3000,
    host: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('.', import.meta.url)),
      '~backend/client': resolve('./client'),
      '~backend': resolve('../backend'),
    },
  },
  plugins: [
    tailwindcss(),
    react(),
  ],
  mode: "development",
  build: {
    minify: false,
    outDir: 'dist',
    sourcemap: true
  },
  css: {
    devSourcemap: true
  }
})
