import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/cart":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiZGF5YSIsInBob25lbm8iOiJkYXlhIiwidXNlcmlkIjoiNjRhYTIzY2E5YzBiYTA4ZGU0ZDdkMTEyIn0sImlhdCI6MTY4OTIxMTkxNSwiZXhwIjoxNjkxMDExOTE1fQ.fkmqUjJd-Ir9qe-hO_rthpm0kchgkb2abhWEa1XTJ54",
      "/login":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiZGF5YSIsInBob25lbm8iOiJkYXlhIiwidXNlcmlkIjoiNjRhYTIzY2E5YzBiYTA4ZGU0ZDdkMTEyIn0sImlhdCI6MTY4OTIxMTkxNSwiZXhwIjoxNjkxMDExOTE1fQ.fkmqUjJd-Ir9qe-hO_rthpm0kchgkb2abhWEa1XTJ54",
      "/register":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiZGF5YSIsInBob25lbm8iOiJkYXlhIiwidXNlcmlkIjoiNjRhYTIzY2E5YzBiYTA4ZGU0ZDdkMTEyIn0sImlhdCI6MTY4OTIxMTkxNSwiZXhwIjoxNjkxMDExOTE1fQ.fkmqUjJd-Ir9qe-hO_rthpm0kchgkb2abhWEa1XTJ54"
    }
  },
  base:"/webapp1/",
  plugins: [react()],
})
