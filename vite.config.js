import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/cart": "https://loginappbackend-hs2o.onrender.com",
      // "/login":"https://loginappbackend-hs2o.onrender.com",
      "/register": "https://loginappbackend-hs2o.onrender.com",
      "/login": {
        target: 'https://loginappbackend-hs2o.onrender.com',
        changeOrigin: true,
        secure: false,
        ws: true,
      }
    }
  },
  base: "/webapp1/",
  plugins: [react()],
})
