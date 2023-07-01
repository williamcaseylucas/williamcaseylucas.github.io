import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  jsx: {
    // Accept both .js and .jsx files
    factory: 'React.createElement',
    fragment: 'React.Fragment',
    // Other JSX options...
  },
  base: "/williamcaseylucas.github.io/",
  plugins: [react()],
  root: '.',
  build: {
    outDir: './build'
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  esbuild: {
    loader: 'jsx',
  }
})
