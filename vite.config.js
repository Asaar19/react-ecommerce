import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'Build', // Specify the output directory
  },
  // You can add more configuration options here, for example:
  // server: {
  //   port: 3000, // Specify the development server port
  // },
  // optimizeDeps: {
  //   include: ['react', 'react-dom'], // Specify dependencies to optimize
  // },
  // proxy: {
  //   '/api': 'http://localhost:3001', // Proxy API requests to another server
  // },
  // More configuration options can be added as needed
})
