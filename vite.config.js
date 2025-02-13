import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // For "modern-compiler" (recommended with sass-embedded)
        additionalData: `@use "sass:math";`, // Example: Add global variables or mixins
        api: 'modern-compiler', 
      },
    },
  },
})
