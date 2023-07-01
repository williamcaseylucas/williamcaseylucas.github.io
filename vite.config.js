import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  jsx: {
    // Accept both .js and .jsx files 
    factory: 'React.createElement',
    fragment: 'React.Fragment',
  },
  base: "/",
  plugins: [react()],
  root: '.',
  build: {
    outDir: './dist'
  },
  esbuild: {
    loader: 'jsx',
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
})
