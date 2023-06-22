import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path'

// https://vitejs.dev/config/
/* export default defineConfig({
  plugins: [react()],
  base: '/React_test',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
 */

export default {
  plugins: [
    reactRefresh(),
  ],
  base: '/React_test',
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  optimizeDeps: {
    include: ['react-router-dom'],
  },
};