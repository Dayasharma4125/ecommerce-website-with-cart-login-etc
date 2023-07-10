import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/cart":"http://127.0.0.1:5001/",
      "/login":"http://127.0.0.1:5001/",
    }
  },
  base:"/webapp1/",
  plugins: [react()],
})
